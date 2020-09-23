const express = require("express");
const router = express.Router();
const createStripeCheckoutSession = require("../../createStripeCheckout");

///// HELPERS /////

/**
 * Validate the stripe webhook secret, then call the handler for the event type
 */
function runAsync(callback) {
  return (req, res, next) => {
    callback(req, res, next).catch(next);
  };
}

// @route    POST test
// @desc
// @access   Public
router.post("/", 
  // try {
  //   const res = await createStripeCheckoutSession(req.body.line_items)
  //   res.status(200).send(res)
  // } catch (err) {
  //   console.error(err)
  // }

  runAsync(async (req, res) => {
    res.send(await createStripeCheckoutSession(req.body.line_items));
  })
);

module.exports = router;
