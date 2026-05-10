"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  BrainCircuit,
  ShieldCheck,
  FileOutput,
  Menu,
  X,
  Bot,
  Braces,
  Network,
  Eye,
} from "lucide-react";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = {
    Pipeline: [
      {
        icon: Search,
        title: "Fingerprint",
        description: "Static analysis & OSINT via Shodan",
        href: "#pipeline",
      },
      {
        icon: BrainCircuit,
        title: "Hypothesize",
        description: "LLM-driven threat theories",
        href: "#pipeline",
      },
      {
        icon: ShieldCheck,
        title: "Validate",
        description: "Dynamic hooking in secure sandbox",
        href: "#pipeline",
      },
      {
        icon: FileOutput,
        title: "Report",
        description: "Export YARA, STIX2 & MITRE ATT&CK",
        href: "#pipeline",
      },
    ],
    Fellowship: [
      {
        icon: Bot,
        title: "Gandalf",
        description: "Main Pipeline Orchestrator",
        href: "#fellowship",
      },
      {
        icon: Braces,
        title: "Legolas",
        description: "Ghidra/Radare2 static analysis",
        href: "#fellowship",
      },
      {
        icon: Network,
        title: "Pippin",
        description: "Wireshark network capture",
        href: "#fellowship",
      },
      {
        icon: Eye,
        title: "Saruman",
        description: "Claude Opus deep analysis",
        href: "#fellowship",
      },
    ],
  };

  return (
    <header className="fixed top-4 w-full z-50 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Desktop Navigation */}
        <motion.div
          className="relative mx-auto hidden lg:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {/* Nav Container - Floating Pill */}
          <div className="mx-auto w-fit rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 shadow-xl dark:bg-black/40 dark:border-white/10 overflow-visible transition-all duration-300">
            {/* Main Nav Bar */}
            <div className="flex items-center justify-between gap-4 pl-6 pr-3 py-3 relative z-20">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center mr-8"
                onClick={() => setActiveMenu(null)}
              >
                <Image
                  src="/logos/mordor-logo-black.png"
                  alt="MORDOR"
                  width={140}
                  height={24}
                  priority
                  className="block dark:hidden"
                />
                <Image
                  src="/logos/mordor-logo-white.png"
                  alt="MORDOR"
                  width={140}
                  height={24}
                  priority
                  className="hidden dark:block"
                />
              </Link>

              {/* Nav Links */}
              <div className="flex items-center gap-1">
                <button
                  onMouseEnter={() => setActiveMenu("Pipeline")}
                  className={`px-4 py-2 text-sm tracking-tight font-medium rounded-full transition-colors ${
                    activeMenu === "Pipeline"
                      ? "text-foreground bg-foreground/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  Pipeline
                </button>
                <button
                  onMouseEnter={() => setActiveMenu("Fellowship")}
                  className={`px-4 py-2 text-sm tracking-tight font-medium rounded-full transition-colors ${
                    activeMenu === "Fellowship"
                      ? "text-foreground bg-foreground/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  Fellowship
                </button>
                <Link
                  href="#tiers"
                  className="px-4 py-2 text-sm tracking-tight font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full no-underline transition-colors"
                  onMouseEnter={() => setActiveMenu(null)}
                >
                  Tiers
                </Link>
                <Link
                  href="https://github.com/daemon-blockint-tech/MORDOR/blob/main/CLAUDE.md"
                  className="px-4 py-2 text-sm tracking-tight font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full no-underline transition-colors"
                  onMouseEnter={() => setActiveMenu(null)}
                >
                  Docs
                </Link>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2 ml-6">
                <Link
                  href="https://github.com/daemon-blockint-tech/MORDOR"
                  className="px-4 py-2 tracking-tight text-sm font-medium text-muted-foreground hover:text-foreground no-underline transition-colors"
                  onMouseEnter={() => setActiveMenu(null)}
                >
                  GitHub
                </Link>
                <Link
                  href="#pricing"
                  className="px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium tracking-tight hover:opacity-90 no-underline transition-opacity"
                  onMouseEnter={() => setActiveMenu(null)}
                >
                  Deploy
                </Link>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {activeMenu && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 overflow-hidden rounded-3xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-2xl z-10 origin-top"
                >
                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-3 w-[640px]">
                      {menuItems[activeMenu as keyof typeof menuItems].map(
                        (item, index) => {
                          const Icon = item.icon;
                          return (
                            <motion.a
                              key={item.title}
                              href={item.href}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                                ease: "easeOut",
                              }}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-start gap-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-transparent p-4 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200"
                            >
                              <div className="shrink-0 rounded-lg bg-background p-2 shadow-sm">
                                <Icon className="w-5 h-5 text-foreground" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                                  {item.title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            </motion.a>
                          );
                        }
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="rounded-3xl bg-white/10 dark:bg-black/40 backdrop-blur-2xl border border-white/10 shadow-xl overflow-hidden">
            {/* Mobile Nav Bar */}
            <div className="flex items-center justify-between pl-5 pr-3 py-3">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/logos/mordor-logo-black.png"
                  alt="MORDOR"
                  width={120}
                  height={20}
                  className="block dark:hidden"
                />
                <Image
                  src="/logos/mordor-logo-white.png"
                  alt="MORDOR"
                  width={120}
                  height={20}
                  className="hidden dark:block"
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile Expanded Content */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden bg-background/50"
                >
                  <div className="px-4 pb-4 pt-2">
                    <div className="space-y-4">
                      {/* Simple Links */}
                      <div className="space-y-1">
                        <Link
                          href="#tiers"
                          className="block py-2 px-2 text-sm font-medium text-foreground no-underline"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Tiers
                        </Link>
                        <Link
                          href="https://github.com/daemon-blockint-tech/MORDOR"
                          className="block py-2 px-2 text-sm font-medium text-muted-foreground no-underline"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          GitHub
                        </Link>
                      </div>

                      {/* Mobile CTA */}
                      <div>
                        <Link
                          href="#pricing"
                          className="block w-full text-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium no-underline"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Deploy Fellowship
                        </Link>
                      </div>

                      {/* Pipeline Section */}
                      <div className="pt-4 border-t border-border/50">
                        <h3 className="text-sm font-bold text-foreground mb-3 px-2">
                          Pipeline
                        </h3>
                        <div className="space-y-2">
                          {menuItems.Pipeline.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-start gap-3 rounded-2xl bg-muted/50 p-3 no-underline"
                              >
                                <div className="shrink-0 rounded-lg bg-background p-2">
                                  <Icon className="w-4 h-4 text-foreground" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-foreground mb-0.5">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Fellowship Section */}
                      <div className="pt-4 border-t border-border/50">
                        <h3 className="text-sm font-bold text-foreground mb-3 px-2">
                          Fellowship
                        </h3>
                        <div className="space-y-2">
                          {menuItems.Fellowship.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-start gap-3 rounded-2xl bg-muted/50 p-3 no-underline"
                              >
                                <div className="shrink-0 rounded-lg bg-background p-2">
                                  <Icon className="w-4 h-4 text-foreground" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-foreground mb-0.5">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
