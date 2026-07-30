"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Search, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  // Prevent hydration mismatch for theme icon
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll state for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>

      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          "backdrop-blur-xl border-b",
          isScrolled
            ? "bg-surface/90 border-outline-variant/30 shadow-sm"
            : "bg-surface/70 border-outline-variant/10"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16 px-6 md:px-8 max-w-container-max mx-auto">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="font-sans text-xl font-bold text-on-surface tracking-tight hover:text-primary transition-colors duration-200"
          >
            Portfolio
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative pb-1",
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3">
            {/* Ctrl+K Search Hint */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant text-xs font-mono cursor-pointer hover:border-primary/50 transition-colors">
              <Search className="w-3.5 h-3.5" />
              <span>Ctrl + K</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant hover:text-primary"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-[18px] h-[18px]" />
                ) : (
                  <Moon className="w-[18px] h-[18px]" />
                )
              ) : (
                <div className="w-[18px] h-[18px]" />
              )}
            </button>

            {/* Resume Button (Desktop) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-primary text-on-primary rounded-lg text-xs font-mono font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-surface-container border-l border-outline-variant/20 pt-20 px-6"
            >
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link, index) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className={cn(
                        "py-3 px-4 rounded-xl text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-on-surface-variant hover:bg-surface-variant hover:text-on-surface"
                      )}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile Actions */}
              <div className="mt-8 flex flex-col gap-3 border-t border-outline-variant/20 pt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-xl text-sm font-mono font-bold uppercase tracking-wider active:scale-95 transition-transform"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-outline-variant/30 text-on-surface rounded-xl text-sm font-medium hover:bg-surface-variant transition-colors"
                >
                  {mounted && theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-outline-variant/20">
                <p className="text-xs font-mono text-on-surface-variant uppercase tracking-wider mb-2">
                  Get in touch
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
