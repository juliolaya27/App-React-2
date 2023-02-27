import "./Cripto.css"

const Cripto = ({ name, priceUSD }) => {

    return (
        <div>

            <div className="cripto">
                <h2>{name}</h2>
                <div className="info">
                    <p><span className="label">Precio: </span>{priceUSD}</p>

                </div>
            </div>
        </div>
    )

}

export default Cripto