import bomberosImg from "../../assets/img/bomberosimg1.jpg";
import { Header } from "../../components/Header";
import "./info.css";

function Info() {
    return (
    <>
    
    <Header/>
      <div>Informacion
        <h1>Bomberos de Lanus</h1>
        <p>Info</p> <br></br>
        <h2>Numeros de Telefono:</h2><br></br>
        <p>4241-2211</p>
        <img src={bomberosImg} />
      </div>
      </>
    )
}
  
export default Info