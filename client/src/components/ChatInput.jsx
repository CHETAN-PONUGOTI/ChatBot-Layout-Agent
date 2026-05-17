import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    onSend(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        placeholder="Type adjustment instruction..."
        className="flex-1 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 disabled:opacity-50 tracking-wide"
      />
      <button
        type="submit"
        disabled={disabled || !text.trim()}
        className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white p-3 rounded-xl transition-all shadow-md active:scale-95 disabled:scale-100 disabled:opacity-40"
      >
        <Send size={18} />
      </button>
    </form>
  );
}