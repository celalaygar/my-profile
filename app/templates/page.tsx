'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { TemplateCard } from '@/components/cards/template-card';
import { useI18n } from '@/lib/i18n';
import { templates } from '@/data';
import { Layout } from 'lucide-react';

export default function TemplatesPage() {
  const { t } = useI18n();

  // Group templates in rows of 3
  const groupedTemplates: typeof templates[] = [];
  for (let i = 0; i < templates.length; i += 3) {
    groupedTemplates.push(templates.slice(i, i + 3));
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cff92]/10 rounded-full border border-[#7cff92]/30 mx-auto">
              <Layout className="w-4 h-4 text-[#7cff92]" />
              <span className="text-sm font-medium text-[#7cff92]">{t('templates.badge')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {t('templates.title')}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('templates.subtitle')}
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#7cff92]">{templates.length}</div>
                <div className="text-sm text-muted-foreground">{t('templates.totalTemplates')}</div>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#7cff92]">10+</div>
                <div className="text-sm text-muted-foreground">{t('templates.industries')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {groupedTemplates.map((group, groupIndex) => (
              <div 
                key={groupIndex} 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 border-t border-border/50 bg-gradient-to-b from-background to-[#7cff92]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {t('templates.ctaTitle')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('templates.ctaSubtitle')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all"
          >
            {t('templates.ctaButton')}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
