import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advance Directives | Atlantic Surgery Center",
  description:
    "Learn about Atlantic Surgery Center's policy on advance directives and living wills.",
};

export default function AdvanceDirectivesPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Advance Directives
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="font-semibold text-slate-900 mb-2">
              Important Notice
            </h2>
            <p className="text-sm text-slate-700">
              It is the policy of Atlantic Surgery Center to transfer any
              patient requiring resuscitation to the hospital. The hospital can
              determine when to implement the advance directive/living will once
              notified.
            </p>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              In an ambulatory care setting, where we expect to provide less
              invasive care to patients who are not acutely ill, admission to the
              center indicates the patient will tolerate the procedure in the
              ambulatory setting without difficulty.
            </p>
            <p>
              If a patient should suffer cardiac or respiratory arrest or any
              life threatening condition, the patient will be transferred to a
              more acute level of care, that is, the hospital emergency room.
            </p>
            <p>
              All patients are asked if they have an advance directive and this
              is documented in the medical record. Information regarding advance
              directives is available for any patient requesting additional
              information.
            </p>
            <p>
              It is the policy of the Center to transfer any patient requiring
              resuscitation to the hospital. The hospital can determine when to
              implement the advance directive/living will once the patient or
              others notify them of the advance directive/living will.
            </p>
            <p className="font-medium text-slate-900">
              Patients who disagree with this policy must address the issue with
              the attending physician prior to signing the form acknowledging an
              understanding of the policy regarding advance directives/living
              wills.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
