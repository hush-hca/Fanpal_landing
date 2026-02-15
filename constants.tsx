
import React from 'react';
import { Persona, PersonaType, PricingPlan } from './types';
import { Sparkles, BarChart3, Search, Lightbulb } from 'lucide-react';

export const PERSONAS: Persona[] = [
  {
    id: 'hype',
    name: 'Hype Mate',
    type: PersonaType.HYPE_MAN,
    description: 'Endless praise and enthusiastic reactions. Never let your work go unnoticed.',
    icon: 'Sparkles'
  },
  {
    id: 'analyst',
    name: 'Lore Master',
    type: PersonaType.ANALYST,
    description: 'In-depth analysis and expert inference. Connects the dots you missed.',
    icon: 'BarChart3'
  },
  {
    id: 'theorist',
    name: 'Deep Theorist',
    type: PersonaType.THEORIST,
    description: 'Builds wild, lore-accurate theories to keep the momentum alive.',
    icon: 'Search'
  },
  {
    id: 'prompt',
    name: 'Prompt Genie',
    type: PersonaType.PROMPT_GEN,
    description: 'Suggests "What if..." scenarios for your next masterpiece.',
    icon: 'Lightbulb'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$9.9/mo',
    features: [
      '1 AI Fandom Mate',
      '5 daily reactions',
      'Weekly analysis report',
      'Twitter/X Integration'
    ]
  },
  {
    name: 'Pro',
    price: '$29.9/mo',
    recommended: true,
    features: [
      '3 AI Mates (different personalities)',
      'Unlimited reactions',
      'Customized creative prompts',
      'Rare image discovery',
      'Priority Lore updates'
    ]
  },
  {
    name: 'Custom',
    price: '$49.9/once',
    features: [
      '1 Dedicated Persona',
      'Perfect speech replication',
      'Specific character persona',
      'Lifetime basic updates',
      'Direct API access'
    ]
  }
];
