
import React from 'react';

const CheckoutButton = ({ amount = 500 }) => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890abcdef", 
      amount: Math.round(amount * 100), 
      currency: "INR",
      name: "My E-commerce",
      description: "Test Transaction",
      image: "https://yourlogo.com/logo.png",
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Chitranjan",
        email: "chitranjan@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#ffc107",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={handlePayment} className="hero-btn" style={{ marginTop: "1rem" }}>
      Pay ₹{amount.toFixed(2)} with Razorpay
    </button>
  );
};

export default CheckoutButton;
