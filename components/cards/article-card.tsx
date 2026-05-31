'use client';

import { Article } from '@/types';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { t } = useI18n();

  // Generate stats for articles
  const stats = [
    { label: t('articles.readTime'), value: '5 min' },
    { label: t('common.language'), value: 'TR' },
    { label: 'Platform', value: 'Medium' },
  ];

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col h-full">
      {/* Image Section - Full Width */}
      <Link href={article.link} target="_blank" rel="noopener noreferrer" aria-label={`${article.title} — ${t('articles.title')}`}>
        <div className="relative w-full h-44 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#7cff92]/10 to-zinc-900">
          <BookOpen className="w-16 h-16 text-[#7cff92]/40 group-hover:text-[#7cff92]/80 transition-all duration-300 group-hover:scale-110" />
        </div>
      </Link>

      {/* Content Section */}
      <div className="space-y-4 p-5 flex flex-col flex-grow">
        {/* Title and Category Badge Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-100">
            {article.title}
          </h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] border-white/20 bg-white/5 text-zinc-200 shrink-0">
            {t('articles.title').split(' ')[0]}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-3">
          {article.short_description}
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
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7cff92] hover:text-[#7cff92]/80 transition-colors duration-200"
          >
            {t('common.viewMore')}
          </Link>
          <Link
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
          >
            <ExternalLink size={14} />
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}
