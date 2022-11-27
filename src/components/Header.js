import { TiLightbulb } from 'react-icons/ti';
import ReactTooltip from 'react-tooltip';

export default function Header() {
    return(
        <div id="Header">
            <div className="Logo">Niji Memory Game</div>
            <div className="Help" 
                data-tip="
                Click on a card to score a point! 
                Clicking the same card twice will end the game.
                ">
                <TiLightbulb size={30} />
                <ReactTooltip />
            </div>
        </div>
    )
}