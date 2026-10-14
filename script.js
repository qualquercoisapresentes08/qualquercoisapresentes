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
  btn.addEventListener("click", () => {
    // Efeito de feedback
    btn.innerHTML = `<span>Buscando as melhores opções...</span>`;
    btn.disabled = true;

    setTimeout(() => {
      generateRecommendations();
      btn.innerHTML = `<span>✨ Encontrar Outras Sugestões</span>`;
      btn.disabled = false;
    }, 400);
  });
}

function generateRecommendations() {
  const customDetail = document.getElementById("customDetail").value.toLowerCase().trim();
  const maxBudget = parseInt(userSelections.budget, 10) || 300;
  const selectedTags = Array.from(userSelections.tags);

  // Sistema de pontuação semântica
  const scoredItems = GIFT_DATABASE.map((item) => {
    let score = 0;

    // Pontua se a tag de interesse bate
    item.tags.forEach((t) => {
      if (selectedTags.includes(t)) score += 4;
      if (customDetail && customDetail.includes(t)) score += 5;
    });

    // Pontua se a relação é compatível
    if (item.relations.includes(userSelections.relation) || item.relations.includes("qualquer")) {
      score += 3;
    }

    // Pontua se a faixa etária é compatível
    if (item.ages.includes(userSelections.age)) {
      score += 2;
    }

    // Pontua se cabe dentro do orçamento selecionado
    if (item.priceMin <= maxBudget) {
      score += 3;
    } else {
      score -= 2; // Penaliza se ultrapassar muito o orçamento
    }

    // Pequeno fator aleatório para variar os resultados em cliques subsequentes
    score += Math.random() * 2;

    return { ...item, score };
  });

  // Ordena pelos maiores scores e seleciona os 4 melhores
  scoredItems.sort((a, b) => b.score - a.score);
  const bestPicks = scoredItems.slice(0, 4);

  renderGiftCards(bestPicks);
}

function renderGiftCards(items) {
  const container = document.getElementById("giftCardsGrid");
  container.innerHTML = "";

  items.forEach((gift) => {
    // Montagem dos links de afiliado com busca formatada
    const amazonUrl = `https://www.amazon.com.br/s?k=${encodeURIComponent(gift.searchQuery)}&tag=${AMAZON_AFFILIATE_TAG}`;
    const mlUrl = `https://lista.mercadolivre.com.br/${encodeURIComponent(gift.searchQuery)}`;

    const card = document.createElement("div");
    card.className = "gift-card";

    card.innerHTML = `
      <div>
        <span class="gift-category-tag">${gift.category}</span>
        <h3>${gift.title}</h3>
        <div class="gift-price-estimate">Aprox. R$ ${gift.priceMin} - R$ ${gift.priceMax}</div>
        <div class="gift-reason-box">
          <strong>Por que dar este presente:</strong><br>
          ${gift.reason}
        </div>
      </div>

      <div class="gift-actions">
        <a href="${amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn-amazon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          Ver Melhores Ofertas na Amazon
        </a>
        <a href="${mlUrl}" target="_blank" rel="noopener noreferrer" class="btn-ml">
          Ver Opções no Mercado Livre
        </a>
      </div>
    `;

    container.appendChild(card);
  });

  const resultsSection = document.getElementById("resultsSection");
  resultsSection.style.display = "block";
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
