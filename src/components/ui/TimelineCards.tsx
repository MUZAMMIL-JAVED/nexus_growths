import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "./Card";

export interface TimelineCardItem {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface TimelineCardsProps {
  items: TimelineCardItem[];
  columns?: 2 | 3 | 4;
  defaultIcon?: LucideIcon;
}

function StepCircle({ number }: { number: string }) {
  return (
    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-teal-600 bg-white shadow-md ring-4 ring-slate-50">
      <span className="font-mono text-xs font-bold text-teal-700">{number}</span>
    </div>
  );
}

function cardsGridClass(columns: TimelineCardsProps["columns"]) {
  switch (columns) {
    case 2:
      return "md:grid-cols-2";
    case 3:
      return "md:grid-cols-2 lg:grid-cols-3";
    default:
      return "md:grid-cols-2 lg:grid-cols-4";
  }
}

function timelineGridClass(columns: TimelineCardsProps["columns"]) {
  switch (columns) {
    case 2:
      return "lg:grid-cols-2";
    case 3:
      return "lg:grid-cols-3";
    default:
      return "lg:grid-cols-4";
  }
}

export function TimelineCards({
  items,
  columns = 4,
  defaultIcon,
}: TimelineCardsProps) {
  const lastIndex = items.length - 1;

  return (
    <>
      <div className={`mb-6 hidden gap-5 lg:grid ${timelineGridClass(columns)}`}>
        {items.map((item, i) => (
          <div key={`timeline-${item.number}`} className="relative flex justify-center">
            {i > 0 && (
              <span
                className="absolute top-1/2 right-1/2 left-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-teal-200 to-teal-500"
                aria-hidden
              />
            )}
            {i < lastIndex && (
              <span
                className="absolute top-1/2 left-1/2 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-teal-200"
                aria-hidden
              />
            )}
            <StepCircle number={item.number} />
          </div>
        ))}
      </div>

      <div className={`grid grid-cols-1 gap-5 ${cardsGridClass(columns)}`}>
        {items.map((item, i) => {
          const Icon = item.icon ?? defaultIcon;

          return (
            <motion.div
              key={`${item.number}-${item.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative h-full"
            >
              <div className="mb-4 flex flex-col items-center lg:hidden">
                {i > 0 && (
                  <span
                    className="mb-3 h-6 w-0.5 bg-gradient-to-b from-teal-200 to-teal-500"
                    aria-hidden
                  />
                )}
                <StepCircle number={item.number} />
              </div>

              <Card
                spotlight
                className="group relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-7"
              >
                {Icon && (
                  <div className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white shadow-sm transition-colors group-hover:border-teal-100 group-hover:from-blue-50/80 group-hover:to-teal-50/80">
                    <Icon className="h-5 w-5 text-teal-600" strokeWidth={1.75} />
                  </div>
                )}

                <h3 className="mb-2.5 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
