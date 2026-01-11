import { GoogleGenerativeAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const ai = new GoogleGenerativeAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const modelName = 'gemini-1.5-flash';
    const model = ai.getGenerativeModel({
      model: modelName,
      systemInstruction: "You are MediBot, a helpful and friendly medical assistant AI. You provide general health information but always remind users that you are not a replacement for professional medical advice. Be concise, empathetic, and clear."
    });

    const chat = model.startChat({
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text() || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my medical database right now. Please try again later.";
  }
};
