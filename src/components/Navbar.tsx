import React, { useState, useEffect } from 'react';
import { Search, Bookmark, Menu, X, Sparkles, Compass, Flame, Calendar, Users } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenWatchlist: () => void;
  watchlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenWatchlist,
  watchlistCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', icon: Sparkles },
    { label: 'Trending', href: '#trending', icon: Flame },
    { label: 'Explore', href: '#explore', icon: Compass },
    { label: 'Seasonal', href: '#seasonal', icon: Calendar },
    { label: 'Characters', href: '#characters', icon: Users },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0c14]/85 backdrop-blur-2xl border border-white/15 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(225,29,72,0.15)] py-2.5 px-5 sm:px-6 rounded-full'
            : 'bg-[#10121d]/65 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] py-3.5 px-6 sm:px-8 rounded-full'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 select-none focus:outline-none"
          >
            {/* Japanese Emblemed Icon */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-2xl bg-gradient-to-br from-rose-500 via-purple-600 to-indigo-600 p-[1px] shadow-[0_0_15px_-2px_rgba(244,63,94,0.4)] group-hover:shadow-[0_0_22px_0px_rgba(244,63,94,0.7)] transition-all duration-300">
              <div className="w-full h-full bg-[#0d0e17] rounded-[15px] flex items-center justify-center">
                <span className="font-japanese font-black text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-pink-300 to-purple-300 text-base leading-none">
                  ア
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-extrabold tracking-tight text-xl sm:text-2xl text-white group-hover:text-rose-100 transition-colors">
                  Animella
                </span>
                <span className="font-japanese text-[10px] tracking-wider text-rose-400/90 font-medium hidden sm:inline">
                  アニメラ
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search trigger */}
            <button
              onClick={onOpenSearch}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rose-500/40 text-slate-300 hover:text-white transition-all text-xs"
              title="Search anime (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium">Search</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded text-slate-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Watchlist Bookmark Drawer Trigger */}
            <button
              onClick={onOpenWatchlist}
              className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-rose-400 transition-all"
              title="Saved Watchlist"
            >
              <Bookmark className="w-4 h-4" />
              {watchlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#0b0c14] animate-pulse">
                  {watchlistCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 bg-[#0f101a]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-200 hover:text-white hover:bg-white/10 transition-all text-sm font-medium"
                >
                  <Icon className="w-4 h-4 text-rose-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
