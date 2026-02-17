import { Metadata } from "next";
import {
  CheckCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import {
  CurrencyDollarIcon,
  BeakerIcon,
  FilmIcon,
  CpuChipIcon,
  HeartIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Insurance & Billing | Atlantic Surgery Center",
  description:
    "View accepted insurance providers and billing information at Atlantic Surgery Center in Daytona Beach, FL.",
};

const insuranceProviders = [
  "Aetna",
  "Aetna Medicare",
  "BCBS 1 Plan",
  "BCBS Federal Program",
  "BCBS HMO and PPO",
  "BCBS Medicare Advantage PPO Plan",
  "Cigna",
  "Columbia Insurance Group WC",
  "Florida Health Care Plan HMO",
  "Health First Health Plans",
  "Health First Commercial & Hospital Care Advantage",
  "Health Net Federal (VA)",
  "Humana Claims Office",
  "Humana PPO",
  "Medicare",
  "Medicare Replacement Plans",
  "Multiplan",
  "Optimum Healthcare & Freedom Health Care",
  "PHCS",
  "UMR",
  "Golden Rule",
  "United Health Care Commercial",
  "United Health Care AARP Medicare Complete",
  "Veterans Affairs (VA)",
];

const separateBilling = [
  {
    item: "Physician Fees",
    description: "From physician performing surgery/procedure",
    icon: HeartIcon,
  },
  {
    item: "Anesthesia Fees",
    description: "From Anesthesia Group providing anesthesia services",
    icon: BeakerIcon,
  },
  {
    item: "Pathology Fees",
    description: "If any biopsies or specimens were taken",
    icon: CpuChipIcon,
  },
  {
    item: "Radiology Fees",
    description: "If any images were taken during the procedure",
    icon: FilmIcon,
  },
  {
    item: "Drug Fees",
    description: "If drugs administered are not covered by your insurance",
    icon: ShieldCheckIcon,
  },
];

export default function InsurancePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Insurance & Billing
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            We work with a wide range of insurance providers. Contact us to
            verify your coverage.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Important Notes */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <InformationCircleIcon className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-semibold text-slate-900 mb-3">
                      Important Billing Information
                    </h2>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>You may pay less for this procedure at another facility.</li>
                      <li>Other health care providers may separately bill you for services provided here.</li>
                      <li>Contact your insurer or HMO regarding cost-sharing responsibilities.</li>
                      <li>You may request a personalized estimate of charges.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Separate Billing */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Separate Billing
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  You will be separately billed for the following services:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {separateBilling.map((bill) => (
                    <div
                      key={bill.item}
                      className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-5 hover:shadow-sm transition-shadow"
                    >
                      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <bill.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">
                          {bill.item}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {bill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insurance Providers */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Accepted Insurance Providers
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  If your insurance is not listed, please call to verify
                  participation in your plan.
                </p>
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {insuranceProviders.map((provider) => (
                      <div
                        key={provider}
                        className="flex items-center gap-2 text-sm py-1"
                      >
                        <CheckCircleIcon className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-slate-700">{provider}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary rounded-2xl p-8 text-white lg:sticky lg:top-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white" />
                </div>
                <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <CurrencyDollarIcon className="h-6 w-6 text-accent-light" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Billing Questions?
                </h3>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  Our billing team is available to help with insurance
                  verification, payment plans, and any billing inquiries.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:386-239-0021"
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3.5 text-sm hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5 text-accent-light" />
                    <div>
                      <p className="font-medium">(386) 239-0021</p>
                      <p className="text-blue-200 text-xs">Main Office</p>
                    </div>
                  </a>
                  <a
                    href="tel:386-248-8206"
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3.5 text-sm hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5 text-accent-light" />
                    <div>
                      <p className="font-medium">(386) 248-8206</p>
                      <p className="text-blue-200 text-xs">Billing Dept.</p>
                    </div>
                  </a>
                  <a
                    href="tel:386-248-8205"
                    className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3.5 text-sm hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5 text-accent-light" />
                    <div>
                      <p className="font-medium">(386) 248-8205</p>
                      <p className="text-blue-200 text-xs">Billing (Alt)</p>
                    </div>
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
