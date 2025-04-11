export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export type Language = 'en' | 'fr';

export type Theme = 'light' | 'dark';

export type ContactForm = {
  email: string;
  message: string;
}

export type Translations = {
  [key in Language]: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    competencies: {
      title: string;
      dataEngineering: {
        title: string;
        description: string;
      };
      fullStack: {
        title: string;
        description: string;
      };
      cloud: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
    };
    projects: {
      title: string;
      learnMore: string;
      backToHome: string;
      notFound: string;
      overview: string;
      overviewText: string;
      features: string;
      featuresList: {
        scalability: string;
        monitoring: string;
        deployment: string;
        documentation: string;
      };
      technical: string;
      technicalText: string;
    };
    contact: {
      title: string;
      description: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    footer: {
      copyright: string;
    };
  };
};