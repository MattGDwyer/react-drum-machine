import React from 'react';
import { soundData } from './SoundData';
import SoundButton from './SoundButton';

const SoundButtons = (props) => {
  return (
    <div className="button-container">
      {soundData[props.soundSet - 1].map((sound) => (
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

// so I modify soundData to have 2 objects
// then I hand down which soundData to map over.
// that would like something like soundData[props.soundBank - 1].map
// does that trigger a rerender?