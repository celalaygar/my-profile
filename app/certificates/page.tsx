'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { CertificateCard } from '@/components/cards/certificate-card';
import { useI18n } from '@/lib/i18n';
import { certificates } from '@/data';
import { Award } from 'lucide-react';

export default function CertificatesPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award size={32} className="text-[#7cff92]" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {t('certificates.title')}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and credentials I&apos;ve earned across various technologies and platforms.
            </p>
          </div>

          {/* Certificates Grid */}
          {certificates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t('certificates.empty')}</p>
            </div>
          )}

          {/* Stats Section */}
          {certificates.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{certificates.length}</p>
                  <p className="text-sm text-muted-foreground">Total Certificates</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{new Set(certificates.map(c => c.organization)).size}</p>
                  <p className="text-sm text-muted-foreground">Organizations</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{certificates.filter(c => c.url).length}</p>
                  <p className="text-sm text-muted-foreground">Verifiable</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
