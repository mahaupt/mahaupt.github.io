import React from "react";
import Base from "./_includes/Base.jsx";

export default function Projekte({ collections }) {
  const projekte = collections.projekte ?? [];

  return (
    <Base title="Projekte">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projekte</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Dinge, die ich gebaut habe – mit dem Warum dahinter.
        </p>
      </header>

      {projekte.length === 0 ? (
        <p className="text-zinc-500 font-mono text-sm">Noch keine Projekte eingetragen.</p>
      ) : (
        <ol className="space-y-12">
          {projekte.map((p) => {
            const dateFormatted = p.date
              ? new Date(p.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                })
              : null;

            return (
              <li key={p.url} className="border-t border-zinc-800 pt-10">
                <article className="flex gap-6">
                  {p.data.image && (
                    <a href={p.url} className="shrink-0 w-36 h-24 overflow-hidden rounded-sm bg-zinc-900 flex items-center justify-center">
                      <img
                        src={p.data.image}
                        alt={p.data.title}
                        className="w-full h-full object-contain p-1"
                      />
                    </a>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4 mb-3">
                      <h2 className="text-xl font-semibold">
                        <a
                          href={p.url}
                          className="hover:text-zinc-300 transition-colors"
                        >
                          {p.data.title}
                        </a>
                      </h2>
                      {dateFormatted && (
                        <time className="font-mono text-sm text-zinc-500 shrink-0">
                          {dateFormatted}
                        </time>
                      )}
                    </div>
                    {p.data.description && (
                      <p className="text-zinc-300 leading-relaxed mb-4">
                        {p.data.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4">
                      <a
                        href={p.url}
                        className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                      >
                        Mehr lesen →
                      </a>
                      {p.data.link && (
                        <a
                          href={p.data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                          Projekt öffnen ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      )}
    </Base>
  );
}
