import Image from "next/image";
import Link from "next/link";
import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EyeIcon,
  ArrowRightIcon,
  StarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

{/* Custom medical specialty icons matching heroicons style */}
function KidneyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5c0-3.5 2-6 4.5-6 1.5 0 2.5.8 3 2 .5-1.2 1.5-2 3-2 2.5 0 4.5 2.5 4.5 6s-1.5 5-3 6.5c-.8.8-1.5 2-1.5 3v.5h-6v-.5c0-1-.7-2.2-1.5-3C5.9 15.5 4.5 14 4.5 10.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.5c-.6.5-1 1.5-1 2.5 0 1.2.5 2 1.2 2.5M15 8.5c.6.5 1 1.5 1 2.5 0 1.2-.5 2-1.2 2.5" />
    </svg>
  );
}

function StomachIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M4 18C4.67 19.85 6.07 22 12 22C14.36 22 17.07 21.93 19 20C20 19 22 17 22 11S20 4 18 4C16.62 4 15 4 14 6V6.03A1.82 1.82 0 0 1 12.13 6.95C11 6.81 11 6.37 11 6V2H9V6A2.92 2.92 0 0 0 12 9C13 9 13 10.78 13 12C13 13.89 12.5 15.26 11 16C8.69 17.15 6.39 17 5.61 15.47A1.5 1.5 0 0 0 3.14 14.87A3.67 3.67 0 0 0 2 18V22H4Z" />
    </svg>
  );
}

function EarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </svg>
  );
}

const services = [
  {
    name: "Urology",
    description:
      "Comprehensive urological procedures including cystoscopy, lithotripsy, and prostate treatments.",
    icon: KidneyIcon,
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Ophthalmology",
    description:
      "Advanced eye surgeries including cataract removal with lens implant and glaucoma procedures.",
    icon: EyeIcon,
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Gastroenterology",
    description:
      "Colonoscopy, upper endoscopy, and ERCP procedures with expert care.",
    icon: StomachIcon,
    color: "bg-amber-50 text-amber-600",
  },
  {
    name: "ENT",
    description:
      "Ear, nose, and throat procedures performed by experienced specialists.",
    icon: EarIcon,
    color: "bg-teal-50 text-teal-600",
  },
];

const quickLinks = [
  {
    title: "What to Expect",
    description: "Prepare for your visit with our step-by-step guide.",
    href: "/patient-info/what-to-expect",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Our Physicians",
    description: "Meet our team of board-certified surgeons.",
    href: "/physicians",
    icon: UserGroupIcon,
  },
  {
    title: "Insurance & Billing",
    description: "View accepted insurance providers and billing info.",
    href: "/insurance",
    icon: ShieldCheckIcon,
  },
  {
    title: "Pay Online",
    description: "Make a secure payment toward your balance.",
    href: "/payment",
    icon: CurrencyDollarIcon,
  },
];

const stats = [
  { value: "30+", label: "Years of Service", borderColor: "border-blue-500" },
  { value: "5", label: "Operating Rooms", borderColor: "border-amber-500" },
  { value: "7,400+", label: "Patients Annually", borderColor: "border-rose-500" },
  { value: "11", label: "Physician Owners", borderColor: "border-teal-500" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-30"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <svg
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent-light"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
                AAAHC Accredited Facility
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Welcome to
              <br />
              <span className="text-accent-light">
                Atlantic Surgery Center
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-blue-100 leading-relaxed max-w-xl">
              Providing the most advanced outpatient surgical services in a
              safe, comfortable, and welcoming environment in Daytona Beach,
              Florida since 1994.
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/patient-info/what-to-expect"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-light transition-colors"
              >
                Prepare for Your Visit
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
              <a
                href="tel:386-239-0021"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                (386) 239-0021
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative -mt-6 sm:-mt-16 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="bg-white rounded-xl shadow-lg border border-slate-100 p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <link.icon className="h-4.5 w-4.5 text-accent group-hover:text-accent-light transition-colors" />
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <CheckBadgeIcon className="h-4 w-4" />
                Since 1994
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Your Care is Our{" "}
                <span className="text-primary">Top Priority</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                At Atlantic Surgery Center, we are dedicated to providing
                quality care in a friendly atmosphere. We are a
                state-licensed, Medicare-certified ambulatory surgery center
                that has been proudly serving the Daytona Beach community since
                December 1994.
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Our facility features 5 operating rooms and 5 procedure rooms,
                staffed by board-certified surgeons specializing in urology,
                ophthalmology, gastroenterology, and ENT.
              </p>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className={`border-l-2 ${stat.borderColor} pl-4`}>
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group"
                >
                  Learn more about us
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div>
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
                <Image
                  src="/stock-photo-1.jpeg"
                  alt="Atlantic Surgery Center — patient-centered care"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <StarIcon className="h-4 w-4" />
              Specialties
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Expert Surgical Care
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Board-certified surgeons providing expert care across multiple
              surgical specialties.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`h-10 w-10 rounded-lg ${service.color} flex items-center justify-center shrink-0`}
                  >
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary-light transition-colors"
            >
              View All Services & Pricing
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready for Your Procedure?
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Contact your physician&apos;s office to schedule your procedure at
            Atlantic Surgery Center, or call us directly for questions about
            your upcoming visit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:386-239-0021"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-blue-50 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call (386) 239-0021
            </a>
            <Link
              href="/patient-info/what-to-expect"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-light transition-colors"
            >
              Patient Information
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
