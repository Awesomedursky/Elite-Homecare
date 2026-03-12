import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation",
              description: "Support our mission",
            },

            custom_unit_amount: {
              enabled: true,
              // minimum: 100, // $1 minimum
              // preset: 500, // optional suggested amount
            },
          },

          quantity: 1,
        },
      ],

      billing_address_collection: "auto",

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success/payment`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Stripe session creation failed" },
      { status: 500 },
    );
  }
}
