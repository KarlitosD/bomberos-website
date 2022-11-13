import { useEffect, useState, useMemo } from "react";
import { useAtom } from "jotai";
import { Grid } from "gridjs-react";
import {
  deleteAssociate,
  getAssociates,
  updateAssociate,
} from "@/services/associates";
import { associatesAtom } from "@/atoms/associates";
import styles from "./style.module.css";

export const Associates = () => {
  const [associates, setAssociates] = useAtom(associatesAtom);

  useEffect(() => {
    if (associates.length === 0) {
      fetchAssociates();
    }
  }, []);

  async function fetchAssociates() {
    const data = await getAssociates();
    setAssociates(data);
  }
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
