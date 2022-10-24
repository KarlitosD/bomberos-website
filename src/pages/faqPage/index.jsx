import { Header } from "@/components/Header";
import {useState} from "react"
import "./style.css"

export function Faq(){
	

	const Pregunta = (props) =>{
		const [isClicked, setIsClicked] = useState(false)
		return(
			<div className="pregunta">
				<div className="barra1" onClick={() => setIsClicked(!isClicked)}>
					<h3>{props.pregunta}</h3>		
					{isClicked ? <h2>-</h2> : <h2>+</h2>}		
				</div>
				<div className="barra2">
					{
						isClicked
						?
						<p>{props.respuesta}</p>
						:
						<p></p>
					}
				</div>
			</div>
		)
	}
  return(
    <>
		<Header />
		<div>
			<div className="acordion">
				<Pregunta
				pregunta={"¿Que diferencia hay entre ser Socio, y  solamente Donar?"}
				respuesta={"No se amigo, me mataste"}
				/>
				<Pregunta
				pregunta={"Al inscribirme como bombero ¿Tengo un salario o pago?"}
				respuesta={"No"}
				/>
				<Pregunta
				pregunta={"¿Con que beneficios cuenta un bombero?"}
				respuesta={"Algo de la jubilacion y honor"}
				/>
				<Pregunta
				pregunta={"¿Como bombero, puedo contar con otro oficio?"}
				respuesta={"Si"}
				/>
				<Pregunta
				pregunta={"¿Que diferencia hay entre un bombero voluntario, y de la ciudad?"}
				respuesta={"uno es voluntario y otro de la ciudad"}
				/>
				<Pregunta
				pregunta={"¿Los bomberos se manejan con horarios de trabajo?"}
				respuesta={"no"}
				/>
				<Pregunta
				pregunta={"¿En donde se encuentran repartido los destacamentos?"}
				respuesta={"por ahi"}
				/>
			</div>
				
		</div>
    </>
  )
}