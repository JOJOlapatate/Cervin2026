import React, { useState } from "react";

// --- ICÔNES INTÉGRÉES (Compatible TypeScript) ---

// On ajoute ": any" pour dire au code strict d'accepter n'importe quel contenu
const IconBase = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const Mountain = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </IconBase>
);

const CheckCircle2 = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

const Circle = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="10" />
  </IconBase>
);

const ChevronLeft = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="m15 18-6-6 6-6" />
  </IconBase>
);

const Dumbbell = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </IconBase>
);

const Tent = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M3.5 21 14 3" />
    <path d="M20.5 21 10 3" />
    <path d="M15.5 21 12 15l-3.5 6" />
    <path d="M2 21h20" />
  </IconBase>
);

const Footprints = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 8c0 1.25-.51 2.4-1.5 3l-3.5 2" />
    <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 13 7.8 13 12c0 1.25.51 2.4 1.5 3l3.5 2" />
  </IconBase>
);

const Calendar = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </IconBase>
);

const Info = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </IconBase>
);

const MapPin = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" x2="9" y1="3" y2="18" />
    <line x1="15" x2="15" y1="6" y2="21" />
  </IconBase>
);

const Heart = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M19 14c1.49-1.28 3-2.83 3-4.7 0-2.7-1.66-4.9-4.5-5.3-2.5-.35-4.8 1.43-5.5 3.5-.7-2.07-3-3.85-5.5-3.5C3.66 4.4 2 6.6 2 9.3c0 1.87 1.51 3.42 3 4.7l7 6.1 7-6.1z" />
  </IconBase>
);

const CrossedPiolets = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path d="M6 20L18 4" />
    <path d="M15 8L20 5" />
    <path d="M15 8L14 3" />
    <path d="M18 20L6 4" />
    <path d="M9 8L4 5" />
    <path d="M9 8L10 3" />
  </IconBase>
);

// --- DONNÉES DU PROGRAMME ---
// On ajoute des types "any" pour éviter les erreurs de structure de données complexes
const TRAINING_DATA: any[] = [
  {
    id: "phase1",
    title: "Phase 1 : Base & Technique",
    period: "Décembre → Février",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    weeksCount: 13,
    content: {
      cardio: {
        title: "Cardio – Endurance Fondamentale",
        description:
          'Objectif : Construire "la caisse". Rythme lent, aisance respiratoire totale.',
        exercises: [
          "1h à 1h15 de course à pied, vélo ou natation (Zone 2).",
          "Fréquence : 1 à 2 fois par semaine (en plus des randos).",
          "Interdit d’être essoufflé : vous devez pouvoir parler.",
        ],
      },
      bodyweight: {
        title: "Renforcement – Poids du corps",
        exercises: [
          "Échauffement : épaules, squats lents, genoux hauts",
          "Squats 3×12",
          "Fentes avant 3×10",
          "Pompes 3×8",
          "Gainage 3×30s",
          "Pont fessier 3×15",
          "Oiseau/T 3×12",
          "Planche latérale",
        ],
      },
      gym: {
        title: "Renforcement – Salle",
        exercises: [
          "Presse 3×12",
          "Tirage vertical 3×10",
          "Rowing 3×10",
          "Leg curl 3×12",
          "Chest press 3×10",
          "Gainage",
        ],
      },
      climbing: {
        title: "Escalade recommandée",
        items: [
          "Cabris (bloc 4–6A)",
          "Gorges du Loup secteurs faciles",
          "Arkose Nice (bloc technique)",
        ],
      },
      hikes: [
        {
          name: "Lac de Trécolpas",
          details: "600 D+, 10 km",
          url: "https://www.alltrails.com/fr/randonnee/france/provence-alpes-cote-d-azur/lac-de-trecolpas",
        },
        {
          name: "Brec d’Utelle",
          details: "550 D+, 7 km",
          url: "https://www.alltrails.com/fr/randonnee/france/provence-alpes-cote-d-azur/brec-d-utelle",
        },
        {
          name: "Mont Chauve Aspremont",
          details: "500 D+",
          url: "https://www.alltrails.com/fr/randonnee/france/provence-alpes-cote-d-azur/mont-chauve-d-aspremont",
        },
        {
          name: "Mont Macaron",
          details: "450 D+",
          url: "https://www.alltrails.com/fr/randonnee/france/provence-alpes-cote-d-azur/mont-macaron",
        },
        {
          name: "Tour Mont Chauve",
          details: "480 D+",
          url: "https://www.alltrails.com/fr/randonnee/france/provence-alpes-cote-d-azur/mont-chauve-tourrette-levens",
        },
        {
          name: "Clue du Haut Cians",
          details: "350 D+",
          url: "https://www.alltrails.com/fr/randonnee/france/provence-alpes-cote-d-azur/clue-du-haut-cians",
        },
      ],
    },
  },
  {
    id: "phase2",
    title: "Phase 2 : Force & Endurance",
    period: "Mars → Mai",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    weeksCount: 13,
    content: {
      cardio: {
        title: "Cardio – Intensité & VMA",
        description:
          "Objectif : Augmenter la capacité du cœur à l’effort intense.",
        exercises: [
          "Séance 1 : Fractionné (30s rapide / 30s lent) sur 20 min.",
          "Séance 2 : Sortie vallonnée (course ou vélo) 1h.",
          "Intégrer des côtes ou des escaliers dans vos parcours.",
        ],
      },
      bodyweight: {
        title: "Renforcement – Poids du corps",
        exercises: [
          "Squat sauté 3×10",
          "Fentes arrière 3×12",
          "Pompes 3×12",
          "Tractions assistées 3×5",
          "Gainage dynamique",
          "Good mornings 3×15",
          "Planche latérale",
        ],
      },
      gym: {
        title: "Renforcement – Salle",
        exercises: [
          "Presse 4×10",
          "Tirage vertical 4×10",
          "Rowing 4×10",
          "Leg extension 3×12",
          "Développé haltères 3×10",
          "Gainage lesté",
        ],
      },
      climbing: {
        title: "Escalade recommandée",
        items: [
          "Saint-Jeannet (secteurs école / Saumur)",
          "Peillon",
          "Gorges du Loup 5c–6b",
        ],
      },
      hikes: [
        { name: "Mont Vial", details: "900 D+", url: null },
        { name: "Cime Baudon", details: "850 D+", url: null },
        { name: "Mont Ours", details: "950 D+", url: null },
        { name: "Circuit Pépoiri", details: "1100 D+", url: null },
        { name: "Mont Mangiabo", details: "1000 D+", url: null },
        { name: "Tête du Pommier", details: "800 D+", url: null },
      ],
    },
  },
  {
    id: "phase3",
    title: "Phase 3 : Technique Alpine",
    period: "Juin → Juillet",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    weeksCount: 9,
    content: {
      cardio: {
        title: "Cardio – Spécifique D+",
        description: "Objectif : Simuler l’effort montagne en semaine.",
        exercises: [
          "2 séances par semaine axées sur le dénivelé.",
          "Ex : Montée d’escaliers rapide ou côte raide (300-400m D+).",
          "Si possible avec petit sac à dos (5-6kg) pour habituer les épaules.",
        ],
      },
      bodyweight: {
        title: "Renforcement – Poids du corps",
        exercises: [
          "Step-ups 3×12",
          "Squat bulgare 3×10",
          "Pompes surélevées",
          "Tractions assistées 3×6",
          "Gainage 1 min",
          "Chaise 45 sec",
        ],
      },
      gym: {
        title: "Renforcement – Salle",
        exercises: [
          "Presse 4×12",
          "Tirage vertical 4×10",
          "Rowing 4×10",
          "Leg curl 4×12",
          "Fentes marchées",
          "Gainage lesté",
        ],
      },
      climbing: {
        title: "Escalade recommandée",
        items: [
          "Saint-Jeannet (grandes voies)",
          "Gattières",
          "Peille / Sospel",
        ],
      },
      hikes: [
        { name: "Mont Clapier", details: "1450 D+", url: null },
        { name: "Cime du Gélas", details: "1500 D+", url: null },
        { name: "Mont Bégo", details: "1300 D+", url: null },
        { name: "Cime du Diable", details: "1400 D+", url: null },
        { name: "Cime de la Lombarde", details: "1200 D+", url: null },
        { name: "Lacs Bessons", details: "1250 D+", url: null },
      ],
    },
  },
  {
    id: "phase4",
    title: "Phase 4 : Affûtage Final",
    period: "Août",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    weeksCount: 4,
    content: {
      cardio: {
        title: "Cardio – Maintien & Fraîcheur",
        description:
          "Objectif : Garder le tonus sans se fatiguer avant le jour J.",
        exercises: [
          "Footings légers de 30 min maximum.",
          "Marche active sur le plat.",
          "Arrêt complet du cardio intense 10 jours avant l’ascension.",
        ],
      },
      bodyweight: {
        title: "Renforcement – Très léger",
        exercises: [
          "Squats 2×12",
          "Fentes 2×10",
          "Pompes 2×10",
          "Gainage léger",
        ],
      },
      gym: {
        title: "Renforcement – Salle",
        exercises: [
          "Aucune séance salle lourde. Privilégier la récupération active.",
        ],
      },
      climbing: {
        title: "Escalade recommandée",
        items: ["Cabris blocs faciles", "Saint-Jeannet couennes 4c–5b"],
      },
      hikes: [
        { name: "Plateau de Calern", details: "Facile", url: null },
        { name: "Col de Braus", details: "Facile", url: null },
        { name: "Cap d’Ail littoral", details: "Facile", url: null },
        { name: "Mont Chauve (court)", details: "Facile", url: null },
        { name: "Baou de la Gaude", details: "Facile", url: null },
        { name: "Cap Ferrat", details: "Facile", url: null },
      ],
    },
  },
];

// --- COMPOSANTS UI ---

const ProgressBar = ({
  total,
  current,
}: {
  total: number;
  current: number;
}) => {
  const percentage = Math.round((current / total) * 100);
  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
      <div
        className="bg-slate-800 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const SectionCard = ({
  title,
  icon: Icon,
  description,
  children,
}: {
  title: string;
  icon: any;
  description?: string;
  children: any;
}) => (
  <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-5 mb-4">
    <div className="flex items-center gap-3 mb-4 border-b border-slate-50 pb-3">
      <div className="p-2 bg-slate-50 rounded-lg">
        <Icon className="w-5 h-5 text-slate-700" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>
        {description && (
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        )}
      </div>
    </div>
    <div className="text-slate-600 space-y-2 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

// --- COMPOSANT BACKGROUND GÉNÉRÉ (SVG) ---
const MatterhornIllustration = () => (
  <svg
    className="fixed inset-0 w-full h-full object-cover z-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
    </defs>

    <rect width="800" height="600" fill="url(#sky)" />

    <g opacity="0.4" fill="white">
      <circle cx="100" cy="100" r="40" />
      <circle cx="700" cy="120" r="50" />
    </g>

    {/* MONTAGNE GAUCHE (Grande) */}
    <g transform="translate(-150, 50) scale(1.1)">
      <path d="M300 150 L100 600 L300 600 Z" fill="#64748b" />
      <path d="M300 150 L550 600 L300 600 Z" fill="#94a3b8" />
      <path d="M300 150 L250 300 L300 270 Z" fill="#e2e8f0" />
      <path d="M300 150 L380 330 L300 270 Z" fill="white" />
    </g>

    {/* MONTAGNE DROITE (Petite) */}
    <g transform="translate(450, 200) scale(0.7)">
      <path d="M300 150 L100 600 L300 600 Z" fill="#64748b" />
      <path d="M300 150 L550 600 L300 600 Z" fill="#94a3b8" />
      <path d="M300 150 L250 300 L300 270 Z" fill="#e2e8f0" />
      <path d="M300 150 L380 330 L300 270 Z" fill="white" />
    </g>

    <rect width="800" height="600" fill="white" opacity="0.15">
      <animate
        attributeName="opacity"
        values="0.1;0.2;0.1"
        dur="7s"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);

// --- COMPOSANT PRINCIPAL ---

export default function App() {
  const [activePhase, setActivePhase] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("planning");

  const [completedWeeks, setCompletedWeeks] = useState<{
    [key: string]: boolean;
  }>(() => {
    const initialState: { [key: string]: boolean } = {};
    TRAINING_DATA.forEach((phase) => {
      for (let w = 1; w <= phase.weeksCount; w++) {
        const key = `${phase.id}_week${w}`;
        if (
          typeof window !== "undefined" &&
          localStorage.getItem(key) === "done"
        ) {
          initialState[key] = true;
        }
      }
    });
    return initialState;
  });

  const toggleWeek = (phaseId: string, weekIndex: number) => {
    const key = `${phaseId}_week${weekIndex}`;
    setCompletedWeeks((prev) => {
      const isCurrentlyDone = prev[key];
      const newStatus = !isCurrentlyDone;
      if (newStatus) {
        localStorage.setItem(key, "done");
      } else {
        localStorage.removeItem(key);
      }
      return { ...prev, [key]: newStatus };
    });
  };

  const getPhaseProgress = (phaseId: string, totalWeeks: number) => {
    let count = 0;
    for (let i = 1; i <= totalWeeks; i++) {
      if (completedWeeks[`${phaseId}_week${i}`]) count++;
    }
    return count;
  };

  return (
    <div className="min-h-screen relative font-sans text-slate-900">
      <MatterhornIllustration />
      <div className="fixed inset-0 bg-slate-50/10 backdrop-blur-[0.5px] z-0 pointer-events-none"></div>

      <div className="relative z-10 pb-12">
        {!activePhase ? (
          <>
            <header className="bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-white/20 px-6 py-8 mb-8 sticky top-0 z-20 transition-all duration-300">
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <CrossedPiolets className="w-8 h-8 text-sky-100" />
                    <h1 className="text-2xl font-bold tracking-tight text-white">
                      Cervin 2026
                    </h1>
                  </div>
                  <Mountain className="text-sky-100 w-8 h-8" />
                </div>
                <p className="text-slate-300 text-sm">
                  Programme d'entraînement complet pour l'ascension.
                </p>
              </div>
            </header>

            <div className="max-w-md mx-auto px-4 space-y-5">
              {TRAINING_DATA.map((phase: any) => {
                const progress = getPhaseProgress(phase.id, phase.weeksCount);
                const isComplete = progress === phase.weeksCount;

                return (
                  <div
                    key={phase.id}
                    onClick={() => {
                      setActivePhase(phase);
                      setActiveTab("planning");
                    }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${phase.bgColor} ${phase.color}`}
                      >
                        {phase.period}
                      </span>
                      {isComplete && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-slate-800 mb-1">
                      {phase.title}
                    </h2>
                    <div className="flex items-center justify-between text-sm text-slate-500 mt-4">
                      <span>
                        {progress} / {phase.weeksCount} semaines
                      </span>
                      <span className="text-slate-400">Voir →</span>
                    </div>
                    <ProgressBar total={phase.weeksCount} current={progress} />
                  </div>
                );
              })}
            </div>

            <div className="text-center text-slate-600/80 font-medium text-xs mt-12 mb-6 drop-shadow-sm">
              Objectif Août 2026 • Matterhorn
            </div>
          </>
        ) : (
          <>
            <div className="sticky top-0 bg-slate-900/80 backdrop-blur-xl border-b border-white/20 z-20 shadow-sm transition-all duration-300">
              <div className="max-w-md mx-auto px-4 py-4">
                <button
                  onClick={() => setActivePhase(null)}
                  className="flex items-center text-slate-300 hover:text-white transition-colors mb-4 text-sm font-medium"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Retour
                </button>

                <h1 className="text-xl font-bold text-white leading-tight">
                  {activePhase.title}
                </h1>
                <p className="text-slate-300 text-xs mt-1">
                  {activePhase.period}
                </p>
              </div>

              <div className="max-w-md mx-auto flex border-t border-white/10">
                <button
                  onClick={() => setActiveTab("planning")}
                  className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "planning"
                      ? "border-sky-300 text-sky-100"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Planning
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("content")}
                  className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === "content"
                      ? "border-sky-300 text-sky-100"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Info className="w-4 h-4" /> Programme
                  </div>
                </button>
              </div>
            </div>

            <div className="max-w-md mx-auto px-4 py-6">
              {activeTab === "planning" && (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="bg-white p-4 rounded-xl mb-6 flex items-center gap-3 shadow-md border border-slate-100">
                    <div className="bg-blue-50 p-2 rounded-full shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Progression
                      </p>
                      <p className="text-xs text-slate-500">
                        {getPhaseProgress(
                          activePhase.id,
                          activePhase.weeksCount
                        )}{" "}
                        semaines validées sur {activePhase.weeksCount}
                      </p>
                    </div>
                  </div>

                  {Array.from(
                    { length: activePhase.weeksCount },
                    (_, i) => i + 1
                  ).map((week) => {
                    const key = `${activePhase.id}_week${week}`;
                    const isChecked = completedWeeks[key];

                    return (
                      <div
                        key={week}
                        onClick={() => toggleWeek(activePhase.id, week)}
                        className={`group flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer select-none shadow-sm ${
                          isChecked
                            ? "bg-slate-800 border-slate-800 text-white shadow-md"
                            : "bg-white border-slate-100 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span className="font-medium">Semaine {week}</span>
                        <div className="relative">
                          <input
                            type="checkbox"
                            id={key}
                            checked={!!isChecked}
                            readOnly
                            className="sr-only"
                          />
                          {isChecked ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-400 animate-in zoom-in duration-200" />
                          ) : (
                            <Circle className="w-6 h-6 text-slate-300 group-hover:text-slate-400" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === "content" && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {/* CARDIO SECTION - ADDED HERE */}
                  {activePhase.content.cardio && (
                    <SectionCard
                      title={activePhase.content.cardio.title}
                      icon={Heart}
                      description={activePhase.content.cardio.description}
                    >
                      <ul className="space-y-2">
                        {activePhase.content.cardio.exercises.map(
                          (ex: any, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="block w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0"></span>
                              <span>{ex}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </SectionCard>
                  )}

                  <SectionCard
                    title={activePhase.content.bodyweight.title}
                    icon={Dumbbell}
                  >
                    <ul className="space-y-2">
                      {activePhase.content.bodyweight.exercises.map(
                        (ex: any, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="block w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                            <span>{ex}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </SectionCard>

                  <SectionCard
                    title={activePhase.content.gym.title}
                    icon={Tent}
                  >
                    <ul className="space-y-2">
                      {activePhase.content.gym.exercises.map(
                        (ex: any, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="block w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0"></span>
                            <span>{ex}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </SectionCard>

                  <SectionCard
                    title={activePhase.content.climbing.title}
                    icon={Mountain}
                  >
                    <ul className="space-y-2">
                      {activePhase.content.climbing.items.map(
                        (item: any, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="block w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </SectionCard>

                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-4 px-2">
                      <Footprints className="w-5 h-5 text-slate-900 drop-shadow-sm" />
                      <h3 className="font-bold text-slate-900 drop-shadow-sm">
                        Les 6 Randonnées
                      </h3>
                    </div>

                    <div className="grid gap-3">
                      {activePhase.content.hikes.map((hike: any, i: number) => (
                        <a
                          key={i}
                          href={hike.url || "#"}
                          target={hike.url ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="block bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {hike.name}
                              </div>
                              <div className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {hike.details}
                              </div>
                            </div>
                            {hike.url && (
                              <div className="bg-slate-50 p-1.5 rounded-lg">
                                <span className="text-[10px] font-bold text-slate-400 uppercase">
                                  Lien
                                </span>
                              </div>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
