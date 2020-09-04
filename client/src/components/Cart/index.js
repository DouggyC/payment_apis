import React, { useContext } from "react";
// import Table from "../Table";
import PayWithPayPal from "../PayPal";
import { GlobalContext } from "../../context/GlobalState";
import Checkout from '../Checkout'

const Cart = () => {
  const { total, cart } = useContext(GlobalContext);

  return (
    <div className="row">
      <div className="col">
        <h6>Number of Items: {cart.length}</h6>
        {/* <h6>Tax (10%): ${tax}</h6> */}
        <hr/>
        {console.log(cart)}
        <h4>Total: ${total}</h4>
      </div>
      <div className="col">
        <PayWithPayPal />
        {/* <Table />  */}
        <div className="mt-2">
          {/* <button 
            role="link" 
            className="btn btn-info"
            style={{backgroundColor: '#556cd6'}}>
            Checkout With Stripe
          </button> */}
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Cart;
