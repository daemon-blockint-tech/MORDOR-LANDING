"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  images?: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

const defaultImages = [
  // Column 0
  { src: "/img/3d-render-wPPwXYTXIl0-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 1" },
  { src: "/img/denis-sebastian-tamas-ZmKykuKK0OA-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 2" },
  { src: "/img/dim-gunger-hp6G_bRi7Jk-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 3" },
  { src: "/img/hadi-yazdi-aznaveh-MlZ1QEww_-U-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 4" },
  // Column 1
  { src: "/img/hadi-yazdi-aznaveh-Np378z6jGrk-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 5" },
  { src: "/img/jc-dela-cuesta-MgG-w0Dg_Ek-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 6" },
  { src: "/img/markus-spiske-70Rir5vB96U-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 7" },
  { src: "/img/rick-rothenberg-Y1GVAhRHiH4-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 8" },
  // Column 2
  { src: "/img/shubham-dhage-FmFY5hITXWU-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 9" },
  { src: "/img/xavier-cee-genkxag3nY4-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 10" },
  { src: "/img/3d-render-wPPwXYTXIl0-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 11" },
  { src: "/img/markus-spiske-70Rir5vB96U-unsplash.jpg", alt: "MORDOR Malware Sandbox Visualization 12" },
];

export function ImageReveal({
  images = defaultImages,
  className = "",
}: ImageRevealProps): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);

  const columns: [
    { src: string; alt: string }[],
    { src: string; alt: string }[],
    { src: string; alt: string }[],
  ] = [[], [], []];
  images.forEach((image, index) => {
    columns[index % 3]!.push(image);
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const columnEls = containerRef.current!.querySelectorAll(".column");

      columnEls.forEach((column, columnIndex) => {
        const items = column.querySelectorAll(".column__item");

        items.forEach((item) => {
          const wrapper = item.querySelector(".column__item-imgwrap");
          if (!wrapper) return;

          let xPercentValue: number;
          let scaleXValue: number;
          let scaleYValue: number;
          let transformOrigin: string;
          let filterValue: string;

          switch (columnIndex) {
            case 0:
              xPercentValue = -400;
              transformOrigin = "0% 50%";
              scaleXValue = 6;
              scaleYValue = 0.3;
              filterValue = "blur(10px)";
              break;
            case 1:
              xPercentValue = 0;
              transformOrigin = "50% 50%";
              scaleXValue = 0.7;
              scaleYValue = 0.7;
              filterValue = "blur(5px)";
              break;
            case 2:
              xPercentValue = 400;
              transformOrigin = "100% 50%";
              scaleXValue = 6;
              scaleYValue = 0.3;
              filterValue = "blur(10px)";
              break;
            default:
              xPercentValue = 0;
              transformOrigin = "50% 50%";
              scaleXValue = 1;
              scaleYValue = 1;
              filterValue = "blur(0px)";
          }

          gsap.fromTo(
            wrapper,
            {
              willChange: "filter",
              xPercent: xPercentValue,
              opacity: 0,
              scaleX: scaleXValue,
              scaleY: scaleYValue,
              filter: filterValue,
            },
            {
              startAt: { transformOrigin: transformOrigin },
              scrollTrigger: {
                trigger: item,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: true,
              },
              xPercent: 0,
              opacity: 1,
              scaleX: 1,
              scaleY: 1,
              filter: "blur(0px)",
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`overflow-hidden -mt-24 ${className}`}>
      <div
        ref={containerRef}
        className="columns mx-auto grid max-w-7xl grid-cols-3 gap-4 px-4 sm:px-6 md:gap-6 lg:gap-8 lg:px-8"
      >
        <div className="column flex flex-col gap-4 md:gap-6 lg:gap-8">
          {columns[0].map((image, index) => (
            <figure key={`col0-${index}`} className="column__item">
              <div className="column__item-imgwrap relative aspect-3/4 w-full overflow-hidden rounded-xl">
                <div
                  className="column__item-img h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  role="img"
                  aria-label={image.alt}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{
                    background:
                      "linear-gradient(135deg, #333DA7 0%, #7388DF 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="column flex flex-col gap-4 md:gap-6 lg:gap-8">
          {columns[1].map((image, index) => (
            <figure key={`col1-${index}`} className="column__item">
              <div className="column__item-imgwrap relative aspect-3/4 w-full overflow-hidden rounded-xl">
                <div
                  className="column__item-img h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  role="img"
                  aria-label={image.alt}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{
                    background:
                      "linear-gradient(135deg, #333DA7 0%, #7388DF 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="column flex flex-col gap-4 md:gap-6 lg:gap-8">
          {columns[2].map((image, index) => (
            <figure key={`col2-${index}`} className="column__item">
              <div className="column__item-imgwrap relative aspect-3/4 w-full overflow-hidden rounded-xl">
                <div
                  className="column__item-img h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image.src})` }}
                  role="img"
                  aria-label={image.alt}
                />
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-color"
                  style={{
                    background:
                      "linear-gradient(135deg, #333DA7 0%, #7388DF 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
