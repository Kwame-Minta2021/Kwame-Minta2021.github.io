---
title: 'Anidaso: STEM Learning Device for Blind Students'
shortTitle: Anidaso
summary: An audio-first STEM learning device that pairs with a braille keyboard, in a 3D-printed enclosure designed to be repaired locally. “Anidaso” means “hope” in Twi.
period: '2025 – present'
affiliation: Ashesi University
funding: EPICS in IEEE grant (Jon C. Taenzer Memorial Fund, IEEE Foundation)
role: Project Lead. I am responsible for the technical development, the enclosure design and the project coordination.
order: 5
heroImage: ../../assets/images/projects/anidaso/hero.jpg
heroAlt: CAD render of the front of the Anidaso device, a light grey enclosure with a centre display and a speaker and vent array on each side
gallery:
  - src: ../../assets/images/projects/anidaso/cad-rear.jpg
    alt: CAD render of the rear of the Anidaso enclosure in dark grey, with a recessed port bay and an integrated stand
    caption: Rear, CAD. A recessed bay gives access to the compute module’s USB and network ports, with an integrated stand.
  - src: ../../assets/images/projects/anidaso/prototype.jpg
    alt: A hand holding the first yellow 3D-printed Anidaso enclosure with its display fitted
    caption: Printed prototype. The first full enclosure off the printer, assembled with the display fitted.
highlights:
  - Audio-first learning device that pairs with a braille keyboard. The student writes in braille and listens to the response, while a screen shows the same content for a sighted teacher or classmate.
  - Enclosure holds a single-board computer, a display and a stereo speaker pair.
  - 3D-printed in two parts with fasteners rather than bonded, so a damaged shell can be reprinted on a desktop printer instead of reordered from abroad.
  - The compute module is a standard, swappable board, and the ports stay reachable without disassembling the front face.
results:
  - The design has moved from CAD to a printed and assembled prototype.
  - Funded through the EPICS in IEEE programme by the IEEE Foundation under the Jon C. Taenzer Memorial Fund.
limitations:
  - Work in progress covers the braille keyboard pairing, the audio interface and classroom testing with students and teachers, which is the part that will decide whether the design holds.
tags: [Assistive technology, CAD, 3D printing, Single-board computer, Audio interface, EPICS in IEEE]
links: {}
# TODO: add links and a video when available
---

## The problem

Blind students in Ghanaian schools are routinely excluded from science and mathematics long before university. The material is delivered visually, assistive hardware is imported and expensive, and a device that cannot be repaired locally stops being used the first time it breaks. The gap is not ability. It is access to a tool the student can actually keep working with.

## Design decisions

**Audio first, not screen first.** The display is secondary. The student works through braille input and speech output, while the screen keeps a teacher or peer in the same activity rather than running a separate one. This came from the same lesson as an earlier project of mine, a sensing module that clips onto an ordinary white cane instead of replacing it, which finished as first runner-up in the National Disability Inclusive Hackathon. People who use assistive tools already have practices that work. A new device should attach to those practices rather than ask the user to abandon them.

**Pairing with a braille keyboard rather than replacing it.** Many students are already trained on braille input hardware. Pairing with it keeps the learning curve on the content rather than on the device.

**Built to be repaired here.** These are the same constraints that shape the open-hardware robot platform I work on at Ashesi, and they come from the same place: imported replacement parts can cost a student an academic year.

## Next steps

The intention is to document and release the design so that schools and other groups can build and repair their own units.
