import React from 'react';
import './App.css'

const VolumeControl = (props) => {
    return (
        <div className="volume">
            <h3 className="volume-title">Volume</h3>
            <input
                type="range"
                min="0"
                max="100"
                value={props.volume}
                onChange={props.handleVolumeChange}
                className="volume-range"
            />
        </div>
    );
};

export default VolumeControl;