import type { Civilization } from "../types";

export const american: Civilization = {
  id: "american",
  name: "The American Empire",
  shortName: "America",
  emblem: "🦅",
  region: "Global — the world's sole superpower",
  modernCountries: ["United States of America"],
  timespan: "1898 – present",
  startYear: 1898,
  endYear: 2025,
  color: "#2563eb",
  tagline:
    "From thirteen colonies to the world's sole superpower — democracy's champion, architect of the global economy, and the empire that never called itself one.",
  summary:
    "The United States became the world's dominant power through continental expansion, two world wars and a Cold War — all without formally calling itself an empire. Yet it built the most powerful military in history, underwrote the global financial system, spread its culture to every corner of the Earth, and maintains hundreds of overseas bases. Its story is one of extraordinary idealism and real-world contradiction: exporting democracy while propping up dictators, championing free trade while protecting its own industries, leading the world while insisting it stands apart from it.",
  hero: {
    wikiTitle: "Statue of Liberty",
    alt: "The Statue of Liberty in New York Harbour",
    caption: "The Statue of Liberty — a gift from France, and the symbol of American promise to the world.",
  },
  facts: [
    { label: "Founded",        value: "1776 (republic); 1898 (overseas empire)" },
    { label: "Capital",        value: "Washington, D.C." },
    { label: "Economy",        value: "Largest in the world (~$27 trillion GDP)" },
    { label: "Military",       value: "800+ bases in 80+ countries" },
    { label: "Cultural reach", value: "Hollywood, internet, English as global lingua franca" },
  ],
  majorCities: [
    { name: "Washington D.C.", lat:  38.90, lon:  -77.04 },
    { name: "New York",        lat:  40.71, lon:  -74.01 },
    { name: "Los Angeles",     lat:  34.05, lon: -118.24 },
    { name: "Chicago",         lat:  41.88, lon:  -87.63 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments of the American Empire",
      icon: "⭐",
      intro: "From thirteen struggling colonies to the undisputed centre of the world — the events that made America the most powerful nation in history.",
      milestones: [
        { year: "1776",      title: "Declaration of Independence", description: "Thirteen colonies break from Britain, declaring that all men are created equal and government derives its legitimacy from the governed — radical ideas that will reshape the world.", icon: "📜", type: "rise" },
        { year: "1803",      title: "Louisiana Purchase", description: "President Jefferson buys 800,000 square miles from Napoleon for $15 million, doubling the nation's size and setting it on the path to continental dominance.", icon: "🗺️", type: "rise" },
        { year: "1823",      title: "Monroe Doctrine", description: "President Monroe warns European powers to stay out of the Americas — a bold claim to hemispheric dominance that the US lacks the power to enforce for decades, but will become the cornerstone of American foreign policy.", icon: "🌎", type: "rise" },
        { year: "1846",      title: "Mexican-American War", description: "The US defeats Mexico and seizes California, Texas and the Southwest — adding more than half of Mexico's territory and reaching the Pacific coast.", icon: "⚔️", type: "conquest" },
        { year: "1861",      title: "Civil War — The Nation Torn Apart", description: "600,000 Americans die in a war over slavery and union. The North wins, slavery is abolished, and the US emerges as a stronger, more centralised nation — but with wounds that take generations to heal.", icon: "💔", type: "war" },
        { year: "1898",      title: "Spanish-American War — Overseas Empire Begins", description: "The US defeats Spain in ten weeks, acquiring the Philippines, Puerto Rico and Guam — becoming a Pacific and Caribbean power almost overnight.", icon: "🌊", type: "conquest" },
        { year: "1917",      title: "America Enters World War I", description: "The US tips the balance on the Western Front. President Wilson arrives at the Paris Peace Conference promoting democracy and self-determination — America announces itself as a world-shaping power.", icon: "🏅", type: "war" },
        { year: "1941",      title: "Pearl Harbor — America Enters World War II", description: "Japan's surprise attack on Pearl Harbor brings the US into WWII. American industrial output — 'the arsenal of democracy' — will prove decisive on both the Atlantic and Pacific fronts.", icon: "🔥", type: "war" },
        { year: "1944",      title: "Bretton Woods — Designing the World Economy", description: "Allied nations meet in New Hampshire and create the IMF, World Bank and the dollar-based global monetary system — the architecture of economic power that still runs the world.", icon: "💵", type: "innovation" },
        { year: "1945",      title: "Victory and the Atomic Age", description: "The US drops atomic bombs on Hiroshima and Nagasaki, ending WWII. America emerges as the world's only atomic power and undisputed economic colossus — responsible for half of global GDP.", icon: "☢️", type: "rise" },
        { year: "1947",      title: "Marshall Plan & the Cold War", description: "The US spends $13 billion rebuilding Western Europe and draws a line against Soviet expansion — the Cold War that will define the next 44 years has begun.", icon: "🤝", type: "cultural" },
        { year: "1969",      title: "First Men on the Moon", description: "Apollo 11 lands on the Moon. 'One small step for man, one giant leap for mankind' — the most dramatic demonstration of American technological and organisational power in history.", icon: "🌙", type: "innovation" },
        { year: "1989",      title: "Cold War Victory — The Unipolar Moment", description: "The Berlin Wall falls; the Soviet Union collapses two years later. The US stands alone as the world's sole superpower — a moment without precedent in modern history.", icon: "🏆", type: "rise" },
        { year: "1991",      title: "Gulf War — the New World Order", description: "A US-led coalition expels Iraq from Kuwait in 100 hours of ground combat — a display of military dominance that seems to confirm American hegemony.", icon: "🌐", type: "war" },
        { year: "2001",      title: "9/11 and the War on Terror", description: "Al-Qaeda attacks kill 3,000 Americans. The US invades Afghanistan and then Iraq in a 'war on terror' that lasts two decades and costs $8 trillion — exposing the limits of military power.", icon: "🗽", type: "war" },
        { year: "1990s–now", title: "The Internet Age — American Soft Power", description: "Silicon Valley invents the internet economy; Google, Apple, Amazon, Microsoft and Meta become the infrastructure of global life — the most pervasive projection of cultural and economic power in history.", icon: "💻", type: "innovation" },
      ],
    },
    {
      id: "continental",
      type: "narrative",
      title: "Manifest Destiny — A Continent Conquered",
      icon: "🌄",
      image: {
        wikiTitle: "Manifest Destiny",
        alt: "American Progress, a painting symbolising Manifest Destiny",
        caption: "'American Progress' by John Gast (1872) — Columbia leads settlers westward.",
      },
      paragraphs: [
        "The United States began as a string of thirteen colonies hugging the Atlantic seaboard, populated by perhaps three million people. Within a century it had swallowed a continent. The idea driving this expansion was 'Manifest Destiny' — the belief, widespread among white Americans, that God and history had ordained the United States to stretch from ocean to ocean.",
        "The Louisiana Purchase (1803) doubled the country's size overnight. The Mexican-American War (1846–48) stripped Mexico of California, Texas and the entire Southwest — territory containing the gold that would spark the 1849 Gold Rush and draw hundreds of thousands westward. The Homestead Act (1862) gave free land to settlers. The transcontinental railroad (1869) tied the vast country together.",
        "This expansion was a catastrophe for the people already there. Millions of Native Americans were killed, displaced and confined to reservations through war, forced marches and broken treaties. African Americans, enslaved in the South, built much of the country's agricultural wealth. The Civil War (1861–65) resolved the union's founding contradiction at the cost of 600,000 lives — but full equality for Black Americans remained a century away.",
      ],
      subLessons: [
        {
          title: "Buying and seizing a continent",
          image: {
            wikiTitle: "Louisiana Purchase",
            alt: "Map of the Louisiana Purchase",
            caption: "The 1803 purchase doubled the size of the young republic.",
          },
          paragraphs: [
            "The United States began as a thin strip of states along the Atlantic, hemmed in by European powers. Its first great leap came in 1803, when President Jefferson bought the vast Louisiana Territory from a cash-strapped Napoleon for $15 million — doubling the country's size overnight and opening the path to the Rocky Mountains.",
            "Expansion then became deliberate policy. Texas was annexed in 1845, and the following year the United States provoked and won a war with Mexico, seizing California and the entire Southwest. A nation that had hugged the east coast now stretched 'from sea to shining sea'.",
            "Behind it all lay 'Manifest Destiny' — the widely held belief that God had ordained the United States to spread across the whole continent and carry its institutions with it. It was a powerful unifying myth, and a convenient justification for taking land that others already held.",
          ],
          terms: [
            { term: "Louisiana Purchase", definition: "The 1803 purchase from France that doubled the size of the United States." },
            { term: "Mexican-American War", definition: "The 1846–48 war that won the US California and the entire Southwest." },
          ],
        },
        {
          title: "The cost to Native nations",
          paragraphs: [
            "The land into which Americans poured was not empty. It was home to hundreds of Native nations with their own territories, governments and cultures. As settlers pushed west, those peoples were dispossessed by a relentless combination of treaties (often broken), forced removal, and outright war.",
            "One of the darkest episodes was the 'Trail of Tears' of the 1830s, when tens of thousands of Cherokee and other southeastern peoples were forced from their homelands to territory west of the Mississippi; thousands died on the march. Later, the Plains wars confined surviving nations to reservations.",
            "Most devastating of all was disease. Epidemics of smallpox and other illnesses, against which Native peoples had no immunity, had already swept the continent, killing a huge share of the population before many settlers even arrived — making conquest of the 'frontier' far easier than it would otherwise have been.",
          ],
          terms: [
            { term: "Trail of Tears", definition: "The deadly 1830s forced removal of southeastern Native nations to the west." },
            { term: "Reservation", definition: "Land set aside, often poor and remote, to which Native nations were confined." },
          ],
        },
        {
          title: "Civil War and a nation remade",
          image: {
            wikiTitle: "American Civil War",
            alt: "Scene from the American Civil War",
            caption: "The Civil War settled the questions of slavery and union.",
          },
          paragraphs: [
            "Every new western territory reopened an explosive question: would it permit slavery? The agrarian, slaveholding South and the industrialising, increasingly anti-slavery North grew ever more divided, until the 1860 election of Abraham Lincoln prompted Southern states to secede and form the Confederacy.",
            "The resulting Civil War (1861–65) was the deadliest in American history, killing some 600,000 people. Industrial weapons met massed armies in a conflict that previewed the total wars of the 20th century. The Union's victory preserved the country as one nation.",
            "It also ended slavery: the Thirteenth Amendment abolished it across the United States. Yet true equality did not follow — a system of segregation and disenfranchisement soon arose in the South, leaving the nation's 'founding contradiction' unresolved for another century.",
          ],
          terms: [
            { term: "Secession", definition: "The withdrawal of Southern states from the Union that triggered the Civil War." },
            { term: "Emancipation", definition: "The abolition of slavery, secured by Union victory and the Thirteenth Amendment." },
          ],
        },
      ],
      terms: [
        { term: "Manifest Destiny", definition: "The 19th-century belief that American expansion across North America was inevitable and divinely ordained." },
        { term: "Homestead Act", definition: "1862 law giving 160 acres of federal land free to settlers who would farm it — accelerating westward expansion at the expense of indigenous peoples." },
      ],
      callout: {
        title: "The founding contradiction",
        body: "The Declaration of Independence proclaimed that 'all men are created equal' — yet its primary author, Thomas Jefferson, owned more than 600 enslaved people. This tension between American ideals and American reality runs through the country's entire history.",
      },
    },
    {
      id: "superpower",
      type: "narrative",
      title: "The American Century",
      icon: "🌍",
      image: {
        wikiTitle: "Marshall Plan",
        alt: "A poster for the Marshall Plan showing the flags of participating nations",
        caption: "The Marshall Plan — the US invested $13 billion to rebuild Western Europe after WWII.",
      },
      paragraphs: [
        "When the United States entered World War I in 1917, it was still an economic giant but a diplomatic newcomer. When it emerged from World War II in 1945, it was something the world had never seen before: a nation responsible for roughly half of global industrial production, possessing the only atomic bomb, with armies and navies stationed across the globe.",
        "Rather than retreat into isolation as it had after WWI, the US built a new world order in its image. The Bretton Woods agreements created a dollar-based global economy. The Marshall Plan poured $13 billion into rebuilding Western Europe — not purely from altruism but because prosperous democracies were better buffers against Soviet communism. NATO, the United Nations, the World Bank and the IMF all bear American fingerprints.",
        "The Cold War with the Soviet Union (1947–1991) was the great organising conflict of the era. The US fought hot wars in Korea and Vietnam, supported coups and dictators across Latin America and the Middle East, and spent trillions in a nuclear arms race. When the Soviet Union collapsed in 1991, the US stood alone — the first truly global superpower in history.",
      ],
      subLessons: [
        {
          title: "The arsenal of democracy",
          image: {
            wikiTitle: "Arsenal of Democracy",
            alt: "American wartime factory production",
            caption: "US industry out-produced the world in World War II.",
          },
          paragraphs: [
            "The United States entered the 20th century as the world's largest industrial economy, but long preferred to stay out of European quarrels. The two world wars changed that. American intervention helped decide the First; in the Second, US factories became the 'arsenal of democracy', out-producing every other nation combined.",
            "The war ended with two epoch-making American acts: the building of the atomic bomb and its use on Hiroshima and Nagasaki in 1945. The United States emerged from the war almost untouched at home, holding around half the world's manufacturing capacity and a monopoly, briefly, on nuclear weapons.",
            "Rather than retreat into isolation as after 1918, Washington chose to lead. It helped design a new international order — the United Nations, the IMF and World Bank, the dollar as the world's reserve currency — and rebuilt former enemies through the Marshall Plan, binding the Western world to American leadership.",
          ],
          terms: [
            { term: "Arsenal of democracy", definition: "The US's role mass-producing weapons and supplies that helped win World War II." },
            { term: "Marshall Plan", definition: "The vast US programme to rebuild Western Europe and anchor it to American leadership." },
          ],
        },
        {
          title: "The Cold War and the Space Race",
          image: {
            wikiTitle: "Apollo 11",
            alt: "The Apollo 11 Moon landing",
            caption: "Reaching the Moon in 1969 showcased American power.",
          },
          paragraphs: [
            "Victory left two superpowers facing each other: the capitalist United States and the communist Soviet Union. For 44 years they waged the Cold War — a global contest fought not directly but through an arms race, espionage, propaganda, and proxy wars from Korea and Vietnam to Afghanistan, shadowed always by the threat of nuclear annihilation.",
            "The rivalry reached for the heavens. Stung when the Soviets launched the first satellite and first human into orbit, the United States committed to landing a man on the Moon — and in 1969 Apollo 11 did exactly that, a stunning demonstration of American technological and organisational might.",
            "The contest ended without the dreaded war. Strained beyond endurance, the Soviet bloc collapsed: the Berlin Wall fell in 1989 and the Soviet Union dissolved in 1991. The United States was left, for a time, as the world's sole superpower in a 'unipolar moment'.",
          ],
          terms: [
            { term: "Space Race", definition: "The US–Soviet competition in spaceflight, culminating in the 1969 Moon landing." },
            { term: "Unipolar moment", definition: "The period after 1991 when the US stood as the world's sole superpower." },
          ],
        },
        {
          title: "Soft power: the American century",
          paragraphs: [
            "American dominance was never only about armies and economics. Its deepest reach may have been cultural. Hollywood films, jazz, rock and roll, blue jeans, Coca-Cola and fast food carried American styles and aspirations into nearly every country on Earth.",
            "Scholars call this 'soft power' — the ability to get what you want by attraction rather than coercion. People who never feared American tanks still watched American movies, listened to American music and dreamed of American prosperity, spreading US influence in ways no military could.",
            "In the late 20th century a new wave arrived from Silicon Valley. American companies built the personal computer, the internet and the smartphone, reshaping how the entire world works, communicates and thinks — extending the 'American century' into the digital age.",
          ],
          terms: [
            { term: "Soft power", definition: "Influence exerted through culture and values rather than military force." },
            { term: "Silicon Valley", definition: "The California tech hub whose innovations spread American influence in the digital age." },
          ],
        },
      ],
      terms: [
        { term: "Bretton Woods", definition: "The 1944 agreements that created the dollar as the world's reserve currency and established the IMF and World Bank." },
        { term: "NATO", definition: "North Atlantic Treaty Organisation — the US-led military alliance formed in 1949 to deter Soviet expansion in Europe." },
        { term: "Cold War", definition: "The 1947–1991 ideological and geopolitical contest between the US and Soviet Union, fought through proxy wars, espionage, and the nuclear arms race." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Presidents Who Shaped the World",
      icon: "👤",
      intro: "The presidents and figures who defined America's rise to global power.",
      figures: [
        {
          name: "George Washington",
          role: "First President",
          lived: "1732–1799",
          bio: "Led the Continental Army to victory over Britain, then willingly gave up power after two terms — establishing the democratic precedent that would define American governance.",
          image: { wikiTitle: "George Washington", alt: "Portrait of George Washington" },
        },
        {
          name: "Abraham Lincoln",
          role: "16th President",
          lived: "1809–1865",
          bio: "Held the Union together through the Civil War and abolished slavery — assassinated five days after the Confederacy surrendered, before he could oversee reconstruction.",
          image: { wikiTitle: "Abraham Lincoln", alt: "Portrait of Abraham Lincoln" },
        },
        {
          name: "Franklin D. Roosevelt",
          role: "32nd President",
          lived: "1882–1945",
          bio: "Led America through the Great Depression with the New Deal, then through WWII as 'arsenal of democracy' — the longest-serving president, dying just weeks before victory in Europe.",
          image: { wikiTitle: "Franklin D. Roosevelt", alt: "Portrait of Franklin D. Roosevelt" },
        },
        {
          name: "Dwight D. Eisenhower",
          role: "34th President / Supreme Allied Commander",
          lived: "1890–1969",
          bio: "Commanded the D-Day invasion, then as president built the interstate highway system and warned of the 'military-industrial complex' — a prescient caution from the man who knew it best.",
          image: { wikiTitle: "Dwight D. Eisenhower", alt: "Portrait of Dwight D. Eisenhower" },
        },
        {
          name: "John F. Kennedy",
          role: "35th President",
          lived: "1917–1963",
          bio: "Navigated the Cuban Missile Crisis — the closest the world came to nuclear war — and launched the Apollo programme. Assassinated in Dallas at 46, cementing his mythic status.",
          image: { wikiTitle: "John F. Kennedy", alt: "Portrait of John F. Kennedy" },
        },
      ],
    },
    {
      id: "conflicts",
      type: "conflicts",
      title: "America at War",
      icon: "⚔️",
      intro: "The United States has been at war for all but a handful of years since independence. These are the conflicts that most shaped American power and identity.",
      conflicts: [
        {
          name: "World War II",
          years: "1941–1945",
          against: "Nazi Germany, Imperial Japan, Fascist Italy",
          summary:
            "After Pearl Harbor the US mobilised its entire economy for war — building 300,000 aircraft, 100,000 tanks and 1,000 ships. D-Day (June 1944) cracked open Nazi Europe; the atomic bombs ended the Pacific War.",
          outcome:
            "Total Allied victory. The US emerged as the undisputed global superpower, its homeland untouched, its economy booming while Europe and Asia lay in ruins.",
          image: { wikiTitle: "Normandy landings", alt: "US troops landing on Omaha Beach on D-Day" },
        },
        {
          name: "The Cold War",
          years: "1947–1991",
          against: "The Soviet Union",
          summary:
            "A 44-year contest of ideology, espionage, proxy wars and nuclear brinkmanship. The US fought in Korea and Vietnam, backed coups across the globe, and spent $8 trillion on defence.",
          outcome:
            "Soviet collapse in 1991 left the US as the world's sole superpower — but many Cold War interventions left lasting instability in the countries caught in between.",
          image: { wikiTitle: "Berlin Wall", alt: "The fall of the Berlin Wall in 1989" },
        },
        {
          name: "Vietnam War",
          years: "1955–1975",
          against: "North Vietnam and the Viet Cong",
          summary:
            "The US sent 500,000 troops to prevent a communist takeover of South Vietnam. Despite overwhelming firepower, guerrilla resistance, domestic protest and a credibility gap destroyed public support.",
          outcome:
            "The US withdrew in 1973; Saigon fell in 1975. 58,000 Americans and over 2 million Vietnamese died. The war shattered confidence in US military power for a generation.",
          image: { wikiTitle: "Vietnam War", alt: "US soldiers in Vietnam" },
        },
        {
          name: "War on Terror",
          years: "2001–2021",
          against: "Al-Qaeda, Taliban, ISIS",
          summary:
            "After 9/11 the US invaded Afghanistan (2001) and Iraq (2003). Both interventions toppled their targets quickly but triggered long insurgencies. The US spent $8 trillion and lost 7,000 soldiers.",
          outcome:
            "The Taliban returned to power in Afghanistan in 2021. Iraq remains unstable. The wars discredited the idea that American military force could reliably build democratic states.",
          image: { wikiTitle: "September 11 attacks", alt: "The Twin Towers on September 11, 2001" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "America's Innovations",
      icon: "💡",
      intro: "The United States has produced a disproportionate share of the modern world's most transformative inventions, ideas and institutions.",
      image: {
        wikiTitle: "Apollo 11",
        alt: "Buzz Aldrin on the surface of the Moon during the Apollo 11 mission",
        caption: "Apollo 11, July 1969 — the Moon landing remains the greatest feat of organised human ambition.",
      },
      achievements: [
        {
          name: "The Moon Landing",
          field: "Space Exploration",
          description: "NASA's Apollo programme landed 12 humans on the Moon between 1969 and 1972 — the most complex engineering project in history, achieved within a decade of Kennedy's challenge.",
          legacy: "Demonstrated the scale of what democratic capitalism could achieve and remains the benchmark for human ambition.",
        },
        {
          name: "The Internet",
          field: "Technology",
          description: "ARPANET, the US Defence Department research network, became the internet; Silicon Valley companies then built the applications — email, search, social media, e-commerce — that billions use daily.",
          legacy: "The most transformative communications technology since the printing press, and still primarily American-owned infrastructure.",
        },
        {
          name: "The Marshall Plan",
          field: "Statecraft",
          description: "The US invested $13 billion (about $170 billion today) to rebuild Western European economies after WWII — the most successful foreign aid programme in history.",
          legacy: "Restored European prosperity, cemented US alliances, and demonstrated that economic rebuilding rather than punishment was the way to win a lasting peace.",
        },
        {
          name: "Constitutional Democracy",
          field: "Government",
          description: "The 1787 Constitution created the world's first modern constitutional republic, with separation of powers, an independent judiciary and a bill of rights — a template for dozens of subsequent democracies.",
          legacy: "The US constitutional model has been copied, adapted and contested by nations across the world for 235 years.",
        },
        {
          name: "Medical Innovation",
          field: "Science",
          description: "American universities and pharmaceutical companies have produced more Nobel Prizes in Medicine than any other country, and led the development of vaccines, antibiotics and cancer treatments.",
          legacy: "The mRNA vaccine technology used in COVID-19 vaccines was developed in the US, saving an estimated 20 million lives in its first year.",
        },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the rise of the American Empire.",
      questions: [
        {
          q: "What was the Monroe Doctrine?",
          options: [
            "A trade agreement with Britain",
            "A warning to European powers to stay out of the Americas",
            "A declaration of war on Mexico",
            "A plan to buy Alaska from Russia",
          ],
          correct: 1,
          fb: "Declared in 1823, the Monroe Doctrine asserted US dominance over the Western hemisphere.",
        },
        {
          q: "Which 1944 agreement made the US dollar the world's reserve currency?",
          options: ["The Marshall Plan", "The NATO Treaty", "The Bretton Woods Agreement", "The Lend-Lease Act"],
          correct: 2,
          fb: "Bretton Woods created the dollar-based global monetary system and established the IMF and World Bank.",
        },
        {
          q: "Why is the US sometimes called an empire that 'never called itself one'?",
          options: [
            "It has no overseas territories",
            "It projects global power through bases, finance and culture rather than formal colonies",
            "Its presidents refused all foreign alliances",
            "It never fought wars outside its own continent",
          ],
          correct: 1,
          fb: "The US maintains 800+ foreign military bases and anchors the global economy, but frames its role as leadership, not empire.",
        },
        {
          q: "The US 'arsenal of democracy' in WWII refers to…",
          options: [
            "Nuclear weapons development",
            "Massive industrial production of weapons for Allied nations",
            "The Marine Corps' beach assault strategy",
            "The CIA's role in occupied Europe",
          ],
          correct: 1,
          fb: "FDR used the phrase to describe how US factories would outproduce the Axis powers — which they did, at extraordinary scale.",
        },
        {
          q: "What was the outcome of the Vietnam War for the United States?",
          options: [
            "A clear military victory",
            "A negotiated peace that held",
            "Withdrawal followed by South Vietnam's fall to the North",
            "A United Nations-brokered partition",
          ],
          correct: 2,
          fb: "The US withdrew in 1973; Saigon fell to North Vietnamese forces in 1975 — a defining national trauma.",
        },
        {
          q: "Which technology, invented in the USA, most transformed global communication in the late 20th century?",
          options: ["The telephone", "The internet", "The television", "The satellite"],
          correct: 1,
          fb: "ARPANET grew into the internet; Silicon Valley companies then built the applications that billions rely on daily.",
        },
        {
          q: "What happened in 1991 that created the 'unipolar moment'?",
          options: [
            "The US won the Gulf War",
            "The Soviet Union collapsed, leaving the US as the sole superpower",
            "The US signed NAFTA",
            "NATO expanded into Eastern Europe",
          ],
          correct: 1,
          fb: "The Soviet collapse left the US without a peer rival for the first time in modern history — a moment political scientists called the 'unipolar moment'.",
        },
      ],
    },
  ],
};
