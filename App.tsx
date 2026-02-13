
import React, { useState, useEffect } from 'react';
import { PROJECTS, EXPERIENCES, EDUCATIONS, SKILLS } from './constants.ts';

const Navbar = ({ darkMode, toggleTheme }: { darkMode: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${darkMode ? 'bg-[#0A1628]/95 text-[#F8F9FA]' : 'bg-[#F8F9FA]/95 text-[#333333]'} backdrop-blur-md border-b ${darkMode ? 'border-white/10' : 'border-black/10 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          MARKO <span className="text-[#2D9CDB]">MICOVSKI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-sm font-bold hover:text-[#2D9CDB] transition-colors uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'}`} 
            aria-label="Toggle Theme"
          >
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2" aria-label="Toggle Theme">
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl w-8 h-8 flex items-center justify-center" aria-label="Menu">
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 py-8 flex flex-col items-center space-y-6 shadow-2xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'} ${darkMode ? 'bg-[#0A1628] border-b border-white/10' : 'bg-white border-b border-black/10'}`}>
        {['About', 'Projects', 'Experience', 'Education', 'Contact'].map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            onClick={() => setIsOpen(false)}
            className="text-lg font-black uppercase tracking-widest hover:text-[#2D9CDB] transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero = ({ darkMode }: { darkMode: boolean }) => (
  <section id="hero" className={`relative min-h-screen flex flex-col justify-center items-center text-center px-6 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-[#0A1628] via-[#1a2744] to-[#0A1628] text-white' : 'bg-gradient-to-br from-[#F8F9FA] via-[#E0E0E0] to-[#F8F9FA] text-[#333333]'}`}>
    <div className="max-w-4xl animate-fade-in-up">
      <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight uppercase">
        Marko Micovski
      </h1>
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#2D9CDB]">
        AI/ML Engineer | Data Scientist | Full-Stack Developer
      </h2>
      <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto font-semibold ${darkMode ? 'text-white/90' : 'text-black/70'}`}>
        Transforming data into intelligent systems. 
        <br className="hidden md:block" />
        Where Data Intelligence Meets Engineering Excellence.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href="#projects" 
          className="w-full sm:w-auto px-10 py-5 bg-[#2D9CDB] text-white font-black rounded-lg hover:bg-[#56CCF2] transition-all transform hover:-translate-y-1 shadow-xl uppercase tracking-widest text-sm text-center"
        >
          View My Work
        </a>
        <a 
          href="https://linkedin.com/in/markomicovski" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`w-full sm:w-auto px-10 py-5 font-black rounded-lg border-2 transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm text-center ${darkMode ? 'border-white/20 hover:bg-white/10 text-white' : 'border-black/20 hover:bg-black/5 text-[#333333]'}`}
        >
          Let's Connect
        </a>
      </div>
    </div>
    <a 
      href="#about" 
      className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#2D9CDB] hover:text-[#56CCF2] transition-colors"
    >
      <i className="fas fa-chevron-down text-3xl"></i>
    </a>
  </section>
);

const About = ({ darkMode }: { darkMode: boolean }) => (
  <section id="about" className={`py-20 md:py-32 px-6 ${darkMode ? 'bg-[#0A1628] text-[#F8F9FA]' : 'bg-white text-[#333333]'}`}>
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-wider relative inline-block">
        About Me
        <span className="block h-1 w-20 bg-[#2D9CDB] mx-auto mt-2 rounded-full"></span>
      </h2>
      <p className="text-lg md:text-xl mb-12 leading-relaxed font-semibold">
        AI/ML Engineer with dual degrees in Computer Science and Software Engineering. Currently pursuing MS in IT Management at Florida Atlantic University. Specialized in building AI-powered systems, data analytics, and scalable full-stack applications.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { icon: 'fa-graduation-cap', label: 'Degrees', value: '3 (Incl. MS)' },
          { icon: 'fa-briefcase', label: 'Experience', value: '3+ Years' },
          { icon: 'fa-code', label: 'Tech Stack', value: 'Python, JS, SQL' },
          { icon: 'fa-language', label: 'Languages', value: '4 Fluent' },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${darkMode ? 'bg-white/5' : 'bg-black/5'}`}>
              <i className={`fas ${stat.icon} text-2xl text-[#2D9CDB]`}></i>
            </div>
            <span className="text-xs uppercase tracking-widest opacity-80 mb-1 font-black">{stat.label}</span>
            <span className="font-black text-lg">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = ({ darkMode }: { darkMode: boolean }) => (
  <section id="projects" className={`py-20 md:py-32 px-6 transition-colors ${darkMode ? 'bg-[#1a2744] text-[#F8F9FA]' : 'bg-[#F0F2F5] text-[#333333]'}`}>
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className={`text-3xl md:text-4xl font-black mb-4 uppercase tracking-wider ${darkMode ? 'text-white' : ''}`}>Featured Projects</h2>
        <div className="h-1 w-24 bg-[#2D9CDB] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className={`group p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 border ${darkMode ? 'bg-[#0A1628] border-white/10 hover:border-[#2D9CDB]' : 'bg-white border-black/5 hover:border-[#2D9CDB]'}`}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${darkMode ? 'bg-[#2D9CDB]/10 group-hover:bg-[#2D9CDB]/20 text-[#2D9CDB]' : 'bg-[#2D9CDB]/10 group-hover:bg-[#2D9CDB]/20 text-[#2D9CDB]'}`}>
              <i className={`fas ${project.icon} text-2xl`}></i>
            </div>
            <h3 className={`text-2xl font-black mb-4 tracking-tight ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>{project.title}</h3>
            <p className={`mb-6 leading-relaxed font-semibold ${darkMode ? 'text-white/90' : 'text-black/70'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-tighter ${darkMode ? 'bg-[#2D9CDB]/20 text-[#56CCF2]' : 'bg-[#2D9CDB]/10 text-[#2D9CDB]'}`}>
                  {t}
                </span>
              ))}
            </div>
            <div className={`flex items-center text-sm font-black border-t pt-4 ${darkMode ? 'border-white/10' : 'border-black/5'}`}>
              <i className="fas fa-chart-line mr-2 text-[#27AE60]"></i>
              <span className="text-[#27AE60]">{project.achievement}</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`ml-auto hover:text-[#2D9CDB] transition-all hover:scale-110 ${darkMode ? 'text-white/60' : 'text-black/40'}`} aria-label="Github">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = ({ darkMode }: { darkMode: boolean }) => (
  <section id="experience" className={`py-20 md:py-32 px-6 transition-colors ${darkMode ? 'bg-[#0A1628] text-[#F8F9FA]' : 'bg-white text-[#333333]'}`}>
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-wider">Professional Journey</h2>
        <div className="h-1 w-24 bg-[#2D9CDB] mx-auto rounded-full"></div>
      </div>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-10 border-l-2 border-[#2D9CDB]/30 hover:border-[#2D9CDB] transition-colors pb-4">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#2D9CDB] border-4 border-[#0A1628] shadow-[0_0_15px_#2D9CDB]"></div>
            <div className="mb-2">
              <h3 className={`text-xl md:text-2xl font-black ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>{exp.title}</h3>
              <p className="text-lg text-[#2D9CDB] font-black">{exp.company} | {exp.location}</p>
              <span className={`text-sm uppercase font-black tracking-widest ${darkMode ? 'text-white/60' : 'text-black/50'}`}>{exp.period}</span>
            </div>
            <ul className="mt-4 space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#2D9CDB] mr-3 mt-1.5 text-xs font-black">▶</span>
                  <p className={`leading-relaxed font-semibold ${darkMode ? 'text-white/90' : 'text-black/80'}`}>{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EducationAndSkills = ({ darkMode }: { darkMode: boolean }) => (
  <section id="education" className={`py-20 md:py-32 px-6 transition-colors ${darkMode ? 'bg-[#1a2744] text-[#F8F9FA]' : 'bg-[#F8F9FA] text-[#333333]'}`}>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h2 className={`text-3xl font-black mb-10 uppercase tracking-wider ${darkMode ? 'text-white' : ''}`}>Academic Background</h2>
        <div className="space-y-8">
          {EDUCATIONS.map((edu, idx) => (
            <div key={idx} className={`p-8 rounded-xl border transition-all hover:border-[#2D9CDB]/50 ${darkMode ? 'bg-[#0A1628] border-white/10 shadow-2xl' : 'bg-white border-black/5 shadow-md'}`}>
              <h3 className={`text-xl font-black mb-1 ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>{edu.degree}</h3>
              <p className="text-[#2D9CDB] font-black text-lg uppercase tracking-tight">{edu.institution}</p>
              <p className={`text-sm mt-1 uppercase tracking-widest font-black ${darkMode ? 'text-[#56CCF2]' : 'text-black/50'}`}>{edu.period}</p>
              {edu.details && <p className={`mt-4 text-sm italic font-semibold ${darkMode ? 'text-white/80' : 'text-black/70'}`}>{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className={`text-3xl font-black mb-10 uppercase tracking-wider ${darkMode ? 'text-white' : ''}`}>Technical Mastery</h2>
        <div className="space-y-10">
          {SKILLS.map((category, idx) => (
            <div key={idx}>
              <h4 className={`text-sm uppercase tracking-[0.25em] font-black mb-5 ${darkMode ? 'text-[#56CCF2]' : 'text-[#2D9CDB]'}`}>{category.name}</h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <div key={skill} className={`px-5 py-2.5 rounded-lg font-black text-sm uppercase transition-all transform hover:scale-105 ${darkMode ? 'bg-white/10 border border-white/20 hover:border-[#2D9CDB] text-white' : 'bg-white border border-black/10 shadow-sm hover:border-[#2D9CDB] text-[#333333]'}`}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={`mt-10 p-8 rounded-xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-[#2D9CDB]/10 border-[#2D9CDB]/30' : 'bg-[#2D9CDB]/5 border-[#2D9CDB]/20 shadow-lg'}`}>
            <h4 className={`font-black mb-3 flex items-center text-lg uppercase tracking-widest ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>
              <i className="fas fa-globe mr-3 text-[#2D9CDB]"></i> Multilingual
            </h4>
            <p className={`text-sm leading-relaxed font-bold ${darkMode ? 'text-white/90' : 'text-black/80'}`}>
              Fluent in English, Macedonian, Serbian. Working proficiency in German.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = ({ darkMode }: { darkMode: boolean }) => (
  <section id="contact" className={`py-20 md:py-32 px-6 text-center transition-colors ${darkMode ? 'bg-[#0A1628] text-[#F8F9FA]' : 'bg-white text-[#333333]'}`}>
    <div className="max-w-3xl mx-auto">
      <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase ${darkMode ? 'text-white' : ''}`}>Let's Connect</h2>
      <p className={`text-lg mb-12 font-semibold ${darkMode ? 'text-white/90' : 'text-black/70'}`}>
        Open to AI/ML Engineering and Data Science opportunities worldwide. 
        <br />
        Looking for a bridge between academic rigor and real-world implementation?
      </p>
      
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        <a href="mailto:markomicovski@gmail.com" className={`p-8 rounded-2xl flex flex-col items-center border transition-all hover:-translate-y-2 ${darkMode ? 'bg-white/5 border-white/10 hover:border-[#2D9CDB] shadow-2xl' : 'bg-[#F8F9FA] border-black/5 hover:border-[#2D9CDB] shadow-lg'}`}>
          <i className="fas fa-envelope text-4xl mb-4 text-[#2D9CDB]"></i>
          <span className={`font-black uppercase tracking-widest text-sm ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>Email</span>
          <span className={`text-xs mt-2 break-all opacity-70 font-bold ${darkMode ? 'text-white' : 'text-black'}`}>markomicovski@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/markomicovski" target="_blank" rel="noopener noreferrer" className={`p-8 rounded-2xl flex flex-col items-center border transition-all hover:-translate-y-2 ${darkMode ? 'bg-white/5 border-white/10 hover:border-[#2D9CDB] shadow-2xl' : 'bg-[#F8F9FA] border-black/5 hover:border-[#2D9CDB] shadow-lg'}`}>
          <i className="fab fa-linkedin text-4xl mb-4 text-[#2D9CDB]"></i>
          <span className={`font-black uppercase tracking-widest text-sm ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>LinkedIn</span>
          <span className={`text-xs mt-2 opacity-70 font-bold ${darkMode ? 'text-white' : 'text-black'}`}>/in/markomicovski</span>
        </a>
        <a href="https://github.com/markomicovski" target="_blank" rel="noopener noreferrer" className={`p-8 rounded-2xl flex flex-col items-center border transition-all hover:-translate-y-2 ${darkMode ? 'bg-white/5 border-white/10 hover:border-[#2D9CDB] shadow-2xl' : 'bg-[#F8F9FA] border-black/5 hover:border-[#2D9CDB] shadow-lg'}`}>
          <i className="fab fa-github text-4xl mb-4 text-[#2D9CDB]"></i>
          <span className={`font-black uppercase tracking-widest text-sm ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>GitHub</span>
          <span className={`text-xs mt-2 opacity-70 font-bold ${darkMode ? 'text-white' : 'text-black'}`}>/markomicovski</span>
        </a>
      </div>

      <a href="./assets/Marko_Micovski_Resume.pdf" download className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#2D9CDB] to-[#56CCF2] text-white font-black rounded-full shadow-2xl hover:scale-110 transition-transform uppercase tracking-widest text-sm">
        <i className="fas fa-file-download mr-3 text-xl"></i>
        Download My Resume
      </a>
    </div>
  </section>
);

const Footer = ({ darkMode }: { darkMode: boolean }) => (
  <footer className={`py-12 px-6 border-t transition-colors ${darkMode ? 'bg-[#0A1628] text-white/60 border-white/10' : 'bg-[#F8F9FA] text-[#333333]/60 border-black/10'}`}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <p className={`font-black text-lg tracking-tighter uppercase mb-1 ${darkMode ? 'text-white' : 'text-[#0A1628]'}`}>Marko Micovski <span className="text-[#2D9CDB]">© 2026</span></p>
        <p className="text-xs font-black uppercase tracking-[0.2em] opacity-50">Built with React, TypeScript & Tailwind</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {['English', 'Macedonian', 'Serbian', 'German'].map(l => (
          <span key={l} className="text-xs uppercase tracking-widest border-x px-3 first:border-l-0 last:border-r-0 border-current font-black opacity-80">
            {l}
          </span>
        ))}
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  return (
    <div className={`transition-colors duration-500 min-h-screen ${darkMode ? 'bg-[#0A1628]' : 'bg-[#F8F9FA]'}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <EducationAndSkills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
