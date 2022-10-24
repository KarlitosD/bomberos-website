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
				pregunta={"Hola"}
				respuesta={"hi"}
				/>
				<Pregunta
				pregunta={"Hola"}
				respuesta={"chau"}
				/>
			</div>
				
		</div>
    </>
  )
}