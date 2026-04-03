import React from "react";

export default function Base({ title, children }) {
  const pageTitle = title ? `${title} – Marcel Haupt` : "Marcel Haupt";

  return (
    <html lang="de" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Marcel Haupt" />
        <meta name="robots" content="index, follow" />
        <title>{pageTitle}</title>
        <link rel="stylesheet" href="/css/output.css" />
      </head>
      <body className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col">

        <header className="border-b border-zinc-800">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
              ehaupt.de
            </a>
            <div className="flex gap-6 text-sm">
              <a href="/projekte/" className="text-zinc-400 hover:text-zinc-100 transition-colors">Projekte</a>
              <a href="/flying/" className="text-zinc-400 hover:text-zinc-100 transition-colors">Fliegen</a>
              <a
                href="https://github.com/mahaupt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                GitHub
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
          {children}
        </main>

        <footer className="border-t border-zinc-800">
          <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-zinc-500">
            <span>Marcel Haupt</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/mahaupt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/marcel-haupt-bb593a163/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                LinkedIn
              </a>
              <a href="/kontakt/" className="hover:text-zinc-300 transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
