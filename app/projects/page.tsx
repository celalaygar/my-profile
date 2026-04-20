'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ProjectCard } from '@/components/cards/project-card';
import { useI18n } from '@/lib/i18n';
import { projects } from '@/data';
import { useState, useMemo } from 'react';

export default function ProjectsPage() {
  const { t } = useI18n();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get unique project types
  const projectTypes = useMemo(() => {
    const types = projects
      .map((p) => p.type)
      .filter(Boolean) as string[];
    return Array.from(new Set(types));
  }, []);

  // Filter projects based on selected type
  const filteredProjects = useMemo(() => {
    if (!selectedType) return projects;
    return projects.filter((p) => p.type === selectedType);
  }, [selectedType]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {t('projects.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Filter Buttons */}
          {projectTypes.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedType === null
                    ? 'bg-[#7cff92] text-background shadow-lg shadow-[#7cff92]/30'
                    : 'bg-card border border-border text-foreground hover:border-[#7cff92]/50 hover:bg-[#7cff92]/5'
                }`}
              >
                {t('projects.allProjects')}
              </button>
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-[#7cff92] text-background shadow-lg shadow-[#7cff92]/30'
                      : 'bg-card border border-border text-foreground hover:border-[#7cff92]/50 hover:bg-[#7cff92]/5'
                  }`}
                >
                  {type} ({projects.filter((p) => p.type === type).length})
                </button>
              ))}
            </div>
          )}

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t('projects.empty')}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
