/*
  channels.js
  ────────────
  Contains all IPTV channels used by index.html.
  Supports: HLS (.m3u8), DASH (.mpd with ClearKey DRM), and YouTube embeds.
*/

const combinedChannels = [
  /* ---------- HLS STREAMS ---------- */
  { name: "Jugo Pinoy TV", type: "hls", category: "Local Channels", live: true,
    logo: "https://dito.ph/hubfs/Dito_July2021/Ott%20Pages/Jungo-img/Jungo-logo.png",
    url: "https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8" },

  { name: "Sinemanila", type: "hls", category: "Local Channels",
    logo: "https://i.imgur.com/l2A1mt5.jpg",
    url: "https://live20.bozztv.com/giatv/giatv-sinemanila/sinemanila/playlist.m3u8" },

  { name: "SUPER RADYO DZBB", type: "hls", category: "Local Channels", live: true,
    logo: "https://i.imgur.com/OBUDDAp.jpeg",
    url: "https://stream.gmaNews.tv/ioslive/livestream/playlist.m3u8" },

  { name: "FX", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/fx-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/FX/index.m3u8" },

  { name: "FXM", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/fxm-movie-channel-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/FX_MOVIE/index.m3u8" },

  { name: "FXX", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/fxx-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/FXX/index.m3u8" },

  { name: "MGM+", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/mgm-plus-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/EPIX/index.m3u8" },

  { name: "MGM+ Drive-In", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/mgm-plus-drive-in-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/EPIX_DRIVE_IN/index.m3u8" },

  { name: "MGM+ HITS", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/mgm-plus-hits-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/EPIX_HITS/index.m3u8" },

  { name: "Showtime", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/SHOWTIME/index.m3u8" },

  { name: "Showtime 2", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-2-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/SHOWTIME_2/index.m3u8" },

  { name: "Showtime Extreme", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-extreme-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/SHOWTIME_EXTREME/index.m3u8" },

  { name: "Showtime Next", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-next-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/SHOWTIME_NEXT/index.m3u8" },

  { name: "Showtime West", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/SHOWTIME_WEST/index.m3u8" },

  { name: "Showtime Women", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/showtime-women-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/SHOWTIME_WOMEN/index.m3u8" },

  { name: "Start TV", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/start-tv-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/Start_Tv/index.m3u8" },

  { name: "Starz", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/STARZ/index.m3u8" },

  { name: "Starz Comedy", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-comedy-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/STARZ_COMEDY/index.m3u8" },

  { name: "Starz Edge", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-edge-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/STARZ_EDGE/index.m3u8" },

  { name: "Starz Encore Action", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-encore-action-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/STARZ_ENCORE_ACTION/index.m3u8" },

  { name: "Starz Encore Classic", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-encore-classic-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/STARZ_ENCORE_CLASSIC/index.m3u8" },

  { name: "Starz Encore Westerns", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-encore-westerns-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/STARZ_ENCORE_WESTERNS/index.m3u8" },

  { name: "Starz West", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/starz-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/STARZ_WEST/index.m3u8" },

  { name: "SundanceTV", type: "hls", category: "Movie Channels", live: true,
    logo: "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s16108_dark_360w_270h.png",
    url: "https://fl51.moveonjoy.com/SUNDANCE/index.m3u8" },

  { name: "SYFY", type: "hls", category: "Movie Channels", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/syfy-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/SYFY/index.m3u8" },

  { name: "Boomerang", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "http://schedulesdirect-api20141201-logos.s3.dualstack.us-east-1.amazonaws.com/stationLogos/s21883_dark_360w_270h.png",
    url: "https://fl51.moveonjoy.com/BOOMERANG/index.m3u8" },

  { name: "Disney Channel US", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/2014_Disney_Channel_logo.svg/300px-2014_Disney_Channel_logo.svg.png",
    url: "https://fl51.moveonjoy.com/DISNEY/index.m3u8" },

  { name: "Disney JR US", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/disney-jr-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/DISNEY_JR/index.m3u8" },

  { name: "Disney XD US", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/canada/disney-xd-ca.png?raw=true",
    url: "https://fl51.moveonjoy.com/DISNEY_XD/index.m3u8" },

  { name: "Nickelodeon", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "https://i.imgur.com/kbIi1V6.png",
    url: "https://fl51.moveonjoy.com/NICKELODEON/index.m3u8" },

  { name: "Nick Jr.", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "https://i.imgur.com/eaUHjP6.png",
    url: "https://fl51.moveonjoy.com/NICK_JR/index.m3u8" },

  { name: "Nicktoons", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Nicktoons.png",
    url: "https://fl51.moveonjoy.com/NICKTOONS/index.m3u8" },

  { name: "Teen Nick", type: "hls", category: "Anime/Cartoons", live: true,
    logo: "https://github.com/tv-logo/tv-logos/blob/main/countries/united-states/teen-nick-us.png?raw=true",
    url: "https://fl51.moveonjoy.com/Teen_Nick/index.m3u8" },

  /* ---------- DASH STREAMS (ClearKey) ---------- */
  {
    name: "A2Z",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
    logo: "https://i.imgur.com/3myn4zH.png",
    category: "Local Channels", live: true,
    clearKey: {
      "f703e4c8ec9041eeb5028ab4248fa094": "c22f2162e176eee6273a5d0b68d19530"
    }
  },

  {
    name: "ANC",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd",
    logo: "https://i.imgur.com/XzVYXaV.png",
    category: "Local Channels", live: true,
    clearKey: {
      "4bbdc78024a54662854b412d01fafa16": "6039ec9b213aca913821677a28bd78ae"
    }
  },

  {
    name: "BILYONARYO CHANNEL",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default1/index.mpd",
    logo: "https://i.imgur.com/Rh80p0K.png",
    category: "Local Channels", live: true,
    clearKey: {
      "227ffaf09bec4a889e0e0988704d52a2": "b2d0dce5c486891997c1c92ddaca2cd2"
    }
  },

  {
    name: "CELESTIAL MOVIES PINOY",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd",
    logo: "https://i.imgur.com/EUlYIWv.png",
    category: "Local Channels", live: true,
    clearKey: {
      "0f8537d8412b11edb8780242ac120002": "2ffd7230416150fd5196fd7ea71c36f3"
    }
  },
  {
    name: "Cinema One",
    type: "dash",
    url: "https://live-faws.akamaized.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    logo: "https://i.imgur.com/3Ckk8OH.jpeg",
    category: "Local Channels", live: true,
  },
  {
    name: "Cinema One Global",
    type: "dash",
    url: "https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    logo: "https://i.imgur.com/hJ6MBiA.png",
    category: "Local Channels", live: true,
    clearKey: {
      "58d0e56991194043b8fb82feb4db7276": "d68f41b59649676788889e19fb10d22c"
    }
  },
  
  {
    name: "Cinemo",
    type: "dash",
    url: "https://live-faws.akamaized.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd",
    logo: "https://i.imgur.com/Pf8CNau.png",
    category: "Local Channels", live: true,
  },

  {
    name: "Cinemo Global",
    type: "dash",
    url: "https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd",
    logo: "https://i.imgur.com/4xDiXMP.png",
    category: "Local Channels", live: true,
    clearKey: {
      "aa8aebe35ccc4541b7ce6292efcb1bfb": "aab1df109d22fc5d7e3ec121ddf24e5f"
    }
  },

  {
    name: "DZMM TELERADYO",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd",
    logo: "https://i.imgur.com/93Rp1f6.png",
    category: "Local Channels", live: true,
    clearKey: {
      "47c093e0c9fd4f80839a0337da3dd876": "50547394045b3d047dc7d92f57b5fb33"
    }
  },

  {
    name: "Heart of Asia",
    type: "dash",
    url: "https://kaotv.ganbaruby23.xyz/dash/heartofasia/manifest.mpd",
    logo: "https://static.wikia.nocookie.net/dxs/images/b/b0/Heart_of_Asia_2D_Logo_2020.png",
    category: "Local Channels", live: true,
    clearKey: {
      "16ecd238c0394592b8d3559c06b1faf5": "05b47ae3be1368912ebe28f87480fc84"
    }
  },

  {
    name: "I Heart Movies",
    type: "dash",
    url: "https://kaotv.ganbaruby23.xyz/dash/iheartmovies/manifest.mpd",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/26/I_Heart_Movies_2021.png",
    category: "Local Channels", live: true,
    clearKey: {
      "abba271e8bcf552bbd2e86a434a9a5d9": "69eaa802a6763af979e8d1940fb88392"
    }
  },

  {
    name: "Kapamilya Channel",
    type: "dash",
    url: "https://d1uf7s78uqso1e.cloudfront.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Kapamilya_Channel_Logo_2020.svg/2560px-Kapamilya_Channel_Logo_2020.svg.png",
    category: "Local Channels", live: true,
  },

  {
    name: "KAPAMILYA CHANNEL HD",
    type: "dash",
    url: "https://live-faws.akamaized.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd",
    logo: "https://i.imgur.com/LXQmZvX.png",
    category: "Local Channels", live: true,
  },

  {
    name: "KNOWLEDGE CHANNEL",
    type: "dash",
    url: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd",
    logo: "https://i.imgur.com/9ROZkXn.png",
    category: "Local Channels", live: true,
    clearKey: {
      "0f856fa0412b11edb8780242ac120002": "783374273ef97ad3bc992c1d63e091e7"
    }
  },

  {
    name: "ONE PH",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd",
    logo: "https://i.imgur.com/9dMuFE1.png",
    category: "Local Channels", live: true,
    clearKey: {
      "92834ab4a7e1499b90886c5d49220e46": "a7108d9a6cfcc1b7939eb111daf09ab3"
    }
  },

  {
    name: "ONE NEWS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd",
    logo: "https://i.imgur.com/bmP06bk.png",
    category: "Local Channels", live: true,
    clearKey: {
      "d39eb201ae494a0b98583df4d110e8dd": "6797066880d344422abd3f5eda41f45f"
    }
  },

  {
    name: "ONE SPORTS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd",
    logo: "https://i.imgur.com/btiNwYt.png",
    category: "Local Channels", live: true,
    clearKey: {
      "53c3bf2eba574f639aa21f2d4409ff11": "3de28411cf08a64ea935b9578f6d0edd"
    }
  },

  {
    name: "ONE SPORTS PLUS",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd",
    logo: "https://i.imgur.com/nFLt8cN.png",
    category: "Local Channels", live: true,
    clearKey: {
      "322d06e9326f4753a7ec0908030c13d8": "1e3e0ca32d421fbfec86feced0efefdaf"
    }
  },

  {
    name: "PBA Rush",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd",
    logo: "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55A7650-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
    category: "Local Channels", live: true,
    clearKey: {
      "76dc29dd87a244aeab9e8b7c5da1e5f3": "95b2f2ffd4e14073620506213b62ac82"
    }
  },

  {
    name: "PBO",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd",
    logo: "https://i.imgur.com/709Uy7N.png",
    category: "Local Channels", live: true,
    clearKey: {
      "dcbdaaa6662d4188bdf97f9f0ca5e830": "31e752b441bd2972f2b98a4b1bc1c7a1"
    }
  },

  {
    name: "RPTV",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd",
    logo: "https://i.imgur.com/IDCHfXm.png",
    category: "Local Channels", live: true,
    clearKey: {
      "1917f4caf2364e6d9b1507326a85ead6": "a1340a251a5aa63a9b0ea5d9d7f67595"
    }
  },

  {
    name: "SARI-SARI",
    type: "dash",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    logo: "https://i.imgur.com/l2A1mt5.jpg",
    category: "Local Channels", live: true,
    clearKey: {
      "0a7ab3612f434335aa6e895016d8cd2d": "b21654621230ae21714a5cab52daeb9d"
    }
  },

  {
    name: "TFC Asia",
    type: "dash",
    url: "https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/index.mpd",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/tfc-us.png",
    category: "Local Channels", live: true,
    clearKey: {
      "9568cc84e1d944f38eac304517eab6fd": "f12142af8f39b3bab79d3679d3665ebe"
    }
  },

  {
    name: "TMC",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd",
    logo: "https://i.imgur.com/6mNCite.png",
    category: "Local Channels", live: true,
    clearKey: {
      "96701d297d1241e492d41c397631d857": "ca2931211c1a261f082a3a2c4fd9f91b"
    }
  },

  {
    name: "TRUE TV",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/truefm_tv/default/index.mpd",
    logo: "https://i.imgur.com/wlQOzHo.png",
    category: "Local Channels", live: true,
    clearKey: {
      "0559c95496d44fadb94105b9176c3579": "40d8bb2a46ffd03540e0c6210ece57ce"
    }
  },

  {
    name: "TV5",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd",
    logo: "https://i.imgur.com/jsCBRq0.png",
    category: "Local Channels", live: true,
    clearKey: {
      "2615129ef2c846a9bbd43a641c7303ef": "07c7f996b1734ea288641a68e1cfdc4d"
    }
  },

   {
    name: "TVN Movies Pinoy",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnmovie/default/index.mpd",
     logo: "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/C5298B63-6A6F-4CEC-8AC7-07B482EFA587/0-16x9.jpg?width=203",
     category: "Local Channels", live: true,
    clearKey: {
      "2e53f8d8a5e94bca8f9a1e16ce67df33": "3471b2464b5c7b033a03bb8307d9fa35"
    }
  },

   {
    name: "TVUP",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvup_prd/default/index.mpd",
    logo: "https://i.imgur.com/oDBbEYW.jpeg",
    category: "Local Channels", live: true,
    clearKey: {
      "3e813ccd4ca4837afd611037af02f63": "a97c515dbcb5dcbc432bbd09d15afd41"
    }
  },

   {
    name: "UAAP VARSITY",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_uaap_cplay_sd/default/index.mpd",
     logo: "https://i.imgur.com/V0sxXci.png",
     category: "Local Channels", live: true,
    clearKey: {
      "95588338ee37423e99358a6d431324b9": "6e0f50a12f36599a55073868f814e81e"
    }
  },

   {
    name: "VIVA CINEMA",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd",
     logo: "https://i.imgur.com/8y3fc3F.png",
     category: "Local Channels", live: true,
    clearKey: {
      "07aa813bf2c147748046edd930f7736e": "3bd6688b8b44e96201e753224adfc8fb"
    }
  },
  {
    name: "Hits Movies",
    type: "dash",
    url: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd",
    logo: "https://astromedia.com.my/wp-content/uploads/2023/12/hitsmovie2.jpeg",
    category: "Movie Channels", live: true,
    clearKey: {
      "f56b57b32d7e4b2cb21748c0b56761a7": "3df06a89aa01b32655a77d93e09e266f"
    }
  },
  {
    name: "Hits Now",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd",
    logo: "https://i.imgur.com/tYfJVjx.png",
    category: "Movie Channels", live: true,
    clearKey: {
      "14439a1b7afc4527bb0ebc51cf11cbc1": "92b0287c7042f271b266cc11ab7541f1"
    }
  },
  {
    name: "Hi-Yah!",
    type: "hls",
    url: "https://linear-59.frequency.stream/dist/xumo/59/hls/master/playlist_1920x1080.m3u8",
    logo: "https://i.imgur.com/gGbiY5u.png",
    category: "Movie Channels", live: true,
  },
  {
    name: "HBO",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd",
    logo: "https://i.imgur.com/pa2SF5Z.png",
    category: "Movie Channels", live: true,
    clearKey: {
      "d47ebabf7a21430b83a8c4b82d9ef6b1": "54c213b2b5f885f1e0290ee4131d425b"
    }
  },
  {
    name: "HBO Hits",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd",
    logo: "https://i.imgur.com/pZn9JHj.png",
    category: "Movie Channels", live: true,
    clearKey: {
      "b04ae8017b5b4601a5a0c9060f6d5b7d": "a8795f3bdb8a4778b7e888ee484cc7a1"
    }
  },
  {
    name: "HBO Signature",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd",
    logo: "https://i.imgur.com/3BOoqQn.png",
    category: "Movie Channels", live: true,
    clearKey: {
      "a06ca6c275744151895762e0346380f5": "559da1b63eec77b5a942018f14d3f56f"
    }
  },
  {
    name: "HBO Family",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd",
    logo: "https://i.imgur.com/Zy3pvJV.png",
    category: "Movie Channels", live: true,
    clearKey: {
      "872910c843294319800d85f9a0940607": "f79fd895b79c590708cf5e8b5c6263be"
    }
  },
  {
    name: "MovieSphere by Lionsgate",
    type: "hls",
    url: "https://live-manifest.production-public.tubi.io/live/050aaad2-b60d-4525-9e2e-2465b85cfa43/playlist.m3u8",
    logo: "https://images.pluto.tv/channels/645e7828e1979c00087b75b4/colorLogoPNG.png",
    category: "Movie Channels", live: true,
  },
  {
    name: "Movies Now",
    type: "dash",
    url: "https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3suWaQrCK8hU-TD0_Oj9DcBQ8oZmiVXY5xDhzSZ4YkrBmnv5Ah-JmMPL&s=10",
    category: "Movie Channels", live: true,
    clearKey: {
      "40f019b86241d23ef075633fd7f1e927": "058dec845bd340178a388edd104a015e"
    }
  },
  {
    name: "RageTV",
    type: "hls",
    url: "https://live20.bozztv.com/giatv/giatv-ragetv/ragetv/playlist.m3u8",
    logo: "https://i.imgur.com/Ym32WqZ.png",
    category: "Movie Channels", live: true,
  },
  {
    name: "Rakuten Viki",
    type: "hls",
    url: "https://268d7193278949b4b4796e63861deee5.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/LG_RakutenViki/playlist.m3u8",
    logo: "https://images.sr.roku.com/idType/roku/context/trc/id/c4bdfe6fd751590e9d096b5de264bba1/https%3A%2F%2Fimage.roku.com%2Fbh-uploads%2Fproduction%2FinfoHUDLogo%2F1678995051754_image_hud1_260x147.png",
    category: "Movie Channels", live: true,
  },
  {
    name: "ScreamFlix",
    type: "hls",
    url: "https://jungotvstream.chanall.tv/jungotv/screamflix/playlist_720p.m3u8",
    logo: "https://i.imgur.com/hcLzEH7.jpeg",
    category: "Movie Channels", live: true,
  },

  {
    name: "TAP Action Flix",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tapactionflix_hd1/default/index.mpd",
    logo: "https://i.imgur.com/w64PvvF.png",
    category: "Movie Channels", live: true,
    clearKey: { "bee1066160c0424696d9bf99ca0645e3": "f5b72bf3b89b9848de5616f37de040b7" }
  },
  {
    name: "TAP Edge",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapedge/default/index.mpd",
    logo: "https://i.imgur.com/e7xA7qK.png",
    category: "Movie Channels", live: true,
    clearKey: { "4553f7e8011f411fb625cefc39274300": "98f2f1d153367e84b5d559dc9dfb9a35" }
  },
  {
    name: "TAP Movies",
    type: "dash",
    url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd",
    logo: "https://i.imgur.com/3RVA5mV.png",
    category: "Movie Channels", live: true,
    clearKey: { "71cbdf02b595468bb77398222e1ade09": "c3f2aa420b8908ab8761571c01899460" }
  },
  {
    name: "TAP TV",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_taptv_sd/default/index.mpd",
    logo: "https://i.imgur.com/J6Olkop.png",
    category: "Movie Channels", live: true,
    clearKey: { "f6804251e90b4966889b7df94fdc621e": "55c3c014f2bd12d6bd62349658f24566" }
  },
  {
    name: "THRILL",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd",
    logo: "https://i.imgur.com/mNmRiMA.png",
    category: "Movie Channels", live: true,
    clearKey: { "928114ffb2394d14b5585258f70ed183": "a82edc340bc73447bac16cdfed0a4c62" }
  },
  {
    name: "TVN Movies",
    type: "dash",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd",
    logo: "https://i.imgur.com/oLzTyUX.png",
    category: "Movie Channels", live: true,
    clearKey: { "8e269c8aa32ad77eb83068312343d610": "d12ccebafbba2a535d88a3087f884252" }
  },
  {
    name: "Animax",
    type: "dash",
    url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
    logo: "https://i.imgur.com/QxTehhs.png",
    category: "Anime/Cartoons", live: true,
    clearKey: { "92032b0e41a543fb9830751273b8debd": "03f8b65e2af785b10d6634735dbe6c11" }
  },

  {
    name: "AnimeX",
    type: "hls",
    url: "https://live20.bozztv.com/giatv/giatv-animex/animex/playlist.m3u8",
    logo: "https://i.imgur.com/0FLu8iV.png",
    category: "Anime/Cartoons", live: true,
  },
  {
    name: "Anime X HIDIVE",
    type: "hls",
    url: "https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8",
    logo: "https://i.imgur.com/E1LIeR2.png",
    category: "Anime/Cartoons", live: true,
  },
  {
    name: "Aniplus",
    type: "hls",
    url: "https://amg18481-amg18481c1-amgplt0352.playout.now3.amagi.tv/playlist/amg18481-amg18481c1-amgplt0352/playlist.m3u8",
    logo: "https://static.wikia.nocookie.net/animax/images/b/b8/Aniplus_Asia_Logo.png",
    category: "Anime/Cartoons", live: true,
  },
  { name: "Cartoon Network HD", type: "dash", category: "Anime/Cartoons", live: true,
    logo: "https://i.imgur.com/l7p2MpK.png",
    url: "http://linearjitp-playback.astro.com.my/dash-wv/linear/509/default_ott.mpd",
    license: {
      type: "clearkey",
      keyId: "1a05bebf706408431a390c3f9f40f410",
      key: "89c5ff9f8e65c7fe966afbd2f9128e5f"
    },
    headers: {
      referer: "https://astrogo.astro.com.my//",
      "user-agent": "Mozilla/5.0 (Linux; Android 10; MI 9 Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.58 Mobile Safari/537.36"
    }
  },
  {
  name: "DreamWorks(HD)",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd",
  logo: "https://i.imgur.com/cgfKSDP.png",
  category: "Anime/Cartoons", live: true,
  clearKey: {
    "4ab9645a2a0a47edbd65e8479c2b9669": "8cb209f1828431ce9b50b593d1f44079"
  }
},
{
  name: "DreamWorks Tagalized",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworktag/default/index.mpd",
  logo: "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/40E328E7-FE69-4287-86EA-FA942A7EA302/0-16x9.jpg?width=203",
  category: "Anime/Cartoons", live: true,
  clearKey: {
    "564b3b1c781043c19242c66e348699c5": "d3ad27d7fe1f14fb1a2cd5688549fbab"
  }
},
  {
  name: "Moonbug",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_moonbug_kids_sd/default/index.mpd",
  logo: "https://i.imgur.com/cfQMx3J.png",
  category: "Anime/Cartoons", live: true,
  clearKey: {
    "0bf00921bec94a65a124fba1ef52b1cd": "0f1488487cbe05e2badc3db53ae0f29f"
  }
},
{
  name: "PBS Kids",
  type: "hls",
  url: "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8",
  logo: "https://i.imgur.com/xhmWQXs.png",
  category: "Anime/Cartoons", live: true,
    },
  {
  name: "A2Z",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_a2z/default/index.mpd",
  logo: "https://i.imgur.com/ftwsljN.png",
  category: "Cignal", live: true,
  clearKey: {
    "f703e4c8ec9041eeb5028ab4248fa094": "c22f2162e176eee6273a5d0b68d19530"
  }
},
{
  name: "One PH",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/oneph_sd/default/index.mpd",
  logo: "https://i.imgur.com/U9QwJSE.png",
  category: "Cignal", live: true,
  clearKey: {
    "92834ab4a7e1499b90886c5d49220e46": "a7108d9a6cfcc1b7939eb111daf09ab3"
  }
},
{
  name: "Buko",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_buko_sd/default/index.mpd",
  logo: "https://i.imgur.com/BxQvEil.png",
  category: "Cignal", live: true,
  clearKey: {
    "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
  }
},
{
  name: "Sari-Sari",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_sarisari/default/index.mpd",
  logo: "https://i.imgur.com/25CGN9g.png",
  category: "Cignal", live: true,
  clearKey: {
    "0a7ab3612f434335aa6e895016d8cd2d": "b21654621230ae21714a5cab52daeb9d"
  }
},
{
  name: "TV5 HD",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/tv5_hd/default1/index.mpd",
  logo: "https://i.imgur.com/U5L67WD.png",
  category: "Cignal", live: true,
  clearKey: {
    "2615129ef2c846a9bbd43a641c7303ef": "07c7f996b1734ea288641a68e1cfdc4d"
  }
},
{
  name: "Lotus Macau",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/lotusmacau_prd/default/index.mpd",
  logo: "https://i.imgur.com/5G72qjx.png",
  category: "Cignal", live: true,
  clearKey: {
    "60dc692e64ea443a8fb5ac186c865a9b": "01bdbe22d59b2a4504b53adc2f606cc1"
  }
},
{
  name: "tvUP",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvup_prd/default/index.mpd",
  logo: "https://i.imgur.com/OHLO5Hz.png",
  category: "Cignal", live: true,
  clearKey: {
    "83e813ccd4ca4837afd611037af02f63": "a97c515dbcb5dcbc432bbd09d15afd41"
  }
},
{
  name: "Thrill",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_thrill_sd/default/index.mpd",
  logo: "https://i.imgur.com/kgqsalZ.png",
  category: "Cignal", live: true,
  clearKey: {
    "928114ffb2394d14b5585258f70ed183": "a82edc340bc73447bac16cdfed0a4c62"
  }
},
{
  name: "AXN",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_axn_sd/default/index.mpd",
  logo: "https://i.imgur.com/OuaLV7f.png",
  category: "Cignal", live: true,
  clearKey: {
    "fd5d928f5d974ca4983f6e9295dfe410": "3aaa001ddc142fedbb9d5557be43792f"
  }
},
{
  name: "Hits HD",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hits_hd1/default/index.mpd",
  logo: "https://i.imgur.com/CxqHKUO.png",
  category: "Cignal", live: true,
  clearKey: {
    "dac605bc197e442c93f4f08595a95100": "975e27ffc1b7949721ee3ccb4b7fd3e5"
  }
},
{
  name: "Hits Now",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_hitsnow/default/index.mpd",
  logo: "https://i.imgur.com/Ck0ad9b.png",
  category: "Cignal", live: true,
  clearKey: {
    "14439a1b7afc4527bb0ebc51cf11cbc1": "92b0287c7042f271b266cc11ab7541f1"
  }
},
{
  name: "IBC 13",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/ibc13_sd_new/default1/index.mpd",
  logo: "https://i.imgur.com/CTHhr3Q.png",
  category: "Cignal", live: true,
  clearKey: {
    "16ecd238c0394592b8d3559c06b1faf5": "05b47ae3be1368912ebe28f87480fc84"
  }
},
{
  name: "TrueTV",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/truefm_tv/default/index.mpd",
  logo: "https://i.imgur.com/i0xetYa.png",
  category: "Cignal", live: true,
  clearKey: {
    "0559c95496d44fadb94105b9176c3579": "40d8bb2a46ffd03540e0c6210ece57ce"
  }
},
{
  name: "TVN Premium",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnpre/default/index.mpd",
  logo: "https://i.imgur.com/qEPJE1t.png",
  category: "Cignal", live: true,
  clearKey: {
    "e1bde543e8a140b38d3f84ace746553e": "b712c4ec307300043333a6899a402c10"
  }
},
{
  name: "KBS World",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/kbsworld/default/index.mpd",
  logo: "https://i.imgur.com/aFDRmtm.png",
  category: "Cignal", live: true,
  clearKey: {
    "22ff2347107e4871aa423bea9c2bd363": "c6e7ba2f48b3a3b8269e8bc360e60404"
  }
},
{
  name: "Tap TV",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_taptv_sd/default/index.mpd",
  logo: "https://i.imgur.com/vDvLPda.png",
  category: "Cignal", live: true,
  clearKey: {
    "f6804251e90b4966889b7df94fdc621e": "55c3c014f2bd12d6bd62349658f24566"
  }
},
{
  name: "Global Trekker",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapedge/default/index.mpd",
  logo: "https://accion.com.ph/wp-content/uploads/2023/02/GT-Thumbnail-New.jpg",
  category: "Cignal", live: true,
  clearKey: {
    "4553f7e8011f411fb625cefc39274300": "98f2f1d153367e84b5d559dc9dfb9a35"
  }
},
{
  name: "Rock Action",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockextreme/default/index.mpd",
  logo: "https://i.imgur.com/T70dbrM.png",
  category: "Cignal", live: true,
  clearKey: {
    "0f852fb8412b11edb8780242ac120002": "4cbc004d8c444f9f996db42059ce8178"
  }
},
{
  name: "Rock Entertainment",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_rockentertainment/default/index.mpd",
  logo: "https://i.imgur.com/BuKajCb.png",
  category: "Cignal", live: true,
  clearKey: {
    "e4ee0cf8ca9746f99af402ca6eed8dc7": "be2a096403346bc1d0bb0f812822bb62"
  }
},
{
  name: "TVN Movies Pinoy",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tvnmovie/default/index.mpd",
  logo: "https://i.imgur.com/8YhI91e.png",
  category: "Cignal", live: true,
  clearKey: {
    "2e53f8d8a5e94bca8f9a1e16ce67df33": "3471b2464b5c7b033a03bb8307d9fa35"
  }
  },
  {
  name: "PBO",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/pbo_sd/default/index.mpd",
  logo: "https://i.imgur.com/r3PUF9p.png",
  category: "Cignal", live: true,
  clearKey: {
    "dcbdaaa6662d4188bdf97f9f0ca5e830": "31e752b441bd2972f2b98a4b1bc1c7a1"
  }
},
{
  name: "Viva Cinema",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/viva_sd/default/index.mpd",
  logo: "https://i.imgur.com/hBb2Fh9.png",
  category: "Cignal", live: true,
  clearKey: {
    "07aa813bf2c147748046edd930f7736e": "3bd6688b8b44e96201e753224adfc8fb"
  }
},
{
  name: "TMC (Tagalized Movie Channel)",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tagalogmovie/default/index.mpd",
  logo: "https://i.imgur.com/550RYpJ.png",
  category: "Cignal", live: true,
  clearKey: {
    "96701d297d1241e492d41c397631d857": "ca2931211c1a261f082a3a2c4fd9f91b"
  }
},
{
  name: "Celestial Movies Pinoy",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/celmovie_pinoy_sd/default/index.mpd",
  logo: "https://i.imgur.com/e5IZsv3.png",
  category: "Cignal", live: true,
  clearKey: {
    "0f8537d8412b11edb8780242ac120002": "2ffd7230416150fd5196fd7ea71c36f3"
  }
},
{
  name: "Tap Movies",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_tapmovies_hd1/default/index.mpd",
  logo: "https://i.imgur.com/lVNcCFq.png",
  category: "Cignal", live: true,
  clearKey: {
    "71cbdf02b595468bb77398222e1ade09": "c3f2aa420b8908ab8761571c01899460"
  }
},
{
  name: "HBO",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohd/default/index.mpd",
  logo: "https://i.imgur.com/6uN52OW.png",
  category: "Cignal", live: true,
  clearKey: {
    "d47ebabf7a21430b83a8c4b82d9ef6b1": "54c213b2b5f885f1e0290ee4131d425b"
  }
},
{
  name: "HBO Hits",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbohits/default1/index.mpd",
  logo: "https://i.imgur.com/tGSLZWz.png",
  category: "Cignal", live: true,
  clearKey: {
    "b04ae8017b5b4601a5a0c9060f6d5b7d": "a8795f3bdb8a4778b7e888ee484cc7a1"
  }
},
{
  name: "HBO Family",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbofam/default/index.mpd",
  logo: "https://i.imgur.com/SefoKAw.png",
  category: "Cignal", live: true,
  clearKey: {
    "872910c843294319800d85f9a0940607": "f79fd895b79c590708cf5e8b5c6263be"
  }
},
{
  name: "HBO Signature",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_hbosign/default/index.mpd",
  logo: "https://i.imgur.com/3L9QRDw.png",
  category: "Cignal", live: true,
  clearKey: {
    "a06ca6c275744151895762e0346380f5": "559da1b63eec77b5a942018f14d3f56f"
  }
},
{
  name: "HITS Movies",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_hitsmovies/default/index.mpd",
  logo: "https://i.imgur.com/xjyDTMr.png",
  category: "Cignal", live: true,
  clearKey: {
    "f56b57b32d7e4b2cb21748c0b56761a7": "3df06a89aa01b32655a77d93e09e266f"
  }
},
{
  name: "Tap Action Flix",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_tapactionflix_hd1/default/index.mpd",
  logo: "https://i.imgur.com/pjeTzag.png",
  category: "Cignal", live: true,
  clearKey: {
    "bee1066160c0424696d9bf99ca0645e3": "f5b72bf3b89b9848de5616f37de040b7"
  }
},
{
  name: "Cinemax",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cinemax/default/index.mpd",
  logo: "https://i.imgur.com/9LNJXe3.png",
  category: "Cignal", live: true,
  clearKey: {
    "b207c44332844523a3a3b0469e5652d7": "fe71aea346db08f8c6fbf0592209f955"
  }
},
{
  name: "NBA TV Philippines",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cgnl_nba/default/index.mpd",
  logo: "https://i.imgur.com/RcxNoIC.png",
  category: "Cignal", live: true,
  clearKey: {
    "c5e51f41ceac48709d0bdcd9c13a4d88": "20b91609967e472c27040716ef6a8b9a"
  }
},
{
  name: "PBA Rush",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_pbarush_hd1/default/index.mpd",
  logo: "https://i.imgur.com/Z7oMGiI.png",
  category: "Cignal", live: true,
  clearKey: {
    "76dc29dd87a244aeab9e8b7c5da1e5f3": "95b2f2ffd4e14073620506213b62ac82"
  }
},
{
  name: "One Sports HD",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesports_hd/default/index.mpd",
  logo: "https://i.imgur.com/imI97L2.png",
  category: "Cignal", live: true,
  clearKey: {
    "53c3bf2eba574f639aa21f2d4409ff11": "3de28411cf08a64ea935b9578f6d0edd"
  }
},
{
  name: "One Sports Plus",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_onesportsplus_hd1/default/index.mpd",
  logo: "https://i.imgur.com/RnDeKOj.png",
  category: "Cignal", live: true,
  clearKey: {
    "322d06e9326f4753a7ec0908030c13d8": "1e3e0ca32d421fbfec86feced0efefda"
  }
},
{
  name: "UAAP Varsity Channel",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_uaap_cplay_sd/default/index.mpd",
  logo: "https://i.imgur.com/POFK8tM.png",
  category: "Cignal", live: true,
  clearKey: {
    "95588338ee37423e99358a6d431324b9": "6e0f50a12f36599a55073868f814e81e"
  }
},
{
  name: "TAP Sports",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tapsports/default/index.mpd",
  logo: "https://i.imgur.com/HWbSPI9.png",
  category: "Cignal", live: true,
  clearKey: {
    "eabd2d95c89e42f2b0b0b40ce4179ea0": "0e7e35a07e2c12822316c0dc4873903f"
  }
},
{
  name: "Premier Sports",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_ps_hd1/default/index.mpd",
  logo: "https://i.imgur.com/GTfUEnU.png",
  category: "Cignal", live: true,
  clearKey: {
    "b8b595299fdf41c1a3481fddeb0b55e4": "cd2b4ad0eb286239a4a022e6ca5fd007"
  }
},
{
  name: "Premier Sports 2",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/premiersports2hd/default/index.mpd",
  logo: "https://i.imgur.com/OWVR172.png",
  category: "Cignal", live: true,
  clearKey: {
    "59454adb530b4e0784eae62735f9d850": "61100d0b8c4dd13e4eb8b4851ba192cc"
  }
},
{
  name: "SpoTV HD",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_spotvhd/default/index.mpd",
  logo: "https://i.imgur.com/QExPfsT.png",
  category: "Cignal", live: true,
  clearKey: {
    "ec7ee27d83764e4b845c48cca31c8eef": "9c0e4191203fccb0fde34ee29999129e"
  }
},
{
  name: "SpoTV 2 HD",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_spotv2hd/default/index.mpd",
  logo: "https://i.imgur.com/7mY1Zxg.png",
  category: "Cignal", live: true,
  clearKey: {
    "7eea72d6075245a99ee3255603d58853": "6848ef60575579bf4d415db1032153ed"
  }
},
{
  name: "Animax",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animax_sd_new/default/index.mpd",
  logo: "https://i.imgur.com/5gJTEHT.png",
  category: "Cignal", live: true,
  clearKey: {
    "92032b0e41a543fb9830751273b8debd": "03f8b65e2af785b10d6634735dbe6c11"
  }
},
{
  name: "DreamWorks HD",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworks_hd1/default/index.mpd",
  logo: "https://i.imgur.com/bzTr9Y2.png",
  category: "Cignal", live: true,
  clearKey: {
    "4ab9645a2a0a47edbd65e8479c2b9669": "8cb209f1828431ce9b50b593d1f44079"
  }
},
{
  name: "DreamWorks Tagalog",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_dreamworktag/default/index.mpd",
  logo: "https://i.imgur.com/bzTr9Y2.png",
  category: "Cignal", live: true,
  clearKey: {
    "564b3b1c781043c19242c66e348699c5": "d3ad27d7fe1f14fb1a2cd5688549fbab"
  }
},
{
  name: "Moonbug Kids",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_moonbug_kids_sd/default/index.mpd",
  logo: "https://i.imgur.com/ILaPSzA.png",
  category: "Cignal", live: true,
  clearKey: {
    "0bf00921bec94a65a124fba1ef52b1cd": "0f1488487cbe05e2badc3db53ae0f29f"
  }
},
{
  name: "Cartoon Network (Cignal)",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cartoonnetworkhd/default/index.mpd",
  logo: "https://poster.starhubgo.com/Linear_channels2/316_1920x1080_HTV.png",
  category: "Cignal", live: true,
  clearKey: {
    "a2d1f552ff9541558b3296b5a932136b": "cdd48fa884dc0c3a3f85aeebca13d444"
  }
},
{
  name: "Nickelodeon",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickelodeon/default/index.mpd",
  logo: "https://i.imgur.com/4o5dNZA.png",
  category: "Cignal", live: true,
  clearKey: {
    "9ce58f37576b416381b6514a809bfd8b": "f0fbb758cdeeaddfa3eae538856b4d72"
  }
},
{
  name: "Nick Jr",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_nickjr/default/index.mpd",
  logo: "https://i.imgur.com/iIVYdZP.png",
  category: "Cignal", live: true,
  clearKey: {
    "bab5c11178b646749fbae87962bf5113": "0ac679aad3b9d619ac39ad634ec76bc8"
  }
},
  {
  name: "PTV",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_ptv4_sd/default/index.mpd",
  logo: "https://i.imgur.com/jRvEV4E.png",
  category: "Cignal", live: true,
  clearKey: {
    "71a130a851b9484bb47141c8966fb4a3": "ad1f003b4f0b31b75ea4593844435600"
  }
},
{
  name: "RPTV",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cnn_rptv_prod_hd/default/index.mpd",
  logo: "https://cms.cignal.tv/Upload/Thumbnails/rptv%20logo%20final-02.png",
  category: "Cignal", live: true,
  clearKey: {
    "1917f4caf2364e6d9b1507326a85ead6": "a1340a251a5aa63a9b0ea5d9d7f67595"
  }
},
{
  name: "Bilyonaryo Channel",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bilyonaryoch/default1/index.mpd",
  logo: "https://i.imgur.com/FxHmXYU.png",
  category: "Cignal", live: true,
  clearKey: {
    "227ffaf09bec4a889e0e0988704d52a2": "b2d0dce5c486891997c1c92ddaca2cd2"
  }
},
{
  name: "CNN International",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_cnnhd/default/index.mpd",
  logo: "http://115.146.176.131:80/images/2acf9495fde07739914e7a7bb3ffee94.png",
  category: "Cignal", live: true,
  clearKey: {
    "900c43f0e02742dd854148b7a75abbec": "da315cca7f2902b4de23199718ed7e90"
  }
},
{
  name: "BBC World News",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/bbcworld_news_sd/default/index.mpd",
  logo: "https://i.imgur.com/CTf7nGs.png",
  category: "Cignal", live: true,
  clearKey: {
    "f59650be475e4c34a844d4e2062f71f3": "119639e849ddee96c4cec2f2b6b09b40"
  }
},
{
  name: "Bloomberg",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/bloomberg_sd/default/index.mpd",
  logo: "https://i.imgur.com/2WGEb3V.png",
  category: "Cignal", live: true,
  clearKey: {
    "ef7d9dcfb99b406cb79fb9f675cba426": "b24094f6ca136af25600e44df5987af4"
  }
},
{
  name: "ABC Australia",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/abc_aus/default/index.mpd",
  logo: "https://i.imgur.com/SHwfqzO.png",
  category: "Cignal", live: true,
  clearKey: {
    "389497f9f8584a57b234e27e430e04b7": "3b85594c7f88604adf004e45c03511c0"
  }
},
{
  name: "CCTV-4",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_cctv4/default/index.mpd",
  logo: "https://i.imgur.com/TuwJPPz.png",
  category: "Cignal", live: true,
  clearKey: {
    "b83566836c0d4216b7107bd7b8399366": "32d50635bfd05fbf8189a0e3f6c8db09"
  }
},
{
  name: "France 24",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/france24/default/index.mpd",
  logo: "https://i.imgur.com/d8doNpe.png",
  category: "Cignal", live: true,
  clearKey: {
    "257f9fdeb39d41bdb226c2ae1fbdaeb6": "e80ead0f4f9d6038ab34f332713ceaa5"
  }
},
{
  name: "TV5 Monde",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_tv5_monde/default/index.mpd",
  logo: "https://qp-pldt-image-resizer-cloud-prod.akamaized.net/image/E55ADB5E-C9E1-11EC-9D64-0242AC120002/0-16x9.jpg?width=1980",
  category: "Cignal", live: true,
  clearKey: {
    "fba5a720b4a541b286552899ba86e38b": "f63fa50423148bfcbaa58c91dfcffd0e"
  }
},
{
  name: "One News",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/onenews_hd1/default/index.mpd",
  logo: "https://i.imgur.com/25PG6TF.png",
  category: "Cignal", live: true,
  clearKey: {
    "d39eb201ae494a0b98583df4d110e8dd": "6797066880d344422abd3f5eda41f45f"
  }
},
{
  name: "Lifetime",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_lifetime/default/index.mpd",
  logo: "https://i.imgur.com/ZyqbNXn.png",
  category: "Cignal", live: true,
  clearKey: {
    "cf861d26e7834166807c324d57df5119": "64a81e30f6e5b7547e3516bbf8c647d0"
  }
},
{
  name: "Asian Food Network",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/asianfoodnetwork_sd/default/index.mpd",
  logo: "https://i.imgur.com/PUe61Ov.png",
  category: "Cignal", live: true,
  clearKey: {
    "1619db30b9ed42019abb760a0a3b5e7f": "5921e47fb290ae263291b851c0b4b6e4"
  }
},
{
  name: "Food Network",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/cg_foodnetwork_hd1/default/index.mpd",
  logo: "https://i.imgur.com/FZBze3z.png",
  category: "Cignal", live: true,
  clearKey: {
    "b7299ea0af8945479cd2f287ee7d530e": "b8ae7679cf18e7261303313b18ba7a14"
  }
},
{
  name: "HGTV",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/hgtv_hd1/default/index.mpd",
  logo: "https://i.imgur.com/a6gRxAV.png",
  category: "Cignal", live: true,
  clearKey: {
    "f0e3ab943318471abc8b47027f384f5a": "13802a79b19cc3485d2257165a7ef62a"
  }
},
{
  name: "Fashion TV",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/fashiontvhd/default/index.mpd",
  logo: "https://i.imgur.com/lb9cHrS.png",
  category: "Cignal", live: true,
  clearKey: {
    "971ebbe2d887476398e97c37e0c5c591": "472aa631b1e671070a4bf198f43da0c7"
  }
},
{
  name: "Travel Channel",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/travel_channel_sd/default/index.mpd",
  logo: "https://i.imgur.com/8ukGHjv.png",
  category: "Cignal", live: true,
  clearKey: {
    "f3047fc13d454dacb6db4207ee79d3d3": "bdbd38748f51fc26932e96c9a2020839"
  }
},
{
  name: "History HD",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/dr_historyhd/default/index.mpd",
  logo: "https://i.imgur.com/oJQJyhb.png",
  category: "Cignal", live: true,
  clearKey: {
    "a7724b7ca2604c33bb2e963a0319968a": "6f97e3e2eb2bade626e0281ec01d3675"
  }
},
{
  name: "Crime & Investigation",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/crime_invest/default/index.mpd",
  logo: "https://i.imgur.com/9QBOVGF.png",
  category: "Cignal", live: true,
  clearKey: {
    "21e2843b561c4248b8ea487986a16d33": "db6bb638ccdfc1ad1a3e98d728486801"
  }
},
{
  name: "Discovery Channel",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/discovery/default/index.mpd",
  logo: "https://i.imgur.com/XsvAk5H.png",
  category: "Cignal", live: true,
  clearKey: {
    "d9ac48f5131641a789328257e778ad3a": "b6e67c37239901980c6e37e0607ceee6"
  }
},
{
  name: "Animal Planet",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_animal_planet_sd/default/index.mpd",
  logo: "https://i.imgur.com/SkpFpW4.png",
  category: "Cignal", live: true,
  clearKey: {
    "436b69f987924fcbbc06d40a69c2799a": "c63d5b0d7e52335b61aeba4f6537d54d"
  }
},
{
  name: "BBC Earth",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/cg_bbcearth_hd1/default/index.mpd",
  logo: "https://i.imgur.com/vip1JIz.png",
  category: "Cignal", live: true,
  clearKey: {
    "34ce95b60c424e169619816c5181aded": "0e2a2117d705613542618f58bf26fc8e"
  }
},
{
  name: "TV Maria",
  type: "dash",
  url: "https://qp-pldt-live-bpk-01-prod.akamaized.net/bpk-tv/tvmaria_prd/default/index.mpd",
  logo: "https://i.imgur.com/8rLJW8s.png",
  category: "Cignal", live: true,
  clearKey: {
    "fa3998b9a4de40659725ebc5151250d6": "998f1294b122bbf1a96c1ddc0cbb229f"
  }
},
{
  name: "DepEd Channel",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/depedch_sd/default/index.mpd",
  logo: "https://i.imgur.com/Ii7tRrE.png",
  category: "Cignal", live: true,
  clearKey: {
    "0f853706412b11edb8780242ac120002": "2157d6529d80a760f60a8b5350dbc4df"
  }
},
{
  name: "Knowledge Channel",
  type: "dash",
  url: "https://qp-pldt-live-bpk-02-prod.akamaized.net/bpk-tv/knowledge_channel/default/index.mpd",
  logo: "https://i.imgur.com/4O93eBO.png",
  category: "Cignal", live: true,
  clearKey: {
    "0f856fa0412b11edb8780242ac120002": "783374273ef97ad3bc992c1d63e091e7"
  }
  },
    {
    name: "tvN Movies",
    logo: "https://i.imgur.com/c4XvwO2.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: {
      "8e269c8aa32ad77eb83068312343d610": "d12ccebafbba2a535d88a3087f884252"
    }
},
    {
    name: "One",
    logo: "https://i.pinimg.com/736x/68/62/cd/6862cd5ce275ab4faaa8630f25f89860.jpg",
    url: "https://cors-proxy.elfsight.dev/http://linearjitp-playback.astro.com.my/dash-wv/linear/2702/default_ott.mpd",
    type: "dash",
    category: "World TV",
    clearKey: {
      "d8fe398c79065173fa9788f226056510": "45e77e6a8ba767b63cacfdb01ef2ac29"
    }
  },
  {
    name: "tvN Premium",
    logo: "https://i.imgur.com/eE9IBhJ.png",
    url: "http://linearjitp-playback.astro.com.my/dash-wv/linear/1001/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "faf4d62bb898de503446c28fb1aa9210": "19e80ecc5d337215c64004cb49c9cb01" }
  },
  {
    name: "Kplus",
    logo: "https://i.imgur.com/Nd9gqA2.png",
    url: "http://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "aa48b28bd723f91214887df6ed9fad10": "b5a3a800848120c843ae0fa68c09c261" }
  },
  {
    name: "KBS World",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrxyZu1bPiJ3SdGvhVf3d3Muj5AqQ7ZkGpw&s",
    url: "http://linearjitp-playback.astro.com.my/dash-wv/linear/2306/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "692950d39869c92af9a9ddea453c0d10": "eadc626ab959255f7ab881c03d306fe2" }
  },
  {
    name: "Hits",
    logo: "https://i.imgur.com/YeqyD9W.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/606/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "1fe92685a75944dc54c9dac124802510": "36cb2063bf5338d18d31657371b15817" }
  },
  {
    name: "AXN HD",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/131_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2303/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "c24a7811d9ab46b48b46a839f89a1210": "c321afe1689b07d5bde55bd4097120f3" }
  },
  {
    name: "HITS Movies",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/391_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2305/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "ff1fe1d7018d0dd711601e795e0d6210": "38fbee3a56e40ff92c9df8acbca7bd86" }
  },
  {
    name: "Astro BOO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Astro_Boo_%282024%29.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2407/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "ea4d51ade01bbf3960e0de973051ba10": "f3266bec607f25879f48640f30f1c888" }
  },
  {
    name: "HBO Hits",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/449_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5055/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "5d600eb70944d681c26c1f48fbe61f10": "796139ba05a2ab425f978c7fd98b4372" }
  },
  {
    name: "HBO Family",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/450_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5053/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "2b9ff7cc1a3dc9fef47cc5773472d510": "7e37588e893ab9252e505bd6dda35beb" }
  },
  {
    name: "Cinemax",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/337_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/603/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "ef9b2a8d39151cc39f4b51d761b3e704": "13cc535ad4a73201147863cac386cdd3" }
  },
  {
    name: "Celestial Movies",
    logo: "https://i.imgur.com/Mb5ssnu.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/506/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "c5c1ba26907291afec11a9a78d513410": "361197805d0149c29801946cf2dde67c" }
  },
  {
    name: "Discovery Channel",
    logo: "https://cantseeus.com/wp-content/uploads/2023/10/discov.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2510/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "276767a578aae2eacb284247ccd9eb10": "03ef88df1a47669e5459e105e3b535b1" }
  },
  {
    name: "Discovery Asia",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Discovery-asia.png/220px-Discovery-asia.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/501/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "3ff02fc980c2e3230c52ae70fe903410": "c3a58ec867cc25829e1fbe893844254c" }
  },
  {
    name: "History",
    logo: "https://cantseeus.com/wp-content/uploads/2023/10/History_28201529.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/604/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "3feecc36930732cbb69306dc687c6f10": "3458265f7530bf1fef204ca8cb4689db" }
  },
  {
    name: "Crime & Investigation",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/369_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2111/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "22fc6faf47ae3b6322bc244206bbb910": "db1ee2e2652e46aac65049ef3e493787" }
  },
  {
    name: "BBC Earth",
    logo: "https://imgur.com/QMB9sFW.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5051/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "d3f62ff0804bc5b8d523ef009d786310": "bb1bdb27cc5fe1ec637d257999344cc3" }
  },
  {
    name: "BBC Lifestyle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/BBC_Lifestyle2.svg/1200px-BBC_Lifestyle2.svg.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5050/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "f429292dc744f284355308561577ac10": "b12e1f894129c517dc8845baaeebec8a" }
  },
  {
    name: "Love Nature",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/483_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5096/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "16bf5815468639fe4528b4bf0141f310": "775a654c06108046b4088c9a68888d9" }
  },
  {
    name: "Global Trekker",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/482_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5094/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "92d34a84fae8e54de0a829629941be10": "2fb39ab3f55333d5fa3e830ebf99ec16" }
  },
  {
    name: "HGTV",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/198_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2502/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "8c1bb309957bb8ca08390abebe198410": "2a695b046e7cf5811a634d1348446594" }
  },
  {
    name: "TLC",
    logo: "https://logo.iptveditor.com/tlc.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2709/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "942ec156203b2aca1ddf3498f663c111": "7f9d6c69698ddefcb74553436cac7260" }
  },
  {
    name: "Lifetime",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Lifetime_2020.svg/2560px-Logo_Lifetime_2020.svg.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5052/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "8de11e005db5bd0db8228814863cd310": "1833beaf a4c82e68f74c4244d54906b0".replace(/ /g,"") }
  },
  {
    name: "Asian Food Network",
    logo: "https://i.imgur.com/O5jBcL2.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/500/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "346b9f41e2933748c8861f82932e0110": "cf0cffb637b81598a27bd6b0d90d65a8" }
  },
  {
    name: "MTV Live",
    logo: "https://static.epg.best/il/MTV.il.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5014/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "3ac2542a4f7be746633db07647451710": "22f964a6d6927ccdba482e775cdf f190".replace(/ /g,"") }
  },
  {
    name: "HITS Now",
    logo: "https://aqfadtv.xyz/logos/HITSNow.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5110/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKeyUrl: "https://ck-server.danng.me/?username=HishamKamarul&channelid=5110"
  },
  {
    name: "Moonbug",
    logo: "https://aqfadtv.xyz/logos/Moonbug.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5067/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKeyUrl: "https://ck-dash-mpd.aqfadtv.xyz/dash-ck/linear/5067"
  },
  {
    name: "Cartoon Network",
    logo: "https://poster.starhubgo.com/Linear_channels2/316_1920x1080_HTV.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/509/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKeyUrl: "https://ck-dash-mpd.aqfadtv.xyz/dash-ck/linear/509"
  },
  {
    name: "BBC World News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/BBC_World_News_2022_%28Boxed%29.svg/2048px-BBC_World_News_2022_%28Boxed%29.svg.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/1008/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "01767d1c2315c0e9556f477fb1f0c710": "77ec0eeb21c07812fd7c58628366ccb3" }
  },
  {
    name: "Channel News Asia",
    logo: "https://i.imgur.com/vm9Z0uV.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/605/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "f812aeae6bb924a8181b512d5d79": "44275884ee394d42081f9e395ff6e415" }
  },
  {
    name: "CNN",
    logo: "http://115.146.176.131:80/images/2acf9495fde07739914e7a7bb3ffee94.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2503/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "1b618a2919cce3912e5111dddfc4fd9b": "bf7e1b97555c4acb7455f711b2a9ff16" }
  },
  {
    name: "Al Jazeera",
    logo: "https://1000logos.net/wp-content/uploads/2023/01/Al-Jazeera-Logo.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/2110/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "b1fb d0874e7923f5b05929 810aa8184": "6c3c498113abffdf454dc935319a79d4".replace(/ /g,"") }
  },
  {
    name: "Adult Swim",
    logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/refs/heads/main/countries/canada/adult-swim-ca.png",
    url: "https://a116aivottlinear-a.akamaihd.net/.../cenc.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "cc26110bb0d29d0e4452d42602846080": "4a2e5782e26a3e2d7dd0431205c14518" }
  },
  {
    name: "Disney Channel",
    logo: "http://apkip.tv/logos/Canada/DisneyChannel.ca.png",
    url: "https://a77aivottepl-a.akamaihd.net/.../cenc.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "be9caaa813c5305e761c66ac63645901": "3d40f2990ec5362ca5be3a3c9bb8f8b4" }
  },
  {
    name: "WWE Network",
    logo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a77021bb-a973-4a9b-8902-47e05787b08f/d8txzp1-3f32b570-9b7f-437d-ad29-2df8cdbf554c.png",
    url: "https://cfrt.stream.peacocktv.com/.../master.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "00208c93f4358213b52220898b962385": "8ae6063167228e350dd132d4a1573102" }
  },
  {
    name: "W-Sport",
    logo: "https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/503_144.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5060/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "010cbb9cf1a01ead38070730d3 89c710": "9cd5c0d1e54c22e035d88dd8ddf2134c".replace(/ /g,"") }
  },
  {
    name: "Crave 1",
    logo: "https://the-bithub.com/crave1",
    url: "https://live-crave.video.9c9media.com/.../crave1/manifest.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "4a107945066f45a9af2c32ea88be60f4": "df97e849d68479ec16e395feda7627d0" }
  },
  {
    name: "Crave 2",
    logo: "https://the-bithub.com/crave",
    url: "https://live-crave.video.9c9media.com/.../crave2/manifest.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "4ac6eaaf0e5e4f94987cbb5b243b54e8": "8bb3f2f421f6afd025fa46c784944ad6" }
  },
  {
    name: "Warner TV",
    logo: "https://tse2.mm.bing.net/th/id/OIP.7d6tiaMYWpWIGI6iAN47zAHaG3",
    url: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "4503cf86bca3494ab95a77ed913619a0": "afc9c8f627fb3fb255dee8e3b0fe1d71" }
  },
  {
    name: "MTV",
    logo: "https://tse3.mm.bing.net/th/id/OIP.lMLVpSGutDFitqvokkgp6AHaHT",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/5014/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "3ac2542a4f7be746633db07647451710": "22f964a6d6927ccdba482e775cdff190" }
  },
  {
    name: "Amazon Movies",
    logo: "https://the-bithub.com/amznmovies",
    url: "https://abbfefcaaaaaaaamd5xd44ij4vbyj.a17d0dfbc05b48999f461f3f6cff0eb6.emt.cf.ww.aiv-cdn.net/.../cenc.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "3e429eb91a1791d55df2a554dc58dda7": "2f688f94ef580a61eada6932598137e4" }
  },
  {
    name: "iQIYI",
    logo: "https://i.imgur.com/E63wJx9.png",
    url: "https://linearjitp-playback.astro.com.my/dash-wv/linear/1006/default_ott.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "7ef7e913ce85a1131b27036069169a10": "77d98ed71db7524c27875a09a975f9e6" }
  },
    {
  name: "GOLDEN TV",
  logo: "https://static.wikia.nocookie.net/logopedia/images/c/cc/Golden_LA_%282020%29.png",
  url: "http://live-atv-cdn.izzigo.tv/4/out/u/dash/GOLDEN-MULTIPLEX/manifest.mpd",
  type: "dash",
  group: "World TV",
  clearKey: { "f23601997bc024ea96b6b9d1e2b8b3fc": "521a2cfdd3f649a9543422dc41fa4ca0" }
      },
  {
    name: "Syfy East",
    logo: "https://static.wikia.nocookie.net/tv-philippines/images/c/c9/Syfy.png",
    url: "http://212.102.60.10/SYFY/index.m3u8",
    type: "hls",
    group: "World TV"
  },
  {
    name: "Sundance TV East",
    logo: "https://www.directhd.tv/wp-content/uploads/2018/09/sundance-tv.jpg",
    url: "http://212.102.60.10/SUNDANCE/index.m3u8",
    type: "hls",
    group: "World TV"
  },
  {
    name: "Starz Encore Action East",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVD8N4I_8GnW8WpD-bplQMFYTE4l9ubGA1QA&s",
    url: "http://212.102.60.10/STARZ_ENCORE_ACTION/index.m3u8",
    type: "hls",
    group: "World TV"
  },
  {
    name: "Sony Movies",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDVgr1_NsLMd-tRFReibc4xyOUBin19lr6w&s",
    url: "https://a-cdn.klowdtv.com/live1/smc_720p/playlist.m3u8",
    type: "hls",
    group: "World TV"
  },
  {
    name: "GOLDEN TV",
    logo: "https://static.wikia.nocookie.net/logopedia/images/c/cc/Golden_LA_%282020%29.png",
    url: "http://live-atv-cdn.izzigo.tv/4/out/u/dash/GOLDEN-MULTIPLEX/manifest.mpd",
    type: "dash",
    group: "World TV",
    clearKey: { "f23601997bc024ea96b6b9d1e2b8b3fc": "521a2cfdd3f649a9543422dc41fa4ca0" }
  },
];
