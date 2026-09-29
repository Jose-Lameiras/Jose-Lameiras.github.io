// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Jose-Lameiras', // O teu utilizador do GitHub
  },
  /**
   * Como estás a publicar em https://Jose-Lameiras.github.io/,
   * a propriedade base tem de ser obrigatoriamente '/'
   */
  base: '/',
  projects: {
    github: {
      display: true, // Mostrar projetos do GitHub
      header: 'Projetos GitHub',
      mode: 'automatic', // Procura automaticamente os teus repositórios
      automatic: {
        sortBy: 'updated', // Ordena pelos mais recentemente atualizados
        limit: 8, // Número máximo de projetos a mostrar
        exclude: {
          forks: true, // Esconde repositórios que sejam forks (como o próprio gitprofile)
          projects: ['Jose-Lameiras/novaApp'], // Esconde explicitamente a novaApp
        },
      },
      manual: {
        projects: [], 
      },
    },
    external: {
      header: 'Outros Projetos',
      projects: [], // Deixado vazio para esconder esta secção
    },
  },
  seo: {
    title: 'Portfólio & CV | José Lameiras',
    description: 'Portfólio e Currículo de José João Figueiredo Lameiras - Licenciado em Engenharia Informática.',
    imageURL: '',
  },
  social: {
    linkedin: '', // Se tiveres LinkedIn, coloca o teu username aqui (ex: 'jose-lameiras')
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+351 912 665 710',
    email: 'josejoao342@gmail.com',
  },
  resume: {
    fileUrl: '', // Coloca aqui o link do PDF do teu CV quando o alojares online
  },
  skills: [
    'Java',
    'Python',
    'C',
    'PHP',
    'JavaScript',
    'TypeScript',
    'Kotlin',
    'React Native',
    'Assembly',
    'HTML/CSS',
    'Linux (Ubuntu)',
    'Docker',
    'Git',
    'Jira',
    'Azure',
    'Cisco CCNA',
    'REST APIs',
    'SQL',
    'NoSQL',
  ],
  experiences: [
    {
      company: 'Mariparque',
      position: 'Membro do Staff',
      from: 'Junho 2023',
      to: 'Setembro 2024',
      companyLink: '',
    },
    {
      company: 'Jornada Mundial da Juventude',
      position: 'Membro do Staff',
      from: 'Agosto 2023',
      to: 'Agosto 2023',
      companyLink: '',
    },
    {
      company: 'AC Partners',
      position: 'Operário de Qualidade e Embalamento',
      from: 'Junho 2021',
      to: 'Setembro 2021',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Cisco CCNA',
      body: 'Routing & Switching',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Escola Superior de Tecnologia de Castelo Branco (IPCB)',
      degree: 'Licenciatura em Engenharia Informática',
      from: '2021',
      to: '2026',
    },
    {
      institution: 'Escola Secundária Calazans Duarte',
      degree: 'Ciências e Tecnologias',
      from: '',
      to: '',
    },
  ],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'procyon', // Um tema escuro e moderno para TI/Engenharia

    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
  },

  footer: `Criado por José Lameiras com <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
