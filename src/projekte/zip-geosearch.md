---
layout: ProjektLayout.11ty.jsx
title: ZIP GeoSearch
date: 2020-03-01
image: /assets/img/zipsearch.png
description: Eine dockerisierte REST-API für schnelle Postleitzahl-Distanzsuchen in Deutschland.
link: https://github.com/mahaupt/zip_geosearch
tags:
  - Go
  - Docker
  - REST API
---

## Warum

Ich brauchte für ein anderes Projekt eine schnelle Möglichkeit, alle Postleitzahlen innerhalb eines bestimmten Radius um einen Ort zu finden. Fertige Dienste waren entweder zu langsam, kostenpflichtig oder hatten keine vernünftige API. Also hab ich das selbst gebaut.

## Was ich gelernt habe

Dass Geo-Distanzberechnungen auf dem Erdradius ganz schön tricky sind, wenn man sie wirklich performant machen will. Das Dockerisieren des Dienstes hat mir gezeigt, wie wertvoll ein sauber definiertes Interface ist – ich konnte die API danach in mehreren anderen Projekten direkt wiederverwenden, ohne irgendetwas anpassen zu müssen.
