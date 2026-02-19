import { Metadata } from "next";
import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Confirmation | Atlantic Surgery Center",
  description: "Your payment has been received.",
};

export default function ConfirmationPage() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-lg px-4 sm:px-6 text-center">
        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircleIcon className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Payment Received
        </h1>

        <p className="text-slate-500 mb-2">
          Thank you! Your payment to Atlantic Surgery Center has been
          successfully processed.
        </p>

        <p className="text-sm text-slate-400 mb-8">
          A confirmation will be sent to the email address on file. If you have
          any questions about your account, please contact our billing office.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
          >
            Return Home
          </Link>

          <a
            href="tel:386-248-8206"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Billing
          </a>
        </div>
      </div>
    </section>
  );
}
