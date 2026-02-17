import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Atlantic Surgery Center",
  description:
    "Learn about Atlantic Surgery Center in Daytona Beach, FL — an AAAHC accredited ambulatory surgery center serving the community since 1994.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About Atlantic Surgery Center
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            A tradition of excellence in outpatient surgical care since 1994.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  At Atlantic Surgery Center our mission is to provide the most
                  advanced surgical services that go above and beyond ordinary.
                  Our Team of Board certified and Award Winning Surgeons, along
                  with our knowledgeable staff, offer comprehensive surgical
                  care using cutting edge technology and research-based
                  procedures.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Patient-Centered Care
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Delivering patient centered care is a mission at the head of
                  Atlantic Surgery Center. Our physicians focus on delivering
                  the highest quality of care through innovative treatments. We
                  are committed to ensuring that your experience with us is
                  relaxed and worry-free; from pre-op through recovery. Atlantic
                  Surgery Center&apos;s individualized approach to your treatment
                  options enables us to help you make the best decisions for
                  your particular situation. Our staff is committed to providing
                  you with a satisfying patient experience by addressing your
                  individual needs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Our History
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Ownership of Atlantic Surgery Center is divided into three
                  primary specialties: urology, ophthalmology, and
                  gastroenterology. It is currently owned by 11 physicians:
                  eight urologists, two ophthalmologists, and one
                  gastroenterologist. The surgery center has five operating rooms
                  and five procedure rooms, serving 7,461 patients in 2018.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  The surgery center was the first surgery center in the greater
                  Daytona Beach area to break ground, opening in December 1994.
                  It was the 17th ambulatory surgery center in the state of
                  Florida.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Centers of Excellence
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  The Center holds several &ldquo;Centers of Excellence&rdquo;,
                  the most recent in UroLift technology. The physicians and
                  staff of Atlantic Surgery Center take great pride in serving
                  the greater area of Daytona Beach and Volusia County.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/header-1.png"
                  alt="Atlantic Surgery Center"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>

              {/* Stats */}
              <div className="bg-slate-50 rounded-xl p-8 space-y-6">
                <h3 className="font-semibold text-lg text-slate-900">
                  By the Numbers
                </h3>
                {[
                  { label: "Year Established", value: "1994" },
                  { label: "Operating Rooms", value: "5" },
                  { label: "Procedure Rooms", value: "5" },
                  { label: "Patients Served (2018)", value: "7,461" },
                  { label: "Physician Owners", value: "11" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center border-b border-slate-200 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-slate-600 text-sm">{stat.label}</span>
                    <span className="font-bold text-primary text-lg">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Accreditation */}
              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <Image
                  src="/aaahc-new.png"
                  alt="AAAHC Accredited"
                  width={240}
                  height={120}
                  className="mx-auto mb-4 rounded w-full h-auto"
                />
                <p className="text-sm text-slate-600 font-medium">
                  AAAHC Accredited Facility
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  State-licensed, Medicare-certified ambulatory surgery center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
