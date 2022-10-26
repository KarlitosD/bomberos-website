import { Header } from "@/components/Header";
import { useState } from "react";
import "./style.css";

const Question = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    return (
      <div className="question">
        <div className="barra1" onClick={() => setIsClicked(!isClicked)}>
          <h3>{props.question}</h3>
          {isClicked ? <h2>-</h2> : <h2>+</h2>}
        </div>
        <div className="barra2">
          {isClicked ? <p>{props.answer}</p> : <p></p>}
        </div>
      </div>
    );
  }

export function Faq() {
  return (
    <>
      
      <div>
        <div className="acordion">
          <Question
            question={"¿Que diferencia hay entre ser Socio, y  solamente Donar?"}
            answer={"No se amigo, me mataste"}
          />
          <Question
            question={"Al inscribirme como bombero ¿Tengo un salario o pago?"}
            answer={"No"}
          />
          <Question
            question={"¿Con que beneficios cuenta un bombero?"}
            answer={"Algo de la jubilacion y honor"}
          />
          <Question
            question={"¿Como bombero, puedo contar con otro oficio?"}
            answer={"Si"}
          />
          <Question
            question={"¿Que diferencia hay entre un bombero voluntario, y de la ciudad?"}
            answer={"uno es voluntario y otro de la ciudad"}
          />
          <Question
            question={"¿Los bomberos se manejan con horarios de trabajo?"}
            answer={"no"}
          />
          <Question
            question={"¿En donde se encuentran repartido los destacamentos?"}
            answer={"por ahi"}
          />
        </div>
      </div>
    </>
  );
}
