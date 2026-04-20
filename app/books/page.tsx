'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BookCard } from '@/components/cards/book-card';
import { HobbyCard } from '@/components/cards/hobby-card';
import { useI18n } from '@/lib/i18n';
import { books, hobbies } from '@/data';
import { BookOpen, Zap } from 'lucide-react';

export default function BooksPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen size={32} className="text-[#7cff92]" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                Books & Hobbies
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Books that inspire my development journey and hobbies that fuel my passion for continuous learning and personal growth.
            </p>
          </div>

          {/* Books Section */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen size={28} className="text-[#7cff92]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">My Books</h2>
            </div>
            {books.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No books available</p>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="my-16 border-t border-border/50" />

          {/* Hobbies Section */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Zap size={28} className="text-[#7cff92]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">My Hobbies</h2>
            </div>
            {hobbies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hobbies.map((hobby) => (
                  <HobbyCard key={hobby.id} hobby={hobby} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No hobbies available</p>
              </div>
            )}
          </div>

          {/* Stats Section */}
          {(books.length > 0 || hobbies.length > 0) && (
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-2xl mx-auto">
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{books.length}</p>
                  <p className="text-sm text-muted-foreground">Books Read</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{hobbies.length}</p>
                  <p className="text-sm text-muted-foreground">Hobbies</p>
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
