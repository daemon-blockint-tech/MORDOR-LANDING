"use client";

import { SmoothScroll } from "@/components/smooth-scroll";
import { ReducedMotionProvider } from "@/lib/motion";
import { ThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";
import { Mppx, tempo } from "mppx/client";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

function MppxPolyfill() {
  useEffect(() => {
    // Generate a test account for the client polyfill
    const account = privateKeyToAccount(generatePrivateKey());
    
    // Polyfill global fetch to handle HTTP 402 with Tempo
    Mppx.create({
      methods: [tempo({ account })],
    });

    /* 
     * NOTE: The automated test ping below is commented out to prevent console errors.
     * When fetch() hits a 402 Payment Required, mppx intercepts it and tries to pay.
     * Because 'account' is randomly generated and has 0 balance, the transaction fails,
     * causing the fetch Promise to reject with "TypeError: Failed to fetch".
     *
     * fetch("https://mpp.dev/api/ping/paid")
     *   .then((res) => res.json().catch(() => res.text()))
     *   .then((data) => console.log("mppx test ping response:", data))
     *   .catch((err) => console.log("mppx test ping expected failure (0 balance):", err.message));
     */
  }, []);

  return null;
}

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ReducedMotionProvider>
        <SmoothScroll>
          <MppxPolyfill />
          {children}
        </SmoothScroll>
      </ReducedMotionProvider>
    </ThemeProvider>
  );
}
