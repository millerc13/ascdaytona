import { Metadata } from "next";
import Link from "next/link";
import {
  HeartIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  PhoneIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Advance Directives | Atlantic Surgery Center",
  description:
    "Learn about Atlantic Surgery Center's policy on advance directives and living wills.",
};

export default function AdvanceDirectivesPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/patient-info"
            className="inline-flex items-center gap-1.5 text-blue-200 text-sm hover:text-white transition-colors mb-4"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            Back to Patient Info
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Advance Directives
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            Understanding our policy on advance directives and living wills.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Critical Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <ExclamationTriangleIcon className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg mb-2">
                  Important Policy Notice
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  It is the policy of Atlantic Surgery Center to transfer any
                  patient requiring resuscitation to the hospital. The hospital
                  can determine when to implement the advance directive/living
                  will once notified.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Details */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                <HeartIcon className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Our Policy
              </h2>
            </div>
            <div className="px-6 sm:px-8 py-6 space-y-5 text-slate-600 leading-relaxed text-sm">
              <p>
                In an ambulatory care setting, where we expect to provide less
                invasive care to patients who are not acutely ill, admission to
                the center indicates the patient will tolerate the procedure in
                the ambulatory setting without difficulty.
              </p>
              <p>
                If a patient should suffer cardiac or respiratory arrest or any
                life threatening condition, the patient will be transferred to a
                more acute level of care, that is, the hospital emergency room.
              </p>
              <p>
                All patients are asked if they have an advance directive and this
                is documented in the medical record. Information regarding
                advance directives is available for any patient requesting
                additional information.
              </p>
              <p>
                It is the policy of the Center to transfer any patient requiring
                resuscitation to the hospital. The hospital can determine when to
                implement the advance directive/living will once the patient or
                others notify them of the advance directive/living will.
              </p>
            </div>
          </div>

          {/* Key Point */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start gap-4">
            <InformationCircleIcon className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">
                Please note:
              </span>{" "}
              Patients who disagree with this policy must address the issue with
              the attending physician prior to signing the form acknowledging an
              understanding of the policy regarding advance directives/living
              wills.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-primary rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white" />
            </div>
            <div className="relative">
            <h3 className="text-lg font-semibold mb-2">Have Questions?</h3>
            <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
              If you have questions about advance directives or our policy,
              please do not hesitate to contact us.
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
