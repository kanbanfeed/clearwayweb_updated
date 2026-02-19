"use client";

import { useEffect } from "react";

export default function Checkout() {
  useEffect(() => {
    window.location.href = "https://buy.stripe.com/test_7sY9AV0DSewu9AOdG63cc0h";
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      Redirecting to secure checkout...
    </div>
  );
}
