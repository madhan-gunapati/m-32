import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/prisma';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, paymentMethodId, priceId } = body;

    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      trial_period_days: 3,
      expand: ['latest_invoice.payment_intent'],
    });
//add a db entry for the subscription
try{
    const dbSubscription = await prisma.payments.create({
      data: {
        
        email: email,
       payment_status: 'ACTIVE'
      },
    });
}
catch (error) {
    if(error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
}
}

    return NextResponse.json(subscription);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
