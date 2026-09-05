'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, Project } from '@/data/portfolioData';
import { GithubIcon } from '@/components/ui/Icons';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 sm:py-32 px-4 sm:px-6 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-3"
        >
          <div className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            Portofolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
            Proyek Terpilih
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Kumpulan aplikasi web buatan saya dengan fokus pada desain fungsional dan kode yang bersih.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group bg-zinc-900/40 rounded-xl border border-zinc-800/80 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              {/* Image Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-zinc-950/80 border border-zinc-800 text-zinc-400 text-[11px] font-mono">
                    Featured
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Actions */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono text-zinc-500">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>#{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-zinc-800/60">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 text-zinc-500" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-zinc-100 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
