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
            "DNI",
            "name",
            "surname",
            "email",
            "cellphoneNumber",
            "phoneNumber",
            "birthDate",
            "height",
            "weight",
            "bloodType",
            "address",
            "district",
            "postcode",
            "finishedStudies",
            "firefighterSoc",
            "firefighterSocName"
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
