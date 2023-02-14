import React, { useState, useEffect } from 'react';
import './tailwind.css';
import './App.css'
import Display from './Display';
import ToggleSwitch from './ToggleSwitch';
import VolumeControl from './VolumeControl';
import SoundButtons from './SoundButtons';

const App = () => {
  const [volume, setVolume] = useState(50);
  const [power, setPower] = useState(false);
  const [soundSet, setSoundSet] = useState(1);
  const [lastPlayedSound, setLastPlayedSound] = useState('');

  const soundData = [
    {
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

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
    setLastPlayedSound(sound);
    const parentElement = document.getElementById(sound);
    const audioElement = parentElement.firstElementChild;
    audioElement.currentTime = 0;
    audioElement.addEventListener('loadeddata', () => {
      audioElement.load();
    });
    audioElement.play()
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const sound = soundData.find((s) => s.keyTrigger === event.key.toUpperCase());
      if (sound) {
        handleSoundPlay(sound.id);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleSoundPlay, soundData]);

  return (
    <div className="drum-machine" id="drum-machine">
      <h2 className="title border-bottom">BKK Boom Chic</h2>
      <Display
        volume={volume}
        power={power}
        soundSet={soundSet}
        sound={lastPlayedSound}
      />
      <div className="toggle-container">
        <div className="left-toggle">
          <h3 className="toggle-title">Power</h3>
          <ToggleSwitch onToggle={handlePowerToggle} />
        </div>
        <div className="right-toggle">
          <h3 className="toggle-title">Bank</h3>
          <ToggleSwitch onToggle={handleSoundSetToggle} />
        </div>
      </div>
      <VolumeControl volume={volume} handleVolumeChange={handleVolumeChange} />
      <SoundButtons handleSoundPlay={handleSoundPlay} />
    </div>
  );
};

export default App;