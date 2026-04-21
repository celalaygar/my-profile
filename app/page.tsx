'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useI18n } from '@/lib/i18n';
import { projects, servicesData, templates } from '@/data';
import Link from 'next/link';
import { ChevronRight, ArrowRight, ExternalLink, Check, Mail, MessageSquare, Sparkles, Database, Code2, Zap, Shield, Layout } from 'lucide-react';

export default function Home() {
  const { t, language } = useI18n();

  // Get first 3 pricing plans for services preview
  const pricingPlans = servicesData.pricing;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cff92]/10 rounded-full border border-[#7cff92]/30 mx-auto">
              <div className="w-2 h-2 bg-[#7cff92] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#7cff92]">{t('home.openToOpportunities')}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                {t('home.title')}, {t('home.subtitle').split('&')[0].trim()} <span className="bg-gradient-to-r from-[#7cff92] to-[#7cff92]/60 bg-clip-text text-transparent">{t('home.developer')}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                {t('home.subtitle')}
              </p>
            </div>

            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('home.about')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all group"
              >
                {t('home.cta')}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#7cff92]/30 text-foreground rounded-lg font-semibold hover:border-[#7cff92]/80 hover:bg-[#7cff92]/5 transition-all"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center p-4 rounded-lg border border-[#7cff92]/20 hover:border-[#7cff92]/60 bg-[#7cff92]/5 hover:bg-[#7cff92]/10 transition-all duration-200">
              <div className="text-2xl sm:text-3xl font-bold text-[#7cff92]">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t('home.stats.projects')}</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-[#7cff92]/20 hover:border-[#7cff92]/60 bg-[#7cff92]/5 hover:bg-[#7cff92]/10 transition-all duration-200">
              <div className="text-2xl sm:text-3xl font-bold text-[#7cff92]">5+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t('home.stats.yearsExp')}</div>
            </div>
            <div className="text-center p-4 rounded-lg border border-[#7cff92]/20 hover:border-[#7cff92]/60 bg-[#7cff92]/5 hover:bg-[#7cff92]/10 transition-all duration-200">
              <div className="text-2xl sm:text-3xl font-bold text-[#7cff92]">30+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t('home.stats.technologies')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Section - Small Cards */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t('home.allProjects')}</h2>
              <p className="text-muted-foreground mt-2">{t('home.allProjectsSubtitle')}</p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#7cff92] hover:text-[#7cff92]/80 transition-colors"
            >
              {t('home.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card border border-border/50 rounded-lg p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300 flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="relative flex flex-col h-full">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2.5 py-1 bg-[#7cff92]/10 text-[#7cff92] rounded-full font-medium truncate">
                      {project.type}
                    </span>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-[#7cff92] transition-colors flex-shrink-0" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground text-base group-hover:text-[#7cff92] transition-colors line-clamp-2 mb-2">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#7cff92]/80 font-medium mb-2 uppercase tracking-wider">
                    {project.short_description}
                  </p>

                  {/* Long Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                    {project.long_description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-[#7cff92]/10 text-[#7cff92]/80 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer with hover effect */}
                  <div className="pt-3 border-t border-border/30 group-hover:border-[#7cff92]/30 transition-colors">
                    <div className="text-xs text-muted-foreground group-hover:text-[#7cff92] transition-colors flex items-center gap-1">
                      View Project <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/projects"
            className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 mt-8 text-[#7cff92] font-semibold hover:text-[#7cff92]/80 transition-colors"
          >
            {t('home.viewAllProjects')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 sm:py-32 border-t border-border/50 bg-gradient-to-b from-background to-[#7cff92]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#7cff92]" />
                <span className="text-sm font-medium text-[#7cff92]">{t('services.pricing')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t('home.servicesSection')}</h2>
              <p className="text-muted-foreground mt-2">{t('home.servicesSubtitle')}</p>
            </div>
            <Link
              href="/services"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#7cff92] hover:text-[#7cff92]/80 transition-colors"
            >
              {t('home.viewServices')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <Link
                key={plan.id}
                href="/services"
                className={`group relative bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-[#7cff92] shadow-lg shadow-[#7cff92]/20'
                    : 'border-border/50 hover:border-[#7cff92]/50 hover:shadow-[#7cff92]/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[#7cff92] text-background text-xs font-bold rounded-full">
                      {t('services.popular')}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(`services.plans.${plan.id}`)}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold text-[#7cff92]">
                      {plan.currency === 'TRY' ? '₺' : '$'}{plan.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t(`services.durations.${plan.id}`)}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#7cff92] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {t(`services.features.${plan.id}${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <span
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-[#7cff92] text-background group-hover:bg-[#7cff92]/90'
                        : 'border border-[#7cff92]/30 text-[#7cff92] group-hover:bg-[#7cff92]/10'
                    }`}
                  >
                    {t('services.getStarted')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/services"
            className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 mt-8 text-[#7cff92] font-semibold hover:text-[#7cff92]/80 transition-colors"
          >
            {t('home.viewServices')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Layout className="w-5 h-5 text-[#7cff92]" />
                <span className="text-sm font-medium text-[#7cff92]">{t('templates.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t('templates.featuredTitle')}</h2>
              <p className="text-muted-foreground mt-2">{t('templates.featuredSubtitle')}</p>
            </div>
            <Link
              href="/templates"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#7cff92] hover:text-[#7cff92]/80 transition-colors"
            >
              {t('templates.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.slice(0, 3).map((template) => (
              <Link
                key={template.id}
                href={template.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card border border-border/50 rounded-lg overflow-hidden hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image placeholder */}
                <div className="relative h-32 bg-gradient-to-br from-[#7cff92]/20 to-[#7cff92]/5 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layout className="w-10 h-10 text-[#7cff92]/40" />
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold uppercase tracking-wide bg-[#7cff92]/90 text-background rounded">
                    {template.type}
                  </div>
                </div>

                <div className="relative p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-0.5 bg-[#7cff92]/10 text-[#7cff92] rounded-full font-medium">
                      {template.type}
                    </span>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-[#7cff92] transition-colors" />
                  </div>

                  <h3 className="font-semibold text-foreground text-base group-hover:text-[#7cff92] transition-colors mb-2">
                    {template.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {template.description}
                  </p>

                  <div className="pt-3 border-t border-border/30 group-hover:border-[#7cff92]/30 transition-colors">
                    <div className="text-xs text-muted-foreground group-hover:text-[#7cff92] transition-colors flex items-center gap-1">
                      View Template <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/templates"
            className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 mt-8 text-[#7cff92] font-semibold hover:text-[#7cff92]/80 transition-colors"
          >
            {t('templates.viewAll')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Large Scale Projects Detail Section */}
      <section className="py-20 sm:py-32 border-t border-border/50 bg-gradient-to-b from-[#7cff92]/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('services.largeScale')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('services.largeScaleSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* E-Commerce Solution */}
            <div className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{t('services.enterpriseSolutions.ecommerce')}</h3>
                <p className="text-3xl font-bold text-[#7cff92]">₺50,000</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.ecommerce1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.ecommerce2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.ecommerce3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.ecommerce4')}</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92]/10 text-[#7cff92] rounded-lg font-semibold border border-[#7cff92]/30 hover:bg-[#7cff92]/20 hover:border-[#7cff92]/60 transition-all w-full justify-center">
                {t('services.getStarted')} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Custom Application */}
            <div className="group bg-card border border-[#7cff92] rounded-2xl p-8 hover:shadow-lg hover:shadow-[#7cff92]/20 transition-all duration-300 scale-105">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{t('services.enterpriseSolutions.customApp')}</h3>
                <p className="text-3xl font-bold text-[#7cff92]">₺100,000</p>
                <p className="text-sm text-muted-foreground mt-2">{t('services.enterpriseFeatures.customAppExtra')}</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.customApp1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.customApp2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.customApp3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.customApp4')}</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 transition-all w-full justify-center">
                {t('services.getStarted')} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Engineering Solutions */}
            <div className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{t('services.enterpriseSolutions.engineering')}</h3>
                <p className="text-3xl font-bold text-[#7cff92]">₺150,000<span className="text-sm text-muted-foreground ml-2">{t('services.perMonth')}</span></p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.engineering1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.engineering2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.engineering3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7cff92] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t('services.enterpriseFeatures.engineering4')}</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92]/10 text-[#7cff92] rounded-lg font-semibold border border-[#7cff92]/30 hover:bg-[#7cff92]/20 hover:border-[#7cff92]/60 transition-all w-full justify-center">
                {t('services.getStarted')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('home.contactSection')}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('home.contactSubtitle')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card border border-border/50 rounded-lg hover:border-[#7cff92]/50 transition-colors">
                  <div className="p-3 bg-[#7cff92]/10 rounded-lg">
                    <Mail className="w-5 h-5 text-[#7cff92]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.email')}</p>
                    <p className="text-sm text-muted-foreground">{t('contact.stats.quickResponse')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card border border-border/50 rounded-lg hover:border-[#7cff92]/50 transition-colors">
                  <div className="p-3 bg-[#7cff92]/10 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-[#7cff92]" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{t('contact.message')}</p>
                    <p className="text-sm text-muted-foreground">{t('contact.stats.alwaysAvailable')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-[#7cff92]/30 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-6">{t('home.letsWork')}</h3>
              <p className="text-muted-foreground mb-8">
                {t('home.letsWorkSubtitle')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all group w-full justify-center"
              >
                {t('home.getInTouch')}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Moved to Bottom */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Header */}
          <div className="mb-16">
            <p className="text-lg font-semibold text-[#7cff92] mb-2">
              {t('home.aboutExperience')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {t('home.aboutIntro')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {t('home.aboutDescription')}
            </p>
            <p className="text-base font-semibold text-foreground">
              {t('home.aboutStats')}
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Backend */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <Database className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.backendTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.backendDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <Code2 className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.frontendTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.frontendDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Microservices */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.microservicesTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.microservicesDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <Shield className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.performanceTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.performanceDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-[#7cff92]/30 transition-colors text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              {t('home.aboutExpertise.consultationTitle')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('home.aboutExpertise.consultationDesc')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#7cff92]/10 text-[#7cff92] rounded-lg font-semibold border border-[#7cff92]/30 hover:bg-[#7cff92]/20 hover:border-[#7cff92]/60 transition-all"
            >
              {t('home.getInTouch')}
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* View Full About Page Link */}
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-[#7cff92] font-semibold hover:text-[#7cff92]/80 transition-colors"
            >
              View Full About Page <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
