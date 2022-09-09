import "./style.css";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { getAssociates } from "@/services/associates";

export function Admin() {
  const [associates, setAssociates] = useState([]);
  useEffect(() => {
    fetchAssociates();
  }, []);

  async function fetchAssociates() {
    const data = await getAssociates();
    setAssociates(data);
  }
  useEffect(() => {
    console.log("data:", associates);
  }, [associates]);
  return (
    <>
      <Header />
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
            <th>número de socio</th>
            <th>aprobado</th>
          </tr>
        </thead>
        <tbody>
          {associates.map((associate) => (
            <tr key={associate.dni}>
              <td>{associate.dni}</td>
              <td>{associate.name}</td>
              <td>{associate.surname}</td>
              <td>{associate.email}</td>
              <td>{associate.address}</td>
              <td>{associate.phone_num}</td>
              <td>{associate.associate_num}</td>
              <td>
                <input type="checkbox" checked={associate.approved} disabled />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
