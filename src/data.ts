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
    shortDesc: "Cartões de visita, banners, apresentações e materiais promocionais.",
    details:
    "Crio materiais visuais profissionais para ajudar sua empresa a transmitir confiança desde o primeiro contato. Cartões de visita, banners, cardápios, flyers, apresentações comerciais, artes para redes sociais e outros materiais personalizados para impressão ou uso digital.",
    },
    
    {
    id: 2,
    title: "Renders & Visualização",
    price: "a partir de R$ 149",
    shortDesc: "Renders de produtos, fachadas, interiores e materiais visuais.",
    details:
    "Transformo fotos, esboços ou referências em imagens realistas de alta qualidade. Ideal para produtos, arquitetura, fachadas, interiores, apresentações para clientes e materiais promocionais.",
    },
    
    {
    id: 3,
    title: "Landing Pages & Sites",
    price: "a partir de R$ 799",
    shortDesc: "Sites rápidos, modernos e focados em apresentar seu negócio.",
    details:
    "Desenvolvo landing pages e sites institucionais leves, responsivos e com visual profissional. Ideal para empresas, profissionais autônomos, portfólios e páginas de serviços. Posso ajudar com domínio, hospedagem e publicação.",
    },
    
    {
    id: 4,
    title: "Projetos Especiais",
    price: "sob consulta",
    shortDesc: "Localização, materiais educacionais, conteúdo e outras demandas.",
    details:
    "Também trabalho com localização entre português, inglês e russo, criação de materiais educacionais, apresentações, cursos, PDFs, conteúdos digitais, adaptação de materiais e projetos personalizados. Se você precisa de algo que não encontrou na lista, envie sua ideia. Com grande chance eu consiga ajudar ou indicar a melhor solução.",
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