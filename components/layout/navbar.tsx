'use client';

import { useI18n } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { Menu, X, Code2, Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Primary navigation items (always visible on desktop)
const primaryNavItems = [
  { key: 'home', href: '/' },
  { key: 'projects', href: '/projects' },
  { key: 'templates', href: '/templates' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
];

// Secondary navigation items (in dropdown menu)
const secondaryNavItems = [
  { key: 'experience', href: '/experience' },
  { key: 'articles', href: '/articles' },
  { key: 'interview', href: '/interview' },
  { key: 'games', href: '/games' },
];

const allNavItems = [...primaryNavItems, ...secondaryNavItems];

export function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-[#7cff92] to-[#7cff92]/60 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200 shrink-0"
          >
            <Code2 className="w-5 h-5 text-[#7cff92]" />
            <span>Dev</span>
          </Link>

          {/* Desktop Navigation - Primary */}
          <div className="hidden md:flex items-center gap-0.5">
            {primaryNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200 hover:shadow-sm"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            {/* More Menu Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200 hover:shadow-sm flex items-center gap-1">
                More
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                  More Pages
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {secondaryNavItems.map((item) => (
                  <DropdownMenuItem key={item.key} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      {t(`nav.${item.key}`)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Section - Contact, Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Contact Link - Desktop */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200 hover:shadow-sm"
            >
              {t('nav.contact')}
            </Link>
            {/* Language Switcher Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all duration-200 hover:shadow-sm">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline uppercase text-xs font-semibold">{language}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t('common.language')}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={language} onValueChange={(value) => setLanguage(value as any)}>
                  <DropdownMenuRadioItem value="en">
                    <span>English</span>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="tr">
                    <span>Türkçe</span>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="de">
                    <span>Deutsch</span>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-border/40 pt-4 animate-in fade-in slide-in-from-top-2">
            {allNavItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-200 sm:hidden"
            >
              {t('nav.contact')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
