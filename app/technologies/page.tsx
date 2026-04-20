'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { TechnologyCard } from '@/components/cards/technology-card';
import { useI18n } from '@/lib/i18n';
import { technologyGroups } from '@/data';
import { Code2, Database, Package, Cpu, Zap, GitBranch } from 'lucide-react';

// Map group names to icons
function getGroupIcon(group: string) {
  const lowerGroup = group.toLowerCase();
  if (lowerGroup.includes('backend')) return Package;
  if (lowerGroup.includes('frontend')) return Code2;
  if (lowerGroup.includes('mobile')) return Zap;
  if (lowerGroup.includes('database')) return Database;
  if (lowerGroup.includes('devops') || lowerGroup.includes('infrastructure')) return Cpu;
  if (lowerGroup.includes('tools') || lowerGroup.includes('messaging')) return GitBranch;
  return Package;
}

export default function TechnologiesPage() {
  const { t } = useI18n();

  // Calculate total technologies
  const totalTech = technologyGroups.reduce((acc, group) => acc + group.technologies.length, 0);
  
  // Calculate average proficiency
  const avgProficiency = Math.round(
    technologyGroups.reduce((acc, group) => 
      acc + group.technologies.reduce((sum, tech) => sum + tech.level, 0),
      0
    ) / totalTech
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {t('technologies.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of technologies and tools I&apos;ve mastered throughout my professional journey.
            </p>
          </div>

          {/* Technologies by Group */}
          <div className="space-y-14">
            {technologyGroups.map((group) => {
              const IconComponent = getGroupIcon(group.group);
              return (
                <div key={group.group}>
                  {/* Group Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-[#7cff92]/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-[#7cff92]" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{group.group}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {group.technologies.length} {group.technologies.length === 1 ? 'technology' : 'technologies'}
                      </p>
                    </div>
                  </div>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {group.technologies.map((tech) => (
                      <TechnologyCard key={tech.id} technology={tech} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-12 border-t border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{totalTech}</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{technologyGroups.length}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{avgProficiency}%</p>
                <p className="text-sm text-muted-foreground">Average Skill</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
