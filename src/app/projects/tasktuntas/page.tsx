'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Kanban,
  Users,
  MessageSquare,
  Calendar,
  CheckSquare,
  ShieldCheck,
  BarChart3,
  Tag,
  BellRing,
  Sparkles,
  ChevronRight,
  Layers,
  Zap,
  Globe
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export default function TaskTuntasDocPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-zinc-100 pb-24">
      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Portofolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/taraalsyah/nextjs_portofolio"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>Repository</span>
            </a>
            <a
              href="https://www.tasktuntas.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Production Ready
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              Full-Stack Application
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
              RBAC & Workflow Approval
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
              TaskTuntas — Platform Manajemen Task & Proyek Modern
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
              Dokumentasi komprehensif sistem manajemen proyek end-to-end yang dirancang untuk mengoptimalkan efisiensi eksekusi tugas, transparansi alur kerja, dan kolaborasi tim lintas divisi.
            </p>
          </div>

          {/* Highlight Stats / Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">Peningkatan Produktivitas</div>
              <div className="text-2xl font-bold text-zinc-100">+35%</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">Arsitektur UI</div>
              <div className="text-sm font-semibold text-zinc-200 mt-1">Kanban & Board System</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">Aksesibilitas Peran</div>
              <div className="text-sm font-semibold text-zinc-200 mt-1">RBAC & Approval</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-1">
              <div className="text-xs font-mono text-zinc-500 uppercase">Teknologi Utama</div>
              <div className="text-sm font-semibold text-zinc-200 mt-1">Next.js & TypeScript</div>
            </div>
          </div>
        </motion.section>

        {/* Project Preview Image */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900"
        >
          <Image
            src="https://www.tasktuntas.com/task_management.png"
            alt="TaskTuntas Interface Preview"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top"
            priority
          />
        </motion.section>

        {/* Section 1: Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
            <Sparkles className="w-4 h-4" />
            <span>01. Project Overview</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
            Penjelasan & Nilai Utama Proyek
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-6">
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-zinc-100 font-semibold">TaskTuntas</strong> adalah platform manajemen tugas dan proyek terintegrasi yang dirancang untuk mengoptimalkan kolaborasi tim, transparansi alur kerja, dan eksekusi proyek berkecepatan tinggi. Platform ini dikembangkan untuk memangkas <em>operational friction</em> dalam koordinasi tim lintas divisi melalui visualisasi status kerja yang terstruktur dan responsif.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                  <TargetIcon className="w-4 h-4 text-emerald-400" />
                  <span>Tujuan Utama</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Menyediakan <em>workspace</em> terpusat yang menggabungkan pelacakan tugas riil, otomatisasi alur kerja, dan visibilitas proyek end-to-end.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Nilai Efisiensi</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Meningkatkan produktivitas tim hingga 35% dengan meminimalkan miskomunikasi, mempercepat pelimpahan tugas, dan menyediakan <em>data-driven insight</em> terkait penyelesaian tenggat waktu (<em>deadline compliance</em>).
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Fitur Utama */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <Layers className="w-4 h-4" />
              <span>02. Fitur Utama</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Fungsionalitas Inti Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Kanban className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Interactive Kanban Board
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Manajemen status tugas yang dinamis dengan visualisasi kolom alur kerja (<strong>To-Do</strong>, <strong>In Progress</strong>, <strong>In Review</strong>, <strong>Done</strong>), lengkap dengan fitur <strong>Drag-and-Drop</strong> yang responsif.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Sistem Delegasi & Task Assignment
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Pelimpahan tanggung jawab tugas secara presisi kepada anggota tim tunggal maupun multi-assignee, mencakup estimasi durasi dan tingkat prioritas (<strong>Low</strong>, <strong>Medium</strong>, <strong>High</strong>, <strong>Urgent</strong>).
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Ruang Diskusi & Lampiran Berkas
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Kolaborasi terintegrasi pada setiap kartu tugas melalui komentar <em>real-time</em>, penyebutan tim (<strong>@mentions</strong>), serta pengunggahan lampiran berkas (<strong>file attachments</strong>) dokumen dan media.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Manajemen Tenggat Waktu & Calendar Sync
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Pengaturan <strong>due date</strong>, indikator visual keterlambatan tugas (<strong>overdue alert</strong>), serta integrasi tampilan kalender interaktif untuk pemantauan <em>milestone</em> proyek.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3 md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <CheckSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-zinc-100">
                Sub-task & Checklists
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Pemecahan tugas kompleks (<strong>epic</strong>) menjadi komponen aktivitas kecil yang terukur untuk pelacakan kemajuan yang akurat.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Alur Penggunaan (User Flow) */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <ChevronRight className="w-4 h-4" />
              <span>03. Alur Penggunaan (User Flow)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Panduan Langkah Demi Langkah
            </h2>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-base flex items-center justify-center">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-zinc-100">
                  Membuat Proyek Baru
                </h3>
                <ul className="text-xs sm:text-sm text-zinc-400 space-y-1.5 list-disc list-inside">
                  <li>Masuk ke halaman <strong>Dashboard</strong> utama, kemudian klik tombol <strong>+ Proyek Baru</strong>.</li>
                  <li>Isi nama proyek, deskripsi, metode alur kerja (<strong>Kanban</strong> / <strong>List</strong>), serta target tanggal penyelesaian (<em>target completion date</em>).</li>
                  <li>Klik <strong>Buat Workspace</strong> untuk menginisialisasi papan kerja proyek.</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-base flex items-center justify-center">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-zinc-100">
                  Mengundang Kolaborator & Pengaturan Peran
                </h3>
                <ul className="text-xs sm:text-sm text-zinc-400 space-y-1.5 list-disc list-inside">
                  <li>Buka menu <strong>Pengaturan Proyek</strong> pada pojok kanan atas papan kerja.</li>
                  <li>Pilih opsi <strong>Anggota & Kolaborator</strong>, masukkan alamat email anggota tim yang dituju.</li>
                  <li>Tentukan hak akses untuk kolaborator (<strong>Admin</strong>, <strong>Member</strong>, atau <strong>Viewer</strong>) lalu klik <strong>Kirim Undangan</strong>.</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row gap-5 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-base flex items-center justify-center">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-zinc-100">
                  Mengelola & Menyelesaikan Task
                </h3>
                <ul className="text-xs sm:text-sm text-zinc-400 space-y-1.5 list-disc list-inside">
                  <li>Klik tombol <strong>+ Tambah Tugas</strong> pada kolom status yang sesuai.</li>
                  <li>Lengkapi <strong>Judul Tugas</strong>, <strong>Assignee</strong>, <strong>Tenggat Waktu</strong>, dan <strong>Tag Klasifikasi</strong>.</li>
                  <li>Geser kartu tugas (<strong>Drag-and-Drop</strong>) antar kolom seiring kemajuan pengerjaan.</li>
                  <li>Setelah seluruh pengujian atau peninjauan selesai, pindahkan tugas ke kolom <strong>Done</strong> untuk menandai penyelesaian secara otomatis.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Sorotan Fitur Lanjutan */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-400 uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>04. Sorotan Fitur Lanjutan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              Kompleksitas & Arsitektur Sistem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Highlight 1 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  1. Role-Based Access Control (RBAC) & Workflow Approval
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-400 space-y-2 leading-relaxed">
                <li><strong className="text-zinc-200">Keamanan Granular:</strong> Pengaturan hak akses tingkat tinggi yang memastikan pengguna hanya dapat mengakses dan mengedit data sesuai hirarki jabatan (<strong>Admin</strong>, <strong>Project Manager</strong>, <strong>Developer</strong>, <strong>External Client</strong>).</li>
                <li><strong className="text-zinc-200">Approval Hierarchy:</strong> Alur validasi multi-tingkat (<strong>Request to Done</strong> & <strong>Request to Close</strong>) di mana pengerjaan tugas memerlukan otorisasi manajerial sebelum status diubah secara permanen.</li>
              </ul>
            </div>

            {/* Highlight 2 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  2. Dasbor Analitik & Laporan Produktivitas
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-400 space-y-2 leading-relaxed">
                <li><strong className="text-zinc-200">Metrik Kinerja Real-time:</strong> Grafik visual yang menyajikan <em>burndown chart</em>, distribusi beban kerja anggota tim (<em>workload allocation</em>), serta rasio penyelesaian tugas tepat waktu.</li>
                <li><strong className="text-zinc-200">Ekspor Laporan:</strong> Dukungan ekspor laporan rekapitulasi proyek ke format <strong>PDF</strong> dan <strong>CSV</strong> untuk keperluan audit dan pelaporan manajerial.</li>
              </ul>
            </div>

            {/* Highlight 3 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                  <Tag className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  3. Custom Tags & System Filtering
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-400 space-y-2 leading-relaxed">
                <li><strong className="text-zinc-200">Kategori Fleksibel:</strong> Pembuatan kustomisasi tag berwarna (<em>color-coded labels</em>) berdasarkan modul, repositori code, atau divisi teknis (misal: <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">Frontend</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">Backend</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">Bug</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">Feature</code>).</li>
                <li><strong className="text-zinc-200">Multi-Filter Engine:</strong> Pencarian dan penyaringan data secara instan berdasarkan kombinasi <em>assignee</em>, <em>priority</em>, <em>tags</em>, dan rentang <em>due date</em>.</li>
              </ul>
            </div>

            {/* Highlight 4 */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                  <BellRing className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  4. Otomatisasi Notifikasi & Webhook Integration
                </h3>
              </div>
              <ul className="text-xs sm:text-sm text-zinc-400 space-y-2 leading-relaxed">
                <li><strong className="text-zinc-200">Alert Terintegrasi:</strong> Pengiriman notifikasi otomatis langsung ke surel dan <em>channel</em> komunikasi tim (Telegram Bot / Slack) saat terjadi pergeseran status tugas, komentar baru, atau mendekati tenggat waktu.</li>
                <li><strong className="text-zinc-200">Webhook Event Trigger:</strong> Integrasi dengan layanan eksternal saat aksi tertentu terpicu pada repositori pengembangan.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Footer Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 text-center space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            Ingin Menguji Langsung TaskTuntas?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Jelajahi antarmuka aplikasi atau periksa repositori kode proyek untuk melihat arsitektur teknis secara mendalam.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://www.tasktuntas.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors"
            >
              <span>Kunjungi Live App</span>
              <Globe className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/taraalsyah/nextjs_portofolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold text-sm hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-zinc-400" />
              <span>Lihat Source Code</span>
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
