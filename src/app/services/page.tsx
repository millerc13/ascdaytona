import { Metadata } from "next";
import Link from "next/link";

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Services & Pricing
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            Transparent pricing for our surgical procedures and service bundles.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-semibold text-slate-900 mb-2">
                Estimate of Costs
              </h3>
              <p className="text-sm text-slate-600">
                We provide a personalized estimate specific to your anticipated
                procedure prior to surgery. Updated estimates are available upon
                request within 7 business days.
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <h3 className="font-semibold text-slate-900 mb-2">
                Itemized Statements
              </h3>
              <p className="text-sm text-slate-600">
                An itemized statement is provided upon request within 7 business
                days after patient discharge or 7 business days after request.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-semibold text-slate-900 mb-2">
                Financial Assistance
              </h3>
              <p className="text-sm text-slate-600">
                Financial Assistance and Charity Care is available based on
                individual needs. Contact our billing office for more
                information.
              </p>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">
                Care Bundles, Definitions & Prices
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Prices updated 3/18/2021 — estimates based on averages; actual
                costs may vary.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Procedure
                    </th>
                    <th
                      className="px-4 py-4 text-center text-sm font-semibold text-slate-500"
                      colSpan={2}
                    >
                      State of Florida AVG
                    </th>
                    <th
                      className="px-4 py-4 text-center text-sm font-semibold text-primary"
                      colSpan={2}
                    >
                      Atlantic Surgery Center AVG
                    </th>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-2"></th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-slate-400">
                      Low
                    </th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-slate-400">
                      High
                    </th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-primary/60">
                      Low
                    </th>
                    <th className="px-4 py-2 text-center text-xs font-medium text-primary/60">
                      High
                    </th>
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
                      <td className="px-4 py-4 text-sm text-center text-slate-500">
                        {row.stLow}
                      </td>
                      <td className="px-4 py-4 text-sm text-center text-slate-500">
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
            <div className="px-6 py-4 bg-amber-50 border-t border-amber-200 text-sm text-amber-800">
              Our prices are estimates based on an average and may not be your
              actual cost. Your costs may be higher or lower for a number of
              reasons, including insurance deductibles, how sick you are, or
              other factors.
            </div>
          </div>

          {/* Other Charges */}
          <div className="mt-8 bg-slate-50 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Other Charges
            </h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                Services may be provided in this health care facility by the
                facility as well as by other health care providers that may
                separately bill you.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">&#8226;</span>
                For more billing details and our Surgical Affiliates, see the{" "}
                <Link
                  href="/insurance"
                  className="text-primary font-medium hover:underline"
                >
                  Insurance & Billing page
                </Link>
                .
              </li>
            </ul>
          </div>

          {/* External Link */}
          <div className="mt-8 text-center">
            <a
              href="https://price.healthfinder.fl.gov/#!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View State of Florida Health Care Administration (AHCA) Pricing
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
