import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - VismaTech Absence Manager",
  description: "Privacy Policy for VismaTech Absence Manager Chrome Extension.",
};

export default function PrivacyPolicy() {
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
          <span className="text-xs font-black uppercase tracking-[0.3em] text-violet-600">
            Legal
          </span>
          <h1 className="mt-4 text-4xl font-black text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-ink/60">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-ink/80">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Overview</h2>
            <p className="leading-relaxed">
              VismaTech Absence Manager ("Extension") is committed to protecting your privacy.
              This Privacy Policy explains how we handle information when you use our Chrome Extension.
            </p>
            <div className="mt-6 p-6 bg-lime/10 rounded-2xl border border-lime/20">
              <p className="font-semibold text-ink mb-2">In short:</p>
              <p className="text-ink/70">
                We do not collect, store, or share your personal data. The Extension operates
                entirely within your browser and only uses Gmail permissions to send emails
                and retrieve your own sent absence requests.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Information We Do NOT Collect</h2>
            <p className="leading-relaxed">We want to be clear about what we don't do:</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-lime/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>We do not store your emails or email content on any external servers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-lime/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>We do not collect or store your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-lime/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>We do not track your browsing activity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-lime/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>We do not share any data with third parties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-lime/20 flex items-center justify-center">
                  <svg className="h-3 w-3 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>We do not use analytics or tracking tools</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Gmail API Usage</h2>
            <p className="leading-relaxed">
              The Extension requests access to the <code className="bg-ink/5 px-2 py-1 rounded text-sm font-mono">gmail.send</code> scope
              from the Gmail API. This is a sensitive scope that requires justification:
            </p>

            <div className="mt-6 p-6 bg-violet-50 rounded-2xl border border-violet-100">
              <h3 className="font-bold text-ink mb-3">Why we need this permission:</h3>
              <p className="text-ink/70 mb-4">
                The <code className="bg-white px-2 py-1 rounded text-sm font-mono">gmail.send</code> scope
                allows the Extension to send emails on your behalf. This is essential for the core
                functionality of automatically sending absence request emails directly from your
                verified Gmail account to the designated recipient.
              </p>
              <h3 className="font-bold text-ink mb-3">How we use this permission:</h3>
              <ol className="space-y-2 text-ink/70 list-decimal list-inside">
                <li>
                  <strong>Sending absence requests:</strong> When you submit an absence request
                  through the Extension, it composes and sends an email from your Gmail account
                  to the appropriate recipient.
                </li>
                <li>
                  <strong>Retrieving your sent history:</strong> The Extension reads only the
                  absence request emails that were sent by this Extension to display your
                  request history within the app.
                </li>
              </ol>
            </div>

            <div className="mt-6 p-6 bg-red-50 rounded-2xl border border-red-100">
              <h3 className="font-bold text-ink mb-3">What we explicitly DO NOT do:</h3>
              <ul className="space-y-2 text-ink/70 list-disc list-inside">
                <li>Read your personal or work emails unrelated to this Extension</li>
                <li>Store email content on external servers or databases</li>
                <li>Transmit your email data to any third party</li>
                <li>Access your contacts, attachments, or other Gmail data</li>
                <li>Send emails without your explicit action (clicking "Submit")</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Data Storage</h2>
            <p className="leading-relaxed">
              All data used by the Extension is stored locally in your browser using Chrome's
              built-in storage APIs. This includes:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Your authentication tokens (stored securely by Chrome)</li>
              <li>Extension preferences and settings</li>
              <li>Cached absence request history for faster loading</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              This data never leaves your device and is automatically removed when you
              uninstall the Extension.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Your Rights</h2>
            <p className="leading-relaxed">You have complete control over your data:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Revoke access:</strong> You can revoke the Extension's access to your
                Gmail account at any time through your{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-700 font-medium"
                >
                  Google Account settings
                </a>
              </li>
              <li>
                <strong>Uninstall:</strong> Removing the Extension will delete all locally
                stored data
              </li>
              <li>
                <strong>Data portability:</strong> Since we don't store your data externally,
                there's nothing to export
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Third-Party Services</h2>
            <p className="leading-relaxed">
              The Extension interacts only with Google's Gmail API to perform its core functions.
              We do not integrate with any other third-party services, analytics platforms, or
              advertising networks.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify users of any
              significant changes through the Extension or Chrome Web Store listing. Continued
              use of the Extension after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-ink mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data
              practices, please contact us at:{" "}
              <a
                href="mailto:e.kudarauskas@gmail.com"
                className="text-violet-600 hover:text-violet-700 font-medium"
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
