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
      subLessons: [
        {
          title: "From Charlemagne's empire to West Francia",
          paragraphs: [
            "When the Emperor Charlemagne died in 814, his vast realm passed to his heirs — and almost immediately began to fracture. In 843 the Treaty of Verdun split it three ways among his grandsons. The western portion, West Francia, would over the centuries become France; the eastern would grow into Germany; the strip between them was fought over for a thousand years.",
            "Early West Francia was a fragile thing. Viking raiders sailed up its rivers and sacked its towns, and royal authority shrank until the king ruled little more than the lands around Paris. Real power lay with great regional lords — the dukes of Normandy, Burgundy and Aquitaine — who were often stronger than the king himself.",
            "Yet the idea of a single kingdom survived, anchored by the Church and the sacred ritual of coronation at Reims. It would take patient, ruthless generations of kings to turn that idea into a real, unified France.",
          ],
          terms: [
            { term: "Treaty of Verdun", definition: "The 843 division of Charlemagne's empire that created West Francia." },
            { term: "Carolingian", definition: "The dynasty of Charlemagne, whose empire's break-up gave rise to France." },
          ],
        },
        {
          title: "The patient rise of the Capetians",
          paragraphs: [
            "In 987 the nobles elected Hugh Capet king, founding a dynasty that would rule France for centuries. The early Capetians were weak, but they had one priceless advantage: an unbroken line of sons, which let them entrench the principle that the crown passed by inheritance rather than election.",
            "Generation by generation they expanded the royal domain — through marriage, inheritance, war and shrewd legal manoeuvring. A turning point came under Philip II 'Augustus', who in the early 1200s seized Normandy and other vast territories from the kings of England, roughly tripling the lands under direct royal control.",
            "By the 13th century, kings like the saintly Louis IX commanded real authority across a kingdom that was now Europe's most populous and powerful. The Capetians had transformed a cluster of rival fiefs into the strongest monarchy in Christendom.",
          ],
          terms: [
            { term: "Royal domain", definition: "The lands directly ruled by the French king, steadily expanded by the Capetians." },
            { term: "Philip II Augustus", definition: "The Capetian king who tripled royal lands by seizing territory from England." },
          ],
        },
        {
          title: "Cathedrals, scholars and the Hundred Years' War",
          image: {
            wikiTitle: "Chartres Cathedral",
            alt: "Chartres Cathedral",
            caption: "Gothic cathedrals like Chartres soared in light and stone.",
          },
          paragraphs: [
            "Medieval France was the cultural heart of Europe. Here the Gothic style was born — at Saint-Denis, Notre-Dame de Paris and Chartres — with pointed arches and flying buttresses that let walls dissolve into vast windows of stained glass, flooding the great churches with coloured light.",
            "France also led in learning. The University of Paris, with its theology faculty at the Sorbonne, drew scholars from across the continent and became one of the intellectual centres of the medieval world, debating philosophy, law and the works of Aristotle.",
            "But the late Middle Ages brought catastrophe: the Black Death and the Hundred Years' War with England, which ravaged France for over a century. At its darkest hour an illiterate peasant girl, Joan of Arc, claiming divine visions, rallied French forces and lifted the siege of Orléans in 1429 — helping turn the war and becoming a lasting national symbol.",
          ],
          terms: [
            { term: "University of Paris", definition: "A leading centre of medieval learning, home to the Sorbonne theology faculty." },
            { term: "Hundred Years' War", definition: "The long medieval conflict with England in which Joan of Arc became a heroine." },
          ],
        },
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
      subLessons: [
        {
          title: "'I am the state': the Sun King",
          paragraphs: [
            "Louis XIV came to the throne as a child in 1643 and would rule for 72 years — the longest reign of any major European monarch. As a boy he had been terrified by the Fronde, a revolt of nobles and parlements that drove the royal family from Paris. He never forgot it, and resolved that no subject would ever again challenge the crown.",
            "Louis built a system of royal absolutism in which all authority flowed from the king alone. He governed without summoning the Estates-General, ruled through hand-picked ministers and intendants, and styled himself the 'Sun King' around whom the whole realm revolved. The phrase attributed to him — 'L'état, c'est moi', I am the state — captured the ideal perfectly.",
            "This power was justified by the 'divine right of kings': the claim that the monarch was appointed by God and answerable to Him alone. To resist the king was, in this view, to resist God himself.",
          ],
          terms: [
            { term: "The Fronde", definition: "The mid-century noble revolt that drove young Louis XIV to crush aristocratic power." },
            { term: "Intendant", definition: "A royal official Louis used to govern the provinces directly and centralise power." },
          ],
        },
        {
          title: "Versailles: a palace as a cage",
          image: {
            wikiTitle: "Palace of Versailles",
            alt: "The Hall of Mirrors at Versailles",
            caption: "Versailles dazzled Europe and tamed the French nobility.",
          },
          paragraphs: [
            "Louis's masterstroke was the Palace of Versailles, an enormous and dazzling complex he built outside Paris and to which he moved the court in 1682. Its Hall of Mirrors, vast gardens and fountains were designed to overwhelm visitors with the glory of the king.",
            "But Versailles was more than a showpiece — it was a trap for the nobility. Louis required the great aristocrats to live at court, where he kept them busy competing for trivial honours, like the privilege of handing him his shirt at the morning ritual. Absorbed in etiquette and gossip, they had neither the time nor the base to plot rebellion in their provinces.",
            "Versailles also made France the cultural capital of Europe. Its art, fashion, manners and language were imitated by every court on the continent; French became the international language of diplomacy and the elite, a status it held for two centuries.",
          ],
          terms: [
            { term: "Hall of Mirrors", definition: "Versailles' famous gallery, a showcase of Louis XIV's glory and wealth." },
            { term: "Court etiquette", definition: "The elaborate rituals that kept nobles busy competing for royal favour rather than rebelling." },
          ],
        },
        {
          title: "The cracks beneath the glory",
          paragraphs: [
            "The splendour came at a ruinous price. Louis XIV's near-constant wars to expand France's frontiers drained the treasury, and the upkeep of Versailles and the court swallowed enormous sums. The brilliance of the reign rested on increasingly shaky financial foundations.",
            "Worse, the burden fell on those least able to bear it. France's tax system exempted the nobility and clergy — the very richest — while crushing the peasantry and the middle classes. This deep unfairness bred resentment that festered under Louis's less capable successors.",
            "Meanwhile a dangerous new current of thought was rising: the Enlightenment. Writers like Voltaire, Montesquieu and Rousseau questioned absolute power, championed reason, tolerance and natural rights, and imagined governments based on the consent of the governed. The combination of bankruptcy, injustice and revolutionary ideas would, within decades, prove fatal to the monarchy.",
          ],
          terms: [
            { term: "Enlightenment", definition: "The 18th-century movement of reason and rights that challenged absolutism." },
            { term: "Tax exemption", definition: "The privilege that freed France's nobility and clergy from taxes, fuelling resentment." },
          ],
        },
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
      subLessons: [
        {
          title: "1789: the dam breaks",
          image: {
            wikiTitle: "Storming of the Bastille",
            alt: "The storming of the Bastille",
            caption: "The fall of the Bastille became the symbol of revolution.",
          },
          paragraphs: [
            "By 1789 France was bankrupt, its harvests had failed, and its people were starving. Desperate for funds, Louis XVI summoned the Estates-General — an assembly of the three orders that had not met for 175 years. When the commoners of the Third Estate were blocked, they broke away and declared themselves the National Assembly, vowing to give France a constitution.",
            "On 14 July a Paris crowd stormed the Bastille, a royal fortress and prison that symbolised tyranny. The event electrified the nation and is still celebrated as France's national day. Weeks later the Assembly issued the Declaration of the Rights of Man and of the Citizen, proclaiming that sovereignty belonged to the nation and that men were born free and equal in rights.",
            "These were world-shaking claims. Power, the revolutionaries declared, came not from God or birth but from the people — an idea that struck at the foundations of every monarchy in Europe.",
          ],
          terms: [
            { term: "Estates-General", definition: "France's old assembly of three orders, whose 1789 meeting sparked the Revolution." },
            { term: "Rights of Man", definition: "The 1789 declaration proclaiming liberty, equality and popular sovereignty." },
          ],
        },
        {
          title: "Terror and the radical Republic",
          paragraphs: [
            "The Revolution grew more radical. In 1792 the monarchy was abolished and a Republic proclaimed; in 1793 Louis XVI was sent to the guillotine, followed by his queen, Marie Antoinette. Threatened by foreign invasion and internal revolt, the Republic turned to extreme measures.",
            "Under Maximilien Robespierre and the Committee of Public Safety came the Reign of Terror. Tens of thousands were executed as 'enemies of the Revolution', many on the slimmest evidence, the guillotine working day after day. The Revolution had begun to devour its own.",
            "The Terror ended only when Robespierre himself was overthrown and guillotined in 1794. But the years of upheaval left France exhausted and unstable, governed by a weak and corrupt regime — fertile ground for a strongman to seize control.",
          ],
          terms: [
            { term: "Reign of Terror", definition: "The radical, violent phase of the Revolution marked by mass executions." },
            { term: "Robespierre", definition: "The radical leader of the Terror, himself eventually guillotined in 1794." },
          ],
        },
        {
          title: "Napoleon and the revolution exported",
          image: {
            wikiTitle: "Napoleon",
            alt: "Napoleon Bonaparte",
            caption: "Napoleon spread the Revolution's reforms across Europe by conquest.",
          },
          paragraphs: [
            "Out of the chaos rose Napoleon Bonaparte, a brilliant young general who seized power in 1799 and crowned himself Emperor of the French in 1804. He restored order at home while preserving many of the Revolution's gains — above all the Napoleonic Code, a unified body of law that swept away feudal privilege and enshrined equality before the law.",
            "Through a dazzling series of campaigns Napoleon made France master of Europe, planting his reforms — legal equality, rational administration, the dismantling of feudalism — wherever his armies marched. But his ambition overreached: the disastrous invasion of Russia in 1812 destroyed his Grand Army, and he was finally crushed at Waterloo in 1815.",
            "Though the monarchy was restored afterward, France and Europe were changed forever. The ideas of 1789 — liberty, equality, popular sovereignty, nationalism — could not be undone, and they spread across the world to become the foundation of modern politics. France had given the world not just a revolution, but the very model of revolution itself.",
          ],
          terms: [
            { term: "Napoleonic Code", definition: "Napoleon's influential legal code enshrining equality before the law." },
            { term: "Waterloo", definition: "The 1815 battle that ended Napoleon's rule and France's bid for European dominance." },
          ],
        },
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
