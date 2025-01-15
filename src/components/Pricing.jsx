import React from 'react';
import { Container } from 'react-bootstrap';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for small teams and startups",
      price: "99",
      features: [
        "AI Resume Scoring",
        "Basic Assessments",
        "Email Support",
        "Up to 50 candidates/month",
        "5 Team Members",
        "Basic Analytics"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing companies",
      price: "199",
      popular: true,
      features: [
        "Everything in Basic",
        "AI Proctoring",
        "Video Interviews",
        "Up to 200 candidates/month",
        "15 Team Members",
        "Advanced Analytics",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Custom Integrations",
        "Unlimited Candidates",
        "Unlimited Team Members",
        "Custom Branding",
        "Dedicated Support",
        "SLA Guarantee"
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.subtitle}>
            Choose the perfect plan for your recruitment needs
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>
              
              <div className={styles.price}>
                <span className={styles.amount}>
                  {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className={styles.period}>/month</span>
                )}
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.feature}>
                    <Check size={20} className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.button} ${
                  plan.name === "Enterprise"
                    ? styles.secondaryButton
                    : styles.primaryButton
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;