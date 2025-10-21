"use client";

import { User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-section flex items-center justify-between py-2 md:py-4 px-4 md:px-11 min-h-[50px]">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/assets/engweb-logo.svg"
            alt="EngWeb Logo"
            width={120}
            height={40}
            className="hover:opacity-80 transition duration-300 brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-white">
            <li>
              <Link
                href="/agenda"
                className="text-responsive hover:text-gray-300 transition duration-300"
              >
                Agenda
              </Link>
            </li>
            <li>
              <Link
                href="/calendario"
                className="text-responsive hover:text-gray-300 transition duration-300"
              >
                Calendario
              </Link>
            </li>
            <li>
              <Link
                href="/financas"
                className="text-responsive hover:text-gray-300 transition duration-300"
              >
                Finanças
              </Link>
            </li>
            <Link
              className="flex items-center gap-3 rounded bg-indigo-800 py-2 px-4 hover:opacity-80 transition duration-300 text-responsive"
              href="/login"
            >
              <User className="text-white w-6 h-6" />
              Login
            </Link>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden text-white p-2 z-10 flex-shrink-0"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#26006b] shadow-lg bg-opacity-95 md:hidden">
            <nav className="container-section px-4 py-6">
              <ul className="flex flex-col gap-6 text-white">
                <li>
                  <Link
                    href="/agenda"
                    className="block text-responsive hover:text-gray-300 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/calendario"
                    className="block text-responsive hover:text-gray-300 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Calendario
                  </Link>
                </li>
                <li>
                  <Link
                    href="/financas"
                    className="block text-responsive hover:text-gray-300 transition duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Finanças
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link
                    className="flex items-center gap-3 rounded bg-indigo-800 py-2 px-4 hover:opacity-80 transition duration-300 w-fit text-responsive"
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="text-white w-6 h-6" />
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
