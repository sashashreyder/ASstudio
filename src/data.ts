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
    shortDesc: "Apresentações, cartões de visita, banners e materiais corporativos.",
    details:
      "Crio apresentações comerciais, pitch decks, propostas, materiais para reuniões, cartões de visita, banners, cardápios, flyers e artes digitais. O objetivo é transformar informações em materiais claros, organizados e profissionais que transmitam confiança desde o primeiro contato."
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
  name: "Oksana K.",
  business: "Educação & EdTech",
  text: "Desenvolvemos juntos dezenas de materiais educacionais interativos e aplicações personalizadas em React. A combinação entre design, conteúdo e implementação técnica tornou o aprendizado mais dinâmico e permitiu criar experiências adaptadas às necessidades dos estudantes."
  },
  {
  name: "Marcos Ferreira",
  business: "Produtos Industriais B2B",
  text: "Precisávamos de apresentações comerciais e materiais visuais para demonstrar produtos técnicos a clientes corporativos. Os renders e a estrutura visual ajudaram a apresentar informações complexas de forma clara e profissional, contribuindo para negociações com grandes parceiros."
  },
  {
  name: "Rodrigo Mendes",
  business: "Engenharia & Soluções Industriais",
  text: "Os renders técnicos facilitaram a visualização dos produtos e modernizaram significativamente nossa comunicação visual. O resultado foi tão positivo que posteriormente ampliamos a colaboração para o desenvolvimento de um novo site corporativo."
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
    preview: "/business-cover.mp4",
    link: "/Business.pdf"
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