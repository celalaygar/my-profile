'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useI18n } from '@/lib/i18n';
import { contactLinks } from '@/data';
import { Phone, Mail, Globe, Linkedin, Github, BookOpen, Play, Code2, Heart, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

// Map contact titles to appropriate icons
function getContactIcon(title: string) {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('call') || lowerTitle.includes('phone')) return Phone;
  if (lowerTitle.includes('email')) return Mail;
  if (lowerTitle.includes('website')) return Globe;
  if (lowerTitle.includes('linkedin')) return Linkedin;
  if (lowerTitle.includes('github')) return Github;
  if (lowerTitle.includes('medium')) return BookOpen;
  if (lowerTitle.includes('youtube')) return Play;
  if (lowerTitle.includes('hackerrank')) return Code2;
  if (lowerTitle.includes('stackoverflow')) return Code2;
  if (lowerTitle.includes('tiktok')) return Heart;
  return ExternalLink;
}

export default function ContactPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Links Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">{t('contact.quickLinks')}</h2>
              <div className="space-y-4">
                {contactLinks.map((link) => {
                  const IconComponent = getContactIcon(link.title);
                  const displayText = link.url.includes('tel:') 
                    ? link.url.replace('tel:', '')
                    : link.url.includes('mailto:')
                    ? link.url.replace('mailto:', '')
                    : link.title;

                  return (
                    <a
                      key={link.title}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : undefined}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group relative flex items-center gap-4 p-4 bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10"
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon */}
                      <div className="relative p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 text-[#7cff92]" />
                      </div>

                      {/* Content */}
                      <div className="relative flex-1">
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">{link.title}</p>
                        <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-1">
                          {displayText}
                        </p>
                      </div>

                      {/* Copy/External Link Button */}
                      <button
                        onClick={(e) => {
                          if (!link.url.startsWith('http') && !link.url.startsWith('tel:') && !link.url.startsWith('mailto:')) {
                            return;
                          }
                          e.preventDefault();
                          if (link.url.includes('tel:') || link.url.includes('mailto:')) {
                            handleCopy(displayText, link.title);
                          }
                        }}
                        className="relative p-2 text-[#7cff92]/60 group-hover:text-[#7cff92] transition-all duration-200 opacity-0 group-hover:opacity-100"
                      >
                        {copied === link.title ? (
                          <CheckCircle2 size={20} />
                        ) : link.url.startsWith('http') ? (
                          <ExternalLink size={20} />
                        ) : (
                          <Copy size={20} />
                        )}
                      </button>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">{t('contact.sendMessage')}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t('contact.name')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#7cff92]/50 focus:ring-1 focus:ring-[#7cff92]/20 transition-all duration-200"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t('contact.email')}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#7cff92]/50 focus:ring-1 focus:ring-[#7cff92]/20 transition-all duration-200"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t('contact.message')}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#7cff92]/50 focus:ring-1 focus:ring-[#7cff92]/20 transition-all duration-200 resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group"
                  disabled={submitted}
                >
                  <span className="flex items-center justify-center gap-2">
                    {submitted ? (
                      <>
                        <CheckCircle2 size={20} />
                        {t('contact.success')}
                      </>
                    ) : (
                      <>
                        <Mail size={20} />
                        {t('contact.send')}
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{contactLinks.length}</p>
                <p className="text-sm text-muted-foreground">{t('contact.stats.contactMethods')}</p>
              </div>
              <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">{t('contact.stats.alwaysAvailable')}</p>
              </div>
              <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{t('contact.stats.fast')}</p>
                <p className="text-sm text-muted-foreground">{t('contact.stats.quickResponse')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
