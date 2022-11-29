// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey",
};

serve(async (req) => {
  // CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  try {
    const bodyRequest = await req.json();
    const { amount, email } = bodyRequest;
    const back_url = Deno.env.get("BACK_URL") || "https://www.google.com";
    const body = {
      reason: "Asociacion a los bomberos de lanus",
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: amount,
        currency_id: "ARS",
      },
      back_url,
      payer_email: email
    }
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + Deno.env.get("MP_ACCESS_TOKEN"),
        "Content-Type" : "application/json; charset=utf-8"

      },
      body: JSON.stringify(body)
    };

    const pago = await fetch("https://api.mercadopago.com/preapproval", options)
      .then((response) => response.json())
      .catch((err) => console.error(err));

    return new Response(JSON.stringify({ pago }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error?.message || error);
    return new Response("Algo salio mal :(", {
      headers: { ...corsHeaders },
    });
  }
});

console.log("Hello from Functions!");
// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
