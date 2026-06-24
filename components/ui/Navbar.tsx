"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Proyecto Educativo", href: "/proyecto-educativo" },
  { name: "Vida Escolar", href: "/#vida-escolar" },
  { name: "Admisiones", href: "/admisiones" },
  { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-gray-800 py-2 md:py-3"
          : "bg-transparent text-white py-3 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-heading font-extrabold text-base sm:text-lg transition-colors ${
              scrolled
                ? "bg-blue-900 text-white"
                : "bg-white/15 backdrop-blur-sm text-white"
            }`}
          >
            C
          </div>
          <span
            className={`font-heading font-bold text-base sm:text-lg md:text-xl leading-tight ${
              scrolled ? "text-blue-900" : "text-white"
            }`}
          >
            Colegio CCP
          </span>
        </Link>

        {/* Desktop Nav — visible desde md: */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-xs lg:text-sm tracking-wide transition-colors hover:text-amber-400 ${
                  scrolled ? "text-gray-600" : "text-white/85"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link href="/admisiones">
            <Button
              variant={scrolled ? "default" : "accent"}
              className="rounded-full font-semibold text-xs lg:text-sm px-4 lg:px-6 py-2"
            >
              Admisiones 2027
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-blue-900" />
          ) : (
            <Menu
              className={`w-6 h-6 ${scrolled ? "text-gray-800" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-xl font-heading font-semibold text-blue-900 hover:text-amber-400 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4"
              >
                <Link
                  href="/admisiones"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full rounded-full"
                  >
                    Iniciar proceso de admisión
                  </Button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
