const express = require("express");
const cors = require("cors");
// const { createStripeCheckout } = require("./checkout");

const app = express();

// express middleware to parse json body
app.use(express.json());
app.use(cors({ origin: true }));

// Routes
app.use('/create-checkout-session', require('./routes/api/stripe'))


// static dir for production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
