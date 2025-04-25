import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '@/lib/prisma';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

interface PriceIds {
  monthly: {
    educator: string;
    department: string;
    institution: string;
  };
  yearly: {
    educator: string;
    department: string;     
    institution: string;
  };
}
 const price_ids:PriceIds = {
    monthly:{
        educator:'price_1RHcgL4JgYJcsKhbDHriuTNw' , 
        department:'price_1RHcgW4JgYJcsKhbOoQ4Tlmy',
        institution:'price_1RHcgi4JgYJcsKhbazDqe2Nz',
    },
    yearly:{
        educator:'price_1RHcT54JgYJcsKhbAIovJ88v',
        department:'price_1RHcTY4JgYJcsKhbf3c72d1A',
        institution:'price_1RHcTj4JgYJcsKhb2Q1QuXGn',
    }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    interface SubscriptionBody {
      email: string;
      paymentMethodId: string;
      billing_cycle: 'monthly' | 'yearly';
      subscription_type: 'educator' | 'department' | 'institution';
    }
    const { email, paymentMethodId , billing_cycle , subscription_type }:SubscriptionBody = body;
    const priceId = price_ids[billing_cycle][subscription_type];
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid subscription type or billing cycle' }, { status: 400 });
    }
    const user = await prisma.payments.findUnique({
      where: {
        email: email,
      },
    });
    
    if (user) {
      return NextResponse.json({msg: "User already subscribed" });
    }
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
       payment_status: 'ACTIVE',
       subscription_type: subscription_type,
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
