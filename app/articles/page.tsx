'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ArticleCard } from '@/components/cards/article-card';
import { useI18n } from '@/lib/i18n';
import { articles } from '@/data';
import { BookOpen } from 'lucide-react';

export default function ArticlesPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen size={32} className="text-[#7cff92]" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {t('articles.title')}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on backend development, microservices, databases, and distributed systems.
            </p>
          </div>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t('articles.empty')}</p>
            </div>
          )}

          {/* Stats Section */}
          {articles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-2xl mx-auto">
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{articles.length}</p>
                  <p className="text-sm text-muted-foreground">Articles Published</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">Medium</p>
                  <p className="text-sm text-muted-foreground">Published On</p>
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
