import { Metadata } from "next";
import {
  CreditCardIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Pay Online | Atlantic Surgery Center",
  description:
    "Make a secure online payment toward your balance at Atlantic Surgery Center.",
};

export default function PaymentPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Patient Payment
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            Make a secure payment toward your balance online.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Payment Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> If you want to make a payment less than
              $50, please call the Billing Office:{" "}
              <a
                href="tel:386-248-8206"
                className="font-medium underline"
              >
                386-248-8206
              </a>{" "}
              or{" "}
              <a
                href="tel:386-248-8205"
                className="font-medium underline"
              >
                386-248-8205
              </a>
              , or for any questions pertaining to payments or balances.
            </p>
          </div>

          {/* Coming Soon */}
          <div className="text-center bg-white border-2 border-dashed border-slate-300 rounded-xl p-16">
            <CreditCardIcon className="h-16 w-16 text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Online Payment Coming Soon
            </h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
              We are currently setting up our secure online payment system.
              In the meantime, please contact our billing office to make a
              payment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:386-248-8206"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-light transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Billing: (386) 248-8206
              </a>
              <a
                href="tel:386-248-8205"
                className="inline-flex items-center justify-center rounded-lg bg-white border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Alt: (386) 248-8205
              </a>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <CreditCardIcon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 text-sm">
                Multiple Payment Methods
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Credit card, debit, and more
              </p>
            </div>
            <div className="text-center p-6">
              <ShieldCheckIcon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 text-sm">
                Secure Transactions
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Bank-level encryption
              </p>
            </div>
            <div className="text-center p-6">
              <PhoneIcon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 text-sm">
                Billing Support
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our team is here to help
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
