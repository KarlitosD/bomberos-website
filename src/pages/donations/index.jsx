

export function Donations() {
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
		<Card
		title="¿Como usar mercado pago?"
		description={<p>*Completar informacion*</p>}

		/>
      </>
    )
}