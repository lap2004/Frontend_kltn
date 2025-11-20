import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert history to the format expected by the chat (if utilizing chat history feature)
    // Ideally, we use ai.chats.create if we want to maintain stateful history on the server side,
    // but here we will just use generateContent for simplicity or stateless requests,
    // OR construct a chat session. Let's use a chat session for better context.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: "You are MediBot, a helpful and friendly medical assistant AI. You provide general health information but always remind users that you are not a replacement for professional medical advice. Be concise, empathetic, and clear."
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my medical database right now. Please try again later.";
  }
};
