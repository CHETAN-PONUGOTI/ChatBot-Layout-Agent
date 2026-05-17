import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages, loading }) {
  const markerRef = useRef(null);

  useEffect(() => {
    markerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 custom-scrollbar">
      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-slate-500 text-sm">
          <p>Request canvas dynamic resizing or structural shifts.</p>
          <p className="text-xs mt-1 italic">Example: "Convert this layout layout to 9:16 and scale down headline"</p>
        </div>
      )}
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
      {loading && (
        <div className="flex justify-start mb-4 animate-pulse">
          <div className="bg-slate-800 border border-slate-700 text-slate-400 rounded-xl rounded-bl-none px-4 py-2 text-sm">
            Reasoning new coordinates layout rules...
          </div>
        </div>
      )}
      <div ref={markerRef} />
    </div>
  );
}