
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Code, Cpu, Github, ExternalLink, Sparkles, ChevronRight, Layers, Globe, Zap, Terminal } from 'lucide-react';
import { Project, SkillCategory } from './types.ts';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Quantum Dashboard',
    description: 'A real-time visualization tool for quantum computing telemetry data using D3.js.',
    tags: ['React', 'D3.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/quant/600/400',
    link: '#'
  },
  {
    id: '2',
    title: 'ZenFlow Workspace',
    description: 'A minimalist productivity platform focused on flow state and deep work for engineers.',
    tags: ['React', 'Framer Motion', 'TypeScript'],
    imageUrl: 'https://picsum.photos/seed/zen/600/400',
    link: '#'
  },
  {
    id: '3',
    title: 'Ether Core',
    description: 'A custom-built component library for high-performance financial dashboards.',
    tags: ['Styled Components', 'Storybook', 'Vite'],
    imageUrl: 'https://picsum.photos/seed/ether/600/400',
    link: '#'
  }
];

const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: 'Layers'
  },
  {
    title: 'Performance & Ops',
    skills: ['Vite', 'CI/CD Pipelines', 'Docker', 'Web Vitals'],
    icon: 'Zap'
  },
  {
    title: 'Systems & Data',
    skills: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    icon: 'Terminal'
  }
];

const Navbar = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => (pathname === path || (path === '/' && pathname === '')) ? 'text-blue-400' : 'text-gray-400 hover:text-white';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="glass px-6 py-3 rounded-full flex items-center justify-between shadow-2xl">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">LUMINA</span>
          </Link>
          
          <div className="flex items-center gap-6 sm:gap-8">
            <Link to="/" className={`flex items-center gap-2 transition-colors ${isActive('/')}`}>
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">Home</span>
            </Link>
            <Link to="/work" className={`flex items-center gap-2 transition-colors ${isActive('/work')}`}>
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">Work</span>
            </Link>
            <Link to="/skills" className={`flex items-center gap-2 transition-colors ${isActive('/skills')}`}>
              <Cpu className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">Skills</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomeHero = () => (
  <section className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
    <div className="max-w-3xl space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
        <Globe className="w-3 h-3" />
        Available for Remote Roles
      </div>
      <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
        Engineering the <br /><span className="text-gradient">Modern Web</span> Stack.
      </h1>
      <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
        I am a senior developer specialized in building scalable, performant, and 
        aesthetically pleasing digital products with modern technologies.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link to="/work" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group">
          View Projects
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link to="/skills" className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
          Explore Skills
          <Cpu className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
);

const WorkGrid = () => (
  <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen">
    <div className="mb-12">
      <h2 className="text-4xl font-heading font-bold mb-4">Case Studies</h2>
      <p className="text-gray-400 max-w-lg">Highlighting technical architecture and creative problem solving.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((project) => (
        <div key={project.id} className="group glass rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-2">
          <div className="relative h-48 overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-heading font-bold">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-white/5 rounded-md text-[10px] uppercase font-bold text-gray-400">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors pt-2">
              View Source <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const SkillsSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-purple-400" />;
      default: return <Cpu className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 max-w-5xl mx-auto min-h-screen">
      <div className="mb-12">
        <h2 className="text-4xl font-heading font-bold mb-4">Tech Stack</h2>
        <p className="text-gray-400 max-w-lg">A deep dive into the tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map((cat, i) => (
          <div key={i} className="glass p-8 rounded-3xl space-y-6 hover:border-blue-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              {getIcon(cat.icon)}
            </div>
            <h3 className="text-xl font-heading font-bold">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.skills.map((skill, j) => (
                <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 glass p-8 rounded-3xl border-dashed border-white/10 flex flex-col items-center justify-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
          <Terminal className="w-8 h-8 text-blue-400" />
        </div>
        <h3 className="text-xl font-heading font-bold">Always Learning</h3>
        <p className="text-gray-400 max-w-md text-sm">Currently exploring Distributed Systems, WebAssembly, and Advanced SVG Animation.</p>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-4 border-t border-white/5 bg-gray-950/50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg tracking-tight">LUMINA</h3>
          <p className="text-gray-500 text-xs">Modern Web Artifacts v1.0</p>
        </div>
      </div>

      <div className="flex items-center gap-8 text-gray-500 text-sm font-medium">
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
      </div>

      <p className="text-gray-600 text-xs text-center md:text-right">
        &copy; {new Date().getFullYear()} Lumina. Zero-API Static Build.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomeHero />} />
            <Route path="/work" element={<WorkGrid />} />
            <Route path="/skills" element={<SkillsSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
