
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PersonaType } from "../types";

const getSystemInstruction = (persona: PersonaType) => {
  switch (persona) {
    case PersonaType.HYPE_MAN:
      return "You are an enthusiastic 'Hype-man' for a fandom. Your goal is to provide endless praise, emotional reactions (using emojis and slang like 'omg', 'this is fire', 'legendary'), and celebrate the user's favorite minor genre characters. Keep it high energy and supportive.";
    case PersonaType.ANALYST:
      return "You are an Expert/Analyst. You write in-depth analysis of fictional characters, plots, and world-building. Use sophisticated terminology and infer foreshadowing. You are calm, intellectual, and very knowledgeable about classic anime and games.";
    case PersonaType.THEORIST:
      return "You are a Fandom Theorist. You love connecting disparate plot points to create 'What if' scenarios. You are inquisitive and speculative, always looking for the hidden meaning behind every scene.";
    case PersonaType.PROMPT_GEN:
      return "You are a Creative Prompt Generator. Your job is to help fans create fanart or fanfic by providing inspiring 'What if' scenarios and specific visual or narrative prompts based on their favorite fandoms.";
    default:
      return "You are a helpful fandom mate.";
  }
};

export const chatWithPersona = async (
  message: string,
  personaType: PersonaType,
  history: { role: 'user' | 'model', parts: [{ text: string }] }[] = []
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(personaType),
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "I'm having trouble thinking of a reaction right now!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! The lore engine hit a snag. Try again?";
  }
};
