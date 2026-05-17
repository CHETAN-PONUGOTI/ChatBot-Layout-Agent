import React from 'react';

export default function WireframePreview({ layout }) {
  if (!layout || !layout.rootNodes) return null;
  const rootId = layout.rootNodes[0];
  const artboard = layout.nodes[rootId];
  if (!artboard) return null;

  const aspectRatio = artboard.height / artboard.width;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-center min-h-[380px]">
      <div 
        className="relative shadow-2xl overflow-hidden border border-slate-700 transition-all duration-300 ease-out"
        style={{
          width: '100%',
          maxWidth: aspectRatio > 1 ? '240px' : '380px',
          aspectRatio: `${artboard.width} / ${artboard.height}`,
          backgroundColor: artboard.data?.backgroundColor || '#ffffff'
        }}
      >
        {artboard.children?.map((id) => {
          const node = layout.nodes[id];
          if (!node || node.type === 'artboard') return null;

          const fillStyle = node.type === 'image' 
            ? 'rgba(59, 130, 246, 0.15)' 
            : node.type === 'shape' 
              ? (node.style?.visual?.fill?.value || '#F4CF1B')
              : 'transparent';

          const borderStyle = node.type === 'image' 
            ? '1px dashed rgba(59, 130, 246, 0.6)' 
            : node.type === 'text' 
              ? '1px solid rgba(245, 158, 11, 0.3)' 
              : 'none';

          return (
            <div
              key={id}
              className="absolute flex items-center justify-center text-center p-0.5 select-none overflow-hidden transition-all duration-300 ease-out"
              style={{
                left: `${node.nx * 100}%`,
                top: `${node.ny * 100}%`,
                width: `${node.nw * 100}%`,
                height: `${node.nh * 100}%`,
                backgroundColor: fillStyle,
                border: borderStyle,
                borderRadius: node.shapeType === 'circle' ? '50%' : '0px',
                zIndex: node.name === 'Background.png' ? 1 : 10
              }}
            >
              {node.type === 'text' && (
                <span 
                  className="text-slate-900 font-bold tracking-tight leading-none break-words"
                  style={{ fontSize: Math.max(7, (node.style?.visual?.fontSize || 24) * 0.15) }}
                >
                  {node.data?.content}
                </span>
              )}
              {node.type === 'image' && node.name !== 'Background.png' && (
                <span className="text-[9px] text-blue-400 font-semibold uppercase tracking-wider bg-slate-900/80 px-1 py-0.5 rounded">
                  {node.name.replace('.png', '')}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}