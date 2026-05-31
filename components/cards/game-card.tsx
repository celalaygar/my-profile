'use client';

import { Game } from '@/types';
import { useI18n } from '@/lib/i18n';
import { ExternalLink, Gamepad2, Zap, Cpu, Hourglass, BookOpen, Grid3x3, Pyramid } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface GameCardProps {
  game: Game;
}

// Function to select icon based on game type
function getGameIcon(gameName: string) {
  const lowerName = gameName.toLowerCase();
  
  if (lowerName.includes('snake') || lowerName.includes('pac')) return Gamepad2;
  if (lowerName.includes('flappy') || lowerName.includes('helicopter')) return Zap;
  if (lowerName.includes('tetris') || lowerName.includes('tower') || lowerName.includes('break')) return Grid3x3;
  if (lowerName.includes('asteroid') || lowerName.includes('space invader') || lowerName.includes('endless')) return Cpu;
  if (lowerName.includes('word') || lowerName.includes('scrambled') || lowerName.includes('sentence')) return BookOpen;
  if (lowerName.includes('2048') || lowerName.includes('tic tac')) return Grid3x3;
  if (lowerName.includes('simon')) return Pyramid;
  if (lowerName.includes('missing') || lowerName.includes('memory')) return Hourglass;
  
  return Gamepad2;
}

export function GameCard({ game }: GameCardProps) {
  const [imageError, setImageError] = useState(false);
  const { t } = useI18n();
  const IconComponent = getGameIcon(game.name);

  // Generate stats based on game data
  const stats = [
    { label: t('games.play'), value: 'Online' },
    { label: t('common.language'), value: 'TR / EN' },
    { label: 'Platform', value: 'Web' },
  ];

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] flex flex-col h-full">
      {/* Image Section - Full Width */}
      <Link href={game.url} target="_blank" rel="noopener noreferrer" aria-label={`${game.name} — ${t('games.play')}`}>
        <div className="relative w-full h-36 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#7cff92]/20 to-[#7cff92]/5">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <IconComponent className="w-16 h-16 text-[#7cff92]/40 group-hover:text-[#7cff92]/80 transition-all duration-300 group-hover:scale-110" />
        </div>
      </Link>

      {/* Content Section */}
      <div className="space-y-4 p-5 flex flex-col flex-grow">
        {/* Title and Category Badge Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-100">
            {game.name}
          </h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] border-white/20 bg-white/5 text-zinc-200 shrink-0">
            Game
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 line-clamp-3">
          {game.long_description}
        </p>

        {/* Stats Grid - 3 Columns */}
        <div className="grid grid-cols-3 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="text-[10px] uppercase tracking-[0.08em] text-zinc-500">{stat.label}</p>
              <p className="text-xs font-semibold text-zinc-100">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-2 mt-auto pt-2">
          <Link
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7cff92] hover:text-[#7cff92]/80 transition-colors duration-200"
          >
            {t('games.play')}
          </Link>
          <Link
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
          >
            <ExternalLink size={14} />
            Play Now
          </Link>
        </div>
      </div>
    </article>
  );
}
