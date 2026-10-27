import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:quang.hv.work@gmail.com' },
    { name: 'Phone', icon: <Phone className="h-5 w-5" />, href: 'tel:+84987654321' }, // Placeholder phone
    { name: 'GitHub', icon: <GithubIcon className="h-5 w-5" />, href: 'https://github.com/hoangvietquang' }, // Placeholder github
    { name: 'LinkedIn', icon: <LinkedinIcon className="h-5 w-5" />, href: 'https://linkedin.com/in/hoangvietquang' }, // Placeholder linkedin
    { name: 'Facebook', icon: <FacebookIcon className="h-5 w-5" />, href: 'https://facebook.com/hoangvietquang' }, // Placeholder facebook
  ];


  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Intro */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2.5 text-zinc-900 dark:text-white font-bold text-2xl font-heading mb-3">
              <div className="p-1.5 rounded-lg bg-orange-500 text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <span>Hoang Viet Quang<span className="text-orange-500">.</span></span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs leading-relaxed">
              Software Engineer specialized in building high-performance, resilient Java Backend architectures, distributed services, and sleek modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-widest uppercase mb-4 font-mono">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-medium text-zinc-500 hover:text-orange-500 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 tracking-widest uppercase mb-4 font-mono">
              Connect With Me
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-100 hover:bg-orange-500 hover:text-white dark:bg-zinc-900 dark:hover:bg-orange-500 dark:hover:text-white rounded-xl text-zinc-500 dark:text-zinc-400 transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {currentYear} Hoang Viet Quang. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Designed & Developed with React, Tailwind, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
