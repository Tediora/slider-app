import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import ShoePNG from './ShoePNG.png';

const SliderExample = () => {
  const [hue, setHue] = useState(0); // Start with no hue rotation
  const [saturation, setSaturation] = useState(100); // Start with normal saturation
 
  const imageSrc = ShoePNG;

  const handleHueChange = (value) => {
    setHue(value);
  };

  const handleSaturationChange = (value) => {
    setSaturation(value);
  };

  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      {/* Image Container */}
      <div style={{
        width: '300px',
        maxWidth: '95%',
        height: '300px',
        margin: '10px auto 50px auto',
        borderRadius: '30px 30px 0 0',
        overflow: 'hidden'
      }}>
        <img 
          src={imageSrc}
          alt="Adjustable image" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: `saturate(${saturation}%) hue-rotate(${hue}deg)`,
            transition: 'filter 0.3s ease'
          }}
        />
      </div>
      
      {/* Sliders */}
      <Slider 
        min={0} 
        max={350} 
        step={5} 
        defaultValue={0} 
        onChange={handleHueChange} 
        label="Hue"
      />
      <Slider 
        min={0} 
        max={150} 
        step={5} 
        defaultValue={100} 
        onChange={handleSaturationChange} 
        label="Saturation"
      />
    </div>
  );
};

export default SliderExample;