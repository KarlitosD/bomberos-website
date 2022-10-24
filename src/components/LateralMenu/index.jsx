import { Link } from "wouter"
import "./style.css"

export const LateralMenu = () => {
    return (
        <>
            <div className="menu">
                <Link to="/admin">Mi perfil</Link>
                <Link to="/admin/socios">Socios</Link>
                <Link to="/admin/pagos">Pagos</Link>
                <Link to="/admin/aspirantes">Aspirantes</Link>
            </div>
        </>
    )
}