import { Link } from "wouter";
import style from "./style.module.css";

const Card = ({ title, description }) => {
  return (
    <div className={style.question}>
      <div className={style.barra1}>
        <h2>{title}</h2>
      </div>
      <div className={style.barra2}>
        {description}
      </div>
    </div>
  );
};

export function InfoApp() {
  return (
    <>
      <div className={style.rowInfo}>
        <h1>¡Bienvenido! Pareces estar interesado en ser bombero</h1>
        <h2>Dejanos contarte: ¿Que son los bomberos voluntarios?</h2>
        <Card
          title="¿Que es un bombero?"
          description={<p>*Informacion a completar*</p>}
        />
        <Card
          title="¿Y que beneficios tienen?"
          description={<p>*Informacion*</p>}
        />
        <Card
          title="Me interesa la cuestion de ser bombero. ¿Pero como me inscribo?"
          description={
            <p>
              El formulario es este:{" "}
              <Link to="/formulario/aspirantes">
                ¡Quiero Inscribirme!
              </Link>
            </p>
          }
        />
      </div>
    </>
  );
}
