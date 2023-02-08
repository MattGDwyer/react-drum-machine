import React, { useState } from 'react';
import './tailwind.css';
import './App.css'
import ToggleSwitch from './ToggleSwitch';

const App = () => {
  const [volume, setVolume] = useState(50);
  const [power, setPower] = useState(true);
  const [soundSet, setSoundSet] = useState(1);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handlePowerToggle = () => {
    setPower(!power);
    console.log(power)
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
        <h3 className="text-lg font-medium">Power {power ? 'On' : 'Off'}</h3>
        <ToggleSwitch onToggle={handlePowerToggle}/>
        </div>
        <div className="w-1/2 ml-10 text-center">
          <h3 className="text-lg font-medium">Bank: {soundSet}</h3>
          <ToggleSwitch onToggle={handleSoundSetToggle}/>
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
  className="w-full range accent-gray-500"
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


{/* <div className="mt-10">
<h3 className="text-lg font-medium">Volume: {volume}</h3>
<input
  type="range"
  min="0"
  max="100"
  value={volume}
  onChange={handleVolumeChange}
  className="w-full"
/>
</div> */}