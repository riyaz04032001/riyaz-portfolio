"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-800/80 bg-slate-900/60">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-slate-100">Riyaz Dudekula</Link>
        <button className="md:hidden badge" onClick={() => setOpen(!open)} aria-label="Toggle menu">Menu</button>
        <nav className={clsx("gap-6 items-center md:flex", open ? "flex" : "hidden")}>
          <a href="#skills" className="text-slate-200 hover:text-white">Skills</a>
          <a href="#experience" className="text-slate-200 hover:text-white">Experience</a>
          <a href="#projects" className="text-slate-200 hover:text-white">Projects</a>
          <a href="#education" className="text-slate-200 hover:text-white">Education</a>
          <a href="#contact" className="text-slate-200 hover:text-white">Contact</a>
          <a href="/Riyaz_Dudekula_Resume.pdf" className="badge">Download Resume</a>
        </nav>
      </div>
    </header>
  );
}
