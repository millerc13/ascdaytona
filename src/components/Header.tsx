"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Physicians", href: "/physicians" },
  { name: "Services & Pricing", href: "/services" },
  {
    name: "Patient Info",
    href: "/patient-info",
    children: [
      { name: "What to Expect", href: "/patient-info/what-to-expect" },
      { name: "Patient Rights", href: "/patient-info/patient-rights" },
      { name: "Pre-Admission", href: "/patient-info/pre-admission" },
      { name: "Advance Directives", href: "/patient-info/advance-directives" },
      { name: "Privacy Policy", href: "/patient-info/privacy-policy" },
    ],
  },
  { name: "Insurance & Billing", href: "/insurance" },
  { name: "Pay Online", href: "/payment" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientDropdown, setPatientDropdown] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-between items-center py-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://maps.google.com/?q=541+Health+Blvd+Daytona+Beach+FL+32114"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-blue-200 transition-colors"
            >
              <MapPinIcon className="h-3.5 w-3.5 text-accent-light shrink-0" />
              541 Health Blvd, Daytona Beach, FL 32114
            </a>
            <a
              href="tel:386-239-0021"
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-accent-light shrink-0" />
              (386) 239-0021
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5 text-accent-light shrink-0" />
              Mon–Fri 8:00 AM – 5:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/asc-logo-transparent.png"
              alt="Atlantic Surgery Center"
              width={280}
              height={60}
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setPatientDropdown(true)}
                  onMouseLeave={() => setPatientDropdown(false)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary"
                        : "text-slate-700 hover:text-primary"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1.5 left-3 right-3 h-0.5 bg-accent rounded-full transition-transform duration-300 origin-left ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                  {patientDropdown && (
                    <div className="absolute left-0 top-full mt-0 w-56 rounded-lg bg-white shadow-lg ring-1 ring-slate-200 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            isActive(child.href)
                              ? "text-primary bg-blue-50 font-medium"
                              : "text-slate-700 hover:bg-blue-50 hover:text-primary"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    item.name === "Pay Online"
                      ? "px-3 py-2 bg-accent text-white hover:bg-accent-light rounded-md"
                      : `relative px-3 py-2 ${
                          isActive(item.href)
                            ? "text-primary"
                            : "text-slate-700 hover:text-primary"
                        }`
                  } text-sm font-medium transition-colors`}
                >
                  {item.name}
                  {item.name !== "Pay Online" && (
                    <span
                      className={`absolute -bottom-1.5 left-3 right-3 h-0.5 bg-accent rounded-full transition-transform duration-300 origin-left ${
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 max-h-[calc(100vh-7rem)] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? "text-primary bg-blue-50"
                      : "text-slate-700 hover:bg-blue-50 hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className={`block pl-8 pr-4 py-2 text-sm rounded-md ${
                      isActive(child.href)
                        ? "text-primary bg-blue-50 font-medium"
                        : "text-slate-500 hover:bg-blue-50 hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
