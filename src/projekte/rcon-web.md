---
layout: ProjektLayout.11ty.jsx
title: RCON Web Controller
date: 2018-03-01
image: /assets/img/rcon.jpeg
description: Ein webbasierter Controller für Gaming-Server über das RCON-Protokoll.
link: https://github.com/mahaupt/web_rcon_ctrl
tags:
  - Web
  - Node.js
  - Gaming
---

## Warum

Ich hab damals Game-Server (Minecraft, Source Engine) für Freunde betrieben und wollte nicht jedes Mal SSH aufmachen, um einen Befehl zu senden. Ein Web-Interface, das RCON abstrahiert, war die naheliegende Lösung.

## Was ich gelernt habe

TCP-Socket-Kommunikation in einem Web-Backend und wie man das vernünftig mit WebSockets an ein Frontend weiterschickt – sodass die Ausgabe live erscheint, ohne Polling. Außerdem: Sicherheit bei Admin-Interfaces ist kein Nice-to-have.
