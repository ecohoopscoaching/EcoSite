
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCoachFeedback = async (userPrompt: string, base64Image?: string) => {
  const ai = getAI();
  const modelName = base64Image ? 'gemini-3-flash-preview' : 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are 'Coach Gemini' for EcoHoops, a revolutionary youth basketball program.
    Our philosophy is 'Street + Science + Soul'.
    We believe in:
    1. Progressive Play: Master the self (1v1) before the unit (3v3).
    2. Mental Resilience: We build people, not just pros.
    3. Anti-Elite: We focus on thinking players, not just athletic ones.
    
    When responding:
    - Be encouraging, professional, and insightful.
    - Use basketball terminology (spacing, IQ, triple threat, handle, rotation).
    - If an image is provided (like a shooting form or drill), analyze the mechanics and give 3 constructive tips.
    - Keep responses concise but high-impact.
  `;

  try {
    const parts: any[] = [{ text: userPrompt }];
    
    if (base64Image) {
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Image
        }
      });
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: { parts },
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Coach is currently reviewing the play. (Error connecting to AI service)";
  }
};
