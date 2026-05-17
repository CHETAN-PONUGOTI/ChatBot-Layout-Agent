import { useState, useCallback } from 'react';
import { sendChatMessage } from '../utils/api';
import initialLayoutData from '../data/initialLayout.json';

export function useLayoutAgent() {
  const [layout, setLayout] = useState(initialLayoutData);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim()) return;

    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const historyCtx = messages.slice(-6);
      const data = await sendChatMessage(text, layout, historyCtx);

      setLayout(data.updatedLayout);
      setMessages((prev) => [...prev, { role: 'assistant', content: data.explanation }]);
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message || 'Transformation error.';
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Error: ${errorMsg}. Please try again.` }
      ]);
    } finally {
      setLoading(false);
    }
  }, [layout, messages]);

  return { layout, messages, loading, sendMessage };
}