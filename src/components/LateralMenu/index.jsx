import { Link } from "wouter"
import { menu, link} from "./style.module.css"

export const LateralMenu = () => {
    return (
        <>
            <div className={menu}>
                <Link to="/" className={link}>Mi perfil</Link>
                <Link to="/socios" className={link}>Socios</Link>
                <Link to="/aspirantes" className={link}>Aspirantes</Link>
                {/* <Link to="/pagos" className={link}>Pagos</Link> */}
            </div>
        </>
    )
}