'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { useI18n } from '@/lib/i18n';
import experienceData from '@/data/experience.json';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight,
  Building2,
  Code2,
  Layers,
  Server,
  Database,
  Globe
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  project?: string;
  start_date: string;
  end_date: string;
  duration: string;
  responsibilities: string[];
  tools_technologies: string[];
}

const companyIcons: Record<string, React.ReactNode> = {
  'FMSS Bilisim Teknoloji': <Server size={24} />,
  'Orion BT': <Layers size={24} />,
  'OBSS': <Globe size={24} />,
  'VİA Bilgisayar Sistemleri': <Database size={24} />,
  'ERC Mühendislik Danışmanlık ve ARGE Hizmetleri': <Code2 size={24} />,
};

export default function ExperiencePage() {
  const { t } = useI18n();
  const experiences: ExperienceItem[] = experienceData;

  // Calculate stats
  const totalYears = 5;
  const totalCompanies = new Set(experiences.map(e => e.company)).size;
  const totalProjects = experiences.length;

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase size={32} className="text-[#7cff92]" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {t('experience.title')}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <div className="p-6 rounded-xl bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 hover:bg-[#7cff92]/10 transition-all duration-300 text-center group">
              <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2 group-hover:scale-110 transition-transform duration-300">{totalYears}+</p>
              <p className="text-sm text-muted-foreground">{t('experience.stats.years')} {t('experience.stats.totalExperience')}</p>
            </div>
            <div className="p-6 rounded-xl bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 hover:bg-[#7cff92]/10 transition-all duration-300 text-center group">
              <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2 group-hover:scale-110 transition-transform duration-300">{totalCompanies}</p>
              <p className="text-sm text-muted-foreground">{t('experience.stats.companies')}</p>
            </div>
            <div className="p-6 rounded-xl bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 hover:bg-[#7cff92]/10 transition-all duration-300 text-center group">
              <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2 group-hover:scale-110 transition-transform duration-300">{totalProjects}</p>
              <p className="text-sm text-muted-foreground">{t('experience.stats.projects')}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#7cff92] via-[#7cff92]/50 to-transparent" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#7cff92] border-4 border-background shadow-[0_0_20px_rgba(124,255,146,0.5)] z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="group p-6 rounded-xl bg-card border border-border/50 hover:border-[#7cff92]/50 hover:shadow-[0_0_30px_rgba(124,255,146,0.15)] transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-[#7cff92]/10 text-[#7cff92] group-hover:bg-[#7cff92]/20 transition-colors duration-300">
                          {companyIcons[exp.company] || <Building2 size={24} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-[#7cff92] transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <p className="text-sm text-[#7cff92] font-medium">{exp.position}</p>
                          {exp.project && (
                            <p className="text-xs text-muted-foreground mt-1">{exp.project}</p>
                          )}
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar size={14} className="text-[#7cff92]" />
                        <span>{exp.start_date} - {exp.end_date === 'Today' ? t('experience.present') : exp.end_date}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#7cff92]/10 text-[#7cff92] text-xs font-medium">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          {t('experience.responsibilities')}
                        </h4>
                        <ul className="space-y-1.5">
                          {exp.responsibilities.slice(0, 4).map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ChevronRight size={14} className="text-[#7cff92] mt-0.5 shrink-0" />
                              <span className="line-clamp-2">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          {t('experience.technologies')}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tools_technologies.slice(0, 8).map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 text-xs rounded-md bg-[#7cff92]/5 text-[#7cff92]/80 border border-[#7cff92]/20 hover:border-[#7cff92]/50 hover:bg-[#7cff92]/10 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.tools_technologies.length > 8 && (
                            <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                              +{exp.tools_technologies.length - 8}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
