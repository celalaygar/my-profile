'use client';

import { Project } from '@/types';
import { useI18n } from '@/lib/i18n';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const { t } = useI18n();

  // Generate stats based on project data
  const stats = [
    { label: t('cards.pages'), value: '15+' },
    { label: t('cards.language'), value: 'TR / EN' },
    { label: t('cards.motion'), value: t('cards.yes') },
  ];

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col h-full">
      {/* Image Section - Full Width */}
      {/* Image Section - Full Width */}
      <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — ${t('cards.projectDetail')}`}>
        {/* flex items-center justify-center sınıflarını ekledik */}
        <div className="relative w-full h-36 overflow-hidden flex items-center justify-center bg-zinc-900/50">
          {project.image_url && !imageError ? (
            <img
              src={project.image_url}
              alt={`${project.name} — ${project.type} referans projesi`}
              onError={() => setImageError(true)}
              loading="lazy"
              // w-full h-full object-contain ile resmin bozulmadan sığmasını garanti altına aldık
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
              <div className="text-center text-zinc-500 text-sm">{project.type}</div>
            </div>
          )}
        </div>
      </Link>

      {/* Content Section */}
      <div className="space-y-4 p-5 flex flex-col flex-grow">
        {/* Title and Category Badge Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-100">
            {project.name}
          </h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] border-white/20 bg-white/5 text-zinc-200 shrink-0">
            {project.type}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-3">
          {project.long_description}
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
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7cff92] hover:text-[#7cff92]/80 transition-colors duration-200"
          >
            {t('cards.projectDetail')}
          </Link>
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              <ExternalLink size={14} />
              {t('cards.liveDemo')}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
