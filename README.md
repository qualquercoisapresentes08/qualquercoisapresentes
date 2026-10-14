# QualquerCoisa - Buscador Inteligente de Presentes

> **Modelo de Negócio:** Gift Finder / Curadoria com Inteligência Artificial monetizado via Programa de Afiliados da Amazon Brasil e Mercado Livre.

---

## 💡 Como Funciona
O usuário responde a 4 perguntas rápidas sobre o presenteado:
1. **Relação** (Namorado, Mãe, Pai, Cunhado, Amigo, etc.);
2. **Faixa Etária** (Jovem, Adulto, Sênior);
3. **Orçamento Máximo** (R$ 50, R$ 150, R$ 300, Sem Limite);
4. **Interesses e Hobbies** (Churrasco, Café Especial, Tech, Vinhos, Skincare, etc.).

O algoritmo analisa as respostas e entrega **4 sugestões hiper-personalizadas** com:
- Nome e faixa de preço estimada;
- **"Por que dar este presente"** (argumento persuasivo que remove a indecisão da compra);
- Botão direto para **Amazon Brasil** com a sua tag de afiliado;
- Botão para o **Mercado Livre**.

---

## 💰 Como Configurar suas Tags de Afiliado

Abra o arquivo [`script.js`](script.js) e edite as primeiras linhas:

```javascript
// Substitua pela sua tag do Programa de Associados Amazon
const AMAZON_AFFILIATE_TAG = "suatag-20";

// Opcional para Mercado Livre Afiliados
const MERCADO_LIVRE_AFFILIATE_ID = "seu_id";
```

Toda vez que o usuário clicar em "Ver Melhores Ofertas na Amazon" e comprar qualquer produto dentro de 24 horas, você ganha de **6% a 12% de comissão**.

---

## 📈 Estratégia de Tração e Picos Sazonais
Diferente de sites de conteúdo geral, o nicho de presentes possui explosões de faturamento previsíveis:
* **Maio:** Dia das Mães (maior faturamento do 1º semestre);
* **Junho:** Dia dos Namorados;
* **Agosto:** Dia dos Pais;
* **Novembro / Dezembro:** Black Friday, Amigo Secreto e Natal (pico que chega a faturar 5x a 10x a média mensal).

---

## 🚀 Como Testar Localmente
Basta abrir o arquivo [`index.html`](index.html) no seu navegador.
Todo o motor de busca roda 100% no navegador (Client-Side), com custo zero de servidor.
