---
title: Wireless Blasting Initiation System
shortTitle: Wireless Blasting Initiation
summary: Safety-critical wireless detonation units on ESP32 with mesh networking, for more precise blast timing in mining.
period: Aug 2023 – Jul 2024
affiliation: University of Mines and Technology
supervisor: Dr. Thompson Brantson
funding: Ghana Chamber of Mines
role: Research Assistant. I built the PCB-based detonation units and their safety-critical firmware, and contributed to patent-related documentation.
order: 3
heroImage: ../../assets/images/projects/wireless-blasting/hero.jpg
heroAlt: 'Exterior enclosure concept for the handheld ESP32 control unit: a rugged dark-grey enclosure with blue grips, a key switch, a continuity-status display, a status LED, a check button and two terminal posts, shown front-on and held in a hand'
cardImage: ../../assets/images/projects/wireless-blasting/card.jpg
cardAlt: Exterior enclosure concept for the handheld ESP32 control unit, with a key switch, continuity-status display and check button
highlights:
  - PCB-based wireless detonation units on ESP32 with mesh networking.
  - Safety-critical firmware with fail-safe behaviour on loss of communication or power.
  - Contributed to patent-related documentation.
results:
  - Reduced inter-hole delay error by 40% in field tests.
tags: [ESP32, Mesh networking, PCB design, C/C++ firmware, Safety-critical systems]
links: {}
# TODO: add links / video when available
---

## System

Each unit is a custom PCB built around an ESP32. The units communicate over a mesh network, so blast sequencing does not depend on wired initiation.

## Safety

The firmware is safety-critical. It is designed to fail safe if communication or power is lost.

## Results

In field tests, the system reduced inter-hole delay error by 40%. The project was funded by the Ghana Chamber of Mines.
