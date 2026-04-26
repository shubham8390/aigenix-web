import { BrandAssets } from '../../shared/brand-assets';

export interface HeroContent {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CaseStudyContent {
  eyebrow: string;
  title: string;
  clientProfile: string;
  strategicConcern: string;
  engagement: string;
  phase1Title: string;
  phase1Body: string;
  pilotBullets: readonly string[];
  metricsTitle: string;
  metricsBody: string;
  phase2Title: string;
  phase2Body: string;
  impactTitle: string;
  impactBody: string;
  demonstratesTitle: string;
  demonstratesBullets: readonly string[];
  demonstratesClosing: string;
  imageSrc: string;
  imageAlt: string;
}

export interface InsightsGalleryImage {
  src: string;
  alt: string;
}

export interface InsightsContent {
  title: string;
  description: string;
  referenceLabel: string;
  referenceHref: string;
  gallery: readonly InsightsGalleryImage[];
}

export interface FoundersTalkContent {
  title: string;
  description: string;
  ctaLabel: string;
  posterSrc: string;
  posterAlt: string;
}

export interface WhatWeDoPillar {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  linkPath: string;
}

export interface WhatWeDoContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  pillars: readonly WhatWeDoPillar[];
  products: readonly { name: string; logoSrc: string; alt: string }[];
}

export interface CareersContent {
  title: string;
  body: string;
  ctaLabel: string;
  ctaPath: string;
}

/** Structured like AiGenix Website Content (4).docx — HBS-style program bands, AiGenix copy. */
export interface FounderProgramCard {
  title: string;
  description: string;
  ctaLabel: string;
  ctaPath: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FounderProgramsContent {
  layoutNote: string;
  layoutHref: string;
  headline: string;
  sectionTitle: string;
  belief: string;
  programs: readonly FounderProgramCard[];
  communityHeadline: string;
  communityCtaLabel: string;
  communityCtaPath: string;
}

export interface HomeContent {
  hero: HeroContent;
  caseStudy: CaseStudyContent;
  insights: InsightsContent;
  foundersTalk: FoundersTalkContent;
  whatWeDo: WhatWeDoContent;
  founderPrograms: FounderProgramsContent;
  careers: CareersContent;
}

export const HOME_CONTENT: HomeContent = {
  hero: {
    title: 'What will move you forward?',
    subtitle:
      'Work that matters. Growth that lasts. At AiGenix, we help you think bigger, build stronger, and expand opportunity for all.',
    imageSrc: BrandAssets.heroPrimary,
    imageAlt: 'AiGenix — technology and people shaping the future of work',
  },
  caseStudy: {
    eyebrow: 'Case study',
    title: 'Enabling agentic transformation in a service-based IT enterprise',
    clientProfile:
      'The client was a mid-sized service-based IT company operating in custom software development and enterprise solutions. The organization had strong technical capabilities and consistent revenue growth of approximately ₹42 crore annually. Operational efficiency was high in delivery functions. Projects were executed on time, teams were structured, and internal documentation standards were strong. However, despite technical maturity, the company had not transitioned toward agentic intelligence. Leadership recognized the potential of AI but lacked clarity on readiness, risk exposure, and internal adoption capability. The organization was efficient, but not autonomous.',
    strategicConcern:
      'Leadership faced three critical uncertainties: First, internal readiness. While teams were technically skilled, there was no clarity on whether workflows were structured enough to support agentic execution. Second, governance risk. The company served enterprise clients and operated under strict compliance requirements. Any AI deployment required controlled experimentation. Third, commercial positioning. The company wanted to offer agentic solutions to external enterprise clients but lacked internal proof of capability. They did not want to sell what they had not operationalized. The question was not whether to go agentic. The question was how to do so without destabilizing internal systems.',
    engagement:
      'AiGenix began with a structured Agentic Readiness Assessment across three layers: operational workflows, technical infrastructure, and organizational culture. Over a six-week diagnostic cycle, we mapped delivery processes, internal reporting structures, sales workflows, and client communication systems. We measured workflow standardization, decision dependency ratios, automation density, and data integrity levels. The readiness assessment revealed: Approximately 68% of internal workflows were structured enough to support agentic augmentation. However, decision rights were loosely defined in cross-functional processes, and KPI ownership lacked formal clarity. The organization had operational efficiency but lacked agentic orchestration.',
    phase1Title: 'Phase 1: Internal pilot architecture',
    phase1Body:
      'Rather than enterprise-wide deployment, AiGenix designed controlled internal pilots. Two pilot zones were selected: internal project reporting and milestone tracking; and pre-sales qualification and proposal structuring. AI agents were deployed to monitor project timelines, flag delivery risk thresholds, and automate milestone compliance reporting. In pre-sales, agents assisted in requirement parsing, proposal draft structuring, and response standardization. Clear performance metrics were defined before deployment.',
    pilotBullets: [
      'Internal project reporting and milestone tracking',
      'Pre-sales qualification and proposal structuring',
    ],
    metricsTitle: 'Pilot metrics (90-day cycle)',
    metricsBody:
      'Project reporting turnaround time reduced by 46%, decreasing reporting preparation effort from an average of 11 hours per week per project manager to under 6 hours. Milestone risk identification improved, with 32% faster escalation of delivery blockers compared to the previous quarter. Pre-sales proposal preparation time reduced by 38%, enabling the team to respond to more enterprise RFPs without increasing headcount. Internal AI adoption confidence increased, measured via leadership survey, from 4.8/10 pre-deployment to 8.1/10 post-pilot. No compliance breaches or data exposure incidents occurred during the pilot phase. The organization gained internal proof of controlled agentic augmentation.',
    phase2Title: 'Phase 2: Market positioning and external deployment',
    phase2Body:
      'Following successful internal validation, AiGenix supported the client in formalizing an “Agentic Solutions Practice” for enterprise customers. Internal pilots were converted into case-backed offerings. Governance frameworks were documented. AI usage policies were formalized for enterprise sales conversations. Within two quarters of launching the external positioning: The company secured three enterprise contracts specifically referencing agentic workflow capabilities. Average deal size in AI-related proposals increased by 24% compared to standard service offerings. Sales cycle duration for AI-integrated proposals reduced by 17%, driven by structured value articulation. The organization transitioned from AI-curious vendor to AI-structured partner.',
    impactTitle: 'Strategic impact',
    impactBody:
      'The transformation did not begin with external marketing. It began with internal validation. By sequencing readiness assessment, controlled pilot deployment, and governance structuring before market positioning, the company reduced strategic risk while increasing commercial credibility. Operational efficiency evolved into structured agentic intelligence. The enterprise did not experiment recklessly with AI. It institutionalized it.',
    demonstratesTitle: 'What this demonstrates',
    demonstratesBullets: [
      'Assess readiness.',
      'Deploy controlled pilots.',
      'Measure outcomes.',
      'Formalize governance.',
      'Then scale externally.',
    ],
    demonstratesClosing:
      'This is how autonomy becomes an enterprise advantage, not an operational liability. Agentic transformation in service-based enterprises must follow a disciplined path.',
    imageSrc: BrandAssets.caseStudyImage,
    imageAlt: 'Human and AI reaching together — partnership between people and intelligent systems',
  },
  insights: {
    title: 'AiGenix insights',
    description:
      'Subscribe to the latest AiGenix insights on the topics you care about — agentic systems, enterprise adoption, and responsible scale.',
    referenceLabel: 'Editorial reference — McKinsey insights layout',
    referenceHref: 'https://www.mckinsey.com/',
    gallery: [
      {
        src: BrandAssets.researchPaper1,
        alt: 'Research and analysis on enterprise AI adoption',
      },
      {
        src: BrandAssets.researchPaper3,
        alt: 'Insights brief on agentic systems',
      },
      {
        src: BrandAssets.agentDialScene,
        alt: 'AgentDial — human-centered AI collaboration',
      },
    ],
  },
  foundersTalk: {
    title: "The Founder's Talk",
    description:
      "A space for clarity in a rapidly evolving world. The Founder's Talk brings together perspectives from AiGenix founders on AI breakthroughs, leadership, and the ideas shaping the future of business and society.",
    ctaLabel: 'Watch here',
    posterSrc: BrandAssets.foundersPoster,
    posterAlt: "Founder's Talk video cover",
  },
  whatWeDo: {
    eyebrow: 'What we do',
    title: 'Let’s turn your biggest opportunities into your next big moves.',
    subtitle: 'Products, consulting, and founder programs — unified by agentic intelligence.',
    pillars: [
      {
        title: 'Industry expertise',
        body: 'From regulated environments to mission-critical operations, we help you deploy agentic systems with governance, safety, and proof that stand up to real-world scrutiny.',
        imageSrc: BrandAssets.whatWeDoIndustry,
        imageAlt: 'Advanced energy and mission-critical industry context for AI',
        linkPath: '/consulting',
      },
      {
        title: 'Capabilities at scale',
        body: 'We redesign how you sell, operate, and deliver—embedding agentic workflows, platforms like Salesforce, and measurable outcomes across the teams that touch your customers.',
        imageSrc: BrandAssets.whatWeDoCapabilities,
        imageAlt: 'Teams and leaders driving operational transformation',
        linkPath: '/consulting',
      },
      {
        title: 'Technology & AI',
        body: 'We build and ship intelligent products—agentic SaaS, orchestration, and tooling designed to adapt with your business as models, data, and markets evolve.',
        imageSrc: BrandAssets.whatWeDoTech,
        imageAlt: 'Technology, data, and AI systems shaping the next wave of products',
        linkPath: '/product',
      },
    ],
    products: [
      { name: 'AgentDial', logoSrc: BrandAssets.agentDialLogo, alt: 'AgentDial product logo' },
      { name: 'AgentSuite', logoSrc: BrandAssets.agentSuiteLogo, alt: 'AgentSuite product logo' },
      { name: 'AI Agent Factory', logoSrc: BrandAssets.aiAgentFactoryLogo, alt: 'AI Agent Factory product logo' },
    ],
  },
  founderPrograms: {
    layoutNote: 'Layout pattern reference — Harvard Business School MBA',
    layoutHref: 'https://www.hbs.edu/mba',
    headline: 'We help founders build ventures that make a lasting difference.',
    sectionTitle: 'We help founders at any level',
    belief:
      'We believe that while people and ideas are widely distributed, opportunity and resources are not. That is why we designed founder programs we would have wanted at the start: practical, rigorous, and built for the era of agentic intelligence.',
    programs: [
      {
        title: 'AiGenix Catalyst',
        description:
          'A twelve-week, virtual venture-studio program that gives you training, tools, mentorship, and a curated network—so you can sharpen your narrative, your product, and your path to what comes next.',
        ctaLabel: 'Learn more',
        ctaPath: '/startups',
        imageSrc: BrandAssets.heroSecondary,
        imageAlt: 'Founders collaborating during an AiGenix Catalyst session',
      },
      {
        title: 'Founder Sprint',
        description:
          'A three-day intensive where you experience the pace of building and launching: problem framing, agentic workflows, storytelling, and a credible artifact you can share with partners or customers.',
        ctaLabel: 'Learn more',
        ctaPath: '/startups',
        imageSrc: BrandAssets.teamPhoto,
        imageAlt: 'Founders at an AiGenix Sprint workshop',
      },
      {
        title: 'AiGenix Week',
        description:
          'A celebration of entrepreneurship in your city—sessions, opening moments, keynotes, pitch opportunities, and collisions that connect builders, operators, and capital around what is next.',
        ctaLabel: 'Learn more',
        ctaPath: '/startups',
        imageSrc: BrandAssets.researchPaper1,
        imageAlt: 'AiGenix Week sessions and community',
      },
    ],
    communityHeadline: 'Join the AiGenix founder community.',
    communityCtaLabel: 'Join the community',
    communityCtaPath: '/startups',
  },
  careers: {
    title: 'Looking for your next move?',
    body: 'We look for people who are energized by the same things as our clients: bold thinking, real impact, and the courage to move first.',
    ctaLabel: 'Explore careers',
    ctaPath: '/company',
  },
};
