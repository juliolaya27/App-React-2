import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
        <h1>Hola Bienvenido</h1>
        <p>Conoce las 100 criptomonedas mas usadas</p>
        <Link to="/criptomonedas">Ver</Link>
        </>
    )
} 

export default Home