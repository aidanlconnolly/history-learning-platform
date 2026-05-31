import type { Civilization } from "../types";

export const china: Civilization = {
  id: "china",
  name: "Imperial China",
  shortName: "China",
  emblem: "🐉",
  region: "East Asia",
  modernCountries: ["China", "Mongolia"],
  timespan: "221 BCE – 1912 CE",
  startYear: -221,
  endYear: 1912,
  color: "#dc2626",
  tagline:
    "The world's most enduring state — unified by a first emperor, governed by scholars, and inventor of paper, gunpowder, the compass and printing.",
  summary:
    "Imperial China was the longest-lasting and most populous political tradition in history, running from the First Emperor in 221 BCE until 1912. Unified by the Qin, perfected by the Han and renewed through a 'dynastic cycle' over two millennia, it was governed by an extraordinary bureaucracy of exam-selected scholars and produced inventions that reshaped the world.",
  hero: {
    wikiTitle: "Great Wall of China",
    alt: "The Great Wall of China",
    caption: "The Great Wall, built and rebuilt over centuries to guard the north.",
  },
  facts: [
    { label: "Unified", value: "221 BCE by Qin Shi Huang" },
    { label: "Governed by", value: "Confucian scholar-officials" },
    { label: "Great inventions", value: "Paper, printing, gunpowder, compass" },
    { label: "Key dynasties", value: "Qin, Han, Tang, Song, Ming, Qing" },
    { label: "Ended", value: "1912 (Qing dynasty falls)" },
  ],
  majorCities: [
    { name: "Chang'an",  lat: 34.27, lon: 108.93 },
    { name: "Luoyang",   lat: 34.68, lon: 112.44 },
    { name: "Nanjing",   lat: 32.06, lon: 118.79 },
    { name: "Beijing",   lat: 39.91, lon: 116.39 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments in Imperial China",
      icon: "⭐",
      intro: "From the First Emperor's brutal unification to the fall of the last dynasty — two thousand years of dynasty, invention and renewal.",
      milestones: [
        { year: "221 BCE",  title: "Qin Shi Huang Unifies China", description: "The ruthless king of Qin conquers all rival states and declares himself 'First Emperor' — creating China as a unified state for the first time.", icon: "🐉", type: "rise" },
        { year: "214 BCE",  title: "Great Wall Construction Begins", description: "Qin Shi Huang conscripts hundreds of thousands to connect existing walls into one vast barrier against nomads — at colossal human cost.", icon: "🧱", type: "innovation" },
        { year: "210 BCE",  title: "First Emperor Dies, Qin Falls", description: "The First Emperor dies and his empire collapses almost immediately into civil war — the price of ruling by fear without legitimacy.", icon: "💥", type: "fall" },
        { year: "206 BCE",  title: "Han Dynasty Founded", description: "Liu Bang wins the civil war and founds the Han Dynasty — China's golden age of Confucian government, trade and expansion.", icon: "🌟", type: "rise" },
        { year: "c. 130 BCE", title: "Silk Road Opens", description: "Han emperor Wu Di pushes west, opening the Silk Road trade network that links China to Rome, Persia and India.", icon: "🛤️", type: "innovation" },
        { year: "c. 105 CE", title: "Paper Invented", description: "Imperial court official Cai Lun improves a method of making paper from bark and hemp — one of humanity's most transformative inventions.", icon: "📄", type: "innovation" },
        { year: "220 CE",   title: "Han Dynasty Falls", description: "The Han empire fractures into the Three Kingdoms period — a time of war later romanticised as China's age of heroes.", icon: "⚔️", type: "fall" },
        { year: "589 CE",   title: "Sui Dynasty Reunifies China", description: "The short-lived Sui Dynasty reunites China after 350 years of division, building the Grand Canal — but exhausts itself in war.", icon: "🌊", type: "rise" },
        { year: "618 CE",   title: "Tang Dynasty — The Golden Age", description: "The Tang Dynasty ushers in China's greatest era of poetry, art, Buddhism and cosmopolitan culture — Chang'an becomes the world's largest city.", icon: "✨", type: "cultural" },
        { year: "c. 868 CE", title: "World's First Printed Book", description: "The Diamond Sutra is printed in China using woodblock printing — the world's oldest known dated printed book.", icon: "📚", type: "innovation" },
        { year: "960 CE",   title: "Song Dynasty & the Tech Revolution", description: "The Song Dynasty achieves extraordinary advances: gunpowder weapons, the magnetic compass, movable type printing and an early market economy.", icon: "💡", type: "innovation" },
        { year: "1271 CE",  title: "Kublai Khan Founds the Yuan Dynasty", description: "Mongol ruler Kublai Khan conquers all China and founds the Yuan Dynasty, receiving Marco Polo at his court.", icon: "🏹", type: "conquest" },
        { year: "1368 CE",  title: "Ming Dynasty Expels the Mongols", description: "A peasant rebel founds the Ming Dynasty, drives out the Mongols and builds the Forbidden City and the final Great Wall.", icon: "🏯", type: "rise" },
        { year: "1644 CE",  title: "Qing Dynasty Conquers China", description: "The Manchu people from the north seize Beijing and found the Qing Dynasty — China's last imperial ruling house.", icon: "🌸", type: "conquest" },
        { year: "1912 CE",  title: "The Last Emperor Abdicates", description: "A republican revolution ends 2,000 years of imperial rule; the last emperor Puyi abdicates, ending the dynastic era.", icon: "🌅", type: "fall" },
      ],
    },
    {
      id: "unification",
      type: "narrative",
      title: "The First Emperor",
      icon: "🐉",
      image: {
        wikiTitle: "Terracotta Army",
        alt: "The Terracotta Army",
        caption: "The Terracotta Army guarding the tomb of China's First Emperor.",
      },
      paragraphs: [
        "For centuries China was divided among warring states. In 221 BCE the ruthless king of Qin conquered them all and declared himself Qin Shi Huang — 'First Emperor'. He unified China and imposed a single script, currency, and system of weights, measures and axle-widths, binding the country together in ways that long outlasted him.",
        "He ruled by the harsh philosophy of Legalism — strict laws and severe punishments — conscripting vast armies of labourers to link existing walls into an early Great Wall against northern nomads, and building canals and roads. To guard him in death, he was buried with an army of some 8,000 life-sized terracotta soldiers, each with an individual face.",
        "The Qin dynasty was brutal and brief, collapsing within a few years of his death. But it had created something permanent: the idea of a single, unified China ruled by one emperor — an idea that would endure for over two thousand years.",
      ],
      subLessons: [
        {
          title: "The Warring States and the rise of Qin",
          paragraphs: [
            "For over two centuries before unification, China was torn apart in the aptly named Warring States period. Seven great kingdoms fought one another with mass conscript armies, iron weapons and ruthless strategy — it was the age that produced Sun Tzu's 'Art of War'. Amid the bloodshed, the question of how best to rule was fiercely debated.",
            "The western state of Qin rose above the rest by embracing Legalism, a hard-edged doctrine holding that people are selfish and must be controlled by strict laws, harsh punishments and rich rewards. Qin reorganised itself into a disciplined war-machine, rewarding soldiers for battlefield success regardless of birth.",
            "One by one, between 230 and 221 BCE, Qin swallowed its rivals. Its king, Ying Zheng, stood at last as master of all China — and took a new and unprecedented title to match his unprecedented achievement.",
          ],
          terms: [
            { term: "Warring States", definition: "The era of seven rival kingdoms fighting for supremacy before China's unification." },
            { term: "Legalism", definition: "The strict philosophy of rule by harsh law and punishment favoured by the Qin." },
          ],
        },
        {
          title: "One emperor, one standard",
          image: {
            wikiTitle: "Great Wall of China",
            alt: "The Great Wall of China",
            caption: "Qin linked earlier walls into an early Great Wall.",
          },
          paragraphs: [
            "Declaring himself Qin Shi Huang — 'First Emperor' — he set about welding his conquests into a single state. He abolished the old feudal lords and divided the realm into centrally governed commanderies run by appointed officials answerable to him alone.",
            "Most far-reaching was his programme of standardisation. He imposed a single script, a single currency, uniform weights and measures, and even standard axle-widths so carts could run in the same ruts across the empire. He built a vast network of roads and canals, and linked existing frontier walls into an early Great Wall against northern nomads.",
            "Of all these, the shared writing system mattered most. Even when spoken dialects were mutually unintelligible, educated Chinese everywhere could read the same characters — a unifying thread that would hold the civilisation together for more than two thousand years.",
          ],
          terms: [
            { term: "Qin Shi Huang", definition: "The 'First Emperor', who unified China in 221 BCE and standardised script, coinage and measures." },
            { term: "Standardisation", definition: "Qin's unifying of script, currency, weights and measures across China." },
          ],
        },
        {
          title: "Tyranny, the tomb, and a swift fall",
          image: {
            wikiTitle: "Terracotta Army",
            alt: "The Terracotta Army",
            caption: "Thousands of clay soldiers guard the First Emperor's tomb.",
          },
          paragraphs: [
            "The First Emperor's rule was as harsh as it was effective. He conscripted hundreds of thousands for his building projects, where many died, and crushed dissent without mercy — tradition holds that he burned books and buried scholars alive to silence criticism, especially from followers of Confucius.",
            "Obsessed with immortality, he sent expeditions to find an elixir of eternal life and may have hastened his own death by swallowing mercury 'medicines'. He prepared for the afterlife on a colossal scale, building a vast tomb near Xi'an guarded by the Terracotta Army — thousands of individually sculpted clay warriors.",
            "Yet for all its power, the Qin dynasty barely outlived its founder. Crushing taxes and forced labour bred rebellion, and within a few years of his death in 210 BCE the dynasty collapsed. Out of the chaos rose the Han — but the unified empire the First Emperor had forged endured.",
          ],
          terms: [
            { term: "Terracotta Army", definition: "Thousands of life-sized clay soldiers buried to guard the First Emperor." },
            { term: "Mandate of Heaven", definition: "The belief that Heaven grants rulers the right to rule — and withdraws it from the unjust, justifying rebellion." },
          ],
        },
      ],
      terms: [
        { term: "Qin Shi Huang", definition: "The 'First Emperor', who unified China in 221 BCE and standardised script, coinage and measures." },
        { term: "Legalism", definition: "The strict philosophy of rule by harsh law and punishment favoured by the Qin." },
        { term: "Mandate of Heaven", definition: "The belief that Heaven grants rulers the right to rule — and withdraws it from the unjust, justifying rebellion." },
      ],
      callout: {
        title: "The dynastic cycle",
        body: "Chinese history runs in a recurring pattern: a vigorous new dynasty unites the land, peaks, then grows corrupt and weak until disaster, rebellion or invasion ends it — and a new dynasty claims the 'Mandate of Heaven'. China shattered and reunified many times, yet always re-formed as China.",
      },
    },
    {
      id: "han-confucius",
      type: "narrative",
      title: "The Han & Government by Scholars",
      icon: "📚",
      image: {
        wikiTitle: "Confucius",
        alt: "A depiction of Confucius",
        caption: "Confucius, whose teachings shaped Chinese government for 2,000 years.",
      },
      paragraphs: [
        "The Han dynasty (206 BCE–220 CE) that followed the Qin lasted four centuries and became China's classical golden age — so foundational that the majority ethnic group still call themselves 'Han Chinese'. The Han kept Qin's unified state but softened its harshness with the ethics of Confucius.",
        "Confucius (551–479 BCE) had taught that society flourishes through respect, family duty, education and virtuous, benevolent rulers. Under the Han his ideas became the official philosophy of the state. Most strikingly, China began selecting government officials by competitive written examinations on the Confucian classics — in principle, advancement by merit rather than birth.",
        "This scholar-bureaucracy, refined over centuries, gave China remarkably stable and sophisticated government, run by educated 'mandarins' rather than warrior-nobles. It was perhaps the most advanced administrative system in the pre-modern world.",
      ],
      subLessons: [
        {
          title: "The Han: China's classical mould",
          image: {
            wikiTitle: "Han dynasty",
            alt: "Han dynasty artefacts",
            caption: "The Han set the lasting pattern of imperial China.",
          },
          paragraphs: [
            "The Han dynasty (206 BCE–220 CE) followed the brief, brutal Qin and lasted four centuries, becoming China's classical golden age. It kept the unified state the Qin had built but softened its harshness, governing with the ethics of Confucius rather than the terror of Legalism.",
            "So foundational was this era that the majority ethnic group of China still call themselves 'Han Chinese' to this day. Under the energetic Emperor Wu, the empire expanded dramatically and opened the Silk Road, sending Chinese silk westward as far as Rome.",
            "The Han also pioneered inventions that would change the world, above all paper, and built an administrative machine far more advanced than anything in the contemporary West — a template every later dynasty would follow.",
          ],
          terms: [
            { term: "Han dynasty", definition: "China's four-century classical golden age that set the pattern for imperial rule." },
            { term: "Silk Road", definition: "The trade routes opened under the Han that linked China to Central Asia and Rome." },
          ],
        },
        {
          title: "Confucius and the art of good government",
          image: {
            wikiTitle: "Confucius",
            alt: "A depiction of Confucius",
            caption: "Confucius taught that virtue and duty hold society together.",
          },
          paragraphs: [
            "Confucius (551–479 BCE) lived during the chaos before unification and taught that a harmonious society rests not on harsh law but on virtue, respect and the proper performance of one's role — ruler and subject, parent and child, each with duties to the other.",
            "He stressed family loyalty, reverence for elders and ancestors, education, and above all the ideal of the benevolent ruler who governs by moral example rather than fear. Under the Han, his ideas became the official philosophy of the Chinese state.",
            "Confucianism gave imperial China a shared moral language that endured for two thousand years and spread across East Asia — into Korea, Japan and Vietnam — shaping how whole societies thought about family, duty and government.",
          ],
          terms: [
            { term: "Confucianism", definition: "The ethical system of Confucius, stressing virtue, respect, family duty and benevolent government." },
            { term: "Filial piety", definition: "The Confucian duty of respect and care owed by children to parents and ancestors." },
          ],
        },
        {
          title: "Government by examination",
          paragraphs: [
            "China's most remarkable institution was its civil service, staffed not by warrior-nobles but by scholar-officials chosen, in principle, by merit. Candidates sat gruelling written examinations on the Confucian classics, and those who passed entered the bureaucracy that actually ran the empire.",
            "These 'mandarins' collected taxes, judged disputes, managed granaries and waterworks, and advised the throne. Because advancement depended on study rather than birth, a talented commoner could, in theory, rise to high office — an idea of advancement by merit far ahead of its time.",
            "This educated class gave China extraordinary continuity. Even when foreign conquerors like the Mongols and Manchus seized the throne, they had to rule through the Chinese bureaucracy and were largely absorbed by it. The exam system endured until 1905, near the very end of imperial China.",
          ],
          terms: [
            { term: "Imperial examinations", definition: "Competitive written exams on the classics used to select officials by merit." },
            { term: "Mandarin", definition: "A scholar-official of the Chinese bureaucracy, selected through the examinations." },
          ],
        },
      ],
      terms: [
        { term: "Confucianism", definition: "The ethical system of Confucius, stressing virtue, respect, family duty and benevolent government." },
        { term: "Imperial examinations", definition: "Competitive written exams on the classics used to select officials by merit." },
        { term: "Mandarin", definition: "A scholar-official of the Chinese bureaucracy, selected through the examinations." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Emperors & Sages",
      icon: "👤",
      intro: "The thinkers and rulers who defined the Chinese state.",
      figures: [
        {
          name: "Confucius",
          role: "Philosopher",
          lived: "551–479 BCE",
          bio: "China's most influential thinker, whose teachings on ethics, family and good government became the bedrock of Chinese civilization and East Asian culture.",
          image: { wikiTitle: "Confucius", alt: "Portrait of Confucius" },
        },
        {
          name: "Qin Shi Huang",
          role: "First Emperor",
          lived: "259–210 BCE",
          bio: "Unified China by conquest in 221 BCE, standardised the state, began the Great Wall, and was buried with the Terracotta Army.",
          image: { wikiTitle: "Qin Shi Huang", alt: "Depiction of Qin Shi Huang" },
        },
        {
          name: "Emperor Wu of Han",
          role: "Han emperor",
          lived: "156–87 BCE",
          bio: "Expanded the empire dramatically, made Confucianism the state doctrine, and opened the Silk Road trade routes to Central Asia and beyond.",
          image: { wikiTitle: "Emperor Wu of Han", alt: "Depiction of Emperor Wu of Han" },
        },
        {
          name: "Kublai Khan",
          role: "Yuan emperor",
          lived: "1215–1294",
          bio: "Mongol grandson of Genghis Khan who conquered all of China and founded the Yuan dynasty, hosting Marco Polo at his glittering court.",
          image: { wikiTitle: "Kublai Khan", alt: "Portrait of Kublai Khan" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "The Four Great Inventions & More",
      icon: "💡",
      intro: "China's technology led the world for over a thousand years.",
      achievements: [
        {
          name: "Paper",
          field: "Technology",
          description: "Invented in Han China around 105 CE, cheap paper transformed record-keeping, learning and communication.",
          legacy: "The writing surface of the entire modern world.",
        },
        {
          name: "Printing",
          field: "Technology",
          description: "The Chinese developed woodblock printing and even movable type centuries before Gutenberg, mass-producing books.",
          legacy: "The world's first printed books and newspapers.",
        },
        {
          name: "Gunpowder",
          field: "Technology",
          description: "Discovered by alchemists seeking an elixir of immortality, gunpowder was used in fireworks, bombs and early guns.",
          legacy: "Eventually transformed warfare across the globe.",
        },
        {
          name: "The magnetic compass",
          field: "Navigation",
          description: "The Chinese first used lodestone compasses for navigation, enabling long sea voyages.",
          legacy: "Made the European Age of Exploration possible.",
        },
        {
          name: "Silk & the Silk Road",
          field: "Trade",
          description: "China guarded the secret of silk for millennia and traded it west along the Silk Road for gold, glass and horses.",
          legacy: "The great trade network linking China, India, Persia and Rome.",
        },
        {
          name: "The Grand Canal",
          field: "Engineering",
          description: "The longest artificial waterway in the world, linking northern and southern China to move grain and troops.",
          legacy: "Still in use today, over a thousand years later.",
        },
      ],
    },
    {
      id: "decline",
      type: "narrative",
      title: "Golden Ages & the End of Empire",
      icon: "🏯",
      image: {
        wikiTitle: "Forbidden City",
        alt: "The Forbidden City in Beijing",
        caption: "The Forbidden City, imperial palace of the Ming and Qing emperors.",
      },
      paragraphs: [
        "After the Han, China reunified gloriously under the Tang and Song dynasties — eras of poetry, porcelain, printing and the first paper money, when Chinese cities were the largest and richest on Earth. The Ming dynasty later sent vast treasure fleets under Admiral Zheng He as far as East Africa, decades before Columbus.",
        "China's last dynasty, the Qing, was founded by the Manchus and ruled a vast, populous empire. But in the 1800s it was battered by the Opium Wars with Britain, internal rebellions, and the pressures of industrialised foreign powers it had long dismissed as 'barbarians'.",
        "In 1912, after more than two thousand years, the last emperor — a small boy named Puyi — abdicated, and China became a republic. Yet the civilization itself endured: its language, its reverence for learning, and its sense of itself as a single enduring culture remain among the most continuous on Earth.",
      ],
      subLessons: [
        {
          title: "The Tang and Song golden ages",
          image: {
            wikiTitle: "Tang dynasty",
            alt: "Tang dynasty art",
            caption: "The Tang capital Chang'an was the world's largest city.",
          },
          paragraphs: [
            "After a long period of division, China was gloriously reunified under the Tang dynasty (618–907), remembered as a cosmopolitan golden age. Its capital Chang'an was the largest city on Earth, a hub of foreign merchants, monks and music, and Tang poetry remains the most beloved in all Chinese literature.",
            "The Song dynasty (960–1279) that followed unleashed a commercial and technological revolution. It produced the world's first paper money, printed books with movable type, gunpowder weapons and the magnetic compass, and supported bustling cities and a sophisticated market economy.",
            "By many measures, Song China was the most advanced society on the planet — richer, more literate and more technologically inventive than anywhere in the contemporary world.",
          ],
          terms: [
            { term: "Tang & Song dynasties", definition: "Medieval golden ages of Chinese poetry, technology, trade and the world's first paper money." },
            { term: "Paper money", definition: "First issued under the Song — the earliest banknotes in world history." },
          ],
        },
        {
          title: "Treasure fleets and the Ming retreat",
          image: {
            wikiTitle: "Forbidden City",
            alt: "The Forbidden City in Beijing",
            caption: "The Ming built the Forbidden City and the final Great Wall.",
          },
          paragraphs: [
            "The Ming dynasty (1368–1644), founded by a peasant rebel who expelled the Mongols, built the Forbidden City in Beijing and the magnificent stone Great Wall we know today. In the early 1400s it launched one of history's great adventures.",
            "Admiral Zheng He commanded vast treasure fleets — hundreds of ships, some far larger than any in Europe — that sailed as far as India, Arabia and the coast of East Africa, decades before Columbus crossed the Atlantic. China had the means to dominate the seas.",
            "Then, remarkably, it turned away. The voyages were halted, the fleets dismantled, and the Ming looked inward, a fateful choice that left the oceans — and the coming age of global exploration — to the Europeans.",
          ],
          terms: [
            { term: "Zheng He", definition: "Ming admiral whose huge treasure fleets reached India, Arabia and Africa in the early 1400s." },
            { term: "Forbidden City", definition: "The vast imperial palace complex in Beijing, built under the Ming." },
          ],
        },
        {
          title: "The Qing, the Opium Wars and the end of empire",
          paragraphs: [
            "China's last dynasty, the Qing (1644–1912), was founded by the Manchus from the north and ruled a vast, populous and prosperous empire at its height. But it long dismissed the industrialising European powers as 'barbarians' with little to offer.",
            "That confidence shattered in the 19th century. In the Opium Wars, Britain used military force to compel China to open its markets and accept the opium trade, exposing the empire's military weakness and beginning what the Chinese remember as a 'century of humiliation' of unequal treaties and foreign concessions.",
            "Battered by foreign pressure and massive internal rebellions, the dynasty finally fell. In 1912, after more than two thousand years, the last emperor — a small boy named Puyi — abdicated and China became a republic. Yet the civilisation endured: its language, learning and sense of itself remain among the most continuous on Earth.",
          ],
          terms: [
            { term: "Opium Wars", definition: "19th-century wars in which Britain forced trade concessions, exposing Qing weakness." },
            { term: "Century of humiliation", definition: "The era of foreign domination and unequal treaties that China remembers from the 1800s." },
          ],
        },
      ],
      terms: [
        { term: "Tang & Song dynasties", definition: "Medieval golden ages of Chinese poetry, technology, trade and the world's first paper money." },
        { term: "Zheng He", definition: "Ming admiral whose huge treasure fleets reached India, Arabia and Africa in the early 1400s." },
        { term: "Opium Wars", definition: "19th-century wars in which Britain forced trade concessions, exposing Qing weakness." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Eight questions across two millennia of Chinese history.",
      questions: [
        {
          q: "Who unified China in 221 BCE and became its First Emperor?",
          options: ["Confucius", "Qin Shi Huang", "Kublai Khan", "Emperor Wu"],
          correct: 1,
          fb: "Qin Shi Huang conquered the warring states and standardised the empire.",
        },
        {
          q: "What was buried to guard the First Emperor's tomb?",
          options: ["The Great Wall", "The Terracotta Army", "The Grand Canal", "Paper money"],
          correct: 1,
          fb: "Around 8,000 unique life-sized terracotta soldiers were buried with him.",
        },
        {
          q: "Whose ethical teachings became the basis of Chinese government?",
          options: ["Buddha", "Laozi", "Confucius", "Sun Tzu"],
          correct: 2,
          fb: "Confucianism stressed virtue, duty and benevolent rule.",
        },
        {
          q: "How were Chinese officials ideally selected?",
          options: ["By birth", "By competitive written examinations", "By the army", "By lottery"],
          correct: 1,
          fb: "The imperial exams aimed to choose officials by merit, not noble birth.",
        },
        {
          q: "Which of these was NOT a Chinese invention?",
          options: ["Paper", "Gunpowder", "The compass", "The steam engine"],
          correct: 3,
          fb: "Paper, gunpowder and the compass are three of China's 'Four Great Inventions'.",
        },
        {
          q: "The belief that justified rebellion against an unjust ruler was the…",
          options: ["Mandate of Heaven", "Divine Right", "Social Contract", "Pax Sinica"],
          correct: 0,
          fb: "Heaven was thought to withdraw its mandate from corrupt dynasties.",
        },
        {
          q: "Which dynasty's name do most Chinese still use for their ethnicity?",
          options: ["Qin", "Han", "Tang", "Ming"],
          correct: 1,
          fb: "The classical Han golden age gave 'Han Chinese' its name.",
        },
        {
          q: "When did Imperial China end?",
          options: ["476 CE", "1453", "1789", "1912"],
          correct: 3,
          fb: "The last emperor, Puyi, abdicated in 1912 and China became a republic.",
        },
      ],
    },
  ],
};
