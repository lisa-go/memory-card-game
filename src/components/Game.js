import React, { useState } from 'react';
import Cards from "./Cards";
import Scoreboard from "./Scoreboard";
import Shuffle from "./Shuffle";
import Aia from '../images/Aia.png';
import Alban from '../images/Alban.png';
import Aster from '../images/Aster.png';
import Elira from '../images/Elira.png';
import Enna from '../images/Enna.png';
import Finana from '../images/Finana.png';
import Fulgur from '../images/Fulgur.png';
import Ike from '../images/Ike.png';
import Kyo from '../images/Kyo.png';
import Luca from '../images/Luca.png';
import Maria from '../images/Maria.png';
import Millie from '../images/Millie.png';
import Mysta from '../images/Mysta.png';
import Nina from '../images/Nina.png';
import Petra from '../images/Petra.png';
import Pomu from '../images/Pomu.png';
import Reimu from '../images/Reimu.png';
import Ren from '../images/Ren.png';
import Rosemi from '../images/Rosemi.png';
import Scarle from '../images/Scarle.png';
import Selen from '../images/Selen.png';
import Shu from '../images/Shu.png';
import Sonny from '../images/Sonny.png';
import Uki from '../images/Uki.png';
import Vox from '../images/Vox.png';
import Yugo from '../images/Yugo.png';

export default function Game() {
    const [allCards, setCards] = useState([
        {name: 'Aia', image: Aia}, 
        {name: 'Alban', image: Alban}, 
        {name: 'Aster', image: Aster}, 
        {name: 'Elira', image: Elira}, 
        {name: 'Enna', image: Enna}, 
        {name: 'Finana', image: Finana}, 
        {name: 'Fulgur', image: Fulgur}, 
        {name: 'Ike', image: Ike}, 
        {name: 'Kyo', image: Kyo},
        {name: 'Luca', image: Luca}, 
        {name: 'Maria', image: Maria}, 
        {name: 'Millie', image: Millie}, 
        {name: 'Mysta', image: Mysta}, 
        {name: 'Nina', image: Nina}, 
        {name: 'Petra', image: Petra}, 
        {name: 'Pomu', image: Pomu}, 
        {name: 'Reimu', image: Reimu}, 
        {name: 'Ren', image: Ren}, 
        {name: 'Rosemi', image: Rosemi}, 
        {name: 'Scarle', image: Scarle}, 
        {name: 'Selen', image: Selen}, 
        {name: 'Shu', image: Shu}, 
        {name: 'Sonny', image: Sonny}, 
        {name: 'Uki', image: Uki}, 
        {name: 'Vox', image: Vox}, 
        {name: 'Yugo', image: Yugo} ]);

    const [pickedCards, setPickedCards] = useState([]);

    const [highScore, setHighScore] = useState(0);

    const handleCard = (card) => {
        if (pickedCards.length >= 26) {
            alert('You Win!');
        }
        else if (pickedCards.includes(card)) {
            alert('You Lose!');
            
            if (pickedCards.length > highScore) {
                setHighScore(pickedCards.length);
            }
            setPickedCards([]);
        }
        else {
        setPickedCards([...pickedCards, card]);
        setCards(Shuffle(allCards));
        console.log(pickedCards);
        }
    }



    return(
        <div>
            <Scoreboard 
                pickedCards={pickedCards} 
                highScore={highScore} />

            <div id="gameContainer">
                {allCards.map((card) => {
                    return(
                        <Cards 
                            key={card.name} 
                            card={card} 
                            handleCard={handleCard} />
                    )
                })}
            </div>
        </div>
    )
}