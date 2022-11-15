import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";

  const Question = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
      <div className={styles.question}>
        <div className={styles.barra1} onClick={() => setIsClicked(!isClicked)}>
          <h3>{props.question}</h3>
          {isClicked ? <h2>-</h2> : <h2>+</h2>}
        </div>
        <div className={styles.barra2}>
          {isClicked ? <p className={styles.answer}>{props.answer}</p> : <p></p>}
        </div>
      </div>
    );
  };

export function InfoAss() {
  const Card = ({ title, description }) => {
    return (
      <div className={styles.question}>
        <div className={styles.barra1}>
          <h2>{title}</h2>
        </div>
        <div className={styles.barra2}>{description}</div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.acordion}>
          <Question
            question={
              "¿Que son los socios?"
            }
            answer={
              "Los socios para nuestro son miembros y personas como tu, que pueden pagar una suscripcion mensual o anual con la que pueden apoyar a el cuartel de bomberos de lanus."
            }
          />
          <Question
            question={"¿Que beneficios tienen?"}
            answer={
              'Actualmente, los socios que estan inscriptos a nuestro destacamento, pueden obtener algunos beneficios como *completar*'
            }
          />
          <Question
            question={"Me interesa la cuestion de ser socio. ¿Pero como me inscribo?"}
            answer={
              <p>
              El formulario es este:{" "}
              <Link to="/formulario/socios">
                {" "}
                <a>¡Da click Aqui!</a>{" "}
              </Link>
            </p>
            }
          />
        </div>
      </div>
    </>
  );
}
