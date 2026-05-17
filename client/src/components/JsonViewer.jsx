import React, { useState } from 'react';

export default function JsonViewer({ json }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Active Layout Matrix Configuration Schema JSON</span>
        <button
          onClick={handleCopy}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md transition-colors"
        >
          {copied ? 'Copied Realtime Schema JSON!' : 'Copy Schema'}
        </button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto text-xs font-mono text-emerald-400 custom-scrollbar leading-relaxed">
        <pre>{JSON.stringify(json, null, 2)}</pre>
      </div>
    </div>
  );
}