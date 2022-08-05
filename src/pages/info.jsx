import bomberosImg from "../assets/img/bomberosimg1.img"

function Home() {
    return (
      <div>Informacion
        <h1>Bomberos de Lanus</h1>
        <p>Info</p> <br></br>
        <h2>Numeros de Telefono:</h2><br></br>
        <p>4241-2211</p>
        <img src={bomberosImg} />
      </div>
    )
  }
  
  export default Home