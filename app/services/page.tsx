'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FAQSection } from '@/components/sections/faq-section';
import { useI18n } from '@/lib/i18n';
import { Check, Sparkles, Clock, RefreshCw, ArrowRight, Zap, Building2, Cpu, FileText } from 'lucide-react';
import Link from 'next/link';

// Pricing plans data with i18n keys
const pricingPlans = [
  {
    id: 'starter',
    titleKey: 'services.plans.starter',
    price: 17000,
    currency: 'TRY',
    durationKey: 'services.durations.starter',
    revisionsKey: 'services.revisionRounds.starter',
    featureKeys: [
      'services.features.starter1',
      'services.features.starter2',
      'services.features.starter3',
      'services.features.starter4',
      'services.features.starter5',
    ],
    popular: false,
  },
  {
    id: 'growth',
    titleKey: 'services.plans.growth',
    price: 22000,
    currency: 'TRY',
    durationKey: 'services.durations.growth',
    revisionsKey: 'services.revisionRounds.growth',
    featureKeys: [
      'services.features.growth1',
      'services.features.growth2',
      'services.features.growth3',
      'services.features.growth4',
      'services.features.growth5',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    titleKey: 'services.plans.enterprise',
    price: 35000,
    currency: 'TRY',
    durationKey: 'services.durations.enterprise',
    revisionsKey: 'services.revisionRounds.enterprise',
    featureKeys: [
      'services.features.enterprise1',
      'services.features.enterprise2',
      'services.features.enterprise3',
      'services.features.enterprise4',
      'services.features.enterprise5',
      'services.features.enterprise6',
      'services.features.enterprise7',
      'services.features.enterprise8',
      'services.features.enterprise9',
    ],
    popular: false,
  },
];

// Enterprise solutions data with i18n keys
const enterpriseSolutions = [
  {
    id: 'ecommerce',
    titleKey: 'services.enterpriseSolutions.ecommerce',
    price: 50000,
    featureKeys: [
      'services.enterpriseFeatures.ecommerce1',
      'services.enterpriseFeatures.ecommerce2',
      'services.enterpriseFeatures.ecommerce3',
      'services.enterpriseFeatures.ecommerce4',
    ],
  },
  {
    id: 'custom-app',
    titleKey: 'services.enterpriseSolutions.customApp',
    price: 100000,
    extraKey: 'services.enterpriseFeatures.customAppExtra',
    featureKeys: [
      'services.enterpriseFeatures.customApp1',
      'services.enterpriseFeatures.customApp2',
      'services.enterpriseFeatures.customApp3',
      'services.enterpriseFeatures.customApp4',
    ],
  },
  {
    id: 'engineering',
    titleKey: 'services.enterpriseSolutions.engineering',
    price: 150000,
    priceType: 'monthly' as const,
    featureKeys: [
      'services.enterpriseFeatures.engineering1',
      'services.enterpriseFeatures.engineering2',
      'services.enterpriseFeatures.engineering3',
      'services.enterpriseFeatures.engineering4',
    ],
  },
];

// Process steps i18n keys
const processStepKeys = [
  'services.processSteps.step1',
  'services.processSteps.step2',
  'services.processSteps.step3',
  'services.processSteps.step4',
];

export default function ServicesPage() {
  const { t } = useI18n();

  const formatPrice = (price: number, currency: string, isMonthly?: boolean) => {
    const formatted = new Intl.NumberFormat('tr-TR').format(price);
    if (currency === 'TRY') {
      return `₺${formatted}${isMonthly ? t('services.perMonth') : ''}`;
    }
    return `${formatted} ${currency}`;
  };

  const processIcons = [
    <Zap key="1" className="w-5 h-5" />,
    <FileText key="2" className="w-5 h-5" />,
    <Cpu key="3" className="w-5 h-5" />,
    <Check key="4" className="w-5 h-5" />,
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-[#7cff92]/3" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cff92]/10 rounded-full border border-[#7cff92]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#7cff92]" />
            <span className="text-sm font-medium text-[#7cff92]">{t('services.title')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {t('services.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('services.pricing')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative group rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'border-[#7cff92] bg-gradient-to-b from-[#7cff92]/10 to-transparent scale-105 shadow-xl shadow-[#7cff92]/20'
                    : 'border-border/50 bg-card hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#7cff92] text-background text-sm font-bold rounded-full shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      {t('services.popular')}
                    </span>
                  </div>
                )}

                <div className="p-6 lg:p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t(plan.titleKey)}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl lg:text-5xl font-bold text-[#7cff92]">
                        {formatPrice(plan.price, plan.currency)}
                      </span>
                    </div>
                  </div>

                  {/* Plan Details */}
                  <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-border/50">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-[#7cff92]" />
                      <span>{t('services.duration')}: {t(plan.durationKey)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <RefreshCw className="w-4 h-4 text-[#7cff92]" />
                      <span>{t('services.revisions')}: {t(plan.revisionsKey)}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.featureKeys.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-[#7cff92]/20 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#7cff92]" />
                        </div>
                        <span className="text-sm text-foreground/80">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#7cff92] text-background hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30'
                        : 'bg-[#7cff92]/10 text-[#7cff92] border border-[#7cff92]/30 hover:bg-[#7cff92]/20 hover:border-[#7cff92]/60'
                    }`}
                  >
                    {t('services.getStarted')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Scale Projects Section */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cff92]/10 rounded-full border border-[#7cff92]/30 mb-4">
              <Building2 className="w-4 h-4 text-[#7cff92]" />
              <span className="text-sm font-medium text-[#7cff92]">{t('services.enterprise')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('services.largeScale')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.largeScaleSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {enterpriseSolutions.map((solution) => (
              <div
                key={solution.id}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 lg:p-8 transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Solution Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {t(solution.titleKey)}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl lg:text-4xl font-bold text-[#7cff92]">
                        {formatPrice(solution.price, 'TRY', solution.priceType === 'monthly')}
                      </span>
                    </div>
                    {solution.extraKey && (
                      <p className="text-sm text-muted-foreground mt-2">{t(solution.extraKey)}</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {solution.featureKeys.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-[#7cff92]/20 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#7cff92]" />
                        </div>
                        <span className="text-sm text-foreground/80">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#7cff92]/10 text-[#7cff92] border border-[#7cff92]/30 hover:bg-[#7cff92]/20 hover:border-[#7cff92]/60 transition-all duration-200"
                  >
                    {t('services.contact')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('services.process')}</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#7cff92] via-[#7cff92]/50 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {processStepKeys.map((stepKey, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#7cff92]/10 border-2 border-[#7cff92] text-[#7cff92] shrink-0">
                    {processIcons[idx] || <span className="font-bold">{idx + 1}</span>}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pb-6">
                    <div className="bg-card border border-border/50 rounded-xl p-5 hover:border-[#7cff92]/30 transition-colors duration-200">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[#7cff92]">{t('services.step')} {idx + 1}</span>
                      </div>
                      <p className="mt-2 text-foreground/90">{t(stepKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revision Policy Section */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('services.revisionPolicy')}</h2>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-6 lg:p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7cff92]/10 mb-4">
              <RefreshCw className="w-6 h-6 text-[#7cff92]" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t('services.revisionPolicyText')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t('services.readyToStart')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('services.readyToStartSubtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all group"
          >
            {t('services.contact')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </main>
  );
}
