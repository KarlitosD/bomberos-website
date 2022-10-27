import { Link } from "wouter"
import "./style.css"
export function InfoAss() {

	const Card = ({title, description}) =>{
		return(
			<div className="question">
				<div className="barra1">
					<h2>{title}</h2>
				</div>
				<div className="barra2">
					{description}
				</div>
			</div>
		)
	}

    return (
    <>
      <div className="rowInfo">
		<h1>¡Bienvenido! Pareces estar interesado en ser socio</h1>
		<h2>Dejanos contarte: ¿Que son los socios?</h2>
		<Card 
		title="¿Que es un socio?"
		description={<p>Los socios para nuestro son miembros y personas como tu, que pueden pagar una suscripcion mensual o anual con la que pueden apoyar a el cuartel de bomberos de lanus.</p>}
		/>
		<Card
		title="¿Y que beneficios tienen?"
		description={<p>Actualmente, los socios que estan inscriptos a nuestro destacamento, pueden obtener algunos beneficios como *completar*</p>}
		/>
		<Card
		title="Me interesa la cuestion de ser socio. ¿Pero como me inscribo?"
		description={<p>El formulario es este: <Link to="/formulario/socios"> <a>¡Da click Aqui!</a> </Link></p>}
		/>
	  </div>
      </>
    )
}