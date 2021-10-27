const imgZellan =
  window.innerWidth > 700
    ? "/images/zellanwebsite.webm"
    : "/images/zellanwebsite.png";

const imgWoyane =
  window.innerWidth > 700
    ? "/images/WoyaneDeFi.webm"
    : "/images/WoyaneDeFi.png";

export const work = [
  {
    title: "Zellan Creative Center",
    description:
      'Construction de site web 🚧  de A à Z. Rédaction, production, editing des vidéos "Zellan interviews" 🎥 Editing des podcasts de Hanna Tadesse Haile 🎙️  Rédaction d\'articles ✍🏽  Editing and publication des ebooks de Alexander A. Hizikias 📚',
    image: imgZellan,
    tags: ["html", "css", "sass", "js", "gsap"],
    source: "https://github.com/GMLJ/Zellan",
    visit: "https://zellan.art/",
    id: 0,
  },
  {
    title: "Woyane Defi",
    description:
      "EN COURS - Site Web de Woyane DeFi - Construction de site web 🚧  de A à Z. Services de consulting sur les sujets relevant des technologies Blockchain et NFTs.",
    image: imgWoyane,
    tags: ["html", "css", "sass", "js"],
    source: "https://github.com/GMLJ/Woyane-DeFi",
    visit: "https://woyanedefi.netlify.app/#",
    id: 1,
  },
];

export const projects = [
  {
    title: "Portfolio",
    description:
      "Code source du portfolio disponible en open source sur Github.",
    image: "/images/portfolio.png",
    tags: ["react", "gsap", "framer-motion"],
    source: "https://github.com/GMLJ/Portfolio",
    id: 0,
  },
  {
    title: "Blog",
    description:
      "Blog construit en MERN Stack. Avec fonctionnalités d'enregistrement de profil, login, création et post de nouveaux articles etc...",
    image: "/images/blog.png",
    tags: ["MongoDB", "Express", "React", "Node js"],
    source: "https://github.com/GMLJ/Blog-MERN-Stack",
    id: 1,
  },
  {
    title: "Carte Choroplèthe",
    description:
      'Carte Choroplèthe réalisée avec D3.js pour la certification "Data Visualisation" de FreeCodeCamp.',
    image: "/images/choropleth.png",
    tags: ["html", "css", "js", "D3"],
    source: "https://codepen.io/GMLJ/pen/VwWWyVN",
    id: 2,
  },
  {
    title: "Podomoro",
    description:
      'Minuteur Podomoro réalisé en Javascript pour la certification "Front End Development Librairies" de FreeCodeCamp',
    image: "/images/podomoro.png",
    tags: ["html", "css", "js"],
    source: "https://codepen.io/GMLJ/pen/vYmyxYv",
    id: 3,
  },
  {
    title: "Heat Map",
    description:
      'Carte Thermique réalisée avec D3.js pour la certification "Data Visualisation" de FreeCodeCamp',
    image: "/images/heatmap.png",
    tags: ["html", "css", "js", "D3"],
    source: "https://codepen.io/GMLJ/full/dyROgGR",
    id: 4,
  },
  {
    title: "Calculatrice",
    description:
      'Calculatrice en Javascript réalisée pour la certification "Front End Development Librairies" de FreeCodeCamp',
    image: "/images/calc.png",
    tags: ["html", "css", "js"],
    source: "https://codepen.io/GMLJ/pen/ExmVpmO",
    id: 5,
  },
  {
    title: "Bar Chart",
    description:
      'Diagramme réalisée avec D3.js pour la certification "Data Visualisation" de FreeCodeCamp',
    image: "/images/barchart.png",
    tags: ["html", "css", "js", "D3"],
    source: "https://codepen.io/GMLJ/details/YzQzvYr",
    id: 6,
  },
  {
    title: "Critiques JV",
    description:
      "Application basique afin de découvrir le développement mobile sur React Native.",
    image: "/images/reviews.png",
    tags: ["react native", "expo"],
    source: "https://github.com/GMLJ/Reviews-App-React-Native",
    id: 7,
  },
  {
    title: "Shifumi",
    description: 'Jeu de "pierre, papier, ciseaux" codé en Javascript.',
    image: "/images/shifumi.png",
    tags: ["html", "css", "js"],
    source: "https://github.com/GMLJ/RockPaperScissors",
    id: 8,
  },
];
