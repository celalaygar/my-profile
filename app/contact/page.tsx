'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useI18n } from '@/lib/i18n';
import { contactLinks } from '@/data';
import { Phone, Mail, Globe, Linkedin, Github, BookOpen, Play, Code2, Heart, CheckCircle2, Copy, ExternalLink, MessageCircle } from 'lucide-react';
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
  if (lowerTitle.includes('whatsapp')) return MessageCircle;
  return ExternalLink;
}

export default function ContactPage() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    message: '',
    company: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', sector: '', message: '', company: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Quick Contact Channels - Left Side */}
            <aside className="space-y-5">
              <h2 className="text-xl font-semibold text-foreground">
                {t('contact.quickLinks')}
              </h2>

              <div className="space-y-3">
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
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 p-4 text-sm text-muted-foreground transition-all duration-300"
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-[#7cff92]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground/80">{link.title}</p>
                        <p className="text-sm font-semibold text-foreground group-hover:text-[#7cff92] transition-colors line-clamp-1">
                          {displayText}
                        </p>
                      </div>

                      {/* Copy/External Link Button */}
                      {(link.url.includes('tel:') || link.url.includes('mailto:') || link.url.startsWith('http')) && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (link.url.includes('tel:') || link.url.includes('mailto:')) {
                              handleCopy(displayText, link.title);
                            }
                          }}
                          className="flex-shrink-0 text-[#7cff92]/60 hover:text-[#7cff92] transition-colors"
                        >
                          {copied === link.title ? (
                            <CheckCircle2 size={16} />
                          ) : link.url.startsWith('http') ? (
                            <ExternalLink size={16} />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      )}
                    </a>
                  );
                })}
              </div>
            </aside>

            {/* Contact Form - Right Side */}
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-foreground">
                {t('contact.sendMessage')}
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Form Container with Border */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5">
                  {/* Hidden Company Field */}
                  <div className="hidden">
                    <label htmlFor="company" className="mb-1 block text-sm font-medium text-zinc-200">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      autoComplete="off"
                      tabIndex={-1}
                      className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-zinc-100"
                    />
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-200">
                        {t('contact.name')}
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-200">
                        {t('contact.email')}
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t('contact.emailPlaceholder')}
                        className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone and Sector Row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-200">
                        {t('contact.phone')}
                      </label>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t('contact.phonePlaceholder')}
                        className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="sector" className="mb-1 block text-sm font-medium text-zinc-200">
                        {t('contact.sector')}
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] transition-all duration-200"
                      >
                        <option value="" disabled>
                          {t('contact.sectorPlaceholder')}
                        </option>
                        {Object.entries(t('contact.sectors') as Record<string, string>).map(([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-200">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact.messagePlaceholder')}
                      className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 bg-[#7cff92] text-black rounded-xl font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 size={16} />
                        {t('contact.success')}
                      </>
                    ) : (
                      <>
                        <Mail size={16} />
                        {t('contact.send')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
