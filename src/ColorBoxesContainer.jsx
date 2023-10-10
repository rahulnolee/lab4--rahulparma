import React from 'react';
import ColorBox from './ColorBox';

function ColorBoxesContainer({ colors }) {
  const boxSize = '50px';

  return (
    <div className="color-boxes-container">
      {colors.map((color, index) => (
        <ColorBox key={index} initialColor={color} />
      ))}
    </div>
  );
}

export default ColorBoxesContainer;

