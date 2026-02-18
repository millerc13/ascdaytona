import { Metadata } from "next";
import Link from "next/link";
import {
  DocumentArrowDownIcon,
  ClipboardDocumentListIcon,
  PhoneIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Pre-Admission Assessment | Atlantic Surgery Center",
  description:
    "Download and complete the pre-admission assessment form before your surgery at Atlantic Surgery Center.",
};

const checklist = [
  "Your complete medical history and current medications list",
  "Any allergies to medications, food, or latex",
  "Previous surgical experiences and any complications",
  "Current health conditions (diabetes, heart disease, etc.)",
  "Insurance information and photo ID",
];

export default function PreAdmissionPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[260px] sm:min-h-[300px] flex flex-col gap-6 py-12">
            <Link
              href="/patient-info"
              className="inline-flex items-center gap-1.5 text-blue-200 text-sm hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Back to Patient Info
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Pre-Admission Assessment
            </h1>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl">
              Complete this assessment prior to your scheduled surgery.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Download Card */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6 sm:p-10 lg:p-14 text-center shadow-sm">
            <div className="h-20 w-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <DocumentArrowDownIcon className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Pre-Admission Assessment Form
            </h2>
            <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
              Please download and complete the pre-admission assessment form and
              bring it with you on the day of your surgery.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-800 inline-block max-w-md">
              The downloadable form will be available soon. Please contact our
              office in the meantime.
            </div>
          </div>

          {/* What to Prepare */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                <ClipboardDocumentListIcon className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                What to Prepare
              </h3>
            </div>
            <div className="px-6 sm:px-8 py-6">
              <p className="text-sm text-slate-500 mb-5">
                Before completing the form, please gather the following
                information:
              </p>
              <ul className="space-y-3">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white" />
            </div>
            <div className="relative flex flex-col items-center gap-4">
              <h3 className="text-lg font-semibold mb-2">
                Questions About the Form?
              </h3>
              <p className="text-blue-200 text-sm mb-6 max-w-md text-center">
                Our pre-admission team is happy to help you complete the
                assessment or answer any questions you may have.
              </p>
              <a
                href="tel:386-239-0021"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-6 py-3 text-sm font-medium"
              >
                <PhoneIcon className="h-4 w-4 text-accent-light" />
                Call (386) 239-0021
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
