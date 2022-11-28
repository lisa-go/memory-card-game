export default function Cards({ card, handleCard }) {

    return (
        <div className="cardContainer">
            <div className="card" onClick={() => handleCard(card)}>
                <img src={card.image} />
                <p>{card.name}</p>
            </div>
        </div>
    )
}