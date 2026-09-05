'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-36 pb-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{personalInfo.status}</span>
          </div>

          {/* Headline & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-100 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-zinc-400">
              {personalInfo.role}
            </p>
          </div>

          {/* Intro Description */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}. {personalInfo.bio}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors"
            >
              <span>Lihat Proyek</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              onClick={(e) => {
                e.preventDefault();
                alert('Mengunduh CV Demo');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Unduh CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              aria-label="Email"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="pt-12 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl font-semibold text-zinc-100">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
