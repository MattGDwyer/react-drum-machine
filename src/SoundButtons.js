import React from 'react';

const SoundButton = (props) => {
  return (
    <button
      onClick={() => props.handleSoundPlay(props.soundName)}
      className="button-sound"
    >
      {props.soundName}
    </button>
  );
};

const SoundButtons = (props) => {
  const soundNames = [
    'sound1',
    'sound2',
    'sound3',
    'sound4',
    'sound5',
    'sound6',
    'sound7',
    'sound8',
    'sound9'
  ];

  return (
    <div className="button-container">
      {soundNames.map((soundName) => (
        <SoundButton
          key={soundName}
          soundName={soundName}
          handleSoundPlay={props.handleSoundPlay}
        />
      ))}
    </div>
  );
};

export default SoundButtons;