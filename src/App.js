import React, { useState } from 'react';
import './App.css'
import './tailwind.css';
import ToggleSwitch from './ToggleSwitch';

const App = () => {
  const [volume, setVolume] = useState(50);
  const [power, setPower] = useState(true);
  const [soundSet, setSoundSet] = useState(1);
  const [toggle, setToggle] = useState(false);

  const handleSetToggle = () => {
    setToggle(!toggle);
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handlePowerToggle = () => {
    setPower(!power);
  };

  const handleSoundSetToggle = () => {
    setSoundSet(soundSet === 1 ? 2 : 1);
  };

  const handleSoundPlay = (sound) => {
    console.log(`Playing sound: ${sound}`);
  };

  return (
    <div className="flex flex-col justify-center align-center items-center h-70vh bg-white pb-10 border">
<h2 className="text-xl text-center w-100% font-bold border-bottom">BKK Boom Chic</h2>
  <div className="flex mt-10">
    <div className="w-1/2 text-center">
    <h3 className="text-lg font-medium">Power</h3>
    <ToggleSwitch onChange={handleSetToggle}/>
    {/* <button 
      onClick={handlePowerToggle} 
      className={`w-10 h-10 rounded-full shadow-lg ${power ? 'bg-green-500' : 'bg-red-500'}`}
    >
      {power ? 'On' : 'Off'}
    </button> */}
    </div>
    <div className="w-1/2 ml-10 text-center">
      <h3 className="text-lg font-medium">Bank: {soundSet}</h3>
      <ToggleSwitch />
      {/* <button onClick={handleSoundSetToggle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Toggle Sound Set
      </button> */}
    </div>
  </div>
  <div className="mt-10">
    <h3 className="text-lg font-medium">Volume: {volume}</h3>
    <input
      type="range"
      min="0"
      max="100"
      value={volume}
      onChange={handleVolumeChange}
      className="w-full"
    />
  </div>
  <div className="mt-10 flex flex-wrap">
    <button onClick={() => handleSoundPlay('sound1')} className="w-1/3 mb-3">Sound 1</button>
    <button onClick={() => handleSoundPlay('sound2')} className="w-1/3 mb-3">Sound 2</button>
    <button onClick={() => handleSoundPlay('sound3')} className="w-1/3 mb-3">Sound 3</button>
    <button onClick={() => handleSoundPlay('sound4')} className="w-1/3 mb-3">Sound 4</button>
    <button onClick={() => handleSoundPlay('sound5')} className="w-1/3 mb-3">Sound 5</button>
    <button onClick={() => handleSoundPlay('sound6')} className="w-1/3 mb-3">Sound 6</button>
    <button onClick={() => handleSoundPlay('sound7')} className="w-1/3 mb-3">Sound 7</button>
    <button onClick={() => handleSoundPlay('sound8')} className="w-1/3 mb-3">Sound 8</button>
    <button onClick={() => handleSoundPlay('sound9')} className="w-1/3 mb-3">Sound 9</button>
  </div>
</div>
  );
};

export default App;