import { Grid } from "gridjs-react";
// import { useAtom } from "jotai";
// import { associatesAtom } from "@/atoms/associates";
import { useLoaderData, json } from "react-router-dom";
import {
  deleteAssociate,
  getAssociates,
  updateAssociate,
} from "@/services/associates";
import styles from "./style.module.css";

export const loader = async () => {
  const associates = await getAssociates()
  return json(associates)
}


export const Associates = () => {
  const associates = useLoaderData() 
  return (
    <>
      <div className={styles.gridContainer}>
        <Grid
          data={associates}
          fixedHeader={true}
          columns={[
            {
              id: "dni",
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
              id: "address",
              name: "Dirección",
            },
            {
              id: "phoneNumber",
              name: "Número de Teléfono",
            },
            {
              id: "cellphoneNumber",
              name: "Número de Celular",
            },
            {
              id: "plan",
              name: "Plan",
            },
            {
              id: "associateNumber",
              name: "Número de Socio",
            },
            {
              id: "paymentMethod",
              name: "Método de Pago",
            },
            {
              id: "approved",
              name: "Aprobado",
            },
            {
              id: "role",
              name: "Rol",
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
          }}
        />
      </div>
    </>
  );
};
