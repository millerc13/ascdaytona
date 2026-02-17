import { Metadata } from "next";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "Our Physicians | Atlantic Surgery Center",
  description:
    "Meet the board-certified physicians at Atlantic Surgery Center specializing in urology, ophthalmology, gastroenterology, and ENT.",
};

const specialties = [
  {
    name: "Urology",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    iconColor: "text-blue-400",
    physicians: [
      "Anthony L. Cantwell, MD, FACS",
      "Jeffrey A. Dann, MD, MBA",
      "Martin K. Dineen, MD, FACS",
      "Evan Fynes, MD",
      "Michael S. Grable, MD, FACS",
      "Samuel Lawindy, MD",
      "Matthew M. Merrell, MD, FACS",
      "John Pearson, MD",
      "Terrence C. Regan, MD",
      "Arash Rafiei, MD",
      "Stephen G. Weiss II, MD",
    ],
  },
  {
    name: "ENT",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    iconColor: "text-teal-400",
    physicians: ["Joseph Mirante, MD", "Michael A. Munier, MD"],
  },
  {
    name: "Gastroenterology",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    iconColor: "text-amber-400",
    physicians: ["Antonio DeCarli, MD"],
  },
  {
    name: "Ophthalmology",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    iconColor: "text-purple-400",
    physicians: [
      "Margaret DiGaetano, MD",
      "Annemarie N. Etienne, MD, MPH",
      "Orest M. Krajnyk, MD",
      "Itza Acevedo, MD",
    ],
  },
];

export default function PhysiciansPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Physicians
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            A tradition of excellence — our physicians are recognized locally
            for their medical expertise and have held key positions in the
            medical community at both the state and national level.
          </p>
        </div>
      </section>

      {/* Physician Directory */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {specialties.map((specialty) => (
              <div key={specialty.name}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {specialty.name}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${specialty.color}`}
                  >
                    {specialty.physicians.length} physician
                    {specialty.physicians.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {specialty.physicians.map((physician) => (
                    <div
                      key={physician}
                      className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all"
                    >
                      <UserCircleIcon
                        className={`h-12 w-12 ${specialty.iconColor} shrink-0`}
                      />
                      <div>
                        <p className="font-semibold text-slate-900">
                          {physician}
                        </p>
                        <p className="text-sm text-slate-500">
                          {specialty.name}
                        </p>
                      </div>
                    </div>
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
