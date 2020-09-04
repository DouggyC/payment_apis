const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// const { createStripeCheckout } = require("./checkout");
const createStripeCheckoutSession = require("./checkout");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/create-checkout-session", async (req, res) => {
  res.set("Authorization", "Bearer sk_test_TGloulRa60xYE12v5PpMUwqD");

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: req.body.line_items,
    mode: "payment",
    success_url: `https://localhost:${PORT}/success.html`,
    cancel_url: `https://localhost:${PORT}/cancel.html`,
  });

  return res.json({
    id: session.id,
    success: true,
  });
});

app.post("/checkouts", async (req, res) => {
  try {
    res.send(await createStripeCheckoutSession(req.body.line_items));
  } catch (err) {
    console.error(err);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
