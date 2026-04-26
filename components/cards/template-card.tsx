'use client';

import { Template } from '@/types';
import { ExternalLink, Layout } from 'lucide-react';
import Link from 'next/link';

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-2xl hover:shadow-[#7cff92]/10">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image placeholder with overlay */}
      <div className="relative h-40 bg-gradient-to-br from-[#7cff92]/20 to-[#7cff92]/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Icon centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Layout className="w-12 h-12 text-[#7cff92]/40" />
        </div>

        {/* Hover shine effect */}
        <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Type badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide bg-[#7cff92]/90 text-background rounded-md backdrop-blur-sm">
          {template.type}
        </div>
      </div>

      <div className="relative p-6 flex flex-col">
        {/* Type Badge - Prominent */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#7cff92]/20 text-[#7cff92] rounded-full border border-[#7cff92]/30">
            {template.type}
          </span>
        </div>

        {/* Title - Primary */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-2">
          {template.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
          {template.description}
        </p>

        {/* Action Section - View Template Link */}
        <div className="pt-4 border-t border-border/30 mt-auto">
          <Link
            href={template.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold bg-[#7cff92]/10 text-[#7cff92] border border-[#7cff92]/30 hover:bg-[#7cff92]/20 hover:border-[#7cff92]/60 transition-all duration-200 group/link"
          >
            <span>View Template</span>
            <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-[#7cff92]/40 group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
}
