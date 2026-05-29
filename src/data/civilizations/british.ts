import type { Civilization } from "../types";

export const british: Civilization = {
  id: "british",
  name: "The British Empire",
  shortName: "Britain",
  emblem: "👑",
  region: "Global — 'the empire on which the sun never set'",
  modernCountries: [
    "United Kingdom",
    "Ireland",
    "Canada",
    "Australia",
    "New Zealand",
    "South Africa",
    "Nigeria",
    "Kenya",
    "United States of America",
  ],
  timespan: "c. 1583 – 1997 CE",
  startYear: 1583,
  endYear: 1997,
  color: "#1e40af",
  tagline:
    "From a damp North Atlantic island to the largest empire in history — built on sea power, trade, industry and the labour of the colonised.",
  summary:
    "At its height in the 1920s the British Empire governed about a quarter of the world's land and people — the largest empire that has ever existed. It was assembled less by a master plan than by merchants, settlers and the Royal Navy, and held together by sea power, industrial might and global trade. Its legacy is vast and deeply contested: parliamentary democracy and the English language on one side; slavery, conquest and famine on the other.",
  hero: {
    wikiTitle: "Palace of Westminster",
    alt: "The Palace of Westminster in London",
    caption: "The Palace of Westminster — seat of the parliament that governed the empire.",
  },
  facts: [
    { label: "Peak (1920s)", value: "~24% of Earth's land" },
    { label: "Peak population", value: "~412 million (1913)" },
    { label: "Foundation", value: "Sea power & global trade" },
    { label: "Capital", value: "London" },
    { label: "Often dated to", value: "1997 (Hong Kong handover)" },
  ],
  sections: [
    {
      id: "rise",
      type: "narrative",
      title: "A Small Island Goes Global",
      icon: "⛵",
      image: {
        wikiTitle: "East India Company",
        alt: "Flag and arms of the East India Company",
        caption: "The East India Company — a private firm that conquered an empire.",
      },
      paragraphs: [
        "England came late to empire. While Spain and Portugal carved up the New World in the 1500s, the English began with piracy and small ventures under Elizabeth I. Their first lasting colonies came in the early 1600s: Jamestown in Virginia (1607), the Caribbean sugar islands, and trading posts in India run not by the Crown but by a private company — the East India Company.",
        "Two engines drove early expansion. The first was sugar: Caribbean plantations made fortunes, worked by enslaved Africans shipped across the Atlantic in their millions. Britain became the largest slave-trading nation of the 18th century — a brutal foundation of its wealth. The second was the Company, which from trading forts gradually conquered the Indian subcontinent, ruling 200 million people on the Crown's behalf.",
        "By 1763, after defeating France in the Seven Years' War, Britain dominated North America and India. The loss of the thirteen American colonies in 1783 was a shock — but the empire simply pivoted east and south, toward India, Australia and, in the next century, Africa.",
      ],
      terms: [
        { term: "East India Company", definition: "A private trading company, founded 1600, that came to rule much of India until the Crown took over in 1858." },
        { term: "Plantation economy", definition: "Colonial agriculture (sugar, tobacco, cotton) worked by enslaved or indentured labour for export." },
        { term: "Triangular trade", definition: "The Atlantic system shipping goods to Africa, enslaved people to the Americas, and raw materials back to Britain." },
      ],
      callout: {
        title: "An empire of merchants",
        body: "Uniquely, much of the early empire was run by private companies and settlers chasing profit, not by the state. Government often followed trade rather than leading it — a key reason the empire grew in such a scattered, opportunistic way.",
      },
    },
    {
      id: "navy-industry",
      type: "narrative",
      title: "Industry, Navy & 'Rule the Waves'",
      icon: "⚓",
      image: {
        wikiTitle: "HMS Victory",
        alt: "HMS Victory, Nelson's flagship",
        caption: "HMS Victory — symbol of the Royal Navy that ruled the 19th-century seas.",
      },
      paragraphs: [
        "Two advantages made Britain a superpower in the 1800s. The first was the Royal Navy, which after the Battle of Trafalgar (1805) had no serious rival for a century. Command of the sea let Britain protect its trade, project power anywhere on the globe, and enforce a worldwide system of free trade on its own terms.",
        "The second was the Industrial Revolution, which began in Britain around 1760. Steam engines, factories, coal and railways made it the 'workshop of the world', producing manufactured goods that flooded global markets while colonies supplied raw materials and bought finished products.",
        "Together, industry and the navy created a new kind of empire — less about ruling territory directly than about dominating global trade, finance and shipping. The City of London became the financial centre of the world, and the pound sterling its anchor currency.",
      ],
      terms: [
        { term: "Royal Navy", definition: "Britain's fleet, dominant from 1805 to the early 20th century, the foundation of imperial power." },
        { term: "Workshop of the world", definition: "Britain's role as the first industrial nation, mass-producing goods for global markets." },
        { term: "Free trade", definition: "A policy of low tariffs and open markets that favoured the world's most advanced manufacturer — Britain." },
      ],
      callout: {
        title: "What made Britain different",
        body: "Earlier empires were land empires; Britain's was a sea-and-trade empire. Its power rested on controlling the oceans, the world's commerce and the cutting edge of industry — letting a small island punch far above its weight.",
      },
    },
    {
      id: "figures",
      type: "figures",
      title: "Monarchs, Explorers & Statesmen",
      icon: "👤",
      intro: "From the queen who launched English sea power to the prime minister who saw the empire's last great war.",
      figures: [
        {
          name: "Elizabeth I",
          role: "Queen of England",
          lived: "1533–1603",
          bio: "Under her reign English seafarers like Drake raided Spanish treasure fleets and the first colonial ventures began. The defeat of the Spanish Armada (1588) announced England as a naval power.",
          image: { wikiTitle: "Elizabeth I", alt: "Portrait of Elizabeth I" },
        },
        {
          name: "James Cook",
          role: "Explorer & navigator",
          lived: "1728–1779",
          bio: "Charted the Pacific, New Zealand and the east coast of Australia with unprecedented accuracy, opening the way for British settlement of the southern hemisphere.",
          image: { wikiTitle: "James Cook", alt: "Portrait of Captain James Cook" },
        },
        {
          name: "Queen Victoria",
          role: "Queen & Empress of India",
          lived: "1819–1901",
          bio: "Her 63-year reign was the empire's zenith. Crowned Empress of India in 1876, she gave her name to an age of industrial confidence and imperial expansion.",
          image: { wikiTitle: "Queen Victoria", alt: "Portrait of Queen Victoria" },
        },
        {
          name: "Winston Churchill",
          role: "Prime Minister",
          lived: "1874–1965",
          bio: "An arch-imperialist who led Britain and its empire through the Second World War — even as that war hastened the empire's end and the rise of independence movements.",
          image: { wikiTitle: "Winston Churchill", alt: "Photograph of Winston Churchill" },
        },
      ],
    },
    {
      id: "wars",
      type: "conflicts",
      title: "Wars That Built & Broke the Empire",
      icon: "⚔️",
      intro: "Global wars — mostly against France — decided who would dominate the world's trade and colonies.",
      conflicts: [
        {
          name: "The Seven Years' War",
          years: "1756–1763",
          against: "France (and allies)",
          summary:
            "Often called the first 'world war', fought across Europe, the Americas, India and the seas. British victories drove the French out of Canada and India.",
          outcome:
            "Britain emerged as the dominant global power, master of North America and the Indian trade — but the war's costs sparked the taxes that lost America.",
          image: { wikiTitle: "Seven Years' War", alt: "Battle scene from the Seven Years' War" },
        },
        {
          name: "The American Revolutionary War",
          years: "1775–1783",
          against: "The Thirteen Colonies (and France)",
          summary:
            "Britain's American colonists rebelled over taxation and self-rule, and — with crucial French help — won their independence.",
          outcome:
            "A humiliating loss of the most populous colonies. Britain redirected its imperial energy toward India, Asia and the Pacific — the 'Second British Empire'.",
          image: { wikiTitle: "American Revolutionary War", alt: "Scene from the American Revolutionary War" },
        },
        {
          name: "The Napoleonic Wars",
          years: "1803–1815",
          against: "Napoleonic France",
          summary:
            "A two-decade struggle against Napoleon. The Royal Navy's victory at Trafalgar (1805) secured the seas; the army helped defeat Napoleon on land, finally at Waterloo (1815).",
          outcome:
            "Britain emerged as the world's unrivalled naval and commercial superpower, beginning a century of relative dominance (the 'Pax Britannica').",
          image: { wikiTitle: "Battle of Trafalgar", alt: "Painting of the Battle of Trafalgar" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "What Britain Spread Worldwide",
      icon: "💡",
      intro:
        "For better and worse, British institutions, language and technology reshaped much of the planet.",
      achievements: [
        {
          name: "Parliamentary democracy",
          field: "Government",
          description:
            "The Westminster model of an elected parliament, cabinet government and a constitutional monarchy was exported across the empire.",
          legacy: "The template for the governments of India, Canada, Australia and dozens of other nations.",
        },
        {
          name: "The English language",
          field: "Culture",
          description:
            "Administration, trade and education in English left it embedded across six continents.",
          legacy: "Now the world's most widely used common language for business, science and the internet.",
        },
        {
          name: "Railways & industry",
          field: "Technology",
          description:
            "Britain pioneered the railway and the factory system and built rail networks across India, Africa and beyond.",
          legacy: "Industrialisation spread worldwide from its British starting point.",
        },
        {
          name: "Abolition of the slave trade",
          field: "Law & society",
          description:
            "After profiting hugely from slavery, Britain banned the slave trade in 1807 and slavery itself in 1833, then used the navy to suppress the trade.",
          legacy: "A turning point in the global abolition of slavery — though it followed centuries of British complicity.",
        },
        {
          name: "Common law & global standards",
          field: "Law & science",
          description:
            "English common law, the Greenwich meridian (0° longitude), Greenwich Mean Time and modern team sports all spread through the empire.",
          legacy: "Why the world sets its clocks from Greenwich and plays football and cricket.",
        },
      ],
    },
    {
      id: "decline",
      type: "narrative",
      title: "Zenith, Decline & a Contested Legacy",
      icon: "🌅",
      image: {
        wikiTitle: "Partition of India",
        alt: "Map relating to the 1947 Partition of India",
        caption: "The 1947 Partition of India — independence, and a vast, violent upheaval.",
      },
      paragraphs: [
        "After the First World War the empire reached its greatest extent, governing around a quarter of humanity. But the cost of two world wars bankrupted Britain and shattered the myth of imperial invincibility, while educated colonial elites — many trained in British ideas of liberty — demanded self-rule.",
        "Decolonisation came fast. India and Pakistan won independence in 1947 (amid a partition that displaced millions and killed perhaps a million more); most of Africa, the Caribbean and Asia followed in the 1950s and 60s. The handover of Hong Kong in 1997 is often taken as the empire's symbolic end. Many former colonies remained linked through the voluntary Commonwealth.",
        "The empire's legacy is fiercely debated. It spread democratic institutions, the English language, railways and the rule of law — but also profited from slavery, seized land, suppressed revolts violently, drew arbitrary borders that still cause conflict, and presided over devastating famines. Both stories are true, and historians continue to weigh them.",
      ],
      terms: [
        { term: "Decolonisation", definition: "The process, mostly after 1945, by which colonies became independent nations." },
        { term: "Commonwealth", definition: "A voluntary association of 56 mostly former British territories, headed historically by the British monarch." },
        { term: "Pax Britannica", definition: "The century of relative global peace (1815–1914) underpinned by British naval and economic dominance." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Eight questions on the rise and fall of the world's largest empire.",
      questions: [
        {
          q: "At its peak, roughly how much of the world's land did the British Empire govern?",
          options: ["About 5%", "About a quarter", "About half", "Nearly all of it"],
          correct: 1,
          fb: "In the 1920s it ruled about a quarter of the world's land and population — the largest empire ever.",
        },
        {
          q: "Which private company conquered much of India for Britain?",
          options: ["The Royal Navy", "The East India Company", "The Hudson's Bay Company", "Lloyd's of London"],
          correct: 1,
          fb: "The East India Company ruled India until the Crown took direct control in 1858.",
        },
        {
          q: "What two advantages made Britain a 19th-century superpower?",
          options: ["A huge army and cavalry", "The Royal Navy and the Industrial Revolution", "Gold mines and slavery alone", "Alliances with Spain"],
          correct: 1,
          fb: "Command of the seas plus being the first industrial nation made Britain dominant.",
        },
        {
          q: "Which war is often called the first true 'world war' and won Britain Canada and India?",
          options: ["The Napoleonic Wars", "The Seven Years' War", "The Boer War", "World War I"],
          correct: 1,
          fb: "The Seven Years' War (1756–63) was fought across multiple continents and oceans.",
        },
        {
          q: "What did Britain lose in 1783?",
          options: ["India", "Canada", "Its thirteen American colonies", "Australia"],
          correct: 2,
          fb: "The American colonies won independence — so Britain pivoted toward India and the Pacific.",
        },
        {
          q: "When did Britain abolish the slave trade?",
          options: ["1707", "1807", "1914", "1947"],
          correct: 1,
          fb: "Britain banned the slave trade in 1807 and slavery itself in 1833 — after long profiting from both.",
        },
        {
          q: "The 1947 independence of India and Pakistan was accompanied by what?",
          options: ["A peaceful transfer", "A violent partition displacing millions", "A British civil war", "A return to company rule"],
          correct: 1,
          fb: "Partition displaced millions and caused enormous loss of life.",
        },
        {
          q: "Which 1997 event is often seen as the empire's symbolic end?",
          options: ["The handover of Hong Kong", "The Suez Crisis", "Indian independence", "The Battle of Trafalgar"],
          correct: 0,
          fb: "Returning Hong Kong to China in 1997 is often taken as the empire's final chapter.",
        },
      ],
    },
  ],
};
