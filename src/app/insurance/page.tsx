import { Metadata } from "next";
import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";

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
  "Health First Health Plans Commercial & Hospital Care Advantage",
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
  },
  {
    item: "Anesthesia Fees",
    description: "From Anesthesia Group providing anesthesia services",
  },
  {
    item: "Pathology Fees",
    description: "If any biopsies or specimens were taken",
  },
  {
    item: "Radiology Fees",
    description: "If any images were taken during the procedure",
  },
  {
    item: "Drug Fees",
    description: "If any drugs administered are not covered by your insurance plan",
  },
];

export default function InsurancePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Insurance & Billing
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            We work with a wide range of insurance providers. Contact us to
            verify your coverage.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Important Notes */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h2 className="font-semibold text-slate-900 mb-3">
                  Important Billing Information
                </h2>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li>
                    <strong>A.</strong> You may pay less for this procedure or
                    service at another facility or in another health care
                    setting.
                  </li>
                  <li>
                    <strong>B.</strong> Services may be provided in this health
                    care facility by the facility as well as by other health
                    care providers that may separately bill you.
                  </li>
                  <li>
                    <strong>C.</strong> You should contact your insurer or HMO
                    regarding your cost-sharing responsibilities.
                  </li>
                  <li>
                    <strong>D.</strong> Patients may request a more personalized
                    estimate of charges and other information.
                  </li>
                </ul>
              </div>

              {/* Separate Billing */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Separate Billing
                </h2>
                <p className="text-slate-600 mb-4">
                  You will be separately billed for the following services:
                </p>
                <div className="space-y-3">
                  {separateBilling.map((bill) => (
                    <div
                      key={bill.item}
                      className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">
                          {bill.item}
                        </p>
                        <p className="text-sm text-slate-500">
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
                  If your insurance is not listed, please call the facility to
                  verify participation in your plan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {insuranceProviders.map((provider) => (
                    <div
                      key={provider}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-slate-700">{provider}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-8 text-white sticky top-28">
                <PhoneIcon className="h-8 w-8 text-accent-light mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Questions About Billing?
                </h3>
                <p className="text-blue-200 text-sm mb-6">
                  Contact us to inquire about insurance information or payment
                  related questions.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:386-239-0021"
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 text-sm hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    (386) 239-0021 — Main
                  </a>
                  <a
                    href="tel:386-248-8206"
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 text-sm hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    (386) 248-8206 — Billing
                  </a>
                  <a
                    href="tel:386-248-8205"
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 text-sm hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    (386) 248-8205 — Billing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
