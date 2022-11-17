import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";
import { Tutorial } from "../../components/Tutorial";

const Question = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className={styles.question}>
      <div className={styles.barra1} onClick={() => setIsClicked(!isClicked)}>
        <h3>{props.question}</h3>
        {isClicked ? <h2>-</h2> : <h2>+</h2>}
      </div>
      <div className={styles.barra2}>
        {isClicked ? (
          <div className={styles.answer}>{props.answer}</div>
        ) : (
          <p></p>
        )}
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
            question={"¿Que son los socios?"}
            answer={
              <p>
                Los socios para nuestro son miembros y personas como tu, que
                pueden pagar una suscripcion mensual o anual con la que pueden
                apoyar a el cuartel de bomberos de lanus.
              </p>
            }
          />
          <Question
            question={"¿Que beneficios tienen?"}
            answer={
              <p>
                Actualmente, los socios que estan inscriptos a nuestro
                destacamento, pueden obtener algunos beneficios como *completar*
              </p>
            }
          />
          <Question
            question={"Me interesa ser socio. ¿Pero como me inscribo?"}
            answer={
              <div className={styles.tutorialContainer}>
                <Tutorial />
                <Link to="/formulario/socios" className={styles.assLink}>
                  ASOCIATE
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
