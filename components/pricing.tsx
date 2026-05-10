"use client";

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { Check, Rocket, Zap, Building2 } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  note?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: LucideIcon;
}

const plans: PricingPlan[] = [
  {
    name: "Quick Triage",
    description: "High-volume automated screening",
    price: "$0.01",
    period: "/req",
    icon: Rocket,
    features: [
      "Phases 1-2 only",
      "OSINT & Static filtering",
      "No LLM usage",
      "Basic reporting",
      "Pay per request (PPR)",
    ],
    cta: "Start triaging",
  },
  {
    name: "Standard Analysis",
    description: "Security analysts and teams",
    price: "$0.10",
    period: "/req",
    note: "Pay with USDC.e via Tempo",
    icon: Zap,
    features: [
      "Full 6-phase pipeline",
      "LLM hypothesis builder",
      "On-demand Saruman analysis",
      "YARA & STIX2 exports",
      "Automated HTTP 402 billing",
    ],
    cta: "Deploy Fellowship",
    popular: true,
  },
  {
    name: "Deep Investigation",
    description: "Advanced incident response",
    price: "$0.50",
    period: "/req",
    icon: Building2,
    features: [
      "Everything in Standard",
      "Always-on Saruman",
      "MITRE ATT&CK mapping",
      "Volatility memory forensics",
      "Custom agent hooks (Frida)",
    ],
    cta: "Contact Sales",
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  const Icon = plan.icon;

  const cardContent = (
    <div
      className={`relative flex h-full flex-col rounded-3xl bg-background p-3 ${
        plan.popular ? "" : "border border-foreground/10"
      }`}
    >
      <div className="mb-6 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
        {plan.popular && (
          <span className="rounded-full border border-accent/50 bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            Most popular
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-semibold tracking-tight text-foreground">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-lg text-muted-foreground">{plan.period}</span>
        )}
        {plan.note && (
          <span className="ml-auto text-right text-sm text-muted-foreground">
            {plan.note}
          </span>
        )}
      </div>

      <div className="mt-8 flex-1">
        <div className="flex h-full flex-col rounded-xl bg-muted/50 p-6">
          <ul className="flex-1 space-y-4">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`mt-6 w-full cursor-pointer rounded-full py-4 text-base font-semibold transition-all ${
              plan.popular
                ? "bg-accent text-accent-foreground hover:opacity-90"
                : "bg-foreground text-background hover:bg-foreground/70"
            }`}
          >
            {plan.cta}
          </button>
        </div>
      </div>
    </div>
  );

  if (plan.popular) {
    return (
      <div className="relative">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] rounded-full bg-accent-light opacity-50 blur-3xl"
          animate={{
            x: ["-50%", "-30%", "-70%", "-40%", "-60%", "-50%"],
            y: ["-50%", "-70%", "-30%", "-60%", "-40%", "-50%"],
            scale: [1, 1.2, 0.9, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[50%] w-[50%] rounded-full bg-accent opacity-40 blur-3xl"
          animate={{
            x: ["-50%", "-70%", "-30%", "-60%", "-40%", "-50%"],
            y: ["-50%", "-30%", "-70%", "-40%", "-60%", "-50%"],
            scale: [1, 0.9, 1.15, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        />
        <div className="absolute -inset-px rounded-[1.52rem] bg-linear-to-br from-accent to-accent-light opacity-25" />
        <div className="relative">{cardContent}</div>
      </div>
    );
  }

  return cardContent;
}

export function Pricing(): ReactNode {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-4xl font-medium tracking-tight text-foreground">
            Enterprise-grade threat intelligence
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-muted-foreground">
          Pay-per-request using HTTP 402 Machine Payments Protocol (MPP). No API keys, no monthly commitments.
        </p>
      </div>
    </section>
  );
}
