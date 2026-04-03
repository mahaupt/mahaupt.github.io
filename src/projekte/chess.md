---
layout: ProjektLayout.11ty.jsx
title: Chess Engine
date: 2015-06-01
image: /assets/img/chess.jpg
description: Ein Schach-Bot in C++ mit Alpha-Beta-Pruning und einem eigenen Client.
link: https://github.com/mahaupt/chess
tags:
  - C++
  - Algorithmen
  - KI
---

## Warum

Schach-Engines sind ein klassisches Informatik-Problem – und eines, das ich wirklich verstehen wollte, nicht nur konsumieren. Alpha-Beta-Pruning ist in jedem Algorithmen-Buch beschrieben, aber es selbst zu implementieren ist eine andere Sache.

## Was ich gelernt habe

Wie viel Unterschied eine gute Bewertungsfunktion macht. Der eigentliche Suchalgorithmus ist schnell gebaut, aber den Bot wirklich stark zu machen erfordert tiefes Domänenwissen über Schach-Positionsbewertung. Ich hab auch gelernt, wie viel langsamer naives Minimax ohne Pruning ist – der Unterschied im Vergleich zu Alpha-Beta ist dramatisch spürbar.
