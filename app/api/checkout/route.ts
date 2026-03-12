import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST() {
  try {
    // First create a price with custom_unit_amount enabled
    const price = await stripe.prices.create({
      currency: "usd",
      custom_unit_amount: {
        enabled: true,
        minimum: 100, // $1 minimum in cents
        preset: 1000, // $10 suggested default in cents
      },
      product_data: {
        name: "Donation",
      },
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      line_items: [{ price: price.id, quantity: 1 }],
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
