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
};

export function Faq() {
  return (
    <>
      <div>
        <div className="acordion">
          <Question
            question={
              "¿Que diferencia hay entre ser Socio, y  solamente Donar?"
            }
            answer={
              "A la hora de ser un socio, estas inscribiendote a pagar una suscripcion mensual o anual de dinero con la cual estas apoyando directamente a los bomberos voluntarios de Lanus. Ademas de que volverte socio te permite tener algunos beneficios. Por otra parte, Donar al cuartel de bomberos, tambien ayuda a el cuartel a la hora de sus gastos en mejores equipamientos o infraestructura. Con un monto personalizable que puedes elegir completamente a tu gusto."
            }
          />
          <Question
            question={"Al inscribirme como bombero ¿Tengo un salario o pago?"}
            answer={"No, La realidad es que a la hora de inscribirte como un bombero con nosotros, estas haciendolo de una manera voluntaria por tu cuenta. Sin contar con una remuneracion o dinero por tu trabajo. Por otra parte, mientras mas años de servicios tengas, los bomberos cuentan con una jubilacion diferente y mejor que la de ciudadanos comunes. Premiando a su servicio"}
          />
          <Question
            question={"¿Con que beneficios cuenta un bombero?"}
            answer={"Mencionado antes, Los bomberos si cuentan con una cobertura medica en caso de accidentes, con asistencia medica, farmaceutica, traslados, rehabilitacion, etc. Como tambien una prestacion economica en caso de incapacidad laboral. Como tambien una pension por tu retiro tras completar años de servicio"}
          />
          <Question
            question={"¿Como bombero, puedo contar con otro oficio?"}
            answer={"Asi es. Como sabemos que tus cuentas no se pagaran solas, puedes contar con tantos empleos quieras. Esto siempre y cuando para ti no te perjudique en tus horarios para prestar tu servicio al cuartel. Asi que piensalo con cautela."}
          />
          <Question
            question={
              "¿Que diferencia hay entre un bombero voluntario, y de la ciudad?"
            }
            answer={"respuesta"}
          />
          <Question
            question={"¿Los bomberos se manejan con horarios de trabajo?"}
            answer={"respuesta"}
          />
          <Question
            question={"¿En donde se encuentran repartido los destacamentos?"}
            answer={"respuesta"}
          />
        </div>
      </div>
    </>
  );
}
