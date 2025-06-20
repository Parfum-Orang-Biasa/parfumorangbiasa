export interface Perfume {
    name: string;
    subtitle: string;
    description: string;
    notes: {
      top: string;
      middle: string;
      bottom: string;
    };
    ketahanan: string;
    dayaJejak: string;
    proyeksi: string;
    size: string;
    price: string;
    category: string;
    scent: string;
    tone: string;
    type: string;
    image: string;
    tags: string[];
    link: string;
    wavecolor: string[];
  }

export interface QuizOption {
    emoji: string;
    text: string;
    value: string[];
  }
  
export interface QuizQuestion {
    step: number;
    question: string;
    options: QuizOption[];
  }