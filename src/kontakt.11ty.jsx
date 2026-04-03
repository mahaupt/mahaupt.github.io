import React from "react";
import Base from "./_includes/Base.jsx";

export const data = {
  permalink: "/kontakt/index.html",
  title: "Kontakt",
};

export default function Kontakt() {
  const emailB64 = "bWFyY2VsJTQwZWhhdXB0LmRl";
  const adresseB64 = "TWFyY2VsJTIwSGF1cHQlMkMlMjBTY2hpbGxlcnN0cmElQzMlOUZlJTIwMTBiJTJDJTIwODUzNjglMjBNb29zYnVyZw==";

  const script = `
    window.addEventListener('DOMContentLoaded', function () {
      var email = decodeURIComponent(atob("${emailB64}"));
      var adresse = decodeURIComponent(atob("${adresseB64}"));
      var links = document.querySelectorAll('.insert-email');
      links.forEach(function (el) {
        el.textContent = email;
        el.href = 'mailto:' + email;
      });
      var adresseEl = document.getElementById('insert-adresse');
      if (adresseEl) adresseEl.textContent = adresse;
    });
  `;

  return (
    <Base title="Kontakt">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Kontakt</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Erreichbar per E-Mail.
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-4">E-Mail</h2>
          <a
            href="#"
            className="insert-email font-mono text-zinc-100 hover:text-zinc-300 transition-colors"
          >
            [JavaScript erforderlich]
          </a>
        </section>

        <section>
          <h2 className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-4">GPG Key</h2>
          <p className="font-mono text-sm text-zinc-400 mb-3 break-all">
            35FB 8BF4 CC80 6C8E 3C11 0F0C E637 584A F225 D84C
          </p>
          <a
            href="/assets/public.gpg"
            className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            Public Key herunterladen ↓
          </a>
        </section>

        <section>
          <h2 className="font-mono text-sm text-zinc-500 uppercase tracking-widest mb-4">Impressum</h2>
          <p className="text-zinc-300">
            Diese Website speichert keine personenbezogene Daten und nutzt keine Cookies. Links verweisen auf externe Seiten auf die der Author keinen Einfluss hat.
          </p>
          <p className="text-zinc-300">
            Autor: <span id="insert-adresse">[JavaScript erforderlich]</span>
          </p>
        </section>
      </div>

      <script dangerouslySetInnerHTML={{ __html: script }} />
    </Base>
  );
}
