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
        {
          project.image_url ? (
            <img
              src={project.image_url}
              alt={`${project.name} screenshot`}
              style={{ width: project.type === 'Mobile App' ? '150px' : '270px' }}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          )
        }
<<<<<<< HEAD
        
=======
>>>>>>> 6ae9704e885b21fd9591c3a434ae2d597adcc1a4

        {/* Type badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide bg-[#7cff92]/90 text-background rounded-md backdrop-blur-sm">
          {project.type}
        </div>
      </div>

      <div className="relative p-6 flex flex-col h-full">
        {/* Type Badge - Prominent */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#7cff92]/20 text-[#7cff92] rounded-full border border-[#7cff92]/30">
            {project.type}
          </span>
        </div>

        {/* Title - Primary */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-2">
          {project.name}
        </h3>

        {/* Short Description - Subtitle */}
        <p className="text-sm font-semibold text-[#7cff92]/80 mb-3 uppercase tracking-wide">
          {project.short_description}
        </p>

        {/* Long Description - Full paragraph */}
        <p className="text-sm text-foreground/80 mb-5 leading-relaxed line-clamp-3 mb-5">
          {project.long_description}
        </p>

        {/* Technologies - Complete List */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Technologies ({project.technologies.length})</p>
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

        {/* Action Section - View Project Link */}
        <div className="pt-4 border-t border-border/30">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold bg-[#7cff92]/10 text-[#7cff92] border border-[#7cff92]/30 hover:bg-[#7cff92]/20 hover:border-[#7cff92]/60 transition-all duration-200 group/link"
          >
            <span>View Project</span>
            <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Expanded Details - Show all info clearly */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-border/30 space-y-4 animate-in fade-in slide-in-from-top-2">
            <div>
              <h4 className="text-xs uppercase tracking-wide font-bold text-[#7cff92] mb-2">Full Details</h4>
              <div className="space-y-3 text-sm text-foreground/80">
                <div>
                  <span className="font-semibold text-foreground">Project Type:</span>
                  <p className="mt-1">{project.type}</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Description:</span>
                  <p className="mt-1">{project.long_description}</p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Technologies:</span>
                  <p className="mt-1">{project.technologies.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-[#7cff92]/40 group-hover:w-full transition-all duration-300" />

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="absolute top-6 right-6 p-1.5 rounded-lg text-muted-foreground hover:text-[#7cff92] hover:bg-[#7cff92]/10 transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Toggle details"
          title="Show more details"
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}
