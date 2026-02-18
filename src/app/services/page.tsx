import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import {
  CurrencyDollarIcon,
  DocumentTextIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Services & Pricing | Atlantic Surgery Center",
  description:
    "View our procedures, service bundles, and pricing at Atlantic Surgery Center in Daytona Beach, FL.",
};

const pricingData = [
  { procedure: "Biopsy - Bladder", stLow: "$3,799", stHigh: "$7,461", ascLow: "$1,995", ascHigh: "$2,594" },
  { procedure: "Biopsy - Colon", stLow: "$1,154", stHigh: "$3,756", ascLow: "$575", ascHigh: "$748" },
  { procedure: "Biopsy - Kidney", stLow: "$4,197", stHigh: "$7,231", ascLow: "$1,050", ascHigh: "$1,365" },
  { procedure: "Biopsy - Prostate", stLow: "$831", stHigh: "$1,285", ascLow: "$778", ascHigh: "$1,011" },
  { procedure: "Bladder Exam - Cystoscopy", stLow: "$1,021", stHigh: "$1,117", ascLow: "$575", ascHigh: "$748" },
  { procedure: "Cataract Removal with Lens Implant", stLow: "$2,088", stHigh: "$4,128", ascLow: "$1,894", ascHigh: "$2,462" },
  { procedure: "Colonoscopy - Preventive Screening", stLow: "$1,049", stHigh: "$3,236", ascLow: "$575", ascHigh: "$748" },
  { procedure: "Colonoscopy with Polyp Removal", stLow: "$1,193", stHigh: "$3,632", ascLow: "$575", ascHigh: "$748" },
  { procedure: "Enlarged Prostate Surgery - TURP", stLow: "$1,971", stHigh: "$3,301", ascLow: "$1,975", ascHigh: "$2,568" },
  { procedure: "ERCP", stLow: "$7,706", stHigh: "$11,059", ascLow: "$1,975", ascHigh: "$2,568" },
  { procedure: "Glaucoma - Eye Shunt", stLow: "N/A", stHigh: "N/A", ascLow: "$1,975", ascHigh: "$2,568" },
  { procedure: "Kidney Stone", stLow: "$139", stHigh: "$238", ascLow: "$575", ascHigh: "$748" },
  { procedure: "Kidney Stone Disintegration - Lithotripsy", stLow: "$7,576", stHigh: "$12,718", ascLow: "$3,995", ascHigh: "$5,194" },
  { procedure: "Upper Endoscopy with Biopsy", stLow: "$1,068", stHigh: "$4,198", ascLow: "$530", ascHigh: "$689" },
  { procedure: "Upper Endoscopy with Dilation", stLow: "$1,290", stHigh: "$4,191", ascLow: "$825", ascHigh: "$1,073" },
  { procedure: "Vasectomy - Male Sterilization", stLow: "$565", stHigh: "$792", ascLow: "$575", ascHigh: "$748" },
];

const infoCards = [
  {
    title: "Estimate of Costs",
    description:
      "We provide a personalized estimate specific to your anticipated procedure prior to surgery. Updated estimates available within 7 business days.",
    icon: CurrencyDollarIcon,
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "Itemized Statements",
    description:
      "An itemized statement is provided upon request within 7 business days after patient discharge or 7 business days after request.",
    icon: DocumentTextIcon,
    iconColor: "bg-teal-100 text-teal-600",
  },
  {
    title: "Financial Assistance",
    description:
      "Financial Assistance and Charity Care is available based on individual needs. Contact our billing office for more information.",
    icon: HeartIcon,
    iconColor: "bg-amber-100 text-amber-600",
  },
];

export default function ServicesPage() {
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
                Services & Pricing
              </h1>
              <p className="mt-4 text-lg text-blue-200 max-w-2xl">
                Transparent pricing for our surgical procedures and service bundles.
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

      {/* Info Cards */}
      <section className="relative -mt-14 sm:-mt-16 z-10 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-lg border border-slate-100 border-b-[3px] border-b-accent p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`h-9 w-9 rounded-lg ${card.iconColor} flex items-center justify-center shrink-0`}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="slate" />

      {/* Pricing Table Section */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="px-6 sm:px-8 py-6 bg-gradient-to-r from-primary to-primary-light">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Care Bundles, Definitions & Prices
              </h2>
              <p className="text-blue-200 text-sm mt-1">
                Prices updated 3/18/2021 — estimates based on averages; actual
                costs may vary.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Procedure
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-slate-400" colSpan={2}>
                      State of Florida AVG
                    </th>
                    <th className="px-4 py-4 text-center text-sm font-semibold text-primary" colSpan={2}>
                      <span className="inline-flex items-center gap-1">
                        <StarIcon className="h-4 w-4" />
                        Our Pricing
                      </span>
                    </th>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-2"></th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-slate-400">Low</th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-slate-400">High</th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-primary/60">Low</th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-primary/60">High</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr
                      key={row.procedure}
                      className={`border-b border-slate-100 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      } hover:bg-blue-50/50 transition-colors`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {row.procedure}
                      </td>
                      <td className="px-4 py-4 text-sm text-center text-slate-400">
                        {row.stLow}
                      </td>
                      <td className="px-4 py-4 text-sm text-center text-slate-400">
                        {row.stHigh}
                      </td>
                      <td className="px-4 py-4 text-sm text-center font-semibold text-primary">
                        {row.ascLow}
                      </td>
                      <td className="px-4 py-4 text-sm text-center font-semibold text-primary">
                        {row.ascHigh}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 sm:px-8 py-4 bg-amber-50 border-t border-amber-200 flex items-start gap-3">
              <InformationCircleIcon className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Our prices are estimates based on an average and may not be your
                actual cost. Costs may vary depending on insurance deductibles,
                health status, and other factors.
              </p>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5 text-accent" />
                Other Charges
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Services may be provided by other health care providers that may separately bill you.
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  For more details, see the{" "}
                  <Link href="/insurance" className="text-primary font-medium hover:underline">
                    Insurance & Billing page
                  </Link>.
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  State Pricing Comparison
                </h3>
                <p className="text-sm text-slate-600">
                  Compare our pricing with other Florida facilities through the AHCA pricing website.
                </p>
              </div>
              <a
                href="https://price.healthfinder.fl.gov/#!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              >
                Visit AHCA Pricing Website
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}
