const brandPath = (file: string): string => `/brand/${encodeURIComponent(file)}`;

export const BrandAssets = {
  logoBlack: brandPath('Aigenix logo black.png'),
  logoWhite: brandPath('Aigenix logo white.png'),
  heroPrimary: brandPath('AiGenix Homepage img.jpg'),
  heroSecondary: brandPath('Aigenix Home page img 2.jpg'),
  caseStudyImage: brandPath('ai and human.jpg'),
  /** Previous case-study art; keep for reuse elsewhere. */
  articleCover: brandPath('Article 01.jpeg'),
  foundersPoster: brandPath('Linkedin Banner .png'),
  teamPhoto: brandPath('Rajveer D..jpg'),
  researchPaper1: brandPath('Research Paper 1 img.jpg'),
  researchPaper3: brandPath('Research Paper 3 img.jpg'),
  agentDialScene: brandPath('Agentdial img.jpg'),
  agentDialLogo: brandPath('agentdial logo.png'),
  agentSuiteLogo: brandPath('agentsuite logo.png'),
  aiAgentFactoryLogo: brandPath('aiagentfactory logo.png'),
  /** What we do — pillar imagery */
  whatWeDoIndustry: brandPath('ai-nuclear-energy.jpg'),
  whatWeDoCapabilities: brandPath('TaeJune15.jpg'),
  whatWeDoTech: brandPath('851.jpg'),
} as const;
