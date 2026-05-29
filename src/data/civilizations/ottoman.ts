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
  sections: [
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
