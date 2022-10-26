import "./style.css";

import { useState, useEffect } from "react";
import { getData } from "@/services/profile";

export function Profile() {
    const [associate, setAssociate] = useState({});
  async function searchAssociate() {
    const data = await getData(4)
    console.log(data)
    setAssociate(data[0])
  }
  useEffect(() => {
    searchAssociate();
  }, []);
console.log(associate)
  return (
    <>
      
      <div className="blank"></div>
      <table>
        <thead>
          <tr>
            <th>dni</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>correo electrónico</th>
            <th>dirección</th>
            <th>número de teléfono</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{associate.dni}</td>
              <td>{associate.name}</td>
              <td>{associate.surname}</td>
              <td>{associate.email}</td>
              <td>{associate.address}</td>
              <td>{associate.phone_num}</td>
            </tr>
        </tbody>
      </table>
    </>
  );
}
