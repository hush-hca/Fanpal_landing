
export enum PersonaType {
  HYPE_MAN = 'Hype-man',
  ANALYST = 'Analyst',
  THEORIST = 'Theorist',
  PROMPT_GEN = 'Creative Prompt Generator'
}

export interface Persona {
  id: string;
  name: string;
  type: PersonaType;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}
