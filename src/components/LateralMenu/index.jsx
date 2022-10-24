import { Link } from "wouter"
import "./style.css"

export const LateralMenu = () => {
    return (
        <>
            <div className="menu">
                <Link to="/">Mi perfil</Link>
                <Link to="/socios">Socios</Link>
                <Link to="/aspirantes">Aspirantes</Link>
                <Link to="/pagos">Pagos</Link>
            </div>
        </>
    )
}