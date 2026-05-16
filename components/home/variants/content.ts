// Shared Romanian content for the 4 homepage variants.
// Mirrors the original design's content.js (window.PRIMARISTIC_CONTENT).
// Kept Romanian-only — variants are preview pages for client validation.

export const VARIANT_CONTENT = {
  brand: {
    name: "PRIMARISTICA",
    registered: "®",
    institute: "Institutul de Primaristică România",
    logoFull: "/images/logo-full.jpg",
    logoIcon: "/images/logo-icon.jpg",
  },
  nav: ["Despre", "Metodă", "Profesori", "Formare", "Evenimente", "Contact"],
  hero: {
    tagline: "Cunoașterea și educarea dezvoltării senzo-motorii",
    subtitle:
      "Disciplină teoretică și practică, de interes general, necesară și benefică tuturor vârstelor, fie că suntem sănătoși sau nu.",
    ctaPrimary: "Descoperă metoda",
    ctaSecondary: "Găsește un profesor",
  },
  whatIs: {
    label: "Ce este",
    title: "Ce este PRIMARISTICA®?",
    paragraphs: [
      "Cunoașterea și educarea dezvoltării senzo-motorii a omului. PRIMARISTICA® este o disciplină teoretică și practică, de interes general, inerentă și benefică tuturor, la orice vârstă, fie că suntem sănătoși sau nu.",
      "Analizează și susține dezvoltarea și maturizarea senzo-motorie normală, corectând eventualele distorsiuni. Senzația și mișcarea formează o unitate inseparabilă și interdependentă. Această unitate este temelia funcționării echilibrate a întregului organism și garanția împlinirii capacităților noastre superioare.",
      "PRIMARISTICA® aduce o nouă înțelegere a sensului neuro-fizio-psihic al Reflexelor Primare, oferind totodată soluția necesară unei vieți eliberate de acestea.",
    ],
  },
  concepts: {
    label: "Concepte cheie",
    title: "Reflexele Primare și Tonusul Muscular",
    primaryReflexes: {
      title: "Reflexele Primare",
      paragraphs: [
        "Sunt tipare neurologice ereditare, înnăscute, vitale fătului pe parcursul vieții intrauterine. La naștere, misiunea lor fiind încheiată, necesitatea lor încetează.",
        "După naștere, persistența sau reactivarea Reflexelor Primare erodează funcționarea buclei senzo-motorii, generând distorsiuni care constituie premisele insuficient cunoscute dar redutabile ale îngrădirii sănătății.",
        "Acest fenomen apare la aproximativ 98% dintre oameni.",
      ],
    },
    muscleTone: {
      title: "Tonusul Muscular",
      paragraphs: [
        "Este acea „vibrație”, acel ton apărut în momentul concepției. Se manifestă atât în mișcare cât și în repaus și se stinge numai la moarte.",
        "Unitatea dintre simțire și tonusul muscular asigură bunul mers al întregului organism. Pe această buclă cibernetică inseparabilă se clădește maturarea posturală.",
        "Cauza majoră a tulburării tonusului muscular este persistența reflexelor primare după naștere. Tulburarea tonusului atrage tulburarea simțirii, generând un cerc vicios.",
      ],
    },
    quote: {
      text: "Când corpul se eliberează, mintea se limpezește și sufletul se deschide.",
      attribution: "Practicantă de Primaristică",
    },
  },
  audience: {
    label: "Adresabilitate",
    title: "Cui se adresează?",
    subtitle:
      "Fiecăruia dintre noi. La orice vârstă, atât în stare de sănătate cât și în stare de boală.",
    groups: [
      {
        title: "Femeia gravidă",
        age: "0–9 luni",
        text: "Pregătește corpul și mintea pentru sarcină. Practicarea zilnică ușurează nașterea și evită complicațiile.",
      },
      {
        title: "Nou-născut și sugar",
        age: "0–12 luni",
        text: "Din prima zi de viață. Cu cât se începe mai devreme, cu atât dezvoltarea senzo-motorie este mai armonioasă.",
      },
      {
        title: "Copilul mic",
        age: "1–3 ani",
        text: "Maturarea posturală continuă — ridicarea de la orizontală la verticală. Controlul capului, rotația corpului, mersul.",
      },
      {
        title: "Preșcolar și școlar",
        age: "3–12 ani",
        text: "Procesul de învățare depinde de funcționarea senzo-motorie corectă. Concentrare, echilibru, performanță.",
      },
      {
        title: "Tineri",
        age: "13–22 ani",
        text: "Pubertate și adolescență. Eliberarea individualității de sub patternurile tonice fixe.",
      },
      {
        title: "Adulți",
        age: "23–60 ani",
        text: "Întreruperea patternurilor fixe în comportament permite o viață liberă, eficientă și echilibrată.",
      },
      {
        title: "Seniori",
        age: "60+ ani",
        text: "Reducerea hipertoniei musculare. Mobilitatea și funcțiile cardiovasculare se îmbunătățesc.",
      },
      {
        title: "Familia",
        age: "—",
        text: "Cu cât membrii unei familii sunt mai liberi de reflexele primare, cu atât mai ușor își rezolvă conflictele.",
      },
    ],
  },
  method: {
    label: "Metoda",
    title: "PRIMARISTICA® — Program de viață",
    steps: [
      {
        title: "Lecția individuală",
        text: "Predată de profesoara de Primaristică®, lecția durează 45 de minute. O serie de minimum 10 lecții este necesară pentru inițiere.",
      },
      {
        title: "Practică zilnică acasă",
        text: "Exercițiile senzo-motorii sunt personalizate și se practică individual, acasă, în poziția culcat, într-o configurație care evită reflexele primare.",
      },
      {
        title: "Evoluție continuă",
        text: "Urmărirea evoluției elevului este indispensabilă. Practicând zilnic, capacitățile personale înfloresc și se ordonează.",
      },
    ],
    children: {
      title: "În cazul copiilor",
      text: "Mama va fi învățată să aplice copilului pozițiile primaristice și va practica zilnic cu el. Primaristica se continuă până la desăvârșirea maturării posturale.",
    },
    result: {
      title: "Viața liberă",
      text: "Fără încordare, fără pattern-uri fixe. Un somn odihnitor, o minte limpede, relații armonioase.",
    },
  },
  testimonials: {
    label: "Beneficii",
    title: "Ce spun cei care practică",
    intro: "Cu Primaristica…",
    items: [
      "încordarea din corpul meu a dispărut treptat",
      "adorm repede și somnul meu este odihnitor",
      "mă trezesc ușor și binedispus",
      "îmi ordonez cu ușurință gândurile",
      "găsesc rapid cea mai bună soluție",
      "pot să lucrez mult mai mult fără să obosesc",
      "copilul meu citește acum cu plăcere",
      "copilul meu lucrează la matematică cu ușurință",
      "conduc mașina mult mai ușor, fără nervi în trafic",
      "îmi țin spatele drept fără efort",
      "zgomotele străzii nu mă mai copleșesc",
      "sarcina mult dorită a apărut",
      "bebelușul meu în sfârșit doarme",
      "mintea mea este mai limpede și învăț ușor",
      "tensiunile cu apropiații au dispărut",
      "sunt mai sănătos decât eram acum 10 ani",
    ],
    outro: "…spun cei care practică.",
  },
  history: {
    label: "Istoric",
    title: "O istorie de cincizeci de ani",
    items: [
      {
        year: "Anii '70",
        text: "Helga Pfeiffer-Meisel (1941–2006), terapeut fizic pediatric, fondează Primaristica în Germania, în colaborare cu soțul său, Dr. Herbert Pfeiffer, pediatru homeopat.",
      },
      {
        year: "1979",
        text: "Începe formarea celor peste 70 de profesori de Primaristică în Germania.",
      },
      {
        year: "2003",
        text: "PRIMARISTICA® este introdusă în România de Asociația ArsMedica.",
      },
      {
        year: "2012",
        text: "Primul Curs de formare a Profesorilor de Primaristică din România, susținut de Prof. Dr. Herbert Pfeiffer.",
      },
      {
        year: "2015",
        text: "Al doilea Curs de formare din România, de asemenea susținut de Prof. Dr. Herbert Pfeiffer.",
      },
      {
        year: "2018",
        text: "Se fondează Institutul de Primaristică din România, cu scopul formării continue a profesorilor.",
      },
      {
        year: "2019",
        text: "Primul Congres Internațional — „Five decades of Primaristic” — la Viena.",
      },
      {
        year: "2022",
        text: "Al doilea Congres — „Zece ani de Primaristică în România” — la Barcelona.",
      },
    ],
  },
  community: {
    label: "Comunitate",
    title: "Comunitatea noastră",
    paragraphs: [
      "Suntem mai mult decât o școală — suntem o familie în continuă creștere, unită de dorința de a aduce echilibru și armonie în viața fiecăruia.",
      "Alătură-te unei rețele de suport unde fiecare poveste contează și fiecare pas spre evoluție este sărbătorit împreună.",
    ],
  },
  teachers: {
    label: "Profesori",
    title: "Cine ne învață?",
    text: "Primaristica este predată de profesoarele de Primaristică, formate în cadrul unui program de doi ani, la sfârșitul căruia primesc Diploma de Profesor de Primaristică®. Educația profesorilor continuă prin întruniri lunare și seminare bi-anuale.",
    cta: "Vezi profesorii",
    list: [
      { name: "Dr. Carmen Maria Sturza", city: "București", active: true },
      { name: "Steluța Brebeanu", city: "București", active: true },
      { name: "Rodica Mariana Țucra", city: "București", active: true },
      { name: "Ruxandra Oana Drăghicescu", city: "București", active: true },
      { name: "Luiza Rodica Dumitrescu", city: "București", active: true },
      { name: "Rodica Lesovici", city: "București", active: true },
      { name: "Alina Dabija", city: "București", active: true },
      { name: "Cristina Gabriela Petrescu", city: "București", active: true },
    ],
  },
  contact: {
    label: "Contact",
    title: "Contactează-ne",
    description:
      "Suntem aici pentru a răspunde întrebărilor tale despre PRIMARISTICA® și despre cum te poate ajuta.",
    schedule: "Luni–Vineri, 09:00–12:00",
    cta: "Trimite un mesaj",
  },
} as const;

export type VariantContent = typeof VARIANT_CONTENT;
