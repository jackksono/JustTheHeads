import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const CustomStripeCheckout = () => {
  const iframeRef = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stripeCheckoutUrl = queryParams.get("url");

  useEffect(() => {
    if (stripeCheckoutUrl) {
      iframeRef.current.src = stripeCheckoutUrl;
    }
  }, [stripeCheckoutUrl]);

  return (
    <div className="flex items-center justify-center h-screen">
      <iframe
        ref={iframeRef}
        title="Custom Stripe Checkout"
        width="100%"
        height="800"
        frameBorder="0"
        allowtransparency="true"
      />
    </div>
  );
};

export default CustomStripeCheckout;