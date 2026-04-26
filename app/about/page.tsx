'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';
import { ArrowRight, Code2, Database, Zap, Shield, MessageSquare } from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useI18n();

  const expertiseItems = [
    { icon: Database, titleKey: 'backendTitle', descKey: 'backendDesc' },
    { icon: Code2, titleKey: 'frontendTitle', descKey: 'frontendDesc' },
    { icon: Zap, titleKey: 'microservicesTitle', descKey: 'microservicesDesc' },
    { icon: Shield, titleKey: 'performanceTitle', descKey: 'performanceDesc' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 sm:py-32 border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-lg font-semibold text-[#7cff92] mb-2">
              {t('home.aboutExperience')}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t('home.aboutIntro')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {t('home.aboutDescription')}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-lg font-semibold text-foreground mb-4">
              {t('home.aboutStats')}
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 sm:py-32 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center">
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 text-[#7cff92]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                        {t(`home.aboutExpertise.${item.titleKey}`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`home.aboutExpertise.${item.descKey}`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-20 sm:py-32 border-b border-border/50 bg-gradient-to-b from-[#7cff92]/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 text-center hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
            <MessageSquare className="w-12 h-12 text-[#7cff92] mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('home.aboutExpertise.consultationTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('home.aboutExpertise.consultationDesc')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all group"
            >
              {t('home.getInTouch')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">6+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">40+</div>
              <p className="text-sm text-muted-foreground">Projects Shipped</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Dedication</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
