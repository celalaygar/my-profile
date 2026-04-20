'use client';

import { InterviewQuestion } from '@/types';
import { ExternalLink, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface InterviewQuestionCardProps {
  question: InterviewQuestion;
}

export function InterviewQuestionCard({ question }: InterviewQuestionCardProps) {
  return (
    <Link href={question.url} target="_blank" rel="noopener noreferrer">
      <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-2xl hover:shadow-[#7cff92]/10 cursor-pointer">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="relative p-6 sm:p-8">
          {/* Icon with hover effect */}
          <div className="mb-4 flex items-start justify-between">
            <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
              <HelpCircle className="w-6 h-6 text-[#7cff92]" />
            </div>
            <ExternalLink 
              size={20} 
              className="text-[#7cff92]/60 group-hover:text-[#7cff92] transition-all duration-200 opacity-0 group-hover:opacity-100" 
            />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-2">
            {question.title}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-200">
            {question.short_description}
          </p>

          {/* Long Description */}
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2 leading-relaxed">
            {question.long_description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {question.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-semibold bg-[#7cff92]/15 text-[#7cff92] rounded-full hover:bg-[#7cff92]/25 transition-colors duration-200 backdrop-blur-sm border border-[#7cff92]/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#7cff92] group-hover:text-[#7cff92]/90 transition-colors duration-200">
            <span>View Questions</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
