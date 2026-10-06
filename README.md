# 🌸 Animella (アニメラ) 

> **Animella** is a glossy, cinematic, and modern Japanese anime discovery platform featuring **50 iconic anime series**, comprehensive metadata, character showcases, seasonal guides, and trailer previews.

Designed with a dark-first aesthetic, glassy surfaces, smooth curved cards, refined typography, and subtle Japanese editorial details.

---

## ✨ Features

- **Cinematic Hero Showcase**: Large anime artwork with dark gradient overlays, subtle parallax movement on mouse hover, trailer playback, details modal, and a thumbnail switcher for 10 featured titles.
- **Top 50 Anime Database**: 50 popular and legendary titles including *One Piece*, *Jujutsu Kaisen*, *Demon Slayer*, *Attack on Titan*, *Solo Leveling*, *Frieren*, *Chainsaw Man*, *Dandadan*, *Cyberpunk: Edgerunners*, *Oshi no Ko*, and classic masterpieces like *Death Note*, *Fullmetal Alchemist*, *Berserk*, and *Evangelion*.
- **Local High-Resolution Assets**:
  - `50` High-res official posters in `/assets/anime/`
  - `50` Wide cinematic banners in `/assets/anime/banners/`
  - `296` Character portraits in `/assets/characters/`
- **Dynamic Exploration & Filtering**: Real-time filtering by genre (Action, Adventure, Romance, Fantasy, Sci-Fi, Psychological, etc.), broadcast status, and sorting by Popularity, Rating, Release Year, and Alphabetical.
- **Iconic Character Gallery**: Circular & curved character cards showcasing names, roles, Japanese typography, and Japanese voice actors (CV).
- **Seasonal Releases**: Organized views for Fall, Winter, Spring, and Summer broadcast seasons.
- **Instant Search & Command Palette (`⌘K` / `Ctrl+K`)**: Live search across English titles, native Japanese kana/kanji, Romaji (e.g. searching `kimetsu` finds *Demon Slayer*, `naruto` finds both *Naruto* & *Shippuden*), studios, and characters.
- **Interactive Watchlist**: LocalStorage-persisted bookmarks with celebratory confetti animations and slide-out drawer management.
- **Official Trailer Modal**: Embedded video player for anime trailers.
- **Responsive & Touch-Friendly**: Tailored for mobile, tablet, and desktop viewing with floating curved glass navigation.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with customized glassmorphism, Japanese typography, and micro-interactions
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Data**: Curated anime dataset with official AniList metadata and localized assets

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/wyzuk/animella.git

# Enter project directory
cd animella

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Directory Structure

```
animella/
├── assets/                  # Local anime poster, banner, and character artwork
│   ├── anime/
│   │   ├── banners/
│   │   └── *.jpg
│   └── characters/
├── public/                  # Static assets served at root
│   ├── assets/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimeCard.tsx
│   │   ├── AnimeDetailModal.tsx
│   │   ├── CharactersSection.tsx
│   │   ├── ExploreSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchModal.tsx
│   │   ├── SeasonalSection.tsx
│   │   ├── TrailerModal.tsx
│   │   ├── TrendingSection.tsx
│   │   └── WatchlistDrawer.tsx
│   ├── data/
│   │   ├── animeData.json   # 50 anime entries with metadata
│   │   └── animeData.ts     # TypeScript anime definitions
│   ├── hooks/
│   │   └── useWatchlist.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 👨‍💻 Author & Attribution

Architected and developed by **Wasee (Wyzuk)**.

- 🌐 **Website**: [wasee.dev](https://wasee.dev)
- 🐙 **GitHub**: [@wyzuk](https://github.com/wyzuk)
- 🐦 **X / Twitter**: [@w_jamim](https://x.com/w_jamim)
- 💬 **Discord**: [Wyzuk](https://discord.com/users/330355220284571649)
- ✉️ **Email**: [onlyjamim@gmail.com](mailto:onlyjamim@gmail.com)

---

## 📄 License

MIT © [Wasee](https://wasee.dev)
