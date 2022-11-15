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

export function InfoApp() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.acordion}>
          <Question
            question={
              "¿Que es un bombero?"
            }
            answer={
              "Actualmente vacio"
            }
          />
          <Question
            question={"¿Que beneficios tienen?"}
            answer={
              'Actualmente vacio'
            }
          />
          <Question
            question={"Me interesa ser bombero. ¿Pero como me inscribo?"}
            answer={
              <p>
              El formulario es este:{" "}
              <Link to="/formulario/aspirantes">
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
