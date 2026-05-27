// src/data.ts

// 1. ОСНОВНЫЕ НАСТРОЙКИ
export const CONFIG = {
    studioName: "AS Studio",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSenFxFlNMqeVMcsYEXZNqgxiaeLo1C8LSgNCaNIEYJBqlUrEA/viewform?usp=publish-editor",
    authorName: "Aleksandra Shreider",
    location: "São Paulo, SP",
    currency: "(R$ / $ / €)",
  };
  
  // 2. УСЛУГИ 
  export const SERVICES = [
    {
      id: 1,
      title: "Visual & Reels Express",
      price: "a partir de R$ 99", 
      shortDesc: "Renders profissionais, vídeos IA e templates para redes sociais.",
      details: "Transformo fotos simples do seu produto em renders de estúdio de alta qualidade. Inclui vídeos curtos dinâmicos (com IA e transições perfeitas para Reels/TikTok) e templates minimalistas no Canva. Seu feed vai parecer de uma marca premium.",
    },
    {
      id: 2,
      title: "Infoprodutos & Design Corporativo",
      price: "a partir de R$ 149",
      shortDesc: "Apresentações, materiais didáticos, PDFs e artes para impressão.",
      details: "Design de apresentações estáticas e animadas para aulas ou pitches. Uso imagens licenciadas (Canva Premium) para zero dor de cabeça com direitos autorais. Também crio designs prontos para impressão gráfica (cartões, cardápios físicos, flyers).",
    },
    {
      id: 3,
      title: "Localização & Inglês",
      price: "a partir de R$ 199",
      shortDesc: "Cursos interativos, adaptação de jogos e aulas autorais.",
      details: "Criação de materiais e aulas autorais em inglês. Faço a localização completa de jogos e dinâmicas do inglês para o português (níveis A0 a C1), garantindo adaptação cultural. Possuo diploma na área para garantir máxima qualidade didática.",
    },
    {
      id: 4,
      title: "Landing Page MVP",
      price: "a partir de R$ 299",
      shortDesc: "Sites rápidos no código limpo. Sem WordPress travando.",
      details: "Desenvolvo vitrines rápidas e 100% focadas no mobile. ATENÇÃO: Domínio e servidor são pagos por você separadamente (ajudo a configurar). Você mesmo atualiza seu conteúdo ou assina meu plano de manutenção mensal (R$ 150/mês) para que eu cuide de tudo.",
    }
  ];
  
  // 3. ОТЗЫВЫ 
  export const REVIEWS = [
    { 
      name: "Gabriela Costa", 
      business: "Marca de Moda Autoral", 
      text: "O lookbook digital ficou simplesmente impecável! A textura da malha canelada e a fidelidade das cores parecem fotos reais. Facilitou demais o lançamento da nossa coleção sem precisar gastar uma fortuna com estúdio." 
    },
    { 
      name: "Oksana K.", 
      business: "Criadora de Conteúdo & EdTech", 
      text: "As aplicações e exercícios interativos no React ficaram fantásticos. Já criamos mais de 50 atividades personalizadas e os estudantes adoraram a dinâmica. Entrega super rápida e código muito limpo!" 
    },
    { 
      name: "Rodrigo Mendes", 
      business: "Engenharia & Soluções Industriais", 
      text: "Precisávamos de renders técnicos para b2b e uma landing page robusta para o serviço de corte jato d'água. O resultado superou as expectativas: os esquemas 3D trazem todos os detalhes de porosidade e dimensões que os engenheiros exigem." 
    }
  ];
  
  // 4. КАРТИНКИ ПОРТФОЛИО 
export const PORTFOLIO_IMAGES = [
  {
    preview: "/cinema-cover.png",
    link: "/cinema.pdf"
  },
  {
    preview: "/renders-cover.png",
    link: "/renders-tecnicos.pdf"
  },
  {
    preview: "/EDTECH.mp4",
    link: "https://c2gap-fill-fleeting-moments.netlify.app/"
  },
  {
    preview: "/LookBook Cover.png",
    link: "/LookBook.pdf"
  },
  {
    preview: "/Burya.png",
    link: "/burya.pdf"
  },
  {
    preview: "/hydrocut-cover.mp4",
    link: "https://waterjetcut.netlify.app/"
  }
];