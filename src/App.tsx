import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Download, Mail, Github, Linkedin, Code, Briefcase, User, Award } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'internships', 'contact'];
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
    // In a real application, this would open or download the actual resume
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
                <button
                  onClick={handleResumeClick}
                  className="ml-4 bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center gap-1"
                >
                  <Download size={16} />
                  Resume
                </button>
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
                <button
                  onClick={handleResumeClick}
                  className="w-full text-left mt-4 bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors duration-200 flex items-center gap-2"
                >
                  <Download size={18} />
                  Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full mx-auto mb-8 flex items-center justify-center">
              <User size={48} className="text-white" />
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

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my technical skills and problem-solving abilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack web application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                github: "#",
                demo: "#"
              },
              {
                title: "Task Management App",
                description: "Mobile-responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
                tech: ["Vue.js", "Firebase", "Tailwind CSS"],
                github: "#",
                demo: "#"
              },
              {
                title: "Weather Analytics Dashboard",
                description: "Data visualization dashboard displaying weather patterns and predictions using machine learning algorithms and interactive charts.",
                tech: ["Python", "Django", "Chart.js", "PostgreSQL"],
                github: "#",
                demo: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center gap-1 text-slate-600 hover:text-blue-700 transition-colors duration-200">
                    <Github size={16} />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-1 text-slate-600 hover:text-blue-700 transition-colors duration-200">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I work with.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"]
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python", "Django", "Express.js", "REST APIs", "GraphQL"]
              },
              {
                category: "Database",
                skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
              },
              {
                category: "Tools & Others",
                skills: ["Git", "Docker", "AWS", "Linux", "Agile", "Testing"]
              }
            ].map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-blue-50 text-blue-700 text-center py-2 px-3 rounded-lg text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience & Internships</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My professional journey and the valuable experiences that have shaped my career.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                company: "Tech Innovations Inc.",
                position: "Frontend Developer Intern",
                duration: "Jun 2024 - Aug 2024",
                description: "Developed responsive web components using React and TypeScript. Collaborated with the design team to implement user interfaces and improved application performance by 25%.",
                achievements: ["Built 15+ reusable components", "Optimized loading times", "Mentored junior interns"]
              },
              {
                company: "StartupXYZ",
                position: "Full Stack Developer Intern",
                duration: "Jan 2024 - May 2024",
                description: "Worked on both frontend and backend development using MERN stack. Implemented new features and fixed critical bugs in the production environment.",
                achievements: ["Deployed 5 major features", "Reduced bug reports by 30%", "Implemented CI/CD pipeline"]
              }
            ].map((experience, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{experience.position}</h3>
                    <p className="text-blue-700 font-semibold">{experience.company}</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-2 lg:mt-0">{experience.duration}</span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <span key={achievementIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a 
              href="mailto:john.doe@email.com" 
              className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-colors duration-200 group"
            >
              <Mail size={48} className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-300">john.doe@email.com</p>
            </a>
            
            <a 
              href="https://linkedin.com/in/johndoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-colors duration-200 group"
            >
              <Linkedin size={48} className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-slate-300">linkedin.com/in/johndoe</p>
            </a>
            
            <a 
              href="https://github.com/johndoe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-colors duration-200 group"
            >
              <Github size={48} className="mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-slate-300">github.com/johndoe</p>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-400">
              © 2025 John Doe. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;