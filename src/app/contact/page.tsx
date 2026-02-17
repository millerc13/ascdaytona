import Image from "next/image";
import { Metadata } from "next";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Contact Us | Atlantic Surgery Center",
  description:
    "Contact Atlantic Surgery Center in Daytona Beach, FL. Call us at (386) 239-0021 or visit us at 541 Health Blvd.",
};

const contactMethods = [
  {
    icon: MapPinIcon,
    title: "Visit Us",
    details: ["541 Health Blvd", "Daytona Beach, FL 32114"],
    action: null,
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    details: ["Main: (386) 239-0021", "Billing: (386) 248-8206"],
    action: { label: "Call Now", href: "tel:386-239-0021" },
  },
  {
    icon: ClockIcon,
    title: "Office Hours",
    details: ["Monday – Friday", "8:00 AM – 5:00 PM"],
    action: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/4 w-72 h-72 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            We&apos;re here to help. Reach out to us with any questions about
            your upcoming procedure.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-8 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-xl shadow-lg p-5 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <method.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {method.title}
                  </h3>
                </div>
                {method.details.map((detail, i) => (
                  <p key={i} className="text-sm text-slate-600">
                    {detail}
                  </p>
                ))}
                {method.action && (
                  <a
                    href={method.action.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {method.action.label}
                    <PhoneIcon className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="white" to="slate" variant="curve" />

      {/* Map & Details */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Map */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[300px] sm:h-[400px] lg:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.5!2d-81.0476!3d29.2108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6db7a8b8b8b8b%3A0x0!2s541+Health+Blvd%2C+Daytona+Beach%2C+FL+32114!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atlantic Surgery Center Location"
              ></iframe>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <BuildingOffice2Icon className="h-4.5 w-4.5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    Getting Here
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Atlantic Surgery Center is located on Health Blvd in Daytona
                  Beach, FL, conveniently located near Halifax Health Medical
                  Center. Free parking is available on site.
                </p>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-accent" />
                  <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white" />
                </div>
                <h3 className="relative font-semibold text-lg mb-4">
                  All Phone Numbers
                </h3>
                <div className="relative space-y-3">
                  {[
                    { label: "Main Office", number: "(386) 239-0021", tel: "386-239-0021" },
                    { label: "Billing Dept.", number: "(386) 248-8206", tel: "386-248-8206" },
                    { label: "Billing (Alt)", number: "(386) 248-8205", tel: "386-248-8205" },
                  ].map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3 text-sm hover:bg-white/20 transition-colors"
                    >
                      <span className="text-blue-200">{phone.label}</span>
                      <span className="font-medium">{phone.number}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Placeholder: Building exterior */}
              <div className="rounded-xl overflow-hidden bg-slate-200 h-48 shadow-md">
                <Image
                  src="/header-1.png"
                  alt="Atlantic Surgery Center Building"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
