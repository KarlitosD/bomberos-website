// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

type mercadoPagoBody = {
  reason: string,
  auto_recurring: {
    frequency: number,
    frequency_type: "months" | "",
    transaction_amount: number,
    currency_id: "ARS"
  },
  back_url: string,
  payer_email: string
}

const fetcher = (path, body) => {
  return fetch(`https://api.mercadopago.com/${path}`, {
    headers: {
      Authorization: `Bearer ${Deno.env.get("MP_ACCESS_TOKEN")} `
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
}


serve(async (req) => {
  const { email, _plan, amount } = await req.json()
  const back_url = Deno.env.get("BACK_URL") || "https://www.google.com"

  const body: mercadoPagoBody = {
    reason: "Asociacion a los bomberos de lanus",
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      transaction_amount: amount,
      currency_id: "ARS"
    },
    back_url,
    payer_email: email
  };
  
  const data = await fetcher("preapproval", body)


  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})

console.log("Hello from Functions!")
// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
