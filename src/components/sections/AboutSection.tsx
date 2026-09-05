'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Atom,
  Layers,
  Palette,
  Sparkles,
  Layout,
  FileCode,
  Server,
  GitBranch,
  Cpu,
  Check,
} from 'lucide-react';
import { techStack, TechItem } from '@/data/portfolioData';
import { FigmaIcon } from '@/components/ui/Icons';

const iconMap: Record<string, React.ReactNode> = {
  Atom: <Atom className="w-3.5 h-3.5 text-zinc-400" />,
  Globe: <Globe className="w-3.5 h-3.5 text-zinc-400" />,
  Code2: <Code2 className="w-3.5 h-3.5 text-zinc-400" />,
  Layers: <Layers className="w-3.5 h-3.5 text-zinc-400" />,
  Palette: <Palette className="w-3.5 h-3.5 text-zinc-400" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5 text-zinc-400" />,
  Layout: <Layout className="w-3.5 h-3.5 text-zinc-400" />,
  FileCode: <FileCode className="w-3.5 h-3.5 text-zinc-400" />,
  Server: <Server className="w-3.5 h-3.5 text-zinc-400" />,
  GitBranch: <GitBranch className="w-3.5 h-3.5 text-zinc-400" />,
  Cpu: <Cpu className="w-3.5 h-3.5 text-zinc-400" />,
  Figma: <FigmaIcon className="w-3.5 h-3.5 text-zinc-400" />,
};

const categories = ['Frontend', 'Styling & Motion', 'Tools & Backend'] as const;

export default function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-32 px-4 sm:px-6 border-t border-zinc-900">
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
            Tentang & Keahlian
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
            Pendekatan & Stack Teknologi
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio & Principles */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-lg font-medium text-zinc-200">
              Prinsip Pengembangan
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Saya percaya antarmuka web terbaik menggabungkan tampilan yang bersih, fungsionalitas intuitif, dan performa tinggi tanpa elemen dekoratif yang berlebihan.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Arsitektur komponen App Router Next.js yang terstruktur',
                'Sistem desain modular menggunakan Tailwind CSS',
                'Transisi UI halus dan animasi mikro yang natural',
                'Optimasi performa & skor aksesibilitas tinggi',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categorized Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            {categories.map((category) => {
              const items = techStack.filter((t) => t.category === category);
              return (
                <div key={category} className="space-y-3">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    {category}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((tech: TechItem) => (
                      <div
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-medium hover:border-zinc-700 transition-colors"
                      >
                        {iconMap[tech.iconName] || <Code2 className="w-3.5 h-3.5 text-zinc-400" />}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
