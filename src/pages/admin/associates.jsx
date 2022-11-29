import { _, Grid } from "gridjs-react";
import { Form,json, useLoaderData, useNavigation } from "react-router-dom";
import { getAssociates, approveAssociate, disapproveAssociate } from "@/services/associates";
import styles from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const COLUMNS = [
  { id: "dni", name: "DNI" },
  { id: "name", name: "Nombre" },
  { id: "surname", name: "Apellido" },
  { id: "email", name: "Email" },
  { id: "address", name: "Dirección" },
  { id: "phoneNumber", name: "Número de Teléfono" },
  { id: "cellphoneNumber", name: "Número de Celular" },
  { id: "plan", name: "Plan", formatter: cell => translates[cell] },
  { id: "associateNumber", name: "Número de Socio" },
  { id: "paymentMethod", name: "Método de Pago" },
  {
    id: "approved",
    name: "Aprobado",
    formatter: isApproved => _(<div className={styles.checkbox}><input type="checkbox" checked={isApproved} readOnly /></div>)
  },
  { id: "role", name: "Rol", formatter: cell => translates[cell] },
  { id: "action", name: "Acccion" },
];

const translates = {
  "associate": "Socio",
  "monthly": "Mensual",
  "annually": "Anual",
  "admin": "Admin"
}

export const loader = async () => {
  const associates = await getAssociates();
  return json(associates);
};

const ActionButton = ({ associate }) => {
  const handleApproved = () => approveAssociate(associate.dni)

  const handleDisapproved = () => disapproveAssociate(associate.dni)

  return (
    associate?.approved
      ? <button onClick={handleDisapproved}>Dar de baja</button>
      : <button dni={associate.dni} onClick={handleApproved}>Aprobar</button>
    )
}

export const Associates = () => {
  const associates = useLoaderData();
  const navigation = useNavigation()

  const associatesWithAction = associates.map((associate) => ({
    ...associate,
    action: _(<ActionButton associate={associate} />),
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
      <Form>
        <button className={styles.refreshBtn}>Refrescar</button>
      </Form>
    </>
  );
};

export const action = async => {
  console.log("hola")
}
