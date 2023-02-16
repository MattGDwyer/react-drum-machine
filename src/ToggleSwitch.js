import React, { useState } from 'react';
import './App.css'

const ToggleSwitch = ({ onToggle }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div
        className={`relative w-12 h-6 bg-gray-400 cursor-pointer border ${toggle ? 'bg-green-500' : 'bg-red-500'}`}
        onClick={() => {
          setToggle(!toggle);
          onToggle && onToggle(toggle);
        }}
      >
        <div
          className="absolute top-0.4 left-0 w-5 h-5 bg-white transition-all ease-in-out 
                duration-300 toggle-square" style={{ top: '.4px', left: toggle ? '51%' : '0px' }}

        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;