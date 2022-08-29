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
              "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs',
            },
            body: JSON.stringify(example)
          };
          
        const { init_point, pago } = await fetch('http://localhost:54321/functions/v1/', options)
            .then(response => response.json())
            .catch(err => console.error(err));
        
        window.open(init_point)
    }
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}


