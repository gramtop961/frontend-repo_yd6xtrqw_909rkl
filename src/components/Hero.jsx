import React from 'react';
import Spline from '@splinetool/react-spline';
import { Camera, Code, Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-neutral-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-between px-6 pt-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-white/10 p-2 backdrop-blur">
              <Camera className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium text-white/80">Portfolio</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>

        {/* Hero copy */}
        <div className="pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="inline-flex items-center gap-1"><Code className="h-3.5 w-3.5" /> Creative Developer</span>
            <span className="mx-1 opacity-40">•</span>
            <span>Photography & Technology</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            I craft sleek web experiences and capture moments through the lens. Blending design, code, and photography into modern, minimalist stories.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/40"
            >
              Get in Touch
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a href="mailto:you@example.com" aria-label="Email" className="rounded-md border border-white/10 bg-black/30 p-2 text-white/80 backdrop-blur transition hover:text-white">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md border border-white/10 bg-black/30 p-2 text-white/80 backdrop-blur transition hover:text-white">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/10 bg-black/30 p-2 text-white/80 backdrop-blur transition hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
