import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

export function FontList({ fonts, onSelectFont, previewText }) {
  return (
    <div className="grid gap-4">
      {fonts.map((font) => (
        <div
          key={font.name}
          className="flex items-center justify-between rounded-lg border bg-white p-6"
        >
          <div className="flex-1">
            <h3 className="mb-2 text-sm text-gray-500">
              {font.name} by {font.designer}
            </h3>
            <div
              className="text-3xl"
              style={{ fontFamily: font.name }}
            >
              {previewText}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              onClick={() => onSelectFont(font)}
            >
              Try
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}