"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const footerColumns = [
    {
      title: "Pipeline",
      links: [
        { text: "Fingerprint", href: "#pipeline" },
        { text: "Hypothesize", href: "#pipeline" },
        { text: "Validate", href: "#pipeline" },
        { text: "Report", href: "#pipeline" },
      ],
    },
    {
      title: "Fellowship",
      links: [
        { text: "Gandalf (Orchestrator)", href: "#fellowship" },
        { text: "Legolas (Static)", href: "#fellowship" },
        { text: "Frodo (Dynamic)", href: "#fellowship" },
        { text: "Saruman (Deep Analysis)", href: "#fellowship" },
      ],
    },
    {
      title: "Ecosystem",
      links: [
        { text: "Documentation", href: "https://github.com/daemon-blockint-tech/MORDOR/blob/main/CLAUDE.md" },
        { text: "GitHub Repository", href: "https://github.com/daemon-blockint-tech/MORDOR" },
        { text: "PayAI Gateway", href: "https://x402.payai.network" },
        { text: "Docker Sandbox", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Tiers & Pricing", href: "#tiers" },
        { text: "Threat Intelligence", href: "#" },
        { text: "Security Audits", href: "#" },
        { text: "Bug Bounty", href: "#" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="w-full bg-background border-t border-white/5 pt-12 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Headline */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="py-12">
            <h2 className="text-3xl font-medium tracking-tight leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Autonomous malware analysis.
              <br />
              <span className="text-muted-foreground">One binary at a time.</span>
            </h2>
          </motion.div>
        </div>

        {/* Two Column Layout with Borders */}
        <div className="border-y border-border/50">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.5fr]"
            >
              {/* Left Column - Newsletter Signup */}
              <div className="border-b border-border/50 py-8 lg:border-b-0 lg:border-r lg:py-12 lg:pr-12">
                <div>
                  <h3 className="mb-6 text-lg font-medium tracking-tight text-foreground sm:text-xl">
                    Stay updated on the Fellowship's discoveries.
                  </h3>

                  {/* Email Input with Button */}
                  <div className="mb-6 flex">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 rounded-l-xl border border-r-0 border-border/50 bg-muted/20 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-white/20 focus:outline-none sm:px-6 sm:py-4 sm:text-base"
                    />
                    <button
                      className="flex items-center justify-center rounded-r-xl border border-border/50 bg-foreground px-4 transition-opacity hover:opacity-90 sm:px-6 cursor-pointer"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="h-5 w-5 text-background sm:h-6 sm:w-6" />
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground sm:text-sm">
                    *By completing this form you are signing up to receive our
                    threat intel reports and can unsubscribe at any time.
                  </p>
                </div>
              </div>

              {/* Right Column - 4 Column Links */}
              <div className="py-8 lg:py-12 lg:pl-12">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                  {footerColumns.map((column) => (
                    <div key={column.title}>
                      <h4 className="mb-4 text-sm font-medium tracking-tight text-foreground sm:mb-6 sm:text-base">
                        {column.title}
                      </h4>
                      <ul className="space-y-3">
                        {column.links.map((link) => (
                          <li key={link.text}>
                            <Link
                              href={link.href}
                              className="text-sm tracking-tight text-muted-foreground transition-colors hover:text-foreground sm:text-base no-underline"
                            >
                              {link.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="py-12">
            {/* Logo */}
            <div className="mb-8">
              <Link href="/">
                <Image
                  src="/logos/mordor-logo-black.png"
                  alt="MORDOR"
                  width={200}
                  height={34}
                  className="block dark:hidden"
                />
                <Image
                  src="/logos/mordor-logo-white.png"
                  alt="MORDOR"
                  width={200}
                  height={34}
                  className="hidden dark:block"
                />
              </Link>
            </div>

            {/* Copyright and Links */}
            <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
              <p>© {new Date().getFullYear()} DAEMON BLOCKINT TECHNOLOGIES. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground no-underline"
                >
                  Privacy Policy
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link
                  href="#"
                  className="transition-colors hover:text-foreground no-underline"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
