// import { useAtom } from "jotai";
// import { applicantsAtom } from "../../atoms/applicants";
import { Grid } from "gridjs-react";
import { getApplicants } from "@/services/applicants";
import styles from "./style.module.css";
import { json, useLoaderData, useNavigation } from "react-router-dom";

export const loader = async () => {
  const applicants = await getApplicants()
  return json(applicants)
}

export const Applicants = () => {
  const applicants = useLoaderData()
  const navigation = useNavigation()
  return (
    <>
      <div className={styles.gridContainer}>
        <Grid
          data={navigation.state === "loading" ? [] : applicants}
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
            table: styles.table,
            container: styles.tableContainer,
            td: styles.td,
            th: styles.th,
          }}
        />
      </div>
    </>
  );
};
