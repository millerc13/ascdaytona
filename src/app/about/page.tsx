import Image from "next/image";
import { Metadata } from "next";
import {
  BuildingOffice2Icon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "About Us | Atlantic Surgery Center",
  description:
    "Learn about Atlantic Surgery Center in Daytona Beach, FL — an AAAHC accredited ambulatory surgery center serving the community since 1994.",
};

const stats = [
  { label: "Year Established", value: "1994", icon: BuildingOffice2Icon },
  { label: "Operating Rooms", value: "5", icon: StarIcon },
  { label: "Procedure Rooms", value: "5", icon: HeartIcon },
  { label: "Patients Served (2018)", value: "7,461", icon: UserGroupIcon },
  { label: "Physician Owners", value: "11", icon: ShieldCheckIcon },
];

const values = [
  {
    title: "Patient-Centered Care",
    description:
      "We are committed to ensuring your experience is relaxed and worry-free, from pre-op through recovery. Our individualized approach enables us to help you make the best decisions for your particular situation.",
    icon: HeartIcon,
  },
  {
    title: "Board-Certified Excellence",
    description:
      "Our team of board-certified and award-winning surgeons, along with our knowledgeable staff, offer comprehensive surgical care using cutting-edge technology and research-based procedures.",
    icon: TrophyIcon,
  },
  {
    title: "Accredited & Certified",
    description:
      "We are a state-licensed, Medicare-certified, AAAHC-accredited ambulatory surgery center holding several Centers of Excellence, including UroLift technology.",
    icon: ShieldCheckIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About Atlantic Surgery Center
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            A tradition of excellence in outpatient surgical care since 1994.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Image */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <BuildingOffice2Icon className="h-4 w-4" />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Pioneering Outpatient Surgery in Daytona Beach
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                At Atlantic Surgery Center our mission is to provide the most
                advanced surgical services that go above and beyond ordinary.
                Our Team of Board certified and Award Winning Surgeons, along
                with our knowledgeable staff, offer comprehensive surgical care
                using cutting edge technology and research-based procedures.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The surgery center was the first in the greater Daytona Beach
                area to break ground, opening in December 1994. It was the 17th
                ambulatory surgery center in the state of Florida.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ownership is divided into three primary specialties: urology,
                ophthalmology, and gastroenterology. It is currently owned by 11
                physicians with five operating rooms and five procedure rooms.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 bg-slate-200">
                <Image
                  src="/header-1.png"
                  alt="Atlantic Surgery Center"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              {/* Placeholder overlay for AI image */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-lg p-4 sm:p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrophyIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">30+ Years</p>
                    <p className="text-sm text-slate-500">Serving Daytona Beach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="slate" />

      {/* Values */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our commitment to quality, safety, and patient satisfaction drives
              everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="slate" to="white" variant="curve" />

      {/* Placeholder: Team Photo Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative">
                  <Image
                    src="/about-1.jpeg"
                    alt="Atlantic Surgery Center team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md mt-8 relative">
                  <Image
                    src="/about-2.jpeg"
                    alt="Atlantic Surgery Center facility"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <UserGroupIcon className="h-4 w-4" />
                Our Team
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Dedicated Professionals Committed to Your Care
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Delivering patient centered care is at the heart of Atlantic
                Surgery Center. Our physicians focus on delivering the highest
                quality of care through innovative treatments.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our staff is committed to providing you with a satisfying
                patient experience by addressing your individual needs. The
                physicians and staff take great pride in serving the greater
                area of Daytona Beach and Volusia County.
              </p>
              {/* Accreditation */}
              <div className="flex items-center gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <Image
                  src="/aaahc-new.png"
                  alt="AAAHC Accredited"
                  width={100}
                  height={50}
                  className="h-12 w-auto rounded"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    AAAHC Accredited
                  </p>
                  <p className="text-xs text-slate-500">
                    State-licensed, Medicare-certified facility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
