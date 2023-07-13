const Card = () => {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="hotel" />
            <div className="description">
                <h4 className="superHost">SUPER HOST</h4>
                <p className="descripcionApartamento">Entire. 2 beds</p>
                <span className="material-symbols-outlined">
                    star 
                </span>
                <p className="caliicacion">4.59</p>
            </div>
            <h3 className="desccripcionLugar">Stylist apartment in center of te city</h3>
        </div>
    )
}

export default Card;