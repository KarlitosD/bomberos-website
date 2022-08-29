import { } from "react";
import { supabase } from "../../supabase.js"

const example = {
    "email": "test_user_36861694@testuser.com",
    "amount": 100
}

export function MercadoPago() {

    const handleClick = async () => {
        //TODO: Deploy supabase function
        // const { data, error } = await supabase.functions.invoke("mercadopago", {
        //     body: JSON.stringify(example)
        // })
        // console.log(data)
        const options = {
            method: 'POST',
            headers: {
              "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify(example)
          };
          
        fetch(import.meta.env.VITE_SUPABASE_FUNCTIONS, options)
            .then(response => response.json())
            .then(({ init_point }) => {
                console.log(init_point)
                window.open(init_point)
            })
            .catch(err => {
                console.error(err)
                alert("Algo salio mal")
            });
        
        
    }
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}


