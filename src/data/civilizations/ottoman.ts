import type { Civilization } from "../types";

export const ottoman: Civilization = {
  id: "ottoman",
  name: "The Ottoman Empire",
  shortName: "Ottomans",
  emblem: "🌙",
  region: "Anatolia, the Balkans & the Middle East",
  modernCountries: ["Turkey", "Greece", "Egypt", "Saudi Arabia", "Iraq", "Syria", "Israel", "Jordan", "Bulgaria", "Hungary", "Tunisia"],
  timespan: "1299 – 1922 CE",
  startYear: 1299,
  endYear: 1922,
  color: "#b91c1c",
  tagline:
    "A 600-year empire straddling three continents — conqueror of Constantinople, rival of Europe, and ruler of the Islamic holy cities.",
  summary:
    "The Ottoman Empire grew from a small Turkish principality into one of history's great powers, ruling southeastern Europe, the Middle East and North Africa for over six centuries. It conquered Constantinople, ended the Byzantine Empire, reached the gates of Vienna, and governed a vast multi-ethnic, multi-faith realm through a sophisticated and often tolerant system before its long decline and fall in the 20th century.",
  hero: {
    wikiTitle: "Hagia Sophia",
    alt: "The Hagia Sophia in Istanbul",
    caption: "Hagia Sophia — a Byzantine cathedral turned Ottoman mosque.",
  },
  facts: [
    { label: "Founder", value: "Osman I (1299)" },
    { label: "Capital", value: "Constantinople / Istanbul (after 1453)" },
    { label: "Span", value: "Three continents" },
    { label: "Ruler", value: "Sultan (and Caliph after 1517)" },
    { label: "Ended", value: "1922 (sultanate abolished)" },
  ],
  majorCities: [
    { name: "Constantinople", lat: 41.01, lon: 28.95 },
    { name: "Bursa",          lat: 40.19, lon: 29.06 },
    { name: "Edirne",         lat: 41.67, lon: 26.55 },
    { name: "Cairo",          lat: 30.06, lon: 31.24 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the Ottoman Empire",
      icon: "⭐",
      intro: "Six centuries of empire — from a tiny Anatolian frontier state to a power that straddled three continents and terrified Europe.",
      milestones: [
        { year: "1299 CE",  title: "Osman I Founds the Ottoman State", description: "Osman I, a small Turkish frontier lord in northwest Anatolia, declares independence from the Mongol-weakened Seljuk sultanate.", icon: "🌙", type: "rise" },
        { year: "1326 CE",  title: "Bursa Captured", description: "The Ottomans take the wealthy Byzantine city of Bursa, making it their first major capital and centre of silk trade.", icon: "🏙️", type: "conquest" },
        { year: "1354 CE",  title: "Crossing into Europe", description: "Ottoman forces cross the Dardanelles and seize Gallipoli — the first permanent Ottoman foothold in Europe.", icon: "⛵", type: "conquest" },
        { year: "1389 CE",  title: "Battle of Kosovo", description: "The Ottomans defeat a coalition of Balkan lords at Kosovo Polje, fatally weakening Serbian resistance and opening the Balkans.", icon: "⚔️", type: "war" },
        { year: "1402 CE",  title: "Timur Defeats Bayezid I", description: "The Central Asian conqueror Timur destroys an Ottoman army at Ankara and captures Sultan Bayezid — a near-fatal blow to the empire.", icon: "💥", type: "fall" },
        { year: "1413 CE",  title: "Mehmed I Reunifies the Empire", description: "After a decade of civil war among Bayezid's sons, Mehmed I defeats his brothers and restores Ottoman unity.", icon: "👑", type: "rise" },
        { year: "1453 CE",  title: "Constantinople Falls — Byzantine Empire Ends", description: "Sultan Mehmed II, aged 21, breaches the walls of Constantinople with giant bronze cannon, ending 1,000 years of the Byzantine Empire.", icon: "🏰", type: "conquest" },
        { year: "1517 CE",  title: "Egypt and the Holy Cities Conquered", description: "Selim I defeats the Mamluk Sultanate, seizing Egypt, Syria and the holy cities of Mecca and Medina — making the Sultan Caliph of all Sunni Islam.", icon: "🕌", type: "conquest" },
        { year: "1520 CE",  title: "Suleiman the Magnificent Takes Power", description: "Suleiman I begins a 46-year reign that brings the empire to its cultural and territorial peak — poet, lawmaker and conqueror.", icon: "✨", type: "rise" },
        { year: "1529 CE",  title: "First Siege of Vienna Fails", description: "Ottoman forces reach Vienna but fail to breach its walls before winter forces a retreat — the high-water mark of Ottoman expansion in Europe.", icon: "❄️", type: "war" },
        { year: "1566 CE",  title: "Suleiman the Magnificent Dies", description: "Suleiman dies on campaign in Hungary — his death marks the beginning of a long, slow decline from the empire's peak.", icon: "⚰️", type: "fall" },
        { year: "1571 CE",  title: "Battle of Lepanto", description: "A Holy League of European states destroys the Ottoman fleet at Lepanto — the empire's first major naval defeat, shattering its aura of invincibility.", icon: "🌊", type: "war" },
        { year: "1683 CE",  title: "Second Siege of Vienna Fails", description: "A massive Ottoman army besieges Vienna but is routed by a Polish-led relief force — beginning a century of territorial losses.", icon: "🏇", type: "fall" },
        { year: "1699 CE",  title: "Treaty of Karlowitz", description: "The Ottomans cede Hungary to Austria in the first major territorial concession — beginning the long decline chronicled as the 'Eastern Question'.", icon: "📉", type: "fall" },
        { year: "1922 CE",  title: "Sultanate Abolished", description: "Mustafa Kemal (Atatürk) abolishes the sultanate after World War I defeat — ending 623 years of Ottoman rule and creating modern Turkey.", icon: "🌅", type: "fall" },
      ],
    },
    {
      id: "rise",
      type: "narrative",
      title: "From Frontier Beylik to Empire",
      icon: "🌙",
      image: {
        wikiTitle: "Osman I",
        alt: "Depiction of Osman I",
        caption: "Osman I, whose name the dynasty and empire would carry.",
      },
      paragraphs: [
        "Around 1299, in the borderlands of Anatolia where the crumbling Byzantine and Seljuk worlds met, a Turkish warrior-chief named Osman founded a small frontier principality. His followers, the Ottomans (from 'Osmanli'), were ghazi warriors fired by faith and the lure of conquest at the edge of the Christian world.",
        "Generation by generation the Ottomans expanded, leaping into Europe and absorbing the Balkans even before they took the great prize. They built a formidable state around a professional standing army — including the famous Janissaries, elite infantry originally recruited as boys from Christian families through the devshirme system and converted to Islam.",
        "By the 15th century the once-tiny beylik had encircled the last remnant of the thousand-year Roman (Byzantine) Empire: the great city of Constantinople itself.",
      ],
      subLessons: [
        {
          title: "A principality on the frontier",
          paragraphs: [
            "Around 1300 Anatolia was a patchwork of small Turkish principalities, the wreckage left by the collapse of the Seljuk Sultanate and the weakening of Byzantium. Osman I led one of the smallest of these — a frontier beylik on the very edge of Byzantine territory in northwestern Anatolia.",
            "Its position was its fortune. Sitting directly on the Christian–Muslim frontier, Osman's band drew a constant stream of restless warriors eager for raiding and land, while rival Turkish emirs were boxed in behind them. Every Byzantine town that fell brought new recruits and resources.",
            "Osman's reputation for justice and success — and a famous dream in which a great tree grew from his body to shade the world — gave the young dynasty an aura of destiny. From this obscure frontier outpost would grow an empire that lasted over six centuries.",
          ],
          terms: [
            { term: "Osman I", definition: "The frontier warrior-chief whose dynasty became the Ottoman Empire." },
            { term: "Anatolia", definition: "The peninsula of modern Turkey where the Ottoman state was born." },
          ],
        },
        {
          title: "The ghazi spirit and holy war",
          paragraphs: [
            "The early Ottomans understood themselves as ghazis — warriors of the faith fighting on the frontier of Islam. This ideal blended religious zeal with the very practical appeal of plunder, glory and land, and it gave the diverse fighters who flocked to Osman a shared purpose.",
            "Yet the Ottomans were never simply fanatics. On the mixed frontier they cooperated with Christian lords, took Byzantine wives, and welcomed converts and allies of every background. The ghazi identity was flexible enough to both motivate holy war and absorb the very peoples it conquered.",
            "This combination — ideological drive plus pragmatic inclusion — let the Ottomans expand far faster than rivals who relied on a single tribe or sect. They grew not by exterminating their enemies but by recruiting them.",
          ],
          terms: [
            { term: "Ghazi", definition: "A Muslim frontier warrior fighting for faith and plunder — the Ottomans' original identity." },
            { term: "Sultan", definition: "The supreme ruler of the Ottoman Empire." },
          ],
        },
        {
          title: "The Janissaries and the devshirme",
          image: {
            wikiTitle: "Janissary",
            alt: "Ottoman Janissary soldiers",
            caption: "The Janissaries were the sultan's elite, disciplined infantry.",
          },
          paragraphs: [
            "The Ottomans' most distinctive institution was the devshirme — a 'collection' of Christian boys from the Balkans, taken from their villages, converted to Islam and educated in the sultan's service. The ablest entered the palace administration; the rest were trained as soldiers.",
            "From these recruits came the Janissaries, the first standing professional infantry in Europe since Rome. Disciplined, drilled and loyal directly to the sultan rather than to any noble family, they were among the first troops to make effective use of firearms on the battlefield.",
            "The system was a stroke of genius: it gave the sultan a powerful army and bureaucracy with no independent aristocratic loyalties, men who owed everything to him. For two centuries the Janissaries were the terror of Europe — though in later eras they would become a conservative force resisting reform.",
          ],
          terms: [
            { term: "Janissaries", definition: "Elite Ottoman infantry recruited as boys from Christian families and trained in lifelong service." },
            { term: "Devshirme", definition: "The Ottoman levy of Christian boys raised as soldiers and administrators of the sultan." },
          ],
        },
      ],
      terms: [
        { term: "Beylik", definition: "A small Anatolian principality; the Ottomans began as one such frontier state." },
        { term: "Janissaries", definition: "Elite Ottoman infantry, originally Christian-born boys raised as Muslim soldiers of the sultan." },
        { term: "Devshirme", definition: "The system of recruiting Christian boys into the sultan's service as soldiers and officials." },
      ],
    },
    {
      id: "conquest",
      type: "narrative",
      title: "The Conquest of Constantinople",
      icon: "🏰",
      image: {
        wikiTitle: "Fall of Constantinople",
        alt: "Depiction of the fall of Constantinople in 1453",
        caption: "Mehmed II's army breaches the walls of Constantinople, 1453.",
      },
      paragraphs: [
        "In 1453 the 21-year-old sultan Mehmed II laid siege to Constantinople, whose massive triple walls had repelled attackers for a thousand years. Mehmed deployed enormous cannon — the new gunpowder artillery that was changing warfare — and even hauled his ships overland to bypass the harbour chain.",
        "After 53 days the walls were breached. The last Byzantine emperor died fighting, and the city that had been the capital of the Roman world since Constantine fell at last. Mehmed, now 'the Conqueror', made it his capital and turned the great cathedral of Hagia Sophia into a mosque.",
        "The fall of Constantinople sent a shock through Europe — often used to mark the end of the Middle Ages — and confirmed the Ottomans as a world power astride the crossroads of Europe and Asia.",
      ],
      subLessons: [
        {
          title: "The fall of Constantinople, 1453",
          image: {
            wikiTitle: "Dardanelles Gun",
            alt: "A giant Ottoman siege cannon",
            caption: "Mehmed's monster cannon battered the great walls.",
          },
          paragraphs: [
            "For over a thousand years the triple land walls of Constantinople had defeated every attacker. In 1453 the 21-year-old sultan Mehmed II resolved to take the city, mustering a vast army and a new weapon: enormous bronze cannon, some firing stone balls weighing over half a tonne, cast specially to shatter the ancient defences.",
            "The siege lasted seven weeks. Mehmed even had ships dragged overland on greased logs to bypass the great chain across the harbour and attack from an unexpected quarter. On 29 May, after repeated assaults, the Ottomans broke through, and the last Byzantine emperor died fighting in the streets.",
            "The fall of Constantinople sent shockwaves through Christendom and is often taken to mark the end of the Middle Ages. Mehmed, now styled 'the Conqueror', made the city his capital, repopulated it, and converted the great church of Hagia Sophia into a mosque — proclaiming the Ottomans heirs to Rome itself.",
          ],
          terms: [
            { term: "Mehmed II", definition: "'The Conqueror' — the sultan who captured Constantinople in 1453." },
            { term: "Hagia Sophia", definition: "The great Byzantine cathedral converted into a mosque after the conquest." },
          ],
        },
        {
          title: "Suleiman the Magnificent",
          image: {
            wikiTitle: "Suleiman the Magnificent",
            alt: "Portrait of Suleiman the Magnificent",
            caption: "Under Suleiman the empire reached its height.",
          },
          paragraphs: [
            "The empire reached its zenith under Suleiman I, who ruled for 46 years from 1520. His armies marched deep into Europe, conquering Hungary at the Battle of Mohács in 1526 and reaching the gates of Vienna in 1529; his fleets, under the corsair-admiral Barbarossa, dominated the Mediterranean.",
            "By Suleiman's death in 1566 the empire stretched from Hungary to Yemen and from Algiers to the Persian frontier, controlling the holy cities of Mecca and Medina and the great trade routes of the Near East. Europeans called him 'the Magnificent', awed by the wealth and power of his court.",
            "His own subjects knew him by a different title: Kanuni, 'the Lawgiver'. Suleiman reformed and codified the empire's secular law, balancing it with Islamic law, and his reign became a byword for justice as well as conquest.",
          ],
          terms: [
            { term: "Suleiman the Magnificent", definition: "The sultan (r. 1520–1566) under whom the empire reached its golden age." },
            { term: "Kanun", definition: "The Ottoman secular law code reformed under Suleiman 'the Lawgiver'." },
          ],
        },
        {
          title: "A golden age of art and architecture",
          paragraphs: [
            "Ottoman power was matched by a flowering of culture. At its centre stood Mimar Sinan, the empire's chief architect, who over a long career designed hundreds of buildings. His great domed mosques — above all the Süleymaniye in Istanbul and the Selimiye in Edirne — perfected a style fusing Byzantine engineering with Islamic art.",
            "The court also nurtured exquisite book arts: miniature painting, gilded calligraphy and the brilliant blue-and-white İznik tiles that adorned mosques and palaces. Poetry in Ottoman Turkish, Persian and Arabic flourished, and the sultans themselves were often accomplished poets.",
            "Underpinning this diverse empire was the millet system, which let each religious community — Orthodox Christian, Armenian, Jewish — govern its own internal affairs under imperial protection. It allowed a vast, multi-faith population to coexist and made the Ottoman lands a refuge, notably for Jews expelled from Spain in 1492.",
          ],
          terms: [
            { term: "Mimar Sinan", definition: "The master architect whose domed mosques defined Ottoman classical architecture." },
            { term: "Millet system", definition: "The Ottoman arrangement letting religious communities govern their own affairs." },
          ],
        },
      ],
      terms: [
        { term: "Mehmed II", definition: "'The Conqueror', the sultan who took Constantinople in 1453 at the age of 21." },
        { term: "Gunpowder empire", definition: "A state, like the Ottomans, whose power rested heavily on cannon and firearms." },
      ],
      callout: {
        title: "What made the Ottomans different",
        body: "The Ottomans ruled a huge mix of Muslims, Christians and Jews through the 'millet' system, letting each religious community govern its own affairs under its own laws. Combined with promotion by merit (even slaves could rise to grand vizier), this flexibility helped the empire endure for 600 years.",
      },
    },
    {
      id: "figures",
      type: "figures",
      title: "Sultans & Master-Builders",
      icon: "👤",
      intro: "The rulers and craftsmen who defined the empire's golden age.",
      figures: [
        {
          name: "Mehmed II",
          role: "Sultan ('the Conqueror')",
          lived: "1432–1481",
          bio: "Conquered Constantinople in 1453, ending the Byzantine Empire, and reshaped the Ottoman state into a true empire centred on his new capital.",
          image: { wikiTitle: "Mehmed the Conqueror", alt: "Portrait of Mehmed II" },
        },
        {
          name: "Suleiman the Magnificent",
          role: "Sultan at the peak",
          lived: "1494–1566",
          bio: "Under this 'Lawgiver' the empire reached its zenith — conquering Hungary, besieging Vienna, dominating the Mediterranean, and reforming Ottoman law and culture.",
          image: { wikiTitle: "Suleiman the Magnificent", alt: "Portrait of Suleiman the Magnificent" },
        },
        {
          name: "Mimar Sinan",
          role: "Chief imperial architect",
          lived: "c. 1490–1588",
          bio: "The greatest Ottoman architect, who designed hundreds of mosques and buildings — masterpieces like the Süleymaniye that still define Istanbul's skyline.",
          image: { wikiTitle: "Mimar Sinan", alt: "Depiction of Mimar Sinan" },
        },
        {
          name: "Hürrem Sultan",
          role: "Influential consort",
          lived: "c. 1502–1558",
          bio: "A former slave who became Suleiman's wife and a powerful political figure, helping inaugurate an era of strong royal women known as the 'Sultanate of Women'.",
          image: { wikiTitle: "Hürrem Sultan", alt: "Portrait of Hürrem Sultan" },
        },
      ],
    },
    {
      id: "wars",
      type: "conflicts",
      title: "Wars With Europe",
      icon: "⚔️",
      intro: "For centuries the Ottomans were the great power against which Christian Europe defined itself.",
      conflicts: [
        {
          name: "The Battle of Mohács",
          years: "1526",
          against: "The Kingdom of Hungary",
          summary:
            "Suleiman's army destroyed the Hungarian forces in under two hours, killing the Hungarian king and shattering the medieval kingdom.",
          outcome:
            "Most of Hungary fell under Ottoman rule, pushing the empire deep into central Europe.",
          image: { wikiTitle: "Battle of Mohács", alt: "Depiction of the Battle of Mohács" },
        },
        {
          name: "The Sieges of Vienna",
          years: "1529 & 1683",
          against: "The Habsburgs & their allies",
          summary:
            "Twice the Ottomans besieged Vienna, the gateway to the heart of Europe. The second siege in 1683 was broken by a dramatic charge of Polish and allied cavalry under King Jan Sobieski.",
          outcome:
            "Both sieges failed; 1683 marked the high-water mark of Ottoman expansion and the start of a long retreat in Europe.",
          image: { wikiTitle: "Battle of Vienna", alt: "Depiction of the Battle of Vienna 1683" },
        },
        {
          name: "The Battle of Lepanto",
          years: "1571",
          against: "The Holy League",
          summary:
            "A massive naval battle in which a Christian alliance destroyed much of the Ottoman fleet in one of history's largest galley engagements.",
          outcome:
            "A symbolic blow to Ottoman naval dominance in the Mediterranean, though the empire quickly rebuilt its fleet.",
        },
      ],
    },
    {
      id: "decline",
      type: "narrative",
      title: "Decline & the End of Empire",
      icon: "🏛️",
      image: {
        wikiTitle: "Süleymaniye Mosque",
        alt: "The Süleymaniye Mosque in Istanbul",
        caption: "Sinan's Süleymaniye Mosque, jewel of the Ottoman golden age.",
      },
      paragraphs: [
        "After the failure at Vienna in 1683, the Ottomans entered a long, slow decline relative to a Europe transformed by science, industry and rising nation-states. Territory was lost war by war, and as nationalism spread, subject peoples in the Balkans broke away one after another.",
        "By the 19th century the once-feared empire was mockingly called 'the sick man of Europe'. Reformers tried to modernise — new schools, laws and a constitution — but could not reverse the decline, and the empire grew dependent on the rivalries of the European powers to survive at all.",
        "The Ottomans made their fatal choice by joining World War I on the losing side. Defeat brought the empire's dismemberment. Out of its Anatolian heartland, the general Mustafa Kemal Atatürk forged the modern Republic of Turkey, abolishing the sultanate in 1922 and ending an empire that had lasted over six hundred years.",
      ],
      subLessons: [
        {
          title: "The turning of the tide",
          paragraphs: [
            "For a century after Suleiman the empire remained formidable, but cracks were forming. In 1571 a Christian fleet smashed the Ottoman navy at Lepanto, breaking the myth of Ottoman invincibility at sea. The greater turning point came in 1683, when a second siege of Vienna failed and a relieving Polish-led army routed the Ottomans.",
            "After 1683 the empire fought a long defensive war. The Treaty of Karlowitz in 1699 forced it to surrender Hungary to Austria — the first time the Ottomans had ceded large territories by treaty. The age of expansion was over; the age of retreat had begun.",
            "Through the 18th century, resurgent powers — above all Habsburg Austria and Tsarist Russia — chipped steadily at the frontiers, while provincial governors and the once-elite Janissaries grew increasingly resistant to the sultan's authority.",
          ],
          terms: [
            { term: "Battle of Lepanto", definition: "The 1571 naval defeat that ended the myth of Ottoman invincibility at sea." },
            { term: "Treaty of Karlowitz", definition: "The 1699 treaty by which the Ottomans first ceded major territory to Europe." },
          ],
        },
        {
          title: "The 'sick man of Europe'",
          paragraphs: [
            "While Europe was transformed by the Scientific Revolution, the Enlightenment and then industrialisation, the Ottoman Empire struggled to keep pace. Its army, economy and institutions, once the envy of the world, fell behind the rapidly modernising European states.",
            "By the 19th century the empire was mockingly known as 'the sick man of Europe', its weakness a standing temptation to the Great Powers, who manoeuvred over how to divide its territories in what they called the 'Eastern Question'. Nationalist revolts, beginning with Greek independence in the 1820s, steadily stripped away its Balkan provinces.",
            "Reformers fought to save the state. The Tanzimat reforms of the mid-19th century reorganised the army, law and administration along modern lines, and granted new rights to non-Muslim subjects. But the changes were resisted from within and came too slowly to reverse the empire's long contraction.",
          ],
          terms: [
            { term: "Tanzimat", definition: "19th-century Ottoman reforms aimed at modernising the empire." },
            { term: "Eastern Question", definition: "The European powers' diplomatic struggle over the fate of the declining Ottoman Empire." },
          ],
        },
        {
          title: "War, collapse and the birth of Turkey",
          paragraphs: [
            "The empire's fatal error was entering World War I in 1914 on the side of Germany and Austria-Hungary. The war brought immense suffering — including the Armenian genocide of 1915, in which over a million Armenians perished — and ended in total defeat.",
            "Victorious Allies moved to partition the Ottoman lands, occupying Constantinople and parcelling out the Arab provinces. It seemed the empire would vanish entirely, carved up among the European powers and Greece.",
            "From this wreckage rose Mustafa Kemal Atatürk. Leading a war of independence from the Anatolian heartland, he drove out occupying forces and abolished the sultanate in 1922. In 1923 he proclaimed the Republic of Turkey, a secular nation-state built on the ruins of the six-century empire.",
          ],
          terms: [
            { term: "Atatürk", definition: "Mustafa Kemal, founder of the Republic of Turkey from the empire's ashes." },
            { term: "Partition", definition: "The Allied plan after WWI to carve up the defeated Ottoman territories." },
          ],
        },
      ],
      terms: [
        { term: "'Sick man of Europe'", definition: "The 19th-century nickname for the declining Ottoman Empire." },
        { term: "Millet system", definition: "The Ottoman arrangement letting each religious community govern its own internal affairs." },
        { term: "Atatürk", definition: "Mustafa Kemal, founder of the Republic of Turkey, who abolished the sultanate in 1922." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on six centuries of Ottoman history.",
      questions: [
        {
          q: "Where did the Ottoman Empire begin?",
          options: ["In Egypt", "As a frontier principality in Anatolia", "In the Balkans", "In Persia"],
          correct: 1,
          fb: "Osman founded a small frontier beylik around 1299.",
        },
        {
          q: "What event in 1453 made the Ottomans a world power?",
          options: ["The siege of Vienna", "The conquest of Constantinople", "The Battle of Lepanto", "The fall of Cairo"],
          correct: 1,
          fb: "Mehmed II took Constantinople, ending the Byzantine Empire.",
        },
        {
          q: "Who were the Janissaries?",
          options: ["Merchant guilds", "Elite infantry raised from Christian-born boys", "Religious scholars", "Naval captains"],
          correct: 1,
          fb: "They were recruited via the devshirme and were the sultan's elite soldiers.",
        },
        {
          q: "Under which sultan did the empire reach its peak?",
          options: ["Osman I", "Mehmed II", "Suleiman the Magnificent", "Selim III"],
          correct: 2,
          fb: "Suleiman 'the Magnificent' conquered Hungary and reformed the law.",
        },
        {
          q: "How did the Ottomans govern their many religious communities?",
          options: ["Forced conversion", "The millet system of self-governing communities", "Expulsion", "A single state church"],
          correct: 1,
          fb: "Each millet ran its own affairs under its own religious law.",
        },
        {
          q: "What marked the high point and turning back of Ottoman expansion in Europe?",
          options: ["The fall of Constantinople", "The failed 1683 siege of Vienna", "The Battle of Mohács", "The conquest of Egypt"],
          correct: 1,
          fb: "The 1683 defeat at Vienna began a long Ottoman retreat in Europe.",
        },
        {
          q: "What happened to the empire after World War I?",
          options: ["It expanded", "It was dismembered and the sultanate abolished in 1922", "It became a republic in 1453", "It merged with Persia"],
          correct: 1,
          fb: "Atatürk founded the Republic of Turkey and abolished the sultanate in 1922.",
        },
      ],
    },
  ],
};
