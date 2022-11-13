import React from "react";
import "./style.css";

export function User() {
    return (
        <>
            <div className="contenedor">
                <div className="credencial">
                    <div className="borderTop">
                        <h1>SOCIO</h1>
                        <h1>del cuerpo activo de la sociedad de Bomberos Voluntarios de Lanús</h1>
                    </div>
                    <div className="centro">
                        <div className="foto" />
                        <div className="borderRight">
                            <p className="cert">Certifico que el titular de la presente Señor/a</p>
                            <p>Nombre:</p>
                            <p>Apellido:</p>
                            <p>DNI:</p>
                            <p>Numero de socio:</p>
                            <p className="cert1">es SOCIO</p>
                        </div>
                    </div>
                    <p className="firm">Jefe_de_cuerpo Presidente</p>
                    <div className="borderBottom"/>
                </div>
            </div>
        </>
    )
}
