import './menu.css'
import { Link } from 'react-router-dom'


const Menu = () => {
    return(
        <nav className="main-menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/criptomonedas">Lista de Criptomonedas</Link></li>
            </ul>
        </nav>
    )
}

export default Menu