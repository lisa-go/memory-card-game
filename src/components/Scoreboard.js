export default function Scoreboard({ pickedCards, highScore }) {
    return(
        <div id="Scoreboard">
            <div className="highScore">
                High Score: {highScore}
            </div>
            <div className="currentScore">
                Score: {pickedCards.length}
            </div>
        </div>
    )
}