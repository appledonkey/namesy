import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Namesy",
  description: "Privacy policy for the Namesy baby name app.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <article className="max-w-2xl mx-auto prose prose-neutral dark:prose-invert">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-muted text-sm mb-8">Last updated: January 2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Overview</h2>
            <p className="text-foreground/80">
              Namesy is a baby name discovery app that respects your privacy. We believe
              your name choices are personal, and we&apos;ve designed the app to keep your
              data completely private.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Data Collection</h2>
            <p className="text-foreground/80 font-medium mb-2">
              We do not collect any personal data.
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-1">
              <li>No account required</li>
              <li>No analytics or tracking</li>
              <li>No data sent to servers</li>
              <li>No advertisements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Local Storage</h2>
            <p className="text-foreground/80">
              All your preferences (liked names, favorites) are stored locally on your
              device only. This data never leaves your phone and is not accessible to us
              or any third party.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Offline Functionality</h2>
            <p className="text-foreground/80">
              Namesy works entirely offline. The complete name database is included in
              the app, so no internet connection is required.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Children&apos;s Privacy</h2>
            <p className="text-foreground/80">
              While Namesy helps parents choose baby names, the app is designed for adult
              users (parents and expecting parents). We do not knowingly collect information
              from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Changes to This Policy</h2>
            <p className="text-foreground/80">
              If we update this policy, we will post the new version here with an updated date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Contact</h2>
            <p className="text-foreground/80">
              Questions about this privacy policy? Contact us at{" "}
              <a
                href="mailto:privacy@namesy.app"
                className="text-primary hover:underline"
              >
                privacy@namesy.app
              </a>
            </p>
          </div>
        </section>

        <div className="mt-12 pt-6 border-t border-border">
          <a
            href="/"
            className="text-primary hover:underline text-sm"
          >
            &larr; Back to Namesy
          </a>
        </div>
      </article>
    </main>
  );
}
