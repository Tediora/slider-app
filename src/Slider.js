import React, { useState } from 'react';
import "@fontsource/jura/700.css"; 

const Slider = ({ min = 0, max = 100, step = 1, defaultValue = 50, onChange, label }) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="slider-container">
     
        <div className="label-container">
          {label && <label className="slider-label">{label}</label>}
        </div>
        <div className="slider-row">
        <div className="slider-value-container">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            className="slider"
          />
          <div className="slider-value">{value}</div>
        </div>
      </div>
      <style>
        {`
          .slider-container {
            font-family: 'Jura', sans-serif;
            font-weight: 600;
            color: #414141;
            margin: 40px 0 0 0;
          }
          .slider-row {
            display: flex;
            align-items: center;
          }
          .label-container {
            flex: 1;
            font-size: medium;
            text-align: left;
            margin-bottom: 6px;
          }
          .slider-label {
            
          }
          .slider-value-container {
            display: flex;
            align-items: center;
            gap: 20px;
            flex: 1;
          }
          .slider {
            flex: 1;
            -webkit-appearance: none;
            height: 4px;
            background: #C3C3C3;
            border-radius: 40px;
            outline: none;
          }
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: #4297DE;
            border-radius: 30px;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: #4297DE;
            border-radius: 30px;
            cursor: pointer;
          }
          .slider-value {
            width: 10px;
            text-align: right;
            font-size: small;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;