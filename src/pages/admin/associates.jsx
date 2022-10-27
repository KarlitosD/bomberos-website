import { useEffect, useState, useMemo } from "react";
import { useAtom } from "jotai";
import { orderBy } from "json-function";
import { supabase } from "@/supabase.js";
import { _ } from "gridjs-react";
import {
  deleteAssociate,
  getAssociates,
  updateAssociate,
} from "@/services/associates";
import { associatesAtom } from "@/atoms/associates";

export const Associates = () => {
    const [associates, setAssociates] = useAtom(associatesAtom);

    useEffect(() => {
      if(associates.length === 0) {
        fetchAssociates();
      }
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
    const [selectedField, setSelectedField] = useState("")

    const visibleAssociates = useMemo(() => {
      const copyAssociates = structuredClone(associates)
      return orderBy(copyAssociates, selectedField, ascending ? "ASC": "DESC")
    }, [associates, ascending, selectedField]) 

    const createHandleClick = field => () => {
      setSelectedField(field)
      setAscending(!ascending)
    }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th onClick={createHandleClick("dni")} className="theadItem">
              DNI
            </th>
            <th onClick={createHandleClick("name")} className="theadItem">
              NOMBRE
            </th>
            <th onClick={createHandleClick("surname")} className="theadItem">
              APELLIDO
            </th>
            <th onClick={createHandleClick("email")} className="theadItem">
              CORREO ELECTRÓNICO
            </th>
            <th onClick={createHandleClick("address")} className="theadItem">
              DIRECCIÓN
            </th>
            <th onClick={createHandleClick("phone_num")} className="theadItem">
              NÚMERO DE TELÉFONO
            </th>
            <th
              onClick={createHandleClick("associate_num")}
              className="theadItem"
            >
              NÚMERO DE SOCIO
            </th>
            <th onClick={createHandleClick("approved")} className="theadItem">
              APROBADO
            </th>
            <th className="theadItem">ELIMINAR SOCIO</th>
          </tr>
        </thead>
        <tbody>
          {visibleAssociates?.map((associate) => (
            <tr className="dataRow" key={associate.dni}>
              <td className="tdata">{associate.dni}</td>
              <td className="tdata">{associate.name}</td>
              <td className="tdata">{associate.surname}</td>
              <td className="tdata">{associate.email}</td>
              <td className="tdata">{associate.address}</td>
              <td className="tdata">{associate.phone_num}</td>
              <td className="tdata">{associate.associate_num}</td>
              <td className="tdata">
                <input type="checkbox" checked={associate.approved} readOnly  />
              </td>
              <td className="tdata">
                <button
                  className="delBtn"
                  onClick={() =>
                    handleDel(associate.dni)}
                >
                  Dar de baja
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
