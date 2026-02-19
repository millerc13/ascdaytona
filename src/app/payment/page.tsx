import Image from "next/image";
import { Metadata } from "next";
import {
  CreditCardIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  BanknotesIcon,
  PhoneIcon,
  ArrowTopRightOnSquareIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Pay Online | Atlantic Surgery Center",
  description:
    "Make a secure online payment toward your balance at Atlantic Surgery Center.",
};

// TODO: Replace with Jeff's actual HST Pay portal URL
const HST_PAY_URL = "#";

export default function PaymentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[260px] sm:min-h-[300px] flex items-center justify-between gap-12 py-12">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Patient Payment
              </h1>
              <p className="mt-4 text-lg text-blue-200 max-w-2xl">
                Make a secure payment toward your balance online.
              </p>
            </div>

            <div className="hidden lg:block shrink-0 opacity-15">
              <Image
                src="/asc-logo-transparent.png"
                alt=""
                width={240}
                height={100}
                className="h-28 w-auto brightness-0 invert"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Payment Options */}
          <div className="space-y-5">
            {/* Pay Online — Primary CTA */}
            <a
              href={HST_PAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center">
                      <CreditCardIcon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      Pay Online
                    </h2>
                  </div>
                  <p className="text-blue-200 leading-relaxed max-w-lg">
                    Pay your balance securely through our patient payment portal.
                    You&apos;ll need your account number from your billing
                    statement.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary group-hover:bg-blue-50 transition-colors">
                    Go to Payment Portal
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>

            {/* Pay at Time of Service */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <ClockIcon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pay at Time of Service
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  We accept credit card, debit card, ACH, HSA, and FSA payments
                  in person at our facility. Our front desk staff will assist
                  you with payment before or after your procedure.
                </p>
              </div>
            </div>

            {/* Pay by Phone */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <DevicePhoneMobileIcon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Pay by Phone
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  Call our billing office to make a payment over the phone or to
                  discuss your balance and payment options.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="tel:386-248-8206"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    (386) 248-8206
                  </a>
                  <a
                    href="tel:386-248-8205"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    (386) 248-8205
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Accepted Methods */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span>We accept:</span>
            <span className="font-medium text-slate-500">Visa</span>
            <span className="font-medium text-slate-500">Mastercard</span>
            <span className="font-medium text-slate-500">Amex</span>
            <span className="font-medium text-slate-500">Discover</span>
            <span className="font-medium text-slate-500">ACH</span>
            <span className="font-medium text-slate-500">HSA</span>
            <span className="font-medium text-slate-500">FSA</span>
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="slate" />

      {/* Features */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCardIcon,
                title: "Flexible Payment",
                description:
                  "Pay with credit card, debit card, ACH, HSA, or FSA — online, in person, or by phone.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Secure & PCI Compliant",
                description:
                  "Your payment information is protected with encryption and tokenization.",
              },
              {
                icon: ChatBubbleLeftRightIcon,
                title: "Billing Support",
                description:
                  "Our dedicated billing team is here to help with any questions about your balance.",
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

          {/* Help Notice */}
          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
              <BanknotesIcon className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p className="font-semibold text-amber-900 text-sm">
                Can&apos;t find your account number?
              </p>
              <p className="text-sm text-amber-800 mt-1">
                Your account number is on your billing statement. If you
                don&apos;t have it, call{" "}
                <a href="tel:386-248-8206" className="font-medium underline">
                  (386) 248-8206
                </a>{" "}
                and our billing team will help you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
