"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: "overview",
    tag: "Overview",
    title: "Your dashboard,\nbut micro.",
    description:
      "Get a quick glance at your remaining leave days and upcoming absences without ever leaving your browser tab.",
    image: "/images/home-screen.png",
    accent: "lime",
  },
  {
    id: "seamless",
    tag: "Seamless",
    title: "Create requests\nin a snap.",
    description:
      "Choose your reason, pick your dates, and submit. We've removed the friction so you can get back to what matters.",
    image: "/images/create-new-screen.png",
    accent: "violet",
  },
  {
    id: "history",
    tag: "History",
    title: "Stay on top of\nyour records.",
    description:
      "A clean, searchable history of all your past registrations. Transparent and always accessible.",
    image: "/images/history-screen.png",
    accent: "lime",
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const content = section.querySelector(".feature-content");
        const card = section.querySelector(".feature-card");
        const isReversed = index % 2 === 1;

        // Content animation
        gsap.fromTo(
          content,
          {
            x: isReversed ? 60 : -60,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );

        // Card animation - slide in from opposite side
        gsap.fromTo(
          card,
          {
            x: isReversed ? -80 : 80,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );

        // Parallax effect on card (separate ScrollTrigger)
        gsap.to(card, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-6 mb-20 lg:mb-32">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-lime-600">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Everything you need,
            <br />
            <span className="text-lime-500">nothing you don&apos;t.</span>
          </h2>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="flex flex-col gap-20 lg:gap-0">
        {features.map((feature, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={feature.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-[80vh] lg:min-h-screen flex items-center"
            >
              <div className="mx-auto w-full max-w-7xl px-6">
                <div
                  className={`flex flex-col items-center gap-12 lg:gap-20 ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Content */}
                  <div className="feature-content w-full lg:w-1/2">
                    <span
                      className={`text-xs font-black uppercase tracking-[0.3em] ${
                        feature.accent === "violet"
                          ? "text-violet-600"
                          : "text-lime-600"
                      }`}
                    >
                      Feature 0{index + 1}
                    </span>
                    <h3 className="mt-6 text-4xl font-black whitespace-pre-line leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
                      {feature.title}
                    </h3>
                    <p className="mt-8 text-lg leading-relaxed text-ink/60 max-w-md">
                      {feature.description}
                    </p>

                    {/* Accent Line */}
                    <div
                      className={`mt-8 h-1 w-20 rounded-full ${
                        feature.accent === "violet" ? "bg-violet-500" : "bg-lime"
                      }`}
                    />
                  </div>

                  {/* Image - Chrome Extension Frame */}
                  <div className="feature-card w-full lg:w-1/2">
                    <div className="relative">
                      {/* Outer Glow - Large soft shadow */}
                      <div
                        className={`absolute -inset-8 rounded-[48px] opacity-50 blur-3xl ${
                          feature.accent === "violet"
                            ? "bg-violet-400/40"
                            : "bg-lime/50"
                        }`}
                      />

                      {/* Browser Chrome Frame */}
                      <div
                        className={`relative rounded-3xl bg-cloud/80 p-3 backdrop-blur-sm ${
                          feature.accent === "violet"
                            ? "shadow-[0_8px_40px_rgba(108,99,255,0.15),0_20px_80px_rgba(108,99,255,0.1),0_0_0_1px_rgba(108,99,255,0.05)]"
                            : "shadow-[0_8px_40px_rgba(187,241,70,0.2),0_20px_80px_rgba(187,241,70,0.15),0_0_0_1px_rgba(187,241,70,0.1)]"
                        }`}
                      >
                        {/* Browser Top Bar */}
                        <div className="flex items-center gap-2 rounded-t-xl bg-cloud px-4 py-3">
                          {/* Traffic Lights */}
                          <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                            <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                            <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                          </div>

                          {/* URL Bar */}
                          <div className="ml-4 flex-1">
                            <div className="flex h-7 items-center gap-2 rounded-lg bg-white px-3 text-xs text-ink/40 shadow-sm ring-1 ring-ink/5">
                              <svg
                                className="h-3 w-3 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                              <span className="truncate">
                                chrome-extension://vismatech-absence
                              </span>
                            </div>
                          </div>

                          {/* Extension Icon Indicator */}
                          <div
                            className={`ml-2 flex h-7 w-7 items-center justify-center rounded-lg ${
                              feature.accent === "violet"
                                ? "bg-violet-100"
                                : "bg-lime/30"
                            }`}
                          >
                            <svg
                              className={`h-4 w-4 ${
                                feature.accent === "violet"
                                  ? "text-violet-600"
                                  : "text-lime-700"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Extension Screenshot */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-xl bg-cloud">
                          <Image
                            src={feature.image}
                            alt={feature.tag}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      {/* Decorative corner glow */}
                      <div
                        className={`absolute -bottom-6 -right-6 h-32 w-32 rounded-full blur-2xl opacity-70 ${
                          feature.accent === "violet"
                            ? "bg-violet-400/50"
                            : "bg-lime/60"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
