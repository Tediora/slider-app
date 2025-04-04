import React, { useState } from 'react';

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
      <div className="slider-row">
        {label && <label className="slider-label">{label}</label>}
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
            font-family: Fira Code, Consolas, 'Courier New', monospace;
            font-weight: 500;
            color: #414141;
            margin: 60px 0 0 0;
          }
          .slider-row {
            display: flex;
            align-items: center;
          }
          .slider-label {
            margin-right: 16px;
            font-size: medium;
            text-align: left;
          }
          .slider-value-container {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1;
          }
          .slider {
            flex: 1;
            -webkit-appearance: none;
            height: 4px;
            background: #C3C3C3;
            border-radius: 30px;
            outline: none;
          }
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            background: #4297DE;
            border-radius: 50%;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            background: #4297DE;
            border-radius: 50%;
            cursor: pointer;
          }
          .slider-value {
            text-align: center;
            font-size: medium;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;