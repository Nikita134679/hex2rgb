import React, { useState } from 'react';
import './ColorConverter.css';

const ColorConverter: React.FC = () => {
  const [hexValue, setHexValue] = useState<string>('');
  const [rgbValue, setRgbValue] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setHexValue(input);

    if (input.length === 7) {
      if (/^#[0-9A-Fa-f]{6}$/i.test(input)) {
        setBackgroundColor(input);
        setError(false);

        const r = parseInt(input.slice(1, 3), 16);
        const g = parseInt(input.slice(3, 5), 16);
        const b = parseInt(input.slice(5, 7), 16);
        setRgbValue(`rgb(${r}, ${g}, ${b})`);
      } else {
        setBackgroundColor('#ff0000');
        setError(true);
        setRgbValue('');
      }
    } else {
      setError(false);
      setRgbValue('');
      setBackgroundColor('#ffffff');
    }
  };

  return (
    <div className="converter" style={{ backgroundColor }}>
      <input
        type="text"
        value={hexValue}
        onChange={handleInputChange}
        maxLength={7}
        placeholder="Enter HEX color code"
        className="input-box"
      />
      <div>
        {error ? (
          <p className="error-message">Ошибка!</p>
        ) : (
          rgbValue && <p className="rgb-result">RGB: {rgbValue}</p>
        )}
      </div>
    </div>
  );
};

export default ColorConverter;