// Quotidian Nexus — Knowledge Graph Data
// Structure: thinkers (nodes), themes (nodes), traditions (nodes), quotes (linked to thinkers + themes), edges
window.nexusData = {
  meta: {
    name: "Quotidian Nexus",
    tagline: "A transdisciplinary archive of citations and connections",
    curator: "META-SETH",
    version: "0.1.0"
  },

  // ───────────────────────────────────────────────────────────────────────────
  // THINKERS
  // ───────────────────────────────────────────────────────────────────────────
  thinkers: [
    {
      id: "lafayette",
      name: "Marquis de Lafayette",
      fullName: "Marie-Joseph Paul Yves Roch Gilbert du Motier, Marquis de Lafayette",
      born: 1757, died: 1834,
      nationality: "French",
      disciplines: ["Statesmanship", "Military", "Political Philosophy"],
      traditions: ["enlightenment-liberalism", "republicanism"],
      bio: "French aristocrat and military officer who fought in the American Revolutionary War, principal drafter of the Declaration of the Rights of Man and of the Citizen."
    },
    {
      id: "jq-adams",
      name: "John Quincy Adams",
      born: 1767, died: 1848,
      nationality: "American",
      disciplines: ["Statesmanship", "Diplomacy", "Oratory"],
      traditions: ["enlightenment-liberalism", "republicanism"],
      bio: "6th President of the United States, diplomat, and abolitionist orator."
    },
    {
      id: "washington",
      name: "George Washington",
      born: 1732, died: 1799,
      nationality: "American",
      disciplines: ["Statesmanship", "Military"],
      traditions: ["enlightenment-liberalism", "republicanism"],
      bio: "1st President of the United States, Commander-in-Chief of the Continental Army."
    },
    {
      id: "nietzsche",
      name: "Friedrich Nietzsche",
      born: 1844, died: 1900,
      nationality: "German",
      disciplines: ["Philosophy", "Philology", "Poetry"],
      traditions: ["existentialism", "german-idealism-critique"],
      bio: "German philosopher, cultural critic, and philologist whose work has exerted profound influence on modern thought."
    },
    {
      id: "dostoevsky",
      name: "Fyodor Dostoevsky",
      born: 1821, died: 1881,
      nationality: "Russian",
      disciplines: ["Literature", "Philosophy", "Theology"],
      traditions: ["russian-orthodoxy", "existentialism"],
      bio: "Russian novelist whose works explored the human condition in the troubled political, social, and spiritual atmosphere of 19th-century Russia."
    },
    {
      id: "chesterton",
      name: "G.K. Chesterton",
      fullName: "Gilbert Keith Chesterton",
      born: 1874, died: 1936,
      nationality: "English",
      disciplines: ["Literature", "Theology", "Journalism"],
      traditions: ["catholicism"],
      bio: "English writer, philosopher, lay theologian, and literary and art critic. Called the 'prince of paradox.'"
    },
    {
      id: "cs-lewis",
      name: "C.S. Lewis",
      fullName: "Clive Staples Lewis",
      born: 1898, died: 1963,
      nationality: "British",
      disciplines: ["Literature", "Theology", "Medievalism"],
      traditions: ["anglicanism"],
      bio: "British writer, literary scholar, and Anglican lay theologian. Best known for the Chronicles of Narnia and his works of Christian apologetics."
    },
    {
      id: "kant",
      name: "Immanuel Kant",
      born: 1724, died: 1804,
      nationality: "Prussian",
      disciplines: ["Philosophy", "Epistemology", "Ethics"],
      traditions: ["german-idealism", "enlightenment-liberalism"],
      bio: "Prussian-German philosopher and one of the central Enlightenment thinkers. His comprehensive works on epistemology, metaphysics, ethics, and aesthetics have made him one of the most influential figures in modern Western philosophy."
    },
    {
      id: "plato",
      name: "Plato",
      born: -428, died: -348,
      nationality: "Greek",
      disciplines: ["Philosophy", "Politics", "Mathematics"],
      traditions: ["classical-greek-philosophy"],
      bio: "Athenian philosopher during the Classical period in Ancient Greece. Founder of the Academy and one of the most influential figures in Western philosophy."
    },
    {
      id: "raw",
      name: "Robert Anton Wilson",
      born: 1932, died: 2007,
      nationality: "American",
      disciplines: ["Philosophy", "Literature", "Futurism"],
      traditions: ["skepticism", "discordianism"],
      bio: "American author, novelist, and philosopher associated with the Discordian movement and known for esoteric, satirical works on consciousness and politics."
    },
    {
      id: "machiavelli",
      name: "Niccolò Machiavelli",
      born: 1469, died: 1527,
      nationality: "Italian",
      disciplines: ["Political Philosophy", "History", "Diplomacy"],
      traditions: ["renaissance-humanism", "political-realism"],
      bio: "Italian diplomat, philosopher, and writer of the Renaissance period. Considered one of the founders of modern political philosophy."
    },
    {
      id: "evola",
      name: "Julius Evola",
      born: 1898, died: 1974,
      nationality: "Italian",
      disciplines: ["Philosophy", "Esotericism", "Cultural Criticism"],
      traditions: ["traditionalism", "perennialism"],
      bio: "Italian philosopher and esotericist, associated with Traditionalism and perennial philosophy."
    },
    {
      id: "harris",
      name: "Sam Harris",
      born: 1967, died: null,
      nationality: "American",
      disciplines: ["Neuroscience", "Philosophy"],
      traditions: ["new-atheism", "secular-buddhism"],
      bio: "American philosopher and neuroscientist, host of the Making Sense podcast, known for work on consciousness, free will, and morality."
    },
    {
      id: "taleb",
      name: "Nassim Nicholas Taleb",
      born: 1960, died: null,
      nationality: "Lebanese-American",
      disciplines: ["Probability", "Philosophy", "Risk"],
      traditions: ["skepticism", "stoicism"],
      bio: "Lebanese-American essayist, mathematical statistician, and former options trader. Best known for the Incerto series on uncertainty, probability, and antifragility."
    },
    {
      id: "rushkoff",
      name: "Douglas Rushkoff",
      born: 1961, died: null,
      nationality: "American",
      disciplines: ["Media Theory", "Technology", "Philosophy"],
      traditions: ["media-ecology", "humanism"],
      bio: "American media theorist, author, and documentarian focused on the impact of digital technology on human consciousness, economics, and culture."
    },
    {
      id: "stephenson",
      name: "Neal Stephenson",
      born: 1959, died: null,
      nationality: "American",
      disciplines: ["Literature", "Speculative Fiction"],
      traditions: ["cyberpunk", "speculative-philosophy"],
      bio: "American writer known for speculative fiction works including Cryptonomicon, Anathem, and Snow Crash."
    },
    {
      id: "ban-kalb",
      name: "Baron Johann de Kalb",
      born: 1721, died: 1780,
      nationality: "Bavarian-French",
      disciplines: ["Military"],
      traditions: ["enlightenment-liberalism"],
      bio: "Bavarian-French military officer who served as a major general in the Continental Army during the American Revolutionary War."
    }
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // TRADITIONS
  // ───────────────────────────────────────────────────────────────────────────
  traditions: [
    { id: "enlightenment-liberalism", name: "Enlightenment Liberalism", period: "17th-18th c.", description: "Political and philosophical movement emphasizing reason, individual rights, and government by consent." },
    { id: "republicanism", name: "Republicanism", period: "Ancient — Modern", description: "Political philosophy centered on civic virtue, mixed government, and rule of law." },
    { id: "german-idealism", name: "German Idealism", period: "Late 18th-19th c.", description: "Philosophical movement following Kant, emphasizing the role of mind in constituting experience." },
    { id: "german-idealism-critique", name: "Critique of German Idealism", period: "Late 19th c.", description: "Reaction against systematic idealist philosophy, especially via Nietzsche." },
    { id: "russian-orthodoxy", name: "Russian Orthodox Thought", period: "9th c. — Present", description: "Eastern Christian theological and philosophical tradition rooted in Byzantine inheritance." },
    { id: "catholicism", name: "Catholic Thought", period: "1st c. — Present", description: "The intellectual tradition of the Catholic Church, spanning patristics through modern social teaching." },
    { id: "anglicanism", name: "Anglican Thought", period: "16th c. — Present", description: "The theological and literary tradition of the Church of England and its global communion." },
    { id: "existentialism", name: "Existentialism", period: "19th-20th c.", description: "Philosophical movement emphasizing individual existence, freedom, and choice." },
    { id: "classical-greek-philosophy", name: "Classical Greek Philosophy", period: "5th-4th c. BCE", description: "The foundational philosophical tradition of Plato, Aristotle, and the pre-Socratics." },
    { id: "skepticism", name: "Skepticism", period: "Ancient — Modern", description: "Philosophical attitude of doubt regarding claims to knowledge or certainty." },
    { id: "stoicism", name: "Stoicism", period: "3rd c. BCE — Present", description: "Hellenistic school of philosophy emphasizing virtue, reason, and acceptance of fate." },
    { id: "renaissance-humanism", name: "Renaissance Humanism", period: "14th-16th c.", description: "Revival of classical learning and emphasis on human dignity and earthly affairs." },
    { id: "political-realism", name: "Political Realism", period: "Modern", description: "Tradition emphasizing power, interest, and necessity over moralistic prescription in politics." },
    { id: "traditionalism", name: "Traditionalism / Perennialism", period: "20th c.", description: "School holding that all major religious traditions share a common metaphysical origin." },
    { id: "perennialism", name: "Perennial Philosophy", period: "Ancient — Modern", description: "View that there is a universal truth at the core of the world's religious and philosophical traditions." },
    { id: "discordianism", name: "Discordianism", period: "20th c.", description: "Modern parareligious tradition based on the worship of Eris and embrace of chaos as a generative principle." },
    { id: "new-atheism", name: "New Atheism", period: "21st c.", description: "Contemporary movement of explicit, public criticism of religious belief from a scientific standpoint." },
    { id: "secular-buddhism", name: "Secular Buddhism", period: "20th-21st c.", description: "Modern interpretation of Buddhist practice stripped of supernatural metaphysics." },
    { id: "media-ecology", name: "Media Ecology", period: "20th c.", description: "Study of media as environments that shape human perception, understanding, and behavior." },
    { id: "humanism", name: "Humanism", period: "Renaissance — Present", description: "Philosophical stance emphasizing human dignity, agency, and rational capacity." },
    { id: "cyberpunk", name: "Cyberpunk", period: "Late 20th-21st c.", description: "Literary and cultural movement exploring the intersection of technology, capitalism, and identity." },
    { id: "speculative-philosophy", name: "Speculative Philosophy", period: "20th-21st c.", description: "Philosophical exploration through speculative fiction and thought experiment." }
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // THEMES
  // ───────────────────────────────────────────────────────────────────────────
  themes: [
    { id: "liberty", name: "Liberty", description: "The condition of being free from coercion or constraint." },
    { id: "power", name: "Power", description: "The capacity or authority to act, command, or influence." },
    { id: "virtue", name: "Virtue", description: "Moral excellence and the dispositions that constitute it." },
    { id: "republicanism-theme", name: "Republican Government", description: "The form and ethics of government by the people through representation." },
    { id: "slavery-emancipation", name: "Slavery & Emancipation", description: "The institution of slavery and movements for its abolition." },
    { id: "revolution", name: "Revolution", description: "Fundamental political and social transformation." },
    { id: "natural-rights", name: "Natural Rights", description: "Rights held by all persons by virtue of human nature." },
    { id: "tradition-vs-modernity", name: "Tradition vs. Modernity", description: "The tension between inherited forms of life and modern transformations." },
    { id: "faith-reason", name: "Faith & Reason", description: "The relationship between religious belief and rational inquiry." },
    { id: "consciousness", name: "Consciousness", description: "The nature of subjective experience and awareness." },
    { id: "free-will", name: "Free Will", description: "Whether and how human action can be considered genuinely free." },
    { id: "epistemology", name: "Knowledge & Truth", description: "The conditions, sources, and limits of knowledge." },
    { id: "human-nature", name: "Human Nature", description: "What humans fundamentally are, and what follows from that." },
    { id: "suffering", name: "Suffering", description: "The experience of pain, loss, and meaning derived from it." },
    { id: "antifragility", name: "Antifragility & Uncertainty", description: "Systems and dispositions that gain from disorder." }
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // QUOTES — each linked to a thinker and tagged with themes
  // ───────────────────────────────────────────────────────────────────────────
  quotes: [
    {
      id: "laf-1",
      thinker: "lafayette",
      themes: ["virtue", "epistemology"],
      text: "I read, I study, I examine, I listen, I reflect, and out of all of this I try to form an idea into which I put as much common sense as I can. I shall not speak much for fear of saying foolish things; I will risk still less for fear of doing them, for I am not disposed to abuse the confidence which they have deigned to show me.",
      context: "Letter to the Duc d'Ayan, December 4, 1776",
      citations: {
        chicago_footnote: "Marquis de Lafayette, letter to the Duc d'Ayan, December 4, 1776, quoted in George Athan Billias, *George Washington's Generals and Opponents: Their Exploits and Leadership* (New York: Da Capo Press, 1994), 219.",
        chicago_bibliography: "Billias, George Athan. *George Washington's Generals and Opponents: Their Exploits and Leadership*. New York: Da Capo Press, 1994.",
        mla_intext: "(qtd. in Billias 219)",
        mla_works_cited: "Billias, George Athan. *George Washington's Generals and Opponents: Their Exploits and Leadership*. Da Capo Press, 1994."
      },
      provenance: { type: "secondary", note: "Accessed via Billias; original letter referenced." }
    },
    {
      id: "laf-2",
      thinker: "lafayette",
      themes: ["liberty", "revolution"],
      text: "Humanity has gained its suit; Liberty will nevermore be without an asylum.",
      context: "Letter to friends, 1780",
      citations: {
        chicago_footnote: "Marquis de Lafayette, letter to friends, 1780, in *Mémoires de La Fayette*, vol. 2, 50, quoted in Henri Martin, *Martin's History of France: The Decline of the French Monarchy*, vol. 2 (London, 1866), 418.",
        chicago_bibliography: "Martin, Henri. *Martin's History of France: The Decline of the French Monarchy*. Vol. 2. London, 1866.",
        mla_intext: "(qtd. in Martin 418)",
        mla_works_cited: "Martin, Henri. *Martin's History of France: The Decline of the French Monarchy*. Vol. 2, 1866."
      },
      provenance: { type: "secondary", note: "Variant translations exist; see notes." },
      variants: [
        { text: "Humanity has gained its suit: Liberty will never more be without an asylum.", source: "Winthrop, *Oration on the Hundredth Anniversary of the Surrender of Lord Cornwallis*, 1881, p. 53." },
        { text: "Humanity has won its battle. Liberty now has a country.", source: "Fecteau, *French Contributions to America*, 1945." }
      ]
    },
    {
      id: "laf-3",
      thinker: "lafayette",
      themes: ["liberty", "natural-rights"],
      text: "Liberty consists in the freedom to do everything which injures no one else; hence the exercise of the natural rights of each man has no limits except those which assure to the other members of the society the enjoyment of the same rights.",
      context: "Declaration of the Rights of Man and of the Citizen, Article 4, 1789",
      citations: {
        chicago_footnote: "*Declaration of the Rights of Man and of the Citizen* (1789), art. 4.",
        chicago_bibliography: "*Declaration of the Rights of Man and of the Citizen*. 1789.",
        mla_intext: "(*Declaration of the Rights of Man and of the Citizen*, art. 4)",
        mla_works_cited: "*Declaration of the Rights of Man and of the Citizen*. 1789."
      },
      provenance: { type: "primary", note: "Lafayette is credited as principal drafter; text adopted by the National Constituent Assembly on August 26, 1789." }
    },
    {
      id: "laf-4",
      thinker: "lafayette",
      themes: ["republicanism-theme", "natural-rights", "liberty"],
      text: "True republicanism is the sovereignty of the people. There are natural and imprescriptible rights which an entire nation has no right to violate, just as national sovereignty is above the secondary agreements of the government.",
      context: "Speech, January 3, 1834",
      citations: {
        chicago_footnote: "Marquis de Lafayette, speech, January 3, 1834, quoted in Lloyd Kramer, *Lafayette in Two Worlds: Public Cultures and Personal Identities in an Age of Revolutions* (Chapel Hill: University of North Carolina Press, 1999), 256.",
        chicago_bibliography: "Kramer, Lloyd. *Lafayette in Two Worlds: Public Cultures and Personal Identities in an Age of Revolutions*. Chapel Hill: University of North Carolina Press, 1999.",
        mla_intext: "(qtd. in Kramer 256)",
        mla_works_cited: "Kramer, Lloyd. *Lafayette in Two Worlds*. U of North Carolina P, 1999."
      },
      provenance: { type: "secondary" }
    },
    {
      id: "laf-5",
      thinker: "lafayette",
      themes: ["liberty", "slavery-emancipation"],
      text: "I would never have drawn my sword in the cause of America, if I could have conceived that thereby I was founding a land of slavery.",
      context: "Quoted by Thomas Clarkson, letter, October 3, 1845",
      citations: {
        chicago_footnote: "Marquis de Lafayette, quoted in Thomas Clarkson, letter, October 3, 1845, published in *The Liberty Bell* (Boston: National Anti-Slavery Bazaar, 1846), 64.",
        chicago_bibliography: "Clarkson, Thomas. Letter, October 3, 1845. In *The Liberty Bell*, 64. Boston: National Anti-Slavery Bazaar, 1846.",
        mla_intext: "(qtd. in Clarkson 64)",
        mla_works_cited: "Clarkson, Thomas. \"Letter.\" *The Liberty Bell*, National Anti-Slavery Bazaar, 1846, p. 64."
      },
      provenance: { type: "secondary" }
    },
    {
      id: "jqa-1",
      thinker: "jq-adams",
      themes: ["virtue", "liberty"],
      text: "Pronounce him one of the first men of his age, and you have yet not done him justice. Try him by that test to which he sought in vain to stimulate the vulgar and selfish spirit of Napoleon; class him among the men who, to compare and seat themselves, must take in the compass of all ages.",
      context: "Oration on the Life and Character of Lafayette, delivered to Congress, December 31, 1834",
      citations: {
        chicago_footnote: "John Quincy Adams, \"Oration on the Life and Character of Gilbert Motier de Lafayette\" (address to the United States Congress, Washington, DC, December 31, 1834).",
        chicago_bibliography: "Adams, John Quincy. \"Oration on the Life and Character of Gilbert Motier de Lafayette.\" Address to the United States Congress, Washington, DC, December 31, 1834.",
        mla_intext: "(Adams)",
        mla_works_cited: "Adams, John Quincy. \"Oration on the Life and Character of Gilbert Motier de Lafayette.\" Address to the United States Congress, 31 Dec. 1834."
      },
      provenance: { type: "primary" },
      aboutThinker: "lafayette"
    },
    {
      id: "jqa-2",
      thinker: "jq-adams",
      themes: ["liberty", "republicanism-theme"],
      text: "Born and educated in the highest order of feudal Nobility, under the most absolute Monarchy of Europe, in possession of an affluent fortune, and master of himself and of all his capabilities at the moment of attaining manhood, the principle of republican justice and of social equality took possession of his heart and mind, as if by inspiration from above.",
      context: "Same oration, December 31, 1834",
      citations: {
        chicago_footnote: "John Quincy Adams, \"Oration on the Life and Character of Gilbert Motier de Lafayette\" (1834).",
        chicago_bibliography: "Adams, John Quincy. \"Oration on the Life and Character of Gilbert Motier de Lafayette.\" Address to the United States Congress, Washington, DC, December 31, 1834.",
        mla_intext: "(Adams)",
        mla_works_cited: "Adams, John Quincy. \"Oration on the Life and Character of Gilbert Motier de Lafayette.\" 31 Dec. 1834."
      },
      provenance: { type: "primary" },
      aboutThinker: "lafayette"
    },
    {
      id: "wash-1",
      thinker: "washington",
      themes: ["virtue"],
      text: "The Marquis de Lafayette is extremely solicitous of having a command equal to his rank. I do not know in what light Congress will view the matter, but it appears to me, from a consideration of his illustrious and important connexions, the attachment which he has manifested for our cause, and the consequences which his return in disgust might produce, that it will be advisable to gratify him in his wishes.",
      context: "Letter to Congress, November 1, 1777",
      citations: {
        chicago_footnote: "George Washington, letter to Congress, November 1, 1777, quoted in *Journal of the House of Representatives of the United States*, vol. 23, no. 2 (1835), 665.",
        chicago_bibliography: "*Journal of the House of Representatives of the United States*. Vol. 23, no. 2. 1835.",
        mla_intext: "(Washington, qtd. in *Journal of the House of Representatives* 665)",
        mla_works_cited: "Washington, George. Letter to Congress. 1 Nov. 1777. *Journal of the House of Representatives*, vol. 23, no. 2, 1835, p. 665."
      },
      provenance: { type: "secondary", note: "Original letter reproduced in a 19th-c. government serial." },
      aboutThinker: "lafayette"
    },
    {
      id: "kalb-1",
      thinker: "ban-kalb",
      themes: ["virtue", "liberty"],
      text: "No one deserves more than he the esteem which he enjoys here. He is a prodigy for his age, full of courage, spirit, judgment, good manners, feelings of generosity and of zeal for the cause of liberty on this continent.",
      context: "Letter to the French War Department, on Lafayette",
      citations: {
        chicago_footnote: "Baron Johann de Kalb, letter to the French War Department, quoted in George Athan Billias, *George Washington's Generals and Opponents: Their Exploits and Leadership* (New York: Da Capo Press, 1994), 219.",
        chicago_bibliography: "Billias, George Athan. *George Washington's Generals and Opponents*. New York: Da Capo Press, 1994.",
        mla_intext: "(qtd. in Billias 219)",
        mla_works_cited: "Billias, George Athan. *George Washington's Generals and Opponents*. Da Capo Press, 1994."
      },
      provenance: { type: "secondary" },
      aboutThinker: "lafayette"
    },
    {
      id: "niet-1",
      thinker: "nietzsche",
      themes: ["power", "human-nature"],
      text: "He who has a why to live for can bear almost any how.",
      context: "Twilight of the Idols, 1889",
      citations: {
        chicago_footnote: "Friedrich Nietzsche, *Twilight of the Idols*, trans. Walter Kaufmann (1889; New York: Penguin, 1990), \"Maxims and Arrows,\" §12.",
        chicago_bibliography: "Nietzsche, Friedrich. *Twilight of the Idols*. Translated by Walter Kaufmann. 1889. New York: Penguin, 1990.",
        mla_intext: "(Nietzsche, *Twilight* §12)",
        mla_works_cited: "Nietzsche, Friedrich. *Twilight of the Idols*. Translated by Walter Kaufmann, Penguin, 1990."
      },
      provenance: { type: "primary" }
    },
    {
      id: "niet-2",
      thinker: "nietzsche",
      themes: ["power", "human-nature", "tradition-vs-modernity"],
      text: "What does not kill me makes me stronger.",
      context: "Twilight of the Idols, 1889",
      citations: {
        chicago_footnote: "Friedrich Nietzsche, *Twilight of the Idols*, \"Maxims and Arrows,\" §8.",
        chicago_bibliography: "Nietzsche, Friedrich. *Twilight of the Idols*. 1889.",
        mla_intext: "(Nietzsche, *Twilight* §8)",
        mla_works_cited: "Nietzsche, Friedrich. *Twilight of the Idols*. 1889."
      },
      provenance: { type: "primary" }
    },
    {
      id: "dost-1",
      thinker: "dostoevsky",
      themes: ["suffering", "human-nature", "faith-reason"],
      text: "Man only likes to count his troubles; he doesn't calculate his happiness.",
      context: "Notes from Underground, 1864",
      citations: {
        chicago_footnote: "Fyodor Dostoevsky, *Notes from Underground*, trans. Constance Garnett (1864; New York: Dover, 1992), pt. 1, ch. 9.",
        chicago_bibliography: "Dostoevsky, Fyodor. *Notes from Underground*. Translated by Constance Garnett. 1864. New York: Dover, 1992.",
        mla_intext: "(Dostoevsky pt. 1, ch. 9)",
        mla_works_cited: "Dostoevsky, Fyodor. *Notes from Underground*. Translated by Constance Garnett, Dover, 1992."
      },
      provenance: { type: "primary" }
    },
    {
      id: "ches-1",
      thinker: "chesterton",
      themes: ["tradition-vs-modernity", "faith-reason"],
      text: "Tradition means giving votes to the most obscure of all classes, our ancestors. It is the democracy of the dead.",
      context: "Orthodoxy, 1908",
      citations: {
        chicago_footnote: "G.K. Chesterton, *Orthodoxy* (1908; San Francisco: Ignatius Press, 1995), 53.",
        chicago_bibliography: "Chesterton, G.K. *Orthodoxy*. 1908. San Francisco: Ignatius Press, 1995.",
        mla_intext: "(Chesterton 53)",
        mla_works_cited: "Chesterton, G.K. *Orthodoxy*. Ignatius Press, 1995."
      },
      provenance: { type: "primary" }
    },
    {
      id: "lewis-1",
      thinker: "cs-lewis",
      themes: ["faith-reason", "human-nature"],
      text: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
      context: "\"Is Theology Poetry?\" — Address to the Oxford Socratic Club, 1944",
      citations: {
        chicago_footnote: "C.S. Lewis, \"Is Theology Poetry?\" in *The Weight of Glory and Other Addresses* (1949; New York: HarperOne, 2001), 140.",
        chicago_bibliography: "Lewis, C.S. *The Weight of Glory and Other Addresses*. 1949. New York: HarperOne, 2001.",
        mla_intext: "(Lewis 140)",
        mla_works_cited: "Lewis, C.S. *The Weight of Glory and Other Addresses*. HarperOne, 2001."
      },
      provenance: { type: "primary" }
    },
    {
      id: "kant-1",
      thinker: "kant",
      themes: ["epistemology", "free-will"],
      text: "Two things fill the mind with ever new and increasing admiration and awe, the more often and steadily we reflect upon them: the starry heavens above me and the moral law within me.",
      context: "Critique of Practical Reason, 1788, Conclusion",
      citations: {
        chicago_footnote: "Immanuel Kant, *Critique of Practical Reason*, trans. Lewis White Beck (1788; Indianapolis: Bobbs-Merrill, 1956), 166.",
        chicago_bibliography: "Kant, Immanuel. *Critique of Practical Reason*. Translated by Lewis White Beck. 1788. Indianapolis: Bobbs-Merrill, 1956.",
        mla_intext: "(Kant 166)",
        mla_works_cited: "Kant, Immanuel. *Critique of Practical Reason*. Translated by Lewis White Beck, Bobbs-Merrill, 1956."
      },
      provenance: { type: "primary" }
    },
    {
      id: "plato-1",
      thinker: "plato",
      themes: ["epistemology", "virtue"],
      text: "The beginning is the most important part of the work.",
      context: "Republic, Book II",
      citations: {
        chicago_footnote: "Plato, *Republic*, trans. G.M.A. Grube, rev. C.D.C. Reeve (Indianapolis: Hackett, 1992), 377a.",
        chicago_bibliography: "Plato. *Republic*. Translated by G.M.A. Grube, revised by C.D.C. Reeve. Indianapolis: Hackett, 1992.",
        mla_intext: "(Plato 377a)",
        mla_works_cited: "Plato. *Republic*. Translated by G.M.A. Grube, revised by C.D.C. Reeve, Hackett, 1992."
      },
      provenance: { type: "primary" }
    },
    {
      id: "raw-1",
      thinker: "raw",
      themes: ["consciousness", "epistemology"],
      text: "Reality is what you can get away with.",
      context: "Often-repeated aphorism, attributed across his work",
      citations: {
        chicago_footnote: "Robert Anton Wilson, *Cosmic Trigger I: Final Secret of the Illuminati* (Phoenix: New Falcon Publications, 1977).",
        chicago_bibliography: "Wilson, Robert Anton. *Cosmic Trigger I: Final Secret of the Illuminati*. Phoenix: New Falcon Publications, 1977.",
        mla_intext: "(Wilson)",
        mla_works_cited: "Wilson, Robert Anton. *Cosmic Trigger I*. New Falcon Publications, 1977."
      },
      provenance: { type: "primary" }
    },
    {
      id: "mach-1",
      thinker: "machiavelli",
      themes: ["power", "human-nature"],
      text: "It is much safer to be feared than loved, when one of the two must be wanting.",
      context: "The Prince, Chapter XVII, 1532",
      citations: {
        chicago_footnote: "Niccolò Machiavelli, *The Prince*, trans. Harvey C. Mansfield, 2nd ed. (Chicago: University of Chicago Press, 1998), 66.",
        chicago_bibliography: "Machiavelli, Niccolò. *The Prince*. Translated by Harvey C. Mansfield. 2nd ed. Chicago: University of Chicago Press, 1998.",
        mla_intext: "(Machiavelli 66)",
        mla_works_cited: "Machiavelli, Niccolò. *The Prince*. Translated by Harvey C. Mansfield, 2nd ed., U of Chicago P, 1998."
      },
      provenance: { type: "primary" }
    },
    {
      id: "evola-1",
      thinker: "evola",
      themes: ["tradition-vs-modernity"],
      text: "Where freedom and equality are taken to be axiomatic, the necessary consequence is that nothing higher can be allowed to exist.",
      context: "Ride the Tiger, 1961 (paraphrased from broader argument)",
      citations: {
        chicago_footnote: "Julius Evola, *Ride the Tiger: A Survival Manual for the Aristocrats of the Soul*, trans. Joscelyn Godwin and Constance Fontana (1961; Rochester, VT: Inner Traditions, 2003).",
        chicago_bibliography: "Evola, Julius. *Ride the Tiger: A Survival Manual for the Aristocrats of the Soul*. Translated by Joscelyn Godwin and Constance Fontana. 1961. Rochester, VT: Inner Traditions, 2003.",
        mla_intext: "(Evola)",
        mla_works_cited: "Evola, Julius. *Ride the Tiger*. Translated by Joscelyn Godwin and Constance Fontana, Inner Traditions, 2003."
      },
      provenance: { type: "primary" }
    },
    {
      id: "harris-1",
      thinker: "harris",
      themes: ["free-will", "consciousness"],
      text: "Free will is an illusion. Our wills are simply not of our own making.",
      context: "Free Will, 2012",
      citations: {
        chicago_footnote: "Sam Harris, *Free Will* (New York: Free Press, 2012), 5.",
        chicago_bibliography: "Harris, Sam. *Free Will*. New York: Free Press, 2012.",
        mla_intext: "(Harris 5)",
        mla_works_cited: "Harris, Sam. *Free Will*. Free Press, 2012."
      },
      provenance: { type: "primary" }
    },
    {
      id: "taleb-1",
      thinker: "taleb",
      themes: ["antifragility", "epistemology"],
      text: "Some things benefit from shocks; they thrive and grow when exposed to volatility, randomness, disorder, and stressors. Let us call them antifragile.",
      context: "Antifragile, 2012, Prologue",
      citations: {
        chicago_footnote: "Nassim Nicholas Taleb, *Antifragile: Things That Gain from Disorder* (New York: Random House, 2012), 3.",
        chicago_bibliography: "Taleb, Nassim Nicholas. *Antifragile: Things That Gain from Disorder*. New York: Random House, 2012.",
        mla_intext: "(Taleb 3)",
        mla_works_cited: "Taleb, Nassim Nicholas. *Antifragile: Things That Gain from Disorder*. Random House, 2012."
      },
      provenance: { type: "primary" }
    },
    {
      id: "rush-1",
      thinker: "rushkoff",
      themes: ["human-nature", "tradition-vs-modernity"],
      text: "Program or be programmed.",
      context: "Program or Be Programmed, 2010",
      citations: {
        chicago_footnote: "Douglas Rushkoff, *Program or Be Programmed: Ten Commands for a Digital Age* (New York: OR Books, 2010).",
        chicago_bibliography: "Rushkoff, Douglas. *Program or Be Programmed: Ten Commands for a Digital Age*. New York: OR Books, 2010.",
        mla_intext: "(Rushkoff)",
        mla_works_cited: "Rushkoff, Douglas. *Program or Be Programmed*. OR Books, 2010."
      },
      provenance: { type: "primary" }
    }
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // RELATIONSHIPS — explicit edges between thinkers (beyond shared-tradition inferred edges)
  // ───────────────────────────────────────────────────────────────────────────
  relationships: [
    { source: "lafayette", target: "washington", type: "served-under" },
    { source: "lafayette", target: "jq-adams", type: "contemporary" },
    { source: "jq-adams", target: "lafayette", type: "eulogized" },
    { source: "washington", target: "lafayette", type: "endorsed" },
    { source: "ban-kalb", target: "lafayette", type: "contemporary" },
    { source: "nietzsche", target: "kant", type: "responded-to" },
    { source: "nietzsche", target: "dostoevsky", type: "admired" },
    { source: "dostoevsky", target: "plato", type: "influenced-by" },
    { source: "chesterton", target: "cs-lewis", type: "influenced" },
    { source: "cs-lewis", target: "chesterton", type: "influenced-by" },
    { source: "kant", target: "plato", type: "influenced-by" },
    { source: "machiavelli", target: "plato", type: "responded-to" },
    { source: "evola", target: "nietzsche", type: "influenced-by" },
    { source: "harris", target: "kant", type: "responded-to" },
    { source: "taleb", target: "nietzsche", type: "admired" },
    { source: "rushkoff", target: "raw", type: "influenced-by" },
    { source: "stephenson", target: "raw", type: "influenced-by" },
    { source: "raw", target: "machiavelli", type: "engaged-with" }
  ]
};
