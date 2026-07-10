import type { Language } from "./language";

export const translations = {
  pt: {
    meta: {
      title:
        "AS Studio — Design visual, sites, renders e conteúdo digital para marcas, produtos e espaços.",
      description:
        "Design visual, sites, renders e conteúdo digital para marcas, produtos e espaços. Atendimento direto, propostas personalizadas e entrega profissional.",
    },
    nav: {
      services: "Serviços",
      portfolio: "Portfólio",
      about: "Sobre",
      requestQuote: "Solicitar orçamento",
      receiveProposal: "Receber Proposta",
    },
    hero: {
      title:
        "Seu negócio merece parecer tão profissional quanto você trabalha.",
      description:
        "Design profissional para empresas que querem transmitir confiança e conquistar mais clientes. Preencha um breve formulário e descreva sua ideia. Após a análise, entrarei em contato pelo WhatsApp com uma proposta personalizada de acordo com seus objetivos, prazo e orçamento.",
      cta: "Receber proposta →",
    },
    services: {
      title: "O que eu faço",
      requestPackage: "Solicitar este pacote →",
      items: [
        {
          id: 1,
          title: "Design para Empresas",
          price: "a partir de R$ 99",
          shortDesc:
            "Apresentações, cartões de visita, banners e materiais corporativos.",
          details:
            "Crio apresentações comerciais, pitch decks, propostas, materiais para reuniões, cartões de visita, banners, cardápios, flyers e artes digitais. O objetivo é transformar informações em materiais claros, organizados e profissionais que transmitam confiança desde o primeiro contato.",
        },
        {
          id: 2,
          title: "Renders & Visualização",
          price: "a partir de R$ 149",
          shortDesc:
            "Renders de produtos, fachadas, interiores e materiais visuais.",
          details:
            "Transformo fotos, esboços ou referências em imagens realistas de alta qualidade. Ideal para produtos, arquitetura, fachadas, interiores, apresentações para clientes e materiais promocionais.",
        },
        {
          id: 3,
          title: "Landing Pages & Sites",
          price: "a partir de R$ 799",
          shortDesc:
            "Sites rápidos, modernos e focados em apresentar seu negócio.",
          details:
            "Desenvolvo landing pages e sites institucionais leves, responsivos e com visual profissional. Ideal para empresas, profissionais autônomos, portfólios e páginas de serviços. Posso ajudar com domínio, hospedagem e publicação.",
        },
        {
          id: 4,
          title: "Projetos Especiais",
          price: "sob consulta",
          shortDesc:
            "Localização, materiais educacionais, conteúdo e outras demandas.",
          details:
            "Também trabalho com localização entre português, inglês e russo, criação de materiais educacionais, apresentações, cursos, PDFs, conteúdos digitais, adaptação de materiais e projetos personalizados. Se você precisa de algo que não encontrou na lista, envie sua ideia. Com grande chance eu consiga ajudar ou indicar a melhor solução.",
        },
      ],
    },
    benefits: {
      title: "Por que escolher a AS Studio?",
      subtitle:
        "Atendimento direto, comunicação simples e foco em entregar exatamente o que seu negócio precisa.",
      items: [
        {
          title: "Velocidade",
          text: "Prazos rápidos, comunicação direta e foco na entrega.",
        },
        {
          title: "Ajustes Inclusos",
          text: "Revisões inclusas para garantir um resultado alinhado ao briefing.",
        },
        {
          title: "Sem Agência",
          text: "Atendimento direto, sem intermediários e sem custos extras.",
        },
        {
          title: "Sem Reuniões",
          text: "Tudo resolvido por mensagem, sem chamadas intermináveis.",
        },
      ],
    },
    portfolio: {
      title: "Alguns Trabalhos",
      imageAlt: "Trabalho do portfólio",
    },
    about: {
      title: "Prazer, Aleksandra Shreider.",
      intro:
        "Oi! Sou Aleksandra. Estou sempre estudando, testando novas ferramentas e procurando formas melhores de resolver problemas visuais para empresas e profissionais. Gosto de conhecer projetos diferentes, criar parcerias de longo prazo e ajudar negócios a se apresentarem de forma mais profissional.",
      whatsappTitle: "Por que você não vai encontrar meu WhatsApp por aqui?",
      whatsappBody:
        "Porque acredito que um bom projeto começa com um bom briefing. Quando você preenche o formulário, consigo entender melhor sua necessidade antes mesmo do nosso primeiro contato.",
      closing:
        "Isso economiza tempo para nós dois, evita mensagens intermináveis e me permite analisar seu projeto com mais atenção. Depois da análise, entro em contato pelo WhatsApp com sugestões, dúvidas (se houver) e uma proposta personalizada de acordo com seus objetivos e orçamento.",
      cta: "Solicitar Proposta",
    },
    reviews: {
      title: "O que dizem",
      items: [
        {
          name: "Oksana K.",
          business: "Educação & EdTech",
          text: "Desenvolvemos juntos dezenas de materiais educacionais interativos e aplicações personalizadas em React. A combinação entre design, conteúdo e implementação técnica tornou o aprendizado mais dinâmico e permitiu criar experiências adaptadas às necessidades dos estudantes.",
        },
        {
          name: "Marcos Ferreira",
          business: "Produtos Industriais B2B",
          text: "Precisávamos de apresentações comerciais e materiais visuais para demonstrar produtos técnicos a clientes corporativos. Os renders e a estrutura visual ajudaram a apresentar informações complexas de forma clara e profissional, contribuindo para negociações com grandes parceiros.",
        },
        {
          name: "Rodrigo Mendes",
          business: "Engenharia & Soluções Industriais",
          text: "Os renders técnicos facilitaram a visualização dos produtos e modernizaram significativamente nossa comunicação visual. O resultado foi tão positivo que posteriormente ampliamos a colaboração para o desenvolvimento de um novo site corporativo.",
        },
      ],
    },
    footer: {
      basedIn: "Baseada em",
      remoteWork: "Atendimento remoto para todo o mundo",
    },
  },
  en: {
    meta: {
      title:
        "AS Studio — Visual design, websites, renders and digital content for brands, products and spaces.",
      description:
        "Visual design, websites, renders and digital content for brands, products and spaces. Direct communication, tailored proposals, and professional delivery.",
    },
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      requestQuote: "Request a quote",
      receiveProposal: "Get a proposal",
    },
    hero: {
      title:
        "Your business should look as professional as the work you put into it.",
      description:
        "Professional design for businesses that want to build trust and win more clients. Fill out a short form and describe your idea. After reviewing your brief, I'll reach out on WhatsApp with a tailored proposal based on your goals, timeline, and budget.",
      cta: "Get a proposal →",
    },
    services: {
      title: "What I do",
      requestPackage: "Request this package →",
      items: [
        {
          id: 1,
          title: "Design for Businesses",
          price: "from R$ 99",
          shortDesc:
            "Presentations, business cards, banners, and corporate materials.",
          details:
            "I create sales decks, pitch presentations, proposals, meeting materials, business cards, banners, menus, flyers, and digital artwork. The goal is to turn information into clear, organized, professional materials that build trust from the first impression.",
        },
        {
          id: 2,
          title: "Renders & Visualization",
          price: "from R$ 149",
          shortDesc:
            "Product renders, facades, interiors, and visual materials.",
          details:
            "I turn photos, sketches, or references into high-quality realistic images. Ideal for products, architecture, facades, interiors, client presentations, and promotional materials.",
        },
        {
          id: 3,
          title: "Landing Pages & Websites",
          price: "from R$ 799",
          shortDesc:
            "Fast, modern websites focused on presenting your business.",
          details:
            "I build lightweight, responsive landing pages and company websites with a professional look. Ideal for businesses, freelancers, portfolios, and service pages. I can also help with domain setup, hosting, and launch.",
        },
        {
          id: 4,
          title: "Special Projects",
          price: "on request",
          shortDesc:
            "Localization, educational materials, content, and other needs.",
          details:
            "I also work on localization between Portuguese, English, and Russian, educational materials, presentations, courses, PDFs, digital content, material adaptation, and custom projects. If you need something not listed here, send your idea — there's a good chance I can help or point you to the right solution.",
        },
      ],
    },
    benefits: {
      title: "Why work with AS Studio?",
      subtitle:
        "Direct communication, a simple process, and a focus on delivering exactly what your business needs.",
      items: [
        {
          title: "Speed",
          text: "Fast turnaround, direct communication, and a focus on delivery.",
        },
        {
          title: "Revisions Included",
          text: "Revisions included to make sure the result matches your brief.",
        },
        {
          title: "No Agency",
          text: "You work directly with me — no middlemen, no extra overhead.",
        },
        {
          title: "No Meetings",
          text: "Everything handled by message, without endless calls.",
        },
      ],
    },
    portfolio: {
      title: "Selected Work",
      imageAlt: "Portfolio project",
    },
    about: {
      title: "Hi, I'm Aleksandra Shreider.",
      intro:
        "Hi! I'm Aleksandra. I'm always learning, testing new tools, and looking for better ways to solve visual challenges for businesses and professionals. I enjoy working on different kinds of projects, building long-term partnerships, and helping businesses present themselves more professionally.",
      whatsappTitle: "Why won't you find my WhatsApp here?",
      whatsappBody:
        "Because I believe a good project starts with a good brief. When you fill out the form, I can understand your needs better before our first conversation.",
      closing:
        "That saves time for both of us, avoids endless back-and-forth messages, and lets me review your project with more care. After the review, I'll reach out on WhatsApp with suggestions, any questions if needed, and a tailored proposal based on your goals and budget.",
      cta: "Request a proposal",
    },
    reviews: {
      title: "What clients say",
      items: [
        {
          name: "Oksana K.",
          business: "Education & EdTech",
          text: "We developed dozens of interactive educational materials and custom React applications together. The combination of design, content, and technical implementation made learning more dynamic and allowed us to create experiences tailored to students' needs.",
        },
        {
          name: "Marcos Ferreira",
          business: "Industrial B2B Products",
          text: "We needed sales presentations and visual materials to showcase technical products to corporate clients. The renders and visual structure helped present complex information clearly and professionally, supporting negotiations with major partners.",
        },
        {
          name: "Rodrigo Mendes",
          business: "Engineering & Industrial Solutions",
          text: "The technical renders made it easier to visualize our products and significantly modernized our visual communication. The results were so positive that we later expanded our collaboration to develop a new corporate website.",
        },
      ],
    },
    footer: {
      basedIn: "Based in",
      remoteWork: "Remote work worldwide",
    },
  },
} as const satisfies Record<Language, unknown>;

export type Translations = (typeof translations)[Language];
