'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ProjectCard } from '@/components/cards/project-card';
import { TemplateCard } from '@/components/cards/template-card';
import { useI18n } from '@/lib/i18n';
import { projects, servicesData, templates } from '@/data';
import Link from 'next/link';
import {
  ChevronRight, ArrowRight, ExternalLink, Check, Mail, MessageSquare, Sparkles, Database, Code2, Zap, Shield,
  Server, Cloud, Cpu, Settings, Layout,
} from 'lucide-react';

export default function Home() {
  const { t, language } = useI18n();

  // Get first 3 pricing plans for services preview
  const pricingPlans = servicesData.pricing;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - New Design */}
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-center flex flex-col items-center">
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cff92]/10 rounded-full border border-[#7cff92]/30">
              <div className="w-2 h-2 bg-[#7cff92] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#7cff92]">{language === 'tr' ? 'Yapay Zeka · Otomasyon · Özel Yazılım' : 'AI · Automation · Custom Software'}</span>
            </div>

            {/* Main Heading */}
            <div className="max-w-4xl space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
                {language === 'tr' ? 'Markanıza Özel Dijital Çözümler Geliştiriyoruz' : 'We Build Custom Digital Solutions For Your Brand'}
              </h1>
            </div>

            {/* Services Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {['WEB', 'E-TİCARET', 'MOBİL', 'OTOMASYON', 'YAPAY ZEKA'].map((cat, i) => (
                <span key={i} className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7cff92]">
                  {cat}
                  {i < 4 && <span className="ml-3 text-muted-foreground">·</span>}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {language === 'tr' 
                ? 'Kurumsal firmalar, KOBİ\'ler ve esnaflar için web sitesi, e-ticaret altyapısı, mobil uygulama, yapay zeka ajanları, otomasyon sistemleri ve özel yazılım projelerini markanıza özel geliştiriyoruz.'
                : 'For corporate firms, SMEs and entrepreneurs, we develop custom websites, e-commerce infrastructure, mobile applications, AI agents, automation systems and custom software projects tailored to your brand.'
              }
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all group"
              >
                <MessageSquare size={18} />
                {language === 'tr' ? 'WhatsApp\'tan Yazın' : 'Write From WhatsApp'}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#7cff92]/30 text-foreground rounded-lg font-semibold hover:border-[#7cff92]/80 hover:bg-[#7cff92]/5 transition-all"
              >
                {language === 'tr' ? 'Çözümleri İnceleyin' : 'Explore Solutions'}
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Features Grid */}
            <div className="mt-16 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Modern Tasarım' : 'Modern Design'}
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Güçlü Altyapı' : 'Powerful Infrastructure'}
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'SEO Uyumlu' : 'SEO Optimized'}
                </div>
              </div>
              <div className="p-4 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <div className="text-sm font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Bakım ve Destek' : 'Support & Maintenance'}
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Shield className="w-6 h-6 text-[#7cff92] mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Premium Web Sitesi' : 'Premium Website'}
                </h4>
                <p className="text-sm text-muted-foreground">{language === 'tr' ? 'Profesyonel ve hızlı yüklenen web siteleri' : 'Professional and fast-loading websites'}</p>
              </div>
              <div className="p-5 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Layout className="w-6 h-6 text-[#7cff92] mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'E-Ticaret Altyapısı' : 'E-Commerce Platform'}
                </h4>
                <p className="text-sm text-muted-foreground">{language === 'tr' ? 'Satış yapabileceğiniz tamamlanmış altyapı' : 'Complete infrastructure to start selling'}</p>
              </div>
              <div className="p-5 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Cpu className="w-6 h-6 text-[#7cff92] mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Mobil Uygulama' : 'Mobile App'}
                </h4>
                <p className="text-sm text-muted-foreground">{language === 'tr' ? 'iOS ve Android için native uygulamalar' : 'Native apps for iOS and Android'}</p>
              </div>
              <div className="p-5 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Zap className="w-6 h-6 text-[#7cff92] mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Süreç Otomasyonu' : 'Process Automation'}
                </h4>
                <p className="text-sm text-muted-foreground">{language === 'tr' ? 'Tekrar eden işleri otomatikleştirin' : 'Automate repetitive tasks'}</p>
              </div>
              <div className="p-5 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Cloud className="w-6 h-6 text-[#7cff92] mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Yapay Zeka Entegrasyonu' : 'AI Integration'}
                </h4>
                <p className="text-sm text-muted-foreground">{language === 'tr' ? 'Yapay zeka ile işlerinizi dönüştürün' : 'Transform your business with AI'}</p>
              </div>
              <div className="p-5 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Settings className="w-6 h-6 text-[#7cff92] mb-3" />
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'tr' ? 'Kişiye Özel Yazılım' : 'Custom Software'}
                </h4>
                <p className="text-sm text-muted-foreground">{language === 'tr' ? 'Tam olarak ihtiyacınıza uygun çözümler' : 'Solutions tailored to your needs'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI, Automation & Custom Software Section */}
      <section className="py-20 sm:py-32 border-t border-border/50 bg-gradient-to-b from-background via-[#7cff92]/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7cff92]/10 rounded-full border border-[#7cff92]/30">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7cff92]">
                  {language === 'tr' ? 'YÜKSEK ETKİLİ · STRATEJİK İŞ ORTAKLIĞI' : 'HIGH IMPACT · STRATEGIC PARTNERSHIP'}
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                {language === 'tr' ? 'Yapay Zeka, Otomasyon ve Özel Yazılım' : 'AI, Automation & Custom Software'}
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {language === 'tr'
                  ? 'Tek başına web sitesinin yetmediği noktada devreye giriyoruz. Bot değil — sizin diliniz konuşan, sizin verinizi bilen yapay zeka ajanları (AI agent), resmi WhatsApp Cloud API otomasyonu ve özel yazılım ile ekibinizin haftada saatlerce harcadığı tekrar eden işi sırtınızdan alıyoruz. Aşağıdaki rakamlar gerçek kurulumlarımızdan ölçülen metriklerdir.'
                  : 'We step in where a website alone is not enough. Not bots — AI agents (AI agents) that speak your language and know your data, official WhatsApp Cloud API automation and custom software solutions take recurring tasks off your team\'s shoulders that consume hours weekly. The figures below are metrics measured from our real implementations.'
                }
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* AI Agent */}
              <div className="p-6 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Zap className="w-8 h-8 text-[#7cff92] mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {language === 'tr' ? 'Yapay Zeka Ajanı (AI Agent)' : 'AI Agent'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {language === 'tr'
                    ? 'Claude / OpenAI tabanlı, şirket verinizi (PDF, web, CRM, Notion) RAG ile bilen ajan. Örnek: B2B yazılım firmasında satış öncesi tekrar eden sorularda %70 yük azalması; ekip yalnızca sıcak fırsata bakıyor.'
                    : 'Claude / OpenAI based, agent that knows your company data (PDF, web, CRM, Notion) with RAG. Example: 70% reduction in pre-sales repetitive questions at B2B software firm; team focuses only on hot opportunities.'
                  }
                </p>
              </div>

              {/* WhatsApp Automation */}
              <div className="p-6 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <MessageSquare className="w-8 h-8 text-[#7cff92] mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {language === 'tr' ? 'WhatsApp Otomasyonu' : 'WhatsApp Automation'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {language === 'tr'
                    ? 'Resmi WhatsApp Cloud API üzerinden teklif, randevu ve sipariş akışları — toplu mesaj/spam aracı değil. Örnek: Estetik klinikte yanıt süresi 4 saatten 90 saniyeye, randevu kaçırma oranı yarı yarıya.'
                    : 'Official WhatsApp Cloud API quote, appointment and order flows — not mass messaging/spam tool. Example: Response time from 4 hours to 90 seconds at beauty clinic; appointment miss rate cut in half.'
                  }
                </p>
              </div>

              {/* Process Automation */}
              <div className="p-6 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Settings className="w-8 h-8 text-[#7cff92] mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {language === 'tr' ? 'Süreç Otomasyonu (n8n)' : 'Process Automation (n8n)'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {language === 'tr'
                    ? 'Form → CRM → e-posta → fatura → WhatsApp gibi tekrar eden zincirleri yapay zeka destekli pipeline\'a dönüştürüyoruz. Örnek: Lojistikte sürücü–müşteri eşleştirme 8 saatten 30 dakikaya indi.'
                    : 'Convert repetitive chains like Form → CRM → Email → Invoice → WhatsApp into AI-powered pipelines. Example: Driver-customer matching in logistics reduced from 8 hours to 30 minutes.'
                  }
                </p>
              </div>

              {/* Custom Software */}
              <div className="p-6 rounded-lg border border-border/50 hover:border-[#7cff92]/50 bg-card hover:bg-[#7cff92]/5 transition-all duration-200">
                <Code2 className="w-8 h-8 text-[#7cff92] mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {language === 'tr' ? 'Özel Yazılım' : 'Custom Software'}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {language === 'tr'
                    ? 'İç panel, B2B portal, e-ticaret, entegrasyon, SaaS MVP — Java / Python backend + Next.js ile uçtan uca. Sprint bazlı, her sprintte çalışan teslim, ek kalem yok.'
                    : 'Admin panel, B2B portal, e-commerce, integrations, SaaS MVP — end-to-end with Java / Python backend + Next.js. Sprint-based, working deliverables each sprint, no surprises.'
                  }
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#7cff92] text-background rounded-lg font-semibold hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all group"
              >
                {language === 'tr' ? 'Ücretsiz Keşif Görüşmesi Ayırın' : 'Schedule Free Discovery Call'}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#7cff92]/30 text-foreground rounded-lg font-semibold hover:border-[#7cff92]/80 hover:bg-[#7cff92]/5 transition-all"
              >
                {language === 'tr' ? 'Hizmetler ve Şeffaf Fiyatlar' : 'Services & Pricing'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Projects Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{language === 'tr' ? 'Referans Projeler' : 'Reference Projects'}</h2>
              <p className="text-muted-foreground mt-2">{t('home.allProjectsSubtitle')}</p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#7cff92] hover:text-[#7cff92]/80 transition-colors"
            >
              {t('home.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 8).map((project) => (
              <ProjectCard key={project.id} project={project} />
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

      {/* Ready Templates Section */}
      <section className="py-20 sm:py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                {language === 'tr' ? 'Sektöre Özel Hazır Web Sitesi Şablonları' : 'Industry-Specific Ready Website Templates'}
              </h2>
              <p className="text-muted-foreground mt-2">
                {language === 'tr' ? 'Hızlıca başlamak için önceden tasarlanmış şablonlar' : 'Pre-designed templates to get started quickly'}
              </p>
            </div>
            <Link
              href="/templates"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#7cff92] hover:text-[#7cff92]/80 transition-colors"
            >
              {t('home.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.slice(0, 3).map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
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
              <TemplateCard key={template.id} template={template} />
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
            {/* AI */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <Cpu className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.aiTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.aiDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Solutions */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <Settings className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.customSolutionsTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.customSolutionsDesc')}
                  </p>
                </div>
              </div>
            </div>

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


            {/* Consultation CTA */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <MessageSquare className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.consultationTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.consultationDesc')}
                  </p>
                </div>
              </div>
            </div>


            {/* Dev Ops */}
            <div className="group bg-card border border-border/50 rounded-xl p-6 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
                  <Server className="w-6 h-6 text-[#7cff92]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors">
                    {t('home.aboutExpertise.devOpsTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('home.aboutExpertise.devOpsDesc')}
                  </p>
                </div>
              </div>
            </div>


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
