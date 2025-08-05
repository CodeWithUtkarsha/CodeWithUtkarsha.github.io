import React, { useState, useEffect } from 'react';
import profileImage from './profile.jpg';
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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-700">Utkarsha Salve</h1>
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
                  alt="Utkarsha Salve - Professional Profile" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Hi, I'm <span className="text-blue-700">Utkarsha Salve</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Enthusiastic about turning ideas into impactful applications, I thrive on building intuitive, performance-driven solutions that enhance user experience and drive innovation.
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
                title: "Campus Resolve Portal (CRP)",
                description: "AI-powered grievance redressal platform built with MERN stack. Enables students to submit complaints via text, voice, or video with real-time tracking and AI-driven spam filtering.",
                tech: ["MERN Stack","HTML","CSS","JAVASCRIPT"],
                github: "https://github.com/CodeWithUtkarsha/Campus-Resolve-Portal-CRP-.git",
                demo: "https://campus-resolve-portal-af34wp151-newp.vercel.app/"
              },
              {
                title: "TradeTrack - Trading Journal UI",
                description: "A performance-driven React UI inspired by TradeZella, designed to log trades, visualize analytics like P&L and win rates, and track trading strategy effectiveness with clean, modular components.",
                tech: ["MERN Stack","HTML","CSS","JAVASCRIPT"],
                github: "https://github.com/CodeWithUtkarsha/TradeTrack",
                demo: "#"
              },
              {
                title: "BINGE-IT - Movie Ticket Booking System",
                description: "A frontend web application for online movie ticket booking with real-time seat selection, payment interface mockup, and user-friendly navigation.",
                tech: ["HTML", "CSS", "JavaScript"],
                github: "https://github.com/CodeWithUtkarsha/BINGE-IT",
                demo: "https://campus-resolve-portal-af34wp151-newp.vercel.app"
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
              Technologies and tools I'm proficient in.
            </p>
          </div>
          
          {/* Programming Languages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["JavaScript", "Python", "Java", "C++", "SQL"].map((skill, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    {skill}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Frontend Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["React.js", "HTML", "CSS", "Javascript","Tailwind CSS"].map((skill, index) => (
                <div key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium hover:bg-green-200 transition-colors duration-200 border border-green-200">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Backend & Database</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Node.js", "Express.js",  "MongoDB", "MySQL", "Firebase", "REST APIs"].map((skill, index) => (
                <div key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-medium hover:bg-purple-200 transition-colors duration-200 border border-purple-200">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "AWS", "Linux", "VS Code", "Figma", "Postman", "Jest", "Webpack", "Vite"].map((skill, index) => (
                <div key={index} className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium hover:bg-orange-200 transition-colors duration-200 border border-orange-200">
                  {skill}
                </div>
              ))}
            </div>
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
                company: "SmartBridge & AICTE",
                position: "Salesforce Developer Intern",
                duration: "May 2025 – Jul 2025",
                description: "Participated in a virtual internship focused on CRM development using Salesforce tools. Completed live bootcamps, Trailhead modules, and hands-on projects to enhance business process automation.",
                achievements: [
                  "Earned multiple Salesforce Superbadges",
                  "Improved operational workflows by 10–20%",
                  "Built real-world CRM applications"
                ]
              },
              {
                company: "AICTE-Edu Skills",
                position: "AWS Data Engineering Intern",
                duration: "Apr 2025 – Jun 2025",
                description: "Worked on cloud data workflows and architecture optimization using AWS tools. Focused on enhancing storage performance and efficient querying for large datasets.",
                achievements: [
                  "Increased query performance by 30%",
                  "Streamlined cloud storage architecture",
                  "Completed AWS Labs & virtual training modules"
                ]
              },
              {
                company: "AICTE-Edu Skills",
                position: "Android Developer Intern",
                duration: "Jan 2025 – Mar 2025",
                description: "Developed Android applications using Kotlin and Android Studio. Focused on intuitive UI/UX, integrated APIs, and performance optimizations across multiple devices.",
                achievements: [
                  "Built 3+ mobile app prototypes",
                  "Integrated REST APIs for dynamic data",
                  "Enhanced UI performance and responsiveness"
                ]
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

      {/* Resume Section */}
      <section id="resume" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Resume</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Take a detailed look at my professional journey, technical expertise, and achievements. 
                Download or view my complete resume to learn more about my qualifications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
>
  <Download size={20} className="group-hover:animate-bounce" />
  View Resume
</a>


              <div className="text-slate-500 text-sm">
                <span className="hidden sm:inline">•</span>
                <span className="sm:ml-2">Updated August 2025</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-500 text-sm">
                💡 <strong>Quick Tip:</strong> My resume includes detailed project descriptions, technical achievements, and contact information.
              </p>
            </div>
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
          
          <div className="flex justify-center items-center gap-8 mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=utkarsha.v.salve@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl min-w-[120px]"
            >
              <div className="w-12 h-12 mb-3 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-400 transition-colors duration-300">
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors duration-300">Gmail</h3>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/utkarsha-salve-253b95259/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl min-w-[120px]"
            >
              <div className="w-12 h-12 mb-3 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <Linkedin size={20} className="text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">LinkedIn</h3>
            </a>
            
            <a 
              href="https://github.com/CodeWithUtkarsha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl min-w-[120px]"
            >
              <div className="w-12 h-12 mb-3 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                <Github size={20} className="text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">GitHub</h3>
            </a>
          </div>
          
          <div className="text-center mt-12">
            


            <p class="copyright">
            <span class="graduation-cap">🎓</span>
            © 2022-2026 Utkarsha Salve | 
            <span class="university">B.Tech CSBS @ GITAM University</span>
        </p>
        
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
