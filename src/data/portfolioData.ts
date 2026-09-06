export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  docUrl?: string;
  featured: boolean;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Styling & Motion" | "Tools & Backend";
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  status: string;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Tara Alsyah",
  role: "App Support & Web Dev",
  tagline: "Membangun & Memelihara Solusi Web & Aplikasi Berkinerja Tinggi",
  bio: "Profesional di bidang IT Support dan Application Support dengan keahlian pengembangan Web (Next.js, Django). Berpengalaman dalam pemeliharaan aplikasi, pemantauan sistem, analisis log error, serta konfigurasi server Linux.",
  location: "Jakarta, Indonesia",
  status: "Terbuka untuk Peluang Freelance & Full-time",
  resumeUrl: "/cv-tara-alsyah.pdf",
  socials: {
    github: "https://github.com/taraalsyah",
    linkedin: "https://www.linkedin.com/in/taraalsyah/",
    email: "taraalsyah45@gmail.com",
  },
};

export const stats = [
  { label: "Tahun Pengalaman", value: "4+" },
  { label: "Proyek Selesai", value: "25+" },
  { label: "Kepuasan Klien", value: "99%" },
  { label: "Lighthouse Score", value: "98+" },
];

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend", iconName: "Atom" },
  { name: "Next.js (App Router)", category: "Frontend", iconName: "Globe" },
  { name: "TypeScript", category: "Frontend", iconName: "Code2" },
  { name: "Redux / Zustand", category: "Frontend", iconName: "Layers" },
  { name: "Tailwind CSS", category: "Styling & Motion", iconName: "Palette" },
  { name: "Framer Motion", category: "Styling & Motion", iconName: "Sparkles" },
  { name: "Shadcn / Radix UI", category: "Styling & Motion", iconName: "Layout" },
  { name: "CSS Modules / Sass", category: "Styling & Motion", iconName: "FileCode" },
  { name: "Node.js (REST/GraphQL)", category: "Tools & Backend", iconName: "Server" },
  { name: "Git / GitHub", category: "Tools & Backend", iconName: "GitBranch" },
  { name: "Vite / Webpack", category: "Tools & Backend", iconName: "Cpu" },
  { name: "Figma to Code", category: "Tools & Backend", iconName: "Figma" },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "TaskTuntas — Platform Manajemen Task & Proyek Modern",
    description: "Aplikasi manajemen proyek dan task modern yang dilengkapi dengan fitur RBAC, workflow approval (Request to Done & Request to Close), analisis produktivitas, dan AI Assistant.",
    image: "https://www.tasktuntas.com/task_management.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "RBAC", "Workflow Approval"],
    githubUrl: "https://github.com/taraalsyah/nextjs_portofolio",
    liveUrl: "https://www.tasktuntas.com/",
    docUrl: "/projects/tasktuntas",
    featured: true,
  },

  {
    id: "project-4",
    title: "TaskFlow - AI Productivity Workspace",
    description: "Aplikasi manajemen tugas berbasis AI yang menyarankan prioritas kerja dan otomatisasi alur kerja harian.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "OpenAI API"],
    githubUrl: "https://github.com/taraalsyah",
    liveUrl: "https://example.com",
    featured: false,
  },
];
