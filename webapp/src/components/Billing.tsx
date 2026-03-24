import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faArrowRight,
  faCheckCircle,
  faDownload,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { BillingInfo } from '@/types';

const Billing: React.FC = () => {
  const [billingInfo] = useState<BillingInfo>({
    currentPlan: 'pro',
    devicesUsed: 32,
    devicesLimit: 100,
    trainingRoundsUsed: 18,
    trainingRoundsLimit: -1,
    renewalDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    nextInvoiceAmount: 99.0,
  });

  const invoices = [
    {
      id: '1',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30),
      amount: 99.0,
      status: 'Paid',
    },
    {
      id: '2',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60),
      amount: 99.0,
      status: 'Paid',
    },
    {
      id: '3',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
      amount: 0.0,
      status: 'Paid',
    },
  ];

  const paymentMethods = [
    {
      id: '1',
      type: 'Visa',
      last4: '4242',
      expiry: '12/25',
      isDefault: true,
    },
  ];

  const planFeatures = {
    pro: [
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
  };

  const devicesPercent = (billingInfo.devicesUsed / billingInfo.devicesLimit) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Billing & Subscription
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your plan, payment methods, and invoices
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 capitalize">
                    {billingInfo.currentPlan} Plan
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    For growing federated ML platforms
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    $99
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">per month</p>
                </div>
              </div>

              {/* Usage Stats */}
              <div className="space-y-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Edge Devices
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {billingInfo.devicesUsed} / {billingInfo.devicesLimit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        devicesPercent >= 80
                          ? 'bg-red-600 dark:bg-red-500'
                          : 'bg-green-600 dark:bg-green-500'
                      }`}
                      style={{ width: `${devicesPercent}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Training Rounds
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {billingInfo.trainingRoundsUsed} / Unlimited
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No limits on training rounds this month
                  </p>
                </div>
              </div>

              {/* Plan Actions */}
              <div className="space-y-3">
                <button className="w-full px-6 py-3 rounded-lg border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold">
                  Upgrade to Enterprise
                </button>
                <button className="w-full px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 font-semibold">
                  Downgrade Plan
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Payment Methods
              </h3>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <FontAwesomeIcon icon={faCreditCard} size="lg" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {method.type} ending in {method.last4}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Expires {method.expiry}
                          </p>
                        </div>
                      </div>
                      {method.isDefault && (
                        <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                          Default
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold">
                + Add Payment Method
              </button>
            </div>

            {/* Invoices */}
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Invoices
                </h3>
              </div>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="text-gray-400 dark:text-gray-600"
                          size="lg"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {invoice.date.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Invoice #{invoice.id}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold text-gray-900 dark:text-white">
                            ${invoice.amount.toFixed(2)}
                          </p>
                          <p className="text-sm text-green-600 dark:text-green-400">
                            {invoice.status}
                          </p>
                        </div>
                        <button className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <FontAwesomeIcon icon={faDownload} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Renewal Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Next Billing Cycle
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Renewal Date
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {billingInfo.renewalDate.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Next Invoice
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${billingInfo.nextInvoiceAmount.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Plan Features */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Plan Features
              </h3>
              <ul className="space-y-3">
                {planFeatures.pro.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800">
              <h3 className="text-lg font-bold text-primary-900 dark:text-primary-300 mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-primary-800 dark:text-primary-300 mb-4">
                Contact our support team for billing questions or to upgrade your plan.
              </p>
              <button className="w-full px-4 py-2 rounded-lg bg-primary-600 dark:bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-700 font-semibold text-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
