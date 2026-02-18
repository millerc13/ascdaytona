import { Metadata } from "next";
import Link from "next/link";
import {
  LockClosedIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ScaleIcon,
  PhoneIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Privacy Policy | Atlantic Surgery Center",
  description:
    "Learn how Atlantic Surgery Center uses, discloses, and protects your medical information under HIPAA.",
};

const yourRights = [
  "In most cases, you have the right to inspect and receive a copy of the medical information used to make decisions about your care. We may charge you a fee for copies of your medical information.",
  "You have the right to amend the medical information we have regarding you, if you believe that information is incorrect or incomplete. You also have the right to receive a list of the instances in which your medical information was disclosed for reasons other than treatment, payment, or our health care operations.",
  "You have the right to request that we communicate with you regarding your medical information in a certain confidential manner, for example by mail sent to you directly. You have the right to opt out of any fundraising communications. You have the right to restrict certain disclosures of your medical information to a health plan if you pay for a service in full and out of pocket.",
  "You have the right to request in writing that we not use or disclose your medical information for treatment, payment, or our health care operations purposes, except when specifically authorized by you, required by law, or in an emergency. We will consider your written request, but are not required to accept such a request.",
  "You have the right to be notified of a breach of unsecured medical information in the event you are affected. To exercise any of your rights regarding your medical information, please contact the Business Office Director or Administrator.",
];

const contacts = [
  {
    name: "Administrator",
    org: "Atlantic Surgery Center",
    address: "541 Health Blvd., Daytona Beach, FL 32114",
    phone: "386-239-0021",
  },
  {
    name: "AAAHC",
    org: "Accreditation Association for Ambulatory Health Care",
    address: "5250 Old Orchard Road #200, Skokie, IL 60077",
    phone: "847-853-6060",
  },
  {
    name: "State of Florida HHS",
    org: "",
    address: "",
    phone: "888-633-4227",
  },
  {
    name: "Elder Abuse Hotline",
    org: "",
    address: "",
    phone: "800-963-5337",
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl">
              This policy describes how medical information about you may be used
              and disclosed, and how you can get access to this information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Uses & Disclosure */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <LockClosedIcon className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Uses & Disclosure of Health Information
              </h2>
            </div>
            <div className="px-6 sm:px-8 py-6 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                We are committed to protecting the privacy of the information
                you provide to us regarding your health...
              </p>
              <p>
                We may, under certain circumstances, use or disclose your
                medical information without your authorization...
              </p>
              <p>
                We reserve the right to change the terms of this notice at any
                time and to make the new notice provisions effective for all
                medical information that we maintain...
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="h-5 w-5 text-teal-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Your Rights Regarding Your Medical Information
              </h2>
            </div>
            <div className="px-6 sm:px-8 py-6 space-y-3">
              {yourRights.map((right, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-slate-50 rounded-xl p-4"
                >
                  <span className="flex items-center justify-center h-6 w-6 rounded-lg bg-teal-100 text-teal-700 text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">{right}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Duties */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                <ScaleIcon className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Our Duties</h2>
            </div>
            <div className="px-6 sm:px-8 py-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                We are required by law to maintain the privacy of your medical
                information...
              </p>
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                <DocumentTextIcon className="h-5 w-5 text-amber-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Complaints</h2>
            </div>
            <div className="px-6 sm:px-8 py-6">
              <p className="text-sm text-slate-600 mb-6">
                If you believe your rights have been violated, you may contact
                any of the entities listed below:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.name}
                    className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:shadow-sm transition-shadow"
                  >
                    <p className="font-semibold text-slate-900 text-sm">{contact.name}</p>
                    {contact.org && (
                      <p className="text-xs text-slate-500 mt-0.5">{contact.org}</p>
                    )}
                    {contact.address && (
                      <p className="text-xs text-slate-500 mt-1">{contact.address}</p>
                    )}
                    <a
                      href={`tel:${contact.phone}`}
                      className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline mt-3"
                    >
                      <PhoneIcon className="h-3.5 w-3.5" />
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
