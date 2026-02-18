import { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  HeartIcon,
  CalendarDaysIcon,
  SunIcon,
  ArrowPathIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "What to Expect | Atlantic Surgery Center",
  description:
    "Prepare for your visit to Atlantic Surgery Center — what to do before, during, and after your surgery.",
};

const steps = [
  {
    number: 1,
    title: "What Should You Do BEFORE Surgery?",
    icon: ClipboardDocumentCheckIcon,
    color: "bg-blue-100 text-blue-600",
    ringColor: "ring-blue-200",
    items: [
      "If you take blood thinners (i.e. Warfarin/Coumadin, Plavix/Clopidogrel, Xarelto, Pradaxa, Aggrenox, Ticlid/Ticlopidine, Aspirin, etc.), please notify your surgeon so the decision can be made if these medications need to be stopped. Most will need 7 to 10 days prior to the surgery date.",
      "Please have any required lab work or EKG completed 1 week prior to your surgery.",
      "Arrange for an adult to drive you home and someone to check on you after your surgery.",
      "For your own safety and protection, you will not be allowed to drive after surgery when any sedation, nerve block or general anesthetic has been administered.",
      "Please make sure you have a copy of insurance card(s) and a photo ID. Our staff will need to verify and make a copy of the card(s) when you check-in on the day of your surgery.",
      "Follow the EAT or DRINK limitations. Your physician or a surgery center staff member will provide you with instructions. Please follow these instructions including nothing to eat, including gum, mints or cough drops. For your safety, your surgery may be cancelled if you do not follow the required food and drink limitations.",
      "Notify your doctor if you develop any signs of illness or infection prior to the day of surgery.",
      "Your physician or a staff member will provide all patients taking any medications instructions for the medication requirements. Please bring a list of all medications with dosages you are taking.",
    ],
  },
  {
    number: 2,
    title: "What to Expect Before Your Surgery",
    icon: HeartIcon,
    color: "bg-teal-100 text-teal-600",
    ringColor: "ring-teal-200",
    items: [
      "A pre-admission staff member will contact you prior to your visit. This will ensure that your pre-operative instructions and tests are complete and your financial matters are addressed before surgery.",
      "We understand the anxiety family and friends will have while you are having your procedure. We will make every effort to keep them informed of your progress and when they will be able to re-join you after the procedure.",
      "We realize that time is a precious commodity. We are constantly measuring and monitoring our performance to ensure we do not waste your valuable time. The staff will keep you and your family informed of any delays.",
      "We will work with your insurance company to expedite your claim. Please remember that your physician, anesthesia and lab fees are separate from the surgery center fees.",
      "Atlantic Surgery Center continuously learns from and shares with other surgery centers, so that every day we can provide excellent care to you.",
    ],
  },
  {
    number: 3,
    title: "What to Do the Day of Your Surgery",
    icon: CalendarDaysIcon,
    color: "bg-purple-100 text-purple-600",
    ringColor: "ring-purple-200",
    items: [
      "Plan to arrive promptly at the scheduled time. Your prompt arrival will allow adequate time for all necessary admission procedures. Please remember to bring your insurance card.",
      "Leave jewelry and valuables at home. Even though we provide a safe environment, it is in your best interest to leave your valuables at home.",
      "Wear clothing that is loose fitting and can easily be removed and stored. Please avoid wearing nail polish and cosmetics. Leave contact lenses at home and bring your eyeglasses case with you.",
      "If you are diabetic, please check your blood glucose upon rising. Further instructions may be given for insulin dependent diabetics.",
      "Please use any inhalers or breathing medications on the morning of your surgery and bring your inhaler with you.",
      "Please take medications for blood pressure, thyroid, seizure or reflux with a small amount of water when you first wake up.",
      "Do not smoke. Smoking may interfere with the healing process or recovery from anesthetics and frequently produces nausea during the recovery period.",
      "Notify your physician if you think you may be pregnant. Anesthesia and medications may be harmful to your developing baby.",
    ],
  },
  {
    number: 4,
    title: "What to Expect the Day of Your Surgery",
    icon: SunIcon,
    color: "bg-amber-100 text-amber-600",
    ringColor: "ring-amber-200",
    items: [
      "Our admission process is very quick because we have obtained most of your information at your preadmission phone call and your physician scheduling process.",
      "A preoperative nurse will escort you into the pre-operative area. Our nurse will wait for you to change your clothes and store them until you are ready to go home.",
      "A nurse will conduct a preoperative assessment that will include taking your vital signs. The nurse will also start an IV for your procedure.",
      "Your anesthesia provider will speak with you in the pre-operative area and explain the procedure and review all pre-operative information.",
      "If you are having surgery on a left or right side of your body, your surgeon will put his mark on the correct site before you are moved into surgery.",
    ],
  },
  {
    number: 5,
    title: "After Your Surgery",
    icon: ArrowPathIcon,
    color: "bg-rose-100 text-rose-600",
    ringColor: "ring-rose-200",
    items: [
      "After your surgery is completed, you will be moved to the recovery room where our nurses will monitor your recovery progress.",
      "Your surgeon will inform your family/friends of your status and the outcome of the procedure.",
      "Your recovery care nurse will provide you and your family member post-operative instructions regarding diet, rest, and medications.",
      "Follow your post-operative instructions given to you at the surgery center as well as instructions from your physician.",
      "For your own safety, do not drink alcoholic beverages for 24 hours after receiving a general anesthetic or while taking oral pain medications.",
      "It is normal to feel drowsy after anesthesia. We recommend that you avoid driving, operating equipment or signing important documents for 24 hours after your surgery.",
      "We will telephone you after you have gone home to make sure you are doing well.",
      "Call 911, your physician, or your emergency response number in case of an emergency.",
    ],
  },
];

export default function WhatToExpectPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[260px] sm:min-h-[300px] flex flex-col gap-4 py-12">
            <Link
              href="/patient-info"
              className="inline-flex items-center gap-1.5 text-blue-200 text-sm hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Back to Patient Info
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What to Expect During Your Visit
            </h1>
            <p className="mt-2 text-lg text-blue-200 max-w-2xl">
              A comprehensive guide to help you prepare for your procedure.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Warning */}
      <section className="relative -mt-6 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3 shadow-lg">
            <ExclamationTriangleIcon className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 text-sm">
                Important Reminders
              </p>
              <p className="text-sm text-amber-800 mt-1">
                Follow all eating/drinking restrictions. Arrange a ride home.
                Bring your insurance card and photo ID. Your surgery may be
                cancelled if pre-operative instructions are not followed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
            >
              {/* Step Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center gap-4">
                <div
                  className={`h-12 w-12 rounded-xl ${step.color} flex items-center justify-center shrink-0 ring-4 ${step.ringColor}`}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Step {step.number} of 5
                  </p>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    {step.title}
                  </h2>
                </div>
              </div>

              {/* Step Items */}
              <div className="px-6 sm:px-8 py-6">
                <ul className="space-y-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="h-6 w-6 rounded-full bg-slate-100 text-slate-500 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Comfort Note */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-8 text-center">
            <HeartIcon className="h-10 w-10 text-accent mx-auto mb-4" />
            <p className="text-slate-700 font-medium max-w-lg mx-auto">
              We understand that surgery can be an anxious experience for you and
              your family. Our staff will provide you a warm and caring setting
              to ease some of your anxiety about the procedure.
            </p>
          </div>

          {/* Thank You */}
          <div className="bg-primary rounded-2xl p-8 sm:p-10 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white" />
            </div>
            <div className="relative">
              <h3 className="text-xl font-semibold mb-3">
                Thank You for Trusting Us with Your Care
              </h3>
              <p className="text-blue-200 text-sm max-w-lg mx-auto mb-6">
                We want you to have an excellent experience at Atlantic Surgery
                Center, and a speedy recovery. Please speak up if you have
                questions or concerns about your care.
              </p>
              <a
                href="tel:386-239-0021"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-6 py-3 text-sm font-medium"
              >
                <PhoneIcon className="h-4 w-4 text-accent-light" />
                (386) 239-0021 — Mon–Fri, 8 AM – 5 PM
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
