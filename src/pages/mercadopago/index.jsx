import { mp } from "@/mercadopago"
import { useLayoutEffect, useRef } from "react";

const bricksBuilder = mp.bricks();

export function MercadoPago() {
useLayoutEffect(() => {
    console.log("Hola")
    bricksBuilder.create("cardPayment", "cardPaymentBrick_container", {
        initialization: {
            amount: 10,
        },
        callbacks: {
            onsubmit: async formData => {
                console.log(formData)
                return
            },
            onReady() {
                console.log("ready")
            },
            onError(error){
                console.error(error.message)
            }
        }
    }).then(() => console.log("hola"))
  }, [])
  return (
    <div id="cardPaymentBrick_container"></div>
  )
}


