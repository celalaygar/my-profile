'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export function CookieBanner() {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    localStorage.setItem('analytics-enabled', 'true');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'essential');
    localStorage.setItem('analytics-enabled', 'false');
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', analyticsEnabled ? 'all' : 'essential');
    localStorage.setItem('analytics-enabled', analyticsEnabled.toString());
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div className="rounded-xl border border-white/15 bg-zinc-900/95 backdrop-blur-lg p-5 shadow-[0_-8px_40px_rgba(0,0,0,0.45)] max-w-xl w-full sm:p-6">
        {!showPreferences ? (
          <>
            <p className="text-sm leading-relaxed text-zinc-300">
              {t('cookies.bannerText')}{' '}
              <Link 
                href="/cookies" 
                className="font-medium text-[#7cff92] underline underline-offset-2 hover:brightness-110"
              >
                {t('cookies.policyLink')}
              </Link>.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                onClick={acceptAll}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-[#7cff92] text-black hover:brightness-110 shadow-[0_0_30px_-12px_#7cff92] h-9 rounded-xl px-3 text-xs"
              >
                {t('cookies.acceptAll')}
              </button>
              <button
                onClick={rejectAll}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-white/5 text-white hover:bg-white/10 border border-white/10 h-9 rounded-xl px-3 text-xs"
              >
                {t('cookies.reject')}
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="text-sm text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
              >
                {t('cookies.managePreferences')}
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-white mb-4">{t('cookies.preferencesTitle')}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <p className="text-sm font-medium text-white">{t('cookies.essentialTitle')}</p>
                  <p className="text-xs text-zinc-400 mt-1">{t('cookies.essentialDesc')}</p>
                </div>
                <span className="text-xs text-[#7cff92] font-medium">{t('cookies.required')}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                <div>
                  <p className="text-sm font-medium text-white">{t('cookies.analyticsTitle')}</p>
                  <p className="text-xs text-zinc-400 mt-1">{t('cookies.analyticsDesc')}</p>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    analyticsEnabled ? 'bg-[#7cff92]' : 'bg-zinc-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      analyticsEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <button
                onClick={savePreferences}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cff92] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-[#7cff92] text-black hover:brightness-110 shadow-[0_0_30px_-12px_#7cff92] h-9 rounded-xl px-3 text-xs"
              >
                {t('cookies.savePreferences')}
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-sm text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
              >
                {t('cookies.back')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
