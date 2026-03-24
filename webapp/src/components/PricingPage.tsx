import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { PricingTier } from '@/types';

const PricingPage: React.FC = () => {
  const [billingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      price: 0,
      period: '/month',
      devices: 10,
      rounds: 5,
      description: 'Perfect for learning federated learning',
      features: [
        'Up to 10 edge devices',
        '5 training rounds per month',
        'Basic privacy budgeting',
        'Device fleet dashboard',
        'Email support',
        'Community access',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: 99,
      period: '/month',
      devices: 100,
      rounds: -1,
      description: 'For growing federated ML platforms',
      features: [
        'Up to 100 edge devices',
        'Unlimited training rounds',
        'Advanced differential privacy controls',
        'Model aggregation service',
        'Real-time device monitoring',
        'Priority email support',
        'API access',
        'Team collaboration (up to 3 users)',
        'Custom privacy budgets',
        'Device auto-scaling',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 0,
      period: 'Custom',
      devices: -1,
      rounds: -1,
      description: 'For large-scale federated learning deployments',
      features: [
        'Unlimited edge devices',
        'Unlimited training rounds',
        'Custom differential privacy implementation',
        'Multi-regional deployment',
        'Dedicated infrastructure',
        'Dedicated account manager',
        '24/7 phone & email support',
        'SLA guarantee (99.99%)',
        'Advanced security features',
        'Unlimited team members',
        'Custom reporting & analytics',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
    },
  ];

  const faqs = [
    {
      question: 'What is federated learning?',
      answer:
        'Federated learning allows you to train machine learning models across distributed edge devices without centralizing data. Each device trains locally, then sends only model updates to be aggregated, keeping raw data private.',
    },
    {
      question: 'How does differential privacy work?',
      answer:
        'Differential privacy adds mathematical guarantees about privacy. EdgeBrain tracks privacy loss (epsilon) during training and allows you to set privacy budgets. This prevents re-identification of training data even if someone accesses the trained model.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer:
        'Yes! You can change your plan at any time. Pro plan includes a 14-day free trial. Enterprise customers work directly with our sales team for custom arrangements.',
    },
    {
      question: 'What devices are supported?',
      answer:
        'EdgeBrain supports any IoT device that can run Python or our lightweight client libraries: edge computers, Raspberry Pi, industrial IoT gateways, smartphones, and custom embedded systems.',
    },
    {
      question: 'What if I exceed my device limit?',
      answer:
        'We\'ll notify you when you reach 80% of your device limit. You can upgrade anytime, or we can temporarily increase your limit. Pro plan includes unlimited training rounds.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! The Free plan is always available with no time limits. Pro plan includes a 14-day free trial with no credit card required.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Scale from learning to production. Pay for what you use, upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all ${
                tier.highlighted
                  ? 'md:scale-105 md:shadow-2xl bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-500'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-br text-white text-sm font-bold">
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Tier Name & Price */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 h-10 flex items-center">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {tier.price === 0 ? 'Custom' : `$${tier.price}`}
                    </span>
                    {tier.price !== 0 && (
                      <span className="text-gray-600 dark:text-gray-400">{tier.period}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <p>{tier.devices === -1 ? 'Unlimited' : tier.devices} edge devices</p>
                    <p>{tier.rounds === -1 ? 'Unlimited' : tier.rounds} training rounds/mo</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={tier.cta === 'Get Started' ? '/signup' : '#'}
                  className={`w-full py-3 rounded-lg font-bold text-center block transition-all ${
                    tier.highlighted
                      ? 'bg-gradient-br text-white hover:opacity-90'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  } mb-6`}
                >
                  {tier.cta} <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>

                {/* Features */}
                <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-gray-900 dark:text-white text-lg">
                  {faq.question}
                  <span className="text-primary-600 dark:text-primary-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 dark:text-gray-400 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Start with the Free plan and upgrade as you scale.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-br text-white hover:opacity-90 font-bold"
          >
            Create Your Account <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
