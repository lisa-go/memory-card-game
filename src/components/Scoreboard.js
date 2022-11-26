

export default function Scoreboard({ pickedCards, highScore }) {


    return(
        <div>
            <div className="currentScore">
                Score: {pickedCards.length}
            </div>
            
            <div className="highScore">
                High Score: {highScore}
            </div>
            </div>
    )
}