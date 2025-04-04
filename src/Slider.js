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
            font-family: sans-serif;
            color: #414141;
            margin: 50px 0;
          }
          .slider-row {
            display: flex;
            align-items: center;
          }
          .slider-label {
            min-width: 150px;
            margin-left: -225px;
            margin-right: 75px;
            color: #FFF;
            font-size: large;
            font-weight: 500;
            text-align: right;
            
          }
          .slider-value-container {
            display: flex;
            align-items: center;
            gap: 16px;
            flex: 1;
          }
          .slider {
            flex: 1;
            -webkit-appearance: none;
            height: 5px;
            background: #C3C3C3;
            border-radius: 30px;
            outline: none;
          }
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            background: #828282;
            border-radius: 50%;
            cursor: pointer;
          }
          .slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
            background: #828282;
            border-radius: 50%;
            cursor: pointer;
          }
          .slider-value {
            min-width: 40px;
            text-align: center;
            font-weight: 500;
            font-size: large;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;