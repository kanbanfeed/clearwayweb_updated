"use client";

import { useEffect } from "react";

export default function Checkout() {
  useEffect(() => {
    window.location.href = "https://buy.stripe.com/9B6eVc5iz6jS69B9yV7Vm0V";
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      Redirecting to secure checkout...
    </div>
  );
}
