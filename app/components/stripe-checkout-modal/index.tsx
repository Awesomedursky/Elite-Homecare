"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import logo from "@/public/images/logo.png";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function StripeCheckoutModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [amount, setAmount] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleClose = () => {
    // Small delay to allow the close animation to finish before resetting state
    setTimeout(() => {
      setAmount(null);
      setSuccess(false);
    }, 300);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl w-full max-w-md relative flex flex-col max-h-[90vh] overflow-clip"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 h-full w-full">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                ✕
              </button>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1,
                    }}
                  >
                    <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                  </motion.div>
                  <h2 className="text-xl font-bold">Payment Successful 🎉</h2>
                  <p className="text-gray-500 mt-2">
                    Thank you for your support.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Logo */}
                  <div className="flex justify-center -mb-7">
                    <Image
                      src={logo}
                      alt="logo"
                      height={120}
                      placeholder="blur"
                    />
                  </div>

                  <p className="text-center text-sm text-gray-500 mb-6">
                    Secure payment powered by Stripe
                  </p>

                  {/* Amount Input */}
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />

                  <Elements
                    stripe={stripePromise}
                    options={{
                      mode: "payment",
                      amount: amount
                        ? Math.max(Math.round(amount * 100), 100)
                        : 1000,
                      currency: "usd",
                      appearance: { theme: "stripe" },
                    }}
                  >
                    <PaymentForm
                      amount={amount}
                      onSuccess={() => setSuccess(true)}
                    />
                  </Elements>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PaymentForm({
  amount,
  onSuccess,
}: {
  amount: number | null;
  onSuccess: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (!amount || amount < 1) {
      alert("Please enter a valid amount (minimum $1)");
      return;
    }

    setLoading(true);

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      alert(submitError.message);
      setLoading(false);
      return;
    }

    try {
      // Create the PaymentIntent and obtain clientSecret from server
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to initialize payment");
      }

      const { clientSecret } = data;

      // Confirm the PaymentIntent using the details collected by PaymentElement
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: window.location.href, // Required for automatic_payment_methods
        },
        redirect: "if_required",
      });

      if (error) {
        alert(error.message);
      } else if (paymentIntent?.status === "succeeded") {
        onSuccess();
      }
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        alert(err.message || "An unexpected error occurred");
      } else {
        alert("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handlePay} className="space-y-4 ">
      <PaymentElement />

      <button
        disabled={!stripe || loading}
        className="w-full bg-(--secondary) text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-(--secondary)/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer "
      >
        {loading && <FaSpinner className="animate-spin" />}
        {loading ? "Processing..." : "Support Now"}
      </button>
    </form>
  );
}
