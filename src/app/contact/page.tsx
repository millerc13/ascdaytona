import { Metadata } from "next";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact Us | Atlantic Surgery Center",
  description:
    "Contact Atlantic Surgery Center in Daytona Beach, FL. Call us at (386) 239-0021 or visit us at 541 Health Blvd.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl">
            We&apos;re here to help. Reach out to us with any questions about
            your upcoming procedure.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 shrink-0">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Address
                  </h3>
                  <p className="text-slate-600">
                    541 Health Blvd
                    <br />
                    Daytona Beach, FL 32114
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 shrink-0">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-slate-600">
                      <strong className="text-slate-700">Main:</strong>{" "}
                      <a
                        href="tel:386-239-0021"
                        className="text-primary hover:underline"
                      >
                        (386) 239-0021
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <strong className="text-slate-700">Billing:</strong>{" "}
                      <a
                        href="tel:386-248-8206"
                        className="text-primary hover:underline"
                      >
                        (386) 248-8206
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <strong className="text-slate-700">Billing (Alt):</strong>{" "}
                      <a
                        href="tel:386-248-8205"
                        className="text-primary hover:underline"
                      >
                        (386) 248-8205
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-50 shrink-0">
                  <ClockIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    Hours
                  </h3>
                  <p className="text-slate-600">
                    Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM
                  </p>
                </div>
              </div>

              {/* Directions */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Getting Here
                </h3>
                <p className="text-sm text-slate-600">
                  Atlantic Surgery Center is located on Health Blvd in Daytona
                  Beach, FL. We are conveniently located near Halifax Health
                  Medical Center.
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.5!2d-81.0476!3d29.2108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6db7a8b8b8b8b%3A0x0!2s541+Health+Blvd%2C+Daytona+Beach%2C+FL+32114!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atlantic Surgery Center Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
