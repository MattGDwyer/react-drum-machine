import React, { useState, useEffect } from 'react';

const SoundButton = (props) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
        props.handleSoundPlay(props.soundName);
    };

    const handleRelease = () => {
        setIsPressed(false);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === props.keyTrigger.toLowerCase() || event.key === props.keyTrigger.toUpperCase()) {
                setIsPressed(true);
                props.handleSoundPlay(props.soundName);
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === props.keyTrigger.toLowerCase() || event.key === props.keyTrigger.toUpperCase()) {
                setIsPressed(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [props.keyTrigger, props.handleSoundPlay, props.soundName]);

    return (
        <div
            onMouseDown={handlePress}
            onMouseUp={handleRelease}
            onTouchStart={handlePress}
            onTouchEnd={handleRelease}
            className="drum-pad"
            id={props.soundName}
            style={{ backgroundColor: isPressed ? '#000000' : props.bgColor, color: isPressed ? '#FFFFFF' : props.textColor }}
        >
            {props.keyTrigger}
            <audio className="clip" id={props.keyTrigger} src={props.url} />
        </div >
    );
};

export default SoundButton;

