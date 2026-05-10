"use client";

import { useScroll, useTransform, useSpring, motion } from "motion/react";
import { ArrowDown, Copy } from "lucide-react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import BlackHole from "@/components/react-bits/black-hole";

export function Hero(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scaleYRaw = useTransform(scrollYProgress, [0.0, 0.5], [1, 0]);
  const scaleY = useSpring(scaleYRaw, { stiffness: 100, damping: 30 });

  const y = useTransform(scrollY, (value) => value * 0.7);
  const textColor = useTransform(scrollYProgress, [0, 0.25], ["#000000", "#FFFFFF"]);

  return (
    <section ref={sectionRef} className="relative min-h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <BlackHole />
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 origin-top scale-125 will-change-transform"
        style={{ scaleY, y }}
        aria-hidden="true"
      >
        <Image
          src="/svg/gradient-fade.svg"
          alt=""
          fill
          className="object-cover object-top dark:-scale-y-100"
          priority
        />
        <div className="from-background absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t to-transparent" />
      </motion.div>

      <div className="mx-auto flex min-h-dvh w-full max-w-4xl flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl font-medium tracking-tight sm:text-6xl md:text-7xl lg:text-8xl pb-4"
          style={{ color: textColor }}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="block">Reverse engineer with</span>
          <span className="block">
            the{" "}
            <em className="italic text-black">
              Fellowship
            </em>
          </span>
        </motion.h1>

        <motion.div
          className="w-full mt-10 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="overflow-hidden rounded-2xl border border-white/15 text-left shadow-2xl">
            <div className="relative flex items-center justify-between gap-3 border-b border-white/10 bg-[#0f0f0f] px-3 py-2 sm:gap-6 sm:px-4 sm:py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full border border-white/20 bg-white/10"></span>
                <span className="size-2.5 rounded-full border border-white/20 bg-white/10"></span>
                <span className="size-2.5 rounded-full border border-white/20 bg-white/10"></span>
              </div>
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs">
                install command
              </span>
              <button
                type="button"
                className="cursor-pointer rounded-md p-1.5 text-[#79ffbb] transition-colors hover:text-[#2ecc85] active:scale-95"
                aria-label="Copy install command"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-black/25 px-3 py-3 sm:px-4 sm:py-4 backdrop-blur-md">
              <code className="block break-all text-base leading-5 text-white sm:whitespace-nowrap sm:leading-none">
                <span className="text-white/50">$ </span>curl -fsSL https://mordor.digital/setup.sh | bash
              </code>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-24 mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <ArrowDown
          className="text-foreground/60 dark:text-foreground/50 h-12 w-12"
          strokeWidth={1}
        />
      </motion.div>
    </section>
  );
}
