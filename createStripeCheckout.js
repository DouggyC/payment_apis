// const Stripe = require("stripe")
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripe = require('stripe')('sk_test_51HCdtpKnqLwUr3pety3jyb5G0lXfNzc8Albd1eO4pqThU8dxKETTF3cGxhxn3X7EgxUdO9ZdXymu20jke3a0m3cP00ZiEP0Dbb');



/**
 * @desc    Create Stripe checkout session
 * @params  arr of line_items
 * @return  session object
 *  */ 

//  Example Item
// {
//   name: 'item-name',
//   description: 'item-description',
//   images: ['item-url'],
//   amount: 000,
//   currency: 'usd',
//   quantity: 1,
// }

const createStripeCheckoutSession = async (line_items) => {

  const url = 'http://wwww.localhost:3000'

  const session = await stripe.checkout.sessions.create({
    success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${url}/failed`,
    payment_method_types: ['card'],
    line_items,
    // mode: 'payment',
  })
  
  return session
}

module.exports = createStripeCheckoutSession