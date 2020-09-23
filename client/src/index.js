import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { GlobalProvider } from "./context/GlobalState";

// Stripe hook elements
import { Elements } from "@stripe/react-stripe-js";
// add/loads stripe script
import { loadStripe } from "@stripe/stripe-js";
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
