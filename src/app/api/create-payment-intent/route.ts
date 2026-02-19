import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const { amount, accountNumber, patientName } = await request.json();

  if (!amount || amount < 50) {
    return NextResponse.json(
      { error: "Minimum payment amount is $0.50" },
      { status: 400 }
    );
  }

  if (!accountNumber) {
    return NextResponse.json(
      { error: "Account number is required" },
      { status: 400 }
    );
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // amount in cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        account_number: accountNumber,
        patient_name: patientName || "",
      },
      description: `Payment for Atlantic Surgery Center - Account #${accountNumber}`,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Payment failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
