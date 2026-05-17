import React from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import WireframePreview from './components/WireframePreview';
import JsonViewer from './components/JsonViewer';
import { useLayoutAgent } from './hooks/useLayoutAgent';

export default function App() {
  const { layout, messages, loading, sendMessage } = useLayoutAgent();

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden antialiased">
      <header className="h-14 border-b border-slate-900 flex items-center px-6 shrink-0 bg-slate-950">
        <h1 className="text-base font-bold tracking-wider text-white uppercase flex items-center gap-2">
          Chat-Based Layout Engine Agent
        </h1>
      </header>

      <main className="flex-1 flex overflow-hidden p-4 gap-4">
        <div className="w-1/3 flex flex-col h-full shrink-0">
          <ChatWindow messages={messages} loading={loading} />
          <ChatInput onSend={sendMessage} disabled={loading} />
        </div>

        <div className="flex-1 flex flex-col h-full gap-4 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 h-full">
            <div className="flex flex-col h-full">
              <div className="text-xs font-semibold text-slate-400 mb-2 tracking-wider uppercase">Live Realtime Wireframe View</div>
              <WireframePreview layout={layout} />
            </div>
            <div className="flex flex-col h-full">
              <JsonViewer json={layout} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}