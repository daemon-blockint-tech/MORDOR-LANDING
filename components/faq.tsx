"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kinds of malware can MORDOR analyze?",
    answer:
      "MORDOR can analyze Windows binaries, ELF executables, packed payloads, and shellcode. Just submit a file or hash, and the Fellowship will extract intelligence, hook runtime APIs, and map capabilities.",
  },
  {
    question: "How does MORDOR prevent false positives?",
    answer:
      "Gollum acts as our adversarial reviewer, forcing the pipeline to justify signals. Every critical finding requires cross-validation from dynamic (Frodo) and static (Legolas) agents.",
  },
  {
    question: "Can I dive deeper into specific functions?",
    answer:
      "Absolutely. You can request Saruman (Claude Opus) to perform deep decompilation and semantic analysis on specific functions identified during triage.",
  },
  {
    question: "What export formats does MORDOR support?",
    answer:
      "MORDOR exports to STIX2, YARA rules, and Sigma rules. You also get a comprehensive Markdown report mapping the attack to MITRE ATT&CK.",
  },
  {
    question: "Is my data and samples secure?",
    answer:
      "Yes. All binaries are executed in Treebeard (isolated Docker sandbox) with strict network policies. We never leak your proprietary malware samples to public repositories.",
  },
];

function FAQItemComponent({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="rounded-2xl bg-muted/50"
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-medium text-foreground">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="shrink-0"
        >
          <Plus className="h-5 w-5 text-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-muted-foreground">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ(): ReactNode {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-4xl text-foreground font-medium tracking-tight">
              Answers to your questions
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="flex flex-col gap-3">
              {faqs.map((faq, index) => (
                <FAQItemComponent
                  key={faq.question}
                  item={faq}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
