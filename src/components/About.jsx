import React from 'react';
import { Camera, Code, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
          <p className="mt-4 text-white/70">
            I’m a developer and photographer who loves building clean, modern interfaces and crafting visuals that tell a story. My work blends aesthetics with performance, focusing on accessibility, motion, and meaningful interactions.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Code className="h-4 w-4" />
                <span>Frontend</span>
              </div>
              <p className="mt-2 text-xs text-white/60">React, TypeScript, Tailwind, Animations</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Camera className="h-4 w-4" />
                <span>Photography</span>
              </div>
              <p className="mt-2 text-xs text-white/60">Portraits, product, events & travel</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <User className="h-4 w-4" />
                <span>Collaboration</span>
              </div>
              <p className="mt-2 text-xs text-white/60">Clear communication & pixel care</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1513875528452-d994e3d73b69?q=80&w=1600&auto=format&fit=crop"
              alt="Camera setup on a desk"
              className="h-full w-full object-cover opacity-90"
            />
          </div>
          <p className="mt-4 text-sm text-white/70">
            Off-screen, you’ll find me chasing light, exploring cities, and learning new tools that help me design with intention.
          </p>
        </div>
      </div>
    </section>
  );
}
