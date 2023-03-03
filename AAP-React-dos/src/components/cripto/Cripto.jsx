import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({ name, priceUSD, symbol, changePercent24Hr, id }) => {

    return (
        <Link to={`/criptomonedas/${id}`}>
            <div>

                <div className="cripto">
                    <h2>{name}</h2>
                    <div className="info">
                        <p><span className="label">Precio: </span>{parseFloat(priceUSD).toFixed(3)}</p>
                        <p><span className="label">Codigo: </span>{symbol}</p>
                        <p>
                            <span className="label">Porcentaje: </span>
                            <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                                {parseFloat(changePercent24Hr).toFixed(3)}%
                            </span>
                        </p>


                    </div>
                </div>
            </div>

        </Link >

    )

}

export default Cripto
