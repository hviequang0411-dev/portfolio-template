import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../components/SocialIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';

interface FormState {

  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactDetails = [
    { 
      name: 'Email', 
      value: 'quang.hv.work@gmail.com', 
      href: 'mailto:quang.hv.work@gmail.com', 
      icon: <Mail className="h-5 w-5" />,
      color: 'bg-rose-500/10 border-rose-500/25 text-rose-600 dark:text-rose-400 group-hover:bg-rose-500 group-hover:text-white',
      hover: 'hover:border-rose-500/40'
    },
    { 
      name: 'Phone', 
      value: '+84 987 654 321', 
      href: 'tel:+84987654321', 
      icon: <Phone className="h-5 w-5" />,
      color: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white',
      hover: 'hover:border-emerald-500/40'
    },
    { 
      name: 'GitHub', 
      value: 'github.com/hoangvietquang', 
      href: 'https://github.com/hoangvietquang', 
      icon: <GithubIcon className="h-5 w-5" />,
      color: 'bg-zinc-500/10 border-zinc-500/25 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200 group-hover:text-white dark:group-hover:text-zinc-900',
      hover: 'hover:border-zinc-500/40'
    },
    { 
      name: 'LinkedIn', 
      value: 'linkedin.com/in/hoangvietquang', 
      href: 'https://linkedin.com/in/hoangvietquang', 
      icon: <LinkedinIcon className="h-5 w-5" />,
      color: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white',
      hover: 'hover:border-cyan-500/40'
    },
    { 
      name: 'Facebook', 
      value: 'facebook.com/hoangvietquang', 
      href: 'https://facebook.com/hoangvietquang', 
      icon: <FacebookIcon className="h-5 w-5" />,
      color: 'bg-blue-500/10 border-blue-500/25 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white',
      hover: 'hover:border-blue-500/40'
    },
  ];


  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Mock API call to submit form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
          Get in Touch
        </span>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading"
        >
          Let's Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
        >
          Have an internship opportunity, engineering project, or question? Send me a message or connect through my professional channels.
        </motion.p>
      </div>

      {/* Grid: Form + Info cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
        {/* Info Column */}
        <div className="lg:col-span-1 space-y-3.5">
          {contactDetails.map((detail, idx) => (
            <motion.a
              key={detail.name}
              href={detail.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 group transition-all duration-300 ${detail.hover}`}
            >
              <div className={`p-3 rounded-xl border transition-colors duration-300 ${detail.color}`}>
                {detail.icon}
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {detail.name}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5 truncate max-w-[180px] sm:max-w-xs md:max-w-md">
                  {detail.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 glass-card rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-heading">
            Send a Direct Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-400/20'
                      : 'border-zinc-200 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-400'
                  }`}
                />
                {errors.name && (
                  <span className="text-xs font-medium text-red-500 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-400/20'
                      : 'border-zinc-200 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-400'
                  }`}
                />
                {errors.email && (
                  <span className="text-xs font-medium text-red-500 dark:text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Software Engineer Role Opportunity"
                className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all ${
                  errors.subject
                    ? 'border-red-400 focus:ring-red-400/20'
                    : 'border-zinc-200 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-400'
                }`}
              />
              {errors.subject && (
                <span className="text-xs font-medium text-red-500 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.subject}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Write your message here..."
                className={`w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 transition-all resize-none ${
                  errors.message
                    ? 'border-red-400 focus:ring-red-400/20'
                    : 'border-zinc-200 dark:border-zinc-800 focus:border-orange-500 dark:focus:border-orange-400'
                }`}
              />
              {errors.message && (
                <span className="text-xs font-medium text-red-500 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.message}
                </span>
              )}
            </div>

            {/* Alert Status */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-55/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50 text-sm font-medium"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <span>Your message has been sent successfully! I will get back to you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              icon={
                isSubmitting ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )
              }
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
