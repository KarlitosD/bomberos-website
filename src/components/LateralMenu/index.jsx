import { Link } from "react-router-dom"
import * as styles from "./style.module.css"

export const LateralMenu = () => {
    return (
        <>
            <div className={styles.menu}>
                <Link to="/admin" className={styles.link}>Mi perfil</Link>
                <Link to="/admin/socios" className={styles.link}>Socios</Link>
                <Link to="/admin/aspirantes" className={styles.link}>Aspirantes</Link>
                <Link to="/admin/pagos" className={styles.link}>Pagos</Link>
            </div>
        </>
    )
}