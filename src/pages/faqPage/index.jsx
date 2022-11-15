import { useState } from "react";
import styles from "./style.module.css";

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

export function Faq() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.acordion}>
          <Question
            question={"¿Qué diferencia hay entre ser Socio y simplemente Donar?"}
            answer={
              "La diferencia radica en que la Donación es voluntaria y sin obligación de renovación mensual, mientras que el Socio abona mensualmente un monto fijo establecido con anterioridad por la Asociación de Bomberos Voluntarios de Lanús, con posibilidades de participar en actividades y elecciones de la Asociación de B.V.L al cumplir un minimo de tiempo establecido de 2 (dos) años continuos."
            }
          />
          <Question
            question={"Como bombero ¿Puedo contar con otro oficio?"}
            answer={
              'Si! Bomberos Voluntarios de Lanús es una institución conformada por vecinos capacitados e instruidos en la labor de incendio y rescate, que realizan la profesión "Ad Honorem" y quienes realizan en su vida cotidiana diferentes actividades laborales no necesariamente referiada a Bomberos.'
            }
          />
          <Question
            question={"¿Qué horarios tiene un bombero?"}
            answer={
              "Bomberos brinda un servicio ininterrumido los 365 dias del año, sin embargo, se realizan diferentes agrupaciones del personal quienes cumpliran por un lapso de una semana consecutiva el servicio de guardia (servicios a la comunidad, salidas de emergencias y de no emergencia, mantenimiento y puesta en valor de unidades y materiales, etc.) siendo relevados por sus pares al finalizar el período, asegurando la rápida y eficaz atención ante una emergencia. Sin embargo, el personal que tenga inconveniencia al cumplimiento de guardia (por motivo laboral o personal), puede hacerse cubrir por un par."
            }
          />
          <Question
            question={"¿En dónde se encuentran los destacamentos?"}
            answer={
              'Bomberos Voluntarios de Lanús cuenta su cede central en Raul Alfonsin N° 1039, y posee dos destacamentos: El primero de ellos "Destacamento N°1 Villa Mauricio" ubicado en la calle Matanza N° 2798 Y El segundo "Destacamento N°2 Escuadra de Reserva" ubicado en la calle Tte. Cnel. Bueras Nº 4341'
            }
          />
          <Question
            question={
              "¿Existen restricciones por sexo o edad para inscribirse a los bomberos voluntarios?"
            }
            answer={
              "No hay distinción de sexo para ingresar a Bomberos Voluntarios de Lanús, aunque si se estableció el límite de edad de 39 Años para ingresar."
            }
          />
        </div>
      </div>
    </>
  );
}
