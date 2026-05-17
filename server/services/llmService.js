import { GoogleGenAI } from '@google/genai';

export async function callLLM(systemPrompt, history, userMessage) {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("CRITICAL: GEMINI_API_KEY is undefined. Check your server/.env file configuration.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  contents.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: contents,
    config: {
      systemInstruction: systemPrompt,
      responseMimeType: 'application/json',
      temperature: 0.1
    }
  });

  let cleanText = response.text.trim();
  if (cleanText.startsWith('```')) {
    cleanText = cleanText.replace(/^```json\s*/i, '').replace(/```$/, '').trim();
  }

  return JSON.parse(cleanText);
}