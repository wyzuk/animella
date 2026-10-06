import urllib.request
import json
import time
import os
import re
import shutil

ANIME_LIST = [
    {"title": "One Piece", "slug": "one-piece", "search": "One Piece", "featured": True},
    {"title": "Jujutsu Kaisen", "slug": "jujutsu-kaisen", "search": "Jujutsu Kaisen", "featured": True},
    {"title": "Demon Slayer: Kimetsu no Yaiba", "slug": "demon-slayer", "search": "Kimetsu no Yaiba", "featured": True},
    {"title": "Attack on Titan", "slug": "attack-on-titan", "search": "Shingeki no Kyojin", "featured": True},
    {"title": "Naruto", "slug": "naruto", "search": "Naruto", "featured": False},
    {"title": "Naruto: Shippuden", "slug": "naruto-shippuden", "search": "Naruto Shippuuden", "featured": False},
    {"title": "Bleach", "slug": "bleach", "search": "Bleach", "featured": False},
    {"title": "Bleach: Thousand-Year Blood War", "slug": "bleach-thousand-year-blood-war", "search": "BLEACH: Sennen Kessen-hen", "featured": False},
    {"title": "Dragon Ball Z", "slug": "dragon-ball-z", "search": "Dragon Ball Z", "featured": False},
    {"title": "Dragon Ball Super", "slug": "dragon-ball-super", "search": "Dragon Ball Super", "featured": False},
    {"title": "Solo Leveling", "slug": "solo-leveling", "search": "Ore dake Level Up na Ken", "featured": True},
    {"title": "Frieren: Beyond Journey's End", "slug": "frieren-beyond-journeys-end", "search": "Sousou no Frieren", "featured": True},
    {"title": "Chainsaw Man", "slug": "chainsaw-man", "search": "Chainsaw Man", "featured": True},
    {"title": "My Hero Academia", "slug": "my-hero-academia", "search": "Boku no Hero Academia", "featured": False},
    {"title": "Hunter × Hunter", "slug": "hunter-x-hunter", "search": "Hunter x Hunter (2011)", "featured": False},
    {"title": "Death Note", "slug": "death-note", "search": "Death Note", "featured": False},
    {"title": "Fullmetal Alchemist: Brotherhood", "slug": "fullmetal-alchemist-brotherhood", "search": "Fullmetal Alchemist: Brotherhood", "featured": False},
    {"title": "Haikyuu!!", "slug": "haikyuu", "search": "Haikyuu!!", "featured": False},
    {"title": "Spy × Family", "slug": "spy-x-family", "search": "SPY x FAMILY", "featured": False},
    {"title": "Black Clover", "slug": "black-clover", "search": "Black Clover", "featured": False},
    {"title": "Blue Lock", "slug": "blue-lock", "search": "Blue Lock", "featured": False},
    {"title": "Vinland Saga", "slug": "vinland-saga", "search": "Vinland Saga", "featured": False},
    {"title": "Tokyo Revengers", "slug": "tokyo-revengers", "search": "Tokyo Revengers", "featured": False},
    {"title": "Tokyo Ghoul", "slug": "tokyo-ghoul", "search": "Tokyo Ghoul", "featured": False},
    {"title": "One Punch Man", "slug": "one-punch-man", "search": "One Punch Man", "featured": False},
    {"title": "Mob Psycho 100", "slug": "mob-psycho-100", "search": "Mob Psycho 100", "featured": False},
    {"title": "JoJo's Bizarre Adventure", "slug": "jojos-bizarre-adventure", "search": "JoJo no Kimyou na Bouken", "featured": False},
    {"title": "Code Geass", "slug": "code-geass", "search": "Code Geass: Hangyaku no Lelouch", "featured": False},
    {"title": "Steins;Gate", "slug": "steins-gate", "search": "Steins;Gate", "featured": False},
    {"title": "Sword Art Online", "slug": "sword-art-online", "search": "Sword Art Online", "featured": False},
    {"title": "Re:ZERO -Starting Life in Another World-", "slug": "re-zero", "search": "Re:Zero kara Hajimeru Isekai Seikatsu", "featured": False},
    {"title": "That Time I Got Reincarnated as a Slime", "slug": "that-time-i-got-reincarnated-as-a-slime", "search": "Tensei shitara Slime Datta Ken", "featured": False},
    {"title": "Mushoku Tensei: Jobless Reincarnation", "slug": "mushoku-tensei", "search": "Mushoku Tensei: Isekai Ittara Honki Dasu", "featured": False},
    {"title": "The Rising of the Shield Hero", "slug": "the-rising-of-the-shield-hero", "search": "Tate no Yuusha no Nariagari", "featured": False},
    {"title": "Dr. Stone", "slug": "dr-stone", "search": "Dr. STONE", "featured": False},
    {"title": "Fire Force", "slug": "fire-force", "search": "Enen no Shouboutai", "featured": False},
    {"title": "Kaiju No. 8", "slug": "kaiju-no-8", "search": "Kaijuu 8-gou", "featured": False},
    {"title": "Dandadan", "slug": "dandadan", "search": "Dandadan", "featured": True},
    {"title": "Delicious in Dungeon", "slug": "delicious-in-dungeon", "search": "Dungeon Meshi", "featured": False},
    {"title": "The Apothecary Diaries", "slug": "the-apothecary-diaries", "search": "Kusuriya no Hitorigoto", "featured": False},
    {"title": "Oshi no Ko", "slug": "oshi-no-ko", "search": "[Oshi no Ko]", "featured": True},
    {"title": "Classroom of the Elite", "slug": "classroom-of-the-elite", "search": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e", "featured": False},
    {"title": "Kaguya-sama: Love Is War", "slug": "kaguya-sama-love-is-war", "search": "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen", "featured": False},
    {"title": "Your Lie in April", "slug": "your-lie-in-april", "search": "Shigatsu wa Kimi no Uso", "featured": False},
    {"title": "Your Name.", "slug": "your-name", "search": "Kimi no Na wa.", "featured": False},
    {"title": "A Silent Voice", "slug": "a-silent-voice", "search": "Koe no Katachi", "featured": False},
    {"title": "Weathering With You", "slug": "weathering-with-you", "search": "Tenki no Ko", "featured": False},
    {"title": "Cyberpunk: Edgerunners", "slug": "cyberpunk-edgerunners", "search": "Cyberpunk: Edgerunners", "featured": True},
    {"title": "Berserk", "slug": "berserk", "search": "Kenpuu Denki Berserk", "featured": False},
    {"title": "Neon Genesis Evangelion", "slug": "neon-genesis-evangelion", "search": "Shin Seiki Evangelion", "featured": False}
]

GRAPHQL_QUERY = '''
query ($search: String) {
  Media (search: $search, type: ANIME) {
    id
    idMal
    title {
      romaji
      english
      native
    }
    synonyms
    description(asHtml: false)
    season
    seasonYear
    startDate {
      year
    }
    status
    episodes
    duration
    genres
    averageScore
    coverImage {
      extraLarge
      large
    }
    bannerImage
    studios(isMain: true) {
      nodes {
        name
      }
    }
    source
    trailer {
      id
      site
    }
    characters(sort: ROLE, perPage: 6) {
      edges {
        role
        node {
          name {
            full
            native
          }
          image {
            large
          }
        }
        voiceActors(language: JAPANESE, sort: RELEVANCE) {
          name {
            full
            native
          }
          image {
            large
          }
        }
      }
    }
  }
}
'''

def download_file(url, target_path):
    if not url:
        return False
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read()
            with open(target_path, 'wb') as f:
                f.write(content)
        return True
    except Exception as e:
        print(f"Failed downloading {url} -> {target_path}: {e}")
        return False

def clean_desc(desc):
    if not desc:
        return "No description available."
    # Remove HTML tags and source notes
    clean = re.sub(r'<[^>]+>', '', desc)
    clean = re.sub(r'\(Source:.*?\)', '', clean)
    clean = re.sub(r'\[Written by.*?\]', '', clean)
    clean = clean.replace('\n\n', ' ').replace('\n', ' ')
    return clean.strip()

def run():
    results = []
    print(f"Starting fetch for {len(ANIME_LIST)} anime...")

    for i, item in enumerate(ANIME_LIST):
        title = item["title"]
        slug = item["slug"]
        search = item["search"]
        featured = item["featured"]
        print(f"[{i+1}/{len(ANIME_LIST)}] Fetching {title} ({slug})...")

        media = None
        for attempt in range(3):
            try:
                payload = json.dumps({'query': GRAPHQL_QUERY, 'variables': {'search': search}}).encode('utf-8')
                req = urllib.request.Request('https://graphql.anilist.co', data=payload, headers={'Content-Type': 'application/json', 'User-Agent': 'Animella/1.0'})
                with urllib.request.urlopen(req, timeout=15) as resp:
                    data = json.loads(resp.read().decode('utf-8'))
                    media = data['data']['Media']
                    break
            except Exception as e:
                print(f"  Attempt {attempt+1} failed: {e}")
                time.sleep(2)

        if not media:
            print(f"  WARNING: Could not fetch {title}")
            continue

        # Paths
        poster_pub = f"public/assets/anime/{slug}.jpg"
        poster_local = f"assets/anime/{slug}.jpg"
        banner_pub = f"public/assets/anime/banners/{slug}.jpg"
        banner_local = f"assets/anime/banners/{slug}.jpg"

        # Download poster
        cover_url = media.get('coverImage', {}).get('extraLarge') or media.get('coverImage', {}).get('large')
        if download_file(cover_url, poster_pub):
            shutil.copy(poster_pub, poster_local)
        
        # Download banner or fallback to cover
        banner_url = media.get('bannerImage')
        if banner_url:
            if download_file(banner_url, banner_pub):
                shutil.copy(banner_pub, banner_local)
        else:
            # Copy cover as banner fallback if banner not found
            if os.path.exists(poster_pub):
                shutil.copy(poster_pub, banner_pub)
                shutil.copy(poster_pub, banner_local)

        # Process characters
        char_list = []
        raw_chars = media.get('characters', {}).get('edges') or []
        for c_idx, c_edge in enumerate(raw_chars[:6]):
            c_node = c_edge.get('node', {})
            c_name = c_node.get('name', {})
            c_image_url = c_node.get('image', {}).get('large')
            c_role = c_edge.get('role', 'Main')

            c_slug_img = f"{slug}-char-{c_idx+1}.jpg"
            char_pub = f"public/assets/characters/{c_slug_img}"
            char_local = f"assets/characters/{c_slug_img}"

            char_img_path = f"/assets/characters/{c_slug_img}"
            if c_image_url and download_file(c_image_url, char_pub):
                shutil.copy(char_pub, char_local)
            else:
                char_img_path = f"/assets/anime/{slug}.jpg"

            # Voice actor
            va_list = c_edge.get('voiceActors', [])
            va_data = None
            if va_list:
                va0 = va_list[0]
                va_data = {
                    "name": va0.get('name', {}).get('full') or "Unknown VA",
                    "japaneseName": va0.get('name', {}).get('native') or "",
                    "image": va0.get('image', {}).get('large') or ""
                }

            char_list.append({
                "name": c_name.get('full') or "Unknown",
                "japaneseName": c_name.get('native') or "",
                "role": c_role.capitalize() if c_role else "Main",
                "image": char_img_path,
                "anime": title,
                "voiceActor": va_data or {
                    "name": "Original Japanese Cast",
                    "japaneseName": "声優",
                    "image": ""
                }
            })

        # Studios
        studio_nodes = media.get('studios', {}).get('nodes') or []
        studio_name = studio_nodes[0].get('name') if studio_nodes else "Unknown Studio"

        # Trailer
        trailer_obj = media.get('trailer') or {}
        trailer_url = None
        if trailer_obj.get('site') == 'youtube' and trailer_obj.get('id'):
            trailer_url = f"https://www.youtube.com/watch?v={trailer_obj['id']}"

        # Rating: averageScore is out of 100 in AniList
        score_val = media.get('averageScore')
        rating_out_of_10 = round(score_val / 10.0, 1) if score_val else 8.5

        # Year
        year_val = media.get('startDate', {}).get('year') or media.get('seasonYear') or 2022

        # Season
        season_season = media.get('season') or "FALL"
        season_str = f"{season_season.capitalize()} {year_val}"

        # Status
        raw_status = media.get('status') or "FINISHED"
        status_map = {
            "FINISHED": "Completed",
            "RELEASING": "Airing",
            "NOT_YET_RELEASED": "Upcoming",
            "CANCELLED": "Cancelled",
            "HIATUS": "On Hiatus"
        }
        status_str = status_map.get(raw_status, "Completed")

        # Duration
        dur_mins = media.get('duration') or 24
        duration_str = f"{dur_mins} min" if dur_mins else "24 min"

        # Alternative titles
        synonyms = media.get('synonyms') or []
        alt_titles = []
        if media.get('title', {}).get('romaji') and media['title']['romaji'] != title:
            alt_titles.append(media['title']['romaji'])
        if media.get('title', {}).get('english') and media['title']['english'] != title:
            alt_titles.append(media['title']['english'])
        for s in synonyms[:4]:
            if s not in alt_titles:
                alt_titles.append(s)

        # Source
        source_val = (media.get('source') or 'Manga').replace('_', ' ').title()

        entry = {
            "id": slug,
            "rank": i + 1,
            "title": title,
            "japaneseTitle": media.get('title', {}).get('native') or title,
            "romajiTitle": media.get('title', {}).get('romaji') or title,
            "alternativeTitles": alt_titles,
            "description": clean_desc(media.get('description')),
            "genres": media.get('genres') or ["Action", "Adventure"],
            "rating": rating_out_of_10,
            "year": year_val,
            "status": status_str,
            "episodes": media.get('episodes') or ("Ongoing" if status_str == "Airing" else 12),
            "duration": duration_str,
            "season": season_str,
            "seasonPeriod": season_season.capitalize(),
            "studio": studio_name,
            "source": source_val,
            "poster": f"/assets/anime/{slug}.jpg",
            "banner": f"/assets/anime/banners/{slug}.jpg",
            "characters": char_list,
            "trailerUrl": trailer_url,
            "featured": featured
        }
        results.append(entry)
        time.sleep(0.5)

    print(f"Successfully processed {len(results)} of {len(ANIME_LIST)} anime!")

    # Write JSON and TS files
    with open('src/data/animeData.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    with open('src/data/animeData.ts', 'w', encoding='utf-8') as f:
        f.write('export interface Character {\n')
        f.write('  name: string;\n')
        f.write('  japaneseName: string;\n')
        f.write('  role: string;\n')
        f.write('  image: string;\n')
        f.write('  anime: string;\n')
        f.write('  voiceActor: {\n')
        f.write('    name: string;\n')
        f.write('    japaneseName: string;\n')
        f.write('    image: string;\n')
        f.write('  };\n')
        f.write('}\n\n')
        f.write('export interface Anime {\n')
        f.write('  id: string;\n')
        f.write('  rank: number;\n')
        f.write('  title: string;\n')
        f.write('  japaneseTitle: string;\n')
        f.write('  romajiTitle: string;\n')
        f.write('  alternativeTitles: string[];\n')
        f.write('  description: string;\n')
        f.write('  genres: string[];\n')
        f.write('  rating: number;\n')
        f.write('  year: number;\n')
        f.write('  status: string;\n')
        f.write('  episodes: number | string;\n')
        f.write('  duration: string;\n')
        f.write('  season: string;\n')
        f.write('  seasonPeriod: string;\n')
        f.write('  studio: string;\n')
        f.write('  source: string;\n')
        f.write('  poster: string;\n')
        f.write('  banner: string;\n')
        f.write('  characters: Character[];\n')
        f.write('  trailerUrl: string | null;\n')
        f.write('  featured: boolean;\n')
        f.write('}\n\n')
        f.write(f'export const animeList: Anime[] = {json.dumps(results, ensure_ascii=False, indent=2)};\n')

    print("Data files generated successfully.")

if __name__ == '__main__':
    run()
