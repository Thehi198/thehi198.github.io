---
title: "PIE-GS: satellite ground station"
date: 2025-12-19
role: Azimuth lead
org: Principles of Integrated Engineering
order: 1
featured: true
abstract: "Designed, built and tested a ground station that downlinked weather imagery from NOAA GOES-19, integrating a 1 m reflector, a custom RF front end and an azimuth-elevation mount driven by a custom orbital element solver."
tags: [Space, Mechanical, Mixed-Signal]
image: /assets/images/pie-gs/team.jpg
image_alt: The four team members standing on the lawn beside the finished ground station
image_caption: The team with the finished ground station.
---
We designed, manufactured and tested a parallelized integrated satellite ground station for the GOES series of satellites. The integrated system downlinked weather imaging data from NOAA GOES-19. It combines a 1 m reflector, a custom RF front end, and an azimuth-elevation mount, all pointed by a custom orbital element solver.

**Collaborators:** *Charlie Sands, Sam Mazlish, Joseph Vazhaeparampil*

{% include figure.html src="/assets/images/pie-gs/station.jpg" alt="Ground station on its pallet base, dish angled skyward on a campus path" caption="The integrated ground station deployed outdoors." wide=true %}

## Downlinked imagery

{% include figure.html src="/assets/images/pie-gs/full-disk.jpg" alt="Full-disk image of Earth from GOES-19" caption="Downlinked full-disk image." %}

{% include figure.html src="/assets/images/pie-gs/eastern-seaboard.jpg" alt="Satellite image of the US eastern seaboard under cloud cover" caption="Downlinked image of the eastern seaboard." %}

## Build

### Elevation mechanism

{% include figure.html src="/assets/videos/pie-gs/elevation-load-test.mp4" alt="Video of the elevation mechanism prototype under load" caption="Load testing of the elevation mechanism prototype." %}

{% include figure.html src="/assets/videos/pie-gs/elevation-integrated-test.mp4" alt="Video of the elevation mechanism moving in an integrated test" caption="Integrated test of the elevation mechanism." %}

{% include figure.html src="/assets/images/pie-gs/milling.jpg" alt="Part clamped in a milling machine vise" caption="Milling parts for the elevation mechanism." %}

{% include figure.html src="/assets/images/pie-gs/tapping.jpg" alt="Team member tapping holes in a plate on a drill press" caption="Tapping holes for the azimuth stage." %}

{% include figure.html src="/assets/images/pie-gs/elevation-assembly.jpg" alt="Kneeling on a workbench assembling the mount on the pallet base" caption="Assembly of the elevation mechanism." %}

{% include figure.html src="/assets/images/pie-gs/az-el-mount.jpg" alt="Azimuth-elevation mount on the pallet base without the dish" caption="Integrated azimuth-elevation mount." %}

### RF front end

{% include figure.html src="/assets/images/pie-gs/rf-frontend.jpg" alt="RF board mounted at the feed point in front of the reflector" caption="Custom RF front end with a frequency synthesizer, filters and amplifier." %}

### Reflector

{% include figure.html src="/assets/images/pie-gs/prototype-reflector.jpg" alt="Laser-cut plywood prototype reflector on a workbench" caption="Prototype reflector, built to validate the reflector simulations (laser-cut plywood)." %}

{% include figure.html src="/assets/images/pie-gs/welded-reflector.jpg" alt="Welded steel ring frame of the reflector on a welding table" caption="Final welded reflector (TIG, steel). Steel was chosen for its strength and stiffness." %}

{% include figure.html src="/assets/images/pie-gs/prototype-test.jpg" alt="Team testing the prototype reflector on a campus path with a laptop" caption="Initial testing of the prototype reflector, using a COTS amplifier and a HackRF SDR running GNU Radio." %}

{% include figure.html src="/assets/images/pie-gs/satdump.jpg" alt="Team seated outdoors around a laptop beside the prototype reflector" caption="Pointing with azimuth and elevation from the orbital solver; decoding in SatDump." %}

## Photos

{% include figure.html src="/assets/images/pie-gs/integrated-test.jpg" alt="The ground station at night on a snowy field" caption="Integrated system test." %}

{% include figure.html src="/assets/images/pie-gs/builders-plate.jpg" alt="Engraved builders plate on the mount column" caption="Builders plate." %}

{% include figure.html src="/assets/images/pie-gs/olin-mural.jpg" alt="The ground station in front of the Olin College of Engineering mural" caption="Mural." %}
