---
layout: ProjektLayout.11ty.jsx
title: MailGPG
date: 2026-03-01
description: Native macOS Mail-Extension für OpenPGP – E-Mails signieren, verschlüsseln und entschlüsseln direkt in Apple Mail.
link: https://github.com/mahaupt/mailgpg
tags:
  - Swift
  - macOS
  - Kryptografie
  - OpenPGP
---

## Was ist das

MailGPG ist eine native macOS Mail-Extension, die OpenPGP-Verschlüsselung direkt in Apple Mail bringt – ohne externe App, ohne Browser-Plugin. Sie nutzt die lokale GPG-Installation und kommuniziert über XPC mit dem Mail-Prozess.

Installation per Homebrew:

```bash
brew install --cask mahaupt/mailgpg/mailgpg
```

## Warum

Apple Mail hat keine eingebaute PGP-Unterstützung. Bestehende Lösungen wie GPGMail sind proprietär oder teuer. Ich wollte eine freie, native Alternative, die sich wie ein echter Teil des Systems anfühlt – kein Wrapper, kein Workaround.

## Architektur

MailKit erzwingt eine Zwei-Prozess-Architektur: Die Extension läuft sandboxed in Mail und darf keine Subprozesse starten. Daher übernimmt eine unsandboxte Host-App (`MailGPG.app`) alle GPG-Operationen und stellt die Ergebnisse per XPC bereit. Die Host-App registriert sich beim ersten Start als Login-Item und läuft im Hintergrund.

## Features

- Ausgehende E-Mails signieren und verschlüsseln (RFC 3156 PGP/MIME)
- Eingehende E-Mails entschlüsseln und Signaturen verifizieren
- Automatisches Key-Lookup über Keyserver
- Key-Management direkt in der App (Import, Löschen, Trust-Level)
