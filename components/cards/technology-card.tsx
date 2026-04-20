'use client';

import { Technology } from '@/types';

interface TechnologyCardProps {
  technology: Technology;
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const level = technology.level;

  // Get proficiency text and color based on level
  const getProficiency = (level: number) => {
    if (level >= 90) return { text: 'Expert', color: 'bg-[#7cff92]/20 text-[#7cff92] border-[#7cff92]/30' };
    if (level >= 80) return { text: 'Advanced', color: 'bg-[#7cff92]/20 text-[#7cff92] border-[#7cff92]/30' };
    if (level >= 60) return { text: 'Intermediate', color: 'bg-[#7cff92]/15 text-[#7cff92] border-[#7cff92]/25' };
    return { text: 'Beginner', color: 'bg-border text-muted-foreground' };
  };

  const proficiency = getProficiency(level);

  return (
    <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-lg hover:shadow-[#7cff92]/10 p-4">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative space-y-3">
        {/* Header with name and proficiency badge */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-foreground group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-1">
            {technology.name}
          </h3>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-md border whitespace-nowrap ${proficiency.color}`}>
            {proficiency.text}
          </span>
        </div>

        {/* Progress bar with percentage */}
        <div className="space-y-1.5">
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#7cff92] to-[#7cff92]/70 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#7cff92]/50"
              style={{ width: `${level}%` }}
            />
          </div>
          <div className="flex justify-end">
            <span className="text-xs font-medium text-[#7cff92] group-hover:text-[#7cff92]/90">
              {level}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
    </div>
  );
}
