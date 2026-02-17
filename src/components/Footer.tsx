import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/asc-logo-transparent.png"
                alt="Atlantic Surgery Center"
                width={240}
                height={52}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Providing the most advanced surgical services in a safe,
              comfortable, and welcoming environment since 1994.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Physicians", href: "/physicians" },
                { name: "Services & Pricing", href: "/services" },
                { name: "Insurance & Billing", href: "/insurance" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Patient Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "What to Expect", href: "/patient-info/what-to-expect" },
                { name: "Patient Rights", href: "/patient-info/patient-rights" },
                { name: "Privacy Policy", href: "/patient-info/privacy-policy" },
                { name: "Pay Online", href: "/payment" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-blue-200">
              <p>
                541 Health Blvd
                <br />
                Daytona Beach, FL 32114
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a
                  href="tel:386-239-0021"
                  className="hover:text-white transition-colors"
                >
                  (386) 239-0021
                </a>
              </p>
              <p>
                <strong className="text-white">Billing:</strong>{" "}
                <a
                  href="tel:386-248-8206"
                  className="hover:text-white transition-colors"
                >
                  (386) 248-8206
                </a>
              </p>
            </div>
            <div className="mt-4">
              <Image
                src="/aaahc-new.png"
                alt="AAAHC Accredited"
                width={180}
                height={90}
                className="rounded w-full max-w-[180px] h-auto"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Atlantic Surgery Center. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
