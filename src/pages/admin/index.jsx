import "./style.css";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import {
  getAssociates,
  deleteAssociate,
  updateAssociate,
} from "@/services/associates";

export function Admin() {
  const [associates, setAssociates] = useState([]);
  useEffect(() => {
    fetchAssociates();
  }, []);

  useEffect(() => {
    console.log("data:", associates);
  }, [associates]);

  async function fetchAssociates() {
    const data = await getAssociates();
    setAssociates(data);
  }
  async function dropAssociate(dni) {
    await deleteAssociate(dni);
    await fetchAssociates()
  }
  function handleDel(dni) {
    dropAssociate(dni);
  }
  return (
    <>
      <Header />
      <table className="table">
        <thead>
          <tr>
            <th className="theadItem">DNI</th>
            <th className="theadItem">NOMBRE</th>
            <th className="theadItem">APELLIDO</th>
            <th className="theadItem">CORREO ELECTRÓNICO</th>
            <th className="theadItem">DIRECCIÓN</th>
            <th className="theadItem">NÚMERO DE TELÉFONO</th>
            <th className="theadItem">NÚMERO DE SOCIO</th>
            <th className="theadItem">APROBADO</th>
            <th className="theadItem">ELIMINAR SOCIO</th>
          </tr>
        </thead>
        <tbody>
          {associates?.map((associate) => (
            <tr className="dataRow" key={associate.dni}>
              <td className="tdata">{associate.dni}</td>
              <td className="tdata">{associate.name}</td>
              <td className="tdata">{associate.surname}</td>
              <td className="tdata">{associate.email}</td>
              <td className="tdata">{associate.address}</td>
              <td className="tdata">{associate.phone_num}</td>
              <td className="tdata">{associate.associate_num}</td>
              <td>
                <input type="checkbox" checked={associate.approved} />
              </td>
              <td>
                <button className="delBtn"
                  onClick={() => handleDel(associate.dni)}>
                  ELIMINAR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
