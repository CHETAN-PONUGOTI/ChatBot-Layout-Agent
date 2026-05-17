import React from 'react';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm font-medium tracking-wide shadow-sm leading-relaxed ${
        isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700'
      }`}>
        {message.content}
      </div>
    </div>
  );
}