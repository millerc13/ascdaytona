import { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  HeartIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Patient Information | Atlantic Surgery Center",
  description:
    "Access patient resources including what to expect, patient rights, privacy policy, and pre-admission information at Atlantic Surgery Center.",
};

const resources = [
  {
    title: "What to Expect During Your Visit",
    description:
      "A complete guide to preparing for surgery, what happens on the day of your procedure, and what to expect during recovery.",
    href: "/patient-info/what-to-expect",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Patient Rights & Responsibilities",
    description:
      "Understand your rights as a patient and what responsibilities are expected of you.",
    href: "/patient-info/patient-rights",
    icon: ShieldCheckIcon,
  },
  {
    title: "Pre-Admission Assessment",
    description:
      "Download and complete the pre-admission assessment form before your surgery.",
    href: "/patient-info/pre-admission",
    icon: DocumentTextIcon,
  },
  {
    title: "Advance Directives",
    description:
      "Learn about our policy regarding advance directives and living wills.",
    href: "/patient-info/advance-directives",
    icon: HeartIcon,
  },
  {
    title: "Privacy Policy (HIPAA)",
    description:
      "How we use, disclose, and protect your medical information.",
    href: "/patient-info/privacy-policy",
    icon: LockClosedIcon,
  },
];

export default function PatientInfoPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Patient Information
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            Everything you need to know before, during, and after your visit to
            Atlantic Surgery Center.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <resource.icon className="h-10 w-10 text-accent mb-4 group-hover:text-primary transition-colors" />
                <h2 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                  {resource.title}
                </h2>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {resource.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
