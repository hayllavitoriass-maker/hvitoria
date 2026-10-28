# Shamones Squad no X: pesquisa de tweets virais sobre Michael Jackson e plano de conteúdo

Pesquisa feita em 28/10/2026. As métricas são um retrato desse dia, porque curtidas e visualizações continuam subindo depois.

---

## PARTE 1: RESUMO DA PESQUISA

**Como a coleta foi feita.** A busca avançada do X (com `min_faves:`, `lang:`, `filter:videos`) só funciona logada, e este ambiente não tem uma conta do X. Por isso usei dois caminhos legítimos, e todos os números da tabela vieram da API pública do FxTwitter, que lê os dados do próprio X:

1. **Leitura das timelines** de 17 perfis: as contas oficiais (@michaeljackson e @michaelmovie), fã-clubes e contas de fã em inglês e português (@MJJCommunity, @MJJNews, @TheMJCast, @mjBeats, @iamveronica777, @copymj, @MJOnlineTeam, @mjvibe) e contas de cultura pop e música (@PopBase, @PopCrave, @chartdata, @historyinmemes, @HugoGloss, @tracklist, @gossipdodia, @choquei, @poptime). Nas contas de cultura pop, guardei só os posts sobre Michael.
2. **Tweets citados pela imprensa.** Juntei os links de tweets embutidos em reportagens sobre viralizações de MJ (Yardbarker, LADbible, Revolt, Kiss Richmond, Pinkvilla, Variety India, Complex, La Razón e outros) e conferi cada um na API.

**Números**
- 4.165 tweets únicos coletados, todos com métricas verificadas (curtidas, reposts, respostas, citações e, desde 2022, visualizações).
- 81 deles vieram de reportagens e foram conferidos um a um.
- 58 entraram no banco final (Parte 2). Escolhi pelo desempenho e pela variedade de formato e idioma.

**Períodos cobertos**
- **Últimos 30 dias:** relançamento de Invincible, a foto rara da Bahia, os rankings da @chartdata, Buenos Aires 1993.
- **Últimos 90 dias:** aniversário de 68 anos, VMA 1995, a marca de US$ 1 bilhão, Off the Wall Day.
- **Últimos 12 meses:** trailer, estreia e recordes do filme "Michael", com a onda de memes de abril e maio de 2026.
- **Histórico:** Super Bowl 1993 (repostado em 2025), a voz grave de 1997 (post de 2023), o anúncio do Jaafar (2023), o "tweet do além" (2019) e a thread da camisa vermelha (2017).

**Formatos que se destacaram**
- **Vídeo curto de performance com uma frase de bastidor:** Super Bowl, 195 mil curtidas.
- **Vídeo que quebra a imagem pública:** a voz grave, 24 milhões de views.
- **Meme de reação ao filme:** foto ou GIF com legenda curta, de 15 a 40 mil curtidas, vindo de contas pequenas.
- **Opinião curta e combativa:** "não escutem os críticos".
- **Listas e rankings:** muitas citações.
- **Pergunta simples com imagem:** muitas respostas.

**Limitações**
- **Pesquisa por palavra-chave e operadores:** não foi possível usar a busca nativa do X nem filtrar por `min_faves`.
- **Profundidade das timelines:** a API mostra só os cerca de 880 posts mais recentes de cada perfil. Nas contas de pop que postam muito, como PopCrave e choquei, isso cobre poucas semanas.
- **Posts antigos:** antes de 2022 o X não mostrava visualizações, então aparece "n/d".
- **Espanhol:** encontrei pouco material verificável.
- **Português:** não achei nenhum perfil brasileiro de humor sobre MJ com números grandes. Isso é uma limitação da pesquisa, mas também uma oportunidade (Parte 8).
- **Escopo do ranking:** a Parte 2 traz os maiores resultados verificáveis dentro desta coleta, não "os tweets mais virais da história do X".

---

## PARTE 2: BANCO DE TWEETS VIRAIS REAIS

Ordenado por curtidas, a única métrica disponível para todos os tweets. As colunas de visualizações e o motivo ajudam a ler o engajamento proporcional. Os textos originais estão reproduzidos sem alteração e cortados quando são longos.

| Ranking | Autor | Tweet original | Link | Data | Curtidas | Reposts | Visualizações | Motivo da viralização |
|---|---|---|---|---|---|---|---|---|
| 1 | @michaeljackson | MICHAEL - in theaters April 24, 2026 #MichaelMovie | [abrir](https://x.com/michaeljackson/status/1986433491240640909) | 06/11/2025 | 265.728 | 60.135 | 53.296.885 | Primeiro trailer do filme. Evento global, vídeo nativo, conta oficial com 2 mi de seguidores |
| 2 | @iamveronica777 | The director of the Super Bowl was freaking out, not knowing Michael Jackson was gonna take his time to remove his glasses which was the cue to sta... | [abrir](https://x.com/iamveronica777/status/1888634597312987385) | 09/02/2025 | 195.110 | 22.279 | 15.895.325 | Vídeo do Super Bowl 1993 + bastidor narrado ("o diretor surtando"). Aura, controle de palco, frase final de bordão |
| 3 | @michaeljackson | #MichaelMovie | [abrir](https://x.com/michaeljackson/status/1986430957499367752) | 06/11/2025 | 156.129 | 26.203 | 6.107.107 | Imagem inédita do filme no dia do trailer. Novidade visual pura, zero texto |
| 4 | @michaelmovie | MICHAEL - in theaters April 24, 2026. | [abrir](https://x.com/michaelmovie/status/1986433465722843492) | 06/11/2025 | 106.112 | 19.517 | 35.060.465 | Trailer no perfil do filme. Alcance enorme, engajamento proporcional baixo (público passivo) |
| 5 | @historyinmemes | Michael Jackson uses his natural deep voice during a concert in 1997 | [abrir](https://x.com/historyinmemes/status/1736093608539750466) | 16/12/2023 | 105.601 | 7.073 | 24.439.446 | Contraste: a voz grave real de MJ quebra a imagem pública. Funciona fora da bolha, gera "eu não sabia" |
| 6 | @michaeljackson | Wishing everyone a happy and healthy New Year! | [abrir](https://x.com/michaeljackson/status/1212056529597337600) | 31/12/2019 | 87.673 | 14.118 | n/d | Post de Ano Novo da conta oficial lido como "MJ tuitando do além". Viralizou pelo estranhamento |
| 7 | @michaeljackson | His story begins….. #MichaelMovie | [abrir](https://x.com/michaeljackson/status/2018007288779317500) | 01/02/2026 | 68.555 | 11.137 | 2.299.154 | Primeiro pôster/imagem oficial do filme. Novidade + ansiedade coletiva |
| 8 | @JaafarJackson | I’m humbled and honored to bring my Uncle Michael’s story to life. To all the fans all over the world, I’ll see you soon.    Photo by Jourdynn Jack... | [abrir](https://x.com/JaafarJackson/status/1620106791576272896) | 30/01/2023 | 65.956 | 8.458 | 18.914.161 | Anúncio de elenco feito pelo próprio Jaafar. Notícia em primeira pessoa + emoção familiar |
| 9 | @tjjackson | Don’t ever listen to “professional” critics when it comes to my family. Ever. | [abrir](https://x.com/tjjackson/status/2047427127637926264) | 23/04/2026 | 42.198 | 4.577 | 1.951.503 | Opinião curta e combativa da família contra a crítica. Fãs repostam para "assinar embaixo" |
| 10 | @Sparklycl | IM HOWLIN not the nuns?!?!??? 😭😭 | [abrir](https://x.com/Sparklycl/status/2048796660713591126) | 27/04/2026 | 39.574 | 4.696 | 2.394.881 | Reação humorística a um meme do filme (as freiras). Caixa alta, choro-riso, identificação |
| 11 | @ofanotherl9ver | video comparison of the new MJ biopic, their dedication and accuracy to nailing down the costumes, dance moves, and cinematography is deeply admira... | [abrir](https://x.com/ofanotherl9ver/status/1986464217730588781) | 06/11/2025 | 39.057 | 7.889 | 2.175.414 | Comparação lado a lado filme x original. Formato "prova visual", incentiva compartilhamento |
| 12 | @_romeko | I just knew yall were gonna play in dem people’s theaters 🤣🤣🤣 #MichaelMovie | [abrir](https://x.com/_romeko/status/2048241005531430935) | 26/04/2026 | 31.257 | 3.994 | 506.579 | Humor sobre fãs dançando nas salas de cinema. Comportamento coletivo real virando piada |
| 13 | @tajjackson3 | Sorry media, u don’t get to control the narrative anymore of who Michael Jackson truly was. The public gets to watch this movie…they will decide fo... | [abrir](https://x.com/tajjackson3/status/2046629271989559659) | 21/04/2026 | 29.994 | 5.524 | 1.583.034 | Defesa do legado contra a mídia, tom de manifesto. Engajamento de fandom |
| 14 | @Aquariuskuntt1 | Michael was the master of rage baiting 💀💀💀💀 my cinema cackled so much especially at the bubbles scene! | [abrir](https://x.com/Aquariuskuntt1/status/2048118440267768195) | 25/04/2026 | 29.620 | 1.290 | 847.923 | Humor: "MJ mestre do rage bait" com cena do filme (Bubbles). Linguagem atual aplicada ao passado |
| 15 | @michaeljackson | Happy birthday to Michael Joseph Jackson. Thank you to all the fans who continue to support Michael’s legacy, his music and performances, and to th... | [abrir](https://x.com/michaeljackson/status/1961280146058428918) | 29/08/2025 | 29.468 | 7.201 | 684.851 | Aniversário de MJ na conta oficial. Data sazonal com alta taxa de engajamento (5,6%) |
| 16 | @michaelmovie | The #1 music biopic of all time. #MichaelMovie | [abrir](https://x.com/michaelmovie/status/2065549178378334558) | 12/06/2026 | 29.078 | 6.905 | 488.396 | Marco de bilheteria ("#1 music biopic"). Orgulho de fã, repost como celebração |
| 17 | @michaelmovie | 1 legend. 1 story. $1 billion at the box office.   To every fan who bought a ticket, sang along, dressed up, and returned to the big screen again a... | [abrir](https://x.com/michaelmovie/status/2076322110704947612) | 12/07/2026 | 28.004 | 9.000 | 920.088 | US$ 1 bi de bilheteria. Número redondo + agradecimento aos fãs |
| 18 | @RealEmirHan | Michael Jackson watched Rush Hour 2 and immediately called Chris Tucker like:  “Stop kicking with the wrong leg—you’re making me look bad.” 😂  Chri... | [abrir](https://x.com/RealEmirHan/status/2048432335658398002) | 26/04/2026 | 25.297 | 2.764 | 887.380 | Bastidor engraçado (MJ e Chris Tucker) contado como esquete. Humor com celebridade fora da bolha |
| 19 | @copymj | Michael is rising up out his grave to give us a world tour???? | [abrir](https://x.com/copymj/status/2060182548525846729) | 29/05/2026 | 23.611 | 2.308 | 229.631 | Piada exagerada sobre o sucesso pós-filme ("ele vai levantar do túmulo pra turnê"). GIF + absurdo |
| 20 | @FearedBuck | A girl passed out while watching the Michael biopic | [abrir](https://x.com/FearedBuck/status/2048786022121509014) | 27/04/2026 | 22.069 | 1.711 | 10.061.727 | Vídeo de reação extrema numa sessão. 10 mi de views, mas só 0,3% de engajamento: viral de curiosidade |
| 21 | @juhlissuhh | Me, ignoring people’s negative reviews on #MichaelMovie cause I had a tiiime | [abrir](https://x.com/juhlissuhh/status/2047172110791893337) | 23/04/2026 | 21.825 | 4.583 | 304.686 | Meme "eu ignorando as críticas". Identificação imediata com quem gostou do filme |
| 22 | @iamveronica777 | MJ was supposed to make his comeback on July 13th. Today his biopic reached $1 BILLION. The universe found a way to keep his promise when he said, ... | [abrir](https://x.com/iamveronica777/status/2076261264410755419) | 12/07/2026 | 20.078 | 4.700 | 460.372 | Coincidência emocional ("See you in July" x US$ 1 bi em julho). Narrativa de destino, alto repost |
| 23 | @copymj | Oh this michael trend is so cute 😭😭 | [abrir](https://x.com/copymj/status/2056116120583561307) | 17/05/2026 | 17.881 | 1.680 | 261.123 | Trend fofa do TikTok trazida pro X. Conteúdo de outra rede com curadoria |
| 24 | @ogrukiat | #MichaelMovie but with no context 😭 | [abrir](https://x.com/ogrukiat/status/2048285833233416565) | 26/04/2026 | 16.818 | 1.902 | 225.027 | "Sem contexto": prints fora de contexto do filme. Formato clássico de meme do X |
| 25 | @Parzival_jay | Hearing Thriller and Human Nature in IMAX | [abrir](https://x.com/Parzival_jay/status/2048182071546314893) | 25/04/2026 | 15.562 | 2.282 | 253.241 | Sensação física de ouvir Thriller/Human Nature no IMAX. GIF de reação, identificação |
| 26 | @copymj | I’m crying you could tell juliano could feel jaafar being uncomfortable he looked up at him and then went 😐😁😁😁😁😁 | [abrir](https://x.com/copymj/status/2062793067933893105) | 05/06/2026 | 15.202 | 448 | 292.446 | Momento fofo/engraçado captado em vídeo de bastidor (Juliano e Jaafar). Observação de detalhe |
| 27 | @Cornerofthesky7 | This is why making a detailed Michael Jackson biopic will always be difficult. So many people in his life were major celebrities who may not want t... | [abrir](https://x.com/Cornerofthesky7/status/2047300263313059913) | 23/04/2026 | 14.007 | 1.291 | 1.218.776 | Análise curta sobre por que biografias de MJ são difíceis. Gera citações e debate |
| 28 | @michaeljackson | This week in 1983, 47 million television viewers got to see Michael Jackson’s signature moonwalk for the first time during Michael’s performance of... | [abrir](https://x.com/michaeljackson/status/2056404452937261146) | 18/05/2026 | 13.402 | 2.258 | 194.033 | Efeméride do Motown 25 (primeiro moonwalk). Data + número de audiência |
| 29 | @Zvbear | That Michael Jackson movie was so good wtf why did the critics lie like that 😂 | [abrir](https://x.com/Zvbear/status/2047450995462971538) | 23/04/2026 | 13.321 | 1.354 | 438.551 | Opinião simples e coloquial ("por que a crítica mentiu?"). Gera concordância em massa |
| 30 | @_ValTown_ | Hope Jaafar knows his life will never be the same after 2026 | [abrir](https://x.com/_ValTown_/status/1986474907736183289) | 06/11/2025 | 12.429 | 1.329 | 223.825 | Previsão curta sobre a vida de Jaafar. Texto de uma linha, fácil de repostar |
| 31 | @michaeljackson | Michael’s “Billie Jean” is No. 1 on the Billboard Global 200 chart making it the biggest song in the world.  This marks the first time Michael has ... | [abrir](https://x.com/michaeljackson/status/2056770387954770047) | 19/05/2026 | 12.348 | 2.200 | 187.143 | Recorde atual (Billie Jean nº1 no Global 200). Notícia de chart com orgulho de fã |
| 32 | @jonesvibesonly | We’ve legit lost the plot. I honestly have zero idea what people are looking for these days but there needs to be a major shift in criticism. The m... | [abrir](https://x.com/jonesvibesonly/status/2046597919659208988) | 21/04/2026 | 11.666 | 1.153 | 3.664.056 | Opinião longa contra a crítica. 3,6 mi de views e muitas respostas: debate |
| 33 | @michaeljackson | Happy Halloween! This zombie scene from “Thriller” was filmed in East Los Angeles, at Union Pacific Avenue and South Calzona Street. Did you know t... | [abrir](https://x.com/michaeljackson/status/1984289260980015236) | 31/10/2025 | 11.561 | 2.066 | 357.252 | Curiosidade de Halloween (local real da cena dos zumbis + mapas falsos). Data + "você sabia?" |
| 34 | @GVVAAN | AIN’T NO WAY. | [abrir](https://x.com/GVVAAN/status/934102722684641281) | 24/11/2017 | 11.058 | 5.325 | n/d | Thread "camisa vermelha" (2017): humor de legenda sobre fotos antigas. Formato série |
| 35 | @Nsukka_okpa | Just finished watching Michael.  This movie is the greatest biopic ever made. Don’t listen to the critics. Please go and see it for yourself.  I’m ... | [abrir](https://x.com/Nsukka_okpa/status/2046903724186960110) | 22/04/2026 | 10.874 | 1.544 | 272.427 | Recomendação apaixonada ("maior biopic já feita"). Opinião forte + foto |
| 36 | @legendarihhhh | joe jackson when he read that fax | [abrir](https://x.com/legendarihhhh/status/2048718479017336950) | 27/04/2026 | 10.525 | 1.318 | 125.147 | Meme de reação com o Joe Jackson do filme. Humor de personagem |
| 37 | @michaeljackson | Happy “Off The Wall” Day! On this date in 1979, the first album of Michael Jackson’s adult career was released. “Off The Wall” is the 1st album by ... | [abrir](https://x.com/michaeljackson/status/2086845026014011475) | 10/08/2026 | 9.567 | 2.261 | 151.494 | Efeméride Off the Wall com dado de recorde. Engajamento proporcional alto (8%) |
| 38 | @iamveronica777 | The fact that Michael Jackson took his kids to watch Up in 3D in June 2009 and actually loved the film means so much to me 🥹 | [abrir](https://x.com/iamveronica777/status/2081443227903967577) | 26/07/2026 | 9.335 | 607 | 145.931 | Detalhe humano e pouco conhecido. Nostalgia + ternura |
| 39 | @therealsupes | It’s perfect. Jaafar Jackson gives the performance to beat for the rest of the year. I can’t say enough about it. The voice, the dancing, the heart... | [abrir](https://x.com/therealsupes/status/2042712960817054106) | 10/04/2026 | 8.432 | 893 | 3.613.184 | Primeira crítica pós-sessão de imprensa. Autoridade + timing |
| 40 | @MJJCommunity | And they say why.... | [abrir](https://x.com/MJJCommunity/status/2055811283639791900) | 17/05/2026 | 7.945 | 669 | 200.934 | Vídeo de performance com legenda mínima e provocativa ("e ainda perguntam por quê") |
| 41 | @michaeljackson | On this date in 1993, Michael Jackson gave his first of three Dangerous Tour performances in Buenos Aires, Argentina – October 8, 10 and 12. It was... | [abrir](https://x.com/michaeljackson/status/2108225921878769737) | 08/10/2026 | 7.699 | 1.271 | 118.285 | Efeméride regional (Buenos Aires 1993). Fãs latinos se reconhecem |
| 42 | @chartdata | Billboard staff ranks the Best #VMAs Performances of All-Time:  #1 Madonna, “Vogue” (1990) #2 Michael Jackson, Medley (1995) #3 Bon Jovi, “Livin’ O... | [abrir](https://x.com/chartdata/status/2103240563445088754) | 24/09/2026 | 7.481 | 715 | 2.845.892 | Ranking da Billboard (MJ em 2º). Lista gera discordância e muitas citações (786) |
| 43 | @copymj | It’s so funny that rotten tomatoes tried to say this movie was flop | [abrir](https://x.com/copymj/status/2075604707330969726) | 10/07/2026 | 7.198 | 573 | 120.688 | Ironia sobre o Rotten Tomatoes. Texto curto, tom de vitória |
| 44 | @midnighhtlover | raw reaction of me seeing Jaafar in those striped pants during the victory tour | [abrir](https://x.com/midnighhtlover/status/2047695498837135579) | 24/04/2026 | 7.162 | 854 | 227.400 | Reação a figurino específico (calça listrada da Victory Tour). Detalhe que só fã nota |
| 45 | @MJJCommunity | Factssss!!! | [abrir](https://x.com/MJJCommunity/status/2049359305866940504) | 29/04/2026 | 7.014 | 1.499 | 68.535 | Imagem-argumento + "Factssss". Taxa de engajamento de 12,6% |
| 46 | @michaeljackson | This Halloween was Thriller's biggest streaming day ever. MJ becomes the first artist with a Top 10 hit in six decades (U.S.) and one of only two t... | [abrir](https://x.com/michaeljackson/status/1989740180824101085) | 15/11/2025 | 6.202 | 881 | 149.096 | Dado de streaming no Halloween. Prova que Thriller ressurge todo ano |
| 47 | @chartdata | Artists with the most weeks at #1 in Billboard 200 history:  #1 The Beatles 132 #2 Taylor Swift 100 #3 Elvis Presley 67 #4 Garth Brooks 52 #5 Micha... | [abrir](https://x.com/chartdata/status/2109358774834065598) | 11/10/2026 | 6.156 | 851 | 256.606 | Ranking de semanas em nº1. Debate de chart, alcance geral |
| 48 | @michaeljackson | On this date in 1995, Michael Jackson became an Internet pioneer, hosting an online chat for 25,000 fans, across three major online services. This ... | [abrir](https://x.com/michaeljackson/status/2089381748094246989) | 17/08/2026 | 6.077 | 965 | 106.086 | Curiosidade "MJ pioneiro da internet" (chat de 1995). Surpresa + tecnologia |
| 49 | @mjBeats | 🚨 Michael Jackson 'farmou aura' e redefiniu a TV VMA de 1995. Mas o que foi ao ar não era o plano original. 🤯  ​Antes da explosão de "Scream", o ro... | [abrir](https://x.com/mjBeats/status/2097002363290853541) | 07/09/2026 | 4.652 | 734 | 401.638 | PT-BR: bastidor inédito do VMA 1995 com gíria atual ("farmou aura"). 402 mil views |
| 50 | @chartdata | Today in 1972, Michael Jackson's "Ben" reached #1 on the Hot 100. | [abrir](https://x.com/chartdata/status/2110499744099307701) | 14/10/2026 | 3.834 | 491 | 93.170 | Efeméride de chart ("Ben" nº1). Curto, factual |
| 51 | @michaeljackson | On this date in 1983, Michael’s short film for “Billie Jean” debuted on MTV becoming the first music video by a Black artist put into heavy rotatio... | [abrir](https://x.com/michaeljackson/status/2031399681134153791) | 10/03/2026 | 3.277 | 743 | 60.500 | Efeméride de Billie Jean na MTV. História + impacto cultural |
| 52 | @mjBeats | 🚨 EM PRIMEIRA MÃO: revelada a imagem oficial do relançamento de “Invincible” em vinil! 💿✨ O disco chega às lojas em 16 de outubro. 👑  #MichaelJacks... | [abrir](https://x.com/mjBeats/status/2100725572817006788) | 17/09/2026 | 3.214 | 552 | 182.028 | PT-BR: imagem oficial do vinil de Invincible. Furo de notícia, 466 citações |
| 53 | @MJJCommunity | Your favourite era is? | [abrir](https://x.com/MJJCommunity/status/2017336456922923320) | 30/01/2026 | 3.104 | 239 | 52.045 | Pergunta "qual sua era favorita?" com foto. 146 respostas e 101 citações |
| 54 | @GVVAAN | DRY CLEANER:   “SORRY MR. JACKSON TRY STOPPING BY TOMORROW YOUR SHIRT SHOULD BE READY FOR PICK UP”   MJ:  “AAAAAAAHHHHHHHHHHHHHHH!” | [abrir](https://x.com/GVVAAN/status/941203993614782464) | 14/12/2017 | 2.962 | 539 | n/d | Diálogo inventado sobre foto real (camisa vermelha). Humor de legenda |
| 55 | @PabloPlanovsky | En países como USA, Brasil y Francia, el público se pone a bailar y cantar durante algunas funciones de Michael. Las salas llenas. Puede convertirs... | [abrir](https://x.com/PabloPlanovsky/status/2047488371916746984) | 24/04/2026 | 2.434 | 190 | 2.755.225 | ES: plateias dançando no cinema em vários países. 2,76 mi de views |
| 56 | @mjBeats | 👑🎬 Uma raridade! Michael Jackson e o coreógrafo Vincent Paterson ensaiam a coreografia de “Smooth Criminal”.   Um registro raro que revela, de pert... | [abrir](https://x.com/mjBeats/status/2104609581779349999) | 28/09/2026 | 1.247 | 183 | 17.379 | PT-BR: ensaio raro de Smooth Criminal. Vídeo de bastidor |
| 57 | @MJJCommunity | Rate this album? | [abrir](https://x.com/MJJCommunity/status/2024976978193858975) | 20/02/2026 | 1.190 | 63 | 54.658 | "Rate this album?" Pergunta simples com capa. 271 respostas |
| 58 | @mjBeats | 📸🇧🇷 Um registro raro dos bastidores de “They Don’t Care About Us”, durante as filmagens na Bahia, em 1996!   👑✨ Michael Jackson ao lado de Bira Jac... | [abrir](https://x.com/mjBeats/status/2112159330502074540) | 19/10/2026 | 853 | 115 | 7.658 | PT-BR: foto rara dos bastidores na Bahia (1996). Orgulho nacional |

**Engajamento proporcional, ou o que o ranking de curtidas esconde.** Calculei a taxa como (curtidas + reposts + respostas + citações) ÷ visualizações.
- **Muito alcance, pouca interação:** o vídeo da moça que desmaiou no cinema (@FearedBuck) teve 10 milhões de views e só 0,3% de engajamento. O trailer no perfil do filme ficou em 0,4%. É conteúdo que todo mundo vê e quase ninguém interage.
- **Os campeões proporcionais:**
  - @MJJCommunity "Factssss!!!": 12,6%
  - @michaeljackson no aniversário de 2026: 11,6%
  - @copymj "rising up out his grave": 11,3%
  - @michaelmovie "To Jaafar": 11,5%
  
  Todos são posts curtos, com imagem e uma emoção clara (orgulho, piada ou homenagem).

---

## PARTE 3: ANÁLISE DOS PADRÕES

### O que os dados sustentam

1. **Mídia vence texto puro nas contas de fã.** Mediana de engajamento nos últimos 12 meses:

   | Conta | Foto ou vídeo | Só texto |
   |---|---|---|
   | @iamveronica777 | 7,5% a 8,1% | 4,0% |
   | @MJJCommunity | 6,5% (foto) | 2,0% |
   | @mjBeats (PT-BR) | 5,4% (vídeo) e 4,2% (foto) | 2,2% |

   A exceção é a opinião curta e afiada. Os tweets de texto puro que viralizaram (@tjjackson, @Zvbear, @_ValTown_) têm menos de 15 palavras.
2. **"Você sabia?" supera a efeméride, e a efeméride supera a pergunta.** Na conta oficial, as medianas são 6,4%, 5,5% e 4,3%. Curiosidade com revelação engaja mais que data comemorativa, e pergunta genérica é o formato mais fraco.
3. **Vídeo que mostra um Michael inesperado viaja longe.** A voz grave real (24 mi de views) e o Super Bowl parado (15,9 mi) não são "melhores momentos". São momentos que contradizem ou ampliam o que o público acha que sabe.
4. **Picos de evento.** Os maiores números de 2025 e 2026 se concentram em seis momentos: trailer (6/11/2025), pôster (1º/2), estreia (21 a 27/4), Billie Jean em 1º no Global 200 (maio), US$ 1 bilhão (12/7) e aniversário (29/8). Quem posta rápido nesses dias pega carona no volume de busca.
5. **Contas pequenas viralizam com humor de reação, não com informação.** @Sparklycl, @_romeko, @Aquariuskuntt1, @ogrukiat e @RealEmirHan tiveram de 16 mil a 40 mil curtidas. Todos fizeram piada sobre uma cena ou um comportamento ("os fãs dançando no cinema", "MJ mestre do rage bait"). Nenhum deu notícia.
6. **Lista e ranking geram citação.** O ranking de VMAs da @chartdata teve 786 citações e o post do vinil de Invincible da @mjBeats teve 466. Quem cita está discordando ou completando, e cada citação é distribuição grátis.
7. **Em PT-BR, gíria atual aplicada ao passado funciona.** O post da @mjBeats com "farmou aura" foi o maior da conta no período: 402 mil views e 4,6 mil curtidas.

### Hipóteses criativas (não comprovadas pelos números, mas coerentes com eles)

- **Escrita.** O que mais compartilha é a frase que o leitor gostaria de ter escrito: curta, minúscula, com um exagero cômico ou uma constatação que dá vontade de dizer "isso".
- **Linguagem de hoje.** Os memes que funcionam colocam Michael na linguagem atual da internet (rage bait, aura, sem contexto, "me ignorando"). É isso que leva o post para fora do fandom.
- **Nostalgia.** Quando funciona, a nostalgia é sensorial e específica (fita VHS, discman, Mega Drive). A genérica ("que saudade do rei") não funciona.
- **Curiosidade.** Ela ganha força quando tem um número ou um nome conhecido (Scorsese, Eddie Van Halen, Stephen King, Vincent Price).
- **Gatilhos de compartilhamento mais visíveis no banco, nessa ordem:** concordância, admiração por habilidade, humor, nostalgia e "descobri agora".

---

## PARTE 4: 50 NOVOS TWEETS PRONTOS

Todos os fatos usados foram checados (as fontes estão nas threads e na Parte 8). As notas de 0 a 10 são estimativas estratégicas, não previsões de desempenho. A nota final é a média de cinco critérios: Gancho, Compartilhamento, Originalidade, Alcance geral e Compreensão.

### HUMOR E MEMES

**Tweet 01**
Categoria: Humor
Referência: https://x.com/iamveronica777/status/1888634597312987385
Novo tweet:
> michael jackson ficou quase dois minutos parado no palco do super bowl e o estádio inteiro gritando. eu fico dez segundos em silêncio numa call e já perguntam se minha internet caiu

Mídia sugerida: vídeo da abertura do Super Bowl XXVII (1993), do momento em que ele surge até tirar os óculos.
Justificativa: é uma comparação com a vida comum que qualquer pessoa entende, e o vídeo carrega o "uau".
Pontuação: Gancho 9, Compartilhamento 9, Originalidade 8, Alcance 9, Compreensão 10 = **9,0**

**Tweet 02**
Categoria: Humor
Referência: https://x.com/Aquariuskuntt1/status/2048118440267768195
Novo tweet:
> michael jackson inventou o rage bait em 1983. fez o moonwalk uma vez na TV e passou o resto da década vendo o planeta inteiro escorregar de meia na cozinha tentando copiar

Mídia sugerida: o clipe do moonwalk no Motown 25 ou só texto.
Justificativa: repete o mecanismo do meme original (vocabulário atual aplicado ao passado) com uma piada nova, de identificação física.
Pontuação: 9, 9, 8, 9, 9 = **8,8**

**Tweet 03**
Categoria: Humor
Referência: https://x.com/historyinmemes/status/1736093608539750466
Novo tweet:
> a música "Ben" deu ao michael, com 14 anos, o primeiro número 1 da carreira solo. a música é sobre um rato. e ainda ganhou globo de ouro. ninguém nunca homenageou um pet com esse nível de comprometimento

Mídia sugerida: capa do single "Ben" (1972).
Justificativa: fato real e absurdo, do tipo "não acredito", que faz quem não é fã compartilhar.
Pontuação: 9, 9, 9, 9, 9 = **9,0**

**Tweet 04**
Categoria: Humor
Referência: https://x.com/RealEmirHan/status/2048432335658398002
Novo tweet:
> passei a infância inteira gritando "annie are you ok" achando que era drama de novela. a annie é o boneco de treino de primeiros socorros. o michael pegou uma aula de RCP e fez um dos maiores hits dos anos 80

Mídia sugerida: frame de Smooth Criminal ao lado de uma foto do boneco Resusci Anne.
Justificativa: junta a revelação com a lembrança de infância e uma montagem visual fácil de fazer.
Pontuação: 9, 9, 9, 9, 9 = **9,0**

**Tweet 05**
Categoria: Humor
Referência: https://x.com/Sparklycl/status/2048796660713591126
Novo tweet:
> o quincy jones quis cortar a introdução de billie jean porque achou longa demais. foi a única vez na história em que alguém olhou pra perfeição e falou "tá meio comprida"

Mídia sugerida: só texto, ou os primeiros 10 segundos do clipe oficial com a linha de baixo.
Justificativa: o fato é verificado e a piada é de uma linha. Funciona para quem só conhece a música.
Pontuação: 8, 8, 8, 8, 9 = **8,2**

**Tweet 06**
Categoria: Humor
Referência: https://x.com/_romeko/status/2048241005531430935
Novo tweet:
> tem gente que vai ao cinema pra assistir um filme. e tem fã do michael jackson que vai pra fazer duas horas de ensaio aberto com plateia pagante

Mídia sugerida: vídeo público de fãs dançando numa sessão de "Michael" (há vários no X; dê o crédito ao autor).
Justificativa: o comportamento coletivo foi muito comentado em 2026 e a piada é autoirônica.
Pontuação: 8, 8, 7, 8, 9 = **8,0**

**Tweet 07**
Categoria: Humor
Referência: https://x.com/copymj/status/2060182548525846729
Novo tweet:
> vincent price gravou o rap de thriller em duas tentativas. rod temperton escreveu o texto dentro de um táxi a caminho do estúdio. eu levo quarenta minutos pra responder um áudio

Mídia sugerida: só texto.
Justificativa: o formato "eles fizeram história, eu não faço nada" é muito BR, e tem dois fatos reais de bastidor.
Pontuação: 8, 8, 8, 8, 9 = **8,2**

**Tweet 08**
Categoria: Humor
Referência: https://x.com/rahsh33m/status/2048217992190632061
Novo tweet:
> o "hee hee" do michael é a única palavra do mundo que serve como assinatura, aviso, grito de guerra, comemoração e resposta pra qualquer pergunta

Mídia sugerida: um GIF curto de um "hee hee" num show (procure o momento exato).
Justificativa: celebra uma marca registrada sonora que todo mundo reconhece e convida respostas com GIFs.
Pontuação: 8, 8, 7, 8, 10 = **8,2**

**Tweet 09**
Categoria: Humor
Referência: https://x.com/legendarihhhh/status/2048718479017336950
Novo tweet:
> o engenheiro bruce swedien mixou billie jean 91 vezes. a versão escolhida foi a número 2. perfeccionismo é isso: dar 89 voltas pra descobrir que o certo era quase o primeiro

Mídia sugerida: só texto.
Justificativa: um número absurdo com uma virada final. Rende citações de quem trabalha com criação.
Pontuação: 8, 8, 8, 7, 8 = **7,8**

**Tweet 10**
Categoria: Humor (sazonal: Halloween)
Referência: https://x.com/michaeljackson/status/1989740180824101085
Novo tweet:
> toda festa de halloween é igual: metade dos convidados de zumbi, metade de jaqueta vermelha, e ninguém consegue dançar thriller depois do primeiro passinho da garra

Mídia sugerida: frame da coreografia dos zumbis no clipe oficial.
Justificativa: observação de festa que todo mundo já viu. O post sai no pico de buscas por Thriller.
Pontuação: 9, 9, 8, 9, 10 = **9,0**

### MOMENTOS ICÔNICOS

**Tweet 11**
Categoria: Momentos icônicos
Referência: https://x.com/iamveronica777/status/1888634597312987385
Novo tweet:
> super bowl, 1993. o maior palco da televisão americana. michael aparece, congela por quase dois minutos e a plateia grita mais a cada segundo parado. o show nem tinha começado e já tinha entrado pra história

Mídia sugerida: vídeo da entrada, terminando no momento em que ele tira os óculos.
Justificativa: é o formato do tweet mais curtido do banco, contado com outras palavras e no ritmo de narração.
Pontuação: 9, 9, 6, 9, 10 = **8,6**

**Tweet 12**
Categoria: Momentos icônicos
Referência: https://x.com/michaeljackson/status/2056404452937261146
Novo tweet:
> um homem de luva branca deu uns passos pra trás num palco em 1983 e o planeta passou os quarenta anos seguintes tentando fazer igual

Mídia sugerida: o trecho exato do moonwalk em Billie Jean no Motown 25.
Justificativa: dá a dimensão do momento sem dizer o nome do passo. Quem vê completa sozinho.
Pontuação: 9, 9, 8, 9, 9 = **8,8**

**Tweet 13**
Categoria: Momentos icônicos
Referência: https://x.com/michaeljackson/status/1984289260980015236
Novo tweet:
> thriller tem 14 minutos, foi dirigido por john landis e em 2009 virou o primeiro videoclipe da história escolhido para o national film registry, o acervo de filmes preservados pela biblioteca do congresso americano. o michael não fazia clipe. fazia cinema

Mídia sugerida: frame da cena dos zumbis. Fonte: https://www.youtube.com/watch?v=sOnqjkJTMaA
Justificativa: autoridade institucional e fato pouco conhecido, que reforça o "ele era outra coisa".
Pontuação: 8, 8, 7, 8, 9 = **8,0**

**Tweet 14**
Categoria: Momentos icônicos
Referência: https://x.com/ofanotherl9ver/status/1986464217730588781
Novo tweet:
> 1991: rostos de pessoas diferentes se transformando um no outro, na TV aberta, ao som de black or white. hoje qualquer app faz isso em segundos. naquela época o mundo inteiro parou pra entender como era possível

Mídia sugerida: a sequência de morphing do clipe. Fonte: https://www.youtube.com/watch?v=F2AitTPI5U0
Justificativa: liga tecnologia e nostalgia, e dá para conversar com quem nasceu depois de 2000.
Pontuação: 8, 8, 8, 9, 9 = **8,4**

**Tweet 15**
Categoria: Momentos icônicos
Referência: https://x.com/michaeljackson/status/2031399681134153791
Novo tweet:
> o clipe de bad tem 18 minutos, foi dirigido pelo martin scorsese e tem o wesley snipes no elenco. tem diretor que espera a vida inteira por um elenco desses. o michael usou num clipe

Mídia sugerida: frame do confronto na estação de metrô. Fonte: https://www.youtube.com/watch?v=dsUXAEzaC3Q
Justificativa: nomes de cinema despertam a curiosidade de quem não é do fandom.
Pontuação: 8, 8, 8, 8, 9 = **8,2**

**Tweet 16**
Categoria: Momentos icônicos
Novo tweet:
> remember the time é um clipe do michael jackson com eddie murphy de faraó, iman de rainha e magic johnson no elenco, dirigido pelo john singleton. tem filme de hollywood que não consegue juntar isso

Mídia sugerida: frame com Eddie Murphy e Iman no trono. Fonte: https://www.youtube.com/watch?v=LeiFF0gvqcc
Justificativa: tem o mesmo efeito do tweet de Bad, mas com elenco pop. Bom para marcar quem gosta de cinema.
Pontuação: 8, 8, 7, 8, 9 = **8,0**

**Tweet 17**
Categoria: Momentos icônicos (Brasil)
Referência: https://x.com/mjBeats/status/2112159330502074540
Novo tweet:
> fevereiro de 1996. michael jackson no pelourinho, o olodum tocando e salvador inteira nas janelas. tem clipe que é história da música. esse aqui é história do brasil também

Mídia sugerida: o trecho do clipe no Pelourinho com o Olodum. Fonte: https://www.youtube.com/watch?v=QNJL6nfu__Q
Justificativa: orgulho nacional. Aparece também para quem não é fã mas é baiano, carioca ou brasileiro saudosista.
Pontuação: 9, 9, 7, 9, 9 = **8,6**

**Tweet 18**
Categoria: Momentos icônicos
Novo tweet:
> a inclinação de smooth criminal não era só ensaio e força nas pernas. o michael e mais dois inventores registraram a patente de um sapato que prendia no chão do palco. patente americana número 5.255.452, concedida em 1993

Mídia sugerida: frame da inclinação ao lado do desenho técnico da patente (https://patents.google.com/patent/US5255452A/en).
Justificativa: a montagem visual "o truque por trás do truque" pede compartilhamento.
Pontuação: 9, 9, 8, 9, 9 = **8,8**

**Tweet 19**
Categoria: Momentos icônicos
Referência: https://x.com/michaeljackson/status/2108225921878769737
Novo tweet:
> o show do michael em bucareste, em 1992, foi exibido pela HBO e virou a maior audiência da história da TV a cabo americana até então. aquela entrada em que ele surge do chão do palco e fica imóvel enquanto o estádio explode é desse show

Mídia sugerida: a abertura de Bucareste, com Jam e a entrada da "torrada" (o elevador de palco).
Justificativa: é uma performance que circula sempre e o recorde dá contexto. Confira no vídeo escolhido se a entrada aparece como descrita.
Pontuação: 8, 8, 7, 8, 9 = **8,0**

**Tweet 20**
Categoria: Momentos icônicos
Novo tweet:
> scream custou 7 milhões de dólares e o guinness registrou como o videoclipe mais caro já feito. michael e janet numa nave espacial, preto e branco, coreografia sincronizada. 1995 e até hoje parece clipe do ano que vem

Mídia sugerida: frame de Michael e Janet na nave (busque o clipe oficial no canal youtube.com/@michaeljacksonVEVO).
Justificativa: o recorde é verificável e a estética é marcante. Agrada também ao público de Janet.
Pontuação: 8, 8, 7, 8, 9 = **8,0**

### NOSTALGIA

**Tweet 21**
Categoria: Nostalgia
Novo tweet:
> toda criança brasileira dos anos 90 cantou "ani ariu ou quei" com a mais absoluta confiança

Mídia sugerida: só texto.
Justificativa: o curto, o fonético e a identificação imediata convidam as pessoas a responder com as próprias versões erradas.
Pontuação: 9, 10, 8, 9, 10 = **9,2**

**Tweet 22**
Categoria: Nostalgia
Novo tweet:
> tinha uma fita VHS com thriller gravado da televisão, a etiqueta escrita à mão, e ai de quem gravasse novela por cima

Mídia sugerida: foto de uma fita VHS com etiqueta escrita à mão (a sua, ou uma de banco de imagens livre).
Justificativa: memória sensorial específica que funciona para várias gerações.
Pontuação: 8, 9, 8, 8, 10 = **8,6**

**Tweet 23**
Categoria: Nostalgia
Novo tweet:
> quem jogou moonwalker no mega drive sabe: o golpe especial era fazer todo mundo na tela dançar. nunca mais um videogame entendeu tão bem o seu protagonista

Mídia sugerida: o momento do "dance attack" no jogo de Mega Drive (1990).
Justificativa: liga a comunidade gamer retrô e a música, e leva o post para outra bolha.
Pontuação: 8, 9, 9, 9, 9 = **8,8**

**Tweet 24**
Categoria: Nostalgia (Brasil)
Novo tweet:
> outubro de 1993, morumbi. quem foi tem história pra contar até hoje. quem não foi tem um tio que jura que foi

Mídia sugerida: foto de imprensa do show no Morumbi ou da chegada dele a São Paulo (com crédito).
Justificativa: piada familiar brasileira em cima de um fato real. Rende respostas com histórias.
Pontuação: 9, 9, 9, 8, 10 = **9,0**

**Tweet 25**
Categoria: Nostalgia (Brasil)
Novo tweet:
> em 1993 o playcenter fechou mais cedo só pro michael jackson andar no viking e no ciclone. metade de são paulo sentiu orgulho, a outra metade estava na fila

Mídia sugerida: foto de época do Playcenter ou de MJ na visita.
Justificativa: memória afetiva paulista com uma piada no fim. Gera citação ("eu estava lá").
Pontuação: 8, 9, 9, 8, 9 = **8,6**

**Tweet 26**
Categoria: Nostalgia (sazonal: 30/10)
Referência: https://x.com/mjBeats/status/2100725572817006788
Novo tweet:
> 25 anos de invincible e eu ainda lembro de ouvir butterflies no discman andando devagar pra o CD não pular

Mídia sugerida: capa de Invincible ou foto de um discman.
Justificativa: a data acontece agora (30/10/2001) e o detalhe do discman é quase universal.
Pontuação: 8, 9, 8, 8, 10 = **8,6**

**Tweet 27**
Categoria: Nostalgia
Novo tweet:
> lembra quando estreia de clipe era evento? a família inteira na sala, televisão ligada, ninguém falando. o michael fazia o mundo marcar horário pra assistir um clipe

Mídia sugerida: frame da estreia de Black or White, ou uma foto antiga de família vendo TV.
Justificativa: contrasta com o scroll infinito de hoje e gera conversa entre gerações.
Pontuação: 8, 8, 7, 8, 9 = **8,0**

**Tweet 28**
Categoria: Nostalgia
Novo tweet:
> sua mãe dançou billie jean no baile, você dançou no karaokê e agora seu sobrinho tenta fazer o moonwalk na cozinha depois de ver o filme. michael jackson virou herança de família

Mídia sugerida: só texto.
Justificativa: três gerações numa frase só, com o filme de 2026 fazendo a ponte.
Pontuação: 8, 9, 8, 9, 9 = **8,6**

**Tweet 29**
Categoria: Nostalgia (Brasil)
Novo tweet:
> pouca gente sabe que o michael veio ao brasil pela primeira vez em 1974, com 16 anos, ainda nos jackson 5. foram shows em são paulo, porto alegre, belo horizonte, brasília e rio, com a portela abrindo

Mídia sugerida: foto de imprensa da turnê de 1974 (procure em acervos de jornais, com crédito).
Justificativa: fato raro e local. Rende respostas de quem tem familiar que viu.
Pontuação: 8, 8, 9, 7, 9 = **8,2**

**Tweet 30**
Categoria: Nostalgia
Novo tweet:
> tem música que você não escuta. você lembra. human nature é uma delas

Mídia sugerida: um trecho de Human Nature ao vivo (de preferência da turnê Bad).
Justificativa: curtíssimo e emocional. Funciona no meio da madrugada.
Pontuação: 7, 8, 7, 7, 9 = **7,6**

### CURIOSIDADES E DESCOBERTAS

**Tweet 31**
Categoria: Curiosidade
Novo tweet:
> human nature quase não existiu. a música veio numa fita demo do steve porcaro, do toto, e o quincy jones só ouviu porque o toca-fitas virou o lado sozinho no fim da fita

Mídia sugerida: só texto, ou capa de Thriller.
Justificativa: o acaso é um gancho forte e o fato é pouco conhecido, mesmo entre fãs.
Pontuação: 9, 9, 9, 8, 9 = **8,8**

**Tweet 32**
Categoria: Curiosidade
Novo tweet:
> o solo de guitarra de beat it é do eddie van halen. ele gravou de graça, como favor. um dos solos mais famosos da história saiu de cortesia

Mídia sugerida: o solo no clipe oficial. Fonte: https://www.youtube.com/watch?v=oRdxUFDoQe0
Justificativa: une rock e pop e traz um nome que o público geral conhece.
Pontuação: 9, 9, 8, 9, 9 = **8,8**

**Tweet 33**
Categoria: Curiosidade (sazonal: Halloween)
Referência: https://x.com/michaeljackson/status/1984289260980015236
Novo tweet:
> pra ninguém invadir as gravações de thriller, a produção imprimiu mapas falsos com locais errados e espalhou por aí. o primeiro clipe com fake news de propósito

Mídia sugerida: frame da cena dos zumbis na rua.
Justificativa: bastidor confirmado pela própria conta oficial, com piada contemporânea no fim.
Pontuação: 8, 8, 8, 8, 9 = **8,2**

**Tweet 34**
Categoria: Curiosidade
Referência: https://x.com/michaeljackson/status/2089381748094246989
Novo tweet:
> em 1995 o michael fez um chat ao vivo com 25 mil fãs ao mesmo tempo, em três serviços online diferentes, transmitido também pela MTV. live com fã antes de existir live

Mídia sugerida: as fotos do post oficial (cite a conta oficial).
Justificativa: a ligação com a tecnologia surpreende quem só pensa nele como cantor.
Pontuação: 8, 8, 8, 8, 9 = **8,2**

**Tweet 35**
Categoria: Curiosidade
Novo tweet:
> bad foi o primeiro álbum da história a emplacar cinco singles em primeiro lugar na billboard hot 100. o disco que veio depois de thriller e que todo mundo achou que ia "decepcionar"

Mídia sugerida: capa de Bad.
Justificativa: um recorde com a narrativa de quem supera expectativa.
Pontuação: 8, 8, 7, 8, 9 = **8,0**

**Tweet 36**
Categoria: Curiosidade
Novo tweet:
> thriller ganhou 8 grammys numa noite só, em 1984. sete foram do michael. o oitavo foi do engenheiro de som bruce swedien. até quem mexia nos botões saiu premiado

Mídia sugerida: foto de MJ com os Grammys em 1984.
Justificativa: o número é conhecido, mas a fração "7 + 1" é novidade, e o fim tem piada leve.
Pontuação: 8, 8, 8, 8, 9 = **8,2**

**Tweet 37**
Categoria: Curiosidade
Novo tweet:
> todo mundo jura que o riff de guitarra de black or white é do slash. o slash aparece no clipe e na introdução, mas o riff principal foi tocado pelo produtor bill bottrell

Mídia sugerida: frame do Slash na introdução do clipe.
Justificativa: correção de uma crença popular, que gera "eu não sabia" e respostas de músicos.
Pontuação: 8, 9, 8, 8, 9 = **8,4**

**Tweet 38**
Categoria: Curiosidade
Novo tweet:
> ghosts, o curta de 1996, foi escrito com o stephen king, dirigido pelo stan winston (o cara dos efeitos de jurassic park e exterminador) e tem o michael fazendo cinco papéis. inclusive o prefeito

Mídia sugerida: frame do prefeito ou da dança dos esqueletos. Fonte: https://www.youtube.com/watch?v=Xh9Cp4rd7mI
Justificativa: três nomes de cultura pop num só post, e o "inclusive o prefeito" segura a leitura.
Pontuação: 9, 9, 8, 9, 9 = **8,8**

**Tweet 39**
Categoria: Curiosidade (oportunidade atual)
Referência: https://x.com/michaeljackson/status/2056770387954770047
Novo tweet:
> billie jean saiu em janeiro de 1983. em maio de 2026 chegou ao primeiro lugar do billboard global 200, o ranking da música mais ouvida do mundo. a música mais tocada do planeta tinha 43 anos

Mídia sugerida: print do chart ou o clipe oficial (https://www.youtube.com/watch?v=Zi_XLOBDo_Y).
Justificativa: um dado atual com uma virada temporal. É para quem não acompanha charts.
Pontuação: 9, 9, 7, 9, 10 = **8,8**

**Tweet 40**
Categoria: Curiosidade
Novo tweet:
> a música ben foi escrita pensando no donny osmond. não rolou, foi pro michael de 14 anos e virou o primeiro número 1 solo da carreira dele. o destino tem uns encaixes

Mídia sugerida: só texto.
Justificativa: um "e se" histórico. Use como resposta ao Tweet 03 ou num dia diferente.
Pontuação: 7, 7, 8, 7, 9 = **7,6**

### OPINIÕES COM POTENCIAL DE DEBATE

**Tweet 41**
Categoria: Debate
Referência: https://x.com/MJJCommunity/status/2024976978193858975
Novo tweet:
> off the wall é melhor que thriller e eu aguento as consequências

Mídia sugerida: capas lado a lado.
Justificativa: a opinião é defensável, curta e de lado claro. Gera citações dos dois times.
Pontuação: 9, 9, 7, 8, 10 = **8,6**

**Tweet 42**
Categoria: Debate
Novo tweet:
> o melhor clipe do michael não é thriller. é smooth criminal. a coreografia envelheceu melhor que muito filme de ação lançado ano passado

Mídia sugerida: trecho da coreografia do salão. Fonte: https://www.youtube.com/watch?v=h_D3VFfhvs4
Justificativa: contraria o senso comum sem atacar ninguém.
Pontuação: 8, 9, 7, 8, 9 = **8,2**

**Tweet 43**
Categoria: Debate (sazonal: 30/10)
Novo tweet:
> invincible foi tratado como decepção em 2001. estreou em primeiro lugar, e 25 anos depois tá ganhando vinil novo com fila de fã. a crítica tem pressa, o tempo não

Mídia sugerida: capa de Invincible ou foto do vinil oficial.
Justificativa: reabilita um álbum subestimado justamente no aniversário.
Pontuação: 8, 8, 8, 7, 9 = **8,0**

**Tweet 44**
Categoria: Debate (oportunidade atual)
Referência: https://x.com/tjjackson/status/2047427127637926264
Novo tweet:
> dá pra discutir roteiro, dá pra discutir o que ficou de fora. o que não dá pra discutir é que o jaafar fez o público esquecer que estava vendo um ator

Mídia sugerida: frame de Jaafar em cena de palco.
Justificativa: reconhece a crítica e mantém uma posição. Debate saudável, não briga.
Pontuação: 8, 8, 7, 8, 9 = **8,0**

**Tweet 45**
Categoria: Debate
Novo tweet:
> michael jackson não foi o maior cantor nem o maior dançarino de todos os tempos. foi o único que era as duas coisas no mesmo nível e entregava as duas no mesmo palco

Mídia sugerida: trecho ao vivo de Human Nature ou de Billie Jean.
Justificativa: o começo provoca e o final defende. Gera respostas com nomes de outros artistas, o que alimenta a conversa.
Pontuação: 9, 8, 7, 8, 8 = **8,0**

### INTERATIVOS

**Tweet 46**
Categoria: Interativo
Novo tweet:
> a casa pegou fogo e você só pode salvar uma fita VHS: thriller, smooth criminal, black or white ou remember the time. qual sai com você?

Mídia sugerida: as quatro capas em grade (ou enquete nativa do X).
Justificativa: dilema com escolha forçada, que dá respostas rápidas e nostalgia junto.
Pontuação: 8, 8, 8, 8, 10 = **8,4**

**Tweet 47**
Categoria: Interativo
Novo tweet:
> monta o setlist de 5 músicas do michael pro seu casamento. regra única: billie jean não vale

Mídia sugerida: só texto.
Justificativa: a restrição obriga a pensar e tira as respostas óbvias.
Pontuação: 8, 8, 8, 8, 10 = **8,4**

**Tweet 48**
Categoria: Interativo
Novo tweet:
> qual música do michael você jura que só você conhece? vamos descobrir aqui se é verdade

Mídia sugerida: só texto.
Justificativa: mexe com o ego de fã e funciona como pesquisa de pauta para a conta.
Pontuação: 7, 8, 8, 7, 9 = **7,8**

**Tweet 49**
Categoria: Interativo
Novo tweet:
> descreve sua semana usando só títulos de música do michael. a minha: scream, leave me alone, off the wall

Mídia sugerida: só texto.
Justificativa: jogo de linguagem que dá respostas engraçadas e fáceis de curtir.
Pontuação: 8, 9, 7, 8, 10 = **8,4**

**Tweet 50**
Categoria: Interativo
Novo tweet:
> qual foi o primeiro clipe do michael que você viu na vida? sem pesquisar, só memória

Mídia sugerida: só texto.
Justificativa: gera respostas com história pessoal e mapeia a idade da audiência.
Pontuação: 7, 8, 7, 8, 10 = **8,0**

### Versões em inglês (alcance internacional)

Use em horários diferentes, nunca no lugar da versão em PT-BR:
- **Tweet 03:** `"Ben" gave a 14-year-old Michael his first solo #1. it's a love song to a rat. it won a Golden Globe. nobody has ever been this committed to a pet`
- **Tweet 02:** `Michael invented rage bait in 1983. moonwalked once on TV and spent the rest of the decade watching the entire planet slip on their kitchen floor in socks`
- **Tweet 04:** `grew up screaming "annie are you ok" like it was a soap opera. annie is the CPR training dummy. Michael turned a first aid class into a hit`
- **Tweet 31:** `"Human Nature" almost didn't happen. it was on a Toto demo tape and Quincy only heard it because the cassette auto-reversed`
- **Tweet 18:** `the Smooth Criminal lean wasn't just core strength. Michael co-patented the shoe that hooked into the stage. US patent 5,255,452`

### Ranking geral das notas

| Posição | Tweet | Nota |
|---|---|---|
| 1 | 21 (ani ariu ou quei) | 9,2 |
| 2 | 01, 03, 04, 10, 24 | 9,0 |
| 7 | 02, 12, 18, 23, 31, 32, 38, 39 | 8,8 |
| 15 | 11, 17, 22, 25, 26, 28, 41 | 8,6 |
| 22 | 14, 37, 46, 47, 49 | 8,4 |
| 27 | 05, 07, 08, 15, 29, 33, 34, 36, 42 | 8,2 |
| 36 | 06, 13, 16, 19, 20, 27, 35, 43, 44, 45, 50 | 8,0 |
| 47 | 09, 48 | 7,8 |
| 49 | 30, 40 | 7,6 |

---

## PARTE 5: TOP 10 MELHORES APOSTAS

Escolhi pela nota e por variedade. Dois tweets do mesmo tipo não entram juntos.

**1. Tweet 21: "ani ariu ou quei"**
- **Alternativa:** `a gente cantava "ani ariu ou quei" e "bili djin is not mai lover" com uma confiança que nenhum professor de inglês conseguiu tirar`
- **Mais engraçada:** `meu inglês dos anos 90 era 100% michael jackson: "ani ariu ou quei", "xamone" e "ríri"`
- **Mais curta:** `"ani ariu ou quei". toda criança dos anos 90 sabe`
- **Mídia:** só texto. Depois responda o próprio tweet com o clipe de Smooth Criminal.
- **Estratégia:** identificação instantânea, e cada resposta vira conteúdo ("e você, como cantava?").

**2. Tweet 03: Ben, o rato**
- **Alternativa:** `primeiro número 1 da carreira solo do michael jackson: uma balada romântica sobre um rato. sim. um rato. com globo de ouro`
- **Mais engraçada:** `o michael tinha 14 anos e já entregava mais emoção cantando pra um rato do que muito cantor cantando pra ex`
- **Mais curta:** `o primeiro número 1 solo do michael é uma música sobre um rato`
- **Mídia:** capa do single.
- **Estratégia:** um fato absurdo e verdadeiro. Quem não é fã repassa como "curiosidade aleatória".

**3. Tweet 01: Super Bowl x call**
- **Alternativa:** `michael ficou quase dois minutos parado e 133 milhões de pessoas assistiram. eu fico parado dois minutos e minha mãe pergunta se eu tô doente`
- **Mais engraçada:** `o michael parado no super bowl tinha mais presença do que eu me mexendo numa festa inteira`
- **Mais curta:** `ele ficou quase dois minutos parado. o mundo inteiro esperou`
- **Mídia:** vídeo da entrada até tirar os óculos.
- **Estratégia:** repete o formato que mais funcionou no banco (Super Bowl em vídeo) com humor brasileiro em vez de admiração.

**4. Tweet 24: Morumbi e o tio**
- **Alternativa:** `todo brasileiro tem um parente que foi no show do michael no morumbi em 93. alguns até foram de verdade`
- **Mais engraçada:** `pelas minhas contas, umas 4 milhões de pessoas foram ao morumbi em 1993 segundo os tios do brasil`
- **Mais curta:** `todo mundo tem um tio que "foi no morumbi em 93"`
- **Mídia:** foto do show com crédito.
- **Estratégia:** o humor de família brasileira gera marcações ("marca seu tio").

**5. Tweet 10: Halloween e o passinho da garra**
- **Alternativa:** `halloween é o único dia do ano em que todo mundo acha que sabe a coreografia de thriller. dura até o segundo oito`
- **Mais engraçada:** `"eu sei dançar thriller inteira" e a pessoa só sabe fazer garra e andar de lado`
- **Mais curta:** `ninguém sabe dançar thriller depois da garra`
- **Mídia:** frame da coreografia dos zumbis.
- **Estratégia:** data quente. O próprio Thriller teve no Halloween de 2025 o maior dia de streaming da história dele (dado da conta oficial).

**6. Tweet 04: Annie é o boneco**
- **Alternativa:** `"annie are you ok" vem do boneco de treino de RCP, o resusci anne. michael jackson transformou primeiros socorros em refrão`
- **Mais engraçada:** `todo instrutor de primeiros socorros do mundo já ouviu alguém cantar smooth criminal no meio da aula`
- **Mais curta:** `a annie de smooth criminal é um boneco de RCP`
- **Mídia:** montagem com o frame do clipe e a foto do boneco.
- **Estratégia:** "como eu nunca percebi isso?", o tipo de reação que o briefing quer.

**7. Tweet 02: rage bait de 1983**
- **Alternativa:** `o moonwalk é o maior rage bait da história: parece fácil, você tenta, cai de meia no piso`
- **Mais engraçada:** `1983: michael faz o moonwalk na TV. 1983 a 1989: o ortopedista mais rico do mundo`
- **Mais curta:** `o moonwalk foi o primeiro rage bait`
- **Mídia:** o moonwalk do Motown 25.
- **Estratégia:** reaproveita o vocabulário do meme de 29 mil curtidas sem copiar a piada.

**8. Tweet 31: Human Nature e a fita**
- **Alternativa:** `um toca-fitas virando de lado sozinho é o motivo de human nature existir`
- **Mais engraçada:** não se aplica, a força aqui é o acaso.
- **Mais curta:** `human nature existe porque uma fita virou de lado sozinha`
- **Mídia:** só texto, ou um trecho ao vivo.
- **Estratégia:** formato "você sabia?", que nos dados da conta oficial engaja mais que efeméride.

**9. Tweet 18: a patente do lean**
- **Alternativa:** `o michael não desafiou a gravidade. ele registrou uma patente pra isso`
- **Mais engraçada:** `eu me inclino 10 graus pra pegar o controle e travo a lombar. o homem se inclinou 45 e foi ao escritório de patentes`
- **Mais curta:** `a inclinação de smooth criminal tem patente: US 5.255.452`
- **Mídia:** frame e desenho da patente.
- **Estratégia:** revela o truque sem tirar a magia, e a imagem técnica se destaca na timeline.

**10. Tweet 23: Moonwalker no Mega Drive**
- **Alternativa:** `o único videogame em que o golpe especial era uma coreografia`
- **Mais engraçada:** `moonwalker no mega drive: os inimigos te atacam e você responde com dança coletiva. terapia de grupo`
- **Mais curta:** `moonwalker no mega drive era outro nível`
- **Mídia:** o vídeo ou GIF do golpe de dança no jogo.
- **Estratégia:** atravessa para a comunidade gamer retrô, que compartilha muito nostalgia.

---

## PARTE 6: 5 THREADS COMPLETAS

### THREAD 1: Os dois minutos que mudaram o Super Bowl

1/ em 1993 o michael jackson subiu ao palco do intervalo do super bowl e não fez absolutamente nada por quase dois minutos. esse silêncio mudou pra sempre o show mais caro da TV americana. vem que eu explico 🧵

2/ contexto: até ali, o intervalo do super bowl era banda marcial e apresentação temática. muita gente aproveitava pra trocar de canal. a liga queria um nome capaz de segurar a audiência

3/ 31 de janeiro de 1993, rose bowl, pasadena. ele é lançado de baixo do palco, aparece e congela. sem música. sem passo. só a pose e o estádio gritando cada vez mais alto

4/ segundo o relato que voltou a circular em 2025, a deixa pra música começar era ele tirar os óculos, e ele fez questão de demorar. a plateia foi à loucura, e o vídeo desse momento voltou a viralizar em 2025, com quase 16 milhões de visualizações

5/ quando a música começou foram jam, billie jean, black or white e um encerramento com coral infantil em heal the world

6/ o resultado: 133,4 milhões de espectadores nos estados unidos. foi a primeira vez na história que a audiência do super bowl subiu durante o intervalo em vez de cair

7/ detalhe: ele não recebeu cachê. a NFL doou 100 mil dólares para a fundação heal the world

8/ depois disso o intervalo virou o que é hoje: o palco mais disputado da música pop. todo show de super bowl que você já comentou nasceu naqueles dois minutos de silêncio

Mídia: o vídeo da entrada no tweet 1 ou 3, uma foto do estádio no 6 e o coral no 5.
Fontes: https://en.wikipedia.org/wiki/Super_Bowl_XXVII_halftime_show · https://x.com/iamveronica777/status/1888634597312987385

### THREAD 2: Bastidores de Thriller que quase ninguém conta

1/ o álbum mais vendido da história quase saiu bem diferente. uma intro cortada, uma música salva por acaso e um rap escrito num táxi. os bastidores de thriller 🧵

2/ o disco foi gravado em 1982 no estúdio westlake, em los angeles, com orçamento de 750 mil dólares. produção do quincy jones, engenharia do bruce swedien

3/ billie jean: o quincy queria cortar a introdução de 29 segundos por achar longa demais. o michael não deixou. disse que aquela intro dava vontade de dançar. o quincy também queria mudar o nome, com medo de confundirem com a tenista billie jean king

4/ o swedien mixou billie jean 91 vezes. a versão escolhida foi a número 2

5/ human nature chegou numa fita demo do steve porcaro, do toto. o quincy só ouviu porque o toca-fitas virou o lado sozinho no fim da fita. o john bettis reescreveu as estrofes

6/ o rap de thriller: o rod temperton escreveu no táxi a caminho do estúdio e o vincent price, lenda do terror, gravou em duas tentativas

7/ o solo de beat it é do eddie van halen, gravado como favor e sem cobrar

8/ o clipe de thriller tem 14 minutos, foi dirigido pelo john landis, com maquiagem do rick baker, e estreou na MTV em 2 de dezembro de 1983. o "making of" em VHS vendeu 1 milhão de cópias em poucos meses

9/ o resultado: 37 semanas em primeiro lugar na billboard, sete singles no top 10 e 8 grammys numa noite (sete do michael, um do swedien). o guinness reconhece como o álbum mais vendido de todos os tempos

10/ em 2009 o clipe virou o primeiro videoclipe escolhido para o national film registry, o acervo de filmes preservados da biblioteca do congresso americano. e a intro que quase foi cortada continua sendo a mais reconhecível do pop

Mídia: a capa no tweet 1, a foto de estúdio com Quincy no 2, os primeiros segundos do clipe de Billie Jean no 3, o solo de Beat It no 7 e a cena dos zumbis no 8.
Fontes: https://en.wikipedia.org/wiki/Thriller_(album) · https://en.wikipedia.org/wiki/Billie_Jean · https://en.wikipedia.org/wiki/Human_Nature_(Michael_Jackson_song) · https://en.wikipedia.org/wiki/Michael_Jackson%27s_Thriller_(music_video) · https://www.guinnessworldrecords.com/world-records/70133-best-selling-album

### THREAD 3: Michael Jackson e o Brasil

1/ o michael jackson esteve no brasil em três momentos muito diferentes da vida dele, e em cada um deixou uma história que o país não esqueceu 🧵🇧🇷

2/ 1974. ele tinha 16 anos e veio com os jackson 5. foram shows entre 13 e 22 de setembro em são paulo, porto alegre, belo horizonte, brasília e no maracanãzinho, com a portela abrindo

3/ 1993. a dangerous tour chega ao morumbi em 15 e 17 de outubro. o show marcado para 19 de outubro no maracanã foi cancelado, e aquelas duas noites em são paulo viraram os últimos shows dele no país

4/ na mesma visita o playcenter fechou mais cedo pra ele andar no viking e no ciclone. imagina o parque inteiro vazio só pra você

5/ 1996. ele chega em 9 de fevereiro pra gravar they don't care about us com o spike lee. as cenas foram no pelourinho, em salvador, com o olodum, e no morro santa marta, no rio

6/ teve polêmica: autoridades tentaram barrar as gravações, preocupadas com a imagem do rio na disputa olímpica, e foi preciso uma decisão judicial pra liberar o clipe

7/ o resultado é um dos clipes mais vistos dele até hoje, com o tambor do olodum conhecido no mundo inteiro

8/ em 1997 havia uma etapa brasileira da HIStory tour planejada (são paulo, curitiba, rio e brasília), mas ela foi suspensa

9/ e em 2026 o brasil voltou a mostrar o tamanho dessa ligação. "michael" teve a maior estreia do ano no país, com 1,7 milhão de ingressos nos primeiros dias, e virou a maior bilheteria da história da universal no brasil

10/ 52 anos depois da primeira visita, o brasil continua sendo um dos lugares onde o michael nunca foi embora

Mídia: foto de 1974 no tweet 2, o Morumbi no 3, a foto rara da Bahia divulgada pela @mjBeats no 5 (com crédito) e o trecho do Pelourinho no 7.
Fontes: https://www.folhape.com.br/cultura/michael-jackson/344424/ · https://en.wikipedia.org/wiki/Dangerous_World_Tour · https://rollingstone.com.br/?p=105139 · https://en.wikipedia.org/wiki/They_Don%27t_Care_About_Us · https://istoe.com.br/clipe-de-michael-jackson-no-pais-teve-polemicas-com-justica-politicos-e-trafico/ · https://en.wikipedia.org/wiki/HIStory_World_Tour · https://exame.com/pop/michael-estreia-com-r-40-milhoes-e-lidera-bilheteria-no-brasil-veja-a-lista/ · https://tribunahoje.com/noticias/entretenimento/2026/06/02/186366-michael-se-torna-a-maior-bilheteria-da-historia-da-universal-pictures-no-brasil

### THREAD 4: Tudo que existe por trás de Smooth Criminal

1/ smooth criminal tem uma inclinação com patente registrada, uma letra tirada de uma aula de primeiros socorros e uma origem com nome de gângster. a história da música 🧵

2/ a música nasceu de uma demo chamada "al capone", e o clima de máfia dos anos 30 ficou no clipe: terno branco, chapéu, salão clandestino

3/ "annie are you ok?" vem do resusci anne, o boneco usado em treino de RCP. a frase é a primeira coisa que se pergunta ao boneco antes de começar a massagem

4/ a inclinação de 45 graus no clipe foi feita com cabos. pra fazer ao vivo, o michael, o michael l. bush e o dennis tompkins criaram um sapato que se encaixava num pino no chão do palco

5/ pedido de patente feito em 29 de junho de 1992, aprovado em 26 de outubro de 1993. patente americana 5.255.452, "método e meios para criar uma ilusão antigravidade"

6/ a coreografia foi criada com o vincent paterson, e existem registros raros dos dois ensaiando no estúdio

7/ em 2001 a banda alien ant farm lançou uma versão rock que passou 8 semanas em primeiro lugar na austrália e apresentou a música pra uma geração inteira

8/ quase 40 anos depois, a inclinação continua sendo o desafio de dança que mais aparece quando alguém tenta imitar o michael. e quase ninguém sabe que ela tem número de registro

Mídia: frame do terno branco no tweet 1, o clipe oficial (https://www.youtube.com/watch?v=h_D3VFfhvs4), o desenho da patente no 5 e o ensaio raro divulgado pela @mjBeats no 6 (com crédito).
Fontes: https://patents.google.com/patent/US5255452A/en · https://en.wikipedia.org/wiki/Smooth_Criminal · https://x.com/mjBeats/status/2104609581779349999

### THREAD 5: 2026, o ano em que Michael Jackson voltou ao topo

1/ 2026 foi o ano em que um artista que morreu em 2009 virou o assunto principal da música e do cinema. os números são difíceis de acreditar 🧵

2/ abril: "michael", com o sobrinho jaafar jackson no papel principal, estreia nos cinemas. a crítica foi dura, mas o público deu nota A- no cinemascore e lotou as salas no mundo inteiro, com gente dançando nas sessões

3/ no brasil foi a maior estreia do ano, com 1,7 milhão de ingressos nos primeiros dias e mais de R$ 40 milhões

4/ maio: billie jean, de 1983, chega ao primeiro lugar do billboard global 200, o ranking da música mais ouvida do planeta. foi a primeira vez dele no topo desse chart

5/ thriller volta ao top 10 da billboard 200 e a coletânea number ones chega ao 6º lugar. com isso ele passa a ter álbum no top 10 em seis décadas diferentes

6/ no spotify ele passa de 100 milhões de ouvintes mensais pela primeira vez e se torna o artista mais velho a alcançar essa marca

7/ julho: o filme passa de 1 bilhão de dólares. é a primeira cinebiografia da história a chegar lá e a maior bilheteria da história da lionsgate

8/ jaafar, que nunca tinha atuado num longa, vira o primeiro protagonista estreante com 1 bilhão de dólares de bilheteria

9/ e não acabou: a lionsgate já trabalha em "michael 2". ainda não há data oficial, mas as filmagens estão previstas pra final de 2026 ou começo de 2027

10/ 43 anos depois de billie jean, o mundo voltou a fazer o que fazia em 1983: parar pra assistir michael jackson

Mídia: o trailer oficial no tweet 2, um vídeo de fãs dançando (com crédito) no 2 ou 3, print do chart no 4 e o card de US$ 1 bi da conta oficial no 7.
Fontes: https://variety.com/2026/film/box-office/michael-billion-dollar-box-office-benchmark-biopic-record-1236802496/ · https://en.wikipedia.org/wiki/List_of_Billboard_Global_200_number_ones_of_2026 · https://www.billboard.com/music/chart-beat/michael-jackson-billboard-200-top-10-album-six-decades-1236244011/ · https://en.wikipedia.org/wiki/List_of_most-streamed_artists_on_Spotify · https://exame.com/pop/michael-estreia-com-r-40-milhoes-e-lidera-bilheteria-no-brasil-veja-a-lista/ · https://x.com/michaelmovie/status/2076322110704947612
Observação: a frase sobre Jaafar no tweet 8 vem de um post de fã (https://x.com/iamveronica777/status/2076272446274183359). Confirme numa fonte de imprensa antes de publicar, ou corte o tweet.

---

## PARTE 7: CRONOGRAMA DE 14 DIAS

**Frequência:** 2 posts próprios por dia e 1 thread por semana, mais de 10 a 15 respostas qualificadas por dia em posts grandes (@michaeljackson, @chartdata, @PopBase, contas de cinema e de nostalgia BR). Responder rápido e bem nos posts grandes costuma trazer mais seguidores, no começo, do que postar mais.

**Horários iniciais (hipóteses para testar, horário de Brasília)**
- **12h:** almoço, pico brasileiro.
- **19h30 a 21h30:** maior janela BR.
- **14h:** pega a manhã dos EUA. Use para as versões em inglês.

Depois de duas semanas, troque pelos horários com a melhor mediana de engajamento da sua conta (Parte 8).

| Dia | Horário sugerido | Conteúdo | Formato | Objetivo |
|---|---|---|---|---|
| Qui 29/10 | 12h | Tweet 10 (halloween e o passinho da garra) | Foto/frame | Pegar o pico de buscas de Halloween |
| Qui 29/10 | 20h | Tweet 33 (mapas falsos de Thriller) | Frame | Curiosidade sazonal |
| Sex 30/10 | 12h | Tweet 26 (25 anos de Invincible, discman) | Capa | Data exata do aniversário |
| Sex 30/10 | 20h | Tweet 43 (Invincible e o tempo) | Foto do vinil | Debate saudável |
| Sáb 31/10 | 11h | Thread 2 (bastidores de Thriller) | Thread | Thread de autoridade no Halloween |
| Sáb 31/10 | 19h | Tweet 01 (Super Bowl x call) | Vídeo | Humor que sai da bolha |
| Dom 01/11 | 18h | Tweet 21 (ani ariu ou quei) | Texto | Gerar respostas em massa |
| Seg 02/11 | 12h | Tweet 03 (Ben, o rato) | Capa | Curiosidade absurda |
| Seg 02/11 | 14h | Versão EN do Tweet 03 | Capa | Teste internacional |
| Ter 03/11 | 12h | Tweet 31 (Human Nature e a fita) | Texto | "Você sabia?" |
| Ter 03/11 | 20h | Tweet 46 (salvar uma VHS) | Enquete | Interação |
| Qua 04/11 | 12h | Tweet 18 (patente do lean) | Montagem | Visual forte, alto repost |
| Qua 04/11 | 21h | Tweet 30 (Human Nature, só lembrança) | Vídeo ao vivo | Emoção noturna |
| Qui 05/11 | 12h | Tweet 24 (Morumbi e o tio) | Foto | Humor BR com marcações |
| Qui 05/11 | 20h | Tweet 41 (Off the Wall > Thriller) | Capas | Citações e debate |
| Sex 06/11 | 12h | Tweet 23 (Moonwalker no Mega Drive) | GIF | Entrar na bolha gamer |
| Sex 06/11 | 20h | Tweet 39 (Billie Jean, 43 anos e nº1) | Print de chart | Dado atual |
| Sáb 07/11 | 11h | Thread 3 (Michael e o Brasil) | Thread | Orgulho nacional, salvar e repostar |
| Sáb 07/11 | 19h | Tweet 06 (cinema vira ensaio aberto) | Vídeo com crédito | Humor de comportamento |
| Dom 08/11 | 18h | Tweet 49 (semana em títulos de música) | Texto | Respostas engraçadas |
| Seg 09/11 | 12h | Tweet 04 (Annie é um boneco) | Montagem | "Como eu nunca percebi?" |
| Seg 09/11 | 14h | Versão EN do Tweet 04 | Montagem | Teste internacional |
| Ter 10/11 | 12h | Tweet 38 (Ghosts, King e Winston) | Frame | Cultura pop cruzada |
| Ter 10/11 | 20h | Tweet 02 (rage bait de 1983) | Vídeo do moonwalk | Humor com linguagem atual |
| Qua 11/11 | 12h | Tweet 14 (morphing de Black or White) | Vídeo | Esquenta os 35 anos do clipe (14/11) |
| Qua 11/11 | 20h | Tweet 47 (setlist do casamento) | Texto | Interação |

**Reserva para notícias.** Se sair novidade sobre "Michael 2", sobre o leilão da jaqueta de Thriller (marcado para 7/12, em Abu Dhabi) ou sobre um recorde em chart, poste em até 30 minutos com o contexto em PT-BR e mova o post fixo do dia.

---

## PARTE 8: INSIGHTS EXTRAS E MÉTODO DE ACOMPANHAMENTO

### Método de acompanhamento

Crie uma planilha com estas colunas: data, horário, texto, categoria, formato (texto, foto, vídeo, GIF, thread), idioma, views 24h, curtidas 24h, reposts 24h, respostas 24h, citações 24h, as mesmas cinco métricas em 72h, visitas ao perfil, seguidores ganhos no dia.

1. **Taxa de engajamento** = (curtidas + reposts + respostas + citações) ÷ views. Foi a mesma conta usada nesta pesquisa, então você pode comparar com o banco. As contas de fã analisadas ficaram com mediana entre 3% e 7%.
2. **Taxa de compartilhamento** = (reposts + citações) ÷ views. É o melhor indicador de saída da bolha.
3. **Compare sempre na mesma janela,** 24h com 24h e 72h com 72h. Nunca compare um post de ontem com um de duas semanas atrás.
4. **Toda segunda-feira,** calcule a mediana da semana por categoria e formato.
   - **Repetir:** o formato ficou acima de 1,5 vez a mediana da conta.
   - **Ajustar** (gancho, mídia ou horário): ficou entre 0,7 e 1,5 vez.
   - **Pausar:** ficou abaixo de 0,7 vez em três tentativas seguidas.
5. **Seguidores por post:** anote o total de seguidores antes de cada post principal e 24h depois. Post com muita view e zero seguidor é entretenimento sem marca. Nesse caso, reforce a identidade nas respostas.

### O que a pesquisa mostrou e pode virar vantagem

1. **Há um espaço vazio em PT-BR.**
   - A maior conta de MJ em português no banco (@mjBeats) faz jornalismo de fã, com "🚨" e notícia.
   - Não encontrei nenhuma conta brasileira grande que faça humor e cultura de internet sobre Michael. Esse é o posicionamento natural do Shamones Squad: a conta que traduz Michael para a linguagem do X brasileiro.
2. **Ser a ponte de contexto entre o X gringo e o BR.**
   - A @chartdata posta recordes de MJ quase toda semana (Ben, Off the Wall, rankings de nº1).
   - Responder em minutos com o contexto em português ("pra quem não sabe, essa música é sobre um rato") põe o seu @ na frente de centenas de milhares de leitores.
3. **Halloween é o "aniversário extra" do Michael.**
   - No Halloween de 2025, Thriller teve o maior dia de streaming da história dele.
   - Em 2026, a fantasia da era Thriller está entre as tendências do Google (dado de imprensa, confiança média).
   - Faça desta semana a mais intensa do mês.
4. **O calendário de efemérides até o fim do ano está cheio.**
   - **30/10:** Invincible, 25 anos.
   - **14/11:** clipe de Black or White, 35 anos.
   - **26/11:** Dangerous, 35 anos.
   - **Fim de novembro:** Thriller, 44 anos.
   - **2/12:** estreia do clipe de Thriller na MTV.
   - **7/12:** leilão da jaqueta vermelha de Thriller e da luva do Motown 25.
   - **Começo de dezembro:** Spotify Wrapped. Vale postar um "michael no seu wrapped?".
5. **Formato pouco explorado: "o detalhe que você nunca reparou".**
   - Pegue um frame de clipe ou de show, marque o detalhe com um círculo e explique em uma linha (a meia branca, o esparadrapo nos dedos, o figurante famoso em "Liberian Girl").
   - Nos dados, "você sabia?" engajou mais que efeméride e pergunta.
6. **Vídeo que contradiz a imagem pública.**
   - O post da voz grave (24 milhões de views) mostra que o público geral adora descobrir um Michael diferente do caricato.
   - Na mesma linha: os demos de beatbox gravados no ditafone, ensaios, entrevistas com risada espontânea.
7. **Evite a briga de narrativa como estratégia de crescimento.**
   - Os tweets de defesa contra a crítica deram números altos, mas vieram de familiares ou de contas já grandes.
   - Para uma conta em crescimento, humor e curiosidade constroem uma audiência mais ampla e menos tóxica.
8. **Direitos de imagem.**
   - Clipes e shows pertencem ao espólio e às gravadoras.
   - Prefira trechos curtos com crédito, frames e links para o canal oficial (youtube.com/@michaeljacksonVEVO).
   - Quando usar vídeo de fã, credite o @ original. Isso também gera repost de quem você creditou.

### Fontes dos fatos usados nos tweets avulsos
- Ben: https://en.wikipedia.org/wiki/Ben_(song)
- Bad e as cinco nº1, Scream e o Guinness, Black or White e Bill Bottrell: páginas da Wikipedia em inglês de cada música e álbum, conferidas pela pesquisa.
- Eddie Van Halen em Beat It: https://en.wikipedia.org/wiki/Beat_It
- Ghosts: https://en.wikipedia.org/wiki/Michael_Jackson%27s_Ghosts
- Chat online de 1995: https://x.com/michaeljackson/status/2089381748094246989
- Mapas falsos de Thriller: https://x.com/michaeljackson/status/1984289260980015236
- Thriller e o streaming no Halloween: https://x.com/michaeljackson/status/1989740180824101085
- Moonwalker (Sega, 1990): https://en.wikipedia.org/wiki/Michael_Jackson%27s_Moonwalker
- Leilão de 7/12/2026: https://www.euronews.com/2026/10/08/michael-jackson-memorabilia-including-iconic-thriller-jacket-to-go-under-the-hammer
