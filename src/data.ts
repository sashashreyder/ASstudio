// src/data.ts

// 1. ОСНОВНЫЕ НАСТРОЙКИ
export const CONFIG = {
    studioName: "AS Studio",
    formLink: "https://forms.gle/eML3dx6RXJ1SZCh38",
    authorName: "Aleksandra Shreider",
    location: "São Paulo, SP",
    currency: "(R$ / $ / €)",
  };
  
  // 2. УСЛУГИ 
  export const SERVICES = [
    {
    id: 1,
    title: "Design para Empresas",
    price: "a partir de R$ 99",
    shortDesc: "Cartões de visita, banners, materiais impressos e artes digitais.",
    details:
    "Crio materiais visuais profissionais para ajudar sua empresa a transmitir confiança desde o primeiro contato. Cartões de visita, banners, cardápios, flyers, apresentações comerciais e artes para redes sociais com visual moderno e profissional.",
    },
    
    {
    id: 2,
    title: "Renders & Visualização",
    price: "a partir de R$ 149",
    shortDesc: "Renders de produtos, fachadas, interiores e apresentações visuais.",
    details:
    "Transformo fotos, esboços ou referências em imagens realistas de alta qualidade. Ideal para produtos, arquitetura, fachadas, materiais promocionais e apresentações para clientes.",
    },
    
    {
    id: 3,
    title: "Landing Page MVP",
    price: "a partir de R$ 299",
    shortDesc: "Sites rápidos, modernos e focados em conversão.",
    details:
    "Desenvolvo landing pages leves e responsivas, com foco em apresentar seus serviços de forma profissional. Sem WordPress pesado. Domínio e hospedagem são contratados separadamente (posso ajudar na configuração).",
    },
    
    {
    id: 4,
    title: "Materiais Educacionais & Localização",
    price: "sob consulta",
    shortDesc: "Conteúdo educacional, cursos e adaptação de materiais.",
    details:
    "Criação de materiais didáticos, apresentações, cursos interativos e localização de conteúdos entre inglês, português e russo. Serviço voltado para escolas, professores, empresas e projetos educacionais.",
    },
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