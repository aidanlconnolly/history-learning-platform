import type { Civilization } from "../types";

export const egypt: Civilization = {
  id: "egypt",
  name: "Ancient Egypt",
  shortName: "Egypt",
  emblem: "🔺",
  region: "The Nile Valley (Egypt, Sudan)",
  modernCountries: ["Egypt", "Sudan"],
  timespan: "c. 3100 – 30 BCE",
  startYear: -3100,
  endYear: -30,
  color: "#0d9488",
  tagline:
    "The gift of the Nile — three thousand years of pharaohs, pyramids and a civilization obsessed with the eternal.",
  summary:
    "Sustained by the Nile's yearly flood, Ancient Egypt was one of the longest-lasting civilizations in history, enduring for over three millennia. Ruled by god-kings called pharaohs, it produced monuments of staggering scale and a culture centred on order, the afterlife and a remarkable artistic and religious continuity.",
  hero: {
    wikiTitle: "Giza pyramid complex",
    alt: "The pyramids of Giza",
    caption: "The pyramids of Giza, built c. 2600–2500 BCE as pharaohs' tombs.",
  },
  facts: [
    { label: "Lifeline", value: "The River Nile" },
    { label: "Ruler", value: "Pharaoh (a living god)" },
    { label: "Writing", value: "Hieroglyphs" },
    { label: "Duration", value: "~3,000 years" },
    { label: "Belief", value: "Elaborate afterlife" },
  ],
  majorCities: [
    { name: "Memphis",     lat: 29.85, lon: 31.25 },
    { name: "Thebes",      lat: 25.69, lon: 32.64 },
    { name: "Alexandria",  lat: 31.20, lon: 29.90 },
    { name: "Amarna",      lat: 27.64, lon: 30.90 },
  ],
  sections: [
    {
      id: "key-moments",
      type: "milestones",
      title: "Key Moments in Ancient Egypt",
      icon: "⭐",
      intro: "Three thousand years of pharaohs, pyramids and empire — the pivotal events that shaped history's most enduring civilisation.",
      milestones: [
        { year: "c. 3100 BCE", title: "Narmer Unites Egypt", description: "King Narmer (or Menes) unites Upper and Lower Egypt, founding the world's first nation-state and wearing the double crown.", icon: "👑", type: "rise" },
        { year: "c. 2700 BCE", title: "The Old Kingdom Begins", description: "Egypt's first great age of pyramid-building begins as pharaohs marshal the entire population to construct colossal stone tombs.", icon: "🏗️", type: "rise" },
        { year: "c. 2630 BCE", title: "Step Pyramid of Djoser", description: "Architect Imhotep builds the world's first monumental stone structure for Pharaoh Djoser at Saqqara — prototype of all later pyramids.", icon: "🔺", type: "cultural" },
        { year: "c. 2560 BCE", title: "Great Pyramid Completed", description: "The Great Pyramid of Khufu at Giza is finished — the tallest structure on Earth for the next 3,800 years.", icon: "✨", type: "cultural" },
        { year: "c. 2160 BCE", title: "Old Kingdom Collapses", description: "Drought, famine and political fragmentation shatter the Old Kingdom; provincial governors seize power and Egypt fractures.", icon: "💔", type: "fall" },
        { year: "c. 2055 BCE", title: "Middle Kingdom Reunification", description: "Mentuhotep II defeats rival pharaohs and reunites Egypt, ushering in a renaissance of art, literature and trade.", icon: "🌟", type: "rise" },
        { year: "c. 1650 BCE", title: "The Hyksos Invasion", description: "Chariot-riding Hyksos people from the Levant seize northern Egypt — the first time Egypt has been ruled by foreigners.", icon: "⚔️", type: "war" },
        { year: "c. 1550 BCE", title: "New Kingdom — Egypt's Golden Age", description: "Ahmose I expels the Hyksos and founds the New Kingdom; Egypt becomes a conquering empire stretching into Nubia and Syria.", icon: "🌅", type: "rise" },
        { year: "c. 1479 BCE", title: "Hatshepsut Rules", description: "Egypt's most successful female pharaoh rules for 20 years, commissioning the temple at Deir el-Bahri and great trade expeditions.", icon: "👸", type: "cultural" },
        { year: "c. 1353 BCE", title: "Akhenaten's Religious Revolution", description: "Pharaoh Akhenaten closes all temples and declares the sun disc Aten the only god — history's first attempted monotheism.", icon: "☀️", type: "cultural" },
        { year: "c. 1274 BCE", title: "Battle of Kadesh", description: "Ramesses II fights the Hittites to a dramatic stalemate in Syria, then signs history's earliest surviving peace treaty.", icon: "🕊️", type: "war" },
        { year: "c. 1070 BCE", title: "New Kingdom Ends", description: "After Ramesses XI, Egypt fragments again — foreign pharaohs, civil war and economic collapse end Egypt's imperial age.", icon: "📉", type: "fall" },
        { year: "664 BCE",    title: "Assyria Sacks Thebes", description: "Ashurbanipal's Assyrian army storms Thebes, Egypt's sacred capital, stripping its temples of gold and humiliating the civilisation.", icon: "🔥", type: "war" },
        { year: "332 BCE",    title: "Alexander the Great Conquers Egypt", description: "Alexander is welcomed as a liberator from Persian rule, founds Alexandria, and visits the oracle of Amun at Siwa.", icon: "🏛️", type: "fall" },
        { year: "30 BCE",     title: "Cleopatra Dies, Egypt Becomes Roman", description: "The last pharaoh, Cleopatra VII, takes her own life after Caesar's heir Octavian conquers Egypt — ending 3,000 years of pharaonic rule.", icon: "🌙", type: "fall" },
      ],
    },
    {
      id: "nile",
      type: "narrative",
      title: "The Gift of the Nile",
      icon: "🌊",
      image: {
        wikiTitle: "Narmer Palette",
        alt: "The Narmer Palette",
        caption: "The Narmer Palette commemorates Egypt's unification, c. 3100 BCE.",
      },
      paragraphs: [
        "The Greek historian Herodotus called Egypt 'the gift of the Nile', and he was right. Every year the river flooded predictably, leaving behind rich black silt that made the desert bloom. This dependable abundance — unlike Mesopotamia's chaotic floods — gave Egyptian civilization its sense of stability and cosmic order.",
        "Around 3100 BCE a king traditionally called Narmer (or Menes) united the two lands of Upper and Lower Egypt into a single kingdom, beginning a line of pharaohs that would last three thousand years through some thirty dynasties.",
        "Egyptians saw their world as governed by ma'at — truth, balance and cosmic order — which the pharaoh was duty-bound to uphold. This deep belief in order and continuity is why Egyptian art, religion and writing changed so remarkably little over millennia.",
      ],
      subLessons: [
        {
          title: "The flood that built a civilization",
          paragraphs: [
            "Each summer, monsoon rains far to the south in the Ethiopian highlands swelled the Nile until, with almost clockwork reliability, it overflowed its banks across the Egyptian valley. When the waters receded weeks later they left behind a layer of dark, mineral-rich silt the Egyptians called kemet, 'the black land' — and it was the most fertile soil in the ancient world.",
            "This single fact shaped everything. Because the flood was regular and gentle compared with the violent, unpredictable rivers of Mesopotamia, Egyptians experienced nature as orderly and benevolent rather than threatening. Farmers could plan around it; the state could tax it. The narrow green ribbon of farmland was hemmed by lifeless desert — the 'red land' — which acted as a natural wall protecting Egypt from invaders for centuries.",
            "Managing the flood demanded measurement and forecasting. Officials watched 'nilometers' — stone gauges marking the water's height — to predict whether a year would bring abundance or famine, and to set taxes accordingly. Out of this need grew Egypt's calendar, surveying and mathematics.",
          ],
          terms: [
            { term: "Kemet", definition: "'The black land' — the fertile silt left by the Nile flood, and the Egyptians' own name for their country." },
            { term: "Nilometer", definition: "A graduated structure used to measure the height of the Nile's flood and forecast the harvest." },
          ],
        },
        {
          title: "Uniting the Two Lands",
          paragraphs: [
            "Before there was 'Egypt' there were two Egypts: Upper Egypt, the narrow southern valley, and Lower Egypt, the broad northern Delta where the Nile fans into the Mediterranean. The two regions had different crowns, symbols and gods, and their unification around 3100 BCE was the founding act of Egyptian civilization.",
            "Tradition credits a king named Narmer (sometimes called Menes) with conquering the north and joining the lands under one rule. The famous Narmer Palette shows him wearing the white crown of Upper Egypt on one side and the red crown of Lower Egypt on the other — propaganda in stone for the new idea of a single kingdom.",
            "From then on every pharaoh styled himself 'Lord of the Two Lands' and wore the combined double crown. The union was treated as the earthly mirror of cosmic order, and re-uniting Egypt after each period of collapse became the sacred duty of any king who hoped to be remembered as great.",
          ],
          terms: [
            { term: "Upper & Lower Egypt", definition: "The southern valley and the northern Delta — the 'Two Lands' joined into one kingdom around 3100 BCE." },
            { term: "Double crown", definition: "The combined red-and-white crown worn by pharaohs to symbolise rule over a united Egypt." },
          ],
        },
        {
          title: "Ma'at: the idea that ran Egypt",
          paragraphs: [
            "At the centre of Egyptian thought sat ma'at — a single word covering truth, justice, balance and the right order of the universe. Ma'at was personified as a goddess wearing an ostrich feather, and it was understood as fragile: without constant effort, the cosmos would slide back into chaos (isfet).",
            "The pharaoh's entire reason for existing was to uphold ma'at — to keep the gods satisfied, the Nile flooding, the harvests coming and justice flowing. A king who maintained ma'at was legitimate; disorder, famine or defeat suggested he had failed in his sacred role.",
            "This obsession with order explains Egypt's astonishing continuity. Because change itself was suspect — a hint of creeping chaos — art, hieroglyphs and religious ritual stayed recognisably the same for three thousand years. Egyptians did not prize novelty; they prized the eternal repetition of what was right.",
          ],
          terms: [
            { term: "Ma'at", definition: "Truth, justice and cosmic order — the principle the pharaoh existed to uphold." },
            { term: "Isfet", definition: "Chaos and disorder — the opposite of ma'at, always threatening to return." },
          ],
        },
      ],
      terms: [
        { term: "Pharaoh", definition: "The king of Egypt, regarded as a living god and the guarantor of cosmic order." },
        { term: "Ma'at", definition: "The Egyptian concept of truth, balance and order that the pharaoh had to maintain." },
        { term: "Dynasty", definition: "A sequence of rulers from the same family; historians group Egypt's history into ~30 of them." },
      ],
      callout: {
        title: "What made Egypt different",
        body: "Where most ancient states rose and fell within centuries, Egypt's geography — protected by deserts and fed by a reliable river — let a single culture endure, recognisably itself, for three thousand years. Cleopatra lived closer in time to us than to the building of the Great Pyramid.",
      },
    },
    {
      id: "afterlife",
      type: "narrative",
      title: "Gods, Pharaohs & the Afterlife",
      icon: "⚰️",
      image: {
        wikiTitle: "Book of the Dead",
        alt: "A scene from the Egyptian Book of the Dead",
        caption: "The 'weighing of the heart' from the Book of the Dead.",
      },
      paragraphs: [
        "Egyptian religion was vast, with hundreds of gods — sun-god Ra, Osiris lord of the dead, Isis the great mother, jackal-headed Anubis. The pharaoh stood between gods and people, and on death was thought to join the gods himself.",
        "No people were more preoccupied with the afterlife. Egyptians believed the soul lived on if the body was preserved, so they perfected mummification, drying and wrapping the dead over 70 days. The wealthy were buried with food, treasure and spells from the Book of the Dead to guide them past the 'weighing of the heart', where one's deeds were judged against a feather of truth.",
        "The pyramids and the later rock-cut tombs of the Valley of the Kings were giant machines for the journey to eternity — which is why so much of what survives of Egypt comes from its cemeteries and temples rather than its towns.",
      ],
      subLessons: [
        {
          title: "A crowded heaven: the Egyptian gods",
          paragraphs: [
            "Egypt worshipped hundreds of gods, many shown with human bodies and animal heads that captured their nature: falcon-headed Horus the sky-king, jackal-headed Anubis who guarded the dead, ibis-headed Thoth of writing and wisdom. Different cities championed different gods, and over time the most important could merge — the sun god Ra fused with Thebes' Amun to become Amun-Ra, 'king of the gods'.",
            "The central drama of Egyptian myth was the story of Osiris: a good king murdered and dismembered by his jealous brother Set, reassembled by his devoted wife Isis, and reborn as ruler of the underworld. His son Horus avenged him and took the throne of the living. Every pharaoh was identified with Horus in life and with Osiris in death.",
            "Religion was woven into daily life through enormous temple complexes like Karnak, staffed by armies of priests who fed, washed and clothed the cult statues as if the gods physically lived there. Ordinary people rarely entered the inner sanctuaries but gathered for great festivals when the gods were carried out in procession.",
          ],
          terms: [
            { term: "Osiris", definition: "God of the dead and resurrection, murdered and reborn — the mythic model for every dead pharaoh." },
            { term: "Amun-Ra", definition: "The supreme 'king of the gods', formed by merging Thebes' Amun with the sun god Ra." },
          ],
        },
        {
          title: "The pharaoh: a god on the throne",
          paragraphs: [
            "The pharaoh was not merely a king but a living god — the earthly embodiment of Horus and, after death, of Osiris. He stood as the sole intermediary between the human and divine worlds, and in theory every temple ritual in Egypt was performed by him (priests acted only as his deputies).",
            "This divine status gave the pharaoh total authority over Egypt's land, harvests, armies and labour. But it also bound him with duties: he had to uphold ma'at, lead the army, commission temples and ensure the gods were honoured. A pharaoh's monuments were not vanity alone — they were proof he was doing his cosmic job.",
            "Kingship was dressed in powerful symbols: the false beard, the crook and flail, the cobra (uraeus) rearing on the brow to spit fire at enemies. When a pharaoh died, elaborate rituals transformed him into a god among the stars, and his successor's first duty was to bury him properly — sealing the chain of divine kingship.",
          ],
          terms: [
            { term: "Uraeus", definition: "The rearing cobra worn on the pharaoh's crown, a symbol of royal and divine protection." },
            { term: "Crook and flail", definition: "The shepherd's crook and grain flail held by pharaohs, symbols of kingship and provision." },
          ],
        },
        {
          title: "Mummies and the weighing of the heart",
          paragraphs: [
            "Egyptians believed a person survived death only if the body endured, so they perfected mummification. Over some seventy days, embalmers removed the internal organs (storing them in canopic jars), dried the body with natron salt, then wrapped it in hundreds of metres of resin-soaked linen, tucking protective amulets between the layers. The brain, thought useless, was discarded; the heart was carefully left in place.",
            "The dead were buried with everything needed for eternity: food, furniture, jewellery, servant-figurines called shabtis to do their labour, and copies of the Book of the Dead — a manual of spells to navigate the dangers of the underworld.",
            "The climax of the journey was the 'weighing of the heart'. Before Osiris, the dead person's heart was balanced against the feather of ma'at. If it was light — unburdened by sin — they passed into a paradise of endless fields. If heavy with wrongdoing, it was devoured by the monster Ammit, and the soul ceased to exist. Morality, for Egyptians, was literally weighed.",
          ],
          terms: [
            { term: "Canopic jars", definition: "Four jars holding the embalmed internal organs of the dead, each guarded by a protective deity." },
            { term: "Weighing of the heart", definition: "The afterlife judgement in which the heart was balanced against the feather of ma'at." },
          ],
        },
      ],
      terms: [
        { term: "Mummification", definition: "The Egyptian art of preserving the dead body so the soul could live on in the afterlife." },
        { term: "Book of the Dead", definition: "A collection of spells buried with the dead to guide and protect them in the afterlife." },
        { term: "Valley of the Kings", definition: "The hidden desert valley where New Kingdom pharaohs, including Tutankhamun, were buried." },
      ],
    },
    {
      id: "figures",
      type: "figures",
      title: "Famous Pharaohs",
      icon: "👤",
      intro: "From pyramid-builders to a female king and the last queen of Egypt.",
      figures: [
        {
          name: "Khufu",
          role: "Pharaoh (Old Kingdom)",
          lived: "reigned c. 2589–2566 BCE",
          bio: "Builder of the Great Pyramid of Giza, the largest of the pyramids and the only surviving Wonder of the Ancient World.",
          image: { wikiTitle: "Khufu", alt: "Statuette of Khufu" },
        },
        {
          name: "Hatshepsut",
          role: "Female pharaoh",
          lived: "reigned c. 1479–1458 BCE",
          bio: "One of the few women to rule as pharaoh in her own right, she presided over a prosperous era of trade and built a magnificent terraced temple at Deir el-Bahari.",
          image: { wikiTitle: "Hatshepsut", alt: "Statue of Hatshepsut" },
        },
        {
          name: "Ramesses II",
          role: "Pharaoh ('the Great')",
          lived: "reigned 1279–1213 BCE",
          bio: "Egypt's most celebrated warrior-pharaoh, who fought the Hittites at Kadesh, signed history's first known peace treaty, and built monuments like Abu Simbel.",
          image: { wikiTitle: "Ramesses II", alt: "Statue of Ramesses II" },
        },
        {
          name: "Cleopatra VII",
          role: "Last pharaoh",
          lived: "69–30 BCE",
          bio: "The brilliant final ruler of Egypt, who allied with Julius Caesar and Mark Antony to preserve her kingdom. Her defeat by Rome ended 3,000 years of pharaonic Egypt.",
          image: { wikiTitle: "Cleopatra", alt: "Bust of Cleopatra VII" },
        },
      ],
    },
    {
      id: "achievements",
      type: "achievements",
      title: "Monuments & Mastery",
      icon: "💡",
      intro: "Egypt's achievements in engineering, writing and medicine were millennia ahead of their time.",
      achievements: [
        {
          name: "The pyramids",
          field: "Engineering",
          description: "The Great Pyramid used some 2.3 million stone blocks and stood as the tallest structure on Earth for nearly 4,000 years.",
          legacy: "The oldest and only surviving of the Seven Wonders of the Ancient World.",
        },
        {
          name: "Hieroglyphic writing",
          field: "Communication",
          description: "A beautiful script of pictures used for monuments and sacred texts, alongside a cursive 'hieratic' script for daily use.",
          legacy: "Deciphered via the Rosetta Stone in 1822, reopening Egypt's history.",
        },
        {
          name: "Papyrus",
          field: "Technology",
          description: "A paper-like writing material made from reeds, light and portable, that Egypt exported across the ancient world.",
          legacy: "The word 'paper' comes from papyrus.",
        },
        {
          name: "Medicine",
          field: "Science",
          description: "Egyptian physicians documented diagnoses, surgery and hundreds of remedies; the Edwin Smith Papyrus is a rational surgical text.",
          legacy: "Among the earliest evidence of systematic medical practice.",
        },
        {
          name: "The 365-day calendar",
          field: "Science",
          description: "Egyptians tracked the year by the star Sirius and the Nile flood, creating a 365-day solar calendar.",
          legacy: "A direct ancestor of the calendar we use today.",
        },
      ],
    },
    {
      id: "decline",
      type: "narrative",
      title: "Conquest & Rediscovery",
      icon: "🏛️",
      image: {
        wikiTitle: "Rosetta Stone",
        alt: "The Rosetta Stone",
        caption: "The Rosetta Stone, the key that unlocked hieroglyphs in 1822.",
      },
      paragraphs: [
        "After its New Kingdom golden age, Egypt was repeatedly conquered — by Nubians, Assyrians and Persians. In 332 BCE Alexander the Great took Egypt and his general Ptolemy founded a Greek-speaking dynasty that ruled from Alexandria for three centuries.",
        "The last Ptolemy was Cleopatra VII. When she and Mark Antony were defeated by Octavian (Augustus) at the Battle of Actium in 31 BCE, Egypt became a province of Rome — and the age of the pharaohs was over.",
        "For 1,400 years no one could read hieroglyphs. Then in 1799 French soldiers found the Rosetta Stone, which carried the same decree in hieroglyphs, Egyptian demotic and Greek. Using it, the scholar Champollion cracked the code in 1822 — and the silent monuments of Egypt began to speak again.",
      ],
      subLessons: [
        {
          title: "The slow eclipse: Nubians, Assyrians and Persians",
          paragraphs: [
            "After the New Kingdom faded around 1070 BCE, Egypt entered centuries of weakness and foreign rule. Kings from Nubia to the south — who admired Egyptian culture and saw themselves as its guardians — conquered the whole country and ruled as the 25th Dynasty, building pyramids of their own.",
            "Then came harder conquerors. The Assyrians, wielding iron weapons, invaded and sacked the sacred capital of Thebes in 664 BCE, a humiliation that shocked the ancient world. A brief native revival followed, but in 525 BCE the Persian Empire absorbed Egypt as a mere province, ruled by a distant foreign king.",
            "Egypt was now a prize fought over by greater powers rather than a great power itself. Its ancient prestige survived — outsiders still revered its temples and antiquity — but political independence was slipping away for good.",
          ],
          terms: [
            { term: "25th Dynasty", definition: "The line of Nubian (Kushite) kings from the south who ruled all of Egypt and revived pyramid-building." },
            { term: "Satrapy", definition: "A province of the Persian Empire — what Egypt became after the conquest of 525 BCE." },
          ],
        },
        {
          title: "Alexander, the Ptolemies and Cleopatra",
          paragraphs: [
            "In 332 BCE Alexander the Great swept the Persians out of Egypt and was welcomed as a liberator. He founded the city of Alexandria on the coast and was hailed as pharaoh. When he died young, his general Ptolemy seized Egypt and founded a Greek-speaking dynasty that would rule for nearly three centuries.",
            "The Ptolemies ruled as pharaohs but kept their Greek identity, and made Alexandria the most dazzling city of the age — home to the Lighthouse (a Wonder of the World) and the legendary Library, which aimed to collect all the knowledge in the world. Greek and Egyptian cultures blended, though the Greek elite mostly held themselves apart.",
            "The last of the line was Cleopatra VII — the only Ptolemy who bothered to learn Egyptian. Brilliant and ambitious, she allied (and had children) with Julius Caesar and then Mark Antony to keep Egypt independent. But when Antony and Cleopatra were crushed by Octavian at the naval battle of Actium in 31 BCE, her cause was lost.",
          ],
          terms: [
            { term: "Ptolemaic dynasty", definition: "The Greek dynasty, founded by Alexander's general Ptolemy, that ruled Egypt from Alexandria until Cleopatra." },
            { term: "Library of Alexandria", definition: "The great Ptolemaic library that sought to gather all the world's knowledge in one place." },
          ],
        },
        {
          title: "Rediscovery: cracking the hieroglyphic code",
          paragraphs: [
            "When Egypt became a Roman province in 30 BCE, the old religion slowly died, and with it the ability to read hieroglyphs. The last known hieroglyphic inscription dates to 394 CE; after that the script became an impenetrable mystery, its monuments dismissed as magical gibberish for fourteen centuries.",
            "The key resurfaced by accident. In 1799, soldiers in Napoleon's army digging a fort near the town of Rosetta unearthed a stone slab carrying the same priestly decree written three ways: in hieroglyphs, in everyday Egyptian 'demotic' script, and in Greek — which scholars could still read.",
            "Using the Greek as a guide, the French scholar Jean-François Champollion painstakingly matched signs to sounds and announced his breakthrough in 1822. Suddenly the temple walls, tomb paintings and papyri of Egypt could speak again, and the modern science of Egyptology was born — letting us read the words of a civilization silent for a thousand years.",
          ],
          terms: [
            { term: "Rosetta Stone", definition: "A stone bearing the same text in three scripts, which allowed scholars to finally decipher hieroglyphs." },
            { term: "Egyptology", definition: "The modern scholarly study of ancient Egypt, made possible by the decipherment of hieroglyphs." },
          ],
        },
      ],
      terms: [
        { term: "Ptolemaic dynasty", definition: "The Greek dynasty, founded by Alexander's general Ptolemy, that ruled Egypt from Alexandria until Cleopatra." },
        { term: "Rosetta Stone", definition: "A stone bearing the same text in three scripts, which allowed scholars to finally decipher hieroglyphs." },
      ],
    },
    {
      id: "checkpoint",
      type: "quiz",
      title: "Test Your Knowledge",
      icon: "🎯",
      checkpoint: true,
      intro: "Seven questions on the land of the pharaohs.",
      questions: [
        {
          q: "Which river made Egyptian civilization possible?",
          options: ["The Tigris", "The Nile", "The Euphrates", "The Jordan"],
          correct: 1,
          fb: "Herodotus called Egypt 'the gift of the Nile' for its life-giving annual flood.",
        },
        {
          q: "What was the Egyptian concept of cosmic truth and order called?",
          options: ["Ma'at", "Karma", "Logos", "Dharma"],
          correct: 0,
          fb: "Ma'at was the balance the pharaoh was sworn to uphold.",
        },
        {
          q: "Why did Egyptians practise mummification?",
          options: ["For medicine", "To preserve the body for the afterlife", "As punishment", "To save space"],
          correct: 1,
          fb: "They believed the soul needed a preserved body to live on.",
        },
        {
          q: "Who built the Great Pyramid of Giza?",
          options: ["Ramesses II", "Cleopatra", "Khufu", "Hatshepsut"],
          correct: 2,
          fb: "Khufu's Great Pyramid was the tallest structure on Earth for ~4,000 years.",
        },
        {
          q: "Hatshepsut was notable as…",
          options: ["A foreign conqueror", "One of the few women to rule as pharaoh", "A high priest", "A Greek queen"],
          correct: 1,
          fb: "She ruled in her own right and built a famous terraced temple.",
        },
        {
          q: "Who was the last pharaoh of Egypt?",
          options: ["Cleopatra VII", "Nefertiti", "Tutankhamun", "Ramesses II"],
          correct: 0,
          fb: "Cleopatra's defeat by Rome in 30 BCE ended pharaonic Egypt.",
        },
        {
          q: "What object allowed scholars to finally read hieroglyphs?",
          options: ["The Book of the Dead", "The Narmer Palette", "The Rosetta Stone", "The Ishtar Gate"],
          correct: 2,
          fb: "The Rosetta Stone's three scripts let Champollion crack the code in 1822.",
        },
      ],
    },
  ],
};
