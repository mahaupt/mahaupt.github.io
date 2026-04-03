import React from "react";
import Base from "./Base.jsx";

export default function FlyingLayout({ title, date, aircraft, route, image, content }) {
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
            href="/flying/"
            className="font-mono text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Alle Flüge
          </a>
          <h1 className="text-3xl font-bold tracking-tight mt-6 mb-3">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-mono">
            {dateFormatted && <time>{dateFormatted}</time>}
            {aircraft && <span>{aircraft}</span>}
            {route && <span>{route}</span>}
          </div>
        </header>

        {image && (
          <>
            <div className="mb-12 -mx-6 overflow-hidden rounded-sm bg-zinc-900 flex items-center justify-center max-h-96">
              <img
                id="flying-bild"
                src={image}
                alt={title}
                className="w-full max-h-96 object-contain cursor-zoom-in"
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
              document.getElementById('flying-bild').addEventListener('click', function() {
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
