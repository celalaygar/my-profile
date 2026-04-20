'use client';

import { Project } from '@/types';
import { ExternalLink, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-2xl hover:shadow-[#7cff92]/10">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image placeholder with overlay */}
      <div className="relative h-40 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Hover shine effect */}
        <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Type badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide bg-[#7cff92]/90 text-background rounded-md backdrop-blur-sm">
          {project.type}
        </div>
      </div>

      <div className="relative p-6 flex flex-col h-full">
        {/* Title and Short Description */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-2">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 font-medium">
            {project.short_description}
          </p>
        </div>

        {/* Long Description - Always visible */}
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2 flex-grow leading-relaxed">
          {project.long_description}
        </p>

        {/* All Technologies - Always visible */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="px-2.5 py-1 text-xs font-semibold bg-[#7cff92]/15 text-[#7cff92] rounded-full hover:bg-[#7cff92]/25 transition-colors duration-200 backdrop-blur-sm border border-[#7cff92]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-background bg-[#7cff92] rounded-lg hover:bg-[#7cff92]/90 hover:shadow-lg hover:shadow-[#7cff92]/30 transition-all duration-200 group/link"
          >
            <span>View Project</span>
            <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Expand button for additional info */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
            aria-label="Toggle details"
          >
            <ChevronDown 
              size={20} 
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Expanded Details */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-border/50 space-y-3 animate-in fade-in slide-in-from-top-2">
            <div>
              <h4 className="text-xs uppercase tracking-wide font-semibold text-[#7cff92] mb-2">Full Description</h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {project.long_description}
              </p>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-wide font-semibold text-[#7cff92] mb-2">Tech Stack ({project.technologies.length})</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={`${tech}-${index}-expanded`}
                    className="px-3 py-1.5 text-xs font-medium bg-[#7cff92]/20 text-[#7cff92] rounded-full border border-[#7cff92]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-[#7cff92]/40 group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
}
