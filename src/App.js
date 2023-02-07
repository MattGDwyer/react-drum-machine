import React, { useState } from 'react';
import { Row, Column } from 'react-bootstrap';

const App = () => {
  const [volume, setVolume] = useState(50);
  const [power, setPower] = useState(true);
  const [soundSet, setSoundSet] = useState(1);

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
    <div className="container">
      <Row>
        <h2>Drum Machine</h2>
      </Row>
      <div>
        <h3>Volume: {volume}</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div>
        <h3>Power: {power ? 'On' : 'Off'}</h3>
        <button onClick={handlePowerToggle}>Toggle Power</button>
      </div>
      <div>
        <h3>Sound Set: {soundSet}</h3>
        <button onClick={handleSoundSetToggle}>Toggle Sound Set</button>
      </div>
      <div>
        <button onClick={() => handleSoundPlay('sound1')}>Sound 1</button>
        <button onClick={() => handleSoundPlay('sound2')}>Sound 2</button>
        <button onClick={() => handleSoundPlay('sound3')}>Sound 3</button>
        <button onClick={() => handleSoundPlay('sound4')}>Sound 4</button>
        <button onClick={() => handleSoundPlay('sound5')}>Sound 5</button>
        <button onClick={() => handleSoundPlay('sound6')}>Sound 6</button>
        <button onClick={() => handleSoundPlay('sound7')}>Sound 7</button>
        <button onClick={() => handleSoundPlay('sound8')}>Sound 8</button>
        <button onClick={() => handleSoundPlay('sound9')}>Sound 9</button>
      </div>
    </div>
  );
};

export default App;