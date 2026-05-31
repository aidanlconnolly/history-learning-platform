import type { Civilization } from "../types";

export const rome: Civilization = {
  id: "rome",
  name: "The Roman Empire",
  shortName: "Rome",
  emblem: "🦅",
  region: "Mediterranean, Europe & Near East",
  modernCountries: [
    "Italy",
    "Spain",
    "Portugal",
    "Greece",
    "Turkey",
    "Egypt",
    "Tunisia",
    "Syria",
    "Israel",
  ],
  timespan: "753 BCE – 476 CE",
  startYear: -753,
  endYear: 476,
  color: "#b91c1c",
  tagline:
    "From a village on seven hills to an empire of 60 million — law, legions, roads and concrete that still shape the West.",
  summary:
    "Rome grew from a small Italian city-state into the dominant power of the ancient Mediterranean, ruling for over a thousand years across monarchy, republic and empire. Its genius lay less in invention than in absorption and scale: it borrowed Greek culture, Etruscan engineering and conquered peoples' gods, then organised them with unmatched discipline, law and infrastructure.",
  hero: {
    wikiTitle: "Colosseum",
    alt: "The Colosseum in Rome",
    caption: "The Colosseum (completed 80 CE) seated some 50,000 spectators.",
  },
  facts: [
    { label: "Capital", value: "Rome (later also Constantinople)" },
    { label: "Peak population", value: "~60 million (c. 117 CE)" },
    { label: "Peak extent", value: "~5 million km² under Trajan" },
    { label: "Language", value: "Latin (West), Greek (East)" },
    { label: "Government", value: "Monarchy → Republic → Empire" },
  ],
  majorCities: [
    { name: "Rome",            lat: 41.90, lon:  12.50 },
    { name: "Carthage",        lat: 36.85, lon:  10.32 },
    { name: "Constantinople",  lat: 41.01, lon:  28.95 },
    { name: "Alexandria",      lat: 31.20, lon:  29.90 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments in the Roman Empire",
      icon: "⭐",
      intro: "From a village on seven hills to an empire of 60 million — and then collapse. The events that made Rome the template for all Western civilisation.",
      milestones: [
        { year: "753 BCE",  title: "Rome is Founded", description: "According to tradition, Romulus founds Rome on the Palatine Hill beside the Tiber — a village that will become the world's greatest city.", icon: "🐺", type: "rise" },
        { year: "509 BCE",  title: "The Republic is Born", description: "Romans expel their last king and establish a republic — with two elected consuls, a Senate and laws designed to prevent tyranny.", icon: "🏛️", type: "innovation" },
        { year: "390 BCE",  title: "Gauls Sack Rome", description: "A Gallic army sweeps south and sacks Rome itself — a traumatic defeat that drives Rome to rebuild its walls and military.", icon: "🔥", type: "war" },
        { year: "264 BCE",  title: "First Punic War Begins", description: "Rome fights Carthage for control of Sicily in the first of three great Punic Wars — launching Rome as a Mediterranean sea power.", icon: "⚔️", type: "war" },
        { year: "216 BCE",  title: "Battle of Cannae — Hannibal's Masterpiece", description: "Hannibal encircles and destroys a Roman army of 70,000 in one afternoon — the most devastating defeat in Roman history.", icon: "💥", type: "war" },
        { year: "201 BCE",  title: "Carthage Defeated", description: "Scipio Africanus defeats Hannibal at Zama, ending the Second Punic War and making Rome the undisputed master of the western Mediterranean.", icon: "🏆", type: "conquest" },
        { year: "49 BCE",   title: "Caesar Crosses the Rubicon", description: "Julius Caesar brings his army south across the Rubicon river — an act of war against the Senate that launches the civil war.", icon: "🌊", type: "war" },
        { year: "44 BCE",   title: "Caesar is Assassinated", description: "Senators murder Caesar on the Ides of March, but it only triggers more civil war — the Republic cannot be saved.", icon: "🗡️", type: "fall" },
        { year: "27 BCE",   title: "Augustus Becomes First Emperor", description: "Octavian takes the title Augustus and founds the Roman Empire — the Pax Romana begins, bringing 200 years of relative peace.", icon: "👑", type: "rise" },
        { year: "70 CE",    title: "Jerusalem Destroyed", description: "Titus sacks Jerusalem and destroys the Second Temple — scattering the Jewish population across the Mediterranean world.", icon: "💔", type: "war" },
        { year: "80 CE",    title: "The Colosseum Opens", description: "The Flavian Amphitheatre (Colosseum) is completed — seating 50,000 for gladiatorial combat, animal hunts and public executions.", icon: "🏟️", type: "cultural" },
        { year: "117 CE",   title: "Empire Reaches Its Greatest Extent", description: "Under Trajan, Rome reaches its maximum size — from Scotland to Mesopotamia, covering 5 million km² and ruling 60 million people.", icon: "🌍", type: "conquest" },
        { year: "212 CE",   title: "All Free People Get Citizenship", description: "Emperor Caracalla grants Roman citizenship to every free person in the empire — transforming what it meant to be Roman.", icon: "📜", type: "innovation" },
        { year: "330 CE",   title: "Constantinople Founded", description: "Constantine moves the capital to Byzantium, renaming it Constantinople — shifting power eastward and dividing the empire's fate.", icon: "🌅", type: "cultural" },
        { year: "380 CE",   title: "Christianity Becomes the State Religion", description: "Emperor Theodosius makes Christianity the official religion of the Roman Empire, transforming Western history forever.", icon: "✝️", type: "cultural" },
        { year: "476 CE",   title: "Western Rome Falls", description: "The Germanic chieftain Odoacer deposes the last Western emperor Romulus Augustulus — the formal end of Rome in the West.", icon: "💔", type: "fall" },
      ],
    },
    {
      id: "origins",
      type: "narrative",
      title: "Origins & Rise",
      icon: "🐺",
      image: {
        wikiTitle: "Capitoline Wolf",
        alt: "The Capitoline Wolf suckling Romulus and Remus",
        caption: "The she-wolf and the twins Romulus and Remus — Rome's founding myth.",
      },
      paragraphs: [
        "Roman legend dated the founding of the city to 753 BCE, when the twins Romulus and Remus — raised by a she-wolf — quarrelled over where to build, and Romulus killed his brother to become Rome's first king. Behind the myth lay a real cluster of villages on seven hills beside the Tiber, well placed for trade and easily defended.",
        "For its first centuries Rome was ruled by kings, several of them Etruscan, the sophisticated people to the north who gave Rome much of its early engineering, religion and the alphabet. In 509 BCE the Romans expelled their last king, Tarquin the Proud, and founded a republic — a system designed so that no single man could ever again hold absolute power.",
        "Over the next 250 years the Republic slowly conquered the Italian peninsula, not only by force but by extending citizenship and alliances to defeated peoples — a flexible, inclusive approach to empire that set Rome apart from rivals who simply enslaved the conquered.",
      ],
      subLessons: [
        {
          title: "Myth and reality of Rome's founding",
          paragraphs: [
            "Romans told a dramatic origin story: the twins Romulus and Remus, abandoned as babies and suckled by a she-wolf, grew up to found a city — until they quarrelled over the site and Romulus killed his brother, naming Rome after himself in 753 BCE. The legend wrapped Rome's identity in themes of destiny, fratricidal violence and divine favour.",
            "The archaeological reality is humbler but no less interesting. Rome began as a scatter of farming and herding villages on a cluster of seven hills beside the river Tiber. The site was shrewdly placed: far enough upriver to be safe from sea raiders, sitting on an island-crossing that controlled north–south trade and the salt routes of central Italy.",
            "These natural advantages meant Rome grew from a muddy frontier town into the dominant settlement of the region — not by destiny, but by geography, trade and a knack for absorbing its neighbours. The myth gave Romans pride; the location gave them power.",
          ],
          terms: [
            { term: "Romulus and Remus", definition: "The legendary twin founders of Rome, raised by a she-wolf, whose quarrel ended in Rome's mythical founding in 753 BCE." },
            { term: "The Tiber", definition: "The river whose crossing and trade routes made Rome's seven hills a natural centre of power in Italy." },
          ],
        },
        {
          title: "From kings to the Republic",
          paragraphs: [
            "For its first two and a half centuries Rome was ruled by kings, several of them Etruscan — the advanced people to the north who gave early Rome much of its engineering, religion, gladiatorial games and even its alphabet. The monarchy ended in legend with the tyranny of Tarquin the Proud, whose family's outrages drove the Romans to revolt.",
            "In 509 BCE the Romans expelled their last king and founded the res publica — 'the public thing', or republic. They so feared a return to one-man rule that they built the new system around it: power was split among elected officials, no one held office for long, and the very word 'king' (rex) became a deadly insult in Roman politics for the next 500 years.",
            "The early Republic was rocked by a long internal struggle between the patricians (the hereditary aristocracy) and the plebeians (the common citizens), who fought for political rights. Over generations the plebeians won their own officials (tribunes), written laws (the Twelve Tables) and eventually access to the highest offices — a gradual, often peaceful broadening of power.",
          ],
          terms: [
            { term: "Republic (res publica)", definition: "'The public thing' — a state governed by elected officials and the Senate rather than a king." },
            { term: "Etruscans", definition: "The advanced civilization of central Italy whose kings, engineering and alphabet deeply shaped early Rome." },
          ],
        },
        {
          title: "Conquering Italy by making citizens",
          paragraphs: [
            "Having freed itself from kings, the Republic spent the next 250 years fighting its way to mastery of the Italian peninsula — battling Latins, Samnites, Etruscans, Gauls and the Greek cities of the south. Rome lost battles, even saw the city itself sacked by Gauls around 390 BCE, but it had a stubborn habit of refusing to quit and simply raising new armies.",
            "Rome's real genius, though, was political. Where other conquerors enslaved or massacred the defeated, Rome bound them in. It offered varying grades of alliance and citizenship to former enemies, letting many keep local self-rule in exchange for soldiers and loyalty. A defeated people could, over time, become Romans themselves.",
            "This created a self-renewing reservoir of manpower that no Mediterranean rival could match: when Rome lost an army, it could field another, and another. The willingness to share citizenship — almost unique in the ancient world — was the hidden engine of Roman expansion, turning conquest into permanent strength.",
          ],
          terms: [
            { term: "Patrician / Plebeian", definition: "The hereditary aristocracy (patricians) versus the common citizens (plebeians), whose long struggle reshaped Roman politics." },
            { term: "Roman citizenship", definition: "Legal membership in the Roman state, extended to allies and freed slaves — a key tool of Roman expansion." },
          ],
        },
      ],
      terms: [
        { term: "Republic (res publica)", definition: "'The public thing' — a state governed by elected officials and the Senate rather than a king." },
        { term: "Etruscans", definition: "The advanced civilization of central Italy whose kings, engineering and alphabet deeply shaped early Rome." },
        { term: "Patrician / Plebeian", definition: "The hereditary aristocracy (patricians) versus the common citizens (plebeians), whose long struggle reshaped Roman politics." },
      ],
      callout: {
        title: "What made Rome different",
        body: "Most ancient powers kept citizenship exclusive. Rome's willingness to make allies and even freed slaves into citizens gave it a constantly renewing pool of soldiers and loyalty — a key reason it outlasted every rival.",
      },
    },
    {
      id: "government",
      type: "narrative",
      title: "Government & Society",
      icon: "🏛️",
      image: {
        wikiTitle: "Roman Forum",
        alt: "The ruins of the Roman Forum",
        caption: "The Forum — the political, legal and commercial heart of the city.",
      },
      paragraphs: [
        "The Republic balanced power between elected magistrates (led by two annually elected consuls), the Senate (an advisory body of ex-magistrates that controlled finance and foreign policy), and popular assemblies of citizens. Term limits and collegiality — always pairing officials — were deliberate checks against tyranny.",
        "This balance buckled under the strain of empire. Generals like Marius, Sulla, Pompey and Julius Caesar built armies loyal to themselves rather than the state. After decades of civil war, Caesar's heir Octavian emerged supreme and in 27 BCE became Augustus, the first emperor — careful to preserve republican forms while holding real power himself.",
        "Roman society was steeply hierarchical and built on slavery, which may have made up a quarter of Italy's population. Yet it was also unusually mobile: freed slaves could become citizens, and provincials could rise to the very top — by the 2nd century CE, emperors came from Spain, North Africa and the Balkans.",
      ],
      subLessons: [
        {
          title: "The Republic's balance of power",
          paragraphs: [
            "The Roman Republic was an ingenious machine designed to stop any one man seizing control. Executive power lay with elected magistrates, headed by two consuls who served for just one year — and crucially, each could veto the other, so neither could act alone. Below them a ladder of offices (the cursus honorum) gave ambitious men a fixed, regulated path to the top.",
            "Steering it all was the Senate, a body of several hundred former magistrates who served for life. Technically it only 'advised', but it controlled the treasury and foreign policy and commanded immense prestige, making it the true centre of power. Popular assemblies of citizens, meanwhile, passed laws and elected the magistrates.",
            "The whole design rested on two principles: collegiality (always sharing each office between colleagues) and annuality (short terms). Together with the tribunes — officials sworn to protect ordinary citizens, who could veto almost any state action — these checks kept Rome free of kings for nearly five centuries.",
          ],
          terms: [
            { term: "Consul", definition: "One of two chief magistrates elected each year to lead the state and its armies." },
            { term: "Cursus honorum", definition: "The fixed sequence of public offices a Roman politician climbed on the way to the consulship." },
          ],
        },
        {
          title: "How the Republic became an empire",
          paragraphs: [
            "The Republic's checks worked for a city-state, but cracked under the weight of a Mediterranean empire. As conquests brought vast wealth and huge slave-worked estates, the gap between rich and poor exploded, and reformers who tried to help the poor — like the Gracchi brothers — were murdered. Politics turned violent.",
            "Worse, the army stopped belonging to the state. Generals like Marius, Sulla, Pompey and Julius Caesar recruited landless men who looked to their commander, not the Senate, for land and pay. Such armies became private weapons, and Rome slid into a century of civil wars as warlords turned their legions on the Republic itself.",
            "The last man standing was Caesar's heir, Octavian. After defeating his rivals he took the name Augustus in 27 BCE and became Rome's first emperor — but cunningly kept the old republican titles and forms, calling himself merely princeps, 'first citizen'. The Republic's institutions survived as a hollow shell while real power passed, permanently, to one man.",
          ],
          terms: [
            { term: "Princeps", definition: "'First citizen' — the title Augustus preferred, disguising one-man rule behind republican language." },
            { term: "Civil wars", definition: "The century of conflicts between rival generals whose private armies destroyed the Republic." },
          ],
        },
        {
          title: "Slavery, social class and surprising mobility",
          paragraphs: [
            "Roman society was steeply stratified and utterly dependent on slavery. Enslaved people — perhaps a quarter of Italy's population — did everything from back-breaking mine and farm labour to skilled work as doctors, tutors and accountants. They had no legal rights, and the constant flow of war captives kept their numbers high.",
            "Yet Rome was unusual in how porous these ranks could be. Masters frequently freed their slaves, and a freed slave (a 'freedman') actually became a Roman citizen, with children who were full citizens by birth. Some freedmen grew enormously rich; their descendants could rise into the elite.",
            "This mobility extended across the whole empire. Provincials in conquered lands could gain citizenship, and remarkably, the top job was not closed to them: by the 2nd century CE emperors were being drawn from Spain, North Africa and the Balkans. Being 'Roman' was, in the end, a legal and cultural status open to almost anyone — not a matter of birth in the city.",
          ],
          terms: [
            { term: "Freedman", definition: "A former slave who had been freed and thereby became a Roman citizen, his children full citizens by birth." },
            { term: "Senate", definition: "The council of Rome's leading men; formally advisory, but the true centre of political power for centuries." },
          ],
        },
      ],
      terms: [
        { term: "Consul", definition: "One of two chief magistrates elected each year to lead the state and its armies." },
        { term: "Senate", definition: "The council of Rome's leading men; formally advisory, but the true centre of political power for centuries." },
        { term: "Princeps", definition: "'First citizen' — the title Augustus preferred, disguising one-man rule behind republican language." },
      ],
      callout: {
        title: "Roman law",
        body: "Rome's greatest export may be its law. Concepts like 'innocent until proven guilty', contracts, and legal personhood were systematised in Roman codes and later compiled in Justinian's Corpus Juris Civilis — the foundation of most European legal systems today.",
      },
    },
    {
      id: "figures",
      type: "figures",
      title: "People Who Shaped Rome",
      icon: "👤",
      intro:
        "A handful of soldiers, orators and emperors steered Rome through its most decisive turns.",
      figures: [
        {
          name: "Julius Caesar",
          role: "General & dictator",
          lived: "100–44 BCE",
          bio: "Brilliant general who conquered Gaul and crossed the Rubicon to seize power, ending the Republic in all but name. His assassination by senators on the Ides of March triggered the final civil wars.",
          image: { wikiTitle: "Julius Caesar", alt: "Bust of Julius Caesar" },
        },
        {
          name: "Augustus",
          role: "First emperor",
          lived: "63 BCE – 14 CE",
          bio: "Caesar's adopted heir who out-manoeuvred all rivals, ended a century of civil war, and founded the empire. His 40-year reign began the Pax Romana — two centuries of relative peace and prosperity.",
          image: { wikiTitle: "Augustus", alt: "Statue of Augustus of Prima Porta" },
        },
        {
          name: "Trajan",
          role: "Emperor (optimus princeps)",
          lived: "53–117 CE",
          bio: "Spanish-born soldier-emperor under whom the empire reached its greatest extent, conquering Dacia and Mesopotamia. Remembered as a model ruler and a great builder.",
          image: { wikiTitle: "Trajan", alt: "Bust of the emperor Trajan" },
        },
        {
          name: "Constantine the Great",
          role: "Emperor",
          lived: "c. 272–337 CE",
          bio: "Reunited the empire, legalised Christianity with the Edict of Milan (313), and founded Constantinople — the new eastern capital that would outlast Rome itself by a thousand years.",
          image: { wikiTitle: "Constantine the Great", alt: "Colossal head of Constantine" },
        },
      ],
    },
    {
      id: "wars",
      type: "conflicts",
      title: "Wars & Conquests",
      icon: "⚔️",
      intro:
        "Rome was forged by war. These conflicts decided whether it would survive — and how far it would reach.",
      conflicts: [
        {
          name: "The Punic Wars",
          years: "264–146 BCE",
          against: "Carthage",
          summary:
            "Three wars against the great North African trading power Carthage for control of the western Mediterranean. In the Second War, Hannibal famously marched elephants over the Alps and crushed Rome at Cannae (216 BCE) — yet Rome refused to surrender.",
          outcome:
            "Rome destroyed Carthage utterly in 146 BCE, salting its ruins, and became the unrivalled master of the western Mediterranean.",
          image: { wikiTitle: "Battle of Cannae", alt: "Map of the Battle of Cannae" },
        },
        {
          name: "The Gallic Wars",
          years: "58–50 BCE",
          against: "The Gallic tribes",
          summary:
            "Julius Caesar's conquest of Gaul (roughly modern France), culminating in the siege of Alesia where he defeated the united tribes under Vercingetorix. Caesar wrote his own account, the Commentarii, as political propaganda.",
          outcome:
            "Gaul became Roman, adding vast wealth and manpower — and gave Caesar the army and prestige to march on Rome itself.",
          image: { wikiTitle: "Battle of Alesia", alt: "Depiction of the siege of Alesia" },
        },
        {
          name: "Jewish–Roman Wars",
          years: "66–135 CE",
          against: "Judaea",
          summary:
            "A series of revolts in the province of Judaea against Roman rule. The first ended with the siege and destruction of Jerusalem and its Second Temple in 70 CE.",
          outcome:
            "Roman victory and the dispersal of much of the Jewish population — a turning point in Jewish and world history.",
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Inventions & Achievements",
      icon: "💡",
      intro:
        "Rome's engineers and administrators built at a scale the world would not match again for over a millennium.",
      achievements: [
        {
          name: "Roman concrete (opus caementicium)",
          field: "Engineering",
          description:
            "A volcanic-ash mortar that could set underwater and grew stronger over time, enabling domes, harbours and structures of unprecedented size.",
          legacy:
            "The Pantheon's dome remained the world's largest unreinforced concrete dome for 1,800 years — and still stands.",
        },
        {
          name: "Roads & the cursus publicus",
          field: "Infrastructure",
          description:
            "Over 400,000 km of roads, 80,000 km of them paved, knit the empire together along with a state courier and relay system.",
          legacy:
            "'All roads lead to Rome' — many modern European highways still follow Roman routes.",
        },
        {
          name: "Aqueducts & sanitation",
          field: "Public health",
          description:
            "Gravity-fed aqueducts carried fresh water dozens of kilometres into cities to feed fountains, public baths and the first large-scale sewers.",
          legacy:
            "Urban water supply on this scale would not be matched in Europe until the 19th century.",
        },
        {
          name: "The Julian calendar",
          field: "Science",
          description:
            "Caesar's 365.25-day solar calendar, with a leap day every four years, replaced a chaotic lunar system.",
          legacy:
            "Refined slightly into the Gregorian calendar we use worldwide today.",
        },
        {
          name: "Codified law",
          field: "Law & government",
          description:
            "From the Twelve Tables to Justinian's great compilation, Rome turned justice into a written, reasoned system.",
          legacy:
            "The basis of 'civil law' systems across Europe, Latin America and beyond.",
        },
      ],
    },
    {
      id: "decline",
      type: "narrative",
      title: "Decline & Legacy",
      icon: "🏚️",
      image: {
        wikiTitle: "Sack of Rome (410)",
        alt: "Depiction of the sack of Rome in 410",
        caption: "The Visigoths sack Rome in 410 CE — a shock felt across the ancient world.",
      },
      paragraphs: [
        "The 3rd century CE brought crisis: plague, inflation, civil wars and pressure on the frontiers. Emperors like Diocletian responded by splitting the empire administratively into eastern and western halves and reorganising its army and economy — buying it another two centuries.",
        "The western half slowly fragmented under the weight of migrating peoples — Goths, Vandals and Huns — many of whom had once served in Rome's own legions. Rome was sacked in 410 and again in 455, and in 476 the last western emperor, a boy named Romulus Augustulus, was quietly deposed.",
        "But Rome did not so much die as transform. The eastern empire — which we call Byzantine — endured until 1453. The Catholic Church inherited Rome's structure and Latin. And Rome's law, language, architecture and idea of a universal civilization became the foundation on which medieval and modern Europe were built.",
      ],
      terms: [
        { term: "Tetrarchy", definition: "Diocletian's system of four co-rulers governing the empire's quarters to manage its vast size." },
        { term: "Byzantine Empire", definition: "The continuation of the Roman Empire in the east, centred on Constantinople, lasting until 1453." },
        { term: "Romulus Augustulus", definition: "The last emperor of the West, deposed in 476 CE — the traditional 'end' of the Western Roman Empire." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Eight questions across the whole Roman journey. Aim for the laurel crown.",
      questions: [
        {
          q: "What event in 509 BCE marked the birth of the Roman Republic?",
          options: ["The founding of the city", "The expulsion of the last king", "Caesar crossing the Rubicon", "The defeat of Carthage"],
          correct: 1,
          fb: "The Romans expelled King Tarquin the Proud and vowed never again to be ruled by a king.",
        },
        {
          q: "Who led two consuls and the Senate in the Republic's system of checks?",
          options: ["A single dictator for life", "Two annually elected consuls", "A hereditary monarch", "The high priest"],
          correct: 1,
          fb: "Two consuls were elected each year, deliberately pairing power to prevent tyranny.",
        },
        {
          q: "Which general crossed the Alps with elephants and crushed Rome at Cannae?",
          options: ["Scipio", "Vercingetorix", "Hannibal", "Pyrrhus"],
          correct: 2,
          fb: "Hannibal of Carthage won stunning victories, but Rome refused to surrender and ultimately destroyed Carthage.",
        },
        {
          q: "Who became Rome's first emperor in 27 BCE?",
          options: ["Julius Caesar", "Augustus", "Nero", "Trajan"],
          correct: 1,
          fb: "Octavian took the name Augustus, ending the Republic and beginning the Pax Romana.",
        },
        {
          q: "What made Roman concrete revolutionary?",
          options: ["It was transparent", "It could set underwater and grew stronger over time", "It was edible", "It glowed at night"],
          correct: 1,
          fb: "Volcanic-ash concrete enabled domes and harbours of unmatched scale — the Pantheon still stands.",
        },
        {
          q: "Under which emperor did the empire reach its greatest territorial extent?",
          options: ["Constantine", "Augustus", "Trajan", "Diocletian"],
          correct: 2,
          fb: "Trajan's conquests of Dacia and Mesopotamia pushed Rome to its peak size around 117 CE.",
        },
        {
          q: "What did Constantine the Great found in 330 CE?",
          options: ["The Colosseum", "Constantinople", "The Roman Senate", "The Julian calendar"],
          correct: 1,
          fb: "His new eastern capital, Constantinople, would outlast Rome itself by a thousand years.",
        },
        {
          q: "Which year is traditionally given for the fall of the Western Roman Empire?",
          options: ["44 BCE", "410 CE", "476 CE", "1453 CE"],
          correct: 2,
          fb: "In 476 CE the last western emperor, Romulus Augustulus, was deposed.",
        },
      ],
    },
  ],
};
