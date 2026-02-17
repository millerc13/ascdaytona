"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Logo from "@/components/Logo";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [patientDropdown, setPatientDropdown] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white text-xs sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
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
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-14 w-auto" />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-primary">
                Atlantic Surgery Center
              </p>
              <p className="text-sm text-slate-500">Daytona Beach, FL</p>
            </div>
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
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                  {patientDropdown && (
                    <div className="absolute left-0 top-full mt-0 w-56 rounded-lg bg-white shadow-lg ring-1 ring-slate-200 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-primary transition-colors"
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
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.name === "Pay Online"
                      ? "bg-accent text-white hover:bg-accent-light"
                      : "text-slate-700 hover:text-primary hover:bg-blue-50"
                  }`}
                >
                  {item.name}
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
                  className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-primary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block pl-8 pr-4 py-2 text-sm text-slate-500 hover:bg-blue-50 hover:text-primary rounded-md"
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
