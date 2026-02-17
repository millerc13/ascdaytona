import { Metadata } from "next";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Pre-Admission Assessment | Atlantic Surgery Center",
  description:
    "Download and complete the pre-admission assessment form before your surgery at Atlantic Surgery Center.",
};

export default function PreAdmissionPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Pre-Admission Assessment
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            Complete this assessment prior to your scheduled surgery.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-slate-50 rounded-xl p-12 border border-slate-200">
            <DocumentArrowDownIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Pre-Admission Assessment Form
            </h2>
            <p className="text-slate-600 mb-8">
              Please download and complete the pre-admission assessment form and
              bring it with you on the day of your surgery.
            </p>
            <p className="text-sm text-slate-500 mb-6">
              If you have any questions about the form, please contact us at{" "}
              <a
                href="tel:386-239-0021"
                className="text-primary font-medium hover:underline"
              >
                (386) 239-0021
              </a>
              .
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              The downloadable form will be available soon. Please contact our
              office in the meantime.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
