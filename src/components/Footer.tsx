import React from 'react';
import { Github, Twitter, Mail, Globe, MessageSquare, ExternalLink, Heart, Sparkles, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#08090f] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-8 lg:px-16 mt-20 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Row: Brand & Creator Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 via-purple-600 to-indigo-600 p-[1px] shadow-[0_0_15px_-2px_rgba(244,63,94,0.4)]">
                <div className="w-full h-full bg-[#0d0e17] rounded-[11px] flex items-center justify-center">
                  <span className="font-japanese font-black text-rose-400 text-sm leading-none">
                    ア
                  </span>
                </div>
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                Animella
              </span>
              <span className="font-japanese text-xs text-rose-400/90 font-medium">
                アニメラ
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              Animella is a curated discovery catalog for 50 legendary anime masterworks, celebrating Japanese animation art, storytellers, studios, and memorable characters.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Catalog status: 50 Masterpieces Indexed</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col space-y-2.5">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-2">
              Navigation
            </h4>
            <a href="#hero" className="text-xs sm:text-sm hover:text-white transition-colors">
              Featured Hero
            </a>
            <a href="#trending" className="text-xs sm:text-sm hover:text-white transition-colors">
              Trending Top 10
            </a>
            <a href="#explore" className="text-xs sm:text-sm hover:text-white transition-colors">
              Explore All 50 Anime
            </a>
            <a href="#seasonal" className="text-xs sm:text-sm hover:text-white transition-colors">
              Seasonal Releases
            </a>
            <a href="#characters" className="text-xs sm:text-sm hover:text-white transition-colors">
              Iconic Characters
            </a>
          </div>

          {/* Creator Profile / Made by Wasee (4 cols) */}
          <div className="md:col-span-4 flex flex-col p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <div className="flex items-center gap-2 mb-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Platform Architect</span>
            </div>

            {/* Made by Wasee link with highlight */}
            <h4 className="font-display font-bold text-base text-white flex items-center gap-2">
              <span>Made by</span>
              <a
                href="https://wasee.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-purple-400 hover:opacity-80 transition-opacity underline decoration-rose-500/40 underline-offset-4"
              >
                wasee
              </a>
              <span className="text-xs font-mono text-slate-500">(@wyzuk)</span>
            </h4>

            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Developer &amp; Linux enthusiast. Creator of Yumemiro OS, Wyzuk Cast, YourCraft, and Animella.
            </p>

            {/* Social Accounts Grid */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-white/[0.06]">
              {/* GitHub */}
              <a
                href="https://github.com/wyzuk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs transition-colors"
                title="GitHub @wyzuk"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
              </a>

              {/* Website */}
              <a
                href="https://wasee.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs transition-colors"
                title="wasee.dev"
              >
                <Globe className="w-3.5 h-3.5 text-rose-400" />
                <span>wasee.dev</span>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/w_jamim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs transition-colors"
                title="X @w_jamim"
              >
                <Twitter className="w-3.5 h-3.5 text-cyan-400" />
                <span>X / Twitter</span>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/330355220284571649"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs transition-colors"
                title="Discord"
              >
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                <span>Discord</span>
              </a>

              {/* Email */}
              <a
                href="mailto:onlyjamim@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs transition-colors"
                title="Email Wasee"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Email</span>
              </a>
            </div>

            {/* Source repo badge */}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <a
                href="https://github.com/wyzuk/animella.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-rose-300 transition-colors font-mono"
              >
                <Terminal className="w-3 h-3 text-rose-400" />
                <span>github.com/wyzuk/animella</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Animella (アニメラ). Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline" />
            <span>by</span>
            <a
              href="https://wasee.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white font-medium underline"
            >
              wasee
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-japanese">
            <span>アニメーション発見プラットフォーム</span>
            <span>•</span>
            <span>東京 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
