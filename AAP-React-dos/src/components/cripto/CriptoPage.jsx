import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"
import "./CriptoPage.css"

const CriptoPage = () => {

    const params = useParams()


    const cripto1 = usePetition(`assets/${params.id}`)
    const history1 = usePetition(`assets/${params.id}/history/?interval=d1`)



    return (
        <div className="cripto-page-container">
            {
                cripto && (
                    <div className="info">
                        <div className="main-info">
                            <span>Ranking: {cripto.rank}</span>
                            <h1>{cripto.name}</h1>
                            <span className="symbol">{cripto.symbol}</span>
                        </div>
                        <div className="details">
                            <ul>
                                <li className="detail">
                                    <span className="label">Precio: </span>
                                    <span>{parseFloatNumber(cripto.priceUsd, 3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label">MaxSupply: </span>
                                    <span>{parseFloatNumber(cripto.maxSupply, 3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label">Market Cap: </span>
                                    <span>{parseFloatNumber(cripto.marketCapUsd, 3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label"> Volumen (USD - 24  Hrs.):</span>
                                    <span>{parseFloatNumber(cripto.volumenUsd24Hr, 3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label"> Variacion (24  Hrs.):</span>
                                    <span>{parseFloatNumber(cripto.changePercent24Hr, 3)}</span>
                                </li>
                                <li className="detail">
                                    <span className="label"> Vwap 24 Hrs.: </span>
                                    <span>{parseFloatNumber(cripto.vwap24Hr, 3)}</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                )
            }



            <div className="history">
                {
                    (history) && (
                        <table>
                            <thead>
                                <try>
                                    <th>Fecha</th>
                                    <th>Precio</th>
                                </try>
                            </thead>
                            <tbody>
                                {
                                    history.map(({ date, priceUsd, time }) => (
                                        <try key={time}>
                                            <td className="label">{new Date(date).toDateString}</td>
                                            <td className="price">{parseFloatNumber(priceUsd, 3)}</td>

                                        </try>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }

            </div>



        </div>
    )
}

export default CriptoPage




