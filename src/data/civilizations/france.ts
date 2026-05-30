import type { Civilization } from "../types";

export const france: Civilization = {
  id: "france",
  name: "The Kingdom of France",
  shortName: "France",
  emblem: "⚜️",
  region: "Western Europe",
  modernCountries: ["France", "Belgium"],
  timespan: "843 – 1815 CE",
  startYear: 843,
  endYear: 1815,
  color: "#2563eb",
  tagline:
    "From the heirs of Charlemagne to the Sun King and Napoleon — the kingdom that defined royal absolutism, then exported revolution.",
  summary:
    "For a thousand years France was the most populous and powerful kingdom of Western Europe — a land of soaring cathedrals, crusading knights and, above all, kings. It perfected absolute monarchy under Louis XIV at Versailles, then violently overthrew it in the Revolution of 1789 and spread its ideals across Europe under Napoleon. Few nations have shaped Western politics, law and culture so deeply.",
  hero: {
    wikiTitle: "Palace of Versailles",
    alt: "The Palace of Versailles",
    caption: "Versailles — Louis XIV's palace and the model of royal absolutism.",
  },
  facts: [
    { label: "Founded", value: "843 CE (West Francia)" },
    { label: "Great dynasties", value: "Capetians, Valois, Bourbons" },
    { label: "Peak monarch", value: "Louis XIV, the Sun King" },
    { label: "Turning point", value: "Revolution of 1789" },
    { label: "Faith", value: "Catholic ('eldest daughter of the Church')" },
  ],
  majorCities: [
    { name: "Paris",      lat: 48.86, lon:  2.35 },
    { name: "Versailles", lat: 48.80, lon:  2.12 },
    { name: "Lyon",       lat: 45.75, lon:  4.83 },
    { name: "Bordeaux",   lat: 44.84, lon: -0.58 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the Kingdom of France",
      icon: "⭐",
      intro: "From Charlemagne's heirs to the Sun King and Napoleon — the pivotal events of the kingdom that shaped European history.",
      milestones: [
        { year: "843 CE",   title: "Treaty of Verdun Creates West Francia", description: "Charlemagne's grandsons divide the Carolingian Empire; West Francia — the kernel of modern France — goes to Charles the Bald.", icon: "📜", type: "rise" },
        { year: "987 CE",   title: "Hugh Capet Founds the Capetian Dynasty", description: "Hugh Capet is elected king, founding the Capetian dynasty that will rule France, in various branches, for over 800 years.", icon: "👑", type: "rise" },
        { year: "1095 CE",  title: "France Leads the First Crusade", description: "Pope Urban II calls for crusade at Clermont; French lords provide most of the leadership for the campaign that captures Jerusalem.", icon: "✝️", type: "war" },
        { year: "1163 CE",  title: "Notre-Dame Cathedral Begun", description: "Construction begins on Notre-Dame de Paris — a masterpiece of Gothic architecture that takes two centuries to complete.", icon: "⛪", type: "cultural" },
        { year: "1209 CE",  title: "Albigensian Crusade", description: "King and Pope launch a crusade against the Cathar heresy in southern France, devastating the region and extending royal power.", icon: "⚔️", type: "war" },
        { year: "1337 CE",  title: "Hundred Years' War Begins", description: "England and France enter a century of intermittent warfare over the French throne — transforming both kingdoms.", icon: "🏹", type: "war" },
        { year: "1429 CE",  title: "Joan of Arc Turns the War", description: "A teenage peasant girl claims divine visions, leads French forces to relieve Orléans, and sees the Dauphin crowned — transforming the war's momentum.", icon: "⚜️", type: "war" },
        { year: "1453 CE",  title: "Hundred Years' War Ends", description: "France drives the English from all of France except Calais, emerging as the strongest monarchy in western Europe.", icon: "🏆", type: "rise" },
        { year: "1562 CE",  title: "French Wars of Religion Begin", description: "Decades of brutal civil war between Catholic and Protestant Huguenot factions tear France apart.", icon: "🔥", type: "war" },
        { year: "1598 CE",  title: "Edict of Nantes", description: "Henry IV grants Protestants limited religious freedom, ending the wars of religion and allowing France to begin its rise to European dominance.", icon: "🕊️", type: "innovation" },
        { year: "1661 CE",  title: "Louis XIV Takes Personal Control", description: "The Sun King declares 'L'état, c'est moi' and begins the most absolute monarchy in European history, building Versailles and projecting French power across Europe.", icon: "☀️", type: "rise" },
        { year: "1685 CE",  title: "Revocation of the Edict of Nantes", description: "Louis XIV revokes Protestant rights, driving 200,000 skilled Huguenots out of France — a devastating economic self-wound.", icon: "📉", type: "fall" },
        { year: "1789 CE",  title: "The French Revolution", description: "The Bastille falls, the king is arrested and France becomes a republic — the ideals of liberty, equality and fraternity ignite Europe.", icon: "🗽", type: "cultural" },
        { year: "1804 CE",  title: "Napoleon Crowns Himself Emperor", description: "Napoleon seizes the crown from the Pope and crowns himself Emperor, dominating Europe in a series of brilliant campaigns.", icon: "🎖️", type: "rise" },
        { year: "1815 CE",  title: "Waterloo — Napoleon's Final Defeat", description: "Napoleon is crushed at Waterloo and exiled to Saint Helena, ending French hegemony and the Napoleonic era.", icon: "💔", type: "fall" },
      ],
    },
    {
      id: "origins",
      type: "narrative",
      title: "From the Franks to a Kingdom",
      icon: "👑",
      image: {
        wikiTitle: "Reims Cathedral",
        alt: "Reims Cathedral",
        caption: "Reims Cathedral, where the kings of France were traditionally crowned.",
      },
      paragraphs: [
        "France was born from the empire of Charlemagne. When his grandsons divided it by the Treaty of Verdun in 843, the western third — West Francia — became the kernel of France. In 987 the nobles elected Hugh Capet king, founding the Capetian dynasty that, with its branches, would rule for over 800 years.",
        "Early French kings controlled little more than the area around Paris; powerful dukes and counts ruled the rest. Slowly, through marriage, inheritance, war and cunning, the monarchy clawed territory and authority back to the centre. The Church crowned and blessed these kings at Reims, and France styled itself the 'eldest daughter of the Church'.",
        "This was the great age of Gothic cathedrals — Notre-Dame, Chartres, Reims — and of medieval learning at the University of Paris. France became Europe's most populous kingdom and the heartland of chivalry and crusading.",
      ],
      terms: [
        { term: "West Francia", definition: "The western part of Charlemagne's empire, split off in 843, that grew into France." },
        { term: "Capetian dynasty", definition: "The royal house founded by Hugh Capet in 987, whose lines ruled France until 1792." },
        { term: "Gothic architecture", definition: "The soaring, light-filled cathedral style pioneered in 12th-century France." },
      ],
      callout: {
        title: "Building a nation",
        body: "France's story is partly the slow triumph of the centre over the regions — kings absorbing semi-independent duchies one by one until 'France' became a single, centralised state. That centralising instinct still marks French government today.",
      },
    },
    {
      id: "absolutism",
      type: "narrative",
      title: "Absolute Monarchy & the Sun King",
      icon: "☀️",
      image: {
        wikiTitle: "Louis XIV",
        alt: "Portrait of Louis XIV",
        caption: "Louis XIV, the 'Sun King', who reigned for 72 years.",
      },
      paragraphs: [
        "By the 1600s the French monarchy was pushing toward absolutism — the idea that the king's authority came directly from God and was answerable to no parliament. The supreme example was Louis XIV (r. 1643–1715), who reigned for 72 years and reportedly declared 'L'état, c'est moi' — 'I am the state'.",
        "Louis tamed the nobility by drawing them to his dazzling new palace at Versailles, where they competed for his favour instead of plotting rebellion. He centralised administration, built a huge standing army, and made France the cultural arbiter of Europe — its language, fashion, art and etiquette imitated everywhere.",
        "But absolutism was expensive. Endless wars and lavish spending, combined with a tax system that exempted the nobility and clergy, drove the monarchy toward bankruptcy — sowing the seeds of revolution.",
      ],
      terms: [
        { term: "Absolutism", definition: "A system in which the monarch holds unchecked power, justified by 'divine right'." },
        { term: "Divine right of kings", definition: "The doctrine that a king's authority comes directly from God." },
        { term: "Versailles", definition: "Louis XIV's vast palace, designed to overawe and control the French nobility." },
      ],
      callout: {
        title: "What made France different",
        body: "France turned monarchy into an art form — the most centralised, cultured and admired royal court in Europe. Then, more dramatically than anywhere else, it tore that monarchy down and gave the world a new political vocabulary of rights, citizenship and revolution.",
      },
    },
    {
      id: "figures",
      type: "figures",
      title: "Kings, a Saint & an Emperor",
      icon: "👤",
      intro: "A few towering figures shaped France across a thousand years.",
      figures: [
        {
          name: "Charlemagne",
          role: "King of the Franks",
          lived: "748–814",
          bio: "The Frankish emperor whose realm gave rise to both France and Germany. Crowned 'Emperor of the Romans' in 800, he is claimed as a founding father by the French.",
          image: { wikiTitle: "Charlemagne", alt: "Depiction of Charlemagne" },
        },
        {
          name: "Joan of Arc",
          role: "Heroine & saint",
          lived: "c. 1412–1431",
          bio: "A peasant girl who, believing she was guided by visions, rallied French forces during the Hundred Years' War and turned the tide before being captured and burned at the stake.",
          image: { wikiTitle: "Joan of Arc", alt: "Depiction of Joan of Arc" },
        },
        {
          name: "Louis XIV",
          role: "The Sun King",
          lived: "1638–1715",
          bio: "The model of an absolute monarch, who built Versailles, dominated Europe through war and culture, and reigned longer than any other European sovereign.",
          image: { wikiTitle: "Louis XIV", alt: "Portrait of Louis XIV" },
        },
        {
          name: "Napoleon Bonaparte",
          role: "General & Emperor",
          lived: "1769–1821",
          bio: "Rose from the Revolution to crown himself emperor, conquered much of Europe, and reformed French law and administration before his final defeat at Waterloo.",
          image: { wikiTitle: "Napoleon", alt: "Portrait of Napoleon Bonaparte" },
        },
      ],
    },
    {
      id: "wars",
      type: "conflicts",
      title: "Wars & Revolution",
      icon: "⚔️",
      intro: "France's history was forged in long wars with England, in religious strife, and in the upheaval of revolution.",
      conflicts: [
        {
          name: "The Hundred Years' War",
          years: "1337–1453",
          against: "England",
          summary:
            "A series of wars over the French throne and territory. English victories at Crécy and Agincourt nearly destroyed France — until Joan of Arc helped rally a national revival.",
          outcome:
            "France expelled the English from almost all its soil and emerged with a stronger sense of national identity and royal power.",
          image: { wikiTitle: "Hundred Years' War", alt: "Battle scene from the Hundred Years' War" },
        },
        {
          name: "The French Revolution",
          years: "1789–1799",
          against: "The old monarchy & old order",
          summary:
            "Bankruptcy, inequality and Enlightenment ideas exploded into revolution. The Bastille fell, the monarchy was abolished, King Louis XVI was executed, and the radical 'Terror' followed.",
          outcome:
            "The end of absolute monarchy and feudal privilege in France, and the launch of modern ideas of citizenship, rights and the nation — at a terrible human cost.",
          image: { wikiTitle: "Storming of the Bastille", alt: "Painting of the storming of the Bastille" },
        },
        {
          name: "The Napoleonic Wars",
          years: "1803–1815",
          against: "Coalitions across Europe",
          summary:
            "Napoleon's armies conquered much of continental Europe, spreading revolutionary reforms — and the Napoleonic Code — by force, before disastrous defeats in Russia and finally at Waterloo.",
          outcome:
            "Napoleon fell, the monarchy was briefly restored, but his legal and administrative reforms reshaped Europe permanently.",
          image: { wikiTitle: "Battle of Austerlitz", alt: "Painting of the Battle of Austerlitz" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Gifts to the World",
      icon: "💡",
      intro: "France gave the modern world some of its most basic political and cultural ideas.",
      achievements: [
        {
          name: "The Rights of Man",
          field: "Politics",
          description:
            "The 1789 Declaration of the Rights of Man and of the Citizen proclaimed liberty, equality and popular sovereignty as universal principles.",
          legacy: "A founding document of modern human rights and democracy worldwide.",
        },
        {
          name: "The Napoleonic Code",
          field: "Law",
          description:
            "Napoleon's clear, unified civil code swept away feudal law and guaranteed equality before the law and property rights.",
          legacy: "The basis of civil-law systems across Europe, Latin America, Africa and beyond.",
        },
        {
          name: "The metric system",
          field: "Science",
          description:
            "Revolutionary France created a rational, decimal system of weights and measures based on nature.",
          legacy: "Now the standard system of measurement for almost the entire world.",
        },
        {
          name: "The Enlightenment",
          field: "Thought",
          description:
            "French thinkers — Descartes, Voltaire, Rousseau, Montesquieu — championed reason, tolerance and the separation of powers.",
          legacy: "Shaped modern philosophy, science and the design of democratic governments.",
        },
        {
          name: "Gothic architecture & culture",
          field: "Arts",
          description:
            "France pioneered the Gothic cathedral and became Europe's arbiter of art, fashion, cuisine and the very idea of 'civilisation'.",
          legacy: "French remains a global language of diplomacy, art and gastronomy.",
        },
      ],
    },
    {
      id: "legacy",
      type: "narrative",
      title: "Revolution's Long Shadow",
      icon: "🗽",
      image: {
        wikiTitle: "Napoleon",
        alt: "Portrait of Napoleon Bonaparte",
        caption: "Napoleon — the Revolution's heir who became an emperor.",
      },
      paragraphs: [
        "The Revolution of 1789 did not end neatly. France lurched through a republic, the Terror, Napoleon's empire, a restored monarchy and further revolutions in 1830 and 1848 before settling into a lasting republic. The struggle between monarchy and republic, Church and state, order and liberty defined French politics for a century.",
        "Yet the Revolution's ideas proved unstoppable. 'Liberté, égalité, fraternité', the rights of the citizen, the nation-state and the very notion that ordinary people — not kings — are sovereign spread across Europe and the world, carried first by Napoleon's armies and then by imitation.",
        "Modern France — secular, republican and proud of its revolutionary heritage — still lives in that legacy. And from medieval cathedrals to the Enlightenment to the Declaration of the Rights of Man, few nations have given the West more of its cultural and political DNA.",
      ],
      terms: [
        { term: "Liberté, égalité, fraternité", definition: "'Liberty, equality, fraternity' — the enduring motto of the French Republic." },
        { term: "Republic", definition: "A state without a monarch, governed by elected representatives — the form France ultimately adopted." },
        { term: "Ancien régime", definition: "The 'old order' of absolute monarchy and feudal privilege swept away by the Revolution." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Eight questions across a thousand years of French history.",
      questions: [
        {
          q: "From whose empire did France emerge in 843 CE?",
          options: ["The Roman Empire", "Charlemagne's empire", "The Byzantine Empire", "The Ottoman Empire"],
          correct: 1,
          fb: "The Treaty of Verdun split Charlemagne's empire; the western third became France.",
        },
        {
          q: "Which dynasty, founded in 987, ruled France for over 800 years?",
          options: ["The Tudors", "The Habsburgs", "The Capetians", "The Romanovs"],
          correct: 2,
          fb: "Hugh Capet founded the Capetian dynasty, whose branches ruled until 1792.",
        },
        {
          q: "Who was the 'Sun King', the model of absolute monarchy?",
          options: ["Louis XIV", "Napoleon", "Charlemagne", "Louis XVI"],
          correct: 0,
          fb: "Louis XIV reigned 72 years and built Versailles to tame the nobility.",
        },
        {
          q: "What was the purpose of the palace of Versailles?",
          options: ["A military fortress", "To overawe and control the nobility", "A monastery", "A trading post"],
          correct: 1,
          fb: "By drawing nobles to court to compete for favour, Louis XIV kept them from rebelling.",
        },
        {
          q: "Which peasant heroine rallied France during the Hundred Years' War?",
          options: ["Marie Antoinette", "Joan of Arc", "Catherine de' Medici", "Eleanor of Aquitaine"],
          correct: 1,
          fb: "Joan of Arc turned the tide against England before being captured and burned in 1431.",
        },
        {
          q: "What erupted in France in 1789?",
          options: ["The Hundred Years' War", "The Revolution", "The Crusades", "The Reformation"],
          correct: 1,
          fb: "The French Revolution abolished the monarchy and proclaimed the rights of the citizen.",
        },
        {
          q: "Which legal code, still influential worldwide, did Napoleon create?",
          options: ["The Justinian Code", "The Napoleonic Code", "Hammurabi's Code", "The Magna Carta"],
          correct: 1,
          fb: "The Napoleonic Code underpins civil-law systems across much of the world.",
        },
        {
          q: "What is the enduring motto of the French Republic?",
          options: ["Veni, vidi, vici", "Liberté, égalité, fraternité", "Dieu et mon droit", "E pluribus unum"],
          correct: 1,
          fb: "'Liberty, equality, fraternity' — born of the Revolution.",
        },
      ],
    },
  ],
};
