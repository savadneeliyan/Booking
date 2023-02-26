import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react';
import "./checkout.css";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
        return stripePromise;
    }

}



const Checkout = () => {
    const [stripeError, setStripeError] = useState(null);
    const [loading, setLoading] = useState(false);
    const item = {
        price: "price_1MUqGfSGFEWXOuZ9WsIpNFvV",
        quantity: 1
    }

    const checkoutOption = {
      lineItems: [item],
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    };


    const redirectToCheckout = async () => {
        setLoading(true)
        console.log("redirect to checkout");

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOption)

        console.log("stripe checkout error", error)
        if (error) {
            setStripeError(error);
        }
        if (stripeError) {
            alert(stripeError)
        }
        setLoading(false);
    }

  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>

      <h1 className="checkout-price">$19</h1>
      <button
        className="checkout-button"
        disabled={loading}
        onClick={redirectToCheckout}
      >
        <div className="grey-circle"></div>
        <div className="text-container">
          <p className="text">{loading ? "loading" : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;
