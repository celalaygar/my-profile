'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { InterviewQuestionCard } from '@/components/cards/interview-card';
import { useI18n } from '@/lib/i18n';
import { interviewQuestions } from '@/data';
import { HelpCircle } from 'lucide-react';

export default function InterviewPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle size={32} className="text-[#7cff92]" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {t('interview.title')}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive interview question collections covering various technologies and topics. Prepare for your technical interviews with these curated Q&A sets.
            </p>
          </div>

          {/* Interview Questions Grid */}
          {interviewQuestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interviewQuestions.map((question) => (
                <InterviewQuestionCard key={question.id} question={question} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t('interview.empty')}</p>
            </div>
          )}

          {/* Stats Section */}
          {interviewQuestions.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{interviewQuestions.length}</p>
                  <p className="text-sm text-muted-foreground">Question Collections</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{new Set(interviewQuestions.flatMap(q => q.tags)).size}</p>
                  <p className="text-sm text-muted-foreground">Technologies Covered</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{interviewQuestions.reduce((acc, q) => acc + q.tags.length, 0)}</p>
                  <p className="text-sm text-muted-foreground">Total Tags</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
