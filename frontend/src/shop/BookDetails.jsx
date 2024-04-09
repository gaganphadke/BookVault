// BookDetails.jsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51P3ayLSG1dlqVtChpNwTOhOMgVno5QEBgYGem1PShldnEYIuKOMmU4KIENUoAtLPbGGF59Yi3dwOcEFWpiQ5kjcm00L62aJiwP');

const BookDetails = ({ book }) => {
  const handleClickBuyNow = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: 'your_stripe_price_id', quantity: 1 },
      ],
      mode: 'payment',
    //   successUrl: 'https://your-website.com/success',
    //   cancelUrl: 'https://your-website.com/cancel',
    });
    if (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClickBuyNow} className='mt-5 rounded hover:text-blue-600'>Buy Now</button>
    </div>
  );
};

export default BookDetails;
