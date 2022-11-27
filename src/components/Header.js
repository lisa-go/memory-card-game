import { TiLightbulb } from 'react-icons/ti';
import React, { useState } from 'react';

export default function Header() {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return(
        <div id="Header">
            <div className="Logo">Niji Memory Game</div>
            <div className="Help"
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut} >
                <TiLightbulb size={30} />

                {isHovering && (
                <div title="Tooltip">
                    Testing Tooltip
                </div>
            )}
            </div>
        </div>
    )
}