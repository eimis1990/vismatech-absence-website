"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Chrome, ArrowRight, Sparkles, MousePointerClick } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FeaturesSection from "./components/FeaturesSection";

gsap.registerPlugin(ScrollTrigger);

const storeUrl =
  "https://chromewebstore.google.com/detail/vismatech-absence-manager/fdpakcjcihhjeiaimmkfoldhkgglanhe?hl=en-US&utm_source=ext_sidebar";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      });

      // Bottom CTA entrance
      gsap.from(".bottom-cta", {
        scale: 0.9,
        opacity: 0,
        scrollTrigger: {
          trigger: ".bottom-cta",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="mesh-bg min-h-screen">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Image
            src="/images/logo.svg"
            alt="VismaTech"
            width={180}
            height={40}
            priority
            className="h-8 w-auto rounded-lg bg-ink px-3 py-2 sm:h-9"
          />
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 sm:flex"
          >
            <Chrome size={18} />
            Add to Chrome
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="hero-content max-w-4xl">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-lime/20 px-4 py-2 text-sm font-bold text-ink">
            <Sparkles size={16} className="text-lime-600" />
            <span>Fastest way to manage absences</span>
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.1] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            VismaTech Absence <span className="text-lime-500">Manager</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-ink/60 sm:text-xl">
            Register your leave in seconds. A playful, lightweight Chrome extension designed to keep you in your flow while managing your time.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-16 items-center gap-3 rounded-full bg-ink px-10 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-black active:scale-95"
            >
              <Chrome size={22} />
              Add to Chrome
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Parallax Section */}
      <FeaturesSection />

      {/* Final CTA */}
      <section className="px-6 pb-32">
        <div className="bottom-cta playful-radius mx-auto max-w-5xl bg-ink p-12 text-center text-white shadow-2xl sm:p-20">
          <h2 className="text-4xl font-black sm:text-6xl text-balance">Ready to streamline your workflow?</h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/60 sm:text-xl">
            Join hundreds of VismaTech users who are already saving time every day.
          </p>
          <div className="mt-12 flex justify-center">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 items-center gap-3 rounded-full bg-lime px-10 text-lg font-bold text-ink transition-all hover:scale-105 active:scale-95"
            >
              <MousePointerClick size={22} />
              Install Extension Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/5 py-12 text-center text-sm font-medium text-ink/40">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/terms" className="hover:text-ink transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-ink transition-colors">
            Privacy Policy
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} VismaTech Absence Manager. Built for efficiency.</p>
      </footer>
    </main>
  );
}
