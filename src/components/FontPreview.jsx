import React from 'react';

export function FontPreview({ text, fontSize, selectedFont }) {
  return (
    <div className="mb-8 rounded-lg border bg-white p-8 text-center">
      <h3 className="mb-2 text-sm text-gray-500">
        {selectedFont.name} by {selectedFont.designer}
      </h3>
      <div
        className="min-h-[100px] break-words"
        style={{
          fontFamily: selectedFont.name,
          fontSize: `${fontSize}px`
        }}
      >
        {text}
      </div>
    </div>
  );
}