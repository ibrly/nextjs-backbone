import React, {
    useEffect,
    useState
}                   from 'react';
import {Elements}   from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise  = publishableKey ? loadStripe(publishableKey) : null;

function Strip() {
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
                  if (!stripePromise) {
                      return;
                  }
                  // Create PaymentIntent as soon as the page loads
                  fetch(process.env.NEXT_PUBLIC_BACK_APP_URL + "/api/reserve",
                        {
                            method : "POST",
                            headers: {"Content-Type": "application/json"},
                            body   : JSON.stringify({items: [{id: "xl-tshirt"}]}),
                        })
                      .then((res) => res.json())
                      .then((data) => setClientSecret(data.clientSecret));
              },
              []);
    const appearance = {
        theme: 'stripe',
    };
    const options    = {
        clientSecret,
        appearance,
    };
    if (!stripePromise) {
        return <p>Payments are not configured: set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in .env.</p>;
    }
    return (
        <div>
            {clientSecret && (
                <Elements options={options}
                          stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            )}
        </div>
    );
}

export default Strip;
