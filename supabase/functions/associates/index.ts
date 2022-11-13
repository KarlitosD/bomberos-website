// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"


const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey",
};

const fetcher = (path: string, body: any) => {
  return fetch(`https://api.mercadopago.com/${path}`, {
    method: "POST",
    headers: {
      "Authorization":
        "Bearer TEST-1839098910176710-082902-f69e3e11fc965211f3498373d61e35d9-1188140767",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};

serve(async (req) => {
  // CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  try {
    const bodyRequest = await req.json();
    console.log(bodyRequest)

    return new Response(JSON.stringify("Hola"), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error?.message || error);
    return new Response("Algo salio mal :(", {
      headers: { ...corsHeaders },
    });
  }
});

console.log("Hello from Functions!")

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
