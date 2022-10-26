// import { useEffect, useState, useMemo } from "react";
// import { orderBy } from "json-function";
// import { supabase } from "@/supabase.js";
// import {
//   deleteApplicants,
//   getApplicants,
//   updAteapplicants,
// } from "@/services/applicants";

// export const applicants = () => {
//     const [applicants, setApplicants] = useState([]);

//     useEffect(() => {
//       fetchApplicants();
//     }, []);
  
//     useEffect(() => {
//       console.log({ applicants });
//     }, [applicants]);
  
//     async function fetchapplicants() {
//       const data = await getApplicants();
//       setApplicants(data);
//     }
//     async function handleDel(dni) {
//       await deleteApplicants(dni);
//       await fetchApplicants();
//     }
//     const [ascending, setAscending] = useState(false)
//     const [selectedField, setSelectedField] = useState("")

//     const visibleApplicants = useMemo(() => {
//       const copyApplicants = structuredClone(applicants)
//       return orderBy(copyApplicants, selectedField, ascending ? "ASC": "DESC")
//     }, [applicants, ascending, selectedField]) 

//     // async function orderField(field){
//     //   const { data } = await supabase.from("applicants").select('*').order(field ,{ascending});
//     //   setapplicants(data);
//     //   setAscending(!ascending)
//     //   return data;
//     // }

//     const createHandleClick = field => () => {
//       setSelectedField(field)
//       setAscending(!ascending)
//     }
//   return (
//     <>
//       <table className="table">
//         <thead>
//           <tr>
//             <th onClick={createHandleClick("dni")} className="theadItem">
//               DNI
//             </th>
//             <th onClick={createHandleClick("name")} className="theadItem">
//               NOMBRE
//             </th>
//             <th onClick={createHandleClick("surname")} className="theadItem">
//               APELLIDO
//             </th>
//             <th onClick={createHandleClick("email")} className="theadItem">
//               CORREO ELECTRÓNICO
//             </th>
//             <th onClick={createHandleClick("address")} className="theadItem">
//               DIRECCIÓN
//             </th>
//             <th onClick={createHandleClick("phone_num")} className="theadItem">
//               NÚMERO DE TELÉFONO
//             </th>
//             <th
//               onClick={createHandleClick("applicants_num")}
//               className="theadItem"
//             >
//               NÚMERO DE SOCIO
//             </th>
//             <th onClick={createHandleClick("approved")} className="theadItem">
//               APROBADO
//             </th>
//             <th className="theadItem">ELIMINAR SOCIO</th>
//           </tr>
//         </thead>
//         <tbody>
//           {visibleApplicants?.map((applicants) => (
//             <tr className="dataRow" key={applicants.dni}>
//               <td className="tdata">{applicants.dni}</td>
//               <td className="tdata">{applicants.name}</td>
//               <td className="tdata">{applicants.surname}</td>
//               <td className="tdata">{applicants.email}</td>
//               <td className="tdata">{applicants.address}</td>
//               <td className="tdata">{applicants.phone_num}</td>
//               <td className="tdata">{applicants.applicants_num}</td>
//               <td className="tdata">
//                 <input type="checkbox" checked={applicants.approved} readOnly  />
//               </td>
//               <td className="tdata">
//                 <button
//                   className="delBtn"
//                   onClick={() =>
//                     handleDel(applicants.dni)}
//                 >
//                   Dar de baja
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };


export const Applicants = () => {

  return (<>
    <h1>Mantenimiento</h1>
  </>)
}