export interface Character {
  name: string;
  japaneseName: string;
  role: string;
  image: string;
  anime: string;
  voiceActor: {
    name: string;
    japaneseName: string;
    image: string;
  };
}

export interface Anime {
  id: string;
  rank: number;
  title: string;
  japaneseTitle: string;
  romajiTitle: string;
  alternativeTitles: string[];
  description: string;
  genres: string[];
  rating: number;
  year: number;
  status: string;
  episodes: number | string;
  duration: string;
  season: string;
  seasonPeriod: string;
  studio: string;
  source: string;
  poster: string;
  banner: string;
  characters: Character[];
  trailerUrl: string;
  featured: boolean;
}

export const animeList: Anime[] = [
  {
    "id": "one-piece",
    "rank": 1,
    "title": "One Piece",
    "japaneseTitle": "ONE PIECE",
    "romajiTitle": "ONE PIECE",
    "alternativeTitles": [
      "ONE PIECE",
      "ONE PIECE",
      "ワンピース",
      "海贼王",
      "וואן פיס",
      "ون بيس"
    ],
    "description": "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece. *This includes the following special episodes: - Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336) - The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492) - Team Formation! Save Chopper (Episode 542) - History's Strongest Collaboration vs. Glutton of the Sea (Episode 590) - 20th Anniversary! Special Romance Dawn (Episode 907)",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.7,
    "year": 1999,
    "status": "Airing",
    "episodes": "Ongoing",
    "duration": "24 min",
    "season": "Fall 1999",
    "seasonPeriod": "Fall",
    "studio": "Toei Animation",
    "source": "Manga",
    "poster": "/assets/anime/one-piece.jpg",
    "banner": "/assets/anime/banners/one-piece.jpg",
    "characters": [
      {
        "name": "Luffy Monkey",
        "japaneseName": "モンキー・D・ルフィ",
        "role": "Main",
        "image": "/assets/characters/one-piece-char-1.jpg",
        "anime": "One Piece",
        "voiceActor": {
          "name": "Mayumi Tanaka",
          "japaneseName": "田中真弓",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95075-1qD4TeW1ON92.png"
        }
      },
      {
        "name": "Robin Nico",
        "japaneseName": "ニコロビン",
        "role": "Main",
        "image": "/assets/characters/one-piece-char-2.jpg",
        "anime": "One Piece",
        "voiceActor": {
          "name": "Yuriko Yamaguchi",
          "japaneseName": "山口由里子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95130-GoO41ve3YWQw.png"
        }
      },
      {
        "name": "Zoro Roronoa",
        "japaneseName": "ロロノア・ゾロ",
        "role": "Main",
        "image": "/assets/characters/one-piece-char-3.jpg",
        "anime": "One Piece",
        "voiceActor": {
          "name": "Kazuya Nakai",
          "japaneseName": "中井和哉",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95123-54LrTiD9kGwY.jpg"
        }
      },
      {
        "name": "Franky",
        "japaneseName": "フランキー",
        "role": "Main",
        "image": "/assets/characters/one-piece-char-4.jpg",
        "anime": "One Piece",
        "voiceActor": {
          "name": "Kazuki Yao",
          "japaneseName": "矢尾一樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95131-TCVTgxb08tfE.png"
        }
      },
      {
        "name": "Sanji",
        "japaneseName": "サンジ",
        "role": "Main",
        "image": "/assets/characters/one-piece-char-5.jpg",
        "anime": "One Piece",
        "voiceActor": {
          "name": "Hiroaki Hirata",
          "japaneseName": "平田広明",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95125-NeFFiJupoDVj.png"
        }
      },
      {
        "name": "Chopper Tony Tony",
        "japaneseName": "トニートニー・チョッパー",
        "role": "Main",
        "image": "/assets/characters/one-piece-char-6.jpg",
        "anime": "One Piece",
        "voiceActor": {
          "name": "Ikue Ootani",
          "japaneseName": "大谷育江",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95128-9YWpE1d2U8Sj.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=MCb13lbXZrk",
    "featured": true
  },
  {
    "id": "jujutsu-kaisen",
    "rank": 2,
    "title": "Jujutsu Kaisen",
    "japaneseTitle": "呪術廻戦",
    "romajiTitle": "Jujutsu Kaisen",
    "alternativeTitles": [
      "JUJUTSU KAISEN",
      "JJK",
      "Sorcery Fight",
      "咒术回战",
      "주술회전"
    ],
    "description": "A boy fights... for \"the right death.\" Hardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse. Itadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.  Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.",
    "genres": [
      "Action",
      "Drama",
      "Supernatural"
    ],
    "rating": 8.4,
    "year": 2020,
    "status": "Completed",
    "episodes": 24,
    "duration": "24 min",
    "season": "Fall 2020",
    "seasonPeriod": "Fall",
    "studio": "MAPPA",
    "source": "Manga",
    "poster": "/assets/anime/jujutsu-kaisen.jpg",
    "banner": "/assets/anime/banners/jujutsu-kaisen.jpg",
    "characters": [
      {
        "name": "Megumi Fushiguro",
        "japaneseName": "伏黒恵",
        "role": "Main",
        "image": "/assets/characters/jujutsu-kaisen-char-1.jpg",
        "anime": "Jujutsu Kaisen",
        "voiceActor": {
          "name": "Yuuma Uchida",
          "japaneseName": "内田雄馬",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119617-icFDk96OdV5k.png"
        }
      },
      {
        "name": "Yuuji Itadori",
        "japaneseName": "虎杖悠仁",
        "role": "Main",
        "image": "/assets/characters/jujutsu-kaisen-char-2.jpg",
        "anime": "Jujutsu Kaisen",
        "voiceActor": {
          "name": "Junya Enoki",
          "japaneseName": "榎木淳弥",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119319-yIrrUOUaJuSm.png"
        }
      },
      {
        "name": "Satoru Gojou",
        "japaneseName": "五条悟",
        "role": "Main",
        "image": "/assets/characters/jujutsu-kaisen-char-3.jpg",
        "anime": "Jujutsu Kaisen",
        "voiceActor": {
          "name": "Yuuichi Nakamura",
          "japaneseName": "中村悠一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95513-up9ZDuocHgRs.png"
        }
      },
      {
        "name": "Nobara Kugisaki",
        "japaneseName": "釘崎野薔薇",
        "role": "Main",
        "image": "/assets/characters/jujutsu-kaisen-char-4.jpg",
        "anime": "Jujutsu Kaisen",
        "voiceActor": {
          "name": "Asami Seto",
          "japaneseName": "瀬戸麻沙美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106787-ojpoY7XEGYgc.jpg"
        }
      },
      {
        "name": "Suguru Getou",
        "japaneseName": "夏油傑",
        "role": "Supporting",
        "image": "/assets/characters/jujutsu-kaisen-char-5.jpg",
        "anime": "Jujutsu Kaisen",
        "voiceActor": {
          "name": "Takahiro Sakurai",
          "japaneseName": "櫻井孝宏",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95079-MdbWTLxPUvFf.jpg"
        }
      },
      {
        "name": "Sukuna",
        "japaneseName": "宿儺",
        "role": "Supporting",
        "image": "/assets/characters/jujutsu-kaisen-char-6.jpg",
        "anime": "Jujutsu Kaisen",
        "voiceActor": {
          "name": "Junichi Suwabe",
          "japaneseName": "諏訪部順一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95095-DvSjTQnqcgXP.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=RIyb52EMx8c",
    "featured": true
  },
  {
    "id": "demon-slayer",
    "rank": 3,
    "title": "Demon Slayer: Kimetsu no Yaiba",
    "japaneseTitle": "鬼滅の刃",
    "romajiTitle": "Kimetsu no Yaiba",
    "alternativeTitles": [
      "Kimetsu no Yaiba",
      "KnY",
      "Kimetsu no Yaiba: Kyoudai no Kizuna",
      "Demon Slayer: Kimetsu no Yaiba: Bonds of Siblings",
      "鬼滅の刃-兄妹の絆-"
    ],
    "description": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 8.2,
    "year": 2019,
    "status": "Completed",
    "episodes": 26,
    "duration": "24 min",
    "season": "Spring 2019",
    "seasonPeriod": "Spring",
    "studio": "ufotable",
    "source": "Manga",
    "poster": "/assets/anime/demon-slayer.jpg",
    "banner": "/assets/anime/banners/demon-slayer.jpg",
    "characters": [
      {
        "name": "Tanjirou Kamado",
        "japaneseName": "竈門炭治郎",
        "role": "Main",
        "image": "/assets/characters/demon-slayer-char-1.jpg",
        "anime": "Demon Slayer: Kimetsu no Yaiba",
        "voiceActor": {
          "name": "Natsuki Hanae",
          "japaneseName": "花江夏樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n111635-L385UcjTKCBq.png"
        }
      },
      {
        "name": "Nezuko Kamado",
        "japaneseName": "竈門禰豆子",
        "role": "Main",
        "image": "/assets/characters/demon-slayer-char-2.jpg",
        "anime": "Demon Slayer: Kimetsu no Yaiba",
        "voiceActor": {
          "name": "Akari Kitou",
          "japaneseName": "鬼頭明里",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119722-Ls7ORfBejJEP.jpg"
        }
      },
      {
        "name": "Inosuke Hashibira",
        "japaneseName": "嘴平伊之助",
        "role": "Main",
        "image": "/assets/characters/demon-slayer-char-3.jpg",
        "anime": "Demon Slayer: Kimetsu no Yaiba",
        "voiceActor": {
          "name": "Yoshitsugu Matsuoka",
          "japaneseName": "松岡禎丞",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106817-mioGQjbTWWQ6.png"
        }
      },
      {
        "name": "Zenitsu Agatsuma",
        "japaneseName": "我妻善逸",
        "role": "Main",
        "image": "/assets/characters/demon-slayer-char-4.jpg",
        "anime": "Demon Slayer: Kimetsu no Yaiba",
        "voiceActor": {
          "name": "Hiro Shimono",
          "japaneseName": "下野紘",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95356-PFaZRlI9oJ56.png"
        }
      },
      {
        "name": "Muzan Kibutsuji",
        "japaneseName": "鬼舞辻無惨",
        "role": "Supporting",
        "image": "/assets/characters/demon-slayer-char-5.jpg",
        "anime": "Demon Slayer: Kimetsu no Yaiba",
        "voiceActor": {
          "name": "Toshihiko Seki",
          "japaneseName": "関俊彦",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95129-AAL7kfwAPpgR.jpg"
        }
      },
      {
        "name": "Kyoujurou Rengoku",
        "japaneseName": "煉獄杏寿郎",
        "role": "Supporting",
        "image": "/assets/characters/demon-slayer-char-6.jpg",
        "anime": "Demon Slayer: Kimetsu no Yaiba",
        "voiceActor": {
          "name": "Satoshi Hino",
          "japaneseName": "日野聡",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95245-prBoWpg0HaGX.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=6vMuWuWlW4I",
    "featured": true
  },
  {
    "id": "attack-on-titan",
    "rank": 4,
    "title": "Attack on Titan",
    "japaneseTitle": "進撃の巨人",
    "romajiTitle": "Shingeki no Kyojin",
    "alternativeTitles": [
      "Shingeki no Kyojin",
      "SnK",
      "AoT",
      "Ataque a los Titanes",
      "Ataque dos Titãs"
    ],
    "description": "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.\r Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.",
    "genres": [
      "Action",
      "Drama",
      "Fantasy",
      "Mystery"
    ],
    "rating": 8.5,
    "year": 2013,
    "status": "Completed",
    "episodes": 25,
    "duration": "24 min",
    "season": "Spring 2013",
    "seasonPeriod": "Spring",
    "studio": "WIT STUDIO",
    "source": "Manga",
    "poster": "/assets/anime/attack-on-titan.jpg",
    "banner": "/assets/anime/banners/attack-on-titan.jpg",
    "characters": [
      {
        "name": "Mikasa Ackerman",
        "japaneseName": "ミカサ・アッカーマン",
        "role": "Main",
        "image": "/assets/characters/attack-on-titan-char-1.jpg",
        "anime": "Attack on Titan",
        "voiceActor": {
          "name": "Yui Ishikawa",
          "japaneseName": "石川由依",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100142-k6RP0HzXffUG.png"
        }
      },
      {
        "name": "Eren Yeager",
        "japaneseName": "エレン・イェーガー",
        "role": "Main",
        "image": "/assets/characters/attack-on-titan-char-2.jpg",
        "anime": "Attack on Titan",
        "voiceActor": {
          "name": "Yuuki Kaji",
          "japaneseName": "梶裕貴",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95672-T33YV7yCDKnL.png"
        }
      },
      {
        "name": "Armin Arlert",
        "japaneseName": "アルミン・アルレルト",
        "role": "Main",
        "image": "/assets/characters/attack-on-titan-char-3.jpg",
        "anime": "Attack on Titan",
        "voiceActor": {
          "name": "Marina Inoue",
          "japaneseName": "井上麻里奈",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95158-OLhgs8zv5xsp.jpg"
        }
      },
      {
        "name": "Levi",
        "japaneseName": "リヴァイ",
        "role": "Supporting",
        "image": "/assets/characters/attack-on-titan-char-4.jpg",
        "anime": "Attack on Titan",
        "voiceActor": {
          "name": "Hiroshi Kamiya",
          "japaneseName": "神谷浩史",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95118-oOElrn1aSaiC.png"
        }
      },
      {
        "name": "Sasha Blouse",
        "japaneseName": "サシャ・ブラウス",
        "role": "Supporting",
        "image": "/assets/characters/attack-on-titan-char-5.jpg",
        "anime": "Attack on Titan",
        "voiceActor": {
          "name": "Yuu Kobayashi",
          "japaneseName": "小林ゆう",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95034-AwobjrcmkMi9.png"
        }
      },
      {
        "name": "Reiner Braun",
        "japaneseName": "ライナー・ブラウン",
        "role": "Supporting",
        "image": "/assets/characters/attack-on-titan-char-6.jpg",
        "anime": "Attack on Titan",
        "voiceActor": {
          "name": "Yoshimasa Hosoya",
          "japaneseName": "細谷佳正",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100626-bH8eZ0wv3HYX.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=LHtdKWJdif4",
    "featured": true
  },
  {
    "id": "naruto",
    "rank": 5,
    "title": "Naruto",
    "japaneseTitle": "NARUTO -ナルト-",
    "romajiTitle": "NARUTO",
    "alternativeTitles": [
      "NARUTO",
      "נארוטו",
      "ناروتو",
      "火影忍者",
      "นารูโตะ นินจาจอมคาถา"
    ],
    "description": "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.  Shunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way.",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 8.0,
    "year": 2002,
    "status": "Completed",
    "episodes": 220,
    "duration": "23 min",
    "season": "Fall 2002",
    "seasonPeriod": "Fall",
    "studio": "Studio Pierrot",
    "source": "Manga",
    "poster": "/assets/anime/naruto.jpg",
    "banner": "/assets/anime/banners/naruto.jpg",
    "characters": [
      {
        "name": "Sasuke Uchiha",
        "japaneseName": "うちはサスケ",
        "role": "Main",
        "image": "/assets/characters/naruto-char-1.jpg",
        "anime": "Naruto",
        "voiceActor": {
          "name": "Noriaki Sugiyama",
          "japaneseName": "杉山紀彰",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95016-03m7lAUZBMDv.png"
        }
      },
      {
        "name": "Naruto Uzumaki",
        "japaneseName": "うずまきナルト",
        "role": "Main",
        "image": "/assets/characters/naruto-char-2.jpg",
        "anime": "Naruto",
        "voiceActor": {
          "name": "Junko Takeuchi",
          "japaneseName": "竹内順子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95015-QwI9K4FRe4Cq.png"
        }
      },
      {
        "name": "Kakashi Hatake",
        "japaneseName": "はたけカカシ",
        "role": "Main",
        "image": "/assets/characters/naruto-char-3.jpg",
        "anime": "Naruto",
        "voiceActor": {
          "name": "Kazuhiko Inoue",
          "japaneseName": "井上和彦",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95021-9qAoAn6GNZ3S.png"
        }
      },
      {
        "name": "Sakura Haruno",
        "japaneseName": "春野サクラ",
        "role": "Main",
        "image": "/assets/characters/naruto-char-4.jpg",
        "anime": "Naruto",
        "voiceActor": {
          "name": "Chie Nakamura",
          "japaneseName": "中村千絵",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95300-84lMPsAHkPP3.png"
        }
      },
      {
        "name": "Itachi Uchiha",
        "japaneseName": "うちはイタチ",
        "role": "Supporting",
        "image": "/assets/characters/naruto-char-5.jpg",
        "anime": "Naruto",
        "voiceActor": {
          "name": "Hideo Ishikawa",
          "japaneseName": "石川英郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95412-czaGpvAm5pWx.png"
        }
      },
      {
        "name": "Rock Lee",
        "japaneseName": "ロック・リー",
        "role": "Supporting",
        "image": "/assets/characters/naruto-char-6.jpg",
        "anime": "Naruto",
        "voiceActor": {
          "name": "Youichi Masukawa",
          "japaneseName": "増川洋一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/143.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=-G9BqkgZXRA",
    "featured": false
  },
  {
    "id": "naruto-shippuden",
    "rank": 6,
    "title": "Naruto: Shippuden",
    "japaneseTitle": "NARUTO -ナルト- 疾風伝",
    "romajiTitle": "NARUTO: Shippuuden",
    "alternativeTitles": [
      "NARUTO: Shippuuden",
      "Naruto Shippuuden",
      "Naruto Shippuden",
      "נארוטו שיפודן",
      "火影忍者 疾风传"
    ],
    "description": "Naruto: Shippuuden is the continuation of the original animated TV series Naruto. The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as he has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 8.2,
    "year": 2007,
    "status": "Completed",
    "episodes": 500,
    "duration": "23 min",
    "season": "Winter 2007",
    "seasonPeriod": "Winter",
    "studio": "Studio Pierrot",
    "source": "Manga",
    "poster": "/assets/anime/naruto-shippuden.jpg",
    "banner": "/assets/anime/banners/naruto-shippuden.jpg",
    "characters": [
      {
        "name": "Sasuke Uchiha",
        "japaneseName": "うちはサスケ",
        "role": "Main",
        "image": "/assets/characters/naruto-shippuden-char-1.jpg",
        "anime": "Naruto: Shippuden",
        "voiceActor": {
          "name": "Noriaki Sugiyama",
          "japaneseName": "杉山紀彰",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95016-03m7lAUZBMDv.png"
        }
      },
      {
        "name": "Naruto Uzumaki",
        "japaneseName": "うずまきナルト",
        "role": "Main",
        "image": "/assets/characters/naruto-shippuden-char-2.jpg",
        "anime": "Naruto: Shippuden",
        "voiceActor": {
          "name": "Junko Takeuchi",
          "japaneseName": "竹内順子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95015-QwI9K4FRe4Cq.png"
        }
      },
      {
        "name": "Kakashi Hatake",
        "japaneseName": "はたけカカシ",
        "role": "Main",
        "image": "/assets/characters/naruto-shippuden-char-3.jpg",
        "anime": "Naruto: Shippuden",
        "voiceActor": {
          "name": "Kazuhiko Inoue",
          "japaneseName": "井上和彦",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95021-9qAoAn6GNZ3S.png"
        }
      },
      {
        "name": "Sakura Haruno",
        "japaneseName": "春野サクラ",
        "role": "Main",
        "image": "/assets/characters/naruto-shippuden-char-4.jpg",
        "anime": "Naruto: Shippuden",
        "voiceActor": {
          "name": "Chie Nakamura",
          "japaneseName": "中村千絵",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95300-84lMPsAHkPP3.png"
        }
      },
      {
        "name": "Itachi Uchiha",
        "japaneseName": "うちはイタチ",
        "role": "Supporting",
        "image": "/assets/characters/naruto-shippuden-char-5.jpg",
        "anime": "Naruto: Shippuden",
        "voiceActor": {
          "name": "Hideo Ishikawa",
          "japaneseName": "石川英郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95412-czaGpvAm5pWx.png"
        }
      },
      {
        "name": "Rock Lee",
        "japaneseName": "ロック・リー",
        "role": "Supporting",
        "image": "/assets/characters/naruto-shippuden-char-6.jpg",
        "anime": "Naruto: Shippuden",
        "voiceActor": {
          "name": "Youichi Masukawa",
          "japaneseName": "増川洋一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/143.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=17Cq1n4j9cQ",
    "featured": false
  },
  {
    "id": "bleach",
    "rank": 7,
    "title": "Bleach",
    "japaneseTitle": "BLEACH",
    "romajiTitle": "BLEACH",
    "alternativeTitles": [
      "BLEACH",
      "ブリーチ",
      "'בליץ",
      "เทพมรณะ",
      "بليتش"
    ],
    "description": "Ichigo Kurosaki is a rather normal high school student apart from the fact he has the ability to see ghosts. This ability never impacted his life in a major way until the day he encounters the Shinigami Kuchiki Rukia, who saves him and his family's lives from a Hollow, a corrupt spirit that devours human souls.  Wounded during the fight against the Hollow, Rukia chooses the only option available to defeat the monster and passes her Shinigami powers to Ichigo. Now forced to act as a substitute until Rukia recovers, Ichigo hunts down the Hollows that plague his town.",
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 7.9,
    "year": 2004,
    "status": "Completed",
    "episodes": 366,
    "duration": "24 min",
    "season": "Fall 2004",
    "seasonPeriod": "Fall",
    "studio": "Studio Pierrot",
    "source": "Manga",
    "poster": "/assets/anime/bleach.jpg",
    "banner": "/assets/anime/banners/bleach.jpg",
    "characters": [
      {
        "name": "Ichigo Kurosaki",
        "japaneseName": "黒崎一護",
        "role": "Main",
        "image": "/assets/characters/bleach-char-1.jpg",
        "anime": "Bleach",
        "voiceActor": {
          "name": "Masakazu Morita",
          "japaneseName": "森田成一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95205-5P3tKe3eTG9n.jpg"
        }
      },
      {
        "name": "Rukia Kuchiki",
        "japaneseName": "朽木ルキア",
        "role": "Main",
        "image": "/assets/characters/bleach-char-2.jpg",
        "anime": "Bleach",
        "voiceActor": {
          "name": "Fumiko Orikasa",
          "japaneseName": "折笠富美子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95152-X9K5ciNGSX35.jpg"
        }
      },
      {
        "name": "Orihime Inoue",
        "japaneseName": "井上織姫",
        "role": "Main",
        "image": "/assets/characters/bleach-char-3.jpg",
        "anime": "Bleach",
        "voiceActor": {
          "name": "Yuki Matsuoka",
          "japaneseName": "松岡由貴",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95073-HIjUyhssrxGs.png"
        }
      },
      {
        "name": "Uryuu Ishida",
        "japaneseName": "石田雨竜",
        "role": "Main",
        "image": "/assets/characters/bleach-char-4.jpg",
        "anime": "Bleach",
        "voiceActor": {
          "name": "Noriaki Sugiyama",
          "japaneseName": "杉山紀彰",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95016-03m7lAUZBMDv.png"
        }
      },
      {
        "name": "Yasutora Sado",
        "japaneseName": "茶渡泰虎",
        "role": "Main",
        "image": "/assets/characters/bleach-char-5.jpg",
        "anime": "Bleach",
        "voiceActor": {
          "name": "Hiroki Yasumoto",
          "japaneseName": "安元洋貴",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95025-LGHr4VufmfCc.jpg"
        }
      },
      {
        "name": "Renji Abarai",
        "japaneseName": "阿散井恋次",
        "role": "Main",
        "image": "/assets/characters/bleach-char-6.jpg",
        "anime": "Bleach",
        "voiceActor": {
          "name": "Kentarou Itou",
          "japaneseName": "伊藤健太郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95221-b7nCzXAoQgIy.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=0c4IoCA5fY0",
    "featured": false
  },
  {
    "id": "bleach-thousand-year-blood-war",
    "rank": 8,
    "title": "Bleach: Thousand-Year Blood War",
    "japaneseTitle": "BLEACH 千年血戦篇",
    "romajiTitle": "BLEACH: Sennen Kessen-hen",
    "alternativeTitles": [
      "BLEACH: Sennen Kessen-hen",
      "BLEACH: Thousand-Year Blood War",
      "بليتش: حرب الألف سنة الدموية",
      "Bleach: La guerre sanglante de mille ans",
      "BLEACH TYBW"
    ],
    "description": "Was it all just a coincidence, or was it inevitable? Ichigo Kurosaki gained the powers of a Soul Reaper through a chance encounter. As a Substitute Soul Reaper, Ichigo became caught in the turmoil of the Soul Society, a place where deceased souls gather. But with help from his friends, Ichigo overcame every challenge to become even stronger. When new Soul Reapers and a new enemy appear in his hometown of Karakura, Ichigo jumps back into the battlefield with his Zanpakuto to help those in need. Meanwhile, the Soul Society is observing a sudden surge in the number of Hollows being destroyed in the World of the Living. They also receive separate reports of residents in the Rukon District having gone missing. Finally, the Seireitei, home of the Soul Reapers, comes under attack by a group calling themselves the Wandenreich. Led by Yhwach, the father of all Quincies, the Wandenreich declare war against the Soul Reapers with the following message: \"Five days from now, the Soul Society will be annihilated by the Wandenreich.\" The history and truth kept hidden by the Soul Reapers for a thousand long years is finally brought to light. All things must come to an end as Ichigo Kurosaki's final battle begins!",
    "genres": [
      "Action",
      "Adventure",
      "Supernatural"
    ],
    "rating": 8.8,
    "year": 2022,
    "status": "Completed",
    "episodes": 13,
    "duration": "24 min",
    "season": "Fall 2022",
    "seasonPeriod": "Fall",
    "studio": "Studio Pierrot",
    "source": "Manga",
    "poster": "/assets/anime/bleach-thousand-year-blood-war.jpg",
    "banner": "/assets/anime/banners/bleach-thousand-year-blood-war.jpg",
    "characters": [
      {
        "name": "Ichigo Kurosaki",
        "japaneseName": "黒崎一護",
        "role": "Main",
        "image": "/assets/characters/bleach-thousand-year-blood-war-char-1.jpg",
        "anime": "Bleach: Thousand-Year Blood War",
        "voiceActor": {
          "name": "Masakazu Morita",
          "japaneseName": "森田成一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95205-5P3tKe3eTG9n.jpg"
        }
      },
      {
        "name": "Uryuu Ishida",
        "japaneseName": "石田雨竜",
        "role": "Main",
        "image": "/assets/characters/bleach-thousand-year-blood-war-char-2.jpg",
        "anime": "Bleach: Thousand-Year Blood War",
        "voiceActor": {
          "name": "Noriaki Sugiyama",
          "japaneseName": "杉山紀彰",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95016-03m7lAUZBMDv.png"
        }
      },
      {
        "name": "Rukia Kuchiki",
        "japaneseName": "朽木ルキア",
        "role": "Supporting",
        "image": "/assets/characters/bleach-thousand-year-blood-war-char-3.jpg",
        "anime": "Bleach: Thousand-Year Blood War",
        "voiceActor": {
          "name": "Fumiko Orikasa",
          "japaneseName": "折笠富美子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95152-X9K5ciNGSX35.jpg"
        }
      },
      {
        "name": "Orihime Inoue",
        "japaneseName": "井上織姫",
        "role": "Supporting",
        "image": "/assets/characters/bleach-thousand-year-blood-war-char-4.jpg",
        "anime": "Bleach: Thousand-Year Blood War",
        "voiceActor": {
          "name": "Yuki Matsuoka",
          "japaneseName": "松岡由貴",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95073-HIjUyhssrxGs.png"
        }
      },
      {
        "name": "Kisuke Urahara",
        "japaneseName": "浦原喜助",
        "role": "Supporting",
        "image": "/assets/characters/bleach-thousand-year-blood-war-char-5.jpg",
        "anime": "Bleach: Thousand-Year Blood War",
        "voiceActor": {
          "name": "Shinichirou Miki",
          "japaneseName": "三木眞一郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95022-BXggjIr4KHqd.png"
        }
      },
      {
        "name": "Toushirou Hitsugaya",
        "japaneseName": "日番谷冬獅郎",
        "role": "Supporting",
        "image": "/assets/characters/bleach-thousand-year-blood-war-char-6.jpg",
        "anime": "Bleach: Thousand-Year Blood War",
        "voiceActor": {
          "name": "Romi Park",
          "japaneseName": "朴璐美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95082-pNGbnYv4cHAK.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=fzR82oXbjnY",
    "featured": false
  },
  {
    "id": "dragon-ball-z",
    "rank": 9,
    "title": "Dragon Ball Z",
    "japaneseTitle": "ドラゴンボールZ",
    "romajiTitle": "Dragon Ball Z",
    "alternativeTitles": [
      "DBZ",
      "Dragonball Z",
      "דרגון בול זי",
      "What's My Destiny Dragon Ball"
    ],
    "description": "Goku is back with his new son, Gohan, but just when things are getting settled down, the adventures continue. Whether he is facing enemies such as Freeza, Cell, or Boo, Goku is proven to be an elite of his own and discovers his race, Saiyan. He meets many new people, gaining allies as well as enemies, as he still finds time to raise a family and be the happy-go-lucky Saiyan he is.",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Supernatural"
    ],
    "rating": 8.1,
    "year": 1989,
    "status": "Completed",
    "episodes": 291,
    "duration": "24 min",
    "season": "Spring 1989",
    "seasonPeriod": "Spring",
    "studio": "Toei Animation",
    "source": "Manga",
    "poster": "/assets/anime/dragon-ball-z.jpg",
    "banner": "/assets/anime/banners/dragon-ball-z.jpg",
    "characters": [
      {
        "name": "Gokuu Son",
        "japaneseName": "孫悟空",
        "role": "Main",
        "image": "/assets/characters/dragon-ball-z-char-1.jpg",
        "anime": "Dragon Ball Z",
        "voiceActor": {
          "name": "Masako Nozawa",
          "japaneseName": "野沢雅子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95557-5a2nnIBK05ul.png"
        }
      },
      {
        "name": "Vegeta",
        "japaneseName": "ベジータ",
        "role": "Main",
        "image": "/assets/characters/dragon-ball-z-char-2.jpg",
        "anime": "Dragon Ball Z",
        "voiceActor": {
          "name": "Ryou Horikawa",
          "japaneseName": "堀川りょう",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95518-6VFuLBDEPjTa.png"
        }
      },
      {
        "name": "Piccolo",
        "japaneseName": "ピッコロ",
        "role": "Main",
        "image": "/assets/characters/dragon-ball-z-char-3.jpg",
        "anime": "Dragon Ball Z",
        "voiceActor": {
          "name": "Toshio Furukawa",
          "japaneseName": "古川登志夫",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95673-jNN4GqGgpssj.png"
        }
      },
      {
        "name": "Gohan Son",
        "japaneseName": "孫悟飯",
        "role": "Main",
        "image": "/assets/characters/dragon-ball-z-char-4.jpg",
        "anime": "Dragon Ball Z",
        "voiceActor": {
          "name": "Masako Nozawa",
          "japaneseName": "野沢雅子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95557-5a2nnIBK05ul.png"
        }
      },
      {
        "name": "Kuririn",
        "japaneseName": "クリリン",
        "role": "Main",
        "image": "/assets/characters/dragon-ball-z-char-5.jpg",
        "anime": "Dragon Ball Z",
        "voiceActor": {
          "name": "Mayumi Tanaka",
          "japaneseName": "田中真弓",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95075-1qD4TeW1ON92.png"
        }
      },
      {
        "name": "Pu'ar",
        "japaneseName": "プーアル",
        "role": "Supporting",
        "image": "/assets/characters/dragon-ball-z-char-6.jpg",
        "anime": "Dragon Ball Z",
        "voiceActor": {
          "name": "Naoko Watanabe",
          "japaneseName": "渡辺菜生子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95674-VNsBjVJQe5kD.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=dxdyf2n0438",
    "featured": false
  },
  {
    "id": "dragon-ball-super",
    "rank": 10,
    "title": "Dragon Ball Super",
    "japaneseTitle": "ドラゴンボール超",
    "romajiTitle": "Dragon Ball Super",
    "alternativeTitles": [
      "DBS",
      "Dragonball Super",
      "דרגון בול סופר",
      "Драконий жемчуг: Супер"
    ],
    "description": "After 18 years, we have the newest Dragon Ball story from creator Akira Toriyama. With Majin Buu defeated, Goku has taken a completely new role as...a radish farmer?! With Earth at peace, our heroes have settled into normal lives. But they can’t get too comfortable. Far away, the powerful God of Destruction, Beerus, awakens to a prophecy revealing his demise at the hands of an even more formidable being. When his search for the Saiyan God brings him to Earth, can Goku and his friends take on their strongest foe yet?",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
      "Sci-Fi"
    ],
    "rating": 7.3,
    "year": 2015,
    "status": "Completed",
    "episodes": 131,
    "duration": "24 min",
    "season": "Summer 2015",
    "seasonPeriod": "Summer",
    "studio": "Toei Animation",
    "source": "Manga",
    "poster": "/assets/anime/dragon-ball-super.jpg",
    "banner": "/assets/anime/banners/dragon-ball-super.jpg",
    "characters": [
      {
        "name": "Gokuu Son",
        "japaneseName": "孫悟空",
        "role": "Main",
        "image": "/assets/characters/dragon-ball-super-char-1.jpg",
        "anime": "Dragon Ball Super",
        "voiceActor": {
          "name": "Masako Nozawa",
          "japaneseName": "野沢雅子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95557-5a2nnIBK05ul.png"
        }
      },
      {
        "name": "Vegeta",
        "japaneseName": "ベジータ",
        "role": "Main",
        "image": "/assets/characters/dragon-ball-super-char-2.jpg",
        "anime": "Dragon Ball Super",
        "voiceActor": {
          "name": "Ryou Horikawa",
          "japaneseName": "堀川りょう",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95518-6VFuLBDEPjTa.png"
        }
      },
      {
        "name": "Pu'ar",
        "japaneseName": "プーアル",
        "role": "Supporting",
        "image": "/assets/characters/dragon-ball-super-char-3.jpg",
        "anime": "Dragon Ball Super",
        "voiceActor": {
          "name": "Naoko Watanabe",
          "japaneseName": "渡辺菜生子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95674-VNsBjVJQe5kD.jpg"
        }
      },
      {
        "name": "Bulma",
        "japaneseName": "ブルマ",
        "role": "Supporting",
        "image": "/assets/characters/dragon-ball-super-char-4.jpg",
        "anime": "Dragon Ball Super",
        "voiceActor": {
          "name": "Hiromi Tsuru",
          "japaneseName": "鶴ひろみ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/95354-Ds90swc530OH.jpg"
        }
      },
      {
        "name": "Piccolo",
        "japaneseName": "ピッコロ",
        "role": "Supporting",
        "image": "/assets/characters/dragon-ball-super-char-5.jpg",
        "anime": "Dragon Ball Super",
        "voiceActor": {
          "name": "Toshio Furukawa",
          "japaneseName": "古川登志夫",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95673-jNN4GqGgpssj.png"
        }
      },
      {
        "name": "Majin Boo",
        "japaneseName": "魔人ブウ",
        "role": "Supporting",
        "image": "/assets/characters/dragon-ball-super-char-6.jpg",
        "anime": "Dragon Ball Super",
        "voiceActor": {
          "name": "Kouzou Shioya",
          "japaneseName": "塩屋浩三",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95906-6f6glTy4TkXf.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=ycaU9xEEdi8",
    "featured": false
  },
  {
    "id": "solo-leveling",
    "rank": 11,
    "title": "Solo Leveling",
    "japaneseTitle": "俺だけレベルアップな件",
    "romajiTitle": "Ore dake Level Up na Ken",
    "alternativeTitles": [
      "Ore dake Level Up na Ken",
      "나 혼자만 레벨업",
      "Na Honjaman Level Up",
      "Solo Leveling: Поднятие уровня в одиночку"
    ],
    "description": "They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Seong Jin-U. After being brutally slaughtered by monsters in a high-ranking dungeon, Jin-U came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.0,
    "year": 2024,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Winter 2024",
    "seasonPeriod": "Winter",
    "studio": "A-1 Pictures",
    "source": "Other",
    "poster": "/assets/anime/solo-leveling.jpg",
    "banner": "/assets/anime/banners/solo-leveling.jpg",
    "characters": [
      {
        "name": "Jin-U Seong",
        "japaneseName": "성진우",
        "role": "Main",
        "image": "/assets/characters/solo-leveling-char-1.jpg",
        "anime": "Solo Leveling",
        "voiceActor": {
          "name": "Taito Ban",
          "japaneseName": "坂泰斗",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n151336-Z9ZnITPdVRaW.png"
        }
      },
      {
        "name": "Chi-Yul Song",
        "japaneseName": "송치율",
        "role": "Supporting",
        "image": "/assets/characters/solo-leveling-char-2.jpg",
        "anime": "Solo Leveling",
        "voiceActor": {
          "name": "Eiji Hanawa",
          "japaneseName": "花輪英司",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95804-plVC2L7kuwTE.png"
        }
      },
      {
        "name": "Ju-Hui Lee",
        "japaneseName": "이주희",
        "role": "Supporting",
        "image": "/assets/characters/solo-leveling-char-3.jpg",
        "anime": "Solo Leveling",
        "voiceActor": {
          "name": "Rina Honizumi",
          "japaneseName": "本泉莉奈",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n125577-f48HE13krNVR.jpg"
        }
      },
      {
        "name": "Dong-Su Hwang",
        "japaneseName": "황동수",
        "role": "Supporting",
        "image": "/assets/characters/solo-leveling-char-4.jpg",
        "anime": "Solo Leveling",
        "voiceActor": {
          "name": "Junichi Suwabe",
          "japaneseName": "諏訪部順一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95095-DvSjTQnqcgXP.png"
        }
      },
      {
        "name": "Jin-Ho Yu",
        "japaneseName": "유진호",
        "role": "Supporting",
        "image": "/assets/characters/solo-leveling-char-5.jpg",
        "anime": "Solo Leveling",
        "voiceActor": {
          "name": "Genta Nakamura",
          "japaneseName": "中村源太",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n292075-zWd29kv7EIIJ.jpg"
        }
      },
      {
        "name": "Yun-Ho Baek",
        "japaneseName": "백윤호",
        "role": "Supporting",
        "image": "/assets/characters/solo-leveling-char-6.jpg",
        "anime": "Solo Leveling",
        "voiceActor": {
          "name": "Hiroki Touchi",
          "japaneseName": "東地宏樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95236-nlMo4dnjdT8p.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=HkIKAnwLZCw",
    "featured": true
  },
  {
    "id": "frieren-beyond-journeys-end",
    "rank": 12,
    "title": "Frieren: Beyond Journey's End",
    "japaneseTitle": "葬送のフリーレン",
    "romajiTitle": "Sousou no Frieren",
    "alternativeTitles": [
      "Sousou no Frieren",
      "Frieren: Beyond Journey’s End",
      "Frieren at the Funeral",
      "장송의 프리렌",
      "Frieren - Oltre la Fine del Viaggio",
      "คำอธิษฐานในวันที่จากลา Frieren"
    ],
    "description": "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…",
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 9.1,
    "year": 2023,
    "status": "Completed",
    "episodes": 28,
    "duration": "24 min",
    "season": "Fall 2023",
    "seasonPeriod": "Fall",
    "studio": "MADHOUSE",
    "source": "Manga",
    "poster": "/assets/anime/frieren-beyond-journeys-end.jpg",
    "banner": "/assets/anime/banners/frieren-beyond-journeys-end.jpg",
    "characters": [
      {
        "name": "Frieren",
        "japaneseName": "フリーレン",
        "role": "Main",
        "image": "/assets/characters/frieren-beyond-journeys-end-char-1.jpg",
        "anime": "Frieren: Beyond Journey's End",
        "voiceActor": {
          "name": "Atsumi Tanezaki",
          "japaneseName": "種﨑敦美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112215-kfABGD8W2YSJ.jpg"
        }
      },
      {
        "name": "Fern",
        "japaneseName": "フェルン",
        "role": "Main",
        "image": "/assets/characters/frieren-beyond-journeys-end-char-2.jpg",
        "anime": "Frieren: Beyond Journey's End",
        "voiceActor": {
          "name": "Kana Ichinose",
          "japaneseName": "市ノ瀬加那",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124390-03LHel2XSFel.png"
        }
      },
      {
        "name": "Stark",
        "japaneseName": "シュタルク",
        "role": "Main",
        "image": "/assets/characters/frieren-beyond-journeys-end-char-3.jpg",
        "anime": "Frieren: Beyond Journey's End",
        "voiceActor": {
          "name": "Chiaki Kobayashi",
          "japaneseName": "小林千晃",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n133507-oT1bd4Gax1Qg.jpg"
        }
      },
      {
        "name": "Heiter",
        "japaneseName": "ハイター",
        "role": "Supporting",
        "image": "/assets/characters/frieren-beyond-journeys-end-char-4.jpg",
        "anime": "Frieren: Beyond Journey's End",
        "voiceActor": {
          "name": "Hiroki Touchi",
          "japaneseName": "東地宏樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95236-nlMo4dnjdT8p.png"
        }
      },
      {
        "name": "Himmel",
        "japaneseName": "ヒンメル",
        "role": "Supporting",
        "image": "/assets/characters/frieren-beyond-journeys-end-char-5.jpg",
        "anime": "Frieren: Beyond Journey's End",
        "voiceActor": {
          "name": "Nobuhiko Okamoto",
          "japaneseName": "岡本信彦",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95270-LqNIF238L59u.png"
        }
      },
      {
        "name": "Eisen",
        "japaneseName": "アイゼン",
        "role": "Supporting",
        "image": "/assets/characters/frieren-beyond-journeys-end-char-6.jpg",
        "anime": "Frieren: Beyond Journey's End",
        "voiceActor": {
          "name": "Youji Ueda",
          "japaneseName": "上田燿司",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95926-00Pd2b8WZwQS.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=tR8YH0G67Rk",
    "featured": true
  },
  {
    "id": "chainsaw-man",
    "rank": 13,
    "title": "Chainsaw Man",
    "japaneseTitle": "チェンソーマン",
    "romajiTitle": "Chainsaw Man",
    "alternativeTitles": [
      "CSM",
      "رجل المنشار",
      "链锯人",
      "Человек-бензопила"
    ],
    "description": "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita. One day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and gets revived as \"Chainsaw Man\" — a man with a devil's heart.",
    "genres": [
      "Action",
      "Drama",
      "Horror",
      "Supernatural"
    ],
    "rating": 8.3,
    "year": 2022,
    "status": "Completed",
    "episodes": 12,
    "duration": "25 min",
    "season": "Fall 2022",
    "seasonPeriod": "Fall",
    "studio": "MAPPA",
    "source": "Manga",
    "poster": "/assets/anime/chainsaw-man.jpg",
    "banner": "/assets/anime/banners/chainsaw-man.jpg",
    "characters": [
      {
        "name": "Denji",
        "japaneseName": "デンジ",
        "role": "Main",
        "image": "/assets/characters/chainsaw-man-char-1.jpg",
        "anime": "Chainsaw Man",
        "voiceActor": {
          "name": "Kikunosuke Toya",
          "japaneseName": "戸谷菊之介",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n284463-w0qcBQXvlz3Z.png"
        }
      },
      {
        "name": "Power",
        "japaneseName": "パワー",
        "role": "Main",
        "image": "/assets/characters/chainsaw-man-char-2.jpg",
        "anime": "Chainsaw Man",
        "voiceActor": {
          "name": "Fairouz Ai",
          "japaneseName": "ファイルーズあい",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n133625-YpEgKD7flV2S.jpg"
        }
      },
      {
        "name": "Makima",
        "japaneseName": "マキマ",
        "role": "Main",
        "image": "/assets/characters/chainsaw-man-char-3.jpg",
        "anime": "Chainsaw Man",
        "voiceActor": {
          "name": "Tomori Kusunoki",
          "japaneseName": "楠木ともり",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124923-SQtqIQeicb7f.png"
        }
      },
      {
        "name": "Aki Hayakawa",
        "japaneseName": "早川アキ",
        "role": "Main",
        "image": "/assets/characters/chainsaw-man-char-4.jpg",
        "anime": "Chainsaw Man",
        "voiceActor": {
          "name": "Shougo Sakata",
          "japaneseName": "坂田将吾",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n158510-QDmd7dD9Rg89.jpg"
        }
      },
      {
        "name": "Yuutarou Kurose",
        "japaneseName": "黒瀬ユウタロウ",
        "role": "Supporting",
        "image": "/assets/characters/chainsaw-man-char-5.jpg",
        "anime": "Chainsaw Man",
        "voiceActor": {
          "name": "Kengo Kawanishi",
          "japaneseName": "河西健吾",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n110877-8mqVadVTaFl4.png"
        }
      },
      {
        "name": "Kishibe",
        "japaneseName": "岸辺",
        "role": "Supporting",
        "image": "/assets/characters/chainsaw-man-char-6.jpg",
        "anime": "Chainsaw Man",
        "voiceActor": {
          "name": "Kenjirou Tsuda",
          "japaneseName": "津田健次郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95591-WQGdD3ubbeoq.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=v4yLeNt-kCU",
    "featured": true
  },
  {
    "id": "my-hero-academia",
    "rank": 14,
    "title": "My Hero Academia",
    "japaneseTitle": "僕のヒーローアカデミア",
    "romajiTitle": "Boku no Hero Academia",
    "alternativeTitles": [
      "Boku no Hero Academia",
      "BNHA",
      "MHA",
      "나의 히어로 아카데미아 1기",
      "나히아 1기"
    ],
    "description": "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless? Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…",
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "rating": 7.6,
    "year": 2016,
    "status": "Completed",
    "episodes": 13,
    "duration": "24 min",
    "season": "Spring 2016",
    "seasonPeriod": "Spring",
    "studio": "bones",
    "source": "Manga",
    "poster": "/assets/anime/my-hero-academia.jpg",
    "banner": "/assets/anime/banners/my-hero-academia.jpg",
    "characters": [
      {
        "name": "Katsuki Bakugou",
        "japaneseName": "爆豪勝己",
        "role": "Main",
        "image": "/assets/characters/my-hero-academia-char-1.jpg",
        "anime": "My Hero Academia",
        "voiceActor": {
          "name": "Nobuhiko Okamoto",
          "japaneseName": "岡本信彦",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95270-LqNIF238L59u.png"
        }
      },
      {
        "name": "Izuku Midoriya",
        "japaneseName": "緑谷出久",
        "role": "Main",
        "image": "/assets/characters/my-hero-academia-char-2.jpg",
        "anime": "My Hero Academia",
        "voiceActor": {
          "name": "Daiki Yamashita",
          "japaneseName": "山下大輝",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116971-KDHjlYPO4HrS.png"
        }
      },
      {
        "name": "Ochako Uraraka",
        "japaneseName": "麗日お茶子",
        "role": "Main",
        "image": "/assets/characters/my-hero-academia-char-3.jpg",
        "anime": "My Hero Academia",
        "voiceActor": {
          "name": "Ayane Sakura",
          "japaneseName": "佐倉綾音",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106622-yemj6ymLz4lY.png"
        }
      },
      {
        "name": "Toshinori Yagi",
        "japaneseName": "八木俊典",
        "role": "Main",
        "image": "/assets/characters/my-hero-academia-char-4.jpg",
        "anime": "My Hero Academia",
        "voiceActor": {
          "name": "Kenta Miyake",
          "japaneseName": "三宅健太",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95720-enxx6kZKuwGi.jpg"
        }
      },
      {
        "name": "Shouto Todoroki",
        "japaneseName": "轟焦凍",
        "role": "Supporting",
        "image": "/assets/characters/my-hero-academia-char-5.jpg",
        "anime": "My Hero Academia",
        "voiceActor": {
          "name": "Yuuki Kaji",
          "japaneseName": "梶裕貴",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95672-T33YV7yCDKnL.png"
        }
      },
      {
        "name": "Tenya Iida",
        "japaneseName": "飯田天哉",
        "role": "Supporting",
        "image": "/assets/characters/my-hero-academia-char-6.jpg",
        "anime": "My Hero Academia",
        "voiceActor": {
          "name": "Kaito Ishikawa",
          "japaneseName": "石川界人",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n115156-ngYfqBazlxYQ.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=AhqVltWDqFA",
    "featured": false
  },
  {
    "id": "hunter-x-hunter",
    "rank": 15,
    "title": "Hunter × Hunter",
    "japaneseTitle": "HUNTER×HUNTER (2011)",
    "romajiTitle": "HUNTER×HUNTER (2011)",
    "alternativeTitles": [
      "HUNTER×HUNTER (2011)",
      "Hunter x Hunter (2011)",
      "ハンター×ハンター",
      "HxH",
      "全职猎人",
      "האנטר האנטר"
    ],
    "description": "A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him. After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.9,
    "year": 2011,
    "status": "Completed",
    "episodes": 148,
    "duration": "24 min",
    "season": "Fall 2011",
    "seasonPeriod": "Fall",
    "studio": "MADHOUSE",
    "source": "Manga",
    "poster": "/assets/anime/hunter-x-hunter.jpg",
    "banner": "/assets/anime/banners/hunter-x-hunter.jpg",
    "characters": [
      {
        "name": "Killua Zoldyck",
        "japaneseName": "キルア=ゾルディック",
        "role": "Main",
        "image": "/assets/characters/hunter-x-hunter-char-1.jpg",
        "anime": "Hunter × Hunter",
        "voiceActor": {
          "name": "Mariya Ise",
          "japaneseName": "伊瀬茉莉也",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95655-cR519BXmteKA.png"
        }
      },
      {
        "name": "Kurapika",
        "japaneseName": "クラピカ",
        "role": "Main",
        "image": "/assets/characters/hunter-x-hunter-char-2.jpg",
        "anime": "Hunter × Hunter",
        "voiceActor": {
          "name": "Miyuki Sawashiro",
          "japaneseName": "沢城みゆき",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95099-jKP4LfPWqetk.jpg"
        }
      },
      {
        "name": "Leorio Paradinight",
        "japaneseName": "レオリオ・パラディナイト",
        "role": "Main",
        "image": "/assets/characters/hunter-x-hunter-char-3.jpg",
        "anime": "Hunter × Hunter",
        "voiceActor": {
          "name": "Keiji Fujiwara",
          "japaneseName": "藤原啓治",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95063-xAsEUzspuLMG.jpg"
        }
      },
      {
        "name": "Gon Freecss",
        "japaneseName": "ゴン＝フリークス",
        "role": "Main",
        "image": "/assets/characters/hunter-x-hunter-char-4.jpg",
        "anime": "Hunter × Hunter",
        "voiceActor": {
          "name": "Megumi Han",
          "japaneseName": "潘めぐみ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107961-aMetTdEFTi2W.jpg"
        }
      },
      {
        "name": "Hisoka Morow",
        "japaneseName": "ヒソカ・モロウ",
        "role": "Main",
        "image": "/assets/characters/hunter-x-hunter-char-5.jpg",
        "anime": "Hunter × Hunter",
        "voiceActor": {
          "name": "Daisuke Namikawa",
          "japaneseName": "浪川大輔",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95087-6dlBBbejsPyg.png"
        }
      },
      {
        "name": "Ging Freecss",
        "japaneseName": "ジン・フリークス",
        "role": "Supporting",
        "image": "/assets/characters/hunter-x-hunter-char-6.jpg",
        "anime": "Hunter × Hunter",
        "voiceActor": {
          "name": "Rikiya Koyama",
          "japaneseName": "小山力也",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95113-z9eyYjTKSTX4.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=d6kBeJjTGnY",
    "featured": false
  },
  {
    "id": "death-note",
    "rank": 16,
    "title": "Death Note",
    "japaneseTitle": "DEATH NOTE",
    "romajiTitle": "DEATH NOTE",
    "alternativeTitles": [
      "DEATH NOTE",
      "デスノート",
      "死亡笔记",
      "מחברת המוות",
      "Notatnik śmierci"
    ],
    "description": "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a Death Note, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power? The consequences of Light’s actions will set the world ablaze.",
    "genres": [
      "Mystery",
      "Psychological",
      "Supernatural",
      "Thriller"
    ],
    "rating": 8.4,
    "year": 2006,
    "status": "Completed",
    "episodes": 37,
    "duration": "23 min",
    "season": "Fall 2006",
    "seasonPeriod": "Fall",
    "studio": "MADHOUSE",
    "source": "Manga",
    "poster": "/assets/anime/death-note.jpg",
    "banner": "/assets/anime/banners/death-note.jpg",
    "characters": [
      {
        "name": "L Lawliet",
        "japaneseName": "エル・ローライト",
        "role": "Main",
        "image": "/assets/characters/death-note-char-1.jpg",
        "anime": "Death Note",
        "voiceActor": {
          "name": "Kappei Yamaguchi",
          "japaneseName": "山口勝平",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95067-hqIpNxMfAuN2.png"
        }
      },
      {
        "name": "Ryuk",
        "japaneseName": "リューク",
        "role": "Main",
        "image": "/assets/characters/death-note-char-2.jpg",
        "anime": "Death Note",
        "voiceActor": {
          "name": "Shidou Nakamura",
          "japaneseName": "中村獅童",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95292-Pp6Qcwd8zQUr.jpg"
        }
      },
      {
        "name": "Light Yagami",
        "japaneseName": "夜神月",
        "role": "Main",
        "image": "/assets/characters/death-note-char-3.jpg",
        "anime": "Death Note",
        "voiceActor": {
          "name": "Mamoru Miyano",
          "japaneseName": "宮野真守",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95065-eyynywrhombR.png"
        }
      },
      {
        "name": "Mihael Keehl",
        "japaneseName": "ミハエル・ケール",
        "role": "Main",
        "image": "/assets/characters/death-note-char-4.jpg",
        "anime": "Death Note",
        "voiceActor": {
          "name": "Nozomu Sasaki",
          "japaneseName": "佐々木望",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95286-1RlrFeFKx3jn.png"
        }
      },
      {
        "name": "Nate River",
        "japaneseName": "ネイト・リバー",
        "role": "Main",
        "image": "/assets/characters/death-note-char-5.jpg",
        "anime": "Death Note",
        "voiceActor": {
          "name": "Noriko Hidaka",
          "japaneseName": "日高のり子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95181-VZKOK4WN0UuO.png"
        }
      },
      {
        "name": "Misa Amane",
        "japaneseName": "弥海砂",
        "role": "Main",
        "image": "/assets/characters/death-note-char-6.jpg",
        "anime": "Death Note",
        "voiceActor": {
          "name": "Aya Hirano",
          "japaneseName": "平野綾",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95004-qWQQHGzY3wqr.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=NlJZ-YgAt-c",
    "featured": false
  },
  {
    "id": "fullmetal-alchemist-brotherhood",
    "rank": 17,
    "title": "Fullmetal Alchemist: Brotherhood",
    "japaneseTitle": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "romajiTitle": "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
    "alternativeTitles": [
      "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
      "FMA",
      "FMAB",
      "Hagaren",
      "الخيميائي الفولاذي"
    ],
    "description": "\"In order for something to be obtained, something of equal value must be lost.\" Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist. Three years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.",
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 9.0,
    "year": 2009,
    "status": "Completed",
    "episodes": 64,
    "duration": "25 min",
    "season": "Spring 2009",
    "seasonPeriod": "Spring",
    "studio": "bones",
    "source": "Manga",
    "poster": "/assets/anime/fullmetal-alchemist-brotherhood.jpg",
    "banner": "/assets/anime/banners/fullmetal-alchemist-brotherhood.jpg",
    "characters": [
      {
        "name": "Edward Elric",
        "japaneseName": "エドワード・エルリック",
        "role": "Main",
        "image": "/assets/characters/fullmetal-alchemist-brotherhood-char-1.jpg",
        "anime": "Fullmetal Alchemist: Brotherhood",
        "voiceActor": {
          "name": "Romi Park",
          "japaneseName": "朴璐美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95082-pNGbnYv4cHAK.png"
        }
      },
      {
        "name": "Alphonse Elric",
        "japaneseName": "アルフォンス・エルリック",
        "role": "Main",
        "image": "/assets/characters/fullmetal-alchemist-brotherhood-char-2.jpg",
        "anime": "Fullmetal Alchemist: Brotherhood",
        "voiceActor": {
          "name": "Rie Kugimiya",
          "japaneseName": "釘宮理恵",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95008-2y0EeuSTHIri.png"
        }
      },
      {
        "name": "Winry Rockbell",
        "japaneseName": "ウィンリィ・ロックベル",
        "role": "Supporting",
        "image": "/assets/characters/fullmetal-alchemist-brotherhood-char-3.jpg",
        "anime": "Fullmetal Alchemist: Brotherhood",
        "voiceActor": {
          "name": "Megumi Takamoto",
          "japaneseName": "高本めぐみ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95046-3vW0I3zKOpfW.jpg"
        }
      },
      {
        "name": "Pinako Rockbell",
        "japaneseName": "ピナコ・ロックベル",
        "role": "Supporting",
        "image": "/assets/characters/fullmetal-alchemist-brotherhood-char-4.jpg",
        "anime": "Fullmetal Alchemist: Brotherhood",
        "voiceActor": {
          "name": "Miyoko Asou",
          "japaneseName": "麻生美代子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96542-nUqFdwzo1FEX.jpg"
        }
      },
      {
        "name": "Scar",
        "japaneseName": "スカー",
        "role": "Supporting",
        "image": "/assets/characters/fullmetal-alchemist-brotherhood-char-5.jpg",
        "anime": "Fullmetal Alchemist: Brotherhood",
        "voiceActor": {
          "name": "Kenta Miyake",
          "japaneseName": "三宅健太",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95720-enxx6kZKuwGi.jpg"
        }
      },
      {
        "name": "Izumi Curtis",
        "japaneseName": "イズミ・カーティス",
        "role": "Supporting",
        "image": "/assets/characters/fullmetal-alchemist-brotherhood-char-6.jpg",
        "anime": "Fullmetal Alchemist: Brotherhood",
        "voiceActor": {
          "name": "Shouko Tsuda",
          "japaneseName": "津田匠子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96664-ct3IoFBmnyoJ.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=1ac3_YdSSy0",
    "featured": false
  },
  {
    "id": "haikyuu",
    "rank": 18,
    "title": "Haikyuu!!",
    "japaneseTitle": "ハイキュー!!",
    "romajiTitle": "Haikyuu!!",
    "alternativeTitles": [
      "HAIKYU!!",
      "High Kyuu!!",
      "HAIKYÛ !!",
      "排球少年！！",
      "Haikyu!! L'asso del volley"
    ],
    "description": "Inspired after watching a volleyball ace nicknamed \"Little Giant\" in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a tournament; however, their first match turns out to be their last when they are brutally squashed by the \"King of the Court,\" Tobio Kageyama. Hinata vows to surpass Kageyama, and so after graduating from middle school, he joins Karasuno High School's volleyball team—only to find that his sworn rival, Kageyama, is now his teammate. Thanks to his short height, Hinata struggles to find his role on the team, even with his superior jumping power. Surprisingly, Kageyama has his own problems that only Hinata can help with, and learning to work together appears to be the only way for the team to be successful. Based on Haruichi Furudate's popular shounen manga of the same name, Haikyuu!! is an exhilarating and emotional sports comedy following two determined athletes as they attempt to patch a heated rivalry in order to make their high school volleyball team the best in Japan.",
    "genres": [
      "Comedy",
      "Drama",
      "Sports"
    ],
    "rating": 8.3,
    "year": 2014,
    "status": "Completed",
    "episodes": 25,
    "duration": "24 min",
    "season": "Spring 2014",
    "seasonPeriod": "Spring",
    "studio": "Production I.G",
    "source": "Manga",
    "poster": "/assets/anime/haikyuu.jpg",
    "banner": "/assets/anime/banners/haikyuu.jpg",
    "characters": [
      {
        "name": "Shouyou Hinata",
        "japaneseName": "日向翔陽",
        "role": "Main",
        "image": "/assets/characters/haikyuu-char-1.jpg",
        "anime": "Haikyuu!!",
        "voiceActor": {
          "name": "Ayumu Murase",
          "japaneseName": "村瀬歩",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n110919-zz5dq39kyzNC.png"
        }
      },
      {
        "name": "Tobio Kageyama",
        "japaneseName": "影山飛雄",
        "role": "Main",
        "image": "/assets/characters/haikyuu-char-2.jpg",
        "anime": "Haikyuu!!",
        "voiceActor": {
          "name": "Kaito Ishikawa",
          "japaneseName": "石川界人",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n115156-ngYfqBazlxYQ.png"
        }
      },
      {
        "name": "Koushi Sugawara",
        "japaneseName": "菅原孝支",
        "role": "Supporting",
        "image": "/assets/characters/haikyuu-char-3.jpg",
        "anime": "Haikyuu!!",
        "voiceActor": {
          "name": "Miyu Irino",
          "japaneseName": "入野自由",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95088-BHyqnkadBEqi.png"
        }
      },
      {
        "name": "Daichi Sawamura",
        "japaneseName": "澤村大地",
        "role": "Supporting",
        "image": "/assets/characters/haikyuu-char-4.jpg",
        "anime": "Haikyuu!!",
        "voiceActor": {
          "name": "Satoshi Hino",
          "japaneseName": "日野聡",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95245-prBoWpg0HaGX.jpg"
        }
      },
      {
        "name": "Ryuunosuke Tanaka",
        "japaneseName": "田中龍之介",
        "role": "Supporting",
        "image": "/assets/characters/haikyuu-char-5.jpg",
        "anime": "Haikyuu!!",
        "voiceActor": {
          "name": "Yuu Hayashi",
          "japaneseName": "林勇",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116157-MAPYgEeptEUh.png"
        }
      },
      {
        "name": "Yuu Nishinoya",
        "japaneseName": "西谷夕",
        "role": "Supporting",
        "image": "/assets/characters/haikyuu-char-6.jpg",
        "anime": "Haikyuu!!",
        "voiceActor": {
          "name": "Nobuhiko Okamoto",
          "japaneseName": "岡本信彦",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95270-LqNIF238L59u.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=9kLRkH9zC5k",
    "featured": false
  },
  {
    "id": "spy-x-family",
    "rank": 19,
    "title": "Spy × Family",
    "japaneseTitle": "SPY×FAMILY",
    "romajiTitle": "SPY×FAMILY",
    "alternativeTitles": [
      "SPY×FAMILY",
      "SPY x FAMILY",
      "SxF",
      "스파이 패밀리",
      "间谍过家家",
      "Семья шпиона"
    ],
    "description": "Everyone has a part of themselves they cannot show to anyone else. At a time when all nations of the world were involved in a fierce war of information happening behind closed doors, Ostania and Westalis had been in a state of cold war against one another for decades. The Westalis Intelligence Services' Eastern-Focused Division (WISE) sends their most talented spy, \"Twilight,\" on a top-secret mission to investigate the movements of Donovan Desmond, the chairman of Ostania's National Unity Party, who is threatening peace efforts between the two nations. This mission is known as \"Operation Strix.\" It consists of \"putting together a family in one week in order to infiltrate social gatherings organized by the elite school that Desmond's son attends.\"  \"Twilight\" takes on the identity of psychiatrist Loid Forger and starts looking for family members. But Anya, the daughter he adopts, turns out to have the ability to read people's minds, while his wife, Yor, is an assassin! With it being in each of their own interests to keep these facts hidden, they start living together while concealing their true identities from one another.  World peace is now in the hands of this brand-new family as they embark on an adventure full of surprises.",
    "genres": [
      "Action",
      "Comedy",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.3,
    "year": 2022,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Spring 2022",
    "seasonPeriod": "Spring",
    "studio": "CloverWorks",
    "source": "Manga",
    "poster": "/assets/anime/spy-x-family.jpg",
    "banner": "/assets/anime/banners/spy-x-family.jpg",
    "characters": [
      {
        "name": "Anya Forger",
        "japaneseName": "アーニャ・フォージャー",
        "role": "Main",
        "image": "/assets/characters/spy-x-family-char-1.jpg",
        "anime": "Spy × Family",
        "voiceActor": {
          "name": "Atsumi Tanezaki",
          "japaneseName": "種﨑敦美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112215-kfABGD8W2YSJ.jpg"
        }
      },
      {
        "name": "Loid Forger",
        "japaneseName": "ロイド・フォージャー",
        "role": "Main",
        "image": "/assets/characters/spy-x-family-char-2.jpg",
        "anime": "Spy × Family",
        "voiceActor": {
          "name": "Takuya Eguchi",
          "japaneseName": "江口拓也",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102695-dGzsJkor0KMj.jpg"
        }
      },
      {
        "name": "Yor Forger",
        "japaneseName": "ヨル・フォージャー",
        "role": "Main",
        "image": "/assets/characters/spy-x-family-char-3.jpg",
        "anime": "Spy × Family",
        "voiceActor": {
          "name": "Saori Hayami",
          "japaneseName": "早見沙織",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95869-qCQ0EaWpq1QT.png"
        }
      },
      {
        "name": "Becky Blackbell",
        "japaneseName": "ベッキー・ブラックベル",
        "role": "Supporting",
        "image": "/assets/characters/spy-x-family-char-4.jpg",
        "anime": "Spy × Family",
        "voiceActor": {
          "name": "Emiri Katou",
          "japaneseName": "加藤英美里",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95052-mvDPeBcLCWmX.jpg"
        }
      },
      {
        "name": "Damian Desmond",
        "japaneseName": "ダミアン・デズモンド",
        "role": "Supporting",
        "image": "/assets/characters/spy-x-family-char-5.jpg",
        "anime": "Spy × Family",
        "voiceActor": {
          "name": "Natsumi Fujiwara",
          "japaneseName": "藤原夏海",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119740-EEZ5DErQhOht.png"
        }
      },
      {
        "name": "Yuuri Briar",
        "japaneseName": "ユーリ・ブライア",
        "role": "Supporting",
        "image": "/assets/characters/spy-x-family-char-6.jpg",
        "anime": "Spy × Family",
        "voiceActor": {
          "name": "Mirei Kumagai",
          "japaneseName": "熊谷海麗",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n227375-cM9egxPBb4AR.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=_VRxEEBa1XU",
    "featured": false
  },
  {
    "id": "black-clover",
    "rank": 20,
    "title": "Black Clover",
    "japaneseTitle": "ブラッククローバー",
    "romajiTitle": "Black Clover",
    "alternativeTitles": [
      "תלתן שחור",
      "แบล็กโคลเวอร์",
      "Чёрный клевер"
    ],
    "description": "In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. Being opposite but good rivals, Yuno and Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up is never an option!",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 7.9,
    "year": 2017,
    "status": "Completed",
    "episodes": 170,
    "duration": "24 min",
    "season": "Fall 2017",
    "seasonPeriod": "Fall",
    "studio": "Studio Pierrot",
    "source": "Manga",
    "poster": "/assets/anime/black-clover.jpg",
    "banner": "/assets/anime/banners/black-clover.jpg",
    "characters": [
      {
        "name": "Noelle Silva",
        "japaneseName": "ノエル・シルヴァ",
        "role": "Main",
        "image": "/assets/characters/black-clover-char-1.jpg",
        "anime": "Black Clover",
        "voiceActor": {
          "name": "Kana Yuuki",
          "japaneseName": "優木かな",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118739-hIVuGI5fgL5e.png"
        }
      },
      {
        "name": "Yuno",
        "japaneseName": "ユノ",
        "role": "Main",
        "image": "/assets/characters/black-clover-char-2.jpg",
        "anime": "Black Clover",
        "voiceActor": {
          "name": "Nobunaga Shimazaki",
          "japaneseName": "島﨑信長",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n105989-96etzH1dLNug.jpg"
        }
      },
      {
        "name": "Asta",
        "japaneseName": "アスタ",
        "role": "Main",
        "image": "/assets/characters/black-clover-char-3.jpg",
        "anime": "Black Clover",
        "voiceActor": {
          "name": "Gakuto Kajiwara",
          "japaneseName": "梶原岳人",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n123286-TfHayiK4hqbk.png"
        }
      },
      {
        "name": "Finral Roulacase",
        "japaneseName": "フィンラル・ルーラケイス",
        "role": "Supporting",
        "image": "/assets/characters/black-clover-char-4.jpg",
        "anime": "Black Clover",
        "voiceActor": {
          "name": "Jun Fukuyama",
          "japaneseName": "福山潤",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95086-cwKYmhOFNtH5.png"
        }
      },
      {
        "name": "Charlotte Roselei",
        "japaneseName": "シャーロット・ローズレイ",
        "role": "Supporting",
        "image": "/assets/characters/black-clover-char-5.jpg",
        "anime": "Black Clover",
        "voiceActor": {
          "name": "Yuu Kobayashi",
          "japaneseName": "小林ゆう",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95034-AwobjrcmkMi9.png"
        }
      },
      {
        "name": "Julius Novachrono",
        "japaneseName": "ユリウス・ノヴァクロノ",
        "role": "Supporting",
        "image": "/assets/characters/black-clover-char-6.jpg",
        "anime": "Black Clover",
        "voiceActor": {
          "name": "Toshiyuki Morikawa",
          "japaneseName": "森川智之",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95006-hoLuiZANeD3Q.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=vUjAxk1qYzQ",
    "featured": false
  },
  {
    "id": "blue-lock",
    "rank": 21,
    "title": "Blue Lock",
    "japaneseTitle": "ブルーロック",
    "romajiTitle": "Blue Lock",
    "alternativeTitles": [
      "BLUE LOCK",
      "BLUE LOCK ขังดวลแข้ง",
      " بلو لوك"
    ],
    "description": "Japan’s desire for World Cup glory leads the Japanese Football Association to launch a new rigorous training program to find the national team’s next striker. Three hundred high school players are pitted against each other for the position, but only one will come out on top. Who among them will be the striker to usher in a new era of Japanese soccer?",
    "genres": [
      "Action",
      "Drama",
      "Sports"
    ],
    "rating": 7.9,
    "year": 2022,
    "status": "Completed",
    "episodes": 24,
    "duration": "25 min",
    "season": "Fall 2022",
    "seasonPeriod": "Fall",
    "studio": "8-bit",
    "source": "Manga",
    "poster": "/assets/anime/blue-lock.jpg",
    "banner": "/assets/anime/banners/blue-lock.jpg",
    "characters": [
      {
        "name": "Yoichi Isagi",
        "japaneseName": "潔世一",
        "role": "Main",
        "image": "/assets/characters/blue-lock-char-1.jpg",
        "anime": "Blue Lock",
        "voiceActor": {
          "name": "Kazuki Ura",
          "japaneseName": "浦和希",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n220465-BUFqCWqdHyLo.png"
        }
      },
      {
        "name": "Meguru Bachira",
        "japaneseName": "蜂楽廻",
        "role": "Main",
        "image": "/assets/characters/blue-lock-char-2.jpg",
        "anime": "Blue Lock",
        "voiceActor": {
          "name": "Tasuku Kaito",
          "japaneseName": "海渡翼",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n236528-8A7MREB5CAdG.png"
        }
      },
      {
        "name": "Rensuke Kunigami",
        "japaneseName": "國神錬介",
        "role": "Main",
        "image": "/assets/characters/blue-lock-char-3.jpg",
        "anime": "Blue Lock",
        "voiceActor": {
          "name": "Yuuki Ono",
          "japaneseName": "小野友樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96154-B8GAO9wm1Fbd.jpg"
        }
      },
      {
        "name": "Hyouma Chigiri",
        "japaneseName": "千切豹馬",
        "role": "Main",
        "image": "/assets/characters/blue-lock-char-4.jpg",
        "anime": "Blue Lock",
        "voiceActor": {
          "name": "Souma Saitou",
          "japaneseName": "斉藤壮馬",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n113227-x0UXLNL6v08X.png"
        }
      },
      {
        "name": "Jinpachi Ego",
        "japaneseName": "絵心甚八",
        "role": "Supporting",
        "image": "/assets/characters/blue-lock-char-5.jpg",
        "anime": "Blue Lock",
        "voiceActor": {
          "name": "Hiroshi Kamiya",
          "japaneseName": "神谷浩史",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95118-oOElrn1aSaiC.png"
        }
      },
      {
        "name": "Ryousuke Kira",
        "japaneseName": "吉良涼介",
        "role": "Supporting",
        "image": "/assets/characters/blue-lock-char-6.jpg",
        "anime": "Blue Lock",
        "voiceActor": {
          "name": "Kenichi Suzumura",
          "japaneseName": "鈴村健一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95005-SkoVN02iOglr.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=5YBL7fx94RU",
    "featured": false
  },
  {
    "id": "vinland-saga",
    "rank": 22,
    "title": "Vinland Saga",
    "japaneseTitle": "ヴィンランド・サガ",
    "romajiTitle": "VINLAND SAGA",
    "alternativeTitles": [
      "VINLAND SAGA",
      "סאגת וינלנד",
      "فينلاند ساغا",
      "สงครามคนทมิฬ",
      "Сага о Винланде"
    ],
    "description": "Thorfinn is son to one of the Vikings' greatest warriors, but when his father is killed in battle by the mercenary leader Askeladd, he swears to have his revenge. Thorfinn joins Askeladd's band in order to challenge him to a duel, and ends up caught in the middle of a war for the crown of England.",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.7,
    "year": 2019,
    "status": "Completed",
    "episodes": 24,
    "duration": "24 min",
    "season": "Summer 2019",
    "seasonPeriod": "Summer",
    "studio": "WIT STUDIO",
    "source": "Manga",
    "poster": "/assets/anime/vinland-saga.jpg",
    "banner": "/assets/anime/banners/vinland-saga.jpg",
    "characters": [
      {
        "name": "Thorfinn Karlsefni",
        "japaneseName": "トルフィン・カルルセヴニ",
        "role": "Main",
        "image": "/assets/characters/vinland-saga-char-1.jpg",
        "anime": "Vinland Saga",
        "voiceActor": {
          "name": "Shizuka Ishigami",
          "japaneseName": "石上静香",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118738-60gKflxjl80c.png"
        }
      },
      {
        "name": "Askeladd",
        "japaneseName": "アシェラッド",
        "role": "Main",
        "image": "/assets/characters/vinland-saga-char-2.jpg",
        "anime": "Vinland Saga",
        "voiceActor": {
          "name": "Maki Kawase",
          "japaneseName": "河瀬茉希",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n127542-rHFIx0NCHfsU.png"
        }
      },
      {
        "name": "Canute Svenson",
        "japaneseName": "クヌート",
        "role": "Main",
        "image": "/assets/characters/vinland-saga-char-3.jpg",
        "anime": "Vinland Saga",
        "voiceActor": {
          "name": "Kenshou Ono",
          "japaneseName": "小野賢章",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95819-O4fosAY0a1Ml.jpg"
        }
      },
      {
        "name": "Thors Snorresson",
        "japaneseName": "トールズ・スノーレソン",
        "role": "Supporting",
        "image": "/assets/characters/vinland-saga-char-4.jpg",
        "anime": "Vinland Saga",
        "voiceActor": {
          "name": "Kenichirou Matsuda",
          "japaneseName": "松田健一郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n105273-asextl049B2s.png"
        }
      },
      {
        "name": "Thorkell",
        "japaneseName": "トルケル",
        "role": "Supporting",
        "image": "/assets/characters/vinland-saga-char-5.jpg",
        "anime": "Vinland Saga",
        "voiceActor": {
          "name": "Akio Ootsuka",
          "japaneseName": "大塚明夫",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95146-T6IEmqXW3xUN.jpg"
        }
      },
      {
        "name": "Bjorn",
        "japaneseName": "ビョルン",
        "role": "Supporting",
        "image": "/assets/characters/vinland-saga-char-6.jpg",
        "anime": "Vinland Saga",
        "voiceActor": {
          "name": "Hiroki Yasumoto",
          "japaneseName": "安元洋貴",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95025-LGHr4VufmfCc.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=5xqEp7R9SYM",
    "featured": false
  },
  {
    "id": "tokyo-revengers",
    "rank": 23,
    "title": "Tokyo Revengers",
    "japaneseTitle": "東京リベンジャーズ",
    "romajiTitle": "Tokyo Revengers",
    "alternativeTitles": [
      "重生之道",
      "โตเกียวรีเวนเจอร์ส",
      "โตเกียว卍รีเวนเจอร์ส",
      "东京复仇者"
    ],
    "description": "Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life. He finds out that the only girlfriend he ever had in his life that he dated in middle school, Hinata Tachibana, had been killed by the ruthless Tokyo Manji Gang. The day after hearing about her death, he's standing on the station platform and ends up being pushed over onto the tracks by a herd of people. He closes his eyes thinking he's about to die, but when he opens his eyes back up, he somehow had gone back in time 12 years. Now that he's back living the best days of his life, Takemichi decides to get revenge on his life by saving his girlfriend and changing himself that he'd been running away from.",
    "genres": [
      "Action",
      "Drama",
      "Romance",
      "Supernatural"
    ],
    "rating": 7.7,
    "year": 2021,
    "status": "Completed",
    "episodes": 24,
    "duration": "24 min",
    "season": "Spring 2021",
    "seasonPeriod": "Spring",
    "studio": "LIDENFILMS",
    "source": "Manga",
    "poster": "/assets/anime/tokyo-revengers.jpg",
    "banner": "/assets/anime/banners/tokyo-revengers.jpg",
    "characters": [
      {
        "name": "Manjirou Sano",
        "japaneseName": "佐野万次郎",
        "role": "Main",
        "image": "/assets/characters/tokyo-revengers-char-1.jpg",
        "anime": "Tokyo Revengers",
        "voiceActor": {
          "name": "Yuu Hayashi",
          "japaneseName": "林勇",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116157-MAPYgEeptEUh.png"
        }
      },
      {
        "name": "Takemichi Hanagaki",
        "japaneseName": "花垣武道",
        "role": "Main",
        "image": "/assets/characters/tokyo-revengers-char-2.jpg",
        "anime": "Tokyo Revengers",
        "voiceActor": {
          "name": "Yuuki Shin",
          "japaneseName": "新祐樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n153049-K0czk9NRoLWz.png"
        }
      },
      {
        "name": "Ken Ryuuguji",
        "japaneseName": "龍宮寺 堅",
        "role": "Main",
        "image": "/assets/characters/tokyo-revengers-char-3.jpg",
        "anime": "Tokyo Revengers",
        "voiceActor": {
          "name": "Tatsuhisa Suzuki",
          "japaneseName": "鈴木達央",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95735-xssSe5BRSkaq.jpg"
        }
      },
      {
        "name": "Hinata Tachibana",
        "japaneseName": "橘日向",
        "role": "Supporting",
        "image": "/assets/characters/tokyo-revengers-char-4.jpg",
        "anime": "Tokyo Revengers",
        "voiceActor": {
          "name": "Azumi Waki",
          "japaneseName": "和氣あず未",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119517-ggxWaTnTOrxW.jpg"
        }
      },
      {
        "name": "Keisuke Baji",
        "japaneseName": "場地圭介",
        "role": "Supporting",
        "image": "/assets/characters/tokyo-revengers-char-5.jpg",
        "anime": "Tokyo Revengers",
        "voiceActor": {
          "name": "Masaaki Mizunaka",
          "japaneseName": "水中雅章",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n126794-tZzYeLEQbsrj.png"
        }
      },
      {
        "name": "Chifuyu Matsuno",
        "japaneseName": "松野千冬",
        "role": "Supporting",
        "image": "/assets/characters/tokyo-revengers-char-6.jpg",
        "anime": "Tokyo Revengers",
        "voiceActor": {
          "name": "Shou Karino",
          "japaneseName": "狩野翔",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n137985-b6WYHgpAmAsP.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=nYQUVwwD-H4",
    "featured": false
  },
  {
    "id": "tokyo-ghoul",
    "rank": 24,
    "title": "Tokyo Ghoul",
    "japaneseTitle": "東京喰種 トーキョーグール",
    "romajiTitle": "Tokyo Ghoul",
    "alternativeTitles": [
      "Tokyo Kushu",
      "שדי טוקיו",
      "东京食种",
      "طوكيو غول"
    ],
    "description": "The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious \"ghouls\" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.",
    "genres": [
      "Action",
      "Drama",
      "Horror",
      "Mystery",
      "Psychological",
      "Supernatural"
    ],
    "rating": 7.6,
    "year": 2014,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Summer 2014",
    "seasonPeriod": "Summer",
    "studio": "Studio Pierrot",
    "source": "Manga",
    "poster": "/assets/anime/tokyo-ghoul.jpg",
    "banner": "/assets/anime/banners/tokyo-ghoul.jpg",
    "characters": [
      {
        "name": "Ken Kaneki",
        "japaneseName": "金木研",
        "role": "Main",
        "image": "/assets/characters/tokyo-ghoul-char-1.jpg",
        "anime": "Tokyo Ghoul",
        "voiceActor": {
          "name": "Natsuki Hanae",
          "japaneseName": "花江夏樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n111635-L385UcjTKCBq.png"
        }
      },
      {
        "name": "Touka Kirishima",
        "japaneseName": "霧嶋董香",
        "role": "Main",
        "image": "/assets/characters/tokyo-ghoul-char-2.jpg",
        "anime": "Tokyo Ghoul",
        "voiceActor": {
          "name": "Sora Amamiya",
          "japaneseName": "雨宮天",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116517-xjN5V1jMc443.jpg"
        }
      },
      {
        "name": "Hinami Fueguchi",
        "japaneseName": "笛口雛実",
        "role": "Supporting",
        "image": "/assets/characters/tokyo-ghoul-char-3.jpg",
        "anime": "Tokyo Ghoul",
        "voiceActor": {
          "name": "Sumire Morohoshi",
          "japaneseName": "諸星すみれ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106404-uodatsBbsnJh.png"
        }
      },
      {
        "name": "Koutarou Amon",
        "japaneseName": "亜門鋼太朗",
        "role": "Supporting",
        "image": "/assets/characters/tokyo-ghoul-char-4.jpg",
        "anime": "Tokyo Ghoul",
        "voiceActor": {
          "name": "Katsuyuki Konishi",
          "japaneseName": "小西克幸",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95020-uOJO2IlwpcX0.png"
        }
      },
      {
        "name": "Yukinori Shinohara",
        "japaneseName": "篠原幸紀",
        "role": "Supporting",
        "image": "/assets/characters/tokyo-ghoul-char-5.jpg",
        "anime": "Tokyo Ghoul",
        "voiceActor": {
          "name": "Yutaka Nakano",
          "japaneseName": "仲野裕",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102260-OSLwIM0iBKFa.jpg"
        }
      },
      {
        "name": "Nishiki Nishio",
        "japaneseName": "西尾錦",
        "role": "Supporting",
        "image": "/assets/characters/tokyo-ghoul-char-6.jpg",
        "anime": "Tokyo Ghoul",
        "voiceActor": {
          "name": "Shintarou Asanuma",
          "japaneseName": "浅沼晋太郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95186-XMdPPqYhMrwN.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=XfQUjYsVBrE",
    "featured": false
  },
  {
    "id": "one-punch-man",
    "rank": 25,
    "title": "One Punch Man",
    "japaneseTitle": "ワンパンマン",
    "romajiTitle": "One Punch Man",
    "alternativeTitles": [
      "One-Punch Man",
      "OPM",
      "Wanpanman",
      "איש האגרוף הבודד",
      "一拳超人"
    ],
    "description": "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch. The lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.",
    "genres": [
      "Action",
      "Comedy",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 8.2,
    "year": 2015,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Fall 2015",
    "seasonPeriod": "Fall",
    "studio": "MADHOUSE",
    "source": "Manga",
    "poster": "/assets/anime/one-punch-man.jpg",
    "banner": "/assets/anime/banners/one-punch-man.jpg",
    "characters": [
      {
        "name": "Saitama",
        "japaneseName": "サイタマ",
        "role": "Main",
        "image": "/assets/characters/one-punch-man-char-1.jpg",
        "anime": "One Punch Man",
        "voiceActor": {
          "name": "Makoto Furukawa",
          "japaneseName": "古川慎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112635-ORlGvRvgf5Nq.png"
        }
      },
      {
        "name": "Genos",
        "japaneseName": "ジェノス",
        "role": "Main",
        "image": "/assets/characters/one-punch-man-char-2.jpg",
        "anime": "One Punch Man",
        "voiceActor": {
          "name": "Kaito Ishikawa",
          "japaneseName": "石川界人",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n115156-ngYfqBazlxYQ.png"
        }
      },
      {
        "name": "Genus Hakase",
        "japaneseName": "ジーナス博士",
        "role": "Supporting",
        "image": "/assets/characters/one-punch-man-char-3.jpg",
        "anime": "One Punch Man",
        "voiceActor": {
          "name": "Daisuke Namikawa",
          "japaneseName": "浪川大輔",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95087-6dlBBbejsPyg.png"
        }
      },
      {
        "name": "Juu Ou",
        "japaneseName": "獣王",
        "role": "Supporting",
        "image": "/assets/characters/one-punch-man-char-4.jpg",
        "anime": "One Punch Man",
        "voiceActor": {
          "name": "Jirou Saitou",
          "japaneseName": "斉藤次郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102914-7ygW5ZSwODbF.jpg"
        }
      },
      {
        "name": "Butagami",
        "japaneseName": "豚神",
        "role": "Supporting",
        "image": "/assets/characters/one-punch-man-char-5.jpg",
        "anime": "One Punch Man",
        "voiceActor": {
          "name": "Daisuke Namikawa",
          "japaneseName": "浪川大輔",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95087-6dlBBbejsPyg.png"
        }
      },
      {
        "name": "Zeniru",
        "japaneseName": "ゼニール",
        "role": "Supporting",
        "image": "/assets/characters/one-punch-man-char-6.jpg",
        "anime": "One Punch Man",
        "voiceActor": {
          "name": "Hiroki Gotou",
          "japaneseName": "後藤ヒロキ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/11158.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=RzmFKUDOUgw",
    "featured": false
  },
  {
    "id": "mob-psycho-100",
    "rank": 26,
    "title": "Mob Psycho 100",
    "japaneseTitle": "モブサイコ100",
    "romajiTitle": "Mob Psycho 100",
    "alternativeTitles": [
      "מוב פסיכו 100",
      "ม็อบไซโค 100 คนพลังจิต",
      "Моб Психо 100"
    ],
    "description": "The story revolves around \"Mob,\" a boy who will explode if his emotional capacity reaches 100%. This boy with psychic powers earned his nickname \"Mob\" because he does not stand out among other people. He keeps his psychic powers bottled up so he can live normally, but if his emotional level reaches 100, something will overwhelm his entire body.",
    "genres": [
      "Action",
      "Comedy",
      "Drama",
      "Psychological",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.4,
    "year": 2016,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Summer 2016",
    "seasonPeriod": "Summer",
    "studio": "bones",
    "source": "Manga",
    "poster": "/assets/anime/mob-psycho-100.jpg",
    "banner": "/assets/anime/banners/mob-psycho-100.jpg",
    "characters": [
      {
        "name": "Arataka Reigen",
        "japaneseName": "霊幻新隆",
        "role": "Main",
        "image": "/assets/characters/mob-psycho-100-char-1.jpg",
        "anime": "Mob Psycho 100",
        "voiceActor": {
          "name": "Takahiro Sakurai",
          "japaneseName": "櫻井孝宏",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95079-MdbWTLxPUvFf.jpg"
        }
      },
      {
        "name": "Shigeo Kageyama",
        "japaneseName": "影山茂夫",
        "role": "Main",
        "image": "/assets/characters/mob-psycho-100-char-2.jpg",
        "anime": "Mob Psycho 100",
        "voiceActor": {
          "name": "Setsuo Itou",
          "japaneseName": "伊藤節生",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119798-MB7zfSYLR5ZM.jpg"
        }
      },
      {
        "name": "Ekubo",
        "japaneseName": "エクボ",
        "role": "Main",
        "image": "/assets/characters/mob-psycho-100-char-3.jpg",
        "anime": "Mob Psycho 100",
        "voiceActor": {
          "name": "Akio Ootsuka",
          "japaneseName": "大塚明夫",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95146-T6IEmqXW3xUN.jpg"
        }
      },
      {
        "name": "Ritsu Kageyama",
        "japaneseName": "影山律",
        "role": "Main",
        "image": "/assets/characters/mob-psycho-100-char-4.jpg",
        "anime": "Mob Psycho 100",
        "voiceActor": {
          "name": "Miyu Irino",
          "japaneseName": "入野自由",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95088-BHyqnkadBEqi.png"
        }
      },
      {
        "name": "Tenga Onigawara",
        "japaneseName": "鬼瓦天牙",
        "role": "Supporting",
        "image": "/assets/characters/mob-psycho-100-char-5.jpg",
        "anime": "Mob Psycho 100",
        "voiceActor": {
          "name": "Yoshimasa Hosoya",
          "japaneseName": "細谷佳正",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100626-bH8eZ0wv3HYX.jpg"
        }
      },
      {
        "name": "Tome Kurata",
        "japaneseName": "暗田トメ",
        "role": "Supporting",
        "image": "/assets/characters/mob-psycho-100-char-6.jpg",
        "anime": "Mob Psycho 100",
        "voiceActor": {
          "name": "Atsumi Tanezaki",
          "japaneseName": "種﨑敦美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112215-kfABGD8W2YSJ.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=mV39saBlBLI",
    "featured": false
  },
  {
    "id": "jojos-bizarre-adventure",
    "rank": 27,
    "title": "JoJo's Bizarre Adventure",
    "japaneseTitle": "ジョジョの奇妙な冒険",
    "romajiTitle": "JoJo no Kimyou na Bouken",
    "alternativeTitles": [
      "JoJo no Kimyou na Bouken",
      "JoJo's Bizarre Adventure OVA 1"
    ],
    "description": "Kujo Jotaro is a normal, popular Japanese high-schooler, until he thinks that he is possessed by a spirit, and locks himself in prison. After seeing his grandfather, Joseph Joestar, and fighting Joseph's friend Muhammad Abdul, Jotaro learns that the \"Spirit\" is actually Star Platinum, his Stand, or fighting energy given a semi-solid form. Later, his mother gains a Stand, and becomes sick. Jotaro learns that it is because the vampire Dio Brando has been revived 100 years after his defeat to Jonathan Joestar, Jotaro's great-great-grandfather. Jotaro decides to join Joseph and Abdul in a trip to Egypt to defeat Dio once and for all.",
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Horror",
      "Supernatural"
    ],
    "rating": 7.3,
    "year": 1993,
    "status": "Completed",
    "episodes": 6,
    "duration": "35 min",
    "season": "Fall 1993",
    "seasonPeriod": "Fall",
    "studio": "APPP",
    "source": "Manga",
    "poster": "/assets/anime/jojos-bizarre-adventure.jpg",
    "banner": "/assets/anime/banners/jojos-bizarre-adventure.jpg",
    "characters": [
      {
        "name": "Joutarou Kuujou",
        "japaneseName": "空条承太郎",
        "role": "Main",
        "image": "/assets/characters/jojos-bizarre-adventure-char-1.jpg",
        "anime": "JoJo's Bizarre Adventure",
        "voiceActor": {
          "name": "Juurouta Kosugi",
          "japaneseName": "小杉十郎太",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95237-nelrZUfvh2FH.png"
        }
      },
      {
        "name": "Jean-Pierre Polnareff",
        "japaneseName": "ジャン＝ピエール・ポルナレフ",
        "role": "Main",
        "image": "/assets/characters/jojos-bizarre-adventure-char-2.jpg",
        "anime": "JoJo's Bizarre Adventure",
        "voiceActor": {
          "name": "Katsuji Mori",
          "japaneseName": "森功至",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/921.jpg"
        }
      },
      {
        "name": "Joseph Joestar",
        "japaneseName": "ジョセフ・ジョースター",
        "role": "Main",
        "image": "/assets/characters/jojos-bizarre-adventure-char-3.jpg",
        "anime": "JoJo's Bizarre Adventure",
        "voiceActor": {
          "name": "Chikao Ootsuka",
          "japaneseName": "大塚周夫",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95974-SvJQqqEApoSf.png"
        }
      },
      {
        "name": "Noriaki Kakyouin",
        "japaneseName": "花京院典明",
        "role": "Main",
        "image": "/assets/characters/jojos-bizarre-adventure-char-4.jpg",
        "anime": "JoJo's Bizarre Adventure",
        "voiceActor": {
          "name": "Hirotaka Suzuoki",
          "japaneseName": "鈴置洋孝",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95572-H6tkZ7SsId5E.jpg"
        }
      },
      {
        "name": "Mohammed Avdol",
        "japaneseName": "モハメド・アヴドゥル",
        "role": "Main",
        "image": "/assets/characters/jojos-bizarre-adventure-char-5.jpg",
        "anime": "JoJo's Bizarre Adventure",
        "voiceActor": {
          "name": "Kiyoshi Kobayashi",
          "japaneseName": "小林清志 ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95339-lEIGi2vIa2hN.png"
        }
      },
      {
        "name": "Iggy",
        "japaneseName": "イギー",
        "role": "Main",
        "image": "/assets/characters/jojos-bizarre-adventure-char-6.jpg",
        "anime": "JoJo's Bizarre Adventure",
        "voiceActor": {
          "name": "Original Japanese Cast",
          "japaneseName": "声優",
          "image": ""
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=RIyb52EMx8c",
    "featured": false
  },
  {
    "id": "code-geass",
    "rank": 28,
    "title": "Code Geass",
    "japaneseTitle": "コードギアス 反逆のルルーシュ",
    "romajiTitle": "Code Geass: Hangyaku no Lelouch",
    "alternativeTitles": [
      "Code Geass: Hangyaku no Lelouch",
      "Code Geass: Lelouch of the Rebellion",
      "Code Geass: Lelouch de la Rebelión",
      "קוד גיאס: המהפכה של ללוש"
    ],
    "description": "On August 10th of the year 2010 the Holy Empire of Britannia began a campaign of conquest, its sights set on Japan. Operations were completed in one month thanks to Britannia's deployment of new mobile humanoid armor vehicles dubbed Knightmare Frames. Japan's rights and identity were stripped away, the once proud nation now referred to as Area 11. Its citizens, Elevens, are forced to scratch out a living while the Britannian aristocracy lives comfortably within their settlements. Pockets of resistance appear throughout Area 11, working towards independence for Japan.  Lelouch, an exiled Imperial Prince of Britannia posing as a student, finds himself in the heart of the ongoing conflict for the island nation. Through a chance meeting with a mysterious girl named C.C., Lelouch gains his Geass, the power of the king. Now endowed with absolute dominance over any person, Lelouch may finally realize his goal of bringing down Britannia from within!",
    "genres": [
      "Action",
      "Drama",
      "Mecha",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 8.5,
    "year": 2006,
    "status": "Completed",
    "episodes": 25,
    "duration": "24 min",
    "season": "Fall 2006",
    "seasonPeriod": "Fall",
    "studio": "Sunrise",
    "source": "Original",
    "poster": "/assets/anime/code-geass.jpg",
    "banner": "/assets/anime/banners/code-geass.jpg",
    "characters": [
      {
        "name": "Lelouch Lamperouge",
        "japaneseName": "ルルーシュ・ランペルージ",
        "role": "Main",
        "image": "/assets/characters/code-geass-char-1.jpg",
        "anime": "Code Geass",
        "voiceActor": {
          "name": "Jun Fukuyama",
          "japaneseName": "福山潤",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95086-cwKYmhOFNtH5.png"
        }
      },
      {
        "name": "Kallen Stadtfeld",
        "japaneseName": "カレン・シュタットフェルト",
        "role": "Main",
        "image": "/assets/characters/code-geass-char-2.jpg",
        "anime": "Code Geass",
        "voiceActor": {
          "name": "Ami Koshimizu",
          "japaneseName": "小清水亜美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95070-klkIfKz1VItS.png"
        }
      },
      {
        "name": "Suzaku Kururugi",
        "japaneseName": "枢木スザク",
        "role": "Main",
        "image": "/assets/characters/code-geass-char-3.jpg",
        "anime": "Code Geass",
        "voiceActor": {
          "name": "Takahiro Sakurai",
          "japaneseName": "櫻井孝宏",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95079-MdbWTLxPUvFf.jpg"
        }
      },
      {
        "name": "C.C.",
        "japaneseName": "シー･ツー",
        "role": "Main",
        "image": "/assets/characters/code-geass-char-4.jpg",
        "anime": "Code Geass",
        "voiceActor": {
          "name": "Yukana",
          "japaneseName": "ゆかな",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95140-sFp0uedEmZ9f.png"
        }
      },
      {
        "name": "Cornelia li Britannia",
        "japaneseName": "コーネリア・リ・ブリタニア",
        "role": "Supporting",
        "image": "/assets/characters/code-geass-char-5.jpg",
        "anime": "Code Geass",
        "voiceActor": {
          "name": "Junko Minagawa",
          "japaneseName": "皆川純子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95062-YMTfpO89SgQp.jpg"
        }
      },
      {
        "name": "Nunnally Lamperouge",
        "japaneseName": "ナナリー・ランペルージ",
        "role": "Supporting",
        "image": "/assets/characters/code-geass-char-6.jpg",
        "anime": "Code Geass",
        "voiceActor": {
          "name": "Kaori Nazuka",
          "japaneseName": "名塚佳織",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95078-tMm7zdlRNZ3P.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=Ab9ztHX-DVg",
    "featured": false
  },
  {
    "id": "steins-gate",
    "rank": 29,
    "title": "Steins;Gate",
    "japaneseTitle": "シュタインズ・ゲート",
    "romajiTitle": "Steins;Gate",
    "alternativeTitles": [
      "S;G",
      "סטיינס;גייט",
      "命运石之门",
      "Врата;Штейна"
    ],
    "description": "Self-proclaimed mad scientist Okabe Rintarou lives in a small room in Akihabara, where he invents \"future gadgets\" with fellow lab members Shiina Mayuri, his air-headed childhood friend, and Hashida Itaru, an otaku hacker. The three pass the time by tinkering with their latest creation, a \"Phone Microwave\" that can be controlled through text messages.  The lab members soon face a string of mysterious incidents that lead to a game-changing discovery: the Phone Microwave can send emails to the past and thus alter history. Adapted from the critically acclaimed visual novel by 5pb. and Nitroplus, Steins;Gate takes Okabe to the depths of scientific theory and human despair as he faces the dire consequences of changing the past.",
    "genres": [
      "Drama",
      "Psychological",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 8.9,
    "year": 2011,
    "status": "Completed",
    "episodes": 24,
    "duration": "24 min",
    "season": "Spring 2011",
    "seasonPeriod": "Spring",
    "studio": "WHITE FOX",
    "source": "Visual Novel",
    "poster": "/assets/anime/steins-gate.jpg",
    "banner": "/assets/anime/banners/steins-gate.jpg",
    "characters": [
      {
        "name": "Kurisu Makise",
        "japaneseName": "牧瀬紅莉栖",
        "role": "Main",
        "image": "/assets/characters/steins-gate-char-1.jpg",
        "anime": "Steins;Gate",
        "voiceActor": {
          "name": "Asami Imai",
          "japaneseName": "今井麻美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n103662-1gAPfy3TvPK8.png"
        }
      },
      {
        "name": "Rintarou Okabe",
        "japaneseName": "岡部倫太郎",
        "role": "Main",
        "image": "/assets/characters/steins-gate-char-2.jpg",
        "anime": "Steins;Gate",
        "voiceActor": {
          "name": "Mamoru Miyano",
          "japaneseName": "宮野真守",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95065-eyynywrhombR.png"
        }
      },
      {
        "name": "Mayuri Shiina",
        "japaneseName": "椎名まゆり",
        "role": "Main",
        "image": "/assets/characters/steins-gate-char-3.jpg",
        "anime": "Steins;Gate",
        "voiceActor": {
          "name": "Kana Hanazawa",
          "japaneseName": "花澤香菜",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95185-x8ZYvtN7SegC.png"
        }
      },
      {
        "name": "Suzuha Amane",
        "japaneseName": "阿万音鈴羽",
        "role": "Main",
        "image": "/assets/characters/steins-gate-char-4.jpg",
        "anime": "Steins;Gate",
        "voiceActor": {
          "name": "Yukari Tamura",
          "japaneseName": "田村ゆかり",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95027-Zm9onZDUN7ih.jpg"
        }
      },
      {
        "name": "Itaru Hashida",
        "japaneseName": "橋田至",
        "role": "Main",
        "image": "/assets/characters/steins-gate-char-5.jpg",
        "anime": "Steins;Gate",
        "voiceActor": {
          "name": "Tomokazu Seki",
          "japaneseName": "関智一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95001-vm0RtZhmlzhK.png"
        }
      },
      {
        "name": "Luka Urushibara",
        "japaneseName": "漆原るか",
        "role": "Supporting",
        "image": "/assets/characters/steins-gate-char-6.jpg",
        "anime": "Steins;Gate",
        "voiceActor": {
          "name": "Yuu Kobayashi",
          "japaneseName": "小林ゆう",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95034-AwobjrcmkMi9.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=27OZc-ku6is",
    "featured": false
  },
  {
    "id": "sword-art-online",
    "rank": 30,
    "title": "Sword Art Online",
    "japaneseTitle": "ソードアート・オンライン",
    "romajiTitle": "Sword Art Online",
    "alternativeTitles": [
      "S.A.O",
      "SAO",
      "אומנות החרב אונליין",
      "刀剑神域"
    ],
    "description": "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Romance"
    ],
    "rating": 7.0,
    "year": 2012,
    "status": "Completed",
    "episodes": 25,
    "duration": "23 min",
    "season": "Summer 2012",
    "seasonPeriod": "Summer",
    "studio": "A-1 Pictures",
    "source": "Light Novel",
    "poster": "/assets/anime/sword-art-online.jpg",
    "banner": "/assets/anime/banners/sword-art-online.jpg",
    "characters": [
      {
        "name": "Kazuto Kirigaya",
        "japaneseName": "桐ヶ谷和人",
        "role": "Main",
        "image": "/assets/characters/sword-art-online-char-1.jpg",
        "anime": "Sword Art Online",
        "voiceActor": {
          "name": "Yoshitsugu Matsuoka",
          "japaneseName": "松岡禎丞",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106817-mioGQjbTWWQ6.png"
        }
      },
      {
        "name": "Asuna Yuuki",
        "japaneseName": "結城明日奈",
        "role": "Main",
        "image": "/assets/characters/sword-art-online-char-2.jpg",
        "anime": "Sword Art Online",
        "voiceActor": {
          "name": "Haruka Tomatsu",
          "japaneseName": "戸松遥",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95890-pDWHkOm4ncq0.png"
        }
      },
      {
        "name": "Suguha Kirigaya",
        "japaneseName": "桐ヶ谷直葉",
        "role": "Main",
        "image": "/assets/characters/sword-art-online-char-3.jpg",
        "anime": "Sword Art Online",
        "voiceActor": {
          "name": "Ayana Taketatsu",
          "japaneseName": "竹達彩奈",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n101996-PcY5iaq5LHgd.png"
        }
      },
      {
        "name": "Akihiko Kayaba",
        "japaneseName": "茅場晶彦",
        "role": "Supporting",
        "image": "/assets/characters/sword-art-online-char-4.jpg",
        "anime": "Sword Art Online",
        "voiceActor": {
          "name": "Kouichi Yamadera",
          "japaneseName": "山寺宏一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95011-2RfLzncNyvbR.png"
        }
      },
      {
        "name": "Ryoutarou Tsuboi",
        "japaneseName": "壷井遼太郎",
        "role": "Supporting",
        "image": "/assets/characters/sword-art-online-char-5.jpg",
        "anime": "Sword Art Online",
        "voiceActor": {
          "name": "Hiroaki Hirata",
          "japaneseName": "平田広明",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95125-NeFFiJupoDVj.png"
        }
      },
      {
        "name": "Shouzou Yuuki",
        "japaneseName": "結城彰三",
        "role": "Supporting",
        "image": "/assets/characters/sword-art-online-char-6.jpg",
        "anime": "Sword Art Online",
        "voiceActor": {
          "name": "Kazuhiro Yamaji",
          "japaneseName": "山路和弘",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n101755-LsVbHCwg6Pel.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=C8Jl_-b7ju0",
    "featured": false
  },
  {
    "id": "re-zero",
    "rank": 31,
    "title": "Re:ZERO -Starting Life in Another World-",
    "japaneseTitle": "Re:ゼロから始める異世界生活",
    "romajiTitle": "Re:Zero kara Hajimeru Isekai Seikatsu",
    "alternativeTitles": [
      "Re:Zero kara Hajimeru Isekai Seikatsu",
      "Re: Life in a different world from zero",
      "ReZero",
      "Re Zero",
      "Re：从零开始的异世界生活"
    ],
    "description": "In the story, Subaru Natsuki is an ordinary high school student who is lost in an alternate world, where he is rescued by a beautiful, silver-haired girl. He stays near her to return the favor, but the destiny she is burdened with is more than Subaru can imagine. Enemies attack one by one, and both of them are killed. He then finds out he has the power to rewind death, back to the time he first came to this world. But only he remembers what has happened since.  Notes: - The first episode aired with a runtime of ~50 minutes as opposed to the standard 25 minute long episode. - In the Winter 2020 season, Re:ZERO was rebroadcast and re-edited to fit into an hour time-slot. This edit included the first OVA and added slight modifications to certain scenes throughout. It also added an additional scene at the end of the final episode.",
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Psychological",
      "Romance",
      "Thriller"
    ],
    "rating": 8.1,
    "year": 2016,
    "status": "Completed",
    "episodes": 25,
    "duration": "25 min",
    "season": "Spring 2016",
    "seasonPeriod": "Spring",
    "studio": "WHITE FOX",
    "source": "Light Novel",
    "poster": "/assets/anime/re-zero.jpg",
    "banner": "/assets/anime/banners/re-zero.jpg",
    "characters": [
      {
        "name": "Emilia",
        "japaneseName": "エミリア",
        "role": "Main",
        "image": "/assets/characters/re-zero-char-1.jpg",
        "anime": "Re:ZERO -Starting Life in Another World-",
        "voiceActor": {
          "name": "Rie Takahashi",
          "japaneseName": "高橋李依",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119331-5dPuMCxu4RWf.jpg"
        }
      },
      {
        "name": "Subaru Natsuki",
        "japaneseName": "ナツキ・スバル",
        "role": "Main",
        "image": "/assets/characters/re-zero-char-2.jpg",
        "anime": "Re:ZERO -Starting Life in Another World-",
        "voiceActor": {
          "name": "Yuusuke Kobayashi",
          "japaneseName": "小林裕介",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118407-DMPcKY2AUSHV.png"
        }
      },
      {
        "name": "Rem",
        "japaneseName": "レム",
        "role": "Main",
        "image": "/assets/characters/re-zero-char-3.jpg",
        "anime": "Re:ZERO -Starting Life in Another World-",
        "voiceActor": {
          "name": "Inori Minase",
          "japaneseName": "水瀬いのり",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106297-DUyxkSjS9pEK.jpg"
        }
      },
      {
        "name": "Ram",
        "japaneseName": "ラム",
        "role": "Main",
        "image": "/assets/characters/re-zero-char-4.jpg",
        "anime": "Re:ZERO -Starting Life in Another World-",
        "voiceActor": {
          "name": "Rie Murakawa",
          "japaneseName": "村川梨衣",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107212-4OHHrSs8srTU.png"
        }
      },
      {
        "name": "Felt",
        "japaneseName": "フェルト",
        "role": "Supporting",
        "image": "/assets/characters/re-zero-char-5.jpg",
        "anime": "Re:ZERO -Starting Life in Another World-",
        "voiceActor": {
          "name": "Chinatsu Akasaki",
          "japaneseName": "赤﨑千夏",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107652-wHdkKzhetbiH.jpg"
        }
      },
      {
        "name": "Reinhard van Astrea",
        "japaneseName": "ラインハルト・ヴァン・アストレア",
        "role": "Supporting",
        "image": "/assets/characters/re-zero-char-6.jpg",
        "anime": "Re:ZERO -Starting Life in Another World-",
        "voiceActor": {
          "name": "Yuuichi Nakamura",
          "japaneseName": "中村悠一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95513-up9ZDuocHgRs.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=vFfXjuVA1Jk",
    "featured": false
  },
  {
    "id": "that-time-i-got-reincarnated-as-a-slime",
    "rank": 32,
    "title": "That Time I Got Reincarnated as a Slime",
    "japaneseTitle": "転生したらスライムだった件",
    "romajiTitle": "Tensei Shitara Slime Datta Ken",
    "alternativeTitles": [
      "Tensei Shitara Slime Datta Ken",
      "転スラ",
      "TenSura",
      "Vita da Slime",
      "Moi, quand je me réincarne en Slime"
    ],
    "description": "Lonely thirty-seven-year-old Satoru Mikami is stuck in a dead-end job, unhappy with his mundane life, but after dying at the hands of a robber, he awakens to a fresh start in a fantasy realm...as a slime monster! As he acclimates to his goopy new existence, his exploits with the other monsters set off a chain of events that will change his new world forever!",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 8.0,
    "year": 2018,
    "status": "Completed",
    "episodes": 24,
    "duration": "24 min",
    "season": "Fall 2018",
    "seasonPeriod": "Fall",
    "studio": "8-bit",
    "source": "Light Novel",
    "poster": "/assets/anime/that-time-i-got-reincarnated-as-a-slime.jpg",
    "banner": "/assets/anime/banners/that-time-i-got-reincarnated-as-a-slime.jpg",
    "characters": [
      {
        "name": "Rimuru Tempest",
        "japaneseName": "リムル・テンペスト",
        "role": "Main",
        "image": "/assets/characters/that-time-i-got-reincarnated-as-a-slime-char-1.jpg",
        "anime": "That Time I Got Reincarnated as a Slime",
        "voiceActor": {
          "name": "Miho Okasaki",
          "japaneseName": "岡咲美保",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n127666-kJTHGXxNtzKU.png"
        }
      },
      {
        "name": "Shion",
        "japaneseName": "シオン",
        "role": "Supporting",
        "image": "/assets/characters/that-time-i-got-reincarnated-as-a-slime-char-2.jpg",
        "anime": "That Time I Got Reincarnated as a Slime",
        "voiceActor": {
          "name": "Mao Ichimichi",
          "japaneseName": "市道真央",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118510-iMUv5D7W99C1.png"
        }
      },
      {
        "name": "Veldora Tempest",
        "japaneseName": "ヴェルドラ＝テンペスト",
        "role": "Supporting",
        "image": "/assets/characters/that-time-i-got-reincarnated-as-a-slime-char-3.jpg",
        "anime": "That Time I Got Reincarnated as a Slime",
        "voiceActor": {
          "name": "Tomoaki Maeno",
          "japaneseName": "前野智昭",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96489-xTzYxgdC9g9l.png"
        }
      },
      {
        "name": "Ranga",
        "japaneseName": "ランガ",
        "role": "Supporting",
        "image": "/assets/characters/that-time-i-got-reincarnated-as-a-slime-char-4.jpg",
        "anime": "That Time I Got Reincarnated as a Slime",
        "voiceActor": {
          "name": "Chikahiro Kobayashi",
          "japaneseName": "小林親弘",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124703-rtSB51tfBuY7.png"
        }
      },
      {
        "name": "Milim Nava",
        "japaneseName": "ミリム・ナーヴァ",
        "role": "Supporting",
        "image": "/assets/characters/that-time-i-got-reincarnated-as-a-slime-char-5.jpg",
        "anime": "That Time I Got Reincarnated as a Slime",
        "voiceActor": {
          "name": "Rina Hidaka",
          "japaneseName": "日高里菜",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100250-L8WsoaLevibT.jpg"
        }
      },
      {
        "name": "Shizu",
        "japaneseName": "シズ",
        "role": "Supporting",
        "image": "/assets/characters/that-time-i-got-reincarnated-as-a-slime-char-6.jpg",
        "anime": "That Time I Got Reincarnated as a Slime",
        "voiceActor": {
          "name": "Yumiri Hanamori",
          "japaneseName": "花守ゆみり",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116543-ugu1HZWiQkqi.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=QsS7AzXCwKA",
    "featured": false
  },
  {
    "id": "mushoku-tensei",
    "rank": 33,
    "title": "Mushoku Tensei: Jobless Reincarnation",
    "japaneseTitle": "無職転生 ～異世界行ったら本気だす～",
    "romajiTitle": "Mushoku Tensei: Isekai Ittara Honki Dasu",
    "alternativeTitles": [
      "Mushoku Tensei: Isekai Ittara Honki Dasu",
      "Jobless Reincarnation: I Will Seriously Try If I Go To Another World",
      "无职转生 ~到了异世界就拿出真本事~",
      "เกิดชาตินี้พี่ต้องเทพ",
      "Thất nghiệp chuyển sinh"
    ],
    "description": "When a 34-year-old underachiever gets run over by a bus, his story doesn’t end there. Reincarnated in a new world as an infant, Rudeus will seize every opportunity to live the life he’s always wanted. Armed with new friends, some freshly acquired magical abilities, and the courage to do the things he’s always dreamed of, he’s embarking on an epic adventure—with all of his past experience intact!  Note: The anime pre-screened its 1st and 2nd episode starting on the 27th of December on the Nico Nico Live Broadcasting and D Anime Store services",
    "genres": [
      "Adventure",
      "Drama",
      "Ecchi",
      "Fantasy"
    ],
    "rating": 8.2,
    "year": 2021,
    "status": "Completed",
    "episodes": 11,
    "duration": "24 min",
    "season": "Winter 2021",
    "seasonPeriod": "Winter",
    "studio": "Studio Bind",
    "source": "Light Novel",
    "poster": "/assets/anime/mushoku-tensei.jpg",
    "banner": "/assets/anime/banners/mushoku-tensei.jpg",
    "characters": [
      {
        "name": "Sylphiette",
        "japaneseName": "シルフィエット",
        "role": "Main",
        "image": "/assets/characters/mushoku-tensei-char-1.jpg",
        "anime": "Mushoku Tensei: Jobless Reincarnation",
        "voiceActor": {
          "name": "Ai Kayano",
          "japaneseName": "茅野愛衣",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n105765-DDK94me8axVv.png"
        }
      },
      {
        "name": "Rudeus Greyrat",
        "japaneseName": "ルーデウス・グレイラット",
        "role": "Main",
        "image": "/assets/characters/mushoku-tensei-char-2.jpg",
        "anime": "Mushoku Tensei: Jobless Reincarnation",
        "voiceActor": {
          "name": "Yumi Uchiyama",
          "japaneseName": "内山夕実",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106784-reDoHBLWxi7J.jpg"
        }
      },
      {
        "name": "Eris Boreas Greyrat",
        "japaneseName": "エリス・ボレアス・グレイラット",
        "role": "Main",
        "image": "/assets/characters/mushoku-tensei-char-3.jpg",
        "anime": "Mushoku Tensei: Jobless Reincarnation",
        "voiceActor": {
          "name": "Ai Kakuma",
          "japaneseName": "加隈亜衣",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n113511-F58Tk4OFKs1w.jpg"
        }
      },
      {
        "name": "Roxy Migurdia",
        "japaneseName": "ロキシー・ミグルディア",
        "role": "Main",
        "image": "/assets/characters/mushoku-tensei-char-4.jpg",
        "anime": "Mushoku Tensei: Jobless Reincarnation",
        "voiceActor": {
          "name": "Konomi Kohara",
          "japaneseName": "小原好美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n121961-TaMewK1taQm6.png"
        }
      },
      {
        "name": "Ruijerd Superdia",
        "japaneseName": "ルイジェルド・スペルディア",
        "role": "Main",
        "image": "/assets/characters/mushoku-tensei-char-5.jpg",
        "anime": "Mushoku Tensei: Jobless Reincarnation",
        "voiceActor": {
          "name": "Daisuke Namikawa",
          "japaneseName": "浪川大輔",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95087-6dlBBbejsPyg.png"
        }
      },
      {
        "name": "Paul Greyrat",
        "japaneseName": "パウロ・グレイラット",
        "role": "Supporting",
        "image": "/assets/characters/mushoku-tensei-char-6.jpg",
        "anime": "Mushoku Tensei: Jobless Reincarnation",
        "voiceActor": {
          "name": "Toshiyuki Morikawa",
          "japaneseName": "森川智之",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95006-hoLuiZANeD3Q.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=JoS7Z8MCD6E",
    "featured": false
  },
  {
    "id": "the-rising-of-the-shield-hero",
    "rank": 34,
    "title": "The Rising of the Shield Hero",
    "japaneseTitle": "盾の勇者の成り上がり",
    "romajiTitle": "Tate no Yuusha no Nariagari",
    "alternativeTitles": [
      "Tate no Yuusha no Nariagari",
      "盾之勇者成名录",
      "ผู้กล้าโล่ผงาด",
      "Восхождение героя щита"
    ],
    "description": "Naofumi Iwatani, an uncharismatic Otaku who spends his days on games and manga, suddenly finds himself summoned to a parallel universe! He discovers he is one of four heroes equipped with legendary weapons and tasked with saving the world from its prophesied destruction. As the Shield Hero, the weakest of the heroes, all is not as it seems. Naofumi is soon alone, penniless, and betrayed. With no one to turn to, and nowhere to run, he is left with only his shield. Now, Naofumi must rise to become the legendary Shield Hero and save the world! Note: - The first episode was pre-aired on December 27th, 2018. Regular broadcast began on January 9th, 2019. - The first episode aired with a runtime of ~47 minutes as opposed to the standard 24 minute long episode.",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 7.6,
    "year": 2019,
    "status": "Completed",
    "episodes": 25,
    "duration": "24 min",
    "season": "Winter 2019",
    "seasonPeriod": "Winter",
    "studio": "Kinema Citrus",
    "source": "Light Novel",
    "poster": "/assets/anime/the-rising-of-the-shield-hero.jpg",
    "banner": "/assets/anime/banners/the-rising-of-the-shield-hero.jpg",
    "characters": [
      {
        "name": "Naofumi Iwatani",
        "japaneseName": "岩谷尚文",
        "role": "Main",
        "image": "/assets/characters/the-rising-of-the-shield-hero-char-1.jpg",
        "anime": "The Rising of the Shield Hero",
        "voiceActor": {
          "name": "Kaito Ishikawa",
          "japaneseName": "石川界人",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n115156-ngYfqBazlxYQ.png"
        }
      },
      {
        "name": "Raphtalia",
        "japaneseName": "ラフタリア",
        "role": "Main",
        "image": "/assets/characters/the-rising-of-the-shield-hero-char-2.jpg",
        "anime": "The Rising of the Shield Hero",
        "voiceActor": {
          "name": "Asami Seto",
          "japaneseName": "瀬戸麻沙美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106787-ojpoY7XEGYgc.jpg"
        }
      },
      {
        "name": "Filo",
        "japaneseName": "フィーロ",
        "role": "Main",
        "image": "/assets/characters/the-rising-of-the-shield-hero-char-3.jpg",
        "anime": "The Rising of the Shield Hero",
        "voiceActor": {
          "name": "Rina Hidaka",
          "japaneseName": "日高里菜",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100250-L8WsoaLevibT.jpg"
        }
      },
      {
        "name": "Malty Melromarc",
        "japaneseName": "マルティ・メルロマルク",
        "role": "Supporting",
        "image": "/assets/characters/the-rising-of-the-shield-hero-char-4.jpg",
        "anime": "The Rising of the Shield Hero",
        "voiceActor": {
          "name": "Sarah Emi Bridcutt",
          "japaneseName": "ブリドカット・セーラ・恵美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n114371-OEVE30OTFBsk.png"
        }
      },
      {
        "name": "Motoyasu Kitamura",
        "japaneseName": "北村元康",
        "role": "Supporting",
        "image": "/assets/characters/the-rising-of-the-shield-hero-char-5.jpg",
        "anime": "The Rising of the Shield Hero",
        "voiceActor": {
          "name": "Makoto\r\n Takahashi",
          "japaneseName": "高橋信",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118745-uWnMSqzJf8Ul.png"
        }
      },
      {
        "name": "Ren Amaki",
        "japaneseName": "天木錬",
        "role": "Supporting",
        "image": "/assets/characters/the-rising-of-the-shield-hero-char-6.jpg",
        "anime": "The Rising of the Shield Hero",
        "voiceActor": {
          "name": "Yoshitsugu Matsuoka",
          "japaneseName": "松岡禎丞",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106817-mioGQjbTWWQ6.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=VKYmpq-V3Rs",
    "featured": false
  },
  {
    "id": "dr-stone",
    "rank": 35,
    "title": "Dr. Stone",
    "japaneseTitle": "Dr.STONE",
    "romajiTitle": "Dr. STONE",
    "alternativeTitles": [
      "Dr. STONE",
      "Dr. STONE",
      "Dcst",
      "石纪元",
      "ドクターストーン",
      "ดร.สโตน เจ้าแห่งวิทยาศาสตร์กู้คืนอารยธรรมโลก"
    ],
    "description": "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world— turning every single human into stone. Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified. However, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.1,
    "year": 2019,
    "status": "Completed",
    "episodes": 24,
    "duration": "24 min",
    "season": "Summer 2019",
    "seasonPeriod": "Summer",
    "studio": "TMS Entertainment",
    "source": "Manga",
    "poster": "/assets/anime/dr-stone.jpg",
    "banner": "/assets/anime/banners/dr-stone.jpg",
    "characters": [
      {
        "name": "Senkuu Ishigami",
        "japaneseName": "石神千空",
        "role": "Main",
        "image": "/assets/characters/dr-stone-char-1.jpg",
        "anime": "Dr. Stone",
        "voiceActor": {
          "name": "Yuusuke Kobayashi",
          "japaneseName": "小林裕介",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118407-DMPcKY2AUSHV.png"
        }
      },
      {
        "name": "Kohaku",
        "japaneseName": "コハク",
        "role": "Main",
        "image": "/assets/characters/dr-stone-char-2.jpg",
        "anime": "Dr. Stone",
        "voiceActor": {
          "name": "Manami Numakura",
          "japaneseName": "沼倉愛美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104973-rymSxCu8uP0Y.png"
        }
      },
      {
        "name": "Tsukasa Shishiou",
        "japaneseName": "獅子王司",
        "role": "Main",
        "image": "/assets/characters/dr-stone-char-3.jpg",
        "anime": "Dr. Stone",
        "voiceActor": {
          "name": "Yuuichi Nakamura",
          "japaneseName": "中村悠一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95513-up9ZDuocHgRs.png"
        }
      },
      {
        "name": "Chrome",
        "japaneseName": "クロム",
        "role": "Main",
        "image": "/assets/characters/dr-stone-char-4.jpg",
        "anime": "Dr. Stone",
        "voiceActor": {
          "name": "Gen Satou",
          "japaneseName": "佐藤元",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n141083-Oc5rYAP6e3D7.jpg"
        }
      },
      {
        "name": "Taiju Ooki",
        "japaneseName": "大木大樹",
        "role": "Main",
        "image": "/assets/characters/dr-stone-char-5.jpg",
        "anime": "Dr. Stone",
        "voiceActor": {
          "name": "Makoto Furukawa",
          "japaneseName": "古川慎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112635-ORlGvRvgf5Nq.png"
        }
      },
      {
        "name": "Yuzuriha Ogawa",
        "japaneseName": "小川杠",
        "role": "Main",
        "image": "/assets/characters/dr-stone-char-6.jpg",
        "anime": "Dr. Stone",
        "voiceActor": {
          "name": "Kana Ichinose",
          "japaneseName": "市ノ瀬加那",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124390-03LHel2XSFel.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=pon9R5n5dMk",
    "featured": false
  },
  {
    "id": "fire-force",
    "rank": 36,
    "title": "Fire Force",
    "japaneseTitle": "炎炎ノ消防隊",
    "romajiTitle": "Enen no Shouboutai",
    "alternativeTitles": [
      "Enen no Shouboutai",
      "หน่วยผจญคนไฟลุก",
      "כוח האש",
      "Полум'яні вогнеборці",
      "Пламенный отряд"
    ],
    "description": "Year 198 of the Solar Era in Tokyo, special fire brigades are fighting against a phenomenon called spontaneous human combustion where human beings are turned into living infernos called \"Infernals.” While the Infernals are first-generation cases of spontaneous human combustion, later generations possess the ability to manipulate flames while retaining human form. Shinra Kusakabe, a youth who gained the nickname Devil’s Footprints for his ability to ignite his feet at will, joins the Special Fire Force Company 8 which composes of other flames users as they work to extinguish any Infernals they encounter. As a faction that is creating Infernals appears, Shinra begins to uncover the truth behind a mysterious fire that caused the death of his family twelve years ago.",
    "genres": [
      "Action",
      "Drama",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 7.6,
    "year": 2019,
    "status": "Completed",
    "episodes": 24,
    "duration": "24 min",
    "season": "Summer 2019",
    "seasonPeriod": "Summer",
    "studio": "david production",
    "source": "Manga",
    "poster": "/assets/anime/fire-force.jpg",
    "banner": "/assets/anime/banners/fire-force.jpg",
    "characters": [
      {
        "name": "Shinra Kusakabe",
        "japaneseName": "日下部森羅",
        "role": "Main",
        "image": "/assets/characters/fire-force-char-1.jpg",
        "anime": "Fire Force",
        "voiceActor": {
          "name": "Gakuto Kajiwara",
          "japaneseName": "梶原岳人",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n123286-TfHayiK4hqbk.png"
        }
      },
      {
        "name": "Akitaru Oubi",
        "japaneseName": "秋樽桜備",
        "role": "Main",
        "image": "/assets/characters/fire-force-char-2.jpg",
        "anime": "Fire Force",
        "voiceActor": {
          "name": "Kazuya Nakai",
          "japaneseName": "中井和哉",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95123-54LrTiD9kGwY.jpg"
        }
      },
      {
        "name": "Maki Oze",
        "japaneseName": "尾瀬茉希",
        "role": "Main",
        "image": "/assets/characters/fire-force-char-3.jpg",
        "anime": "Fire Force",
        "voiceActor": {
          "name": "Saeko Kamijou",
          "japaneseName": "上條沙恵子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n135200-puheykQEE9s6.png"
        }
      },
      {
        "name": "Takehisa Hinawa",
        "japaneseName": "武久火縄",
        "role": "Main",
        "image": "/assets/characters/fire-force-char-4.jpg",
        "anime": "Fire Force",
        "voiceActor": {
          "name": "Kenichi Suzumura",
          "japaneseName": "鈴村健一",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95005-SkoVN02iOglr.png"
        }
      },
      {
        "name": "Arthur Boyle",
        "japaneseName": "アーサー・ボイル",
        "role": "Main",
        "image": "/assets/characters/fire-force-char-5.jpg",
        "anime": "Fire Force",
        "voiceActor": {
          "name": "Yuusuke Kobayashi",
          "japaneseName": "小林裕介",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118407-DMPcKY2AUSHV.png"
        }
      },
      {
        "name": "Iris",
        "japaneseName": "アイリス",
        "role": "Main",
        "image": "/assets/characters/fire-force-char-6.jpg",
        "anime": "Fire Force",
        "voiceActor": {
          "name": "Mao Ichimichi",
          "japaneseName": "市道真央",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118510-iMUv5D7W99C1.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=Dpae4acLLeA",
    "featured": false
  },
  {
    "id": "kaiju-no-8",
    "rank": 37,
    "title": "Kaiju No. 8",
    "japaneseTitle": "怪獣８号",
    "romajiTitle": "Kaijuu 8-gou",
    "alternativeTitles": [
      "Kaijuu 8-gou",
      "Monster #8",
      "8Kaijuu",
      "KAIJU No. EIGHT",
      "Kaiju N°8"
    ],
    "description": "With the highest kaiju-emergence rates in the world, Japan is no stranger to attack by deadly monsters. Enter the Japan Defense Force, a military organization tasked with the neutralization of kaiju. Kafka Hibino, a kaiju-corpse cleanup man, has always dreamed of joining the force. But when he gets another shot at achieving his childhood dream, he undergoes an unexpected transformation. How can he fight kaiju now that he’s become one himself?!",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "rating": 8.1,
    "year": 2024,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Spring 2024",
    "seasonPeriod": "Spring",
    "studio": "Production I.G",
    "source": "Manga",
    "poster": "/assets/anime/kaiju-no-8.jpg",
    "banner": "/assets/anime/banners/kaiju-no-8.jpg",
    "characters": [
      {
        "name": "Kafka Hibino",
        "japaneseName": "日比野カフカ",
        "role": "Main",
        "image": "/assets/characters/kaiju-no-8-char-1.jpg",
        "anime": "Kaiju No. 8",
        "voiceActor": {
          "name": "Masaya Fukunishi",
          "japaneseName": "福西勝也",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n175016-ehNBIRIxCScY.png"
        }
      },
      {
        "name": "Reno Ichikawa",
        "japaneseName": "市川レノ",
        "role": "Main",
        "image": "/assets/characters/kaiju-no-8-char-2.jpg",
        "anime": "Kaiju No. 8",
        "voiceActor": {
          "name": "Wataru Katou",
          "japaneseName": "加藤渉",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n145234-wpbiwYFtVCWT.png"
        }
      },
      {
        "name": "Kikoru Shinomiya",
        "japaneseName": "四ノ宮キコル",
        "role": "Main",
        "image": "/assets/characters/kaiju-no-8-char-3.jpg",
        "anime": "Kaiju No. 8",
        "voiceActor": {
          "name": "Fairouz Ai",
          "japaneseName": "ファイルーズあい",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n133625-YpEgKD7flV2S.jpg"
        }
      },
      {
        "name": "Mina Ashiro",
        "japaneseName": "亜白ミナ",
        "role": "Supporting",
        "image": "/assets/characters/kaiju-no-8-char-4.jpg",
        "anime": "Kaiju No. 8",
        "voiceActor": {
          "name": "Asami Seto",
          "japaneseName": "瀬戸麻沙美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106787-ojpoY7XEGYgc.jpg"
        }
      },
      {
        "name": "Soushirou Hoshina",
        "japaneseName": "保科宗四郎",
        "role": "Supporting",
        "image": "/assets/characters/kaiju-no-8-char-5.jpg",
        "anime": "Kaiju No. 8",
        "voiceActor": {
          "name": "Kengo Kawanishi",
          "japaneseName": "河西健吾",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n110877-8mqVadVTaFl4.png"
        }
      },
      {
        "name": "Gen Narumi",
        "japaneseName": "鳴海弦",
        "role": "Supporting",
        "image": "/assets/characters/kaiju-no-8-char-6.jpg",
        "anime": "Kaiju No. 8",
        "voiceActor": {
          "name": "Kouki Uchiyama",
          "japaneseName": "内山昂輝",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96764-yJWGrhjanDJQ.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=7n_mFVPeApw",
    "featured": false
  },
  {
    "id": "dandadan",
    "rank": 38,
    "title": "Dandadan",
    "japaneseTitle": "ダンダダン",
    "romajiTitle": "Dandadan",
    "alternativeTitles": [
      "DAN DA DAN",
      "ดันดาดัน",
      "膽大黨",
      "DAN DA DAN: FIRST ENCOUNTER",
      "Дандадан"
    ],
    "description": "This is a story about Momo, a high school girl who comes from a family of spirit mediums, and her classmate Okarun, an occult fanatic. After Momo rescues Okarun from being bullied, they begin talking. However, an argument ensues between them since Momo believes in ghosts but denies aliens exist, and Okarun believes in aliens but denies ghosts exist. To prove to each other what they believe in is real, Momo goes to an abandoned hospital where a UFO has been spotted and Okarun goes to a tunnel rumored to be haunted. To their surprise, they each encounter overwhelming paranormal activities that transcend comprehension. Amid these predicaments, Momo awakens her hidden power and Okarun gains the power of a curse to overcome these new dangers! Their fateful love begins as well!? The story of the occult battle and adolescence starts!   Notes:  - Worldwide premiere of Episode 1 before the Japanese television premiere occurred at Anime Expo July 6, 2024.  - Episodes 1-3 titled as DAN DA DAN: FIRST ENCOUNTER was pre-screened in advance in theaters on August 31, 2024 in Asia, September 7, 2024 in Europe and September 13, 2024 in North America. The regular TV broadcast began October 4, 2024.",
    "genres": [
      "Action",
      "Comedy",
      "Drama",
      "Romance",
      "Sci-Fi",
      "Supernatural"
    ],
    "rating": 8.3,
    "year": 2024,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Fall 2024",
    "seasonPeriod": "Fall",
    "studio": "Science SARU",
    "source": "Manga",
    "poster": "/assets/anime/dandadan.jpg",
    "banner": "/assets/anime/banners/dandadan.jpg",
    "characters": [
      {
        "name": "Ken Takakura",
        "japaneseName": "高倉健",
        "role": "Main",
        "image": "/assets/characters/dandadan-char-1.jpg",
        "anime": "Dandadan",
        "voiceActor": {
          "name": "Natsuki Hanae",
          "japaneseName": "花江夏樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n111635-L385UcjTKCBq.png"
        }
      },
      {
        "name": "Momo Ayase",
        "japaneseName": "綾瀬桃",
        "role": "Main",
        "image": "/assets/characters/dandadan-char-2.jpg",
        "anime": "Dandadan",
        "voiceActor": {
          "name": "Shion Wakayama",
          "japaneseName": "若山詩音",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n148220-Tj3U7jdXZehG.png"
        }
      },
      {
        "name": "Seiko Ayase",
        "japaneseName": "綾瀬星子",
        "role": "Supporting",
        "image": "/assets/characters/dandadan-char-3.jpg",
        "anime": "Dandadan",
        "voiceActor": {
          "name": "Nana Mizuki",
          "japaneseName": "水樹奈々",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95081-qto4UanYkpQT.png"
        }
      },
      {
        "name": "Turbo Babaa",
        "japaneseName": "ターボババア",
        "role": "Supporting",
        "image": "/assets/characters/dandadan-char-4.jpg",
        "anime": "Dandadan",
        "voiceActor": {
          "name": "Mayumi Tanaka",
          "japaneseName": "田中真弓",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95075-1qD4TeW1ON92.png"
        }
      },
      {
        "name": "Aira Shiratori",
        "japaneseName": "白鳥愛羅",
        "role": "Supporting",
        "image": "/assets/characters/dandadan-char-5.jpg",
        "anime": "Dandadan",
        "voiceActor": {
          "name": "Ayane Sakura",
          "japaneseName": "佐倉綾音",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106622-yemj6ymLz4lY.png"
        }
      },
      {
        "name": "Acrobatic Sarasara",
        "japaneseName": "アクロバティックさらさら",
        "role": "Supporting",
        "image": "/assets/characters/dandadan-char-6.jpg",
        "anime": "Dandadan",
        "voiceActor": {
          "name": "Kikuko Inoue",
          "japaneseName": "井上喜久子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95195-nLvtZl5sCK0D.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=rJo1MnsuxyY",
    "featured": true
  },
  {
    "id": "delicious-in-dungeon",
    "rank": 39,
    "title": "Delicious in Dungeon",
    "japaneseTitle": "ダンジョン飯",
    "romajiTitle": "Dungeon Meshi",
    "alternativeTitles": [
      "Dungeon Meshi",
      "Dungeon Food",
      "Dungeon Meal",
      "Tragones y Mazmorras",
      "Gloutons et Dragons"
    ],
    "description": "When young adventurer Laios and his company are attacked and soundly thrashed by a dragon deep in a dungeon, the party loses all its money and provisions...and a member! They're eager to go back and save her, but there is just one problem: If they set out with no food or coin to speak of, they're sure to starve on the way! But Laios comes up with a brilliant idea: \"Let's eat the monsters!\" Slimes, basilisks, and even dragons...none are safe from the appetites of these dungeon-crawling gourmands!   Note: A world premiere screening of Episode 1 was shown in the Studio TRIGGER panel at Anime Expo on July 1, 2023.",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 8.5,
    "year": 2024,
    "status": "Completed",
    "episodes": 24,
    "duration": "25 min",
    "season": "Winter 2024",
    "seasonPeriod": "Winter",
    "studio": "TRIGGER",
    "source": "Manga",
    "poster": "/assets/anime/delicious-in-dungeon.jpg",
    "banner": "/assets/anime/banners/delicious-in-dungeon.jpg",
    "characters": [
      {
        "name": "Laios Thorden",
        "japaneseName": "ライオス・トーデン",
        "role": "Main",
        "image": "/assets/characters/delicious-in-dungeon-char-1.jpg",
        "anime": "Delicious in Dungeon",
        "voiceActor": {
          "name": "Kentarou Kumagai",
          "japaneseName": "熊谷健太郎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124759-Qd1CVnWr4D8L.png"
        }
      },
      {
        "name": "Marcille Donato",
        "japaneseName": "マルシル・ドナトー",
        "role": "Main",
        "image": "/assets/characters/delicious-in-dungeon-char-2.jpg",
        "anime": "Delicious in Dungeon",
        "voiceActor": {
          "name": "Sayaka Senbongi",
          "japaneseName": "千本木彩花",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119616-Dakq7gsUo2ja.png"
        }
      },
      {
        "name": "Senshi",
        "japaneseName": "センシ",
        "role": "Main",
        "image": "/assets/characters/delicious-in-dungeon-char-3.jpg",
        "anime": "Delicious in Dungeon",
        "voiceActor": {
          "name": "Hiroshi Naka",
          "japaneseName": "中博史",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96174-xESRSYS5NSwN.jpg"
        }
      },
      {
        "name": "Chilchuck Tims",
        "japaneseName": "チルチャック・ティムズ",
        "role": "Main",
        "image": "/assets/characters/delicious-in-dungeon-char-4.jpg",
        "anime": "Delicious in Dungeon",
        "voiceActor": {
          "name": "Asuna Tomari",
          "japaneseName": "泊明日菜",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129351-XYMaAkroHj8S.jpg"
        }
      },
      {
        "name": "Toshirou Nakamoto",
        "japaneseName": "半本俊朗",
        "role": "Supporting",
        "image": "/assets/characters/delicious-in-dungeon-char-5.jpg",
        "anime": "Delicious in Dungeon",
        "voiceActor": {
          "name": "Shinji Kawada",
          "japaneseName": "川田紳司",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95410-AosJKUc7YZXE.jpg"
        }
      },
      {
        "name": "Izutsumi",
        "japaneseName": "イヅツミ",
        "role": "Supporting",
        "image": "/assets/characters/delicious-in-dungeon-char-6.jpg",
        "anime": "Delicious in Dungeon",
        "voiceActor": {
          "name": "Mitsuho Kambe",
          "japaneseName": "神戸光歩",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n147549-7P6irh4EWR5N.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=RtpYObV4c1Y",
    "featured": false
  },
  {
    "id": "the-apothecary-diaries",
    "rank": 40,
    "title": "The Apothecary Diaries",
    "japaneseTitle": "薬屋のひとりごと",
    "romajiTitle": "Kusuriya no Hitorigoto",
    "alternativeTitles": [
      "Kusuriya no Hitorigoto",
      "Drugstore Soliloquy",
      "Les Carnets de l'Apothicaire",
      "Zapiski zielarki",
      "Diários de uma Apotecária"
    ],
    "description": "Maomao lived a peaceful life with her apothecary father. Until one day, she’s sold as a lowly servant to the emperor’s palace. But she wasn’t meant for a compliant life among royalty. So when imperial heirs fall ill, she decides to step in and find a cure! This catches the eye of Jinshi, a handsome palace official who promotes her. Now, she’s making a name for herself solving medical mysteries!",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "rating": 8.8,
    "year": 2023,
    "status": "Completed",
    "episodes": 24,
    "duration": "23 min",
    "season": "Fall 2023",
    "seasonPeriod": "Fall",
    "studio": "OLM",
    "source": "Light Novel",
    "poster": "/assets/anime/the-apothecary-diaries.jpg",
    "banner": "/assets/anime/banners/the-apothecary-diaries.jpg",
    "characters": [
      {
        "name": "Maomao",
        "japaneseName": "猫猫",
        "role": "Main",
        "image": "/assets/characters/the-apothecary-diaries-char-1.jpg",
        "anime": "The Apothecary Diaries",
        "voiceActor": {
          "name": "Aoi Yuuki",
          "japaneseName": "悠木碧",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n101686-PTd0lQZMsmcv.png"
        }
      },
      {
        "name": "Jinshi",
        "japaneseName": "壬氏",
        "role": "Main",
        "image": "/assets/characters/the-apothecary-diaries-char-2.jpg",
        "anime": "The Apothecary Diaries",
        "voiceActor": {
          "name": "Takeo Ootsuka",
          "japaneseName": "大塚剛央",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n128426-uB8KFqVLbogF.png"
        }
      },
      {
        "name": "Koutei",
        "japaneseName": "皇帝",
        "role": "Supporting",
        "image": "/assets/characters/the-apothecary-diaries-char-3.jpg",
        "anime": "The Apothecary Diaries",
        "voiceActor": {
          "name": "Daichi Endou",
          "japaneseName": "遠藤大智",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n105675-XnR4PwkkKbRH.jpg"
        }
      },
      {
        "name": "Riishu",
        "japaneseName": "里樹妃",
        "role": "Supporting",
        "image": "/assets/characters/the-apothecary-diaries-char-4.jpg",
        "anime": "The Apothecary Diaries",
        "voiceActor": {
          "name": "Hina Kino",
          "japaneseName": "木野日菜",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/24822-ry2jbsM1CjQa.jpg"
        }
      },
      {
        "name": "Aaduo",
        "japaneseName": "阿多",
        "role": "Supporting",
        "image": "/assets/characters/the-apothecary-diaries-char-5.jpg",
        "anime": "The Apothecary Diaries",
        "voiceActor": {
          "name": "Yuuko Kaida",
          "japaneseName": "甲斐田裕子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95428-1e4kSvr5fkmQ.png"
        }
      },
      {
        "name": "Rifa",
        "japaneseName": "梨花妃",
        "role": "Supporting",
        "image": "/assets/characters/the-apothecary-diaries-char-6.jpg",
        "anime": "The Apothecary Diaries",
        "voiceActor": {
          "name": "Yui Ishikawa",
          "japaneseName": "石川由依",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100142-k6RP0HzXffUG.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=oyHqh8ue4zw",
    "featured": false
  },
  {
    "id": "oshi-no-ko",
    "rank": 41,
    "title": "Oshi no Ko",
    "japaneseTitle": "【推しの子】",
    "romajiTitle": "[Oshi no Ko]",
    "alternativeTitles": [
      "[Oshi no Ko]",
      "OSHI NO KO",
      "Favorite Girl",
      "My Idol's Child",
      "[Mein*Star]",
      "เกิดใหม่เป็นลูกโอชิ"
    ],
    "description": "When a pregnant young starlet appears in Gorou Amemiya’s countryside medical clinic, the doctor takes it upon himself to safely (and secretly) deliver Ai Hoshino’s child so she can make a scandal-free return to the stage. But no good deed goes unpunished, and on the eve of her delivery, he finds himself slain at the hands of Ai’s deluded stalker — and subsequently reborn as Ai’s child, Aquamarine Hoshino! The glitz and glamor of showbiz hide the dark underbelly of the entertainment industry, threatening to dull the shine of his favorite star. Can he help his new mother rise to the top of the charts? And what will he do when unthinkable disaster strikes?    Note: Episode 1【推しの子】Mother and Children was pre-screened in advance in Japanese theaters on March 17, 2023. The regular TV broadcast began on April 12, 2023. The first episode has an extended runtime of ~82 minutes.",
    "genres": [
      "Drama",
      "Mystery",
      "Psychological",
      "Supernatural"
    ],
    "rating": 8.4,
    "year": 2023,
    "status": "Completed",
    "episodes": 11,
    "duration": "24 min",
    "season": "Spring 2023",
    "seasonPeriod": "Spring",
    "studio": "Doga Kobo",
    "source": "Manga",
    "poster": "/assets/anime/oshi-no-ko.jpg",
    "banner": "/assets/anime/banners/oshi-no-ko.jpg",
    "characters": [
      {
        "name": "Ruby Hoshino",
        "japaneseName": "星野ルビー",
        "role": "Main",
        "image": "/assets/characters/oshi-no-ko-char-1.jpg",
        "anime": "Oshi no Ko",
        "voiceActor": {
          "name": "Yurie Igoma",
          "japaneseName": "伊駒ゆりえ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n293910-UBwHydgOrXO6.png"
        }
      },
      {
        "name": "Aquamarine Hoshino",
        "japaneseName": "星野アクアマリン",
        "role": "Main",
        "image": "/assets/characters/oshi-no-ko-char-2.jpg",
        "anime": "Oshi no Ko",
        "voiceActor": {
          "name": "Takeo Ootsuka",
          "japaneseName": "大塚剛央",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n128426-uB8KFqVLbogF.png"
        }
      },
      {
        "name": "Kana Arima",
        "japaneseName": "有馬かな",
        "role": "Main",
        "image": "/assets/characters/oshi-no-ko-char-3.jpg",
        "anime": "Oshi no Ko",
        "voiceActor": {
          "name": "Megumi Han",
          "japaneseName": "潘めぐみ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107961-aMetTdEFTi2W.jpg"
        }
      },
      {
        "name": "Ai Hoshino",
        "japaneseName": "星野アイ",
        "role": "Supporting",
        "image": "/assets/characters/oshi-no-ko-char-4.jpg",
        "anime": "Oshi no Ko",
        "voiceActor": {
          "name": "Rie Takahashi",
          "japaneseName": "高橋李依",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119331-5dPuMCxu4RWf.jpg"
        }
      },
      {
        "name": "Akane Kurokawa",
        "japaneseName": "黒川あかね",
        "role": "Supporting",
        "image": "/assets/characters/oshi-no-ko-char-5.jpg",
        "anime": "Oshi no Ko",
        "voiceActor": {
          "name": "Manaka Iwami",
          "japaneseName": "石見舞菜香",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n121821-tQSkHZEuB3XH.png"
        }
      },
      {
        "name": "MEM-cho",
        "japaneseName": "MEMちょ",
        "role": "Supporting",
        "image": "/assets/characters/oshi-no-ko-char-6.jpg",
        "anime": "Oshi no Ko",
        "voiceActor": {
          "name": "Rumi Ookubo",
          "japaneseName": "大久保瑠美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n107041-ZqPloXZhcuQw.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=gKWEUJ4r5do",
    "featured": true
  },
  {
    "id": "classroom-of-the-elite",
    "rank": 42,
    "title": "Classroom of the Elite",
    "japaneseTitle": "ようこそ実力至上主義の教室へ",
    "romajiTitle": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
    "alternativeTitles": [
      "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
      "Youjitsu",
      "You-Zitsu",
      "ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน",
      "Cote"
    ],
    "description": "Koudo Ikusei Senior High School is a leading school with state-of-the-art facilities. The students there have the freedom to wear any hairstyle and bring any personal effects they desire. Koudo Ikusei is like a utopia, but the truth is that only the most superior students receive favorable treatment. Kiyotaka Ayanokouji is a student of D-class, which is where the school dumps its \"inferior\" students in order to ridicule them. For a certain reason, Kiyotaka was careless on his entrance examination, and was put in D-class. After meeting Suzune Horikita and Kikyou Kushida, two other students in his class, Kiyotaka's situation begins to change.",
    "genres": [
      "Drama",
      "Psychological"
    ],
    "rating": 7.6,
    "year": 2017,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Summer 2017",
    "seasonPeriod": "Summer",
    "studio": "Lerche",
    "source": "Light Novel",
    "poster": "/assets/anime/classroom-of-the-elite.jpg",
    "banner": "/assets/anime/banners/classroom-of-the-elite.jpg",
    "characters": [
      {
        "name": "Kiyotaka Ayanokouji",
        "japaneseName": "綾小路清隆",
        "role": "Main",
        "image": "/assets/characters/classroom-of-the-elite-char-1.jpg",
        "anime": "Classroom of the Elite",
        "voiceActor": {
          "name": "Shouya Chiba",
          "japaneseName": "千葉翔也",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119672-2CrLoxBEYTMk.jpg"
        }
      },
      {
        "name": "Suzune Horikita",
        "japaneseName": "堀北鈴音",
        "role": "Main",
        "image": "/assets/characters/classroom-of-the-elite-char-2.jpg",
        "anime": "Classroom of the Elite",
        "voiceActor": {
          "name": "Akari Kitou",
          "japaneseName": "鬼頭明里",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119722-Ls7ORfBejJEP.jpg"
        }
      },
      {
        "name": "Kikyou Kushida",
        "japaneseName": "櫛田桔梗",
        "role": "Main",
        "image": "/assets/characters/classroom-of-the-elite-char-3.jpg",
        "anime": "Classroom of the Elite",
        "voiceActor": {
          "name": "Yurika Kubo",
          "japaneseName": "久保ユリカ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112209-6rgze0vZlnG6.png"
        }
      },
      {
        "name": "Airi Sakura",
        "japaneseName": "佐倉愛里",
        "role": "Main",
        "image": "/assets/characters/classroom-of-the-elite-char-4.jpg",
        "anime": "Classroom of the Elite",
        "voiceActor": {
          "name": "Mao Ichimichi",
          "japaneseName": "市道真央",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118510-iMUv5D7W99C1.png"
        }
      },
      {
        "name": "Honami Ichinose",
        "japaneseName": "一之瀬帆波",
        "role": "Supporting",
        "image": "/assets/characters/classroom-of-the-elite-char-5.jpg",
        "anime": "Classroom of the Elite",
        "voiceActor": {
          "name": "Nao Touyama",
          "japaneseName": "東山奈央",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106184-rFA0sHFJrbk4.png"
        }
      },
      {
        "name": "Sae Chabashira",
        "japaneseName": "茶柱佐枝",
        "role": "Supporting",
        "image": "/assets/characters/classroom-of-the-elite-char-6.jpg",
        "anime": "Classroom of the Elite",
        "voiceActor": {
          "name": "Rina Satou",
          "japaneseName": "佐藤利奈",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95241-4XvR64oguxwS.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=iYsx6w5PNno",
    "featured": false
  },
  {
    "id": "kaguya-sama-love-is-war",
    "rank": 43,
    "title": "Kaguya-sama: Love Is War",
    "japaneseTitle": "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
    "romajiTitle": "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
    "alternativeTitles": [
      "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
      "Kaguya-sama: Love is War",
      "Kaguya Wants to be Confessed To: The Geniuses' War of Love and Brains",
      "קאגויה סאמה",
      "辉夜大小姐想让我告白～天才们的恋爱头脑战～",
      "辉夜姬想让人告白"
    ],
    "description": "Known for being both brilliant and powerful, Miyuki Shirogane and Kaguya Shinomiya lead the illustrious Shuchiin Academy as near equals. And everyone thinks they’d make a great couple. Pride and arrogance are in ample supply, so the only logical move is to trick the other into instigating a date! Who will come out on top in this psychological war where the first move is the only one that matters?",
    "genres": [
      "Comedy",
      "Psychological",
      "Romance",
      "Slice of Life"
    ],
    "rating": 8.3,
    "year": 2019,
    "status": "Completed",
    "episodes": 12,
    "duration": "24 min",
    "season": "Winter 2019",
    "seasonPeriod": "Winter",
    "studio": "A-1 Pictures",
    "source": "Manga",
    "poster": "/assets/anime/kaguya-sama-love-is-war.jpg",
    "banner": "/assets/anime/banners/kaguya-sama-love-is-war.jpg",
    "characters": [
      {
        "name": "Kaguya Shinomiya",
        "japaneseName": "四宮かぐや",
        "role": "Main",
        "image": "/assets/characters/kaguya-sama-love-is-war-char-1.jpg",
        "anime": "Kaguya-sama: Love Is War",
        "voiceActor": {
          "name": "Aoi Koga",
          "japaneseName": "古賀葵",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n123268-zIZLjZ5Xfbk4.png"
        }
      },
      {
        "name": "Miyuki Shirogane",
        "japaneseName": "白銀御行",
        "role": "Main",
        "image": "/assets/characters/kaguya-sama-love-is-war-char-2.jpg",
        "anime": "Kaguya-sama: Love Is War",
        "voiceActor": {
          "name": "Makoto Furukawa",
          "japaneseName": "古川慎",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112635-ORlGvRvgf5Nq.png"
        }
      },
      {
        "name": "Yuu Ishigami",
        "japaneseName": "石上優",
        "role": "Main",
        "image": "/assets/characters/kaguya-sama-love-is-war-char-3.jpg",
        "anime": "Kaguya-sama: Love Is War",
        "voiceActor": {
          "name": "Ryouta Suzuki",
          "japaneseName": "鈴木崚汰",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n123450-Hmi5iu3KDHwc.png"
        }
      },
      {
        "name": "Chika Fujiwara",
        "japaneseName": "藤原千花",
        "role": "Main",
        "image": "/assets/characters/kaguya-sama-love-is-war-char-4.jpg",
        "anime": "Kaguya-sama: Love Is War",
        "voiceActor": {
          "name": "Konomi Kohara",
          "japaneseName": "小原好美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n121961-TaMewK1taQm6.png"
        }
      },
      {
        "name": "Narrator",
        "japaneseName": "ナレーター",
        "role": "Supporting",
        "image": "/assets/characters/kaguya-sama-love-is-war-char-5.jpg",
        "anime": "Kaguya-sama: Love Is War",
        "voiceActor": {
          "name": "Yutaka Aoyama",
          "japaneseName": "青山穣",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96538-mM7J8gp87gut.jpg"
        }
      },
      {
        "name": "Ai Hayasaka",
        "japaneseName": "早坂愛",
        "role": "Supporting",
        "image": "/assets/characters/kaguya-sama-love-is-war-char-6.jpg",
        "anime": "Kaguya-sama: Love Is War",
        "voiceActor": {
          "name": "Yumiri Hanamori",
          "japaneseName": "花守ゆみり",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116543-ugu1HZWiQkqi.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=IwpJJiQkZzI",
    "featured": false
  },
  {
    "id": "your-lie-in-april",
    "rank": 44,
    "title": "Your Lie in April",
    "japaneseTitle": "四月は君の嘘",
    "romajiTitle": "Shigatsu wa Kimi no Uso",
    "alternativeTitles": [
      "Shigatsu wa Kimi no Uso",
      "Your lie in April",
      "KimiUso",
      "השקר שלך באפריל",
      "Bugie d'aprile",
      "四月是你的谎言"
    ],
    "description": "Piano prodigy Arima Kousei dominated the competition and all child musicians knew his name. But after his mother, who was also his instructor, passed away, he had a mental breakdown while performing at a recital. This resulted in him no longer being able to hear the sound of his piano playing. Two years later, Kousei hasn’t touched the piano and views the world without any flair or color. He was content at living out his life with his good friends Tsubaki and Watari until, one day, a girl changed everything. Miyazono Kaori is a pretty, free spirited violinist whose playing style reflects her personality. Kaori helps Kousei return to the music world and show that it should be free and mold breaking unlike the structured and rigid style Kousei was used to.",
    "genres": [
      "Drama",
      "Music",
      "Romance",
      "Slice of Life"
    ],
    "rating": 8.4,
    "year": 2014,
    "status": "Completed",
    "episodes": 22,
    "duration": "23 min",
    "season": "Fall 2014",
    "seasonPeriod": "Fall",
    "studio": "A-1 Pictures",
    "source": "Manga",
    "poster": "/assets/anime/your-lie-in-april.jpg",
    "banner": "/assets/anime/banners/your-lie-in-april.jpg",
    "characters": [
      {
        "name": "Ryouta Watari",
        "japaneseName": "渡里遼",
        "role": "Main",
        "image": "/assets/characters/your-lie-in-april-char-1.jpg",
        "anime": "Your Lie in April",
        "voiceActor": {
          "name": "Ryouta Oosaka",
          "japaneseName": "逢坂良太",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n110743-k2SgQwU0JD33.png"
        }
      },
      {
        "name": "Kousei Arima",
        "japaneseName": "有馬公生",
        "role": "Main",
        "image": "/assets/characters/your-lie-in-april-char-2.jpg",
        "anime": "Your Lie in April",
        "voiceActor": {
          "name": "Natsuki Hanae",
          "japaneseName": "花江夏樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n111635-L385UcjTKCBq.png"
        }
      },
      {
        "name": "Tsubaki Sawabe",
        "japaneseName": "澤部椿",
        "role": "Main",
        "image": "/assets/characters/your-lie-in-april-char-3.jpg",
        "anime": "Your Lie in April",
        "voiceActor": {
          "name": "Ayane Sakura",
          "japaneseName": "佐倉綾音",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106622-yemj6ymLz4lY.png"
        }
      },
      {
        "name": "Kaori Miyazono",
        "japaneseName": "宮園かをり",
        "role": "Main",
        "image": "/assets/characters/your-lie-in-april-char-4.jpg",
        "anime": "Your Lie in April",
        "voiceActor": {
          "name": "Risa Taneda",
          "japaneseName": "種田梨沙",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n111135-YDoccfWAq2ky.jpg"
        }
      },
      {
        "name": "Saitou",
        "japaneseName": "斉藤",
        "role": "Supporting",
        "image": "/assets/characters/your-lie-in-april-char-5.jpg",
        "anime": "Your Lie in April",
        "voiceActor": {
          "name": "Kazuyuki Okitsu",
          "japaneseName": "興津和幸",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102288-xqcBKreDyZYN.png"
        }
      },
      {
        "name": "Nao Kashiwagi",
        "japaneseName": "柏木奈緒",
        "role": "Supporting",
        "image": "/assets/characters/your-lie-in-april-char-6.jpg",
        "anime": "Your Lie in April",
        "voiceActor": {
          "name": "Shizuka Ishigami",
          "japaneseName": "石上静香",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118738-60gKflxjl80c.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=3aL0gDZtFbE",
    "featured": false
  },
  {
    "id": "your-name",
    "rank": 45,
    "title": "Your Name.",
    "japaneseTitle": "サントリー 南アルプスの天然水",
    "romajiTitle": "Suntory Minami Alps no Tennen Mizu",
    "alternativeTitles": [
      "Suntory Minami Alps no Tennen Mizu",
      "Kimi no Na wa.",
      "Your Name.",
      "SUNTORY × Kimi no Na wa."
    ],
    "description": "Collaboration commercials with Suntory and Kimi no Na wa.. The \"Mitsuha no Omoi\" (Mitsuha's Thoughts) commercial shows the character Mitsuha Miyamizu drinking SUNTORY Minami Alps Tennensui Yogurina, which is yogurt-flavored mineral water. The \"Taki no Omoi\" (Taki's Thoughts) commercial shows the character Taki Tachibana drinking SUNTORY Minami Alps Ten'nensui, which is mineral water.  The \"Kasanaru Omoi\" (Overlap Thoughts) commercial shows both Taki and Mitsuha combining their thoughts through mixed dialogue with some alternative footage and a new song.",
    "genres": [
      "Drama"
    ],
    "rating": 5.7,
    "year": 2016,
    "status": "Completed",
    "episodes": 3,
    "duration": "1 min",
    "season": "Summer 2016",
    "seasonPeriod": "Summer",
    "studio": "CoMix Wave",
    "source": "Original",
    "poster": "/assets/anime/your-name.jpg",
    "banner": "/assets/anime/banners/your-name.jpg",
    "characters": [
      {
        "name": "Mitsuha Miyamizu",
        "japaneseName": "宮水三葉",
        "role": "Main",
        "image": "/assets/characters/your-name-char-1.jpg",
        "anime": "Your Name.",
        "voiceActor": {
          "name": "Mone Kamishiraishi",
          "japaneseName": "上白石萌音",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n121515-RA4atoxdBxD1.jpg"
        }
      },
      {
        "name": "Taki Tachibana",
        "japaneseName": "立花瀧",
        "role": "Main",
        "image": "/assets/characters/your-name-char-2.jpg",
        "anime": "Your Name.",
        "voiceActor": {
          "name": "Ryuunosuke Kamiki",
          "japaneseName": "神木隆之介",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95947-tFFSGE4ErP8B.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=xU47nhruN-Q",
    "featured": false
  },
  {
    "id": "a-silent-voice",
    "rank": 46,
    "title": "A Silent Voice",
    "japaneseTitle": "聲の形",
    "romajiTitle": "Koe no Katachi",
    "alternativeTitles": [
      "Koe no Katachi",
      "The Shape of Voice",
      "A Voz do Silêncio",
      "A Forma da Voz",
      "La Forma della Voce"
    ],
    "description": "After transferring into a new school, a deaf girl, Shouko Nishimiya, is bullied by the popular Shouya Ishida. As Shouya continues to bully Shouko, the class turns its back on him. Shouko transfers and Shouya grows up as an outcast. Alone and depressed, the regretful Shouya finds Shouko to make amends.",
    "genres": [
      "Drama",
      "Romance",
      "Slice of Life"
    ],
    "rating": 8.8,
    "year": 2016,
    "status": "Completed",
    "episodes": 1,
    "duration": "130 min",
    "season": "Summer 2016",
    "seasonPeriod": "Summer",
    "studio": "Kyoto Animation",
    "source": "Manga",
    "poster": "/assets/anime/a-silent-voice.jpg",
    "banner": "/assets/anime/banners/a-silent-voice.jpg",
    "characters": [
      {
        "name": "Shouko Nishimiya",
        "japaneseName": "西宮硝子",
        "role": "Main",
        "image": "/assets/characters/a-silent-voice-char-1.jpg",
        "anime": "A Silent Voice",
        "voiceActor": {
          "name": "Saori Hayami",
          "japaneseName": "早見沙織",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95869-qCQ0EaWpq1QT.png"
        }
      },
      {
        "name": "Shouya Ishida",
        "japaneseName": "石田将也",
        "role": "Main",
        "image": "/assets/characters/a-silent-voice-char-2.jpg",
        "anime": "A Silent Voice",
        "voiceActor": {
          "name": "Miyu Irino",
          "japaneseName": "入野自由",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95088-BHyqnkadBEqi.png"
        }
      },
      {
        "name": "Yuzuru Nishimiya",
        "japaneseName": "西宮結絃",
        "role": "Supporting",
        "image": "/assets/characters/a-silent-voice-char-3.jpg",
        "anime": "A Silent Voice",
        "voiceActor": {
          "name": "Aoi Yuuki",
          "japaneseName": "悠木碧",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n101686-PTd0lQZMsmcv.png"
        }
      },
      {
        "name": "Naoka Ueno",
        "japaneseName": "植野直花",
        "role": "Supporting",
        "image": "/assets/characters/a-silent-voice-char-4.jpg",
        "anime": "A Silent Voice",
        "voiceActor": {
          "name": "Yuuki Kaneko",
          "japaneseName": "金子有希",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n114854-H8ZFBXBhvjym.png"
        }
      },
      {
        "name": "Miyako Ishida",
        "japaneseName": "石田美也子",
        "role": "Supporting",
        "image": "/assets/characters/a-silent-voice-char-5.jpg",
        "anime": "A Silent Voice",
        "voiceActor": {
          "name": "Satsuki Yukino",
          "japaneseName": "ゆきのさつき",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95003-Du7wb5JJzb8P.png"
        }
      },
      {
        "name": "Maria Ishida",
        "japaneseName": "石田マリア",
        "role": "Supporting",
        "image": "/assets/characters/a-silent-voice-char-6.jpg",
        "anime": "A Silent Voice",
        "voiceActor": {
          "name": "Erena Kamata",
          "japaneseName": "鎌田英怜奈",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/124032-qsEy6ekPVuS4.jpg"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=Sy4bPCuzfiQ",
    "featured": false
  },
  {
    "id": "weathering-with-you",
    "rank": 47,
    "title": "Weathering With You",
    "japaneseTitle": "天気の子",
    "romajiTitle": "Tenki no Ko",
    "alternativeTitles": [
      "Tenki no Ko",
      "El Tiempo Contigo",
      "Weathering With You - Das Mädchen, das die Sonne berührte",
      "Les enfants du temps",
      "O Tempo Com Você"
    ],
    "description": "High school student Hodaka leaves his home on an isolated island and moves to Tokyo, but he immediately becomes broke. He lives his days in isolation, but finally finds a job as a writer for a shady occult magazine. After he starts his job, the weather has been rainy day after day. In a corner of the crowded and busy city, Hodaka meets a young woman named Hina. Due to certain circumstances, Hina and her younger brother live together, but have a cheerful and sturdy life. Hina also has a certain power: the power to stop the rain and clear the sky.",
    "genres": [
      "Drama",
      "Romance",
      "Slice of Life",
      "Supernatural"
    ],
    "rating": 8.1,
    "year": 2019,
    "status": "Completed",
    "episodes": 1,
    "duration": "115 min",
    "season": "Summer 2019",
    "seasonPeriod": "Summer",
    "studio": "CoMix Wave",
    "source": "Original",
    "poster": "/assets/anime/weathering-with-you.jpg",
    "banner": "/assets/anime/banners/weathering-with-you.jpg",
    "characters": [
      {
        "name": "Hodaka Morishima",
        "japaneseName": "森嶋帆高",
        "role": "Main",
        "image": "/assets/characters/weathering-with-you-char-1.jpg",
        "anime": "Weathering With You",
        "voiceActor": {
          "name": "Kotarou Daigo",
          "japaneseName": "醍醐虎汰朗",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n139713-GPi7EdVaQCkL.png"
        }
      },
      {
        "name": "Hina Amano",
        "japaneseName": "天野陽菜",
        "role": "Main",
        "image": "/assets/characters/weathering-with-you-char-2.jpg",
        "anime": "Weathering With You",
        "voiceActor": {
          "name": "Nana Mori",
          "japaneseName": "森七菜",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n139712-3OBdRT3ezViU.png"
        }
      },
      {
        "name": "Nagi Amano",
        "japaneseName": "天野凪",
        "role": "Supporting",
        "image": "/assets/characters/weathering-with-you-char-3.jpg",
        "anime": "Weathering With You",
        "voiceActor": {
          "name": "Sakura Kiryuu",
          "japaneseName": "吉柳咲良",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n139715-YLytLkIZG4S0.png"
        }
      },
      {
        "name": "Fumi Tachibana",
        "japaneseName": "立花冨美",
        "role": "Supporting",
        "image": "/assets/characters/weathering-with-you-char-4.jpg",
        "anime": "Weathering With You",
        "voiceActor": {
          "name": "Chieko Baishou",
          "japaneseName": "倍賞千恵子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96056-FsYy39l7yMR0.png"
        }
      },
      {
        "name": "Natsumi Suga",
        "japaneseName": "須賀夏美",
        "role": "Supporting",
        "image": "/assets/characters/weathering-with-you-char-5.jpg",
        "anime": "Weathering With You",
        "voiceActor": {
          "name": "Tsubasa Honda",
          "japaneseName": "本田翼",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n139716-xf2FQvaHdcSc.jpg"
        }
      },
      {
        "name": "Takai",
        "japaneseName": "高井",
        "role": "Supporting",
        "image": "/assets/characters/weathering-with-you-char-6.jpg",
        "anime": "Weathering With You",
        "voiceActor": {
          "name": "Yuuki Kaji",
          "japaneseName": "梶裕貴",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95672-T33YV7yCDKnL.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=Q6iK6DjV_iE",
    "featured": false
  },
  {
    "id": "cyberpunk-edgerunners",
    "rank": 48,
    "title": "Cyberpunk: Edgerunners",
    "japaneseTitle": "サイバーパンク エッジランナーズ",
    "romajiTitle": "Cyberpunk: Edgerunners",
    "alternativeTitles": [
      "Cyberpunk: Mercenários",
      "電馭叛客：邊緣行者",
      "CYBERPUNK: อาชญากรแดนเถื่อน",
      "Киберпанк: Бегущие по краю"
    ],
    "description": "Cyberpunk: Edgerunners tells a standalone, 10-episode story about a street kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an edgerunner—a mercenary outlaw also known as a cyberpunk.  Note: The first episode received a pre-screening at Anime Expo on July 2, 2022. The first 3 dubbed episodes were streamed on Twitch as part of a co-stream promotion on September 12, a day before the show’s premiere.",
    "genres": [
      "Action",
      "Drama",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "year": 2022,
    "status": "Completed",
    "episodes": 10,
    "duration": "24 min",
    "season": "Summer 2022",
    "seasonPeriod": "Summer",
    "studio": "TRIGGER",
    "source": "Video Game",
    "poster": "/assets/anime/cyberpunk-edgerunners.jpg",
    "banner": "/assets/anime/banners/cyberpunk-edgerunners.jpg",
    "characters": [
      {
        "name": "Lucy",
        "japaneseName": "ルーシー",
        "role": "Main",
        "image": "/assets/characters/cyberpunk-edgerunners-char-1.jpg",
        "anime": "Cyberpunk: Edgerunners",
        "voiceActor": {
          "name": "Aoi Yuuki",
          "japaneseName": "悠木碧",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n101686-PTd0lQZMsmcv.png"
        }
      },
      {
        "name": "David Martinez",
        "japaneseName": "デイビッド・マルティネズ",
        "role": "Main",
        "image": "/assets/characters/cyberpunk-edgerunners-char-2.jpg",
        "anime": "Cyberpunk: Edgerunners",
        "voiceActor": {
          "name": "KENN",
          "japaneseName": "KENN",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95857-oHOhHwEDyAlL.png"
        }
      },
      {
        "name": "Maine",
        "japaneseName": "メイン",
        "role": "Supporting",
        "image": "/assets/characters/cyberpunk-edgerunners-char-3.jpg",
        "anime": "Cyberpunk: Edgerunners",
        "voiceActor": {
          "name": "Hiroki Touchi",
          "japaneseName": "東地宏樹",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95236-nlMo4dnjdT8p.png"
        }
      },
      {
        "name": "Dorio",
        "japaneseName": "ドリオ",
        "role": "Supporting",
        "image": "/assets/characters/cyberpunk-edgerunners-char-4.jpg",
        "anime": "Cyberpunk: Edgerunners",
        "voiceActor": {
          "name": "Michiko Kaiden",
          "japaneseName": "鷄冠井美智子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/22455.jpg"
        }
      },
      {
        "name": "Kiwi",
        "japaneseName": "キーウィ",
        "role": "Supporting",
        "image": "/assets/characters/cyberpunk-edgerunners-char-5.jpg",
        "anime": "Cyberpunk: Edgerunners",
        "voiceActor": {
          "name": "Takako Honda",
          "japaneseName": "本田貴子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/41.jpg"
        }
      },
      {
        "name": "Pilar",
        "japaneseName": "ピラル",
        "role": "Supporting",
        "image": "/assets/characters/cyberpunk-edgerunners-char-6.jpg",
        "anime": "Cyberpunk: Edgerunners",
        "voiceActor": {
          "name": "Wataru Takagi",
          "japaneseName": "高木渉",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95133-cqDtu078voZ1.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=ax5YUmkWf_Y",
    "featured": true
  },
  {
    "id": "berserk",
    "rank": 49,
    "title": "Berserk",
    "japaneseTitle": "剣風伝奇ベルセルク",
    "romajiTitle": "Kenpuu Denki Berserk",
    "alternativeTitles": [
      "Kenpuu Denki Berserk",
      "Kenfu Denki Berserk",
      "Sword-Wind Chronicle Berserk",
      "Berserk (1997)",
      "Берсерк"
    ],
    "description": "Set during a time that very much resembles Europe during the Middle Ages, Berserk is a story of revenge set in the castle town of Midland. Recently, the town has seen the rise of a wicked king, who uses demonic minions to control and victimise his subjects. However, when a lone soldier enters the town calling himself the Black Swordsman and armed to the teeth, many sense that the king's days of unchecked oppression are over. Soon, the Black Swordsman is plying his trade by hunting down the king's evil servants, giving no quarter, and preparing to exact his vengeance on the king.",
    "genres": [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Horror",
      "Supernatural"
    ],
    "rating": 8.4,
    "year": 1997,
    "status": "Completed",
    "episodes": 25,
    "duration": "25 min",
    "season": "Fall 1997",
    "seasonPeriod": "Fall",
    "studio": "OLM",
    "source": "Manga",
    "poster": "/assets/anime/berserk.jpg",
    "banner": "/assets/anime/banners/berserk.jpg",
    "characters": [
      {
        "name": "Guts",
        "japaneseName": "ガッツ",
        "role": "Main",
        "image": "/assets/characters/berserk-char-1.jpg",
        "anime": "Berserk",
        "voiceActor": {
          "name": "Nobutoshi Kanna",
          "japaneseName": "神奈延年",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95096-7XONtZWj5lIw.png"
        }
      },
      {
        "name": "Casca",
        "japaneseName": "キャスカ",
        "role": "Main",
        "image": "/assets/characters/berserk-char-2.jpg",
        "anime": "Berserk",
        "voiceActor": {
          "name": "Yuuko Miyamura",
          "japaneseName": "宮村優子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95458-u1OCiMNqiswq.png"
        }
      },
      {
        "name": "Griffith",
        "japaneseName": "グリフィス",
        "role": "Main",
        "image": "/assets/characters/berserk-char-3.jpg",
        "anime": "Berserk",
        "voiceActor": {
          "name": "Minami Takayama",
          "japaneseName": "高山みなみ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95024-qsZgGp8VHqMP.png"
        }
      },
      {
        "name": "Judeau",
        "japaneseName": "ジュドー",
        "role": "Supporting",
        "image": "/assets/characters/berserk-char-4.jpg",
        "anime": "Berserk",
        "voiceActor": {
          "name": "Akira Ishida",
          "japaneseName": "石田彰",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95017-GSRcmQ97a8ZT.png"
        }
      },
      {
        "name": "Pippin",
        "japaneseName": "ピピン",
        "role": "Supporting",
        "image": "/assets/characters/berserk-char-5.jpg",
        "anime": "Berserk",
        "voiceActor": {
          "name": "Masuo Amada",
          "japaneseName": "天田益男",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95397-OIImp0s08L8m.jpg"
        }
      },
      {
        "name": "Rickert",
        "japaneseName": "リッケルト",
        "role": "Supporting",
        "image": "/assets/characters/berserk-char-6.jpg",
        "anime": "Berserk",
        "voiceActor": {
          "name": "Akiko Yajima",
          "japaneseName": "矢島晶子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95148-JiNi79wg9ScS.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=odIwkGztmcc",
    "featured": false
  },
  {
    "id": "neon-genesis-evangelion",
    "rank": 50,
    "title": "Neon Genesis Evangelion",
    "japaneseTitle": "新世紀エヴァンゲリオン",
    "romajiTitle": "Shin Seiki Evangelion",
    "alternativeTitles": [
      "Shin Seiki Evangelion",
      "NGE",
      "Eva",
      "ניאון ג'נסיס אוונגליון",
      "อีวานเกเลียน มหาสงครามวันพิพากษา"
    ],
    "description": "In the year 2015, the Angels, huge, tremendously powerful, alien war machines, appear in Tokyo for the second time. The only hope for Mankind's survival lies in the Evangelion, a humanoid fighting machine developed by NERV, a special United Nations agency. Capable of withstanding anything the Angels can dish out, the Evangelion's one drawback lies in the limited number of people able to pilot them. Only a handful of teenagers, all born fourteen years ago, nine months after the Angels first appeared, are able to interface with the Evangelion. One such teenager is Shinji Ikari, whose father heads the NERV team that developed and maintains the Evangelion. Thrust into a maelstrom of battle and events that he does not understand, Shinji is forced to plumb the depths of his own inner resources for the courage and strength to not only fight, but to survive, or risk losing everything.    Note: Later releases include edited versions of Episodes 21-24 called the \"Director's Cut\" with some visual editing and adding extra scenes that previously appeared in the theatrical recap 'Death'.",
    "genres": [
      "Action",
      "Drama",
      "Mecha",
      "Mystery",
      "Psychological",
      "Sci-Fi"
    ],
    "rating": 8.3,
    "year": 1995,
    "status": "Completed",
    "episodes": 26,
    "duration": "24 min",
    "season": "Fall 1995",
    "seasonPeriod": "Fall",
    "studio": "Gainax",
    "source": "Original",
    "poster": "/assets/anime/neon-genesis-evangelion.jpg",
    "banner": "/assets/anime/banners/neon-genesis-evangelion.jpg",
    "characters": [
      {
        "name": "Rei Ayanami",
        "japaneseName": "綾波レイ",
        "role": "Main",
        "image": "/assets/characters/neon-genesis-evangelion-char-1.jpg",
        "anime": "Neon Genesis Evangelion",
        "voiceActor": {
          "name": "Megumi Hayashibara",
          "japaneseName": "林原めぐみ",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95014-tFYQYYhlVOF0.png"
        }
      },
      {
        "name": "Shinji Ikari",
        "japaneseName": "碇シンジ",
        "role": "Main",
        "image": "/assets/characters/neon-genesis-evangelion-char-2.jpg",
        "anime": "Neon Genesis Evangelion",
        "voiceActor": {
          "name": "Megumi Ogata",
          "japaneseName": "緒方恵美",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95287-3moX16xmYedv.png"
        }
      },
      {
        "name": "Asuka Langley Souryuu",
        "japaneseName": "惣流・アスカ・ラングレー",
        "role": "Main",
        "image": "/assets/characters/neon-genesis-evangelion-char-3.jpg",
        "anime": "Neon Genesis Evangelion",
        "voiceActor": {
          "name": "Yuuko Miyamura",
          "japaneseName": "宮村優子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95458-u1OCiMNqiswq.png"
        }
      },
      {
        "name": "Misato Katsuragi",
        "japaneseName": "葛城ミサト",
        "role": "Main",
        "image": "/assets/characters/neon-genesis-evangelion-char-4.jpg",
        "anime": "Neon Genesis Evangelion",
        "voiceActor": {
          "name": "Kotono Mitsuishi",
          "japaneseName": "三石琴乃",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95009-d01Dg8mMwcg6.png"
        }
      },
      {
        "name": "Kensuke Aida",
        "japaneseName": "相田ケンスケ",
        "role": "Supporting",
        "image": "/assets/characters/neon-genesis-evangelion-char-5.jpg",
        "anime": "Neon Genesis Evangelion",
        "voiceActor": {
          "name": "Tetsuya Iwanaga",
          "japaneseName": "岩永哲哉",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95694-jZqfhOJ54AqZ.jpg"
        }
      },
      {
        "name": "Ritsuko Akagi",
        "japaneseName": "赤木リツコ",
        "role": "Supporting",
        "image": "/assets/characters/neon-genesis-evangelion-char-6.jpg",
        "anime": "Neon Genesis Evangelion",
        "voiceActor": {
          "name": "Yuriko Yamaguchi",
          "japaneseName": "山口由里子",
          "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95130-GoO41ve3YWQw.png"
        }
      }
    ],
    "trailerUrl": "https://www.youtube.com/watch?v=kOH2_8MkgZY",
    "featured": false
  }
];
