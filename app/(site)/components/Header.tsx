"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-800/80 bg-slate-900/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-slate-100 text-lg">
          Riyaz Dudekula
        </Link>

        {/* Menu toggle (visible only on mobile) */}
        <button
          className="md:hidden badge"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#skills" className="text-slate-200 hover:text-white">Skills</a>
          <a href="#experience" className="text-slate-200 hover:text-white">Experience</a>
          <a href="#projects" className="text-slate-200 hover:text-white">Projects</a>
          <a href="#education" className="text-slate-200 hover:text-white">Education</a>
          <a href="#contact" className="text-slate-200 hover:text-white">Contact</a>
          
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={clsx(
          "md:hidden flex flex-col items-center bg-slate-900/95 border-t border-slate-800 transition-all duration-300 overflow-hidden",
          open ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <a href="#skills" className="text-slate-200 hover:text-white py-2">Skills</a>
        <a href="#experience" className="text-slate-200 hover:text-white py-2">Experience</a>
        <a href="#projects" className="text-slate-200 hover:text-white py-2">Projects</a>
        <a href="#education" className="text-slate-200 hover:text-white py-2">Education</a>
        <a href="#contact" className="text-slate-200 hover:text-white py-2">Contact</a>
        
      </div>
    </header>
  );
}
