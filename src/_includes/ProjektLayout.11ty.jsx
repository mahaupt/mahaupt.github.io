import React from "react";
import Base from "./Base.jsx";

export default function ProjektLayout({ title, date, link, tags, image, content }) {
  const dateFormatted = date
    ? new Date(date).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <Base title={title}>
      <article>
        <header className="mb-12">
          <a
            href="/projekte/"
            className="font-mono text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Alle Projekte
          </a>
          <h1 className="text-3xl font-bold tracking-tight mt-6 mb-3">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            {dateFormatted && <time>{dateFormatted}</time>}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono hover:text-zinc-300 transition-colors"
              >
                Projekt öffnen →
              </a>
            )}
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {image && (
          <>
            <div className="mb-12 -mx-6 overflow-hidden rounded-sm bg-zinc-900 flex items-center justify-center max-h-80">
              <img
                id="projekt-bild"
                src={image}
                alt={title}
                className="w-full max-h-80 object-contain cursor-zoom-in"
              />
            </div>

            <div id="lightbox" className="hidden fixed inset-0 z-50 bg-black/90">
              <div className="flex h-full items-center justify-center p-4">
                <img
                  src={image}
                  alt={title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <script dangerouslySetInnerHTML={{ __html: `
              document.getElementById('projekt-bild').addEventListener('click', function() {
                document.getElementById('lightbox').classList.remove('hidden');
              });
              document.getElementById('lightbox').addEventListener('click', function() {
                this.classList.add('hidden');
              });
            `}} />
          </>
        )}

        <div
          className="prose prose-invert prose-zinc max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </Base>
  );
}
