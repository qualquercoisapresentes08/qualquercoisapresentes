// Cloudflare Pages Function: /api/sugestoes
// Executa nos servidores da Cloudflare protegendo a chave secreta de ambiente

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const data = await request.json();

    const apiKey = env?.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ success: false, fallback: true, message: "GEMINI_API_KEY_NOT_SET" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const { relation, age, budget, tags, customDetail } = data;

    const prompt = `Você é o motor de recomendação inteligente do QualquerCoisa (site de presentes).
Sua tarefa é recomendar exatamente 4 ideias de presentes altamente assertivas e criativas para o perfil abaixo:

- Quem vai receber: ${relation || "Pessoa querida"}
- Faixa Etária: ${age || "Adulto"}
- Orçamento Máximo: Até R$ ${budget || "150"}
- Interesses / Hobbies: ${tags && tags.length > 0 ? tags.join(", ") : "Geral"}
- Detalhes Especiais / Manias: ${customDetail || "Nenhum detalhe extra"}

Instruções obrigatórias:
1. Cada presente deve ser um produto real e fácil de encontrar na Amazon Brasil.
2. O preço deve caber dentro do orçamento estipulado (R$ ${budget}).
3. A justificativa (reason) deve ser persuasiva, carinhosa e explicar claramente por que a pessoa vai amar.
4. O campo "searchQuery" deve ser um termo de busca limpo e direto para encontrar o produto na Amazon (ex: "prensa francesa vidro cafe", "abridor vinho eletrico", "fone bluetooth tws").

Responda APENAS um array JSON válido no formato:
[
  {
    "title": "Nome atraente do presente",
    "category": "Categoria (ex: Café, Churrasco, Tecnologia)",
    "priceMin": 60,
    "priceMax": 120,
    "reason": "Por que esta pessoa vai amar este presente...",
    "searchQuery": "termo de busca exato para a Amazon"
  }
]`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    let response = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json"
        }
      })
    });

    // Se o Google estiver com pico temporário de demanda (503), aguarda 1 segundo e tenta mais uma vez
    if (response.status === 503) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, responseMimeType: "application/json" }
        })
      });
    }

    if (!response.ok) {
      const err = await response.text();
      return new Response(JSON.stringify({ success: false, error: err, fallback: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    const result = await response.json();
    const parts = result?.candidates?.[0]?.content?.parts || [];
    
    // Procura a parte de texto que contém a resposta (ignorando blocos internos de thought se houver)
    let rawText = "";
    for (let i = parts.length - 1; i >= 0; i--) {
      if (parts[i]?.text) {
        rawText = parts[i].text.trim();
        break;
      }
    }

    let items = [];
    const arrayMatch = rawText.match(/\[[\s\S]*\]/);
    const objectMatch = rawText.match(/\{[\s\S]*\}/);

    if (arrayMatch) {
      items = JSON.parse(arrayMatch[0]);
    } else if (objectMatch) {
      const parsed = JSON.parse(objectMatch[0]);
      items = Array.isArray(parsed) ? parsed : (parsed.items || parsed.gifts || parsed.sugestoes || Object.values(parsed).find(v => Array.isArray(v)) || []);
    } else {
      items = JSON.parse(rawText);
    }

    return new Response(JSON.stringify({ success: true, items }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60"
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, fallback: true, error: error.message }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
}
