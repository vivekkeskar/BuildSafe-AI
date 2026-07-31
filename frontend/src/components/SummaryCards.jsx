import {
  ShieldCheck,
  AlertTriangle,
  HardHat,
  Activity,
} from "lucide-react";

export default function SummaryCards({
  compliance,
  detected,
  missing,
  risk,
}) {
  const cards = [
    {
      title: "Compliance",
      value: `${compliance}%`,
      icon: ShieldCheck,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      title: "Detected PPE",
      value: detected,
      icon: HardHat,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Missing PPE",
      value: missing,
      icon: AlertTriangle,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
    },
    {
      title: "Risk Level",
      value: risk,
      icon: Activity,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className={`rounded-2xl border ${card.border} ${card.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 ${card.color}`}
            >
              <Icon size={30} />
            </div>

            <p className="text-sm text-slate-400">
              {card.title}
            </p>

            <h2 className={`mt-2 text-3xl font-bold ${card.color}`}>
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}