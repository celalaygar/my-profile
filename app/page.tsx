'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { TechnologyCard } from '@/components/cards/technology-card';
import { useI18n } from '@/lib/i18n';
import { projects, technologies, experiences, servicesData } from '@/data';
import Link from 'next/link';
import { ChevronRight, Briefcase, ArrowRight, ExternalLink, Check, Mail, MessageSquare, Sparkles } from 'lucide-react';

export default function Home() {
  const { t, language } = useI18n();

  // Get first experience for preview
  const featuredExperience = experiences.slice(0, 1);

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

      {/* About Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{t('home.aboutMe')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t('home.aboutMeP1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('home.aboutMeP2')}
            </p>
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                href="/projects"
                className="group relative bg-card border border-border/50 rounded-lg p-4 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-0.5 bg-[#7cff92]/10 text-[#7cff92] rounded-full font-medium truncate">
                      {project.type}
                    </span>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-[#7cff92] transition-colors flex-shrink-0" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm group-hover:text-[#7cff92] transition-colors line-clamp-2">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {project.short_description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.technologies.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 text-[10px] font-medium bg-[#7cff92]/10 text-[#7cff92]/80 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded">
                        +{project.technologies.length - 2}
                      </span>
                    )}
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
                className={`group relative bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${plan.popular
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
                      {plan.currency === 'TRY' ? '₺' : '$'}{plan.price}
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
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${plan.popular
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

      {/* Technologies Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t('home.techSkills')}</h2>
              <p className="text-muted-foreground mt-2">{t('home.techSkillsSubtitle')}</p>
            </div>
            <Link
              href="/technologies"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#7cff92] hover:text-[#7cff92]/80 transition-colors"
            >
              {t('home.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <TechnologyCard key={tech.id} technology={tech} />
            ))}
          </div>

          <Link
            href="/technologies"
            className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 mt-8 text-[#7cff92] font-semibold hover:text-[#7cff92]/80 transition-colors"
          >
            {t('home.viewAllTech')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{t('home.experience')}</h2>
              <p className="text-muted-foreground mt-2">{t('home.experienceSubtitle')}</p>
            </div>
            <Link
              href="/experience"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#7cff92] hover:text-[#7cff92]/80 transition-colors"
            >
              {t('home.viewFullHistory')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="space-y-4">
            {featuredExperience.map((exp) => (
              <div
                key={exp.id}
                className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-4">
                  <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                    <Briefcase className="w-6 h-6 text-[#7cff92]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-[#7cff92] transition-colors duration-200">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-semibold bg-[#7cff92]/15 text-[#7cff92] rounded-full border border-[#7cff92]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>

          <Link
            href="/experience"
            className="sm:hidden flex items-center justify-center gap-2 px-6 py-3 mt-8 text-[#7cff92] font-semibold hover:text-[#7cff92]/80 transition-colors"
          >
            {t('home.viewFullHistory')} <ArrowRight size={18} />
          </Link>
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

      <Footer />
    </main>
  );
}
