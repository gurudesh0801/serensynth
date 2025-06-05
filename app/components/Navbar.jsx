"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Who we are", href: "/who-we-are" },
    { label: "Seren Media", href: "/seren-media" },
    { label: "Screen Express", href: "/screen-express" },
    { label: "Careers", href: "/careers" },
  ];
  const isContactPage = pathname === "/contact";

  return (
    <header
      className={classNames(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="SerenSynth Logo"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                className={classNames(
                  "text-sm font-medium relative group transition-colors duration-200",
                  isContactPage
                    ? "text-[#0C1B3A]"
                    : scrolled
                    ? "text-[#05143d]"
                    : "text-white",
                  isActive && !scrolled && !isContactPage && "text-[#d4b180]"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="block w-full h-[2px] bg-[#d4b180] absolute bottom-[-4px] left-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Button */}
        <Link
          href="/contact"
          className={classNames(
            "text-sm px-5 py-2 rounded-full font-medium transition-all duration-200",
            isContactPage
              ? "bg-[#0C1B3A] text-white"
              : scrolled
              ? "bg-[#05143d] text-white hover:opacity-90"
              : "bg-white text-[#05143d] hover:bg-[#f5f5f5]"
          )}
        >
          Consult with us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
