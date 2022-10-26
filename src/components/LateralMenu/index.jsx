import { Link } from "wouter"
import * as styles from "./style.module.css"

export const LateralMenu = () => {
    return (
        <>
            <div className={styles.menu}>
                <Link to="/" className={styles.link}>Mi perfil</Link>
                <Link to="/socios" className={styles.link}>Socios</Link>
                <Link to="/aspirantes" className={styles.link}>Aspirantes</Link>
                {/* <Link to="/pagos" className={link}>Pagos</Link> */}
            </div>
        </>
    )
}