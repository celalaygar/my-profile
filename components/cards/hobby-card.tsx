'use client';

import { Hobby } from '@/types';
import { Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

interface HobbyCardProps {
  hobby: Hobby;
}

export function HobbyCard({ hobby }: HobbyCardProps) {
  const { language } = useI18n();
  const text = language === 'tr' ? hobby.tr : hobby.en;

  return (
    <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-2xl hover:shadow-[#7cff92]/10">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative p-6 sm:p-8">
        {/* Icon with hover effect */}
        <div className="mb-4 p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110 w-fit">
          <Sparkles className="w-6 h-6 text-[#7cff92]" />
        </div>

        {/* Text */}
        <p className="text-lg sm:text-xl font-bold text-foreground group-hover:text-[#7cff92] transition-colors duration-200">
          {text}
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
}
