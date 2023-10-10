import React, { useState } from 'react';

function ColorBox({ initialColor }) {
  const [boxColor, setBoxColor] = useState(initialColor);

  const changeColor = () => {
    const newColor = ranchar();
    setBoxColor(newColor);
  };

  const ranchar = () => {
    const char = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += char[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      className="color-box"
      style={{
        backgroundColor: boxColor,
        width: '50px',
        height: '50px',
      }}
      onClick={changeColor}
    ></div>
  );
}

export default ColorBox;


// sorry zaid this for me, this file is is responsible for displying the indiviual color boxes.