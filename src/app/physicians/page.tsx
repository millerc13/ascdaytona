import Image from "next/image";
import { Metadata } from "next";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  BeakerIcon,
  EyeIcon,
  HeartIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Our Physicians | Atlantic Surgery Center",
  description:
    "Meet the board-certified physicians at Atlantic Surgery Center specializing in urology, ophthalmology, gastroenterology, and ENT.",
};

interface Physician {
  name: string;
  href?: string;
  photo?: string;
}

const specialties = [
  {
    name: "Urology",
    description: "Comprehensive urological procedures and treatments",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    placeholderBg: "bg-blue-50",
    icon: SparklesIcon,
    physicians: [
      { name: "Anthony L. Cantwell, MD, FACS", href: "https://www.healthgrades.com/physician/dr-anthony-cantwell-2947d" },
      { name: "Jeffrey A. Dann, MD, MBA", href: "https://www.healthgrades.com/physician/dr-jeffrey-dann-2kg2f" },
      { name: "Evan Fynes, MD", href: "https://www.advancedurologyinstitute.com/provider/evan-fynes-md/", photo: "/physicians/fynes.jpg" },
      { name: "Michael S. Grable, MD, FACS", href: "https://health.usnews.com/doctors/michael-grable-348110", photo: "/physicians/grable.jpg" },
      { name: "Samuel Lawindy, MD", href: "https://www.advancedurologyinstitute.com/provider/samuel-lawindy-md/", photo: "/physicians/lawindy.jpg" },
      { name: "Matthew M. Merrell, MD, FACS", href: "https://www.advancedurologyinstitute.com/provider/matthew-m-merrell-md-facs/", photo: "/physicians/merrell.jpg" },
      { name: "John Pearson, MD" },
      { name: "Terrence C. Regan, MD", href: "https://www.advancedurologyinstitute.com/provider/dr-terrence-regan/", photo: "/physicians/regan.jpg" },
      { name: "Arash Rafiei, MD", href: "https://www.advancedurologyinstitute.com/provider/arash-rafiei-md/", photo: "/physicians/rafiei.jpg" },
      { name: "Stephen G. Weiss II, MD", href: "https://www.advancedurologyinstitute.com/provider/stephen-g-weiss-ii-md/", photo: "/physicians/weiss.jpg" },
    ] as Physician[],
  },
  {
    name: "ENT",
    description: "Ear, nose, and throat surgical specialists",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-100",
    placeholderBg: "bg-teal-50",
    icon: HeartIcon,
    physicians: [
      { name: "Joseph Mirante, MD", href: "https://www.coastalearnosethroat.com/ent-staff", photo: "/physicians/mirante.webp" },
      { name: "Michael A. Munier, MD", href: "https://www.coastalearnosethroat.com/ent-staff", photo: "/physicians/munier.webp" },
    ] as Physician[],
  },
  {
    name: "Gastroenterology",
    description: "Digestive system procedures and diagnostics",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
    placeholderBg: "bg-amber-50",
    icon: BeakerIcon,
    physicians: [
      { name: "Antonio DeCarli, MD", href: "https://gastrohealth.com/physicians/antonio-j-decarli-md", photo: "/physicians/decarli.jpg" },
    ] as Physician[],
  },
  {
    name: "Ophthalmology",
    description: "Advanced eye surgery and vision care",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
    placeholderBg: "bg-purple-50",
    icon: EyeIcon,
    physicians: [
      { name: "Margaret DiGaetano, MD", href: "https://digaetanocataract.com/doctors/", photo: "/physicians/digaetano.jpg" },
      { name: "Annemarie N. Etienne, MD, MPH", href: "https://www.healthgrades.com/physician/dr-annemarie-etienne-hester-295fk", photo: "/physicians/etienne.jpg" },
      { name: "Orest M. Krajnyk, MD", href: "https://theprecisioneye.com/about-us-dr-orest-krajnyk/", photo: "/physicians/krajnyk.jpg" },
      { name: "Itza Acevedo, MD", href: "https://www.healthgrades.com/physician/dr-itza-ojeda-xylwxw8", photo: "/physicians/acevedo.jpg" },
    ] as Physician[],
  },
];

function PhysicianCard({
  physician,
  specialty,
}: {
  physician: Physician;
  specialty: (typeof specialties)[number];
}) {
  const inner = (
    <>
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100">
        {physician.photo ? (
          <Image
            src={physician.photo}
            alt={physician.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div
            className={`h-full w-full ${specialty.placeholderBg} flex items-center justify-center`}
          >
            <UserCircleIcon
              className={`h-20 w-20 ${specialty.iconColor} opacity-40`}
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="font-semibold text-slate-900 text-sm leading-tight">
          {physician.name}
        </p>
        <div className="flex items-center justify-between mt-1.5">
          <p className="text-xs text-slate-500">{specialty.name}</p>
          {physician.href && (
            <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 text-slate-300 group-hover:text-primary transition-colors" />
          )}
        </div>
      </div>
    </>
  );

  if (physician.href) {
    return (
      <a
        href={physician.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
      {inner}
    </div>
  );
}

export default function PhysiciansPage() {
  return (
    <>
          {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent" />
          <div className="absolute -bottom-16 left-1/4 w-72 h-72 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="min-h-[260px] sm:min-h-[300px] flex items-center justify-between gap-12 py-12">
          <div className="flex items-center justify-between gap-12">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Our Physicians
              </h1>
              <p className="mt-4 text-lg text-blue-200 max-w-2xl">
                A tradition of excellence — our physicians are recognized locally
                for their medical expertise and have held key positions in the
                medical community at both the state and national level.
              </p>
            </div>

            <div className="hidden lg:block shrink-0 opacity-15">
              <Image
                src="/asc-logo-transparent.png"
                alt=""
                width={240}
                height={100}
                className="h-28 w-auto brightness-0 invert"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Team Photo (Matches Patient Info Overlap Style) */}
      <section className="relative -mt-6 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96 border border-slate-100">
            <Image
              src="/team-photo.jpeg"
              alt="Atlantic Surgery Center Medical Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>


      <SectionDivider from="white" to="slate" />

      {/* Physician Directory */}
      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {specialties.map((specialty) => (
              <div key={specialty.name}>
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-3 mb-8 border-b border-slate-200 pb-6">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`h-11 w-11 rounded-xl ${specialty.iconBg} flex items-center justify-center`}
                    >
                      <specialty.icon
                        className={`h-5 w-5 ${specialty.iconColor}`}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {specialty.name}
                      </h2>
                      <p className="text-slate-500 text-sm">
                        {specialty.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-medium border ${specialty.color}`}
                  >
                    {specialty.physicians.length} physician
                    {specialty.physicians.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Physician Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {specialty.physicians.map((physician) => (
                    <PhysicianCard
                      key={physician.name}
                      physician={physician}
                      specialty={specialty}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
