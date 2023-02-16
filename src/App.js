import React, { useState, useEffect, useRef } from 'react';
import './tailwind.css';
import './App.css'
import Display from './Display';
import ToggleSwitch from './ToggleSwitch';
import VolumeControl from './VolumeControl';
import { soundData } from './SoundData';
import SoundButtons from './SoundButtons';

const App = () => {
  const [volume, setVolume] = useState(50);
  const [power, setPower] = useState(false);
  const [soundSet, setSoundSet] = useState(1);
  const [lastPlayedSound, setLastPlayedSound] = useState('');
  const [isVolumeDisabled] = useState(true);
  const [isSoundBankDisabled] = useState(true);

  const audioRef = useRef(null);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handlePowerToggle = () => {
    setPower(!power);
    console.log(power);
    const volumeSlider = document.getElementById("volume-slider");
    const soundBankToggle = document.getElementById("sound-bank-toggle");
    if (!power) {
      volumeSlider.disabled = true;
      soundBankToggle.disabled = true;
    } else {
      volumeSlider.disabled = false;
      soundBankToggle.disabled = false;
    }
  };

  const handleSoundSetToggle = () => {
    setSoundSet(soundSet === 1 ? 2 : 1);
  };

  useEffect(() => {
    audioRef.current = new Audio();
  }, []);

  const handleSoundPlay = (sound) => {
    console.log(`Playing sound: ${sound}`);
    setLastPlayedSound(sound);
    if (!power) {
      return; // If power is off, don't play the sound
    }
    const audioElement = audioRef.current;
    audioElement.src = soundData[soundSet - 1].find((s) => s.id === sound).url;
    audioElement.volume = volume / 100;
    audioElement.currentTime = 0;
    audioElement.play();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const sound = soundData[soundSet - 1].find((s) => s.keyTrigger === event.key.toUpperCase());
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
      <h2 className="title border-bottom">React Drum Machine</h2>
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
          <ToggleSwitch
            onToggle={handleSoundSetToggle}
            isDisabled={isSoundBankDisabled} />
        </div>
      </div>
      <VolumeControl volume={volume}
        handleVolumeChange={handleVolumeChange}
        isDisabled={isVolumeDisabled}
      />
      <SoundButtons
        handleSoundPlay={handleSoundPlay}
        volume={volume}
        soundSet={soundSet}
      />
    </div>
  );
};

export default App;