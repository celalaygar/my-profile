'use client';

import { Template } from '@/types';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, Layout } from 'lucide-react';
import Link from 'next/link';

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const { t } = useI18n();

  // Generate stats for templates
  const stats = [
    { label: t('cards.pages'), value: '~8+' },
    { label: t('cards.legal'), value: t('cards.included') },
    { label: t('cards.techSeo'), value: 'OG + Meta' },
  ];

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col h-full">
      {/* Image Section - Full Width */}
      <Link href={template.url} target="_blank" rel="noopener noreferrer" aria-label={`${template.title} — ${t('cards.templateDetail')}`}>
        <div className="relative w-full h-44 overflow-hidden">
          {template.image ? (
            <img
              src={template.image}
              alt={`${template.title} — ${template.type} template`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
              <Layout className="w-8 h-8 text-zinc-500" />
            </div>
          )}
        </div>
      </Link>

      {/* Content Section */}
      <div className="space-y-4 p-5 flex flex-col flex-grow">
        {/* Title and Category Badge Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-100">
            {template.title}
          </h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] border-white/20 bg-white/5 text-zinc-200 shrink-0">
            {template.type}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-3">
          {template.description}
        </p>

        {/* Stats Grid - 3 Columns */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="text-[10px] uppercase tracking-[0.08em] text-zinc-500">{stat.label}</p>
              <p className="text-xs font-semibold text-zinc-100">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-2 mt-auto pt-2">
          <Link
            href={template.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7cff92] hover:text-[#7cff92]/80 transition-colors duration-200"
          >
            {t('cards.templateDetail')}
          </Link>
          <Link
            href={template.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
          >
            <ExternalLink size={14} />
            {t('cards.liveDemo')}
          </Link>
        </div>
      </div>
    </article>
  );
}
