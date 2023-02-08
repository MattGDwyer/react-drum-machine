import React, { useState } from 'react';
import './App.css'

const ToggleSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
        <div 
        className={`relative w-10 h-5 bg-gray-400 cursor-pointer border ${toggle ? 'bg-green-500' : 'bg-red-500'}`}
        onClick={() => setToggle(!toggle)}
        >
        <div 
            className={`absolute top-1 left-1 w-3 h-3 bg-white shadow-md transition-all ease-in-out duration-300 ${toggle ? 'left-6' : 'left-1'}`}
        ></div>
        </div>
    </div>
  );
};

export default ToggleSwitch;