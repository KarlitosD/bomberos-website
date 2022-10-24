import { supabase } from "@/supabase.js";
import { useEffect, useState } from "react";
import {
  deleteAssociate,
  getAssociates,
  updateAssociate,
} from "@/services/associates";

export const Associates = () => {
    const [associates, setAssociates] = useState([]);
    useEffect(() => {
      fetchAssociates();
    }, []);
  
    useEffect(() => {
      console.log({ associates });
    }, [associates]);
  
    async function fetchAssociates() {
      const data = await getAssociates();
      setAssociates(data);
    }
    async function handleDel(dni) {
      await deleteAssociate(dni);
      await fetchAssociates();
    }
  
    const [ascending, setAscending] = useState(false)
    async function orderField(field){
      const { data } = await supabase.from("associates").select('*').order(field ,{ascending});
      setAssociates(data);
      setAscending(!ascending)
      return data;
    }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => orderField("dni")} className="theadItem">
              DNI
            </th>
            <th onClick={() => orderField("name")} className="theadItem">
              NOMBRE
            </th>
            <th onClick={() => orderField("surname")} className="theadItem">
              APELLIDO
            </th>
            <th onClick={() => orderField("email")} className="theadItem">
              CORREO ELECTRÓNICO
            </th>
            <th onClick={() => orderField("address")} className="theadItem">
              DIRECCIÓN
            </th>
            <th onClick={() => orderField("phone_num")} className="theadItem">
              NÚMERO DE TELÉFONO
            </th>
            <th
              onClick={() => orderField("associate_num")}
              className="theadItem"
            >
              NÚMERO DE SOCIO
            </th>
            <th onClick={() => orderField("approved")} className="theadItem">
              APROBADO
            </th>
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
                <input type="checkbox" checked={associate.approved} readOnly />
              </td>
              <td>
                <button
                  className="delBtn"
                  onClick={() =>
                    handleDel(associate.dni)}
                >
                  ELIMINAR
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
