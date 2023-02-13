import React, { useState } from 'react';
import './tailwind.css';
import './App.css'
import ToggleSwitch from './ToggleSwitch';
import VolumeControl from './VolumeControl';
import SoundButtons from './SoundButtons';

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
    <div className="drum-machine" id="drum-machine">
      <h2 className="title border-bottom">BKK Boom Chic</h2>
      <div className="toggle-container">
        <div className="left-toggle">
          <h3 className="toggle-title">Power {power ? 'On' : 'Off'}</h3>
          <ToggleSwitch onToggle={handlePowerToggle} />
        </div>
        <div className="right-toggle">
          <h3 className="toggle-title">Bank: {soundSet}</h3>
          <ToggleSwitch onToggle={handleSoundSetToggle} />
        </div>
      </div>
      <VolumeControl volume={volume} handleVolumeChange={handleVolumeChange} />
      <SoundButtons handleSoundPlay={handleSoundPlay} />
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

{/* <div className="button-container">
<button onClick={() => handleSoundPlay('sound1')} className="button-sound">Sound 1</button>
<button onClick={() => handleSoundPlay('sound2')} className="button-sound">Sound 2</button>
<button onClick={() => handleSoundPlay('sound3')} className="button-sound">Sound 3</button>
<button onClick={() => handleSoundPlay('sound4')} className="button-sound">Sound 4</button>
<button onClick={() => handleSoundPlay('sound5')} className="button-sound">Sound 5</button>
<button onClick={() => handleSoundPlay('sound6')} className="button-sound">Sound 6</button>
<button onClick={() => handleSoundPlay('sound7')} className="button-sound">Sound 7</button>
<button onClick={() => handleSoundPlay('sound8')} className="button-sound">Sound 8</button>
<button onClick={() => handleSoundPlay('sound9')} className="button-sound">Sound 9</button>
</div> */}