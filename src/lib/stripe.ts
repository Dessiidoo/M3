import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Pricing plans for Market Mind
export const PRICING_PLANS = {
  starter: {
    id: 'starter',
    name: 'Starter',
    price: 99,
    priceId: 'price_starter_monthly', // Replace with your actual Stripe price ID
    features: [
      'Basic insider detection',
      'Social sentiment analysis',
      '10 stock watchlist',
      'Email alerts',
      'Basic AI predictions'
    ],
    description: 'Perfect for individual traders'
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    price: 499,
    priceId: 'price_professional_monthly', // Replace with your actual Stripe price ID
    features: [
      'Advanced insider detection',
      'Real-time AI analysis',
      'Unlimited watchlist',
      'Live alerts & notifications',
      'Advanced pattern recognition',
      'Options flow analysis',
      'Executive social monitoring'
    ],
    description: 'For serious traders and small funds',
    popular: true
  },
  enterprise: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 2499,
    priceId: 'price_enterprise_monthly', // Replace with your actual Stripe price ID
    features: [
      'Full insider intelligence suite',
      'Custom AI model training',
      'API access',
      'White-label solution',
      'Dedicated support',
      'Regulatory compliance tools',
      'Custom integrations',
      'Priority data feeds'
    ],
    description: 'For hedge funds and institutions'
  }
};

export const createCheckoutSession = async (priceId: string) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    });

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};