'use client';

import { Article } from '@/types';
import { ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-2xl hover:shadow-[#7cff92]/10 cursor-pointer">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="relative p-6 sm:p-8">
          {/* Icon with hover effect */}
          <div className="mb-4 flex items-start justify-between">
            <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
              <BookOpen className="w-6 h-6 text-[#7cff92]" />
            </div>
            <ExternalLink 
              size={20} 
              className="text-[#7cff92]/60 group-hover:text-[#7cff92] transition-all duration-200 opacity-0 group-hover:opacity-100" 
            />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-2">
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-200">
            {article.short_description}
          </p>

          {/* Read more link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#7cff92] group-hover:text-[#7cff92]/90 transition-colors duration-200">
            <span>Read Article</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
        </div>
      </article>
    </Link>
  );
}
