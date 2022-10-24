import { Header } from "@/components/Header";
import "./style.css"

export function Faq(){
	const [isClicked, setIsClicked] = useState(false)

	const Pregunta = (props) =>{
		return(
			<div className="pregunta">
				<div className="barra1">
					<h3>{props.pregunta}</h3>
					<button onClick={() => setIsClicked(!isClicked)}>Mostrar</button>				
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
				pregunta={<h1>Hola</h1>}
				respuesta={<p>lorem ipsum doloreASOIDHASIOdhnbasouigbfuoAHNB FGUIOasd hiofj aspoifjaips</p>}
				/>
			</div>
				
		</div>
    </>
  )
}