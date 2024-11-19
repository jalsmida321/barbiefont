import React, { useState } from 'react';
import { FontControls } from './FontControls';
import { FontPreview } from './FontPreview';
import { FontList } from './FontList';

const BARBIE_FONTS = [
  { 
    name: "Classic Barbie Script",
    designer: "Mattel Design",
    style: "script",
    commercial: true
  },
  {
    name: "Dollie Script",
    designer: "Font Studio",
    style: "calligraphy",
    commercial: false
  },
  {
    name: "Barbie Medium",
    designer: "Type Factory",
    style: "sans-serif",
    commercial: true
  }
];

export function FontGenerator() {
  const [text, setText] = useState("Type something magical...");
  const [fontSize, setFontSize] = useState(32);
  const [commercialOnly, setCommercialOnly] = useState(false);
  const [selectedFont, setSelectedFont] = useState(BARBIE_FONTS[0]);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize[0]);
  };

  const handleCommercialToggle = () => {
    setCommercialOnly(!commercialOnly);
  };

  const filteredFonts = commercialOnly 
    ? BARBIE_FONTS.filter(font => font.commercial)
    : BARBIE_FONTS;

  return (
    <div className="container mx-auto py-8">
      <FontControls
        text={text}
        fontSize={fontSize}
        commercialOnly={commercialOnly}
        onTextChange={handleTextChange}
        onFontSizeChange={handleFontSizeChange}
        onCommercialToggle={handleCommercialToggle}
      />
      <FontPreview
        text={text}
        fontSize={fontSize}
        selectedFont={selectedFont}
      />
      <FontList
        fonts={filteredFonts}
        onSelectFont={setSelectedFont}
        previewText={text}
      />
    </div>
  );
}