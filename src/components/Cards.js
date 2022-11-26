

export default function Cards({ card }) {

    const handleClick = () => {
        console.log('hi')
    }

    return(
        <div className="cardContainer">
            <div className="card" onClick={handleClick}>
                <img src={card.image} />
                <p>{card.name}</p>
            </div>
        </div>
    )
}