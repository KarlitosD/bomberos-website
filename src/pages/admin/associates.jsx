import { _, Grid } from "gridjs-react";
// import { useAtom } from "jotai";
// import { associatesAtom } from "@/atoms/associates";
import { Form, json, useFetcher, useLoaderData, useNavigation } from "react-router-dom";
import { getAssociates, updateAssociate } from "@/services/associates";
import styles from "./style.module.css";

const COLUMNS = [
  { id: "dni", name: "DNI" },
  { id: "name", name: "Nombre" },
  { id: "surname", name: "Apellido" },
  { id: "email", name: "Email" },
  { id: "address", name: "Dirección" },
  { id: "phoneNumber", name: "Número de Teléfono" },
  { id: "cellphoneNumber", name: "Número de Celular" },
  { id: "plan", name: "Plan" },
  { id: "associateNumber", name: "Número de Socio" },
  { id: "paymentMethod", name: "Método de Pago" },
  { id: "approved", name: "Aprobado" },
  { id: "role", name: "Rol" },
  { id: "action", name: "Acccion" },
];

export const loader = async () => {
  const associates = await getAssociates();
  return json(associates);
};

const ApprovedButton = ({ dni, refresh }) => {
  const handleApproved = async () => {
    await updateAssociate(dni, { approved: true })
  }
  return <button onClick={handleApproved}>Aprobar</button>
}

export const Associates = () => {
  const associates = useLoaderData();
  const navigation = useNavigation()
  const fetcher = useFetcher()

  const associatesWithAction = associates.map((associate) => ({
    ...associate,
    action: _(
      associate.approved
        ? <button>Hola</button>
        : <ApprovedButton dni={associate.dni} refresh={() => fetcher.load("/admin/socios")} />
    ),
  }));

  return (
    <>
      <div className={styles.gridContainer}>
        <Grid
          data={navigation.state === "loading" ? [] : associatesWithAction}
          fixedHeader={true}
          columns={COLUMNS}
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
