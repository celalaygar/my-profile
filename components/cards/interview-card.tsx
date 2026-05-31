'use client';

import { InterviewQuestion } from '@/types';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface InterviewQuestionCardProps {
  question: InterviewQuestion;
}

export function InterviewQuestionCard({ question }: InterviewQuestionCardProps) {
  const { t } = useI18n();

  // Generate stats for interview questions
  const stats = [
    { label: t('interview.question'), value: `${question.tags.length}+` },
    { label: t('common.language'), value: 'TR / EN' },
    { label: 'Level', value: 'All' },
  ];

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col h-full">
      {/* Image Section - Full Width */}
      <Link href={question.url} target="_blank" rel="noopener noreferrer" aria-label={`${question.title} — ${t('interview.question')}`}>
        <div className="relative w-full h-44 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#7cff92]/10 to-zinc-900">
          <HelpCircle className="w-16 h-16 text-[#7cff92]/40 group-hover:text-[#7cff92]/80 transition-all duration-300 group-hover:scale-110" />
        </div>
      </Link>

      {/* Content Section */}
      <div className="space-y-4 p-5 flex flex-col flex-grow">
        {/* Title and Category Badge Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-100">
            {question.title}
          </h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] border-white/20 bg-white/5 text-zinc-200 shrink-0">
            {t('interview.title').split(' ')[0]}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-3">
          {question.long_description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {question.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-semibold bg-[#7cff92]/15 text-[#7cff92] rounded-full border border-[#7cff92]/20"
            >
              {tag}
            </span>
          ))}
          {question.tags.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-white/5 text-zinc-400 rounded-full border border-white/10">
              +{question.tags.length - 4}
            </span>
          )}
        </div>

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
            href={question.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7cff92] hover:text-[#7cff92]/80 transition-colors duration-200"
          >
            {t('common.viewMore')}
          </Link>
          <Link
            href={question.url}
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
