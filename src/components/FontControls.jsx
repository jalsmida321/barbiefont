import React from 'react';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Toggle } from './ui/toggle';

export function FontControls({
  text,
  fontSize,
  commercialOnly,
  onTextChange,
  onFontSizeChange,
  onCommercialToggle
}) {
  return (
    <div className="mb-8 flex items-center gap-4 rounded-lg bg-pink-50 p-4">
      <Input
        className="max-w-[300px]"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type something magical..."
      />
      <div className="flex-1">
        <Slider
          value={[fontSize]}
          onValueChange={onFontSizeChange}
          max={72}
          min={12}
          step={1}
        />
      </div>
      <Toggle
        pressed={commercialOnly}
        onPressedChange={onCommercialToggle}
      >
        <span className="text-sm">Commercial-use</span>
      </Toggle>
    </div>
  );
}