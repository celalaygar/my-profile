'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { InteractiveBackground } from '@/components/interactive-background';
import { useI18n } from '@/lib/i18n';
import { Plus, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ServicesPage() {
  const { t, locale } = useI18n();

  // Pricing plans data with i18n
  const pricingPlans = [
    {
      id: 'starter',
      title: t('services.plans.starter'),
      description: locale === 'tr' 
        ? 'Sektörünüze özel, hızlı yayın paketi. Kurumsal web varlığınızı kısa sürede ve şeffaf fiyatla canlıya alın.'
        : 'Industry-specific fast launch package. Get your corporate web presence live quickly with transparent pricing.',
      price: '17.000 TL',
      tax: '+ KDV',
      duration: t('services.durations.starter'),
      revisions: t('services.revisionRounds.starter'),
      features: [
        t('services.features.starter1'),
        t('services.features.starter2'),
        t('services.features.starter3'),
        t('services.features.starter4'),
        t('services.features.starter5'),
      ],
      popular: false,
    },
    {
      id: 'growth',
      title: t('services.plans.growth'),
      description: locale === 'tr'
        ? 'Dönüşüm odaklı premium paket: gelişmiş arayüz, performans ve sektöre özel içerik blokları ile markanızı bir adım öne taşır.'
        : 'Conversion-focused premium package: advanced interface, performance, and industry-specific content blocks to elevate your brand.',
      price: '22.000 TL',
      tax: '+ KDV',
      duration: t('services.durations.growth'),
      revisions: t('services.revisionRounds.growth'),
      features: [
        t('services.features.growth1'),
        t('services.features.growth2'),
        t('services.features.growth3'),
        t('services.features.growth4'),
        t('services.features.growth5'),
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      title: t('services.plans.enterprise'),
      description: locale === 'tr'
        ? 'Tamamen size özel kurgu, çok dil, ileri düzey entegrasyonlar ve iç yönetim içeren kapsamlı kurumsal paket.'
        : 'Comprehensive enterprise package with fully custom setup, multilingual support, advanced integrations, and internal management.',
      price: '35.000 TL',
      tax: '+ KDV',
      duration: t('services.durations.enterprise'),
      revisions: t('services.revisionRounds.enterprise'),
      features: [
        t('services.features.enterprise1'),
        t('services.features.enterprise2'),
        t('services.features.enterprise3'),
        t('services.features.enterprise4'),
        t('services.features.enterprise5'),
        t('services.features.enterprise6'),
        t('services.features.enterprise7'),
        t('services.features.enterprise8'),
        t('services.features.enterprise9'),
      ],
      popular: false,
    },
  ];

  // Enterprise solutions data with i18n
  const enterpriseSolutions = [
    {
      id: 'ai-agent',
      title: t('services.enterpriseSolutions.aiAgent'),
      description: locale === 'tr'
        ? 'Claude veya OpenAI tabanlı, şirket verinizi (PDF, web, CRM, Notion) bilen ve gerçek işlem yapabilen ajan. Müşteri desteği, satış öncesi soru yanıtlama veya iç veri keşfinde azaltan için RAG, function calling ve WhatsApp / web entegrasyonu dahil teslim edilir.'
        : 'Claude or OpenAI-based agent that knows your company data (PDF, web, CRM, Notion) and can perform real actions. Includes RAG, function calling, and WhatsApp/web integration for customer support, pre-sales, or internal data discovery.',
      price: t('services.enterprisePricing.aiAgent'),
      priceNote: t('services.enterprisePricing.aiAgentNote'),
      features: [
        t('services.enterpriseFeatures.aiAgent1'),
        t('services.enterpriseFeatures.aiAgent2'),
        t('services.enterpriseFeatures.aiAgent3'),
        t('services.enterpriseFeatures.aiAgent4'),
      ],
      cta: locale === 'tr' ? 'Görüşelim' : "Let's discuss",
    },
    {
      id: 'automation',
      title: t('services.enterpriseSolutions.automation'),
      description: locale === 'tr'
        ? 'n8n + yapay zeka ile uçtan uca otomasyon: form → CRM → e-posta → WhatsApp → fatura akışları. Tekrar eden manuel işi azaltarak ya da sıfırlayarak yıllık saatleri saniyelerle çeker.'
        : 'End-to-end automation with n8n + AI: form → CRM → email → WhatsApp → invoice flows. Reduce or eliminate repetitive manual work, turning hours into seconds.',
      price: t('services.enterprisePricing.automation'),
      priceNote: t('services.enterprisePricing.automationNote'),
      features: [
        t('services.enterpriseFeatures.automation1'),
        t('services.enterpriseFeatures.automation2'),
        t('services.enterpriseFeatures.automation3'),
        t('services.enterpriseFeatures.automation4'),
      ],
      cta: locale === 'tr' ? 'Görüşelim' : "Let's discuss",
    },
    {
      id: 'ecommerce',
      title: t('services.enterpriseSolutions.ecommerce'),
      description: locale === 'tr'
        ? 'Ürün yönetimi, sepet, ödeme ve sipariş takibi kapsayan, performans odaklı e-ticaret kurulumu. Kapsamına bağlı olarak özel temalı veya bütünleşik altyapı sunulur.'
        : 'Performance-focused e-commerce setup covering product management, cart, payment, and order tracking. Custom themed or integrated infrastructure based on scope.',
      price: t('services.enterprisePricing.ecommerce'),
      priceNote: t('services.enterprisePricing.ecommerceNote'),
      features: [
        t('services.enterpriseFeatures.ecommerce1'),
        t('services.enterpriseFeatures.ecommerce2'),
        t('services.enterpriseFeatures.ecommerce3'),
        t('services.enterpriseFeatures.ecommerce4'),
      ],
      cta: locale === 'tr' ? 'Görüşelim' : "Let's discuss",
    },
    {
      id: 'custom-app',
      title: t('services.enterpriseSolutions.customApp'),
      description: locale === 'tr'
        ? 'İhtiyacınıza özel kurgulanılan, ölçeklenebilir backend ve modern arayüzü sahip kurumsal düzeyde uygulama. İç panel, B2B portalı veya SaaS MVP olarak teslim edilir.'
        : 'Enterprise-grade application with scalable backend and modern interface tailored to your needs. Delivered as internal panel, B2B portal, or SaaS MVP.',
      price: t('services.enterprisePricing.customApp'),
      priceNote: t('services.enterprisePricing.customAppNote'),
      features: [
        t('services.enterpriseFeatures.customApp1'),
        t('services.enterpriseFeatures.customApp2'),
        t('services.enterpriseFeatures.customApp3'),
        t('services.enterpriseFeatures.customApp4'),
      ],
      cta: locale === 'tr' ? 'Görüşelim' : "Let's discuss",
    },
    {
      id: 'engineering',
      title: t('services.enterpriseSolutions.engineering'),
      description: locale === 'tr'
        ? 'Gömülü sistem, IoT, drone ve endüstriyel otomasyon gibi özel mühendislik kapsamları. Anahtar teslim tasarım, test ve saha doğrulaması dahildir.'
        : 'Custom engineering scopes including embedded systems, IoT, drones, and industrial automation. Turnkey design, testing, and field validation included.',
      price: t('services.enterprisePricing.engineering'),
      priceNote: t('services.enterprisePricing.engineeringNote'),
      features: [
        t('services.enterpriseFeatures.engineering1'),
        t('services.enterpriseFeatures.engineering2'),
        t('services.enterpriseFeatures.engineering3'),
        t('services.enterpriseFeatures.engineering4'),
      ],
      cta: locale === 'tr' ? 'Görüşelim' : "Let's discuss",
    },
  ];

  // Process steps with i18n
  const processSteps = [
    { number: '01', text: t('services.processSteps.step1') },
    { number: '02', text: t('services.processSteps.step2') },
    { number: '03', text: t('services.processSteps.step3') },
    { number: '04', text: t('services.processSteps.step4') },
  ];

  // FAQ items with i18n
  const faqItems = locale === 'tr' ? [
    {
      question: 'Yapay zeka ajanı (AI agent) ile sıradan chatbot arasında ne fark var?',
      answer: 'AI ajanları, şirket verinizle eğitilmiş, gerçek işlem yapabilen ve bağlam koruyabilen sistemlerdir. Sıradan chatbot\'lar ise sabit senaryolarla çalışır ve öğrenme kapasiteleri sınırlıdır.',
    },
    {
      question: 'WhatsApp otomasyonu yasal mı, hangi altyapıyla kuruyorsunuz?',
      answer: 'Evet, resmi WhatsApp Cloud API kullanıyoruz. Meta onaylı iş hesabınız üzerinden tamamen yasal ve güvenli entegrasyon sağlıyoruz.',
    },
    {
      question: 'Yapay zeka için ChatGPT mi, Claude mu kullanıyorsunuz?',
      answer: 'Projenin ihtiyacına göre her ikisini de kullanabiliyoruz. Genellikle uzun bağlam ve analitik işler için Claude, genel amaçlı görevler için OpenAI tercih ediyoruz.',
    },
    {
      question: 'Otomasyon yatırımı ne kadar sürede kendini amorti eder?',
      answer: 'Çoğu projede 3-6 ay içinde yatırım geri dönüşü sağlanır. Manuel iş yükü azaltması ve hata oranı düşüşü ile tasarruf hesaplanır.',
    },
    {
      question: 'Web sitesi süreci nasıl işliyor, ne kadar sürede yayında olur?',
      answer: 'Paket seçimine göre 4-12 iş günü arasında canlıya alınır. Süreç: keşif görüşmesi, içerik toplama, tasarım, geliştirme ve yayın aşamalarından oluşur.',
    },
    {
      question: 'Fiyatlar nedir, KDV nasıl uygulanıyor?',
      answer: 'Tüm fiyatlar KDV hariçtir. Faturalama sırasında %20 KDV eklenir. Kurumsal müşteriler için KDV indirimi uygulanabilir.',
    },
    {
      question: 'Berber, kuaför, restoran, klinik gibi sektörlere özel şablonunuz var mı?',
      answer: 'Evet, 10+ sektör için hazır şablonlarımız var. Bunları markanıza göre özelleştirip hızlıca yayına alıyoruz.',
    },
    {
      question: 'SEO (arama motoru optimizasyonu) pakete dahil mi?',
      answer: 'Evet, tüm paketlerde teknik SEO dahildir: meta etiketler, sitemap, robots.txt, yapısal veri ve Core Web Vitals optimizasyonu.',
    },
    {
      question: 'Şeffaf fiyat ve sözleşmeli teslim ne demek? Bütçem aşılır mı?',
      answer: 'Proje başlamadan önce yazılı sözleşme imzalanır. Belirlenen kapsam ve fiyat sabittir; ek talep olmadıkça bütçe aşılmaz.',
    },
    {
      question: 'Tek mühendisle çalışmak risk değil mi? Yarım iş bırakırsanız ne olur?',
      answer: 'Sözleşmeli çalışıyoruz ve ara teslimler yapıyoruz. Her aşamada çalışan kod teslim edilir. İstediğiniz an başka bir ekiple devam edebilirsiniz.',
    },
    {
      question: 'Yayın sonrası destek veriyor musunuz?',
      answer: 'Evet, aylık bakım paketlerimiz var. Güvenlik güncellemeleri, içerik değişiklikleri ve performans izleme dahildir.',
    },
    {
      question: 'Verilerim nerede tutuluyor, KVKK uyumlu mu?',
      answer: 'Veriler Türkiye veya AB\'de bulunan sunucularda tutulur. KVKK uyumlu altyapı ve gizlilik politikası ile çalışıyoruz.',
    },
    {
      question: 'Ankara dışındayım, çalışabilir miyiz?',
      answer: 'Evet, tüm süreç uzaktan yürütülür. Video görüşme, ekran paylaşımı ve proje yönetim araçlarıyla iletişim sağlanır.',
    },
  ] : [
    {
      question: 'What is the difference between an AI agent and a regular chatbot?',
      answer: 'AI agents are systems trained on your company data that can perform real actions and maintain context. Regular chatbots work with fixed scenarios and have limited learning capacity.',
    },
    {
      question: 'Is WhatsApp automation legal? What infrastructure do you use?',
      answer: 'Yes, we use the official WhatsApp Cloud API. We provide completely legal and secure integration through your Meta-approved business account.',
    },
    {
      question: 'Do you use ChatGPT or Claude for AI?',
      answer: 'We can use both depending on project needs. Generally, we prefer Claude for long context and analytical tasks, OpenAI for general-purpose tasks.',
    },
    {
      question: 'How long does it take for automation investment to pay off?',
      answer: 'Most projects achieve ROI within 3-6 months. Savings are calculated through reduced manual workload and lower error rates.',
    },
    {
      question: 'How does the website process work? How long until launch?',
      answer: 'Launch happens within 4-12 business days depending on package selection. Process includes: discovery meeting, content collection, design, development, and launch stages.',
    },
    {
      question: 'What are the prices? How is VAT applied?',
      answer: 'All prices exclude VAT. 20% VAT is added during invoicing. VAT reduction may apply for corporate customers.',
    },
    {
      question: 'Do you have templates for specific sectors like barbershops, restaurants, clinics?',
      answer: 'Yes, we have ready templates for 10+ sectors. We customize them for your brand and launch quickly.',
    },
    {
      question: 'Is SEO (search engine optimization) included?',
      answer: 'Yes, technical SEO is included in all packages: meta tags, sitemap, robots.txt, structured data, and Core Web Vitals optimization.',
    },
    {
      question: 'What does transparent pricing and contracted delivery mean? Will my budget be exceeded?',
      answer: 'A written contract is signed before the project starts. The defined scope and price are fixed; budget is not exceeded unless additional requests are made.',
    },
    {
      question: 'Is working with a single engineer risky? What if work is left incomplete?',
      answer: 'We work with contracts and make interim deliveries. Working code is delivered at each stage. You can continue with another team at any time.',
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes, we have monthly maintenance packages. Security updates, content changes, and performance monitoring are included.',
    },
    {
      question: 'Where is my data stored? Is it GDPR compliant?',
      answer: 'Data is stored on servers in Turkey or the EU. We work with GDPR-compliant infrastructure and privacy policy.',
    },
    {
      question: 'I am outside Ankara, can we work together?',
      answer: 'Yes, the entire process is conducted remotely. Communication is provided through video calls, screen sharing, and project management tools.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background relative">
      <InteractiveBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              {t('services.title')}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t('services.subtitle')}
            </p>
            <p className="text-sm font-medium text-[#7cff92]">
              {t('services.pricing')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-8 sm:py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative rounded-lg border p-6 transition-all duration-200 ${
                  plan.popular
                    ? 'border-[#7cff92]/60 bg-card'
                    : 'border-border/40 bg-card/50 hover:border-border/60'
                }`}
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-2">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {plan.title}
                  </h2>
                  {plan.popular && (
                    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] border-[#7cff92]/40 bg-[#7cff92]/10 text-[#7cff92]">
                      {t('services.popular')}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {plan.description}
                </p>

                {/* Price */}
                <p className="text-xl sm:text-2xl font-semibold text-[#7cff92] mb-2">
                  {plan.price} <span className="text-base font-normal text-muted-foreground">{plan.tax}</span>
                </p>

                {/* Duration & Revisions */}
                <div className="text-xs text-muted-foreground mb-4">
                  <span>{plan.duration}</span> • <span>{plan.revisions}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI, Automation & Custom Software Section */}
      <section className="py-12 sm:py-16 border-t border-border/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
              {t('services.largeScale')}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-4xl">
              {t('services.largeScaleSubtitle')}
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseSolutions.map((solution) => (
              <article
                key={solution.id}
                className="rounded-lg border border-border/40 bg-card/50 p-6 hover:border-border/60 transition-colors"
              >
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-muted-foreground">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <p className="text-lg sm:text-xl font-semibold text-[#7cff92] mb-1">
                  {solution.price}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {solution.priceNote}
                </p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-[#7cff92] hover:underline"
                >
                  {solution.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Revision Policy Section */}
      <section className="py-12 sm:py-16 border-t border-border/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Process - Glass Card */}
            <article className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {t('services.process')}
              </h3>
              <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                {processSteps.map((step) => (
                  <li key={step.number} className="leading-relaxed">
                    <span className="mr-2 text-muted-foreground/50 font-mono">{step.number}.</span>
                    {step.text}
                  </li>
                ))}
              </ol>
            </article>

            {/* Revision Policy - Glass Card */}
            <article className="rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {t('services.revisionPolicy')}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {locale === 'tr' 
                  ? 'Paketlerde belirtilen revizyon turu kadar tasarım ve içerik güncellemesi dahildir. Ek revizyon talepleri görüşmede netleştirilir.'
                  : 'Design and content updates are included up to the revision rounds specified in the packages. Additional revision requests are clarified in the meeting.'}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground/70">
                {locale === 'tr'
                  ? 'Özel yazılım ve yapay zeka projelerinde sprint bazlı teslim ve şeffaf değişiklik yönetimi uygulanır.'
                  : 'Sprint-based delivery and transparent change management is applied in custom software and AI projects.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 border-t border-border/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cff92]/10 rounded-full border border-[#7cff92]/30 mb-4">
              <span className="text-xs sm:text-sm font-medium text-[#7cff92]">
                {locale === 'tr' ? 'SSS' : 'FAQ'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              {locale === 'tr' 
                ? 'Sık Sorulan Sorular — Yapay Zeka, Otomasyon ve Web'
                : 'Frequently Asked Questions — AI, Automation and Web'}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              {locale === 'tr' 
                ? 'Merak edilen konulara hızlı yanıtlar'
                : 'Quick answers to common questions'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/40 rounded-lg bg-card/30 backdrop-blur-sm px-4 sm:px-6 data-[state=open]:border-[#7cff92]/30 data-[state=open]:bg-card/50 transition-all"
                >
                  <AccordionTrigger className="hover:no-underline text-left py-4 sm:py-5">
                    <span className="text-sm sm:text-base text-foreground font-medium pr-4">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 border-t border-border/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-[#7cff92]/20 bg-gradient-to-br from-card/80 via-card/60 to-[#7cff92]/5 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="space-y-4 lg:max-w-2xl">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground text-balance">
                  {locale === 'tr' 
                    ? 'Yapay zeka, otomasyon, web — sizin için hangisi en hızlı geri döner?'
                    : 'AI, automation, web — which one gives you the fastest ROI?'}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {locale === 'tr'
                    ? '30 dakikalık ücretsiz keşif görüşmesinde ihtiyacınızı netleştirelim: yapay zeka ajanı, WhatsApp ve süreç otomasyonu, özel yazılım veya hazır web sitesi — operasyonunuza en uygun teslim planını birlikte çıkaralım. 24 saat içinde yanıtlıyoruz.'
                    : "Let's clarify your needs in a 30-minute free discovery call: AI agent, WhatsApp and process automation, custom software or ready website — let's create the delivery plan that best suits your operation. We respond within 24 hours."}
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs pt-2">
                  <Link 
                    href="/templates" 
                    className="px-3 py-1.5 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-[#7cff92]/50 hover:bg-[#7cff92]/10 transition-colors"
                  >
                    {locale === 'tr' ? 'Hazır Şablonlar' : 'Ready Templates'}
                  </Link>
                  <Link 
                    href="/services" 
                    className="px-3 py-1.5 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-[#7cff92]/50 hover:bg-[#7cff92]/10 transition-colors"
                  >
                    {locale === 'tr' ? 'Hizmetler ve Fiyatlar' : 'Services & Pricing'}
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-3 py-1.5 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-[#7cff92]/50 hover:bg-[#7cff92]/10 transition-colors"
                  >
                    {locale === 'tr' ? 'İletişim Bilgileri' : 'Contact Info'}
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full sm:w-auto lg:min-w-[220px] shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#7cff92] text-background rounded-lg font-medium text-sm hover:bg-[#7cff92]/90 transition-colors whitespace-nowrap"
                >
                  {locale === 'tr' ? 'Ücretsiz Keşif Görüşmesi' : 'Free Discovery Call'}
                </Link>
                <Link
                  href="https://wa.me/905448358401"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#7cff92]/30 rounded-lg text-sm text-foreground hover:bg-[#7cff92]/10 hover:border-[#7cff92]/50 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{locale === 'tr' ? "WhatsApp'tan Yazın" : 'Message on WhatsApp'}</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-border/40 rounded-lg text-sm text-foreground hover:bg-accent/50 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{locale === 'tr' ? 'Detaylı İletişim' : 'Contact Details'}</span>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-border/30 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground">
              <span>{locale === 'tr' ? 'Telefon' : 'Phone'}: +90 544 835 84 01</span>
              <span>{locale === 'tr' ? 'E-posta' : 'Email'}: wixtorysoft@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
