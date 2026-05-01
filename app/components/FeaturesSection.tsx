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
        const imageWrapper = section.querySelector(".feature-image-wrapper");
        const isReversed = index % 2 === 1;

        // Content animation
        gsap.fromTo(
          content,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "center 50%",
              scrub: 1,
            },
          }
        );

        // Image reveal animation with clip-path
        gsap.fromTo(
          imageWrapper,
          {
            clipPath: isReversed
              ? "inset(0 0 0 100%)"
              : "inset(0 100% 0 0)",
            opacity: 0,
          },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "center 40%",
              scrub: 1,
            },
          }
        );

        // Parallax effect on image
        gsap.fromTo(
          imageWrapper,
          { y: 60 },
          {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-6 mb-20 lg:mb-32">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-lime-600">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-black leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Everything you need,
            <br />
            <span className="text-lime-500">nothing you don't.</span>
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
                  <div className="feature-image-wrapper w-full lg:w-1/2">
                    <div className="relative">
                      {/* Glow Effect */}
                      <div
                        className={`absolute -inset-4 rounded-[32px] blur-[60px] opacity-40 ${
                          feature.accent === "violet"
                            ? "bg-violet-500/30"
                            : "bg-lime/40"
                        }`}
                      />

                      {/* Browser Chrome Frame */}
                      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_40px_100px_rgba(20,22,26,0.15)] ring-1 ring-ink/10">
                        {/* Browser Top Bar */}
                        <div className="flex items-center gap-2 border-b border-ink/5 bg-cloud/80 px-4 py-3">
                          {/* Traffic Lights */}
                          <div className="flex gap-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-400" />
                            <div className="h-3 w-3 rounded-full bg-yellow-400" />
                            <div className="h-3 w-3 rounded-full bg-green-400" />
                          </div>

                          {/* URL Bar */}
                          <div className="ml-4 flex-1">
                            <div className="flex h-7 items-center gap-2 rounded-lg bg-white px-3 text-xs text-ink/40 ring-1 ring-ink/10">
                              <svg
                                className="h-3 w-3"
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
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cloud">
                          <Image
                            src={feature.image}
                            alt={feature.tag}
                            fill
                            className="object-contain p-4"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div
                        className={`absolute -bottom-4 -right-4 h-24 w-24 rounded-full blur-2xl opacity-60 ${
                          feature.accent === "violet"
                            ? "bg-violet-400"
                            : "bg-lime"
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
