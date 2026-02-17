import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Atlantic Surgery Center",
  description:
    "Learn how Atlantic Surgery Center uses, discloses, and protects your medical information under HIPAA.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            This policy describes how medical information about you may be used
            and disclosed, and how you can get access to this information.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Uses & Disclosure of Health Information
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed">
                We are committed to protecting the privacy of the information
                you provide to us regarding your health. Information regarding
                your health will be recorded and maintained in a record kept
                on-site or off-site in a 24 hour secure facility. Information
                contained in that record may be used in your treatment (for
                example, copies of your medical information may be sent to the
                physician who referred you to your surgeon), obtaining payment
                for that treatment (for example, submitting a claim for payment
                to your insurance company), and for administrative purposes (for
                example, quality assurance and business planning purposes).
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                We may, under certain circumstances, use or disclose your
                medical information without your authorization. Subject to
                certain requirements, we may use or disclose your medical
                information for: public health purposes; health oversight
                activities; the reporting of suspected abuse or neglect;
                workers&apos; compensation purposes; and for judicial and
                administrative proceedings. We may disclose your medical
                information when otherwise required by law, such as for law
                enforcement purposes under certain circumstances. Other uses of
                your medical information will be made only with your written
                authorization, such as uses and disclosures of your medical
                information for marketing purposes, and disclosures that
                constitute a sale of your medical information. You may revoke a
                written authorization for the use or disclosure of your medical
                information at any time.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                We reserve the right to change the terms of this notice at any
                time and to make the new notice provisions effective for all
                medical information that we maintain. We will post a copy of the
                current notice in our waiting room, which will include the
                effective date of the notice. You may also request a copy of the
                notice at any time by contacting the Business Office Director or
                Administrator.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Your Rights Regarding Your Medical Information
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                In most cases, you have the right to inspect and receive a copy
                of the medical information used to make decisions about your
                care. We may charge you a fee for copies of your medical
                information.
              </p>
              <p>
                You have the right to amend the medical information we have
                regarding you, if you believe that information is incorrect or
                incomplete. You also have the right to receive a list of the
                instances in which your medical information was disclosed for
                reasons other than treatment, payment, or our health care
                operations.
              </p>
              <p>
                You have the right to request that we communicate with you
                regarding your medical information in a certain confidential
                manner, for example by mail sent to you directly. You have the
                right to opt out of any fundraising communications. You have the
                right to restrict certain disclosures of your medical
                information to a health plan if you pay for a service in full
                and out of pocket.
              </p>
              <p>
                You have the right to request in writing that we not use or
                disclose your medical information for treatment, payment, or our
                health care operations purposes, except when specifically
                authorized by you, required by law, or in an emergency. We will
                consider your written request, but are not required to accept
                such a request.
              </p>
              <p>
                You have the right to be notified of a breach of unsecured
                medical information in the event you are affected. To exercise
                any of your rights regarding your medical information, please
                contact the Business Office Director or Administrator.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Our Duties
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We are required by law to maintain the privacy of your medical
              information and to provide you with notice of our legal duties and
              privacy practices with respect to your medical information. We are
              required to abide by the terms of the notice of our privacy policy
              currently in effect.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Complaints
            </h2>
            <p className="text-slate-600 mb-6">
              If you believe your rights have been violated, you may contact any
              of the entities listed below:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Administrator",
                  org: "Atlantic Surgery Center",
                  address: "541 Health Blvd., Daytona Beach, FL 32114",
                  phone: "386-239-0021",
                },
                {
                  name: "AAAHC",
                  org: "",
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
              ].map((contact) => (
                <div
                  key={contact.name}
                  className="bg-slate-50 rounded-lg p-5 border border-slate-200"
                >
                  <p className="font-semibold text-slate-900 text-sm">
                    {contact.name}
                  </p>
                  {contact.org && (
                    <p className="text-xs text-slate-500">{contact.org}</p>
                  )}
                  {contact.address && (
                    <p className="text-xs text-slate-500 mt-1">
                      {contact.address}
                    </p>
                  )}
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm text-primary font-medium hover:underline mt-2 block"
                  >
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
