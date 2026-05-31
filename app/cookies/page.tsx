'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useI18n } from '@/lib/i18n';

export default function CookiesPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 pt-16 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-10 space-y-8">
            <header className="space-y-2">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t('cookies.title')}
              </h1>
              <p className="text-sm text-zinc-500">{t('cookies.lastUpdate')}</p>
            </header>

            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">{t('cookies.section1Title')}</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-zinc-400">
                  {t('cookies.section1Text')}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-100">{t('cookies.section2Title')}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                  <li>{t('cookies.section2Item1')}</li>
                  <li>{t('cookies.section2Item2')}</li>
                  <li>{t('cookies.section2Item3')}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-100">{t('cookies.section3Title')}</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-zinc-400">
                  {t('cookies.section3Text')}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-100">{t('cookies.section4Title')}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                  <li>{t('cookies.section4Item1')}</li>
                  <li>{t('cookies.section4Item2')}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-100">{t('cookies.section5Title')}</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-zinc-400">
                  {t('cookies.section5Text')}
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#7cff92] underline underline-offset-2 hover:brightness-110">https://tools.google.com/dlpage/gaoptout</a>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-100">{t('cookies.section6Title')}</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-zinc-400">
                  {t('cookies.section6Text')}: <a href="mailto:wixtorysoft@gmail.com" className="text-[#7cff92] underline underline-offset-2 hover:brightness-110">wixtorysoft@gmail.com</a>
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-zinc-500">
                  {t('cookies.websites')}: <a href="https://www.wixtory.com" target="_blank" rel="noopener noreferrer" className="text-[#7cff92] underline underline-offset-2 hover:brightness-110">www.wixtory.com</a> | <a href="https://www.celalaygar.com" target="_blank" rel="noopener noreferrer" className="text-[#7cff92] underline underline-offset-2 hover:brightness-110">celalaygar.com</a>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
