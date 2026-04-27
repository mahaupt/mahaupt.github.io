import React from "react";
import Base from "./_includes/Base.jsx";

export default function Index({ now }) {
  return (
    <Base>
      {/* Intro */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Marcel Haupt
        </h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          A320-Pilot und Softwareentwickler. Hauptberuflich im Cockpit,
          nebenberuflich am Rechner – und gelegentlich zu tief in einem
          Hobby-Projekt versunken.
        </p>
      </section>

      {/* Was ich gerade mache */}
      <section className="mb-20">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
          Was ich gerade mache
        </h2>
        <dl className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:gap-8">
            <dt className="font-mono text-sm text-zinc-500 w-32 shrink-0">Projekt</dt>
            <dd className="text-zinc-300">{now.projekt}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8">
            <dt className="font-mono text-sm text-zinc-500 w-32 shrink-0">Letzter Flug</dt>
            <dd className="text-zinc-300">{now.flug}</dd>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8">
            <dt className="font-mono text-sm text-zinc-500 w-32 shrink-0">Beschäftigt mit</dt>
            <dd className="text-zinc-300">{now.beschaeftigt}</dd>
          </div>
        </dl>
      </section>

      {/* Projekte-Teaser */}
      <section className="mb-20">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
          Projekte
        </h2>
        <p className="text-zinc-400 mb-4">
          Dinge, die ich gebaut habe – und warum.
        </p>
        <a href="/projekte/" className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          Alle Projekte →
        </a>
      </section>

      {/* Über mich */}
      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">
          Über mich
        </h2>
        <div className="space-y-4 text-zinc-300 leading-relaxed">
          <p>
            Ich bin Marcel – A320-Pilot und Softwareentwickler aus Deutschland.
            Hauptberuflich fliege ich für eine europäische Airline, nebenberuflich
            baue ich Web-Plattformen, SaaS-Produkte und Infrastruktur. AWS,
            Kubernetes, CI/CD.
          </p>
          <p>
            Daneben: zu viele Hobby-Projekte. Schach-Bots, Raytracing-Engines,
            ein selbst gebauter Chia-Server mit 500 TB.
          </p>
        </div>
      </section>
    </Base>
  );
}
