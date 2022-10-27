import { useEffect, useState, useMemo } from "react";
import { useAtom } from "jotai";
import { Grid } from "gridjs-react";
import {
  deleteAssociate,
  getAssociates,
  updateAssociate,
} from "@/services/associates";
import { associatesAtom } from "@/atoms/associates";

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
      <div className="gridContainer">
        <Grid
          data={associates}
          fixedHeader={true}
          columns={[
            "dni",
            "name",
            "surname",
            "email",
            "address",
            "phoneNumber",
            "cellphoneNumber",
            "plan",
            "associateNumber",
            "paymentMethod",
            "approved",
            "role",
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
          }}
        />
      </div>
    </>
  );
};
