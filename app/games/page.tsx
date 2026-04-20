'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { GameCard } from '@/components/cards/game-card';
import { useI18n } from '@/lib/i18n';
import { games } from '@/data';
import { Gamepad2 } from 'lucide-react';

export default function GamesPage() {
  const { t } = useI18n();

  // Categorize games
  const classicGames = games.filter(g => {
    const name = g.name.toLowerCase();
    return name.includes('snake') || name.includes('pac') || name.includes('tetris') || 
           name.includes('flappy') || name.includes('asteroid') || name.includes('space');
  });

  const puzzleGames = games.filter(g => {
    const name = g.name.toLowerCase();
    return name.includes('word') || name.includes('scrambled') || name.includes('sentence') ||
           name.includes('2048') || name.includes('search');
  });

  const actionGames = games.filter(g => {
    const name = g.name.toLowerCase();
    return name.includes('break') || name.includes('simon') || name.includes('endless') ||
           name.includes('helicopter') || name.includes('jumper') || name.includes('tower') ||
           name.includes('tic tac') || name.includes('missing');
  });

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Header */}
          <div className="space-y-4 mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gamepad2 size={32} className="text-[#7cff92]" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {t('games.title')}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Play 18 interactive and fun games. From classic arcade games to modern puzzles and word games.
            </p>
          </div>

          {/* All Games Grid */}
          {games.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t('games.empty')}</p>
            </div>
          )}

          {/* Stats Section */}
          {games.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">{games.length}</p>
                  <p className="text-sm text-muted-foreground">Total Games</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">3</p>
                  <p className="text-sm text-muted-foreground">Categories</p>
                </div>
                <div className="p-6 rounded-lg bg-[#7cff92]/5 border border-[#7cff92]/20 hover:border-[#7cff92]/50 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-bold text-[#7cff92] mb-2">Hours</p>
                  <p className="text-sm text-muted-foreground">Of Entertainment</p>
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
