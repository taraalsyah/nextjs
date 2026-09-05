'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Check } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('--- Form Submission Received ---');
    console.log('Nama:', formData.name);
    console.log('Email:', formData.email);
    console.log('Pesan:', formData.message);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 400);
  };

  return (
    <footer id="contact" className="py-28 sm:py-32 px-4 sm:px-6 border-t border-zinc-900 bg-zinc-950">
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
            Kontak
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
            Mari Berkolaborasi
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Punya pertanyaan atau ingin mendiskusikan peluang proyek? Silakan kirim pesan melalui formulir di bawah.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Email</div>
                  <a href={`mailto:${personalInfo.socials.email}`} className="text-sm font-medium text-zinc-200 hover:text-zinc-100 transition-colors">
                    {personalInfo.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">Lokasi</div>
                  <div className="text-sm font-medium text-zinc-200">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-4 border-t border-zinc-900">
              <div className="text-[11px] font-mono text-zinc-500 uppercase">Media Sosial</div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 text-xs font-medium transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 text-xs font-medium transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-zinc-900/40 p-6 sm:p-8 rounded-xl border border-zinc-800/80"
          >
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">Pesan Berhasil Terkirim</h3>
                <p className="text-zinc-400 text-xs max-w-sm mx-auto">
                  Terima kasih. Pesan Anda telah dicatat ke dalam console browser (`console.log`).
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-medium text-zinc-300">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-medium text-zinc-300">
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-300">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tuliskan pesan Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-xs">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Next.js App Router • Tailwind CSS • Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
