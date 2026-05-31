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
  majorCities: [
    { name: "London",     lat: 51.51, lon: -0.13 },
    { name: "Edinburgh",  lat: 55.95, lon: -3.19 },
    { name: "Dublin",     lat: 53.33, lon: -6.25 },
    { name: "Calcutta",   lat: 22.57, lon: 88.36 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the British Empire",
      icon: "⭐",
      intro: "From a damp island nation to a quarter of the world's land — and the long reckoning that followed. The pivotal events of history's largest empire.",
      milestones: [
        { year: "1583 CE",  title: "First Overseas Colony: Newfoundland", description: "Sir Humphrey Gilbert claims Newfoundland for England — the first step in what will become the world's largest empire.", icon: "⛵", type: "rise" },
        { year: "1600 CE",  title: "East India Company Founded", description: "Queen Elizabeth I charters the East India Company, a trading corporation that will eventually rule the Indian subcontinent.", icon: "🏢", type: "innovation" },
        { year: "1607 CE",  title: "Jamestown — First Permanent American Colony", description: "English settlers establish Jamestown, Virginia — the first permanent English settlement in North America.", icon: "🌎", type: "rise" },
        { year: "1688 CE",  title: "Glorious Revolution", description: "Parliament replaces the Catholic king with William III, establishing constitutional monarchy and parliamentary supremacy — the foundation of modern Britain.", icon: "📜", type: "innovation" },
        { year: "1707 CE",  title: "Acts of Union: Great Britain Created", description: "England and Scotland formally unite as Great Britain — creating the political entity that will build the empire.", icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", type: "rise" },
        { year: "1757 CE",  title: "Battle of Plassey — British India Begins", description: "Robert Clive defeats the Nawab of Bengal with a company army, effectively handing the British East India Company control of Bengal.", icon: "🏹", type: "conquest" },
        { year: "1776 CE",  title: "American Colonies Declare Independence", description: "Thirteen American colonies break away — Britain's greatest imperial loss, but a spur to expand elsewhere.", icon: "🗽", type: "fall" },
        { year: "1807 CE",  title: "Slave Trade Abolished", description: "Britain outlaws the slave trade across its empire — a landmark moral moment, though slavery itself persists in the colonies for decades.", icon: "⛓️", type: "cultural" },
        { year: "1833 CE",  title: "Slavery Abolished Across the Empire", description: "The Slavery Abolition Act frees enslaved people across the British Empire — 800,000 people are emancipated.", icon: "🕊️", type: "cultural" },
        { year: "1857 CE",  title: "Indian Rebellion — The Great Uprising", description: "A massive Indian uprising shakes British rule; in its aftermath the Crown takes direct control of India from the East India Company.", icon: "🔥", type: "war" },
        { year: "1876 CE",  title: "Victoria Proclaimed Empress of India", description: "Queen Victoria takes the title 'Empress of India' — cementing the jewel of the empire and British global prestige.", icon: "💎", type: "rise" },
        { year: "1899 CE",  title: "Boer War Begins", description: "Britain fights a brutal guerrilla war against Boer settlers in South Africa — winning, but at enormous cost to its reputation.", icon: "⚔️", type: "war" },
        { year: "1922 CE",  title: "Irish Free State Created", description: "After a war of independence, most of Ireland leaves the British Empire — the first major crack in the imperial edifice.", icon: "🍀", type: "fall" },
        { year: "1947 CE",  title: "India Gains Independence", description: "India and Pakistan become independent nations, ending 200 years of British rule over the subcontinent — the empire's greatest jewel is gone.", icon: "🌅", type: "fall" },
        { year: "1997 CE",  title: "Hong Kong Handover", description: "Britain transfers Hong Kong to China — widely regarded as the symbolic end of the British Empire.", icon: "🌙", type: "fall" },
      ],
    },
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
      subLessons: [
        {
          title: "Mastery of the seas",
          image: {
            wikiTitle: "Spanish Armada",
            alt: "The defeat of the Spanish Armada",
            caption: "The 1588 victory announced England as a naval power.",
          },
          paragraphs: [
            "Britain is an island, and the sea was both its shield and its road to the world. The defeat of the Spanish Armada in 1588 was a turning point: a smaller English fleet, aided by storms, scattered the mightiest navy in Europe, announcing that a new sea power had arrived.",
            "Over the following two centuries the Royal Navy grew into the most powerful fleet on Earth. It protected the island from invasion, guarded the trade routes that carried Britain's wealth, and could project force to any coast in the world. Command of the sea was the foundation on which everything else was built.",
            "This naval supremacy let Britain win wars far from home, blockade its enemies, and seize colonies and bases across the globe. The slogan 'Britannia rules the waves' was not mere boasting — for much of the 18th and 19th centuries, it was simply true.",
          ],
          terms: [
            { term: "Spanish Armada", definition: "The Spanish invasion fleet whose 1588 defeat marked England's naval rise." },
            { term: "Royal Navy", definition: "Britain's naval force, the most powerful in the world and the key to its empire." },
          ],
        },
        {
          title: "Empire by company and colony",
          paragraphs: [
            "Much of Britain's empire was built not by the state but by private enterprise. The crown granted chartered companies monopolies to trade — and, increasingly, to govern — in distant regions. The most famous, the East India Company, founded in 1600, began as a spice and textile trader and ended up ruling much of the Indian subcontinent with its own private army.",
            "Britain also planted settler colonies, especially along the eastern coast of North America and in the Caribbean. These grew tobacco, sugar and cotton for export, generating vast wealth that flowed back to Britain and fuelled further expansion.",
            "Much of that wealth, to Britain's lasting shame, was built on the Atlantic slave trade. British ships carried millions of enslaved Africans across the ocean to labour on Caribbean and American plantations — a brutal traffic that enriched ports like Liverpool and Bristol before Britain abolished the trade in 1807 and slavery itself in 1833.",
          ],
          terms: [
            { term: "Chartered company", definition: "A private company granted a royal monopoly to trade and govern in a region." },
            { term: "Atlantic slave trade", definition: "The forced transport of enslaved Africans that enriched the early empire." },
          ],
        },
        {
          title: "Beating France for global supremacy",
          paragraphs: [
            "For over a century Britain's great rival was France, and the two fought a series of wars spanning the globe. The decisive clash was the Seven Years' War (1756–1763), which Britain won resoundingly — taking Canada from France and securing dominance over French rivals in India. It emerged as the world's leading colonial and commercial power.",
            "The empire suffered a great shock in 1776, when the thirteen American colonies declared independence and, with French help, won it. The loss of America was a severe blow and might have ended Britain's imperial ambitions.",
            "Instead it redirected them. Britain turned its energies eastward and southward — to India, Africa, Australia and the Pacific — building a 'second' empire even larger than the first. Final victory over Napoleon at Waterloo in 1815 left Britain the unrivalled global power for the century to come.",
          ],
          terms: [
            { term: "Seven Years' War", definition: "The 1756–63 global war whose victory gave Britain Canada and dominance in India." },
            { term: "Second British Empire", definition: "The eastward, post-1783 empire centred on India, Asia and the Pacific." },
          ],
        },
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
      subLessons: [
        {
          title: "Trafalgar and command of the oceans",
          image: {
            wikiTitle: "Battle of Trafalgar",
            alt: "The Battle of Trafalgar",
            caption: "Trafalgar (1805) left the Royal Navy without a rival for a century.",
          },
          paragraphs: [
            "In 1805, off the coast of Spain, Admiral Horatio Nelson destroyed a combined French and Spanish fleet at the Battle of Trafalgar. Nelson died in the moment of victory, but his triumph removed any naval threat to Britain for a hundred years and made invasion of the island impossible.",
            "With the seas secured, the Royal Navy became the guarantor of a global system. It patrolled the trade routes, protected merchant shipping, suppressed the slave trade, and could deliver British power to any coastline on the planet. This was the foundation of the 'Pax Britannica', a century of relative peace under British dominance.",
            "Command of the oceans also meant command of commerce. Britain could insist on open markets worldwide, confident that its merchants and warships would dominate any sea lane — turning naval supremacy directly into economic supremacy.",
          ],
          terms: [
            { term: "Battle of Trafalgar", definition: "Nelson's 1805 naval victory that secured British command of the seas." },
            { term: "Pax Britannica", definition: "The century of relative global peace underpinned by British naval power." },
          ],
        },
        {
          title: "The workshop of the world",
          image: {
            wikiTitle: "Industrial Revolution",
            alt: "Factories of the Industrial Revolution",
            caption: "Steam, coal and factories made Britain the first industrial nation.",
          },
          paragraphs: [
            "Around 1760 Britain became the birthplace of the Industrial Revolution. Steam engines powered by coal drove new machines in textile mills, ironworks and, soon, on railways and steamships. For the first time, goods could be produced in enormous quantities and at low cost.",
            "This made Britain the 'workshop of the world'. Its factories flooded global markets with cheap manufactured goods, while its colonies supplied raw materials — Indian and American cotton, for instance — and then bought back the finished cloth. Cities like Manchester and Birmingham exploded in size.",
            "Industry and empire reinforced each other. The empire provided resources and captive markets; industrial wealth and technology, from railways to the telegraph and the machine gun, in turn made it possible to control vast territories with relatively few people.",
          ],
          terms: [
            { term: "Workshop of the world", definition: "Britain's role as the first industrial nation, mass-producing goods for global markets." },
            { term: "Industrial Revolution", definition: "The late-18th-century shift to steam-powered factory production, begun in Britain." },
          ],
        },
        {
          title: "An empire of trade and free markets",
          paragraphs: [
            "Britain's was a new kind of empire — less about ruling territory directly than about dominating global trade, finance and shipping. Wherever possible it preferred 'informal' influence, trading and investing in regions it never formally governed, from South America to China.",
            "The guiding doctrine was free trade: low tariffs and open markets. This suited the world's most advanced manufacturer, whose cheap goods could outcompete local industry almost anywhere. When China resisted, Britain even fought the Opium Wars to force its markets open.",
            "At the centre of this web sat the City of London, which became the financial capital of the world. British banks, insurers and investors funded railways and ventures across the globe, and the pound sterling served as the anchor of international finance.",
          ],
          terms: [
            { term: "Free trade", definition: "A policy of low tariffs and open markets that favoured the world's most advanced manufacturer — Britain." },
            { term: "The City of London", definition: "The financial district that became the centre of world banking and investment." },
          ],
        },
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
      subLessons: [
        {
          title: "The zenith — a quarter of humanity",
          paragraphs: [
            "After the First World War the empire reached its greatest extent, adding former German and Ottoman territories to govern around a quarter of the world's land and people. On its maps the sun genuinely never set: it was always daytime somewhere under British rule.",
            "Yet the peak concealed deep weakness. Both world wars had drained Britain financially, turning the world's great creditor into a debtor and shattering the aura of imperial invincibility — especially after Japan's capture of the supposedly impregnable Singapore in 1942.",
            "Crucially, the empire had also educated a generation of colonial elites in British ideas of liberty, democracy and self-rule. Leaders like Mohandas Gandhi turned those very ideals back against the empire, demanding for their own peoples the freedoms Britain claimed to champion.",
          ],
          terms: [
            { term: "'Sun never set'", definition: "The phrase capturing the empire's global reach — always daytime in some British territory." },
            { term: "Gandhi", definition: "The leader whose non-violent campaign drove Indian independence and inspired others." },
          ],
        },
        {
          title: "The wave of decolonisation",
          image: {
            wikiTitle: "Partition of India",
            alt: "Map relating to the 1947 Partition of India",
            caption: "Indian independence in 1947 began the empire's rapid unravelling.",
          },
          paragraphs: [
            "The end came with startling speed. In 1947 India and Pakistan won independence — but the hasty partition of British India into Hindu and Muslim states displaced perhaps fifteen million people and killed up to a million in communal violence, a tragic end to two centuries of the Raj.",
            "Where India led, the rest followed. Through the 1950s and 60s, dozens of colonies across Africa, the Caribbean, Asia and the Middle East became independent nations. The Suez Crisis of 1956, when the United States forced Britain to back down over Egypt, brutally exposed that Britain was no longer a first-rank world power.",
            "The handover of Hong Kong to China in 1997 is usually taken as the empire's symbolic final act. Many former colonies chose to remain linked through the Commonwealth, a voluntary association of independent states that had once flown the British flag.",
          ],
          terms: [
            { term: "Decolonisation", definition: "The process, mostly after 1945, by which colonies became independent nations." },
            { term: "Commonwealth", definition: "A voluntary association of mostly former British territories." },
          ],
        },
        {
          title: "A legacy fiercely contested",
          paragraphs: [
            "No empire's legacy is argued over more bitterly. On one side, Britain left behind parliamentary democracy, the rule of law, the English language, railways and a web of institutions and sporting traditions that still shape much of the world.",
            "On the other lies a record of profound harm: centuries of profit from slavery, wars of conquest, the violent suppression of revolts, man-made famines in India and Ireland that killed millions, and arbitrary borders drawn across Africa and the Middle East that still fuel conflict today.",
            "Both accounts are true at once, and historians continue to weigh them. What is certain is the sheer scale of the empire's impact — few forces in modern history have done more to shape the political map, economy and culture of the planet we live on.",
          ],
          terms: [
            { term: "Contested legacy", definition: "The ongoing debate over the empire's mix of benefits and grave harms." },
            { term: "Man-made famine", definition: "Famines in India and Ireland worsened by British policy, killing millions." },
          ],
        },
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
