import { useEffect, useState, useMemo } from "react";
import { useAtom } from "jotai";
import { orderBy } from "json-function";
import { supabase } from "@/supabase.js";
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
  const [ascending, setAscending] = useState(false);
  const [selectedField, setSelectedField] = useState("");

  const visibleAssociates = useMemo(() => {
    const copyAssociates = structuredClone(associates);
    return orderBy(copyAssociates, selectedField, ascending ? "ASC" : "DESC");
  }, [associates, ascending, selectedField]);

  const createHandleClick = (field) => () => {
    setSelectedField(field);
    setAscending(!ascending);
  };
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
