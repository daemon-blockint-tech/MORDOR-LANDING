"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Fingerprint } from "lucide-react";

export function Auth() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Continue with email:", email);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-6 bg-background">
      {/* Background Image / Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 0",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Left Side - Brand Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex flex-col max-w-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-foreground" strokeWidth={1.5} />
            <h2 className="text-4xl font-medium tracking-tighter text-foreground">
              MORDOR
            </h2>
          </div>

          <p className="text-lg text-muted-foreground tracking-tight leading-relaxed">
            Authenticate to access the Fellowship. Enter the isolated sandbox to begin autonomous malware analysis.
          </p>
        </motion.div>

        {/* Right Side - Sign In Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/5 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/10 dark:border-white/10 rounded-2xl p-8 shadow-2xl"
        >
          {/* Title */}
          <h1 className="text-3xl font-medium text-foreground mb-2 tracking-tight">
            Sign in
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            New operative?{" "}
            <a
              href="#"
              className="text-foreground hover:text-foreground/80 font-medium no-underline transition-colors"
            >
              Request clearance
            </a>
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Operator email"
              required
              className="w-full px-4 py-3 mb-4 rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-200"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity duration-200"
            >
              <Fingerprint className="w-4 h-4" />
              Authenticate
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Secure Protocols
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-4">
            <button className="w-full tracking-tight px-6 py-3 rounded-xl border border-border bg-background/30 text-foreground font-medium hover:bg-muted/50 transition-colors duration-200 flex items-center justify-center gap-3 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Sign in with GitHub
            </button>
          </div>

          {/* Help Link */}
          <p className="text-xs text-center text-muted-foreground mt-8">
            Access requires Level 4 clearance.{" "}
            <a
              href="#"
              className="text-foreground hover:text-foreground/80 font-medium no-underline transition-colors"
            >
              Verify credentials
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
