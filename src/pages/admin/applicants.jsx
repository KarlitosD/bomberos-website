import { useEffect, useState, useMemo } from "react";
import { orderBy } from "json-function";
import { supabase } from "@/supabase.js";
import { useAtom } from "jotai";
import { applicantsAtom } from "../../atoms/applicants";
import { Grid } from "gridjs-react";
import { getApplicants } from "@/services/applicants";
import "./style.css";

export const Applicants = () => {
  const [applicants, setApplicants] = useAtom(applicantsAtom);

  async function fetchApplicant() {
    const data = await getApplicants();
    setApplicants(data);
  }

  useEffect(() => {
    if (applicants.length === 0) {
      fetchApplicant();
    }
  }, []);

  return (
    <>
      <div className="gridContainer">
        <Grid
          data={applicants}
          fixedHeader={true}
          columns={[
            {
              id: "DNI",
              name: "DNI",
            },
            {
              id: "name",
              name: "Nombre",
            },
            {
              id: "surname",
              name: "Apellido",
            },
            {
              id: "email",
              name: "Email",
            },
            {
              id: "cellphoneNumber",
              name: "Número de Celular",
            },
            {
              id: "phoneNumber",
              name: "Número de Teléfono",
            },
            {
              id: "birthDate",
              name: "Fecha de Nacimiento",
            },

            {
              id: "height",
              name: "Altura",
            },

            {
              id: "weight",
              name: "Peso",
            },
            {
              id: "bloodType",
              name: "Grupo Sanguíneo",
            },
            {
              id: "address",
              name: "Dirección",
            },
            {
              id: "district",
              name: "Localidad",
            },
            {
              id: "postCode",
              name: "Código Postal",
            },
            {
              id: "finishedStudies",
              name: "Estudios Finalizados",
            },
            {
              id: "firefighterSoc",
              name: "Participó en una Sociedad de Bomberos",
            },
            {
              id: "firefighterSocName",
              name: "Nombre de Sociedad de Bomberos anterior",
            },
          ]}
          search={true}
          pagination={{
            enabled: true,
            limit: 10,
          }}
          width="80vw"
          sort={true}
          resizable={true}
          className={{
            table: "table",
            container: "tableContainer",
            td: "td",
            th: "th",
          }}
        />
      </div>
    </>
  );
};
