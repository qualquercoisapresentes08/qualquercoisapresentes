// QualquerCoisa - Buscador Inteligente de Presentes
// Motor de Recomendação Curada + Gerador de Links de Afiliado

// TAGS DE AFILIADO OFICIAIS
const AMAZON_AFFILIATE_TAG = "qualquercoi05-20";
const MERCADO_LIVRE_AFFILIATE_ID = ""; // Opcional para Mercado Livre Afiliados

// Base rica de sugestões mapeadas com alta taxa de conversão e intenção de compra
const GIFT_DATABASE = [
  // --- CHURRASCO & GASTRONOMIA ---
  {
    title: "Kit Churrasco Profissional em Maleta Inox",
    category: "Churrasco",
    tags: ["churrasco", "cozinha"],
    relations: ["pai", "namorado", "amigo", "cunhado", "sogro", "qualquer"],
    ages: ["adulto", "meia-idade", "senior"],
    priceMin: 90,
    priceMax: 180,
    reason: "É o presente que todo fã de churrasco sonha em ter para exibir no final de semana. Útil, resistente e com ótima apresentação na maleta.",
    searchQuery: "kit churrasco maleta inox",
  },
  {
    title: "Termômetro Digital Culinário Sem Fio",
    category: "Churrasco & Tech",
    tags: ["churrasco", "tech", "cozinha"],
    relations: ["namorado", "pai", "amigo", "cunhado", "qualquer"],
    ages: ["adulto", "meia-idade"],
    priceMin: 80,
    priceMax: 160,
    reason: "Permite acertar o ponto perfeito da carne pelo celular sem precisar ficar colado na grelha. Quem gosta de carne e tecnologia pira.",
    searchQuery: "termometro culinario inteligente espeto",
  },
  {
    title: "Garra de Urso Desfiadora de Carne + Tábua Nobre",
    category: "Churrasco",
    tags: ["churrasco"],
    relations: ["cunhado", "amigo", "pai", "qualquer"],
    ages: ["adulto", "meia-idade"],
    priceMin: 45,
    priceMax: 90,
    reason: "Presente marcante e barato (ótimo para amigo secreto). Todo churrasqueiro adora a pose na hora de fatiar e servir.",
    searchQuery: "garra de urso churrasco tabua madeira",
  },

  // --- CAFÉ ESPECIAL ---
  {
    title: "Prensa Francesa (French Press) em Vidro Borossilicato",
    category: "Café Especial",
    tags: ["cafe"],
    relations: ["mae", "pai", "namorado", "amigo", "chefe", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade", "senior"],
    priceMin: 55,
    priceMax: 120,
    reason: "Transforma a rotina matinal em um ritual gourmet. Não precisa de filtro de papel e extrai os melhores óleos do grão.",
    searchQuery: "prensa francesa vidro borossilicato cafe",
  },
  {
    title: "Moedor Manual de Grãos em Inox c/ Ajuste de Moagem",
    category: "Café Especial",
    tags: ["cafe"],
    relations: ["namorado", "amigo", "pai", "chefe", "qualquer"],
    ages: ["adulto", "meia-idade"],
    priceMin: 70,
    priceMax: 150,
    reason: "O segredo de quem realmente aprecia café é moer na hora. Elegante, compacto e dura anos.",
    searchQuery: "moedor cafe manual conico inox",
  },
  {
    title: "Kit Degustação de Cafés Especiais Torrados do Sul de Minas",
    category: "Café & Gourmet",
    tags: ["cafe", "cozinha"],
    relations: ["mae", "sogro", "chefe", "amigo", "qualquer"],
    ages: ["adulto", "meia-idade", "senior"],
    priceMin: 60,
    priceMax: 130,
    reason: "Experiência sensorial requintada. Difícil de errar quando você dá um café premium artesanal premiado.",
    searchQuery: "kit cafes especiais graos gourmet presente",
  },

  // --- TECNOLOGIA & GADGETS ---
  {
    title: "Fone de Ouvido Bluetooth c/ Cancelamento de Ruído",
    category: "Tecnologia",
    tags: ["tech", "games", "fitness", "viagem"],
    relations: ["namorado", "irmao", "amigo", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade"],
    priceMin: 120,
    priceMax: 300,
    reason: "Indispensável no dia a dia para ouvir música, focar no trabalho ou treinar sem fios atrapalhando.",
    searchQuery: "fone bluetooth cancelamento ruido tws",
  },
  {
    title: "Kindle Paperwhite (Leitor Digital de Livros)",
    category: "Tecnologia & Leitura",
    tags: ["tech", "livros", "viagem"],
    relations: ["namorado", "mae", "pai", "irmao", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade", "senior"],
    priceMin: 450,
    priceMax: 700,
    reason: "O presente definitivo para quem lê. Tela antirreflexo com luz quente ajustável e bateria que dura semanas.",
    searchQuery: "kindle amazon leitor livros digital",
  },
  {
    title: "Carregador Portátil Power Bank 20.000mAh Ultra Rápido",
    category: "Tecnologia",
    tags: ["tech", "viagem"],
    relations: ["namorado", "amigo", "irmao", "cunhado", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade"],
    priceMin: 90,
    priceMax: 180,
    reason: "Aquele utilitário que salva a vida de quem vive com o celular descarregando na rua ou em viagens.",
    searchQuery: "power bank 20000mah inducao usb c carregamento rapido",
  },
  {
    title: "Smart Lâmpada Wi-Fi RGB Compatível com Alexa/Google",
    category: "Casa & Smart Home",
    tags: ["tech", "decoracao", "games"],
    relations: ["amigo", "irmao", "namorado", "qualquer"],
    ages: ["jovem", "adulto"],
    priceMin: 40,
    priceMax: 80,
    reason: "Barato, moderno e cria um ambiente aconchegante para assistir filmes ou jogar.",
    searchQuery: "smart lampada wifi rgb alexa",
  },

  // --- VINHOS & BEBIDAS ---
  {
    title: "Abridor de Vinho Elétrico Automático c/ Cortador de Lacre",
    category: "Vinhos & Bar",
    tags: ["vinhos"],
    relations: ["mae", "pai", "sogro", "namorado", "chefe", "qualquer"],
    ages: ["adulto", "meia-idade", "senior"],
    priceMin: 70,
    priceMax: 140,
    reason: "Abre qualquer garrafa de vinho em 6 segundos sem esforço. Todo mundo que recebe adora a praticidade.",
    searchQuery: "abridor de vinho eletrico automatico saca rolhas",
  },
  {
    title: "Aerador de Vinho Instantâneo em Acrílico",
    category: "Vinhos",
    tags: ["vinhos"],
    relations: ["pai", "sogro", "cunhado", "amigo", "qualquer"],
    ages: ["adulto", "meia-idade", "senior"],
    priceMin: 35,
    priceMax: 75,
    reason: "Oxigena o vinho na hora em que é servido na taça, destacando o aroma e o sabor. Ótimo custo-benefício.",
    searchQuery: "aerador decanter vinho instantaneo",
  },

  // --- LIVROS & CULTURA ---
  {
    title: "Luminária de Leitura Noturna Clip para Livros e Kindle",
    category: "Leitura",
    tags: ["livros"],
    relations: ["amigo", "mae", "namorado", "irmao", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade", "senior"],
    priceMin: 35,
    priceMax: 70,
    reason: "Perfeita para ler na cama sem incomodar quem está ao lado. Compacta e recarregável via USB.",
    searchQuery: "luminaria leitura clip livro recarregavel",
  },
  {
    title: "Box Especial Clássicos da Literatura / Capa Dura",
    category: "Leitura",
    tags: ["livros"],
    relations: ["namorado", "amigo", "mae", "pai", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade", "senior"],
    priceMin: 80,
    priceMax: 180,
    reason: "Edições de colecionador com capa dura e acabamento nobre enchem os olhos de quem ama livros na estante.",
    searchQuery: "box livros capa dura colecionador presente",
  },

  // --- FITNESS & BEM-ESTAR ---
  {
    title: "Copo Térmico c/ Tampa Hermética 473ml (Tipo Stanley)",
    category: "Fitness & Dia a Dia",
    tags: ["fitness", "churrasco", "viagem"],
    relations: ["amigo", "cunhado", "namorado", "irmao", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade"],
    priceMin: 50,
    priceMax: 140,
    reason: "Mantém a bebida gelada até o último gole por horas. Presente coringa que agrada 95% das pessoas.",
    searchQuery: "copo termico inox com tampa vácuo",
  },
  {
    title: "Kit Faixas Elásticas Mini Bands (5 intensidades)",
    category: "Fitness",
    tags: ["fitness"],
    relations: ["namorado", "amigo", "mae", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade"],
    priceMin: 30,
    priceMax: 65,
    reason: "Excelente para quem treina em casa ou gosta de alongamento e pilates. Prático para levar na mala.",
    searchQuery: "kit mini bands faixas elasticas treino",
  },

  // --- SKINCARE & BELEZA ---
  {
    title: "Massageador Facial Elétrico c/ Pulso Ultrassônico",
    category: "Skincare",
    tags: ["skincare"],
    relations: ["mae", "namorado", "amigo", "qualquer"],
    ages: ["jovem", "adulto", "meia-idade", "senior"],
    priceMin: 45,
    priceMax: 110,
    reason: "Sensação de spa em casa. Limpa a pele profundamente e estimula a circulação com vibrações suaves.",
    searchQuery: "massageador facial eletrico limpeza pele",
  },
  {
    title: "Kit Velas Aromáticas Terapêuticas em Cerâmica (Cera Vegetal)",
    category: "Bem-estar & Decoração",
    tags: ["skincare", "decoracao"],
    relations: ["mae", "namorado", "chefe", "amigo", "sogro", "qualquer"],
    ages: ["adulto", "meia-idade", "senior"],
    priceMin: 50,
    priceMax: 120,
    reason: "Aroma sofisticado que relaxa o ambiente após um dia cansativo. Embalagens elegantes e presentes acolhedores.",
    searchQuery: "kit velas aromaticas cera vegetal presente",
  },

  // --- DECORAÇÃO & PLANTAS ---
  {
    title: "Vaso Auto-irrigável com Design Moderno Minimalista",
    category: "Plantas & Decoração",
    tags: ["plantas", "decoracao"],
    relations: ["mae", "amigo", "chefe", "sogro", "qualquer"],
    ages: ["adulto", "meia-idade", "senior"],
    priceMin: 40,
    priceMax: 90,
    reason: "Para quem ama ter plantas no apartamento mas às vezes esquece de regar. O reservatório cuida de tudo sozinho.",
    searchQuery: "vaso autoirrigavel design plantas interno",
  },

  // --- GAMES & NERD ---
  {
    title: "Suporte de Headset RGB com Hub USB Integrado",
    category: "Gamer",
    tags: ["games", "tech"],
    relations: ["namorado", "irmao", "amigo", "qualquer"],
    ages: ["jovem", "adulto"],
    priceMin: 65,
    priceMax: 130,
    reason: "Organiza o setup de jogos, apoia o fone com segurança e dá o visual gamer iluminado ao quarto.",
    searchQuery: "suporte headset rgb suporte fone mesa gamer",
  },
];

// Estado atual da busca
let userSelections = {
  relation: "namorado",
  age: "adulto",
  occasion: "aniversario",
  budget: "150",
  tags: new Set(["tech", "cafe"]),
};

document.addEventListener("DOMContentLoaded", () => {
  setupInteractiveSelectors();
  setupGenerateButton();
  initFeaturedKits();
});

function setupInteractiveSelectors() {
  // 1. Parentesco / Relação
  document.querySelectorAll('[data-group="relation"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll('[data-group="relation"]').forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      userSelections.relation = btn.getAttribute("data-value");
    });
  });

  // 2. Faixa Etária
  document.querySelectorAll('[data-group="age"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll('[data-group="age"]').forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      userSelections.age = btn.getAttribute("data-value");
    });
  });

  // 3. Orçamento
  document.querySelectorAll('[data-group="budget"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll('[data-group="budget"]').forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      userSelections.budget = btn.getAttribute("data-value");
    });
  });

  // 4. Tags de Hobbies/Interesses (Multiseleção)
  document.querySelectorAll(".tag-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const tag = pill.getAttribute("data-tag");
      if (pill.classList.contains("selected")) {
        pill.classList.remove("selected");
        userSelections.tags.delete(tag);
      } else {
        pill.classList.add("selected");
        userSelections.tags.add(tag);
      }
    });
  });

  // Botão de reiniciar
  const btnReset = document.getElementById("btnReset");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function setupGenerateButton() {
  const btn = document.getElementById("btnGenerate");
  btn.addEventListener("click", async () => {
    btn.innerHTML = `<span>✨ IA Pensando no Presente Ideal...</span>`;
    btn.disabled = true;

    try {
      await generateRecommendationsWithAI();
    } catch (e) {
      console.warn("Fallback para o motor local:", e);
      generateRecommendationsLocal();
    } finally {
      btn.innerHTML = `<span>✨ Encontrar Outras Sugestões</span>`;
      btn.disabled = false;
    }
  });
}

async function generateRecommendationsWithAI() {
  const customDetail = document.getElementById("customDetail").value.trim();
  const maxBudget = parseInt(userSelections.budget, 10) || 150;
  const selectedTags = Array.from(userSelections.tags);

  const payload = {
    relation: userSelections.relation,
    age: userSelections.age,
    budget: maxBudget,
    tags: selectedTags,
    customDetail: customDetail,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  const response = await fetch("/api/sugestoes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: controller.signal,
  });

  clearTimeout(timeoutId);

  if (!response.ok) {
    throw new Error("Falha na API de sugestões");
  }

  const data = await response.json();

  if (data.success && Array.isArray(data.items) && data.items.length > 0) {
    renderGiftCards(data.items, true);
  } else {
    generateRecommendationsLocal();
  }
}

function generateRecommendationsLocal() {
  const customDetail = document.getElementById("customDetail").value.toLowerCase().trim();
  const maxBudget = parseInt(userSelections.budget, 10) || 300;
  const selectedTags = Array.from(userSelections.tags);

  const scoredItems = GIFT_DATABASE.map((item) => {
    let score = 0;

    item.tags.forEach((t) => {
      if (selectedTags.includes(t)) score += 4;
      if (customDetail && customDetail.includes(t)) score += 5;
    });

    if (item.relations.includes(userSelections.relation) || item.relations.includes("qualquer")) {
      score += 3;
    }

    if (item.ages.includes(userSelections.age)) {
      score += 2;
    }

    if (item.priceMin <= maxBudget) {
      score += 3;
    } else {
      score -= 2;
    }

    score += Math.random() * 2;

    return { ...item, score };
  });

  scoredItems.sort((a, b) => b.score - a.score);
  const bestPicks = scoredItems.slice(0, 4);

  renderGiftCards(bestPicks, false);
}

function getGiftImage(gift) {
  const text = `${gift.title} ${gift.category || ""} ${gift.searchQuery || ""} ${(gift.tags || []).join(" ")}`.toLowerCase();

  if (text.includes("churrasco") || text.includes("carne") || text.includes("faca")) {
    return "assets/kits/kit-churrasco.jpg";
  }
  if (text.includes("cafe") || text.includes("café") || text.includes("prensa") || text.includes("moedor") || text.includes("caneca") || text.includes("expresso")) {
    return "assets/kits/kit-cafe.jpg";
  }
  if (text.includes("vinho") || text.includes("taca") || text.includes("taça") || text.includes("abridor") || text.includes("cerveja") || text.includes("bar")) {
    return "assets/kits/kit-vinho.jpg";
  }
  if (text.includes("fone") || text.includes("headphone") || text.includes("bluetooth") || text.includes("smartwatch") || text.includes("relogio") || text.includes("relógio") || text.includes("tech") || text.includes("powerbank")) {
    return "assets/kits/kit-tech.jpg";
  }
  if (text.includes("game") || text.includes("gamer") || text.includes("console") || text.includes("mouse") || text.includes("teclado") || text.includes("nerd")) {
    return "assets/kits/kit-gamer.jpg";
  }
  if (text.includes("livro") || text.includes("kindle") || text.includes("leitura")) {
    return "assets/kits/kit-livros.jpg";
  }
  if (text.includes("fitness") || text.includes("treino") || text.includes("academia") || text.includes("garrafa") || text.includes("esporte")) {
    return "assets/kits/kit-fitness.jpg";
  }
  if (text.includes("skincare") || text.includes("beleza") || text.includes("creme") || text.includes("perfume") || text.includes("maquiagem")) {
    return "assets/kits/kit-skincare.jpg";
  }
  if (text.includes("planta") || text.includes("decoracao") || text.includes("decoração") || text.includes("luminaria") || text.includes("luminária") || text.includes("difusor") || text.includes("vela")) {
    return "assets/kits/kit-decoracao.jpg";
  }
  if (text.includes("cozinha") || text.includes("panela") || text.includes("airfryer") || text.includes("gourmet") || text.includes("chef")) {
    return "assets/kits/kit-chef.jpg";
  }
  if (text.includes("viagem") || text.includes("mochila") || text.includes("mala") || text.includes("passaporte")) {
    return "assets/kits/kit-viagem.jpg";
  }

  return "assets/kits/kit-premium.jpg";
}

function renderGiftCards(items, isAiGenerated = false) {
  const container = document.getElementById("giftCardsGrid");
  container.innerHTML = "";

  items.forEach((gift) => {
    const amazonUrl = `https://www.amazon.com.br/s?k=${encodeURIComponent(gift.searchQuery)}&tag=${AMAZON_AFFILIATE_TAG}`;
    const mlUrl = `https://lista.mercadolivre.com.br/${encodeURIComponent(gift.searchQuery)}`;
    const whatsAppMsg = `Olha essa ideia de presente que achei para você: *${gift.title}*! Dá uma olhada aqui: ${amazonUrl}`;
    const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsAppMsg)}`;
    const imageUrl = getGiftImage(gift);

    const card = document.createElement("div");
    card.className = "gift-card";

    card.innerHTML = `
      <div class="gift-card-media">
        <img src="${imageUrl}" alt="${gift.title}" loading="lazy">
        <span class="gift-badge-category">${gift.category || "Presente"}</span>
        <span class="gift-badge-price">R$ ${gift.priceMin} - ${gift.priceMax}</span>
      </div>

      <div class="gift-card-body">
        ${isAiGenerated ? '<div class="gift-ai-tag">✨ Sugestão Gerada por IA</div>' : ""}
        <h3>${gift.title}</h3>
        <div class="gift-reason-box">
          <strong>Por que dar este presente:</strong><br>
          ${gift.reason}
        </div>
      </div>

      <div class="gift-actions">
        <a href="${amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn-amazon-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <span>Ver Oferta na Amazon</span>
          <span class="btn-prime-pill">Prime</span>
        </a>

        <div class="gift-secondary-row">
          <a href="${mlUrl}" target="_blank" rel="noopener noreferrer" class="btn-ml-secondary">
            <span>Ver no Mercado Livre</span>
          </a>
          <a href="${whatsAppUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-share" title="Mandar ideia no WhatsApp">
            <span>💬 Enviar</span>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  const resultsSection = document.getElementById("resultsSection");
  resultsSection.style.display = "block";
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================================================
// COLEÇÃO DE KITS DE PRESENTES PRONTOS & MAIS DESEJADOS
// ============================================================
const FEATURED_KITS = [
  {
    id: "kit-churrasco",
    title: "Kit Churrasqueiro Master",
    tagline: "Para quem leva o churrasco a sério",
    categoryTag: "Churrasco",
    filter: "gastronomia",
    priceMin: 120,
    priceMax: 220,
    image: "assets/kits/kit-churrasco.jpg",
    items: [
      "Faca do Chef de Aço Damasco c/ Cabo Nobre",
      "Tábua Rústica de Madeira Maciça",
      "Garra de Urso em Alumínio Polido",
      "Moedor de Sal Grosso e Pimenta"
    ],
    searchQuery: "kit churrasco profissional faca damasco tabua garra de urso"
  },
  {
    id: "kit-cafe",
    title: "Kit Barista em Casa",
    tagline: "O ritual perfeito do café especial",
    categoryTag: "Café Especial",
    filter: "gastronomia",
    priceMin: 110,
    priceMax: 195,
    image: "assets/kits/kit-cafe.jpg",
    items: [
      "Prensa Francesa de Vidro Borossilicato e Inox",
      "Moedor Manual de Grãos com Lâmina de Cerâmica",
      "Pacote de Grãos Especiais 100% Arábica",
      "Caneca de Cerâmica Artesanal Minimalista"
    ],
    searchQuery: "prensa francesa moedor cafe manual graos especiais"
  },
  {
    id: "kit-vinho",
    title: "Kit Sommelier & Degustação",
    tagline: "Elegância e praticidade para noites de vinho",
    categoryTag: "Vinhos & Bar",
    filter: "gastronomia",
    priceMin: 95,
    priceMax: 180,
    image: "assets/kits/kit-vinho.jpg",
    items: [
      "Abridor Elétrico de Vinhos Recarregável",
      "Aerador Dosador de Fluxo Rápido",
      "Bomba a Vácuo com 2 Rolhas Herméticas",
      "Decantador de Vidro Cristalino"
    ],
    searchQuery: "kit vinho abridor eletrico aerador dosador vacuo"
  },
  {
    id: "kit-tech",
    title: "Kit Produtividade & Tech",
    tagline: "Tecnologia minimalista para o dia a dia",
    categoryTag: "Tecnologia",
    filter: "tech-geek",
    priceMin: 140,
    priceMax: 290,
    image: "assets/kits/kit-tech.jpg",
    items: [
      "Fone Bluetooth TWS c/ Cancelamento Ativo",
      "Carregador por Indução Sem Fio 3 em 1",
      "Powerbank Slim de Alumínio 10.000mAh",
      "Organizador de Cabos em Couro"
    ],
    searchQuery: "fone bluetooth tws carregador inducao sem fio powerbank"
  },
  {
    id: "kit-gamer",
    title: "Kit Gamer Setup Pro",
    tagline: "Imersão total e conforto nas partidas",
    categoryTag: "Games & Geek",
    filter: "tech-geek",
    priceMin: 130,
    priceMax: 260,
    image: "assets/kits/kit-gamer.jpg",
    items: [
      "Headset Gamer Estéreo com Microfone Redutor",
      "Controle Joystick Sem Fio Ergonômico",
      "Mousepad Gamer Estendido Bordado",
      "Suporte de Mesa para Fone com Hub USB"
    ],
    searchQuery: "headset gamer controle sem fio mousepad speed estendido"
  },
  {
    id: "kit-livros",
    title: "Kit Leitor Imersivo",
    tagline: "Conforto para viajar por novas histórias",
    categoryTag: "Livros & Cultura",
    filter: "bem-estar",
    priceMin: 85,
    priceMax: 170,
    image: "assets/kits/kit-livros.jpg",
    items: [
      "Luminária LED Flexível de Leitura Noturna",
      "Capa Protetora de Couro / E-reader",
      "Marcador de Página Metálico Magnético",
      "Caneca Térmica de Cerâmica com Tampa"
    ],
    searchQuery: "luminaria leitura clip livro kindle capa marcador magnetico"
  },
  {
    id: "kit-skincare",
    title: "Kit Spa Facial & Autocuidado",
    tagline: "Momento de pausa e revitalização da pele",
    categoryTag: "Skincare",
    filter: "bem-estar",
    priceMin: 75,
    priceMax: 150,
    image: "assets/kits/kit-skincare.jpg",
    items: [
      "Rolo Massageador de Jade Autêntica + Gua Sha",
      "Sérum Facial Vitamina C e Ácido Hialurônico",
      "Faixa de Cabelo Atoalhada Conforto",
      "Vela Aromática de Cera de Soja e Lavanda"
    ],
    searchQuery: "kit skincare rolo pedra jade gua sha serum facial vitamina c"
  },
  {
    id: "kit-casa",
    title: "Kit Casa Aconchegante & Zen",
    tagline: "Transforme qualquer ambiente em refúgio",
    categoryTag: "Decoração & Casa",
    filter: "bem-estar",
    priceMin: 90,
    priceMax: 165,
    image: "assets/kits/kit-decoracao.jpg",
    items: [
      "Difusor de Aromas Ultrassônico c/ LED Noturno",
      "Kit de Óleos Essenciais Puros (Lavanda & Alecrim)",
      "Vela Vegetal em Vidro Âmbar",
      "Vaso de Cerâmica Minimalista"
    ],
    searchQuery: "difusor ultrassonico aromas oleos essenciais vela aromatica"
  },
  {
    id: "kit-fitness",
    title: "Kit Treino & Vida Ativa",
    tagline: "Energia, saúde e performance em qualquer lugar",
    categoryTag: "Fitness & Treino",
    filter: "tech-geek",
    priceMin: 70,
    priceMax: 145,
    image: "assets/kits/kit-fitness.jpg",
    items: [
      "Garrafa Térmica Inox Vacuum 750ml c/ Medidor",
      "Kit de Elásticos Extensores Mini Bands (5 Níveis)",
      "Corda de Pular de Aço com Rolamento Rápido",
      "Toalha de Secagem Ultra Rápida Esportiva"
    ],
    searchQuery: "garrafa termica inox academia kit mini bands corda pular aco"
  },
  {
    id: "kit-chef",
    title: "Kit Masterchef Gourmet",
    tagline: "Para quem ama impressionar na cozinha",
    categoryTag: "Cozinha & Gastronomia",
    filter: "gastronomia",
    priceMin: 110,
    priceMax: 210,
    image: "assets/kits/kit-chef.jpg",
    items: [
      "Frigideira de Ferro Fundido 24cm Pré-Curada",
      "Faca do Chef Japonesa Santoku em Aço Inox",
      "Conjunto de Moedores de Sal e Pimenta em Bambu",
      "Avental de Cozinha em Algodão Encerado"
    ],
    searchQuery: "frigideira ferro fundido faca chef santoku moedor sal bambu"
  },
  {
    id: "kit-viagem",
    title: "Kit Viajante Esperto",
    tagline: "Organização e leveza para qualquer destino",
    categoryTag: "Viagens & Aventura",
    filter: "tech-geek",
    priceMin: 95,
    priceMax: 185,
    image: "assets/kits/kit-viagem.jpg",
    items: [
      "Mochila Antifurto Impermeável com Porta USB",
      "Almofada de Pescoço em Espuma de Memória",
      "Kit de Organizadores de Mala c/ Compressão",
      "Porta Passaporte e Documentos Slim em Couro"
    ],
    searchQuery: "mochila antifurto viagem organizadores mala almofada pescoco memoria"
  },
  {
    id: "kit-premium",
    title: "Kit Caixa Presente Suprema",
    tagline: "O presente universal e infalível de alto luxo",
    categoryTag: "Especial & Luxo",
    filter: "gastronomia",
    priceMin: 115,
    priceMax: 240,
    image: "assets/kits/kit-premium.jpg",
    items: [
      "Caixa Rígida de Luxo com Fita de Cetim Marfim",
      "Seleção de Bombons e Trufas de Chocolate Suíço",
      "Vela Aromática Decorativa Edição Ouro",
      "Cartão com Mensagem Especial Personalizada"
    ],
    searchQuery: "caixa presente luxo chocolates importados trufas vela aromatica"
  }
];

function initFeaturedKits() {
  const container = document.getElementById("featuredKitsGrid");
  const filterButtons = document.querySelectorAll("#kitsFilterBar .kit-filter-btn");

  if (!container) return;

  const cards = container.querySelectorAll(".kit-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        const cardFilter = card.getAttribute("data-filter");
        const priceMin = parseInt(card.getAttribute("data-price-min"), 10) || 0;

        if (filter === "all") {
          card.style.display = "flex";
        } else if (filter === "ate-150") {
          card.style.display = priceMin <= 100 ? "flex" : "none";
        } else {
          card.style.display = cardFilter === filter ? "flex" : "none";
        }
      });
    });
  });
}
