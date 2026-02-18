import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheckIcon,
  HandRaisedIcon,
  PhoneIcon,
  BuildingOffice2Icon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Patient Rights & Responsibilities | Atlantic Surgery Center",
  description:
    "Understand your rights and responsibilities as a patient at Atlantic Surgery Center.",
};

const rights = [
  "Treatment without regard to race, sex, age, national origin or cultural, economic, educational or religious background or the source of payment of care.",
  "Receive considerate and respectful care. Be free from all forms of abuse and harassment.",
  "Knowledge of the name of the surgeon who has primary responsibility for coordinating care and the names and professional relationships of other practitioners.",
  "Receive information from the surgeon about illness, course of treatment, and prospects for recovery in terms you can understand.",
  "Receive the necessary information about any proposed treatment or procedure in order to give informed consent or to refuse this course of treatment.",
  "Participate actively in decision-making regarding medical care, to the extent permitted by law.",
  "Refuse treatment.",
  "Full consideration of privacy concerning medical care. Case discussion, consultation, examination and treatment are confidential and shall be conducted discreetly.",
  "Confidential treatment of all communications and records pertaining to care.",
  "Reasonable responses to any reasonable request for services.",
  "Reasonable continuity of care and to know in advance the time and location of appointments, as well as the practitioner providing the care.",
  "Be advised if the surgeon proposes to engage in or perform human experimentation affecting care or treatment. The patient has the right to refuse to participate.",
  "Be informed by the surgeon, or designee, of continuing health care requirements.",
  "Examine and receive an explanation of the bill regardless of the source of payment.",
  "Have all patients' rights explained to the person who has legal responsibility to make decisions regarding medical care on behalf of the patient.",
  "Express any grievances or suggestions verbally or in writing.",
  "All patients receiving anesthesia services or conscious sedation will be asked about advance directives. It is clearly explained that Atlantic Surgery Center does not honor advance directives as an ambulatory surgery center, and all efforts will be made to resuscitate for transfer to an acute care facility.",
  "Change their provider if other qualified providers are available.",
];

const responsibilities = [
  "Provide accurate and complete information about matters relating to health history for effective medical treatment.",
  "Report whether you clearly comprehend a contemplated course of action and what is expected of you.",
  "Cooperate with all Surgery Center personnel and ask questions if directions and/or procedures are not clearly understood.",
  "Be considerate of other patients and Surgery Center personnel and observe the no-smoking policy. Be respectful of the property of other persons and the Surgery Center.",
  "Help the physicians, nurses, and allied medical personnel in their efforts by following their instructions and medical orders.",
  "Assume the financial responsibility of paying for all services rendered whether through third-party payers or being personally responsible for payment.",
  "Not take any drugs which have not been prescribed by the attending physician and administered by the Surgery Center.",
];

const contacts = [
  {
    name: "Administrator",
    org: "Atlantic Surgery Center",
    address: "541 Health Blvd. Daytona Beach, FL 32114",
    phone: "386-239-0021",
  },
  {
    name: "AAAHC",
    org: "Accreditation Association for Ambulatory Health Care",
    address: "5250 Old Orchard Road #200, Skokie, IL 60077",
    phone: "847-853-6060",
  },
  {
    name: "State Department of Health",
    org: "Florida Department of Health",
    address: "2585 Merchants Row Boulevard, Tallahassee, FL 32199",
    phone: "850-245-4444",
  },
  {
    name: "Medicare",
    org: "",
    address: "",
    phone: "800-633-4227",
  },
  {
    name: "Office of Civil Rights",
    org: "U.S. Department of Health and Human Services",
    address: "200 Independence Ave SW, Room 509F, HHH Building, Washington, D.C. 20201",
    phone: "800-368-1019",
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

export default function PatientRightsPage() {
  return (
    <>
      <section className="bg-primary relative overflow-hidden">        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="min-h-[260px] sm:min-h-[300px] flex items-center justify-between gap-12 py-12">
          <Link
            href="/patient-info"
            className="inline-flex items-center gap-1.5 text-blue-200 text-sm hover:text-white transition-colors mb-4"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            Back to Patient Info
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Patient Rights & Responsibilities
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            We are committed to ensuring every patient is treated with dignity
            and respect.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Rights */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your Rights
                </h2>
                <p className="text-sm text-slate-500">
                  As a patient, you have the right to:
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {rights.map((right, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-4 hover:shadow-sm transition-shadow"
                >
                  <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-accent/10 text-accent text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {right}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center shrink-0">
                <HandRaisedIcon className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Your Responsibilities
                </h2>
                <p className="text-sm text-slate-500">
                  As a patient, you are responsible for:
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-4 hover:shadow-sm transition-shadow"
                >
                  <span className="flex items-center justify-center h-7 w-7 rounded-lg bg-teal-50 text-teal-700 text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Complaints & Contacts */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <BuildingOffice2Icon className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Questions, Complaints, or Grievances
                </h2>
              </div>
            </div>
            <p className="text-slate-600 mb-8 sm:pl-15">
              If you have any questions regarding your rights or
              responsibilities, complaints or grievances, you may speak to the
              Administrator or management team. The following contact information
              is provided for your convenience:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <div
                  key={contact.name}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-sm transition-shadow"
                >
                  <p className="font-semibold text-slate-900 text-sm">
                    {contact.name}
                  </p>
                  {contact.org && (
                    <p className="text-xs text-slate-500 mt-0.5">
                      {contact.org}
                    </p>
                  )}
                  {contact.address && (
                    <p className="text-xs text-slate-500 mt-1">
                      {contact.address}
                    </p>
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
      </section>
    </>
  );
}
