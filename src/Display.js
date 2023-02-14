
import React, { useEffect, useState } from 'react';

const Display = ({ volume, power, soundSet, sound, soundName }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (!power) {
            setDisplayText('Power: Off');
        } else if (sound) {
            setDisplayText(`Sound Played: ${sound}`);
        } else if (volume) {
            setDisplayText(`Volume: ${volume}`);
        } else if (soundSet) {
            setDisplayText(`Sound Bank: ${soundSet}`);
        } else {
            setDisplayText("");
        }
    }, [power, sound, volume, soundSet, soundName]);

    useEffect(() => {
        if (volume && power) {
            setDisplayText(`Volume: ${volume}`);
        }
    }, [volume, power]);

    useEffect(() => {
        if (soundSet && power) {
            setDisplayText(`Sound Bank: ${soundSet}`);
        }
    }, [soundSet, power]);

    return (
        <p className="text-lg font-medium mt-10" id="display">{displayText}</p>
    );
};

export default Display;




