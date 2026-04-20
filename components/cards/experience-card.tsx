'use client';

import { Experience } from '@/types';
import { Calendar } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const startDate = new Date(experience.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
  const endDate = experience.endDate
    ? new Date(experience.endDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      })
    : 'Present';

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline marker */}
      <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
      {/* Timeline line */}
      <div className="absolute left-1.5 top-4 w-0.5 h-full bg-gradient-to-b from-primary to-primary/30" />

      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{experience.position}</h3>
            <p className="text-sm text-muted-foreground">{experience.company}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Calendar size={16} />
          <span>
            {startDate} — {endDate}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
