import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  HeartIcon,
  LockClosedIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { SectionDivider } from "@/components/SectionDivider";

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
    color: "bg-blue-50 border-blue-100",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "Patient Rights & Responsibilities",
    description:
      "Understand your rights as a patient and what responsibilities are expected of you.",
    href: "/patient-info/patient-rights",
    icon: ShieldCheckIcon,
    color: "bg-teal-50 border-teal-100",
    iconColor: "bg-teal-100 text-teal-600",
  },
  {
    title: "Pre-Admission Assessment",
    description:
      "Download and complete the pre-admission assessment form before your surgery.",
    href: "/patient-info/pre-admission",
    icon: DocumentTextIcon,
    color: "bg-purple-50 border-purple-100",
    iconColor: "bg-purple-100 text-purple-600",
  },
  {
    title: "Advance Directives",
    description:
      "Learn about our policy regarding advance directives and living wills.",
    href: "/patient-info/advance-directives",
    icon: HeartIcon,
    color: "bg-rose-50 border-rose-100",
    iconColor: "bg-rose-100 text-rose-600",
  },
  {
    title: "Privacy Policy (HIPAA)",
    description:
      "How we use, disclose, and protect your medical information.",
    href: "/patient-info/privacy-policy",
    icon: LockClosedIcon,
    color: "bg-amber-50 border-amber-100",
    iconColor: "bg-amber-100 text-amber-600",
  },
];

export default function PatientInfoPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/4 w-72 h-72 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Patient Information
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            Everything you need to know before, during, and after your visit to
            Atlantic Surgery Center.
          </p>
        </div>
      </section>

      {/* Quick Help Banner */}
      <section className="relative -mt-6 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <PhoneIcon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-slate-700">
                <span className="font-semibold">Have questions?</span>{" "}
                <span className="text-slate-500">
                  Call us at{" "}
                  <a
                    href="tel:386-239-0021"
                    className="text-primary font-medium hover:underline"
                  >
                    (386) 239-0021
                  </a>{" "}
                  between 8:00 AM – 5:00 PM
                </span>
              </p>
            </div>
            <a
              href="tel:386-239-0021"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-primary-light transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className={`rounded-xl p-6 border ${resource.color} hover:shadow-lg transition-all group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`h-10 w-10 rounded-lg ${resource.iconColor} flex items-center justify-center shrink-0`}
                  >
                    <resource.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {resource.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="slate" />

      {/* Placeholder: Welcoming staff image */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 h-64 sm:h-80">
            {/* Placeholder: AI image of welcoming medical staff / reception */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 right-1/4 w-72 h-72 rounded-full bg-accent" />
                <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white" />
              </div>
              <div className="px-8 sm:px-12 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Your Comfort is Our Priority
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  We understand that surgery can be an anxious experience. Our
                  staff will provide you a warm and caring setting to ease your
                  concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
