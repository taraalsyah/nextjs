'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Layers,
  Compass,
  Zap,
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ImageIcon,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Tag,
  BellRing,
  CheckCircle2,
  Kanban,
  Users,
  MessageSquare,
  Calendar,
  CheckSquare,
  FileText
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

type TabId = 'overview' | 'features' | 'user-flow' | 'advanced';

interface NavItem {
  id: TabId;
  number: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    id: 'overview',
    number: '1',
    title: '1. Pengenalan',
    shortTitle: 'Pengenalan',
    icon: BookOpen,
  },
  {
    id: 'features',
    number: '2',
    title: '2. Fitur Utama',
    shortTitle: 'Fitur Utama',
    icon: Layers,
  },
  {
    id: 'user-flow',
    number: '3',
    title: '3. Panduan Penggunaan',
    shortTitle: 'Panduan Penggunaan',
    icon: Compass,
  },
  {
    id: 'advanced',
    number: '4',
    title: '4. Fitur Lanjutan',
    shortTitle: 'Fitur Lanjutan',
    icon: Zap,
  },
];

export default function TaskTuntasGitBookDocPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeIndex = useMemo(
    () => navItems.findIndex((item) => item.id === activeTab),
    [activeTab]
  );

  const filteredNavItems = useMemo(() => {
    if (!searchQuery.trim()) return navItems;
    return navItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleNext = () => {
    if (activeIndex < navItems.length - 1) {
      setActiveTab(navItems[activeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveTab(navItems[activeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col selection:bg-zinc-800 selection:text-zinc-100">
      {/* Top Mobile & Brand Header */}
      <header className="lg:hidden sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-900 transition-colors"
            aria-label="Toggle Sidebar Menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
              TT
            </div>
            <span className="font-semibold text-sm tracking-tight text-zinc-100">
              TaskTuntas Docs
            </span>
          </div>
        </div>

        <Link
          href="/#projects"
          className="text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Portofolio</span>
        </Link>
      </header>

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left GitBook Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-zinc-950/95 lg:bg-zinc-950 border-r border-zinc-800/80 flex flex-col transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Sidebar Header */}
          <div className="p-5 border-b border-zinc-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>Portofolio</span>
              </Link>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                v1.0.0
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  TT
                </div>
                <span className="font-semibold text-base tracking-tight text-zinc-100">
                  TaskTuntas Docs
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">
                Dokumentasi Platform Manajemen Task
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-zinc-500" />
              <input
                type="text"
                placeholder="Cari dokumentasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
              />
            </div>
          </div>

          {/* Sidebar Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5">
            <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-3 pb-1">
              Halaman Dokumen
            </div>

            {filteredNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-colors relative ${
                    isActive
                      ? 'bg-zinc-900 text-zinc-100 font-semibold border border-zinc-800'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-emerald-500 rounded-r-full"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-emerald-400' : 'text-zinc-500'
                    }`}
                  />
                  <span className="truncate">{item.title}</span>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer Links */}
          <div className="p-4 border-t border-zinc-800/80 space-y-2">
            <a
              href="https://www.tasktuntas.com/"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              <span>Kunjungi Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/taraalsyah/nextjs_portofolio"
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium hover:bg-zinc-800 transition-colors"
            >
              <span className="inline-flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>Source Code</span>
              </span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </aside>

        {/* Mobile Backdrop */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-zinc-950/80 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Main Content Viewport */}
        <main className="flex-1 min-w-0 p-4 sm:p-8 lg:p-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span>Dokumentasi</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span>TaskTuntas</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-zinc-300 font-medium">
              {navItems[activeIndex].shortTitle}
            </span>
          </div>

          {/* Active Tab Document Render */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {activeTab === 'overview' && <OverviewPageContent />}
              {activeTab === 'features' && <FeaturesPageContent />}
              {activeTab === 'user-flow' && <UserFlowPageContent />}
              {activeTab === 'advanced' && <AdvancedPageContent />}
            </motion.div>
          </AnimatePresence>

          {/* GitBook Page Navigation Footer */}
          <div className="pt-10 border-t border-zinc-800/80 flex items-center justify-between gap-4">
            {activeIndex > 0 ? (
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 text-xs font-medium transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">Sebelumnya</div>
                  <div>{navItems[activeIndex - 1].shortTitle}</div>
                </div>
              </button>
            ) : <div />}

            {activeIndex < navItems.length - 1 ? (
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800 text-xs font-medium transition-colors ml-auto"
              >
                <div className="text-right">
                  <div className="text-[10px] text-zinc-500 font-mono uppercase">Selanjutnya</div>
                  <div>{navItems[activeIndex + 1].shortTitle}</div>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : <div />}
          </div>
        </main>
      </div>
    </div>
  );
}

{/* Image Placeholder Component */}
function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="my-6 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-dashed border-zinc-700/80 flex flex-col items-center justify-center text-center space-y-3 hover:border-zinc-500 transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:scale-105 transition-all">
        <ImageIcon className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
          [PLACEHOLDER GAMBAR]
        </span>
        <p className="text-xs sm:text-sm text-zinc-300 font-medium max-w-md">
          {caption}
        </p>
      </div>
    </div>
  );
}

{/* Page 1: Pengenalan */}
function OverviewPageContent() {
  return (
    <article className="space-y-8 max-w-4xl">
      <div className="space-y-3 pb-6 border-b border-zinc-800/80">
        <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
          Halaman 1 / 4
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Pengenalan TaskTuntas
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Sistem manajemen tugas dan proyek terintegrasi berbasis web yang mengoptimalkan kolaborasi tim, transparansi alur kerja, dan eksekusi berkecepatan tinggi.
        </p>
      </div>

      <ImagePlaceholder caption="Dashboard Utama TaskTuntas - Tampilan Papan Kerja & Ringkasan Proyek" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-100">Tujuan & Latar Belakang</h2>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed list-disc list-inside">
          <li><strong className="text-zinc-100">Sinkronisasi Ruang Kerja:</strong> Menyediakan <em>single source of truth</em> untuk seluruh aktivitas proyek, menghilangkan silo informasi antar anggota tim.</li>
          <li><strong className="text-zinc-100">Visibilitas End-to-End:</strong> Memberikan transparansi status pengerjaan tugas secara real-time dari fase inisiasi hingga penyelesaian.</li>
          <li><strong className="text-zinc-100">Pengurangan Overhead Komunikasi:</strong> Meminimalkan rapat koordinasi manual melalui otomatisasi notifikasi dan pelimpahan tugas transparan.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-100">Nilai Efisiensi & Dampak Operasional</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
            <div className="text-2xl font-bold text-emerald-400">+35%</div>
            <div className="text-xs font-semibold text-zinc-200">Peningkatan Produktivitas</div>
            <div className="text-[11px] text-zinc-400 leading-normal">Eliminasi redundansi proses penugasan tim.</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
            <div className="text-2xl font-bold text-zinc-100">100%</div>
            <div className="text-xs font-semibold text-zinc-200">Deadline Compliance</div>
            <div className="text-[11px] text-zinc-400 leading-normal">Peringatan dini overdue alert otomatis.</div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
            <div className="text-2xl font-bold text-zinc-100">Audit Ready</div>
            <div className="text-xs font-semibold text-zinc-200">Akuntabilitas Tugas</div>
            <div className="text-[11px] text-zinc-400 leading-normal">Rekam jejak perubahan terverifikasi.</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-100">Arsitektur Ringkas Sistem</h2>
        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3 text-xs sm:text-sm text-zinc-300">
          <div><strong className="text-zinc-100">Frontend:</strong> Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.</div>
          <div><strong className="text-zinc-100">Backend & Database:</strong> Django REST Framework / Node.js, PostgreSQL / MySQL, Redis Caching.</div>
          <div><strong className="text-zinc-100">Otentikasi & Keamanan:</strong> JWT Authentication, Role-Based Access Control (RBAC).</div>
        </div>
      </section>
    </article>
  );
}

{/* Page 2: Fitur Utama */}
function FeaturesPageContent() {
  return (
    <article className="space-y-8 max-w-4xl">
      <div className="space-y-3 pb-6 border-b border-zinc-800/80">
        <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
          Halaman 2 / 4
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Fitur Utama Platform
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Menguraikan 5 fungsionalitas inti TaskTuntas yang mendukung pengelolaan proyek harian secara intuitif dan terstruktur.
        </p>
      </div>

      <div className="my-6 space-y-2">
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
          <Image
            src="/images/kanban_board.png"
            alt="TaskTuntas Interactive Kanban Board Screenshot"
            width={1024}
            height={550}
            className="w-full h-auto rounded-xl object-contain"
            priority
            unoptimized
          />
        </div>
        <p className="text-center text-xs text-zinc-400 font-mono">
          Tampilan Antarmuka Asli Interactive Kanban Board TaskTuntas (Backlog, Open, In Progress, Done)
        </p>
      </div>

      <section className="space-y-6">
        {/* 1. Interactive Kanban */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
            <Kanban className="w-5 h-5 text-emerald-400" />
            <span>1. Interactive Kanban Board</span>
          </h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
            <li><strong className="text-zinc-100">Visualisasi Alur Kerja:</strong> Papan kerja berbasis kolom dinamis (<strong>To-Do</strong>, <strong>In Progress</strong>, <strong>In Review</strong>, <strong>Done</strong>).</li>
            <li><strong className="text-zinc-100">Drag-and-Drop Interaction:</strong> Pemindahan status tugas secara instan melalui pergeseran kartu tugas dengan transisi halus.</li>
            <li><strong className="text-zinc-100">Quick Task Card:</strong> Ringkasan tugas mencakup judul, <em>assignee</em>, tenggat waktu, label prioritas, dan jumlah komentar.</li>
          </ul>
        </div>

        {/* 2. Sistem Delegasi */}
        <div className="space-y-2 pt-4 border-t border-zinc-800/60">
          <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            <span>2. Sistem Delegasi & Task Assignment</span>
          </h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
            <li><strong className="text-zinc-100">Penugasan Granular:</strong> Pelimpahan tanggung jawab tugas kepada anggota tim tunggal maupun <em>multi-assignee</em>.</li>
            <li><strong className="text-zinc-100">Tingkat Prioritas:</strong> Penandaan prioritas tugas berdasar bobot risiko: <strong>Low</strong> (Hijau), <strong>Medium</strong> (Kuning), <strong>High</strong> (Oranye), dan <strong>Urgent</strong> (Merah).</li>
            <li><strong className="text-zinc-100">Estimasi Beban Kerja:</strong> Pencatatan estimasi jam kerja (<em>story points</em> / <em>hours</em>) untuk penyeimbangan kapasitas tim.</li>
          </ul>
        </div>

      <div className="my-6 space-y-2">
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
          <Image
            src="/images/task_modal.png"
            alt="TaskTuntas Form Buat Task Baru / Detail Tugas Modal"
            width={1024}
            height={550}
            className="w-full h-auto rounded-xl object-contain"
            priority
            unoptimized
          />
        </div>
        <p className="text-center text-xs text-zinc-400 font-mono">
          Tampilan Antarmuka Asli Form Buat Task Baru / Detail Tugas Modal TaskTuntas
        </p>
      </div>

        {/* 3. Ruang Diskusi */}
        <div className="space-y-2 pt-4 border-t border-zinc-800/60">
          <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>3. Ruang Diskusi & Lampiran Berkas</span>
          </h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
            <li><strong className="text-zinc-100">Komentar Real-time:</strong> Diskusi terkonteks langsung di dalam kartu tugas tanpa memerlukan aplikasi pesan eksternal.</li>
            <li><strong className="text-zinc-100">Penyebutan Tim (@mentions):</strong> Pemanggilan anggota tim spesifik untuk memicu notifikasi langsung.</li>
            <li><strong className="text-zinc-100">Pengunggahan Lampiran (File Attachments):</strong> Dukungan unggah dokumen (PDF, DOCX) dan media gambar dengan batas hingga 25MB per berkas.</li>
          </ul>
        </div>

        {/* 4. Manajemen Tenggat Waktu */}
        <div className="space-y-2 pt-4 border-t border-zinc-800/60">
          <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <span>4. Manajemen Tenggat Waktu & Calendar Sync</span>
          </h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
            <li><strong className="text-zinc-100">Penetapan Due Date:</strong> Tanggal & jam target penyelesaian yang jelas pada setiap tugas.</li>
            <li><strong className="text-zinc-100">Indikator Visual Keterlambatan (Overdue Alert):</strong> Penandaan otomatis warna merah saat tugas melewati batas waktu pengerjaan.</li>
            <li><strong className="text-zinc-100">Tampilan Kalender:</strong> Mode tampilan kalender bulanan/mingguan untuk visualisasi sebaran tenggat waktu proyek.</li>
          </ul>
        </div>

      <div className="my-6 space-y-2">
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
          <Image
            src="/images/calendar_view.png"
            alt="TaskTuntas Calendar Deadline View Screenshot"
            width={1024}
            height={550}
            className="w-full h-auto rounded-xl object-contain"
            priority
            unoptimized
          />
        </div>
        <p className="text-center text-xs text-zinc-400 font-mono">
          Tampilan Antarmuka Asli Mode Kalender - Sebaran Due Date Tugas Proyek TaskTuntas
        </p>
      </div>

        {/* 5. Sub-task */}
        <div className="space-y-2 pt-4 border-t border-zinc-800/60">
          <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-emerald-400" />
            <span>5. Sub-task & Checklists</span>
          </h2>
          <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
            <li><strong className="text-zinc-100">Dekomposisi Tugas (Epic Breakdown):</strong> Pemecahan tugas besar menjadi <em>checklist</em> langkah-langkah kecil yang terukur.</li>
            <li><strong className="text-zinc-100">Indikator Kemajuan (Progress Bar):</strong> Persentase kelengkapan <em>checklist</em> yang diperbarui secara otomatis.</li>
          </ul>
        </div>
      </section>
    </article>
  );
}

{/* Page 3: Panduan Penggunaan */}
function UserFlowPageContent() {
  return (
    <article className="space-y-8 max-w-4xl">
      <div className="space-y-3 pb-6 border-b border-zinc-800/80">
        <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
          Halaman 3 / 4
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Panduan Penggunaan Sistem
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Panduan langkah demi langkah penggunaan TaskTuntas untuk pengguna baru dan pengelola proyek.
        </p>
      </div>

      {/* Langkah 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-100">Langkah 1: Membuat Proyek Baru</h2>
      <div className="my-6 space-y-2">
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
          <Image
            src="/images/create_project_modal.png"
            alt="TaskTuntas Form Pembuatan Proyek Baru Modal Screenshot"
            width={1024}
            height={550}
            className="w-full h-auto rounded-xl object-contain"
            priority
            unoptimized
          />
        </div>
        <p className="text-center text-xs text-zinc-400 font-mono">
          Tampilan Antarmuka Asli Form Pembuatan Proyek Baru - Nama Workspace & Metode Alur Kerja
        </p>
      </div>
        <ol className="space-y-2 text-xs sm:text-sm text-zinc-300 list-decimal list-inside leading-relaxed">
          <li>Masuk ke halaman <strong>Dashboard</strong> utama aplikasi.</li>
          <li>Klik tombol <strong>+ Proyek Baru</strong> pada sudut kanan atas navigasi.</li>
          <li>Isi informasi dasar proyek:
            <ul className="pl-6 space-y-1 my-1 list-disc">
              <li><strong className="text-zinc-100">Nama Proyek:</strong> Masukkan nama proyek yang spesifik (misal: <em>Revamp Mobile Banking v2</em>).</li>
              <li><strong className="text-zinc-100">Deskripsi:</strong> Penjelasan singkat ruang lingkup proyek.</li>
              <li><strong className="text-zinc-100">Tipe Alur Kerja:</strong> Pilih <strong>Kanban Board</strong> atau <strong>Task List</strong>.</li>
              <li><strong className="text-zinc-100">Target Tanggal Selesai:</strong> Tentukan estimasi tanggal penyelesaian proyek.</li>
            </ul>
          </li>
          <li>Klik tombol <strong>Buat Workspace</strong> untuk menyelesaikan inisiasi proyek.</li>
        </ol>
      </section>

      {/* Langkah 2 */}
      <section className="space-y-4 pt-6 border-t border-zinc-800/60">
        <h2 className="text-xl font-semibold text-zinc-100">Langkah 2: Kolaborasi Proyek via Kode Invite & Approval Join</h2>
      <div className="my-6 space-y-4">
        <div className="space-y-2">
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
            <Image
              src="/images/project_members.png"
              alt="Pengaturan Proyek - Daftar Anggota & Invite Code"
              width={1024}
              height={550}
              className="w-full h-auto rounded-xl object-contain"
              priority
              unoptimized
            />
          </div>
          <p className="text-center text-xs text-zinc-400 font-mono">
            Tampilan Antarmuka Pengaturan Proyek - Generator Kode Invite Active & Kelola Daftar Anggota Proyek
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
            <Image
              src="/images/join_project.png"
              alt="Join Project Menggunakan Invite Code Modal"
              width={1024}
              height={550}
              className="w-full h-auto rounded-xl object-contain"
              unoptimized
            />
          </div>
          <p className="text-center text-xs text-zinc-400 font-mono">
            Tampilan Antarmuka Form Join Project - Pengajuan Request Join Menggunakan Kode Invite Proyek
          </p>
        </div>
      </div>
        <ol className="space-y-2 text-xs sm:text-sm text-zinc-300 list-decimal list-inside leading-relaxed">
          <li>Owner proyek membuka menu <strong>Pengaturan Proyek</strong> (ikon roda gigi) lalu memilih tab <strong>Anggota</strong>.</li>
          <li>Owner membuat dan mengaktifkan <strong>Kode Invite Proyek</strong> (misal: <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-xs">PM-2MLX-5S3X</code>) yang dapat disalin (<em>Copy Invite Code</em>) atau diperbarui kapan saja (<em>Regenerate Invite Code</em>).</li>
          <li>User/kolaborator yang ingin bergabung membuka modal <strong>Join Project</strong> lalu memasukkan <strong>Invite Code</strong> tersebut untuk mengajukan permintaan bergabung (<em>Request Join</em>).</li>
          <li>Owner proyek menerima pengajuan di tab <strong>Join Requests</strong> pada Pengaturan Proyek untuk melakukan peninjauan dan persetujuan (<strong>Approval</strong>).</li>
          <li>Setelah disetujui, user resmi terdaftar pada <strong>Daftar Anggota Proyek</strong> dengan hak akses peran (<em>Owner</em>, <em>Admin</em>, atau <em>Member</em>) yang dikelola secara terstruktur.</li>
        </ol>
      </section>

      {/* Langkah 3 */}
      <section className="space-y-4 pt-6 border-t border-zinc-800/60">
        <h2 className="text-xl font-semibold text-zinc-100">Langkah 3: Mengelola & Menyelesaikan Task</h2>
        <ImagePlaceholder caption="Aksi Drag-and-Drop Kartu Tugas dari In Progress ke In Review" />
        <ol className="space-y-2 text-xs sm:text-sm text-zinc-300 list-decimal list-inside leading-relaxed">
          <li>Pada kolom <strong>To-Do</strong>, klik <strong>+ Tambah Tugas</strong>.</li>
          <li>Masukkan <strong>Judul Tugas</strong>, tentukan <strong>Assignee</strong>, isi <strong>Due Date</strong>, dan pilih <strong>Tag Prioritas</strong>. Klik <strong>Simpan</strong>.</li>
          <li>Saat mulai mengerjakan tugas, geser kartu dari kolom <strong>To-Do</strong> ke kolom <strong>In Progress</strong>.</li>
          <li>Tambahkan catatan kemajuan atau lampirkan dokumen pendukung pada bagian <strong>Komentar</strong>.</li>
          <li>Jika tugas membutuhkan validasi, geser ke kolom <strong>In Review</strong> untuk memicu notifikasi verifikasi penanggung jawab.</li>
          <li>Setelah disetujui, pindahkan kartu ke kolom <strong>Done</strong>. Sistem akan mencatat tanggal penyelesaian secara otomatis.</li>
        </ol>
      </section>
    </article>
  );
}

const notificationSlides = [
  {
    src: '/images/notification_overdue.png',
    alt: 'Pemberitahuan Task Overdue - Template Email HTML',
    title: '1. Email Alert: Pemberitahuan Task Overdue',
    description: 'Template email otomatis yang dikirimkan kepada Assignee saat tugas melewati batas waktu (due date).',
  },
  {
    src: '/images/notification_2fa.png',
    alt: 'Kode Keamanan 2FA - Verifikasi Login',
    title: '2. Email Security: Kode OTP 2FA (Two-Step Verification)',
    description: 'Email pengiriman 6 digit kode OTP untuk autentikasi ganda login akun pengguna.',
  },
  {
    src: '/images/notification_reset_password.png',
    alt: 'Permintaan Reset Password Akun',
    title: '3. Email Security: Permintaan Reset Password',
    description: 'Email konfirmasi dengan link aman yang berlaku selama 10 menit untuk penyetelan ulang kata sandi.',
  },
  {
    src: '/images/notification_web_push.jpg',
    alt: 'Mobile / Web Push Notification TaskTuntas',
    title: '4. Push Notification: Real-Time Mobile & Browser Alerts',
    description: 'Notifikasi push instant pada perangkat seluler/browser ketika pengguna ditugaskan (assigned) pada task baru.',
  },
];

function NotificationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? notificationSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === notificationSlides.length - 1 ? 0 : prev + 1));
  };

  const current = notificationSlides[currentIndex];

  return (
    <div className="my-6 space-y-3">
      <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/90 shadow-2xl p-2 group">
        {/* Slide Counter Badge */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-zinc-300 text-xs font-mono backdrop-blur-md">
          {currentIndex + 1} / {notificationSlides.length}
        </div>

        {/* Slide Image Container */}
        <div className="relative w-full min-h-[300px] flex items-center justify-center bg-zinc-950/50 rounded-xl overflow-hidden p-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="w-full flex justify-center"
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={1200}
                height={700}
                className="w-full h-auto max-h-[480px] object-contain rounded-lg shadow-lg"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left Control Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-all shadow-xl hover:scale-105 active:scale-95 z-20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Control Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-all shadow-xl hover:scale-105 active:scale-95 z-20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicators Dots */}
        <div className="flex items-center justify-center gap-2 pt-3 pb-1">
          {notificationSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-emerald-400'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Caption */}
      <div className="text-center space-y-1 bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-3">
        <p className="text-xs sm:text-sm font-semibold text-emerald-400">
          {current.title}
        </p>
        <p className="text-xs text-zinc-400 font-mono">
          {current.description}
        </p>
      </div>
    </div>
  );
}

{/* Page 4: Fitur Lanjutan */}
function AdvancedPageContent() {
  return (
    <article className="space-y-8 max-w-4xl">
      <div className="space-y-3 pb-6 border-b border-zinc-800/80">
        <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-mono">
          Halaman 4 / 4
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Fitur Lanjutan & Arsitektur Kompleks
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Memaparkan modul-modul tingkat lanjut pada TaskTuntas yang menjamin keamanan data, transparansi manajerial, dan integrasi ekosistem pengembang.
        </p>
      </div>

      {/* 1. RBAC */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>1. Role-Based Access Control (RBAC) & Workflow Approval</span>
        </h2>
      <div className="my-6 space-y-2">
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
          <Image
            src="/images/rbac_matrix.png"
            alt="Configurable Project Role Permission Matrix RBAC TaskTuntas"
            width={1024}
            height={550}
            className="w-full h-auto rounded-xl object-contain"
            priority
            unoptimized
          />
        </div>
        <p className="text-center text-xs text-zinc-400 font-mono">
          Tampilan Antarmuka Asli Configurable Project Role Permission Matrix RBAC (Owner, Admin, Member, Viewer) TaskTuntas
        </p>
      </div>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
          <li><strong className="text-zinc-100">Keamanan Granular:</strong> Pengaturan otorisasi berbasis matriks hak akses (<em>Access Control Matrix</em>) yang mengisolasi tindakan sensitif berdasarkan peran pengguna (<strong>Admin</strong>, <strong>Project Manager</strong>, <strong>Developer</strong>, <strong>External Client</strong>).</li>
          <li><strong className="text-zinc-100">Approval Hierarchy System:</strong>
            <ul className="pl-6 space-y-1 my-1 list-disc">
              <li><strong className="text-zinc-100">Request to Done:</strong> Tugas yang membutuhkan peninjauan mutu wajib melewati persetujuan <em>Project Manager</em> sebelum statusnya berubah menjadi <em>Done</em>.</li>
              <li><strong className="text-zinc-100">Request to Close:</strong> Prosedur penutupan proyek yang memerlukan tanda tangan digital (<em>sign-off</em>) dari pemangku kepentingan utama.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 2. Analitik */}
      <section className="space-y-3 pt-6 border-t border-zinc-800/60">
        <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-emerald-400" />
          <span>2. Dasbor Analitik & Laporan Produktivitas</span>
        </h2>
      <div className="my-6 space-y-6">
        {/* Halaman 1 */}
        <div className="space-y-2">
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
            <Image
              src="/images/analytics_report_page_1.png"
              alt="Dasbor Analitik Laporan & Statistik Task - Halaman 1"
              width={1684}
              height={1190}
              className="w-full h-auto rounded-xl object-contain"
              priority
              unoptimized
            />
          </div>
          <p className="text-center text-xs text-zinc-400 font-mono">
            Halaman 1: Tampilan Metrik Utama, Statistik Status Task, Daftar Overdue Task, & Opsi Cetak Laporan
          </p>
        </div>

        {/* Halaman 2 */}
        <div className="space-y-2">
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
            <Image
              src="/images/analytics_report_page_2.png"
              alt="Dasbor Analitik Laporan & Statistik Task - Halaman 2"
              width={1684}
              height={1190}
              className="w-full h-auto rounded-xl object-contain"
              unoptimized
            />
          </div>
          <p className="text-center text-xs text-zinc-400 font-mono">
            Halaman 2: Visualisasi Grafis Distribusi Prioritas / Kategori & Matrix Beban Kerja Anggota Tim (Assignee Workload)
          </p>
        </div>
      </div>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
          <li><strong className="text-zinc-100">Burndown & Burnup Chart:</strong> Grafik real-time yang memetakan kecepatan penyelesaian tugas (<em>velocity rate</em>) terhadap estimasi waktu tersisa.</li>
          <li><strong className="text-zinc-100">Workload Allocation Matrix:</strong> Visualisasi sebaran beban kerja guna mencegah <em>burnout</em> atau ketimpangan alokasi tugas pada anggota tim tertentu.</li>
          <li><strong className="text-zinc-100">Ekspor Laporan Multiformat:</strong>
            <ul className="pl-6 space-y-1 my-1 list-disc">
              <li><strong className="text-zinc-100">PDF Summary:</strong> Laporan eksekutif siap cetak untuk manajemen puncak.</li>
              <li><strong className="text-zinc-100">CSV Data Dump:</strong> Ekspor mentah data tugas untuk analisis statistik lanjutan di Excel / Google Sheets.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* 3. Custom Categories */}
      <section className="space-y-3 pt-6 border-t border-zinc-800/60">
        <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
          <Tag className="w-5 h-5 text-emerald-400" />
          <span>3. Kategori Kustom per Proyek & System Filtering</span>
        </h2>
        <div className="my-6 space-y-2">
          <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl p-1">
            <Image
              src="/images/project_categories.png"
              alt="Panel Pengaturan Kategori Kustom Proyek TaskTuntas"
              width={1344}
              height={760}
              className="w-full h-auto rounded-xl object-contain"
              unoptimized
            />
          </div>
          <p className="text-center text-xs text-zinc-400 font-mono">
            Tampilan Antarmuka Asli Panel Pengaturan Kategori Tugas (Task Categories — Web Portofolio Tara &apos;A&apos;) TaskTuntas
          </p>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
          <li><strong className="text-zinc-100">Project-Scoped Custom Categories:</strong> Setiap proyek memiliki kebebasan penuh untuk mendefinisikan dan mengelola daftar kategori kustom sendiri yang terisolasi sesuai kebutuhan alur kerja unik proyek tersebut (contoh: <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">Frontend</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">Backend API</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">UI/UX Design</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">Critical Bug</code>, <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 text-xs">DevOps</code>).</li>
          <li><strong className="text-zinc-100">Color-Coded Visual Labels:</strong> Penataan skema warna kustom (*color-coded badges*) untuk setiap kategori guna mempermudah pembedaan dan pemindaian tugas secara visual pada papan Kanban, tabel daftar tugas, maupun tampilan Kalender.</li>
          <li><strong className="text-zinc-100">Multi-Filter & Search Engine:</strong> Mesin penyaringan tingkat lanjut yang memungkinkan pencarian data tugas secara presisi berdasarkan kombinasi variabel independen (Kategori Kustom Proyek, Assignee, Tingkat Prioritas, & Rentang Waktu Due Date).</li>
        </ul>
      </section>

      {/* 4. Notifikasi */}
      <section className="space-y-3 pt-6 border-t border-zinc-800/60">
        <h2 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
          <BellRing className="w-5 h-5 text-emerald-400" />
          <span>4. Otomatisasi Notifikasi & Webhook Integration</span>
        </h2>
        <NotificationCarousel />
        <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
          <li><strong className="text-zinc-100">Multi-Channel Alerts:</strong> Pengiriman notifikasi proaktif saat terjadi peristiwa penting (tugas baru, penyebut akun, keterlambatan tenggat waktu) via In-App Bell, Email Blast (HTML), serta Integrasi Telegram Bot & Slack Channel.</li>
          <li><strong className="text-zinc-100">Event-Driven Webhook Engine:</strong> Pemicu otomasisasi berbasis <em>payload</em> JSON yang terhubung dengan repositori kode (GitHub/GitLab CI/CD) untuk mengubah status tugas secara otomatis saat terjadi <em>pull request</em> atau <em>commit</em>.</li>
        </ul>
      </section>
    </article>
  );
}
