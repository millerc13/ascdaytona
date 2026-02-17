import { Metadata } from "next";
import {
  CreditCardIcon,
  PhoneIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Pay Online | Atlantic Surgery Center",
  description:
    "Make a secure online payment toward your balance at Atlantic Surgery Center.",
};

export default function PaymentPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Patient Payment
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            Make a secure payment toward your balance online.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Payment Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
              <BanknotesIcon className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p className="font-semibold text-amber-900 text-sm">
                Payments Under $50
              </p>
              <p className="text-sm text-amber-800 mt-1">
                Please call the Billing Office:{" "}
                <a
                  href="tel:386-248-8206"
                  className="font-medium underline"
                >
                  (386) 248-8206
                </a>{" "}
                or{" "}
                <a
                  href="tel:386-248-8205"
                  className="font-medium underline"
                >
                  (386) 248-8205
                </a>{" "}
                for payments under $50 or any questions about balances.
              </p>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-16 text-center">
            <div className="h-20 w-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8">
              <CreditCardIcon className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Online Payment Coming Soon
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto mb-10 leading-relaxed">
              We are currently setting up our secure online payment system with
              support for credit cards, debit cards, and more. In the meantime,
              please contact our billing office.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:386-248-8206"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Billing: (386) 248-8206
              </a>
              <a
                href="tel:386-248-8205"
                className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Alt: (386) 248-8205
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCardIcon,
                title: "Multiple Payment Methods",
                description: "Credit card, debit card, and additional options coming soon.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Secure Transactions",
                description: "Bank-level 256-bit encryption protects your information.",
              },
              {
                icon: ChatBubbleLeftRightIcon,
                title: "Billing Support",
                description: "Our dedicated billing team is here to help with any questions.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
