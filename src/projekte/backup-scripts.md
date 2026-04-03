---
layout: ProjektLayout.11ty.jsx
title: Backup Scripts
date: 2018-01-01
image: /assets/img/backup.jpg
description: Shell-Scripts für verschlüsselte Backups über SSH – einfach, zuverlässig, ohne Overhead.
link: https://gist.github.com/mahaupt/fc637505bb198687347c607df73acb26
tags:
  - Shell
  - DevOps
  - Security
---

## Warum

Backups sind das Boring Infrastructure-Problem, das jeder hat und das die meisten falsch lösen. Ich wollte etwas, das ich verstehe, kontrolliere und ohne externe Abhängigkeiten betreiben kann.

## Was es macht

Die Scripts erstellen verschlüsselte Backups und übertragen sie per SSH auf einen Remote-Server. Kein Cloud-Service, kein proprietäres Format – nur GPG-Verschlüsselung und rsync-Logik in lesbarem Shell-Code.
