import { useEffect, useState, useMemo } from "react";
import { orderBy } from "json-function";
import { supabase } from "@/supabase.js";
import { _ } from "gridjs-react";
import {
  getApplicants,
} from "@/services/applicants";
import "./style.css"

export const Applicants = () => {
    const [applicant, setApplicant] = useState([]);

    useEffect(() => {
      fetchApplicant();
    }, []);
  
    useEffect(() => {
      console.log({ applicant });
    }, [applicant]);
  
    async function fetchApplicant() {
      const data = await getApplicants();
      setApplicant(data);
    }
    const [ascending, setAscending] = useState(false)
    const [selectedField, setSelectedField] = useState("")

    const visibleApplicant = useMemo(() => {
      const copyApplicant = structuredClone(applicant)
      return orderBy(copyApplicant, selectedField, ascending ? "ASC": "DESC")
    }, [applicant, ascending, selectedField]) 

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
              onClick={createHandleClick("applicant_num")}
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
          {visibleApplicant?.map((applicant) => (
            <tr className="dataRow" key={applicant.dni}>
              <td className="tdata">{applicant.dni}</td>
              <td className="tdata">{applicant.name}</td>
              <td className="tdata">{applicant.surname}</td>
              <td className="tdata">{applicant.email}</td>
              <td className="tdata">{applicant.address}</td>
              <td className="tdata">{applicant.phone_num}</td>
              <td className="tdata">{applicant.applicant_num}</td>
              <td className="tdata">
                <input type="checkbox" checked={applicant.approved} readOnly  />
              </td>
              <td className="tdata">
                <button
                  className="delBtn"
                  onClick={() =>
                    handleDel(applicant.dni)}
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
