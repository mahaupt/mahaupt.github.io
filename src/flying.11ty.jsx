import React from "react";
import Base from "./_includes/Base.jsx";

export default function Flying({ collections }) {
  const fluege = collections.flying ?? [];

  return (
    <Base title="Fliegen">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Fliegen</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Erlebnisse aus dem Cockpit.
        </p>
      </header>

      {fluege.length === 0 ? (
        <p className="text-zinc-500 font-mono text-sm">Noch keine Einträge – bald!</p>
      ) : (
        <ol className="space-y-12">
          {fluege.map((f) => {
            const dateFormatted = f.date
              ? new Date(f.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : null;

            return (
              <li key={f.url} className="border-t border-zinc-800 pt-10">
                <article>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h2 className="text-xl font-semibold">
                      <a
                        href={f.url}
                        className="hover:text-zinc-300 transition-colors"
                      >
                        {f.data.title}
                      </a>
                    </h2>
                    {dateFormatted && (
                      <time className="font-mono text-sm text-zinc-500 shrink-0">
                        {dateFormatted}
                      </time>
                    )}
                  </div>
                  <div className="flex gap-4 font-mono text-sm text-zinc-500 mb-4">
                    {f.data.aircraft && <span>{f.data.aircraft}</span>}
                    {f.data.route && <span>{f.data.route}</span>}
                  </div>
                  {f.data.description && (
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      {f.data.description}
                    </p>
                  )}
                  <a
                    href={f.url}
                    className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    Mehr lesen →
                  </a>
                </article>
              </li>
            );
          })}
        </ol>
      )}
    </Base>
  );
}
