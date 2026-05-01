import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - VismaTech Absence Manager",
  description: "Terms of Service for VismaTech Absence Manager Chrome Extension.",
};

export default function TermsOfService() {
  return (
    <main className="mesh-bg min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-ink/5 bg-white/80 backdrop-blur-md px-6 py-4 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="VismaTech"
              width={180}
              height={40}
              priority
              className="h-8 w-auto rounded-lg bg-ink px-3 py-2 sm:h-9"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-ink/60 hover:text-ink transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mb-12">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-lime-600">
            Legal
          </span>
          <h1 className="mt-4 text-4xl font-black text-ink sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-ink/60">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-ink/80">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By installing and using the VismaTech Absence Manager Chrome Extension ("Extension"),
              you agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use the Extension.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">2. Description of Service</h2>
            <p className="leading-relaxed">
              VismaTech Absence Manager is a Chrome browser extension designed to help VismaTech
              employees manage their absence requests efficiently. The Extension allows users to:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>View remaining leave days and upcoming absences</li>
              <li>Create and submit absence requests</li>
              <li>View history of past absence registrations</li>
              <li>Send absence request emails directly from their Gmail account</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">3. Gmail Integration & Permissions</h2>
            <p className="leading-relaxed">
              The Extension requires access to the Gmail API scope <code className="bg-ink/5 px-2 py-1 rounded text-sm">gmail.send</code> to
              function properly. This permission is used exclusively to:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Send absence request emails on your behalf to the designated recipient</li>
              <li>Retrieve your sent absence request history for display within the Extension</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              <strong>We do not:</strong>
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>Read your personal emails</li>
              <li>Store your email content on any external servers</li>
              <li>Share your email data with third parties</li>
              <li>Access any emails other than those related to absence requests sent by this Extension</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">4. User Responsibilities</h2>
            <p className="leading-relaxed">You agree to:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Use the Extension only for its intended purpose of managing absence requests</li>
              <li>Ensure that absence requests submitted are accurate and legitimate</li>
              <li>Maintain the security of your Google account credentials</li>
              <li>Comply with your organization's absence policies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed">
              The Extension is provided "as is" without warranties of any kind. We are not
              responsible for any damages arising from the use or inability to use the Extension,
              including but not limited to missed absence requests, email delivery failures, or
              any workplace-related consequences.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">6. Modifications</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Continued use
              of the Extension after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">7. Termination</h2>
            <p className="leading-relaxed">
              You may stop using the Extension at any time by uninstalling it from your browser.
              We may also discontinue the Extension or restrict access at our discretion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">8. Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:{" "}
              <a
                href="mailto:e.kudarauskas@gmail.com"
                className="text-lime-600 hover:text-lime-700 font-medium"
              >
                e.kudarauskas@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>

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
