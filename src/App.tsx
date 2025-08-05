import React, { useState, useEffect } from 'react';
import profileImage from './assets/profile.jpg';
import { Menu, X, ExternalLink, Download, Mail, Github, Linkedin, Code, Briefcase, User, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'internships', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeClick = () => {
    window.open('#resume', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-700">John Doe</h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'about', label: 'About', icon: User },
                  { id: 'projects', label: 'Projects', icon: Code },
                  { id: 'skills', label: 'Skills', icon: Award },
                  { id: 'internships', label: 'Experience', icon: Briefcase },
                  { id: 'resume', label: 'Resume', icon: Download },
                  { id: 'contact', label: 'Contact', icon: Mail }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                      activeSection === id
                        ? 'bg-blue-700 text-white'
                        : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-700 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {[
                  { id: 'about', label: 'About', icon: User },
                  { id: 'projects', label: 'Projects', icon: Code },
                  { id: 'skills', label: 'Skills', icon: Award },
                  { id: 'internships', label: 'Experience', icon: Briefcase },
                  { id: 'resume', label: 'Resume', icon: Download },
                  { id: 'contact', label: 'Contact', icon: Mail }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center gap-2 ${
                      activeSection === id
                        ? 'bg-blue-700 text-white'
                        : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-40 h-40 mx-auto mb-8 relative group">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center">
                <img 
                  src={profileImage}
                  alt="John Doe - Professional Profile" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="text-blue-700">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate Computer Science student seeking opportunities to apply my technical skills 
              and contribute to innovative projects. I love building solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The rest of your sections (Projects, Skills, Experience, Resume, Contact) remain unchanged */}
      {/* ... */}
    </div>
  );
}

export default App;
