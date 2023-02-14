import React, { useState, useEffect } from 'react';

const SoundButton = (props) => {
  return (
    <div
      onClick={() => props.handleSoundPlay(props.soundName)}
      className="drum-pad"
      id={props.soundName}
    >
      {props.keyTrigger}
      <audio className="clip" id={props.keyTrigger} src={props.url} />
    </div>
  );
};

const SoundButtons = (props) => {
  const [soundData, setSoundData] = useState([
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
  ]);

  return (
    <div className="button-container">
      {soundData.map((sound) => (
        <SoundButton
          key={sound.id}
          soundName={sound.id}
          handleSoundPlay={props.handleSoundPlay}
          keyTrigger={sound.keyTrigger}
          url={sound.url}
        />
      ))}
    </div>
  );
};

export default SoundButtons;