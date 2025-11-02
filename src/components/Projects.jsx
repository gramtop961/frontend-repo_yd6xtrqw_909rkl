import React from 'react';
import { Camera, Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Lensfolio',
    description: 'A minimalist gallery for photographers with buttery-smooth transitions.',
    tag: 'Photography',
    icon: Camera,
    image:
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Studio UI',
    description: 'Component library for modern creative studios built with Tailwind.',
    tag: 'Frontend',
    icon: Code,
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d6aa25f2d?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Lightroom Presets',
    description: 'A collection of filmic color presets for vibrant, natural tones.',
    tag: 'Photography',
    icon: Camera,
    image:
      'https://images.unsplash.com/photo-1487260211189-670c54da558d?q=80&w=1600&auto=format&fit=crop',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected Work</h2>
          <p className="mt-2 text-sm text-white/70">A mix of web builds and visual projects.</p>
        </div>
        <a href="#contact" className="hidden rounded-md border border-white/20 px-3 py-2 text-xs text-white/80 hover:border-white/40 sm:block">
          Available for freelance
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <a key={p.title} href={p.link} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between p-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs text-white/70">
                    <Icon className="h-4 w-4" />
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-white/70">{p.description}</p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 text-white/60 transition group-hover:text-white" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
