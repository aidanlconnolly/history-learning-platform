import type { Civilization } from "../types";

export const mongol: Civilization = {
  id: "mongol",
  name: "The Mongol Empire",
  shortName: "Mongols",
  emblem: "🏹",
  region: "Central Asia & Eurasia",
  modernCountries: ["Mongolia", "China", "Russia", "Kazakhstan", "Iran", "Iraq", "Ukraine", "Uzbekistan", "Afghanistan"],
  timespan: "1206 – 1368 CE",
  startYear: 1206,
  endYear: 1368,
  color: "#0d9488",
  tagline:
    "From a few nomad clans to the largest contiguous land empire ever — built in a single lifetime on horseback, terror, and surprising tolerance.",
  summary:
    "Forged by Genghis Khan in 1206, the Mongol Empire became the largest contiguous land empire in history, stretching from Korea to Hungary. Feared for the savagery of their conquests, the Mongols also unified much of Eurasia under a 'Pax Mongolica' that protected trade along the Silk Road, prized merit and religious tolerance, and connected East and West as never before.",
  hero: {
    wikiTitle: "Equestrian statue of Genghis Khan",
    alt: "The giant equestrian statue of Genghis Khan in Mongolia",
    caption: "The colossal statue of Genghis Khan, founder of the empire.",
  },
  facts: [
    { label: "Founder", value: "Genghis Khan (1206)" },
    { label: "Size", value: "Largest contiguous land empire ever" },
    { label: "Army", value: "Mounted archers & total mobility" },
    { label: "Bound by", value: "The Yam relay & the Yassa code" },
    { label: "Split into", value: "Four khanates" },
  ],
  majorCities: [
    { name: "Karakorum",   lat:  47.20, lon: 102.83 },
    { name: "Samarkand",   lat:  39.65, lon:  66.98 },
    { name: "Khanbaliq",   lat:  39.91, lon: 116.39 },
    { name: "Tabriz",      lat:  38.08, lon:  46.29 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the Mongol Empire",
      icon: "⭐",
      intro: "From a scattered clan of nomads to the largest contiguous land empire in history — forged in a single lifetime and held together by speed, terror and trade.",
      milestones: [
        { year: "1162 CE",  title: "Temüjin is Born", description: "The future Genghis Khan is born into a noble but powerless clan on the Mongolian steppe — kidnapped, enslaved and eventually rising through sheer force of will.", icon: "🐣", type: "rise" },
        { year: "1206 CE",  title: "Temüjin Unites the Mongols", description: "At a great assembly on the steppe, Temüjin is proclaimed Genghis Khan ('Universal Ruler') — the fractious Mongol tribes are united for the first time.", icon: "🏹", type: "rise" },
        { year: "1209 CE",  title: "Xi Xia Kingdom Submits", description: "The first major conquest: the Tangut Xi Xia kingdom in northwest China is forced to submit and pay tribute.", icon: "⚔️", type: "conquest" },
        { year: "1215 CE",  title: "Beijing Falls", description: "The Jin Dynasty's capital Zhongdu (modern Beijing) is captured and burned after years of siege, opening northern China to Mongol rule.", icon: "🔥", type: "conquest" },
        { year: "1219 CE",  title: "The Khwarazmian Empire Destroyed", description: "After a Khwarazmian governor kills Mongol merchants, Genghis Khan unleashes total destruction across Central Asia — cities like Samarkand and Merv are annihilated.", icon: "💥", type: "war" },
        { year: "1227 CE",  title: "Genghis Khan Dies", description: "The great conqueror dies during the final Xi Xia campaign; his empire already stretches from the Pacific to the Caspian Sea.", icon: "⚰️", type: "fall" },
        { year: "1241 CE",  title: "Mongols Reach the Gates of Vienna", description: "Batu Khan defeats Polish and Hungarian armies and reaches the Adriatic — then abruptly withdraws upon hearing of the Great Khan's death.", icon: "🏰", type: "conquest" },
        { year: "1258 CE",  title: "Baghdad Sacked, Caliphate Destroyed", description: "Hulagu Khan destroys Baghdad and kills the last Abbasid Caliph, ending 500 years of Islamic imperial rule and flooding the Tigris with books from the great libraries.", icon: "📚", type: "war" },
        { year: "1260 CE",  title: "Battle of Ain Jalut — First Major Defeat", description: "Egyptian Mamluks halt the Mongol advance at Ain Jalut in Palestine — the first time a Mongol army has been decisively defeated in the field.", icon: "⚡", type: "war" },
        { year: "1271 CE",  title: "Kublai Khan Founds the Yuan Dynasty", description: "Kublai Khan claims the Chinese throne, founds the Yuan Dynasty and establishes a capital at Khanbaliq (Beijing), receiving Marco Polo.", icon: "🐉", type: "cultural" },
        { year: "1274 CE",  title: "First Invasion of Japan Fails", description: "A vast fleet reaches Japan but is scattered by storms; the Japanese call the saving typhoon 'kamikaze' — divine wind.", icon: "🌊", type: "war" },
        { year: "1281 CE",  title: "Second Invasion of Japan Fails", description: "Another massive Mongol fleet is again destroyed by storms, convincing many in Japan that the gods protect their islands.", icon: "🌀", type: "war" },
        { year: "1294 CE",  title: "Kublai Khan Dies, Empire Fragments", description: "The last great ruler of a united Mongol empire dies; the four khanates drift apart into rival successor states.", icon: "📉", type: "fall" },
        { year: "1347 CE",  title: "Black Death Spreads Along Mongol Trade Routes", description: "The Pax Mongolica's open trade routes inadvertently carry the Black Death across Eurasia, killing a third of Europe's population.", icon: "💀", type: "fall" },
        { year: "1368 CE",  title: "Ming Dynasty Expels the Mongols", description: "Chinese rebels under Zhu Yuanzhang drive the Yuan Dynasty from China, ending direct Mongol rule over the world's most populous country.", icon: "🌅", type: "fall" },
      ],
    },
    {
      id: "genghis",
      type: "narrative",
      title: "The Rise of Genghis Khan",
      icon: "🏹",
      image: {
        wikiTitle: "Genghis Khan",
        alt: "A portrait of Genghis Khan",
        caption: "Genghis Khan united the warring Mongol tribes in 1206.",
      },
      paragraphs: [
        "Born around 1162 as Temüjin, the future Genghis Khan survived a brutal childhood — his father poisoned, his family abandoned — to become a leader of unmatched ambition and skill. Through war and alliance he united the fractious nomadic tribes of the Mongolian steppe, and in 1206 a great assembly proclaimed him Genghis Khan, 'Universal Ruler'.",
        "He reorganised his followers into a disciplined army based on units of ten, promoted by merit rather than birth, and bound by a strict legal code, the Yassa. His warriors were mounted archers of astonishing mobility and endurance, able to ride and shoot at full gallop and to coordinate huge sweeping manoeuvres across vast distances.",
        "Turning this war machine outward, the Mongols exploded across Asia with shocking speed, smashing far larger and wealthier states — northern China, the Central Asian empire of Khwarazm — through superior tactics, intelligence, and a calculated use of terror against those who resisted.",
      ],
      subLessons: [
        {
          title: "A childhood of hardship and exile",
          paragraphs: [
            "Temüjin was born around 1162, the son of a minor chieftain, reputedly clutching a blood clot in his fist — an omen of a life of violence. When he was about nine his father was poisoned by rival Tatars, and the boy's family was promptly abandoned by their clan, left to fend for themselves on the open steppe.",
            "The years that followed were brutal. The family survived by foraging roots and catching fish and marmots, on the edge of starvation. As a youth Temüjin killed his own half-brother in a quarrel over food, and was later captured by a rival tribe and held as a slave in a wooden collar before making a daring escape.",
            "These experiences forged a leader who trusted loyalty over blood and never forgot a friend or a betrayal. Out of the most precarious of beginnings came the conviction and ruthlessness that would carry him to the mastery of the steppe.",
          ],
          terms: [
            { term: "Temüjin", definition: "The birth name of the man who would become Genghis Khan." },
            { term: "Tatars", definition: "A rival steppe people who poisoned Temüjin's father, fuelling his lifelong feuds." },
          ],
        },
        {
          title: "Uniting the tribes",
          paragraphs: [
            "The steppe of Temüjin's youth was a chaos of feuding tribes — Tatars, Keraites, Naimans, Merkits and others — locked in endless cycles of raiding and revenge. To rise, Temüjin built alliances, won battles, and steadily absorbed defeated peoples into his own growing confederation.",
            "His genius lay in how he organised them. He broke up the old tribal loyalties and reformed his followers into units of tens, hundreds and thousands, promoting commanders by merit and loyalty rather than noble birth. Defeated warriors were spread through his ranks and bound to him personally, dissolving the divisions that had always fractured the steppe.",
            "In 1206 a great assembly of the peoples — a kurultai — proclaimed Temüjin 'Genghis Khan', Universal Ruler, over a single Mongol nation. For the first time the warring tribes were one, and that unity could now be aimed outward at the settled empires beyond the grasslands.",
          ],
          terms: [
            { term: "Kurultai", definition: "A great assembly of Mongol chiefs that elected khans and decided major matters." },
            { term: "Decimal army", definition: "Genghis's reorganisation of warriors into units of tens, hundreds and thousands." },
          ],
        },
        {
          title: "The Mongol war machine",
          image: {
            wikiTitle: "Mongol military tactics and organization",
            alt: "Mongol horse archers",
            caption: "Disciplined horse-archers were the heart of Mongol power.",
          },
          paragraphs: [
            "The Mongol army was built around the mounted archer. Every man was a lifelong horseman, and each warrior rode with several spare mounts, allowing the army to cover astonishing distances and appear where no enemy expected. They could fight while retreating, firing the deadly composite bow backwards at a full gallop.",
            "Discipline set them apart from ordinary raiders. Armies manoeuvred in coordinated units directed by signal flags and horns, executing feigned retreats, encirclements and ambushes with a precision their settled enemies could rarely match. The decimal organisation made commands flow cleanly from the khan down to the smallest squad.",
            "The Mongols also learned relentlessly. From the Chinese and Persians they adopted siege engines, catapults and engineers to crack the walled cities the steppe had never needed to storm. A nomad army that began with bows ended capable of reducing the greatest fortresses in Asia.",
          ],
          terms: [
            { term: "Composite bow", definition: "A powerful, compact bow that let Mongol horsemen shoot accurately at a gallop." },
            { term: "Feigned retreat", definition: "A favourite Mongol tactic of faking flight to lure enemies into an ambush." },
          ],
        },
      ],
      terms: [
        { term: "Genghis Khan", definition: "'Universal Ruler' — Temüjin, who united the Mongols in 1206 and launched their conquests." },
        { term: "Yassa", definition: "The Mongol legal code that imposed discipline and loyalty across the empire." },
        { term: "Steppe", definition: "The vast grasslands of Central Asia, home to the nomadic, horse-riding Mongols." },
      ],
      callout: {
        title: "Terror as strategy",
        body: "The Mongols deliberately cultivated a fearsome reputation. Cities that surrendered were spared and taxed; cities that resisted could be annihilated. The result was that many simply opened their gates — terror as a tool to conquer faster and with fewer losses.",
      },
    },
    {
      id: "empire",
      type: "narrative",
      title: "An Empire Across Eurasia",
      icon: "🌏",
      image: {
        wikiTitle: "Mongol Empire",
        alt: "Map of the Mongol Empire at its height",
        caption: "At its peak the empire stretched from the Pacific to Eastern Europe.",
      },
      paragraphs: [
        "Genghis's sons and grandsons carried the conquests further than any empire before or since on land. They overran Persia, sacked Baghdad in 1258 (ending the Abbasid Caliphate), crushed the Russian principalities, and struck into Poland and Hungary. Only the death of the Great Khan, recalling the princes home to elect a successor, may have spared western Europe.",
        "Ruling such distances demanded organisation. The Mongols built the Yam, a relay system of post-stations with fresh horses that let messengers and officials cross the empire with remarkable speed — a network admired by the Venetian traveller Marco Polo, who served at the court of Genghis's grandson Kublai Khan.",
        "Beneath the violence, the Mongols were strikingly pragmatic: they prized skilled administrators, craftsmen and merchants of any background, granted broad religious tolerance, and adopted the best ideas of those they conquered. For a few generations a single power stretched across Eurasia.",
      ],
      subLessons: [
        {
          title: "Conquest after Genghis",
          paragraphs: [
            "Genghis Khan's death in 1227 did not slow the empire — it accelerated it. His son Ögedei, elected Great Khan, drove conquest in every direction: the rest of northern China fell, Persia was subdued, and a great northern campaign overran the Russian principalities, sacking Kiev in 1240.",
            "In 1241 a Mongol army shattered a combined force of Polish and German knights at Liegnitz and crushed the Hungarians at the river Sajó, throwing all of Central Europe open to invasion. Western Christendom seemed defenceless before them.",
            "Then, abruptly, the Mongols withdrew. Word arrived that Ögedei had died, and the princes and generals turned back east to take part in choosing a new Great Khan. It may have been this steppe custom, as much as any army, that spared Western Europe from the Mongol storm.",
          ],
          terms: [
            { term: "Ögedei Khan", definition: "Genghis's son and successor, under whom the empire reached Europe and the Middle East." },
            { term: "Great Khan", definition: "The supreme ruler of the whole Mongol Empire, elected by a kurultai." },
          ],
        },
        {
          title: "Four khanates and the house divided",
          image: {
            wikiTitle: "Division of the Mongol Empire",
            alt: "Map of the four Mongol khanates",
            caption: "The empire split into four khanates ruled by Genghis's descendants.",
          },
          paragraphs: [
            "The empire eventually grew too vast and too divided by family rivalry to be governed as one. By the late 13th century it had fractured into four great khanates, each ruled by a branch of Genghis's descendants: the Yuan in China and Mongolia, the Ilkhanate in Persia, the Chagatai Khanate in Central Asia, and the Golden Horde across Russia.",
            "The most spectacular and terrible campaign of this era was Hülegü's. In 1258 his army stormed Baghdad, the centre of the Islamic world, slaughtering its inhabitants and extinguishing the Abbasid Caliphate — a wound the region never forgot. Two years later, however, the Mamluks of Egypt halted the seemingly unstoppable Mongols at Ain Jalut.",
            "In the east, Genghis's grandson Kublai Khan completed the conquest of southern China, overthrew the Song dynasty, and in 1271 founded the Yuan dynasty, ruling China as emperor from his great capital at Khanbaliq, modern Beijing.",
          ],
          terms: [
            { term: "Golden Horde", definition: "The Mongol khanate that ruled the Russian lands for over two centuries." },
            { term: "Battle of Ain Jalut", definition: "The 1260 defeat by Egypt's Mamluks that halted the Mongol advance into the Middle East." },
          ],
        },
        {
          title: "The Mongol Peace and a connected world",
          paragraphs: [
            "For all their fearsome reputation, the Mongols' greatest legacy may have been peace — the Pax Mongolica. Once the conquests were done, a single (if divided) authority stretched across Eurasia, and the trade routes of the Silk Road became safer than they had ever been. It was said a virgin carrying gold could walk the length of the empire unharmed.",
            "Along these secure routes flowed not just silk and spices but ideas and technology. Gunpowder, printing and the compass moved west toward Europe; astronomical and medical knowledge moved between Persia and China. Merchants and missionaries such as Marco Polo crossed the continent and brought back accounts that astonished their home worlds.",
            "The Mongols governed this exchange pragmatically, generally tolerating the many religions of their subjects and running an efficient relay-post system to bind the empire together. Their century of dominance knit East and West into a single connected world as never before — even as the disease that travelled those same roads would later help bring the Black Death to Europe.",
          ],
          terms: [
            { term: "Pax Mongolica", definition: "The 'Mongol Peace' that secured trade and travel across Eurasia." },
            { term: "Silk Road", definition: "The trans-Asian trade routes revived and protected under Mongol rule." },
          ],
        },
      ],
      terms: [
        { term: "Yam", definition: "The Mongol relay-station system that allowed rapid communication across the empire." },
        { term: "Khanate", definition: "One of the four great divisions into which the empire eventually split among Genghis's descendants." },
        { term: "Siege of Baghdad (1258)", definition: "The Mongol sack of Baghdad that ended the Abbasid Caliphate and devastated the city." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Khans & Generals",
      icon: "👤",
      intro: "The conqueror and the descendants who extended his empire.",
      figures: [
        {
          name: "Genghis Khan",
          role: "Founder",
          lived: "c. 1162–1227",
          bio: "United the Mongols and forged the war machine that conquered much of Asia, founding the largest contiguous land empire in history.",
          image: { wikiTitle: "Genghis Khan", alt: "Portrait of Genghis Khan" },
        },
        {
          name: "Ögedei Khan",
          role: "Second Great Khan",
          lived: "1186–1241",
          bio: "Genghis's son, who built the capital Karakorum and oversaw the conquests of northern China and the great western campaign into Russia and Europe.",
          image: { wikiTitle: "Ögedei Khan", alt: "Portrait of Ögedei Khan" },
        },
        {
          name: "Kublai Khan",
          role: "Great Khan & emperor of China",
          lived: "1215–1294",
          bio: "Genghis's grandson, who completed the conquest of China and founded the Yuan dynasty, ruling from a glittering court that hosted Marco Polo.",
          image: { wikiTitle: "Kublai Khan", alt: "Portrait of Kublai Khan" },
        },
        {
          name: "Subutai",
          role: "Master general",
          lived: "1175–1248",
          bio: "Perhaps history's greatest cavalry commander, who masterminded the lightning conquest of Russia and Eastern Europe and conquered more territory than almost any general ever.",
          image: { wikiTitle: "Subutai", alt: "Depiction of Subutai" },
        },
      ],
    },
    {
      id: "wars",
      type: "conflicts",
      title: "Campaigns of Conquest",
      icon: "⚔️",
      intro: "The Mongol campaigns redrew the map of Eurasia in a few decades.",
      conflicts: [
        {
          name: "The Khwarazmian campaign",
          years: "1219–1221",
          against: "The Khwarazmian Empire (Persia/Central Asia)",
          summary:
            "After Khwarazm murdered Mongol envoys, Genghis unleashed a campaign of devastating reprisal, destroying great cities like Bukhara and Samarkand.",
          outcome:
            "The wealthy Khwarazmian Empire was annihilated, opening Persia and Central Asia to Mongol rule.",
          image: { wikiTitle: "Mongol conquest of Khwarazmia", alt: "Depiction of the Khwarazmian campaign" },
        },
        {
          name: "The invasion of Europe",
          years: "1236–1242",
          against: "Russia, Poland & Hungary",
          summary:
            "Under Batu and the general Subutai, the Mongols crushed the Russian principalities and shattered European armies at Legnica and Mohi, reaching the gates of Vienna.",
          outcome:
            "Eastern Europe lay open — but the death of Great Khan Ögedei recalled the princes, and the Mongols withdrew.",
        },
        {
          name: "The sack of Baghdad",
          years: "1258",
          against: "The Abbasid Caliphate",
          summary:
            "Hülegü Khan besieged and stormed Baghdad, then the cultural heart of the Islamic world, slaughtering its people and destroying its libraries.",
          outcome:
            "The end of the Abbasid Caliphate and a blow from which the medieval Islamic world never fully recovered.",
          image: { wikiTitle: "Siege of Baghdad (1258)", alt: "Depiction of the siege of Baghdad" },
        },
      ],
    },
    {
      id: "legacy",
      type: "achievements",
      title: "The Mongol Legacy",
      icon: "💡",
      intro: "Beyond destruction, the Mongols reshaped trade, travel and the connections between civilizations.",
      achievements: [
        {
          name: "The Pax Mongolica",
          field: "Trade",
          description: "A single power secured the Silk Road, making overland travel from Europe to China safer than ever before or since.",
          legacy: "Goods, technologies and ideas flowed across Eurasia — including, eventually, gunpowder and the compass to Europe.",
        },
        {
          name: "Meritocracy & tolerance",
          field: "Government",
          description: "The Mongols promoted talent regardless of origin and allowed conquered peoples to keep their faiths.",
          legacy: "A model of governing a diverse, continent-spanning realm.",
        },
        {
          name: "The relay postal system (Yam)",
          field: "Communication",
          description: "Thousands of relay stations let news and officials cross the empire at unprecedented speed.",
          legacy: "Admired and imitated by later states across Asia.",
        },
        {
          name: "Connecting East and West",
          field: "Exchange",
          description: "Mongol-era contact brought travellers like Marco Polo east and carried knowledge and disease west.",
          legacy: "The exchange also helped spread the Black Death along the trade routes.",
        },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the empire of the steppe.",
      questions: [
        {
          q: "Who united the Mongol tribes in 1206?",
          options: ["Kublai Khan", "Genghis Khan", "Attila", "Subutai"],
          correct: 1,
          fb: "Temüjin was proclaimed Genghis Khan, 'Universal Ruler'.",
        },
        {
          q: "What was the Mongol Empire at its height?",
          options: ["A small steppe kingdom", "The largest contiguous land empire in history", "A naval empire", "A city-state"],
          correct: 1,
          fb: "It stretched from Korea to Eastern Europe across a single land mass.",
        },
        {
          q: "What made the Mongol army so effective?",
          options: ["Heavy infantry", "Highly mobile mounted archers and discipline", "War elephants", "Naval power"],
          correct: 1,
          fb: "Mounted archers, merit-based command and the Yassa code gave unmatched mobility.",
        },
        {
          q: "How did the Mongols often persuade cities to surrender without a fight?",
          options: ["Bribery", "A fearsome reputation for terror", "Religious conversion", "Trade deals"],
          correct: 1,
          fb: "Resisting cities could be annihilated; many simply opened their gates.",
        },
        {
          q: "What was the 'Pax Mongolica'?",
          options: ["A peace treaty with Europe", "Safe trade across the Silk Road under Mongol rule", "A Mongol religion", "A law code"],
          correct: 1,
          fb: "Mongol control made overland Eurasian trade safer than ever.",
        },
        {
          q: "Which Islamic capital did the Mongols famously sack in 1258?",
          options: ["Cairo", "Damascus", "Baghdad", "Mecca"],
          correct: 2,
          fb: "The sack of Baghdad ended the Abbasid Caliphate.",
        },
        {
          q: "Genghis's grandson who conquered all China and founded the Yuan dynasty was…",
          options: ["Ögedei", "Batu", "Kublai Khan", "Hülegü"],
          correct: 2,
          fb: "Kublai Khan ruled China and hosted Marco Polo.",
        },
      ],
    },
  ],
};
