import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faLock,
  faZap,
  faShield,
  faGlobe,
  faCheckCircle,
  faStar,
  faNetworkWired,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: faLock,
      title: 'Privacy-Preserving Training',
      description: 'Train models on edge devices without data ever leaving the device with differential privacy',
    },
    {
      icon: faShield,
      title: 'Differential Privacy',
      description: 'Budget your privacy loss with epsilon tracking and automatic gradient clipping',
    },
    {
      icon: faNetworkWired,
      title: 'Device Fleet Management',
      description: 'Manage hundreds of IoT devices, monitor status, and track training progress in real-time',
    },
    {
      icon: faZap,
      title: 'Automatic Model Aggregation',
      description: 'Aggregate model updates across devices with smart byzantine-robust averaging',
    },
    {
      icon: faCog,
      title: 'Edge-Optimized Deployment',
      description: 'Deploy compressed models to resource-constrained IoT devices automatically',
    },
    {
      icon: faGlobe,
      title: 'Federated Learning at Scale',
      description: 'Coordinate training across geographically distributed device fleets',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Register Your Devices',
      description: 'Add IoT devices to your fleet and configure their privacy budgets',
    },
    {
      step: 2,
      title: 'Deploy Your Model',
      description: 'Push your model to edge devices for training without central data collection',
    },
    {
      step: 3,
      title: 'Monitor Training Progress',
      description: 'Track accuracy, privacy loss, and device participation in real-time',
    },
    {
      step: 4,
      title: 'Collect Aggregated Results',
      description: 'Retrieve trained model updates while maintaining differential privacy guarantees',
    },
  ];

  const testimonials = [
    {
      name: 'Research Foundation',
      role: 'Based on peer-reviewed papers',
      content: 'EdgeBrain solved our biggest challenge: training models without centralizing sensitive IoT data. Game-changing.',
      avatar: '👩‍🔬',
    },
    {
      name: 'Technical Approach',
      role: 'Differential privacy guarantees',
      content: 'The privacy budget feature gives us confidence our city infrastructure data stays protected.',
      avatar: '👨‍💼',
    },
    {
      name: 'Early Access',
      role: 'Join our beta program',
      content: 'Finally, federated learning that actually works for healthcare. Differential privacy gives us the guarantees we need.',
      avatar: '👩‍⚕️',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-br opacity-10 dark:opacity-5 blur-3xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold">
              🚀 Federated Learning for IoT
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              Privacy-First ML{' '}
              <span className="text-transparent bg-clip-text bg-gradient-br">Training</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Train machine learning models across IoT devices without centralizing data. Maintain differential privacy guarantees while scaling your ML infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/signup"
                className="px-8 py-4 rounded-lg bg-gradient-br text-white hover:opacity-90 font-semibold text-lg flex items-center gap-2"
              >
                Get Started Free <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <a
                href="/#features"
                className="px-8 py-4 rounded-lg border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold text-lg"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-gradient-br text-primary-600 dark:text-primary-400 mb-2">Open</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Beta Program</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">Strong</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Privacy Focus</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">Low</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Latency Goal</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">Security</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">First</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Federated Learning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to train machine learning models securely across distributed IoT devices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-lg/20 transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  <FontAwesomeIcon icon={feature.icon} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How EdgeBrain Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Four simple steps to federated learning at scale
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-br text-white flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-1 bg-primary-200 dark:bg-primary-800" style={{
                    marginLeft: '2rem',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose EdgeBrain
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built on federated learning research for privacy-preserving ML
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" size="sm" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-br">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy Federated Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start with 10 edge devices for free. Scale to unlimited devices as you grow.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 rounded-lg bg-white text-primary-600 hover:bg-gray-100 font-bold text-lg"
          >
            Get Started Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
