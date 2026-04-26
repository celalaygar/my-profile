'use client';

import { Game } from '@/types';
import { ExternalLink, Gamepad2, Zap, Cpu, Hourglass, BookOpen, Grid3x3, Pyramid } from 'lucide-react';
import Link from 'next/link';

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
  const IconComponent = getGameIcon(game.name);

  return (
    <Link href={game.url} target="_blank" rel="noopener noreferrer">
      <div className="group relative bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#7cff92]/50 hover:shadow-2xl hover:shadow-[#7cff92]/10 cursor-pointer">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7cff92]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Game Icon/Thumbnail Area */}
        <div className="relative h-40 bg-gradient-to-br from-[#7cff92]/20 to-[#7cff92]/5 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <IconComponent className="w-16 h-16 text-[#7cff92]/40 group-hover:text-[#7cff92]/80 transition-all duration-300 group-hover:scale-110" />
        </div>

        <div className="relative p-6 sm:p-8">
          {/* Icon with hover effect */}
          <div className="mb-4 flex items-start justify-between">
            <div className="p-3 bg-[#7cff92]/10 rounded-lg group-hover:bg-[#7cff92]/20 transition-all duration-300 group-hover:scale-110">
              <IconComponent className="w-6 h-6 text-[#7cff92]" />
            </div>
            <ExternalLink 
              size={20} 
              className="text-[#7cff92]/60 group-hover:text-[#7cff92] transition-all duration-200 opacity-0 group-hover:opacity-100" 
            />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-[#7cff92] transition-colors duration-200 line-clamp-2">
            {game.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-200">
            {game.long_description}
          </p>

          {/* CTA Link */}
          <div className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-semibold bg-[#7cff92]/10 text-[#7cff92] border border-[#7cff92]/30 group-hover:bg-[#7cff92]/20 group-hover:border-[#7cff92]/60 transition-all duration-200">
            <span>Play Game</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#7cff92] to-transparent group-hover:w-full transition-all duration-300" />
        </div>
      </div>
    </Link>
  );
}
