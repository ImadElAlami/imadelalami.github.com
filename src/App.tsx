import { BrowserRouter, HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Zap, 
  Target, 
  ChevronRight, 
  Download,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  User,
  Phone,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/portfolio' },
    { name: 'ERP', path: '/About_Erp' },
    { name: 'Landing page', path: '/About_Landing' },
    { name: 'Portfolio Services', path: '/About_Portfolio' },

  ];

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-brand-dark flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white">
            IE
          </div>
          <span className="hidden sm:block">Imad El Alami</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-all duration-300 hover:text-brand-blue relative group ${
                location.pathname === link.path ? 'text-brand-blue' : 'text-brand-dark/70'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="btn-primary py-2 text-sm"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-brand-blue/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-brand-blue' : 'text-brand-dark/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Mail className="text-brand-blue" />, label: 'Email', value: 'expertimad@gmail.com', link: 'mailto:expertimad@gmail.com', isblank: '_self' },
              { icon: <Phone className="text-brand-blue" />, label: 'Phone', value: '+212656918204', link: 'tel:212656918204', isblank: '_self' },
              { icon: <MapPin className="text-brand-blue" />, label: 'Location', value: 'Salé-Rabat, Morocco', link: 'https://maps.app.goo.gl/YMRUaPtptDDoAgJA7', isblank: '_blank' },
              { icon: <Linkedin className="text-brand-blue" />, label: 'LinkedIn', value: 'Imad El Alami', link: 'https://www.linkedin.com/in/imad-el-alami/', isblank: '_blank'},
              { icon: <Github className="text-brand-blue" />, label: 'GitHub', value: 'ImadElAlami', link: 'https://github.com/ImadElAlami', isblank: '_blank' },
            ].map((item, i) => (
              <a href={item.link} target={item.isblank}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgb(0 165 236 / 0.1), 0 8px 10px -6px rgb(0 165 236 / 0.1)"
                }}
                className="card-base p-8 flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <div className="text-brand-blue font-bold text-sm mb-1 uppercase tracking-wider">{item.label}</div>
                  <div className="text-brand-dark font-medium break-all">{item.value}</div>
                </div>
              </motion.div></a>
            ))}
          </div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-base p-10 lg:p-12"
          >
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <form className="space-y-6" action="https://formspree.io/f/xjgarrvn" method="POST">
              <div>
                <label className="block text-sm font-bold mb-2 text-brand-dark/70">Name</label> 
                <input 
                  required
                  type="text" 
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-transparent focus:border-brand-blue outline-none transition-all" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-brand-dark/70">Email</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-transparent focus:border-brand-blue outline-none transition-all" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-brand-dark/70">Subject</label>
                <input 
                  required
                  type="text" 
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-transparent focus:border-brand-blue outline-none transition-all" 
                  placeholder="What's this about?" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-brand-dark/70">Message</label>
                <textarea 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-transparent focus:border-brand-blue outline-none transition-all h-32" 
                  name="message"
                  placeholder="Your message here..."
                ></textarea>
                
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full py-4 text-lg font-bold shadow-brand-blue/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="mt-12 text-center text-brand-dark/40 text-sm">
          Every project starts with an idea... let's talk about yours!
        </div>
        
      </div>
      
    </section>
  );
};

const About_Erp = () => {
  return (
    
      <section className="section-padding bg-white text-brand-dark overflow-hidden transition-colors duration-300">
        <header className="bg-brand-blue/5 text-brand-dark py-24 px-6 text-center relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Enterprise Resource Planning (ERP) pages
          </motion.h1>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Easy to manage websites made to have a smooth experience with your Enterprise.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-royal rounded-full blur-3xl" />
        </div>
      </header>
<br /><br /><br />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/ERP.png" 
              alt="About ERP" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-white">10+</div>
              <div className="text-sm uppercase tracking-widest text-white/80">Pages.</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">ERP / Business Systems</h2>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              ERP or business systems are more advanced projects designed to help companies manage internal processes such as data management, dashboards, client systems, or administrative tools.
            </p>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              These platforms are typically larger and more complex, with multiple pages and features tailored to the business workflow.
            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              ERP systems usually include 10+ pages and may involve dashboards, data management interfaces, and custom functionality.
            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              Due to their complexity, ERP projects include up to 6 months of free support after delivery, allowing time to ensure everything runs smoothly and any adjustments can be made if necessary.
            </p>
            <ul className="space-y-4 mb-10">
              {['Built for internal business management', 'Custom dashboards, administrative tools and data management interfaces', 'Designed for long-term business use'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-brand-dark/90">{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={20} />
                  </div>
                  <span className="text-brand-dark/90">2 months of free support included</span>
                </li>
              
            </ul>
            <Link to="/portfolio" className="btn-primary inline-block">View Full Resume</Link>
          </motion.div>
        </div>
        <ContactSection />
      </section>
      
  );
};
const About_Landing = () => {
  return (
    
      <section className="section-padding bg-white text-brand-dark overflow-hidden transition-colors duration-300">
        <header className="bg-brand-blue/5 text-brand-dark py-24 px-6 text-center relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Landing Page
          </motion.h1>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            High-converting landing pages for marketing campaigns.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-royal rounded-full blur-3xl" />
        </div>
      </header>
<br /><br /><br />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/Landing_page.png" 
              alt="About Landing" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-white">2-5</div>
              <div className="text-sm uppercase tracking-widest text-white/80">Pages.</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Landing Pages</h2>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              Landing pages are designed for marketing campaigns, product launches, or business promotions. Their main goal is to convert visitors into customers or leads.            </p>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              These pages focus on clear messaging, strong visual design, and structured content that guides the visitor toward a specific action such as contacting you, signing up, or purchasing a service.            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              Landing page projects usually include 2–5 pages, depending on the needs of the campaign.            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              For landing pages, I provide 3 to 4 months of free support after the project is completed.            </p>
            <ul className="space-y-4 mb-10">
              {['Designed for marketing campaigns and promotions', 'Focused on converting visitors into leads or customers', 'Optimized layout for user engagement'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-brand-dark/90">{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={20} />
                  </div>
                  <span className="text-brand-dark/90">3–4 months of free support included</span>
                </li>
            </ul>
            <Link to="/portfolio" className="btn-primary inline-block">View Full Resume</Link>
          </motion.div>
        </div>
        <ContactSection />
      </section>
  );
};
const About_Portfolio = () => {
  return (
      <section className="section-padding bg-white text-brand-dark overflow-hidden transition-colors duration-300">
        <header className="bg-brand-blue/5 text-brand-dark py-24 px-6 text-center relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Portfolio Page
          </motion.h1>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            Professional websites tailored to your identity.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-royal rounded-full blur-3xl" />
        </div>
      </header>
<br /><br /><br />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/Portfolio.png" 
              alt="About Portfolio" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-white">1-2</div>
              <div className="text-sm uppercase tracking-widest text-white/80">Pages.</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Portfolio Website</h2>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              Portfolio websites are ideal for individuals who want to present their work, skills, or services in a professional and clean way.
            </p>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              These websites are usually simple and focused on presentation, including sections such as projects, personal information, contact details, and sometimes a blog or gallery.
            </p>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              Portfolio projects typically contain 1–2 pages, designed to highlight your work while keeping the experience simple and fast.
            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              After delivery, portfolio websites include 2 months of free support, which covers small updates, fixes, or adjustments if needed.
            </p>
            <ul className="space-y-4 mb-10">
              {['Simple and fast user experience', 'Mobile responsive design  ', 'Ideal for personal portfolios and professional profiles', 'Designed to showcase projects, skills, or services'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-brand-dark/90">{item}</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={20} />
                  </div>
                  <span className="text-brand-dark/90">2 months of free support included</span>
                </li>
            </ul>
            <Link to="/portfolio" className="btn-primary inline-block">View Full Resume</Link>
          </motion.div>
        </div>
        <ContactSection />
      </section>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-white py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="text-2xl font-bold mb-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white text-base">
            IE
          </div>
          Imad El Alami
        </div>
        <p className="text-white/60 max-w-xs">
          Crafting digital experiences with precision and passion. Let's build something amazing together.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-white/60">
          <li><Link to="/" className="hover:text-brand-light transition-colors">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-brand-light transition-colors">Portfolio</Link></li>
          <li><a href="#contact" className="hover:text-brand-light transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-6">Connect</h4>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
      © {new Date().getFullYear()} Imad El Alami. All rights reserved.
    </div>
  </footer>
);

// --- Pages ---

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="section-padding min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Creative Developer & Designer
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-brand-dark leading-tight mb-6"
            >
              Building Digital <br />
              <span className="text-brand-blue">Masterpieces</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-brand-dark/70 mb-10 max-w-lg leading-relaxed"
            >
              Hi, I'm Imad. I specialize in creating high-performance, visually stunning web applications that solve real-world problems. <br />
              A passionate full-stack developer with a strong interest in web and mobile technologies.

            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/portfolio" className="btn-primary flex items-center gap-2">
                View Portfolio <ChevronRight size={18} />
              </Link>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </motion.div>
          </div>
          <div className="relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-[500px] h-[500px] bg-brand-blue/5 rounded-full absolute -top-10 -right-10" 
              />
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-[400px] h-[400px] bg-brand-royal/10 rounded-full absolute top-20 right-20" 
              />
              <motion.img 
                whileHover={{ scale: 1.02, rotate: -1 }}
                src="https://picsum.photos/seed/tech/800/800" 
                alt="Abstract Tech" 
                className="rounded-3xl shadow-2xl relative z-20 w-full h-auto object-cover border-8 border-white transition-colors duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding bg-brand-dark/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Services & Featured Work</h2>
            <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: 'Enterprise Resource Planning (ERP)', desc: 'Easy to manage websites made to have a smooth experience with your Enterprise.', desc2:'10+ pages', pic: '/ERP.png', example: '/About_Erp'},
                { title: 'Landing Pages', desc: 'High-converting landing pages for marketing campaigns.', desc2:'2-5 pages', pic: '/Landing_page.png', example: '/About_Landing'},
                { title: 'Portfolio Page', desc: 'Professional websites tailored to your identity.', desc2:'1-2 pages',pic: '/Portfolio.png', example: '/About_Portfolio'},
              ].map((project, i) => (
                
            // {[1, 2, 3].map((i) => (
            
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-brand-blue/5"
              >
                <div className="overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={project.pic} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-brand-dark/60 text-sm mb-6">
                    {project.desc}
                  </p>
                  <p className="text-brand-dark/60 text-sm mb-6">
                    {project.desc2}
                  </p>
                  <Link to={project.example} className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <br /><br />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">General Information</h2>
            <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Hosting</h2>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              All websites are delivered fully functional and ready to go live. I assist with the deployment process and make sure everything works correctly before the final delivery.
            </p>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              To ensure transparency and full ownership, the domain and hosting are registered directly by the client. This means you keep complete control over your website, your files, and your hosting provider.
            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              The domain name requires a yearly renewal, which is handled directly by you through your hosting provider. Hosting plans typically range between $30 and $120 per year, depending on the provider and features.
            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              Payment for development can be made through PayPal or bank transfer (RIB). For larger projects, payment may be divided into two parts: one payment to start the project and the remaining balance after completion.
            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              After delivery, I provide a free support period depending on the type of project. During this time I can assist with minor fixes, small adjustments, and guidance if needed.
            </p>
            <ul className="space-y-4 mb-10">
              {['You own the domain and hosting account', 'Payment methods: PayPal or Bank Transfer (RIB)', 'Free support included after project delivery (includes minor fixes and small adjustments)' ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-brand-dark/90">{item}</span>
                </li>
              ))}
            </ul>
            <div class="flex gap-6">
              <Link to="/About_Erp" className="btn-primary flex-1 text-center">View erp</Link>
              <Link to="/About_Landing" className="btn-primary flex-1 text-center">View landing</Link>
              <Link to="/About_Portfolio" className="btn-primary flex-1 text-center">View portfolio</Link>
            </div>

            {/* <Link to="/About_Erp" className="btn-primary inline-block mr-8">View erp</Link>
            <Link to="/About_Landing" className="btn-primary inline-block mr-8">View landing</Link>
            <Link to="/About_Portfolio" className="btn-primary inline-block">View portfolio</Link> */}

            
          </motion.div>
          </div>
        </div>
      </section>

      {/* Skills / Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code2 />, title: 'Web Development', desc: 'Building scalable, high-performance web applications using modern frameworks.' },
              { icon: <Palette />, title: 'UI/UX Design', desc: 'Crafting intuitive and visually appealing user interfaces with a focus on experience.' },
              { icon: <Target />, title: 'Problem Solving', desc: 'Analyzing complex challenges and delivering efficient, elegant technical solutions.' },
              { icon: <Zap />, title: 'Optimization', desc: 'Enhancing application speed and efficiency for the best possible user performance.' }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: '#00A5EC' }}
                className="p-8 rounded-2xl bg-white border border-brand-blue/10 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <p className="text-brand-dark/60 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white text-brand-dark overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/portrait/600/600" 
              alt="Imad El Alami" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-white">2+</div>
              <div className="text-sm uppercase tracking-widest text-white/80">Years Exp.</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              I am a passionate developer with a deep love for clean code and beautiful design. My journey started over 2 years ago, and since then, I've worked with startups and global brands to bring their visions to life.
            </p>
            <p className="text-brand-dark/80 text-lg mb-6 leading-relaxed">
              I specialize in developing both frontend and backend solutions, utilizing modern technologies such as php, laravel, wordpress, js, Django, Json, and PL/SQL. My technical expertise spans across the full development stack, allowing me to build comprehensive and efficient web applications.
            </p>
            <p className="text-brand-dark/80 text-lg mb-10 leading-relaxed">
              My practical experience includes creating PHP websites workflows with Xampp (and cPanel), building internal tools, and designing responsive, user-centric applications. I'm passionate about creating seamless user experiences while ensuring robust backend functionality.
            </p>
            <ul className="space-y-4 mb-10">
              {['Satisfying UI/UX designs', 'Full-stack development expertise', 'Performance optimization specialist'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-brand-dark/90">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/portfolio" className="btn-primary inline-block">View Full Resume</Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="section-padding bg-brand-dark/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">What Clients Say</h2>
            <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechFlow', quote: 'Imad delivered a product that exceeded our expectations. The attention to detail is unmatched.' },
              { name: 'Michael Chen', role: 'Product Manager, Innovate', quote: 'Working with Imad was a breeze. He understands both the technical and business requirements perfectly.' },
              { name: 'Emma Williams', role: 'Founder, CreativeCo', quote: 'The UI/UX design Imad created for our app has significantly improved our user retention rates.' }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-blue/5 italic"
              >
                <p className="text-brand-dark/70 mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-full" />
                  <div>
                    <div className="font-bold text-brand-dark">{t.name}</div>
                    <div className="text-xs text-brand-blue uppercase font-bold tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">My Process</h2>
            <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and project requirements.' },
              { step: '02', title: 'Design', desc: 'Creating wireframes and high-fidelity prototypes for review.' },
              { step: '03', title: 'Development', desc: 'Building the solution with clean, efficient, and scalable code.' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support for your success.' }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-black text-brand-blue/10 absolute -top-4 -left-4">{p.step}</div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                  <p className="text-brand-dark/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-dark/5 min-h-screen transition-colors duration-300"
    >
      <header className="bg-brand-blue/5 text-brand-dark py-24 px-6 text-center relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Portfolio & Resume
          </motion.h1>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
            A detailed look at my professional journey, skills, and the projects I've brought to life.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-blue rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-royal rounded-full blur-3xl" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Sidebar Info */}
        <div className="lg:col-span-1 space-y-12">
          {/* About Me */}
          <section className="card-base p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <User className="text-brand-blue" /> About Me
            </h2>
            <div className="mb-6 rounded-2xl overflow-hidden">
              <img 
                src="/DSC_0053.JPG"
                alt="About Me Filler" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-brand-dark/70 leading-relaxed mb-6">
              I pursued a degree in Computer Science. My academic journey has equipped me with a strong foundation in both theoretical and practical aspects of computer science.
            </p>
            <button  onClick={() => {
              const link = document.createElement("a");
              link.href = "/Imad El Alami CVDesign eng.pdf";
              link.download = "Imad El Alami CVDesign eng.pdf";
              link.click();
            }}
            
            className="btn-primary w-full flex items-center justify-center gap-2">
              <Download size={18} /> Download english CV
            </button>
            <br />
            <button onClick={() => {
              const link = document.createElement("a");
              link.href = "/Imad El Alami CVDesign fr.pdf";
              link.download = "Imad El Alami CVDesign fr.pdf";
              link.click();
            }}
            
            className="btn-primary w-full flex items-center justify-center gap-2">
              <Download size={18} /> Download french CV
            </button>
          </section>

          {/* Education */}
          <section className="card-base p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-brand-blue" /> Education
            </h2>
            <div className="space-y-8">
              {[
                { degree: 'MASTERS in Computer Science', school: 'Ecole Supérieur du Commerce et Management (ESCM)', abr: 'escm logo', date: '2022 - 2024', logo:'/escm logo.png' },
                { degree: 'MACHELOR in Web Developping', school: 'Institut de Management & Business Technology (IMBT)', abr: 'imbt logo', date: '2019 - 2022', logo:'/imbt logo.png' }
              ].map((edu, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/5 rounded-lg border border-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    {/* Filler square for logo */}
                    <div className="w-6 h-6 bg-brand-blue/20 rounded group-hover:scale-110 transition-transform">
                    <img 
                      src={edu.logo}
                      alt={edu.abr}
                    />
                    </div> 

                  </div>
                  <div>
                    <div className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{edu.degree}</div>
                    <div className="text-brand-blue text-sm font-medium">{edu.school}</div>
                    <div className="text-brand-dark/70 text-xs mt-1">{edu.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="card-base p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-brand-blue" /> Technical Skills
            </h2>
            <div className="space-y-6">
              {[
                { name: 'PHP / Laravel', level: 85 },
                { name: 'SQL', level: 85 },
                { name: 'Front-End', level: 75 },
                { name: 'UI/UX Design', level: 80 },
                { name: 'JavaScript', level: 70 },
                { name: 'Tailwind CSS', level: 80 },
                { name: 'Python', level: 70 },
                { name: 'Wordpress', level: 75 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-bold mb-2 text-brand-dark/80">
                    <span>{skill.name}</span>
                    <span className="text-brand-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-brand-dark/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-brand-blue"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {['Git', 'Docker', 'cPanel', 'phpMyAdmin', 'MySQL', 'PostgreSQL','Power BI'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-brand-blue/5 text-brand-blue text-xs font-bold rounded-full border border-brand-blue/10">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Experience */}
          <section className="card-base p-10">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Briefcase className="text-brand-blue" /> Work Experience
            </h2>
            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-blue/10">
              {[
                
                {
                  title: 'Full Stack Senior Developer (PHP/python) - iClinika',
                  company: '4DBC',
                  date: '2024 - Now',
                  desc: 'Leading a team of 15+ developers in creating high-end digital experiences. Developed and maintained scalable web applications from scratch related to online medical care. Optimized database queries. Creating and analysing Databses using UML diagrams'
                },
                {
                  title: 'Wordpress Developer',
                  company: '4DBC',
                  date: '2025 April - November',
                  desc: 'Back-end snippet scripts, Plugin maintenance, indexing and SEO optimization and Content management for multiple webpsites at the same time.'
                },
                {
                  title: 'Internship - Web developemt',
                  company: '4DBC',
                  date: '2023 Summer',
                  desc: 'Contributed to the first concept of iClinika.'
                },
                {
                  title: 'Internship - Web developemt',
                  company: 'PROWED-MEDIA .S.A.R.L',
                  date: '2022 Summer',
                  desc: 'Back-end snippet scripts, Plugin maintenance, indexing and SEO optimization and Content management for multiple webpsites at the same time.'
                },
                {
                  title: 'Internship - Junior Web Designer',
                  company: 'PROWED-MEDIA .S.A.R.L',
                  date: '2021 Summer',
                  desc: 'Collaborated with senior designers to create responsive web layouts and interactive prototypes. Mastered the fundamentals of modern web standards.'
                }
              ].map((job, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-2 w-6 h-6 bg-white border-4 border-brand-blue rounded-full z-10" />

                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-dark">{job.title}</h3>
                    <span className="text-brand-blue font-bold text-sm bg-brand-blue/5 px-3 py-1 rounded-lg">{job.date}</span>
                  </div>
                  
                  <div className="text-brand-dark/70 font-bold text-sm mb-4 uppercase tracking-widest">{job.company}</div>
                  <p className="text-brand-dark/80 leading-relaxed">{job.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="card-base p-10">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Code2 className="text-brand-blue" /> Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'E-Commerce Platform', tech: 'Next.js, Stripe, Tailwind', img: 'https://picsum.photos/seed/shop/600/400' },
                { title: 'SaaS Dashboard', tech: 'React, Chart.js, Firebase', img: 'https://picsum.photos/seed/dash/600/400' },
                { title: 'Social Media App', tech: 'React Native, Node.js', img: 'https://picsum.photos/seed/social/600/400' },
                { title: 'Portfolio Template', tech: 'HTML, CSS, JS', img: 'https://picsum.photos/seed/port/600/400' }
              ].map((project, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                  <p className="text-brand-dark/70 text-xs font-bold uppercase tracking-widest">{project.tech}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
      
      <ContactSection />
    </motion.div>
  );
};

// --- App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/About_Erp" element={<About_Erp />} />
              <Route path="/About_Landing" element={<About_Landing />} />
              <Route path="/About_Portfolio" element={<About_Portfolio />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
