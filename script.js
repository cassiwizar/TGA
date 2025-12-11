const DATA = {
      "Jogo do Ano": [
        "Clair Obscur: Expedition 33",
        "Death Stranding 2: On the Beach",
        "Donkey Kong Bananza",
        "Hades 2",
        "Hollow Knight: Silksong",
        "Kingdom Come: Deliverance 2"
      ],
      "Melhor Direção": [
        "Clair Obscur: Expedition 33",
        "Death Stranding 2: On the Beach",
        "Ghost of Yotei",
        "Hades 2",
        "Split Fiction"
      ],
      "Melhor Narrativa": [
        "Clair Obscur: Expedition 33",
        "Death Stranding 2: On the Beach",
        "Ghost of Yotei",
        "Kingdom Come: Deliverance 2",
        "Silent Hill f"
      ],
      "Melhor Direção de Arte": [
        "Clair Obscur: Expedition 33",
        "Death Stranding 2: On the Beach",
        "Ghost of Yotei",
        "Hades 2",
        "Hollow Knight: Silksong"
      ],
      "Melhor Trilha Sonora e Música": [
        "Hollow Knight: Silksong",
        "Hades 2",
        "Clair Obscur: Expedition 33",
        "Ghost of Yotei",
        "Death Stranding 2: On the Beach"
      ],
      "Melhor Design de Áudio": [
        "Battlefield 6",
        "Clair Obscur: Expedition 33",
        "Death Stranding 2: On the Beach",
        "Ghost of Yotei",
        "Silent Hill f"
      ],
      "Melhor Performance": [
        "Ben Starr - Clair Obscur: Expedition 33",
        "Charlie Cox- Clair Obscur: Expedition 33",
        "Erika Ishii - Ghost of Yotei",
        "Jennifer English- Clair Obscur: Expedition 33",
        "Konatsu Kato - Silent Hill f",
        "Troy Baker - Indiana Jones e o Grande Círculo"
      ],
      "Jogo de Impacto": ["Consume Me","Despelote","Lost Records: Bloom and Rage","South of Midnight","Wanderstop"],
      "Melhor Jogo Contínuo": ["Final Fantasy XIV","Fortnite","Helldivers 2","Marvel Rivals","No Man's Sky"],
      "Melhor Suporte à Comunidade": ["Baldur's Gate 3","Final Fantasy XIV","Fortnite","Helldivers 2","No Man's Sky"],
      "Melhor Jogo Independente": ["Absolum","Ball x Pit","Blue Prince","Clair Obscur: Expedition 33","Hades 2","Hollow Knight: Silksong"],
      "Melhor Jogo Independente de Estreia": ["Blue Prince","Clair Obscur: Expedition 33","Despelote","Dispatch","Megabonk"],
      "Melhor Jogo Mobile": ["Destiny: Rising","Persona 5: The Phantom X","Sonic Rumble","Umamusume: Pretty Derby","Wuthering Waves"],
      "Melhor Jogo VR/AR": ["Alien: Rogue Incursion","Arken Age","Ghost Town","Marvel's Deadpool VR","The Midnight Walk"],
      "Melhor Jogo de Ação": ["Battlefield 6","Doom: The Dark Ages","Hades 2","Ninja Gaiden 4","Shinobi: Art of Vengeance"],
      "Melhor Jogo de Ação e Aventura": ["Death Stranding 2: On the Beach","Ghost of Yotei","Indiana Jones e O Grande Círculo","Hollow Knight: Silksong","Split Fiction"],
      "Melhor RPG": ["Avowed","Clair Obscur: Expedition 33","Kingdom Come: Deliverance 2","The Outer Worlds 2","Monster Hunter Wilds"],
      "Melhor Jogo de Luta": ["2XKO","Capcom Fighting Collection 2","Fatal Fury: City of the Wolves","Mortal Kombat: Legacy Kollection","Virtua Fighter 5 R.E.V.O. World Stage"],
      "Melhor Jogo Para a Família": ["Donkey Kong Bananza","LEGO Party!","LEGO Voyagers","Mario Kart World","Sonic Racing: CrossWorlds","Split Fiction"],
      "Melhor Jogo de Simulação/Estratégia": ["The Alters","Final Fantasy Tactics - The Ivalice Chronicles","Jurassic World Evolution 3","Civilization VII","Tempest Rising","Two Point Museum"],
      "Melhor Jogo de Esportes/Corrida": ["EA Sports FC 26","F1 25","Mario Kart World","Rematch","Sonic Racing: CrossWorlds"],
      "Melhor Jogo Multiplayer": ["Arc Raiders","Battlefield 6","Elden Ring: Nightreign","Peak","Split Fiction"],
      "Melhor Adaptação": ["Um Filme Minecraft","Devil May Cry","Splinter Cell: Death Watch","Until Dawn","The Last of Us"],
      "Inovação em Acessibilidade": ["Assassin's Creed Shadows","Atomfall","Doom: The Dark Ages","EA Sports FC 26","South of Midnight"],
      "Jogo Mais Aguardado": ["007 First Light","GTA 6","Marvel's Wolverine","Resident Evil Requiem","The Witcher 4"],
      "Melhor Jogo de Esports": ["Counter-Strike 2","Dota 2","League of Legends","Mobile Legends: Bang Bang","Valorant"],
      "Melhor Jogador de Esports": ["Brawk","Chovy","F0rsakeN","Kakeru","Menard","ZywOo"],
      "Melhor Time de Esports": ["Gen.G - LoL","NRG - Valorant","Team Falcons - Dota 2","Team Liquid - MLBB","Team Vitality - CS 2"],
      "Criador de Conteúdo do Ano": ["Caedrel","Kai Cenat","MoistCr1TiKaL","Sakura Miko","The Burnt Peanut"]
    };

    const CATEGORIES = Object.keys(DATA);

    const PLAYERS = ["player1","player2","player3"];

    // placeholder SVG data URL
    const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#0b1220"/><text x="50%" y="50%" fill="#9aa6b2" font-size="18" dominant-baseline="middle" text-anchor="middle">Imagem</text></svg>`);

    // Imagens embutidas por opção (chave: category_slug__index)
    // Substitua as URLs vazias abaixo pelas imagens desejadas
    const IMAGES = {
      "Jogo_do_Ano__0": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Jogo_do_Ano__1": "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg", // Death Stranding 2: On the Beach
      "Jogo_do_Ano__2": "https://i.ytimg.com/vi/Mjq-2Fwb730/maxresdefault.jpg", // Donkey Kong Bananza
      "Jogo_do_Ano__3": "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg", // Hades 2
      "Jogo_do_Ano__4": "https://cdn.wikimg.net/en/hkwiki/images/1/13/Silksong_cover.jpg", // Hollow Knight: Silksong
      "Jogo_do_Ano__5": "https://upload.wikimedia.org/wikipedia/pt/3/32/Kingdom_Come_Deliverance_II.jpg", // Kingdom Come: Deliverance 2
      "Melhor_Direção__0": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_Direo__1": "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg", // Death Stranding 2: On the Beach
      "Melhor_Direo__2": "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/5607558e5aeca27f6dd1432d92bc66413d01f11f5533c977.jpg", // Ghost of Yotei
      "Melhor_Direo__3": "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg", // Hades 2
      "Melhor_Direo__4": "https://www.adrenaline.com.br/wp-content/uploads/2024/12/split-fiction-cover.jpg", // Split Fiction
      "Melhor_Narrativa__0": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_Narrativa__1": "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg", // Death Stranding 2: On the Beach
      "Melhor_Narrativa__2": "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/5607558e5aeca27f6dd1432d92bc66413d01f11f5533c977.jpg", // Ghost of Yotei
      "Melhor_Narrativa__3": "https://upload.wikimedia.org/wikipedia/pt/3/32/Kingdom_Come_Deliverance_II.jpg", // Kingdom Come: Deliverance 2
      "Melhor_Narrativa__4": "https://assets.nuuvem.com/image/upload/t_boxshot_big/v1/products/67f9674ff0174f89298f3cf4/boxshots/yalk2lbqm7sesvmfbs25.jpg", // Silent Hill f
      "Melhor_Direo_de_Arte__0": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_Direo_de_Arte__1": "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg", // Death Stranding 2: On the Beach
      "Melhor_Direo_de_Arte__2": "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/5607558e5aeca27f6dd1432d92bc66413d01f11f5533c977.jpg", // Ghost of Yotei
      "Melhor_Direo_de_Arte__3": "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg", // Hades 2
      "Melhor_Direo_de_Arte__4": "https://cdn.wikimg.net/en/hkwiki/images/1/13/Silksong_cover.jpg", // Hollow Knight: Silksong
      "Melhor_Trilha_Sonora_e_Msica__0": "https://cdn.wikimg.net/en/hkwiki/images/1/13/Silksong_cover.jpg", // Hollow Knight: Silksong
      "Melhor_Trilha_Sonora_e_Msica__1": "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg", // Hades 2
      "Melhor_Trilha_Sonora_e_Msica__2": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_Trilha_Sonora_e_Msica__3": "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/5607558e5aeca27f6dd1432d92bc66413d01f11f5533c977.jpg", // Ghost of Yotei
      "Melhor_Trilha_Sonora_e_Msica__4": "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg", // Death Stranding 2: On the Beach
      "Melhor_Design_de_udio__0": "https://image.api.playstation.com/vulcan/ap/rnd/202507/2514/054ff23fde43c010f63ed99eb1fca6957c26d2b136a9294d.jpg", // Battlefield 6
      "Melhor_Design_de_udio__1": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_Design_de_udio__2": "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg", // Death Stranding 2: On the Beach
      "Melhor_Design_de_udio__3": "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/5607558e5aeca27f6dd1432d92bc66413d01f11f5533c977.jpg", // Ghost of Yotei
      "Melhor_Design_de_udio__4": "https://assets.nuuvem.com/image/upload/t_boxshot_big/v1/products/67f9674ff0174f89298f3cf4/boxshots/yalk2lbqm7sesvmfbs25.jpg", // Silent Hill f
      "Melhor_Performance__0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZk7-Qy5RlvWNsnTllaI-MkS46e3gss3gRvg&s", // Ben Starr - Clair Obscur: Expedition 33
      "Melhor_Performance__1": "https://levelupnews.com.br/wp-content/uploads/2025/07/b91eef00-1189-4836-8309-265b827d1907.jpg", // Charlie Cox- Clair Obscur: Expedition 33
      "Melhor_Performance__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-j_FEkdTd6h5Ns7AdkRS_cfxXQ1d5oXvA0w&s", // Erika Ishii - Ghost of Yotei
      "Melhor_Performance__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoqCedtC_yTtfufJVO5e1cPW9MfklaoKphw&s", // Jennifer English- Clair Obscur: Expedition 33
      "Melhor_Performance__4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9qodtOSPVTnmd5cl06CRILxi2qgjDDnPFQ&s", // Konatsu Kato - Silent Hill f
      "Melhor_Performance__5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdRrbkYOE7b3rjW2_7puCjTTzzqSiheeBaeA&s", // Troy Baker - Indiana Jones e o Grande Círculo
      "Jogo_de_Impacto__0": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2359120/236fe657c17c0949790139a7589d149f5fd1c409/capsule_616x353.jpg?t=1758745344", // Consume Me
      "Jogo_de_Impacto__1": "https://image.api.playstation.com/vulcan/ap/rnd/202305/0915/3afcbc1cd8137fd823607587692146ceb0adc5a2abdbc80b.jpg", // Despelote
      "Jogo_de_Impacto__2": "https://upload.wikimedia.org/wikipedia/pt/a/ac/Lost_Records_Bloom_%26_Rage_capa.jpg", // Lost Records: Bloom and Rage
      "Jogo_de_Impacto__3": "https://upload.wikimedia.org/wikipedia/pt/2/21/South_of_Midnight_capa.jpeg", // South of Midnight
      "Jogo_de_Impacto__4": "https://cdn1.epicgames.com/spt-assets/edf13cb44ce348ee9345189f6831ef66/wanderstop-1aajh.jpg", // Wanderstop
      "Melhor_Jogo_Contnuo__0": "https://image.api.playstation.com/vulcan/ap/rnd/202406/1417/9ce7d411df2dd0d43f745719c80373e9839ccadc9fedecb6.jpg", // Final Fantasy XIV
      "Melhor_Jogo_Contnuo__1": "https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg", // Fortnite
      "Melhor_Jogo_Contnuo__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM05772trypM9GfXV4jwuOdvhOnc2c8zb_Dg&s", // Helldivers 2
      "Melhor_Jogo_Contnuo__3": "https://upload.wikimedia.org/wikipedia/pt/d/d1/Mrivals.png", // Marvel Rivals
      "Melhor_Jogo_Contnuo__4": "https://store-images.s-microsoft.com/image/apps.8628.68818099466568894.391e0700-449d-4430-a634-7339176aa70e.7a6198eb-67f2-4e83-99de-8ac8f185f01b", // No Man's Sky
      "Melhor_Suporte__Comunidade__0": "https://store-images.s-microsoft.com/image/apps.11593.13550459053619040.9c555c73-a698-4992-b0f3-c5084cf18b5e.82a9ea41-c628-4d02-8a0f-d0304eba31c7", // Baldur's Gate 3
      "Melhor_Suporte__Comunidade__1": "https://image.api.playstation.com/vulcan/ap/rnd/202406/1417/9ce7d411df2dd0d43f745719c80373e9839ccadc9fedecb6.jpg", // Final Fantasy XIV
      "Melhor_Suporte__Comunidade__2": "https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg", // Fortnite
      "Melhor_Suporte__Comunidade__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM05772trypM9GfXV4jwuOdvhOnc2c8zb_Dg&s", // Helldivers 2
      "Melhor_Suporte__Comunidade__4": "https://store-images.s-microsoft.com/image/apps.8628.68818099466568894.391e0700-449d-4430-a634-7339176aa70e.7a6198eb-67f2-4e83-99de-8ac8f185f01b", // No Man's Sky
      "Melhor_Jogo_Independente__0": "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Absolum_cover_art.jpg/250px-Absolum_cover_art.jpg", // Absolum
      "Melhor_Jogo_Independente__1": "https://upload.wikimedia.org/wikipedia/en/5/5c/Ball_x_Pit_cover.jpg", // Ball x Pit
      "Melhor_Jogo_Independente__2": "https://sm.ign.com/ign_br/cover/b/blue-princ/blue-prince_ykj3.jpg", // Blue Prince
      "Melhor_Jogo_Independente__3": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_Jogo_Independente__4": "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg", // Hades 2
      "Melhor_Jogo_Independente__5": "https://cdn.wikimg.net/en/hkwiki/images/1/13/Silksong_cover.jpg", // Hollow Knight: Silksong
      "Melhor_Jogo_Independente_de_Estreia__0": "https://sm.ign.com/ign_br/cover/b/blue-princ/blue-prince_ykj3.jpg", // Blue Prince
      "Melhor_Jogo_Independente_de_Estreia__1": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_Jogo_Independente_de_Estreia__2": "https://image.api.playstation.com/vulcan/ap/rnd/202305/0915/3afcbc1cd8137fd823607587692146ceb0adc5a2abdbc80b.jpg", // Despelote
      "Melhor_Jogo_Independente_de_Estreia__3": "https://cdn.awsli.com.br/600x450/2719/2719500/produto/378351921/1139-rwo4zgcry5.jpg", // Dispatch
      "Melhor_Jogo_Independente_de_Estreia__4": "", // Megabonk
      "Melhor_Jogo_Mobile__0": "https://play-lh.googleusercontent.com/8NrjA2nsQ8gEhL3PDC_iIFR3bZe1Lit6OM19Uk_N0KKrPMBoYhPg5k8KBRsoO2wGyGg", // Destiny: Rising
      "Melhor_Jogo_Mobile__1": "https://play-lh.googleusercontent.com/uhf0JJTjPDIddePmWRxLsyECg2YtMpHlv6xD_td9kCn_iy4lWSmzpKnabCOk-iAvSQ", // Persona 5: The Phantom X
      "Melhor_Jogo_Mobile__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx84oZEyTRrLIpd018UmL_oXfdPOII6ikyjg&s", // Sonic Rumble
      "Melhor_Jogo_Mobile__3": "https://umamusume.com/_app/immutable/assets/kv.95F8Qc_S.png", // Umamusume: Pretty Derby
      "Melhor_Jogo_Mobile__4": "https://cdn1.epicgames.com/spt-assets/c1586295960b46f88bbfeec32c199e0e/wuthering-waves-uw6vy.jpg", // Wuthering Waves
      "Melhor_Jogo_VR_AR__0": "https://cdn1.epicgames.com/spt-assets/f51d4c4cd9754f75b03a9c3a00ee06a6/alien-rogue-incursion-evolved-edition-186en.png", // Alien: Rogue Incursion
      "Melhor_Jogo_VR_AR__1": "https://image.api.playstation.com/vulcan/ap/rnd/202310/2619/6da048cb066ece0d436006ef548a4981391e26012e475888.jpg", // Arken Age
      "Melhor_Jogo_VR_AR__2": "https://i.ytimg.com/vi/052hBB-f_EY/maxresdefault.jpg", // Ghost Town
      "Melhor_Jogo_VR_AR__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-dc6a7zTL5vu51-hisadvU-uU7dYZckGPg&s", // Marvel's Deadpool VR
      "Melhor_Jogo_VR_AR__4": "https://image.api.playstation.com/vulcan/ap/rnd/202409/1110/b0815b75af7073ee06d73f71eef4d84f8b1c64b07a34cb53.png", // The Midnight Walk
      "Melhor_Jogo_de_Ao__0": "https://image.api.playstation.com/vulcan/ap/rnd/202507/2514/054ff23fde43c010f63ed99eb1fca6957c26d2b136a9294d.jpg", // Battlefield 6
      "Melhor_Jogo_de_Ao__1": "https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/272a1d71888f2dbe175ecb436967c71e7e670e21fe783396.jpg", // Doom: The Dark Ages
      "Melhor_Jogo_de_Ao__2": "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg", // Hades 2
      "Melhor_Jogo_de_Ao__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEB-1rybqESXPSOz2U9k5vnPSl0eSwplSng&s", // Ninja Gaiden 4
      "Melhor_Jogo_de_Ao__4": "https://upload.wikimedia.org/wikipedia/en/0/0e/Shinobi_Art_of_Vengeance_Cover.webp", // Shinobi: Art of Vengeance
      "Melhor_Jogo_de_Ao_e_Aventura__0": "https://m.media-amazon.com/images/M/MV5BYmVkNDM3MzUtN2YyYS00MDg0LWIxN2EtMjQ2ZGQ1ZDhlZWY4XkEyXkFqcGc@._V1_.jpg", // Death Stranding 2: On the Beach
      "Melhor_Jogo_de_Ao_e_Aventura__1": "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/5607558e5aeca27f6dd1432d92bc66413d01f11f5533c977.jpg", // Ghost of Yotei
      "Melhor_Jogo_de_Ao_e_Aventura__2": "https://image.api.playstation.com/vulcan/ap/rnd/202408/1918/d10c8916f791f0adf0c97951a3f1bed56bdf82e0dce25ec9.jpg", // Indiana Jones e O Grande Círculo
      "Melhor_Jogo_de_Ao_e_Aventura__3": "https://cdn.wikimg.net/en/hkwiki/images/1/13/Silksong_cover.jpg", // Hollow Knight: Silksong
      "Melhor_Jogo_de_Ao_e_Aventura__4": "https://www.adrenaline.com.br/wp-content/uploads/2024/12/split-fiction-cover.jpg", // Split Fiction
      "Melhor_RPG__0": "https://store-images.s-microsoft.com/image/apps.63195.13624715126573049.35e3abd5-bd41-4efb-bc2a-0bfbdd50b02a.d3291934-3236-4279-91eb-792123046d1d", // Avowed
      "Melhor_RPG__1": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d7/Clair_Obscur_Expedition_33.png/250px-Clair_Obscur_Expedition_33.png", // Clair Obscur: Expedition 33
      "Melhor_RPG__2": "https://upload.wikimedia.org/wikipedia/pt/3/32/Kingdom_Come_Deliverance_II.jpg", // Kingdom Come: Deliverance 2
      "Melhor_RPG__3": "https://image.api.playstation.com/vulcan/ap/rnd/202505/2016/7740881b68becb4e2683cb68dfe0ab9c189a6f18e3c1950d.png", // The Outer Worlds 2
      "Melhor_RPG__4": "https://upload.wikimedia.org/wikipedia/en/5/52/Monster_Hunter_Wilds_cover.png", // Monster Hunter Wilds
      "Melhor_Jogo_de_Luta__0": "https://theoutpost.com.br/wp-content/uploads/2025/09/d4d80bb9662a7dbd66b09f0739b444e76fbdcbb8-1920x1080-1.jpg", // 2XKO
      "Melhor_Jogo_de_Luta__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpltdCdwVtDa_sU3bmgCwHKY-zBRR8VneEA&s", // Capcom Fighting Collection 2
      "Melhor_Jogo_de_Luta__2": "https://upload.wikimedia.org/wikipedia/en/0/05/Fatal_Fury_City_of_the_Wolves.jpg", // Fatal Fury: City of the Wolves
      "Melhor_Jogo_de_Luta__3": "https://m.media-amazon.com/images/I/81m02RZ2GfL._AC_UF894,1000_QL80_.jpg", // Mortal Kombat: Legacy Kollection
      "Melhor_Jogo_de_Luta__4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7Sp003rht2iZeW2o3AkJkgrpS4SpRpzkZA&s", // Virtua Fighter 5 R.E.V.O. World Stage
      "Melhor_Jogo_Para_a_Famlia__0": "https://i.ytimg.com/vi/Mjq-2Fwb730/maxresdefault.jpg", // Donkey Kong Bananza
      "Melhor_Jogo_Para_a_Famlia__1": "https://m.media-amazon.com/images/I/81BJNaACs3L.jpg", // LEGO Party!
      "Melhor_Jogo_Para_a_Famlia__2": "https://image.api.playstation.com/vulcan/ap/rnd/202508/1417/2a38adc0513e60f244b8bc2662dea41328c5fa201c023634.png", // LEGO Voyagers
      "Melhor_Jogo_Para_a_Famlia__3": "https://m.media-amazon.com/images/I/71JXr-4+r0L._AC_UF1000,1000_QL80_.jpg", // Mario Kart World
      "Melhor_Jogo_Para_a_Famlia__4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh58sJnu9Di_U7FhtPV917Qieu6mcy5-W8xQ&s", // Sonic Racing: CrossWorlds
      "Melhor_Jogo_Para_a_Famlia__5": "https://www.adrenaline.com.br/wp-content/uploads/2024/12/split-fiction-cover.jpg", // Split Fiction
      "Melhor_Jogo_de_Simulao_Estratgia__0": "https://cdn1.epicgames.com/spt-assets/cbdabb1be05c4501bc3c37538d939bb3/the-alters-1nzq5.jpg", // The Alters
      "Melhor_Jogo_de_Simulao_Estratgia__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUvNb77zt5dkZFarXqUVJlgpLAEwItIyInw&s", // Final Fantasy Tactics - The Ivalice Chronicles
      "Melhor_Jogo_de_Simulao_Estratgia__2": "https://cdn1.epicgames.com/spt-assets/496885083a2942a9a3196abde1aae34d/anning-1tq5z.jpg", // Jurassic World Evolution 3
      "Melhor_Jogo_de_Simulao_Estratgia__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9PKKEYSGLrnwvRSFlH7DWDXc5RIOPEIfoyA&s", // Civilization VII
      "Melhor_Jogo_de_Simulao_Estratgia__4": "https://assets.nuuvem.com/image/upload/t_boxshot_big/v1/products/67ffecc2992705062b172d7f/boxshots/jiclqca6nsjszqjarba2.jpg", // Tempest Rising
      "Melhor_Jogo_de_Simulao_Estratgia__5": "https://cdn1.epicgames.com/spt-assets/c480054596374516ae73fcf3449a531f/borelli-1deda.png", // Two Point Museum
      "Melhor_Jogo_de_Esportes_Corrida__0": "https://image.api.playstation.com/vulcan/ap/rnd/202507/1617/2e757ffb0a6bb4b91af84db64e0183d725e56e5354f45eba.png", // EA Sports FC 26
      "Melhor_Jogo_de_Esportes_Corrida__1": "https://image.api.playstation.com/vulcan/ap/rnd/202505/1521/73fc6fb9bad1b2e74180c166f0c7af9d3940e0d6a6e01525.pngs", // F1 25
      "Melhor_Jogo_de_Esportes_Corrida__2": "https://m.media-amazon.com/images/I/71JXr-4+r0L._AC_UF1000,1000_QL80_.jpg", // Mario Kart World
      "Melhor_Jogo_de_Esportes_Corrida__3": "https://assets.nuuvem.com/image/upload/t_boxshot_big/v1/products/681cbf920c2c09c5e5b0e191/boxshot/fugjxlg27nxuyisj7xaw.jpg", // Rematch
      "Melhor_Jogo_de_Esportes_Corrida__4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh58sJnu9Di_U7FhtPV917Qieu6mcy5-W8xQ&s", // Sonic Racing: CrossWorlds
      "Melhor_Jogo_Multiplayer__0": "https://image.api.playstation.com/vulcan/ap/rnd/202504/1515/99f254edff001a6a52d1d9f09af28959abfbaf1fe1a034b4.jpg", // Arc Raiders
      "Melhor_Jogo_Multiplayer__1": "https://image.api.playstation.com/vulcan/ap/rnd/202507/2514/054ff23fde43c010f63ed99eb1fca6957c26d2b136a9294d.jpg", // Battlefield 6
      "Melhor_Jogo_Multiplayer__2": "https://t.ctcdn.com.br/zylWMzZsBbVZWOcKJgAP-XwXXBE=/600x600/smart/i964805.jpeg", // Elden Ring: Nightreign
      "Melhor_Jogo_Multiplayer__3": "https://assets.nuuvem.com/image/upload/t_boxshot_big/v1/products/68e58654c35c6601c0406f64/boxshots/zhr1gte7erulchbz6nvc.jpg", // Peak
      "Melhor_Jogo_Multiplayer__4": "https://www.adrenaline.com.br/wp-content/uploads/2024/12/split-fiction-cover.jpg", // Split Fiction
      "Melhor_Adaptao__0": "https://ingresso-a.akamaihd.net/prd/img/movie/um-filme-minecraft/6a574e9c-040b-4612-ae44-785318a27193.webp", // Um Filme Minecraft
      "Melhor_Adaptao__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL0R9VsX9oZ7Gp7x_wOYXN5UKZZSVFcxx2A&s", // Devil May Cry
      "Melhor_Adaptao__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEKpZrgrrj0pkYu2ONMuhvgifBXTbNvjlEA&s", // Splinter Cell: Death Watch
      "Melhor_Adaptao__3": "https://br.web.img3.acsta.net/img/ef/d3/efd3cc219ec876e4599b8975908e5ee4.jpg", // Until Dawn
      "Melhor_Adaptao__4": "https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg", // The Last of Us
      "Inovao_em_Acessibilidade__0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9Ysz75rlxhBbXp9FBAr1rrxMJ7uHOWZhQw&s", // Assassin's Creed Shadows
      "Inovao_em_Acessibilidade__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJS-cOEoT7oE3_wrMMPvEVkauRAXpUZVpPg&s", // Atomfall
      "Inovao_em_Acessibilidade__2": "https://image.api.playstation.com/vulcan/ap/rnd/202501/1405/272a1d71888f2dbe175ecb436967c71e7e670e21fe783396.jpg", // Doom: The Dark Ages
      "Inovao_em_Acessibilidade__3": "https://image.api.playstation.com/vulcan/ap/rnd/202507/1617/2e757ffb0a6bb4b91af84db64e0183d725e56e5354f45eba.png", // EA Sports FC 26
      "Inovao_em_Acessibilidade__4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5Yp66CDJcfvFI1apCiYA1WmFUY7lN2hxrQ&s", // South of Midnight
      "Jogo_Mais_Aguardado__0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIjSsSZuv76uEufu2MAbkn7YeYegoFaB4c8Q&s   ", // 007 First Light
      "Jogo_Mais_Aguardado__1": "https://upload.wikimedia.org/wikipedia/pt/4/46/Grand_Theft_Auto_VI.png", // GTA 6
      "Jogo_Mais_Aguardado__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTh6Oj-Do4Vsiatfeco0SI-0RgSveCAfQVQ&s", // Marvel's Wolverine
      "Jogo_Mais_Aguardado__3": "https://upload.wikimedia.org/wikipedia/pt/1/15/Resident_Evil_Requiem_Cover_Art.jpg", // Resident Evil Requiem
      "Jogo_Mais_Aguardado__4": "https://tm.ibxk.com.br/2025/03/26/26131350504030.jpg", // The Witcher 4
      "Melhor_Jogo_de_Esports__0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxvJPtnLQvTodk5P5W6-x4WFEnvZxlKjjsg&s", // Counter-Strike 2
      "Melhor_Jogo_de_Esports__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwg7HGnF1BtdTRUBS5fuHHzpVJ8XJwPogdOA&s", // Dota 2
      "Melhor_Jogo_de_Esports__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd42Ia4ljXpfsa0Nsu1uUkZ4KQKhOBl50M1g&s", // League of Legends
      "Melhor_Jogo_de_Esports__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55fCiaMTjpMUAXuGsaOGqInVQWxSq6GpogQ&s", // Mobile Legends: Bang Bang
      "Melhor_Jogo_de_Esports__4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8zdT9tgQOQwqY0MN2ZtpFeqw55LwkKFNvA&s", // Valorant
      "Melhor_Jogador_de_Esports__0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkC10XJGeub6m5hPG66YlmMscP26ObxJ1JTA&s", // Brawk
      "Melhor_Jogador_de_Esports__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpsmm4cMa-Dl9kYL2TWCixSk1SjNoK89NaQ&s", // Chovy
      "Melhor_Jogador_de_Esports__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3ZP_Md8atFCGFkA4qQtAsRj0qWVZN0HmLA&s", // F0rsakeN
      "Melhor_Jogador_de_Esports__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8M0Bv0NWGBydaxYzjzCelp9RAp4bhrulcIA&s", // Kakeru
      "Melhor_Jogador_de_Esports__4": "https://liquipedia.net/commons/images/thumb/a/ab/MenaRD_EVO_2025.jpg/600px-MenaRD_EVO_2025.jpg", // Menard
      "Melhor_Jogador_de_Esports__5": "https://img-cdn.hltv.org/playerbodyshot/bxEhMYAhUwDXAO1gbuOwE7.png?bg=3e4c54&h=800&ixlib=java-2.1.0&rect=117%2C12%2C467%2C467&w=800&s=26db12d6a25c388da6d1341abfc307c3s", // ZywOo
      "Melhor_Time_de_Esports__0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbRJle8vEyCgDeUdapgWOaNq4phbQr3BY7Q&s", // Gen.G - LoL
      "Melhor_Time_de_Esports__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRgOJTD-Yi8Mi69OR_gs84SiPyQqxkNaYBg&s", // NRG - Valorant
      "Melhor_Time_de_Esports__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1HISD9E_sngEQaktN3aV6X1rF8lM7cirig&s", // Team Falcons - Dota 2
      "Melhor_Time_de_Esports__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4WyEPVpxxtSHxqBO7pyj3ks-05bprZdlKQ&s", // Team Liquid - MLBB
      "Melhor_Time_de_Esports__4": "https://liquipedia.net/commons/images/5/55/Team_Vitality_2021_allmode.png", // Team Vitality - CS 2
      "Criador_de_Contedo_do_Ano__0": "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/ed/LR_Caedrel_2025_Split_1.png/revision/latest?cb=20250316061836", // Caedrel
      "Criador_de_Contedo_do_Ano__1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXS6y5OcNkff8ePzzLs2PY4orfsKWLRbC3hA&s", // Kai Cenat
      "Criador_de_Contedo_do_Ano__2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMt_Zv7ZJd7nHXreL09xkfLWoWLWfjYPKH6g&s", // MoistCr1TiKaL
      "Criador_de_Contedo_do_Ano__3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPDrMcCCPdK1hl-KtPtZY6oJeM4yzo-CvaQ&s", // Sakura Miko
      "Criador_de_Contedo_do_Ano__4": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP68uK-DMmIn-4VaIA9b-21u68gQ8AbNwkzQ&s", // The Burnt Peanut
    };

    // storage helpers
    function save(key,obj){localStorage.setItem(key,JSON.stringify(obj))}
    function load(key){try{return JSON.parse(localStorage.getItem(key))}catch{ return null }}

    function go(route){location.hash = route; render();}

    // render pages
    function render(){const route = location.hash.replace('#','') || 'home'; const main = document.getElementById('main');
      if(route==='home'){main.innerHTML = renderHome()} 
      else if(route.startsWith('player')){ const idx = route.replace('player',''); main.innerHTML = renderPlayer('player'+idx)}
      else if(route==='gabarito'){main.innerHTML = renderGabarito()}
      else main.innerHTML = renderHome();
      computeScores();
    }

    function renderHome(){return `
      <h2>Instruções</h2>
      <p class="small">Cada participante tem sua página de palpites. Você pode adicionar uma imagem por URL em cada item — use o campo "URL da imagem" abaixo de cada opção.</p>
      <div class="actions">
        <button onclick="go('player1')">Ir para Palpite — Pessoa 1</button>
        <button onclick="go('player2')">Ir para Palpite — Pessoa 2</button>
        <button onclick="go('player3')">Ir para Palpite — Pessoa 3</button>
        <button onclick="go('gabarito')">Ir para Gabarito (marcar vencedores)</button>
      </div>
      <hr style="margin:12px 0">
      <h3>Resumo das regras</h3>
      <ul class="small">
        <li>Ganhador do <strong>Jogo do Ano</strong> vale <strong>3 pontos</strong>.</li>
        <li>Todas as outras categorias valem <strong>1 ponto</strong>.</li>
      </ul>
    `}

    function renderPlayer(playerKey){
      const saved = load(playerKey) || {};
      let html = `<h2>Palpites — ${playerKey}</h2><form id="form-${playerKey}">`;
      CATEGORIES.forEach(cat=>{
        html += `<div class="category"><h3>${cat}</h3><div class="options">`;
        DATA[cat].forEach((opt,i)=>{
          const value = opt;
          const id = `${slug(cat)}__${i}`;
          const checked = (saved[cat]===value)?'checked':'';
          const imgSrc = IMAGES[id] || PLACEHOLDER;
          html += `
            <div class="option">
              <img src="${imgSrc}" alt="${escapeHtml(value)}">
              <label><input type="radio" name="${slug(cat)}" value="${escapeHtml(value)}" ${checked}> ${escapeHtml(value)}</label>
            </div>
          `;
        });
        html += `</div></div>`;
      });
      html += `<div class="actions"><button type="button" onclick="savePlayer('${playerKey}')">Salvar palpites</button><button type="button" onclick="clearPlayer('${playerKey}')">Limpar</button></div></form>`;
      return html;
    }

    function renderGabarito(){
      const saved = load('gabarito') || {};
      let html = `<h2>Gabarito (admin)</h2><form id="form-gabarito">`;
      CATEGORIES.forEach(cat=>{
        html += `<div class="category"><h3>${cat}</h3><div class="options">`;
        DATA[cat].forEach((opt,i)=>{
          const id = `gabarito__${slug(cat)}__${i}`;
          const sharedId = `${slug(cat)}__${i}`;
          const checked = (saved[cat]===opt)?'checked':'';
          const imgSrc = IMAGES[sharedId] || PLACEHOLDER;
          html += `
            <div class="option">
              <img src="${imgSrc}" alt="${escapeHtml(opt)}">
              <label><input type="radio" name="${slug(cat)}" value="${escapeHtml(opt)}" ${checked}> ${escapeHtml(opt)}</label>
            </div>
          `;
        });
        html += `</div></div>`;
      });
      html += `<div class="actions"><button type="button" onclick="saveGabarito()">Salvar gabarito</button><button type="button" onclick="clearGabarito()">Limpar gabarito</button></div></form>`;
      return html;
    }

    // actions
    function savePlayer(key){
      const form = document.getElementById('form-'+key);
      const data = {};
      CATEGORIES.forEach(cat=>{
        const v = form.elements[slug(cat)];
        if(v){
          if(v.length){ // radio NodeList
            for(const r of v){ if(r.checked){ data[cat]=r.value; break }}
          } else { if(v.checked) data[cat]=v.value }
        }
      });
      save(key,data);
      alert('Palpites salvos para '+key);
      computeScores();
    }

    function clearPlayer(key){ if(confirm('Limpar palpites de '+key+'?')){ localStorage.removeItem(key); render(); computeScores(); }}

    function saveGabarito(){
      const form = document.getElementById('form-gabarito');
      const data = {};
      CATEGORIES.forEach(cat=>{
        const v = form.elements[slug(cat)];
        if(v){
          if(v.length){ for(const r of v){ if(r.checked){ data[cat]=r.value; break } } }
          else { if(v.checked) data[cat]=v.value }
        }
      });
      save('gabarito',data);
      alert('Gabarito salvo.');
      computeScores();
    }

    function clearGabarito(){ if(confirm('Limpar gabarito?')){ localStorage.removeItem('gabarito'); render(); computeScores(); }}

    function computeScores(){
      const g = load('gabarito') || {};
      const scores = {player1:0,player2:0,player3:0};
      const details = {player1:[],player2:[],player3:[]};
      PLAYERS.forEach(p=>{
        const picks = load(p) || {};
        CATEGORIES.forEach(cat=>{
          if(!g[cat]) return; // if no winner set, skip
          if(picks[cat] && picks[cat] === g[cat]){
            const pts = (cat==='Jogo do Ano')?3:1;
            scores[p] += pts;
            details[p].push({cat,pts});
          }
        });
      });

      // render scoreboard
      const sb = document.getElementById('scoreboard'); sb.innerHTML='';
      for(const p of PLAYERS){
        const name = p.replace('player','Pessoa ');
        const div = document.createElement('div'); div.className='scoreline';
        div.innerHTML = `<div><strong>${name}</strong><div class="small">Acertos: ${details[p].length}</div></div><div><strong>${scores[p]}</strong></div>`;
        sb.appendChild(div);
      }

      // detailed panel (optional)
      const main = document.getElementById('main');
      // if on gabarito page show detail
      if(location.hash.replace('#','')==='gabarito'){
        let html = main.innerHTML;
        html += `<hr><h3>Detalhes</h3>`;
        PLAYERS.forEach(p=>{
          html += `<h4>${p.replace('player','Pessoa ') } — ${scores[p]} pontos</h4><ul class="small">`;
          details[p].forEach(d=>{ html += `<li>${d.cat} (+${d.pts})</li>` });
          html += `</ul>`;
        });
        main.innerHTML = html;
      }
    }

    // export/import
    function exportAll(){
      const dump = {gabarito: load('gabarito')||{}, player1: load('player1')||{}, player2: load('player2')||{}, player3: load('player3')||{}};
      const json = JSON.stringify(dump,null,2);
      const blob = new Blob([json],{type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download='bolao_export.json'; a.click(); URL.revokeObjectURL(url);
    }

    function importAll(){
      const area = document.getElementById('importArea');
      try{
        const obj = JSON.parse(area.value);
        if(obj.gabarito) save('gabarito',obj.gabarito);
        if(obj.player1) save('player1',obj.player1);
        if(obj.player2) save('player2',obj.player2);
        if(obj.player3) save('player3',obj.player3);
        alert('Importado com sucesso.'); render(); computeScores();
      }catch(e){alert('JSON inválido: '+e.message)}
    }

    function clearAll(confirmFirst){ if(!confirmFirst || confirm('Limpar todos os dados do bolão (gabarito e palpites)?')){ ['gabarito','player1','player2','player3'].forEach(k=>localStorage.removeItem(k)); render(); computeScores(); }}

    // small helpers
    function slug(s){return s.replace(/[^a-z0-9]/gi,'_')}
    function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }

    // Normaliza as chaves do objeto IMAGES para garantir que usem
    // o mesmo slug gerado pela função slug(cat) + '__' + index
    (function normalizeImages(){
      try{
        const rawKeys = Object.keys(IMAGES||{});
        if(!rawKeys.length) return;
        const simplified = str => String(str).normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/_/g,'').toLowerCase();
        const normalized = {};
        CATEGORIES.forEach(cat=>{
          DATA[cat].forEach((opt,i)=>{
            const desiredKey = slug(cat)+'__'+i;
            const desiredSimple = simplified(desiredKey);
            // find matching raw key by simplified comparison
            let found = '';
            for(const k of rawKeys){ if(simplified(k) === desiredSimple){ found = k; break } }
            normalized[desiredKey] = (found && IMAGES[found]) ? IMAGES[found] : (IMAGES[desiredKey]||'');
          });
        });
        // replace contents of IMAGES object
        Object.keys(IMAGES).forEach(k=>delete IMAGES[k]);
        Object.assign(IMAGES, normalized);
      }catch(e){ /* fail silently */ }
    })();

    // image resolver (user will replace logic here to return real image URLs later)
    function getImageFor(name){
      // default: placeholder
      return PLACEHOLDER;
    }

    // initial render
    window.addEventListener('hashchange',render);
    render();