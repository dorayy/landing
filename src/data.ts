import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Data Pipeline Automation',
    description: 'Automated ETL pipeline processing 1M+ records daily using Apache Airflow and AWS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'AWS', 'Airflow', 'Big Data'],
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard built with React and D3.js',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'D3.js', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Cloud Data Warehouse',
    description: 'Enterprise data warehouse solution using Google BigQuery',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['GCP', 'BigQuery', 'dbt'],
  },
];

export const translations = {
  en: {
    hero: {
      title: 'Data Engineer & Full Stack Developer',
      subtitle: 'Transforming data into insights and building robust web applications. Specialized in data engineering with a strong background in full stack development.',
      cta: "Let's Connect",
    },
    competencies: {
      title: 'Core Competencies',
      dataEngineering: {
        title: 'Data Engineering',
        description: 'ETL pipelines, data warehousing, and big data processing',
      },
      fullStack: {
        title: 'Full Stack Development',
        description: 'Modern web applications with React, Node.js, and more',
      },
      cloud: {
        title: 'Cloud Architecture',
        description: 'AWS, GCP, and cloud-native solutions',
      },
      analytics: {
        title: 'Data Analytics',
        description: 'Business intelligence and data visualization',
      },
    },
    projects: {
      title: 'Featured Projects',
      learnMore: 'Learn More',
    },
    contact: {
      title: "Let's Connect",
      description: "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!",
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'An error occurred. Please try again.',
    },
    footer: {
      copyright: '© 2025 Doray Balassoupramanien. All rights reserved.',
    },
  },
  fr: {
    hero: {
      title: 'Ingénieur de Données & Développeur Full Stack',
      subtitle: 'Transformer les données en insights et créer des applications web robustes. Spécialisé en ingénierie des données avec une solide expérience en développement full stack.',
      cta: 'Me Contacter',
    },
    competencies: {
      title: 'Compétences Clés',
      dataEngineering: {
        title: 'Ingénierie des Données',
        description: 'Pipelines ETL, entrepôts de données et traitement big data',
      },
      fullStack: {
        title: 'Développement Full Stack',
        description: 'Applications web modernes avec React, Node.js et plus',
      },
      cloud: {
        title: 'Architecture Cloud',
        description: 'AWS, GCP et solutions cloud-native',
      },
      analytics: {
        title: 'Analyse de Données',
        description: 'Business intelligence et visualisation de données',
      },
    },
    projects: {
      title: 'Projets Phares',
      learnMore: 'En Savoir Plus',
    },
    contact: {
      title: 'Me Contacter',
      description: 'Je suis toujours intéressé par de nouveaux projets et opportunités. N\'hésitez pas à me contacter !',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Une erreur est survenue. Veuillez réessayer.',
    },
    footer: {
      copyright: '© 2025 Doray Balassoupramanien. Tous droits réservés.',
    },
  },
};