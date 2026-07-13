import type { Language } from "./i18n/language";

export const CONFIG = {
  studioName: "AS Studio",
  authorName: "Aleksandra Shreider",
  location: "São Paulo, SP",
  currency: "(R$ / $ / €)",
  social: {
    instagram: "https://www.instagram.com/aleksandras.studio/",
    facebook: "https://www.facebook.com/profile.php?id=61591500913263",
  },
};

type PortfolioItem = {
  preview: string;
  link: string;
};

const PORTFOLIO_IMAGES_PT: PortfolioItem[] = [
  {
    preview: "/cinema-cover.png",
    link: "/cinema.pdf",
  },
  {
    preview: "/renders-cover.png",
    link: "/renders-tecnicos.pdf",
  },
  {
    preview: "/business-cover.mp4",
    link: "/Business.pdf",
  },
  {
    preview: "/LookBook Cover.png",
    link: "/LookBook.pdf",
  },
  {
    preview: "/Burya.png",
    link: "/burya.pdf",
  },
  {
    preview: "/hydrocut-cover.mp4",
    link: "https://bestpoint.vercel.app/",
  },
  {
    preview: "/houses-cover.png",
    link: "/renders.pdf",
  },
];

export const PORTFOLIO_IMAGES_BY_LANGUAGE: Record<Language, PortfolioItem[]> = {
  pt: PORTFOLIO_IMAGES_PT,

  en: [
    {
      preview: "/cinema-cover.png",
      link: "/cinema-eng.pdf",
    },
    {
      preview: "/renders-cover-eng.png",
      link: "/renders-tech-eng.pdf",
    },
    {
      preview: "/business-cover-eng.mp4",
      link: "/Business Materials.pdf",
    },
    {
      preview: "/LookBook Cover.png",
      link: "/LookBook-eng.pdf",
    },
    {
      preview: "/Burya-eng.png",
      link: "/burya-eng.pdf",
    },
    {
      preview: "/hydrocut-cover-eng.mp4",
      link: "https://bestpoint.vercel.app/",
    },
    {
      preview: "/facades-cover-eng.png",
      link: "/facades-eng.pdf",
    },
  ],
};

export const PORTFOLIO_IMAGES = PORTFOLIO_IMAGES_PT;