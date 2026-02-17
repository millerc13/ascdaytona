import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Expect | Atlantic Surgery Center",
  description:
    "Prepare for your visit to Atlantic Surgery Center — what to do before, during, and after your surgery.",
};

export default function WhatToExpectPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What to Expect During Your Visit
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            A comprehensive guide to help you prepare for your procedure.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Before Surgery */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary font-bold text-lg">
                1
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                What Should You Do BEFORE Surgery?
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600">
              {[
                "If you take blood thinners (i.e. Warfarin/Coumadin, Plavix/Clopidogrel, Xarelto, Pradaxa, Aggrenox, Ticlid/Ticlopidine, Aspirin, etc.), please notify your surgeon so the decision can be made if these medications need to be stopped. Most will need 7 to 10 days prior to the surgery date.",
                "Please have any required lab work or EKG completed 1 week prior to your surgery.",
                "Arrange for an adult to drive you home and someone to check on you after your surgery.",
                "For your own safety and protection, you will not be allowed to drive after surgery when any sedation, nerve block or general anesthetic has been administered.",
                "Please make sure you have a copy of insurance card(s) and a photo ID. Our staff will need to verify and make a copy of the card(s) when you check-in on the day of your surgery.",
                "Follow the EAT or DRINK limitations. Your physician or a surgery center staff member will provide you with instructions. Please follow these instructions including nothing to eat, including gum, mints or cough drops. For your safety, your surgery may be cancelled if you do not follow the required food and drink limitations.",
                "Notify your doctor if you develop any signs of illness or infection prior to the day of surgery.",
                "Your physician or a staff member will provide all patients taking any medications instructions for the medication requirements. Please bring a list of all medications with dosages you are taking.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Expect Before */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary font-bold text-lg">
                2
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                What to Expect Before Your Surgery
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600">
              {[
                "A pre-admission staff member will contact you prior to your visit. This will ensure that your pre-operative instructions and tests are complete and your financial matters are addressed before surgery.",
                "We understand the anxiety family and friends will have while you are having your procedure. We will make every effort to keep them informed of your progress and when they will be able to re-join you after the procedure.",
                "We realize that time is a precious commodity. We are constantly measuring and monitoring our performance to ensure we do not waste your valuable time. The staff will keep you and your family informed of any delays.",
                "We will work with your insurance company to expedite your claim. Please remember that your physician, anesthesia and lab fees are separate from the surgery center fees.",
                "Atlantic Surgery Center continuously learns from and shares with other surgery centers, so that every day we can provide excellent care to you.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-blue-50 rounded-lg p-4 text-sm text-slate-700 italic">
              We understand that surgery can be an anxious experience for you
              and your family. Our staff will provide you a warm and caring
              setting to ease some of your anxiety about the procedure.
            </div>
          </div>

          {/* Day Of Surgery */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary font-bold text-lg">
                3
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                What to Do the Day of Your Surgery
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600">
              {[
                "Plan to arrive promptly at the scheduled time. Your prompt arrival will allow adequate time for all necessary admission procedures. Please remember to bring your insurance card.",
                "Leave jewelry and valuables at home. Even though we provide a safe environment, it is in your best interest to leave your valuables at home.",
                "Wear clothing that is loose fitting and can easily be removed and stored. Please avoid wearing nail polish and cosmetics. Leave contact lenses at home and bring your eyeglasses case with you.",
                "If you are diabetic, please check your blood glucose upon rising. Further instructions may be given for insulin dependent diabetics.",
                "Please use any inhalers or breathing medications on the morning of your surgery and bring your inhaler with you.",
                "Please take medications for blood pressure, thyroid, seizure or reflux with a small amount of water when you first wake up.",
                "Do not smoke. Smoking may interfere with the healing process or recovery from anesthetics and frequently produces nausea during the recovery period.",
                "Notify your physician if you think you may be pregnant. Anesthesia and medications may be harmful to your developing baby.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* During Surgery */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary font-bold text-lg">
                4
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                What to Expect the Day of Your Surgery
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600">
              {[
                "Our admission process is very quick because we have obtained most of your information at your preadmission phone call and your physician scheduling process.",
                "A preoperative nurse will escort you into the pre-operative area. Our nurse will wait for you to change your clothes and store them until you are ready to go home.",
                "A nurse will conduct a preoperative assessment that will include taking your vital signs. The nurse will also start an IV for your procedure.",
                "Your anesthesia provider will speak with you in the pre-operative area and explain the procedure and review all pre-operative information.",
                "If you are having surgery on a left or right side of your body, your surgeon will put his mark on the correct site before you are moved into surgery.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Surgery */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-primary font-bold text-lg">
                5
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                After Your Surgery
              </h2>
            </div>
            <ul className="space-y-4 text-slate-600">
              {[
                "After your surgery is completed, you will be moved to the recovery room where our nurses will monitor your recovery progress.",
                "Your surgeon will inform your family/friends of your status and the outcome of the procedure.",
                "Your recovery care nurse will provide you and your family member post-operative instructions regarding diet, rest, and medications.",
                "Follow your post-operative instructions given to you at the surgery center as well as instructions from your physician.",
                "For your own safety, do not drink alcoholic beverages for 24 hours after receiving a general anesthetic or while taking oral pain medications.",
                "It is normal to feel drowsy after anesthesia. We recommend that you avoid driving, operating equipment or signing important documents for 24 hours after your surgery.",
                "We will telephone you after you have gone home to make sure you are doing well.",
                "Call 911, your physician, or your emergency response number in case of an emergency.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Thank You */}
          <div className="bg-accent/10 rounded-xl p-8 text-center">
            <p className="text-slate-700 font-medium">
              THANK YOU for allowing us to care for you during your surgery
              need. We want you to have an excellent experience at Atlantic
              Surgery Center, and a speedy recovery. Please speak up if you have
              questions or concerns about your care.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Contact us at{" "}
              <a
                href="tel:386-239-0021"
                className="text-primary font-medium hover:underline"
              >
                (386) 239-0021
              </a>{" "}
              between 8:00 a.m. &ndash; 5:00 p.m.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
