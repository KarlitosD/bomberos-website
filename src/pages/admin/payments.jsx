import { useLoaderData, useNavigation, Form } from "react-router-dom"
import { Grid } from "gridjs-react"
import { supabase } from "@/supabase"
import styles from "./style.module.css"
import { formatDate } from "@/utils/dates"

export const loader = async () => {
    const { data: payments, error: errorPayments } = await supabase.from("payments").select(`
        *,
        associates (
            name
        )
    `)
    const { data: associates, error: errorAssociates } = await supabase.from("associates").select("dni, name, paymentMethod")
    return { payments, associates }
}

export const Payments = () => {
    const { payments, associates } = useLoaderData()
    const navigation = useNavigation()
    return (
        <>
            <div className={styles.gridContainer}>
                <Grid
                    data={navigation.state === "loading" ? [] : payments}
                    fixedHeader={true}
                    columns={[
                        {
                            id: "associate_dni",
                            name: "DNI",
                        },
                        {
                            name: "Nombre",
                            data: row => row.associates.name
                        },
                        {
                            id: "created_at",
                            name: "Fecha",
                            formatter: cell => formatDate(cell)
                        },
                        {
                            id: "method_payment",
                            name: "Metodo de pago",
                        }
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
            <Form method="post">
                <select name="dni">
                    {associates.map(associate =>  <option value={associate.dni} key={associate.dni}>{associate.name}</option>)}
                </select>
                <select name="method" required>
                    <option value="Efectivo">Efectivo</option>
                    <option value="MercadoPago">MercadoPago</option>
                </select>
                <select name="duration">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <option name="duration" value={index + 1} key={index}>{index + 1}</option>
                    ))}
                </select>
                <button>Agregar pago</button>
            </Form>
        </>
    )
}

export const action = async ({ request }) => {
    const formData = await request.formData()
    const body = Object.fromEntries(formData)
    const { data, error } = await supabase.from("payments").insert({ 
        associate_dni: body.dni,
        method_payment: body.method,
        duration: body.duration
     })
    console.log(error)
    return error
}