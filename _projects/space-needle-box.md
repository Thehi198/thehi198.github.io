---
title: "Space Needle box"
date: 2025-02-07
org: Mechanical Prototyping
order: 4
featured: false
abstract: "A laser-cut plywood box inspired by Seattle's Space Needle, with orthogrid cutouts and interlocking parts that assemble without glue."
tags: [Mechanical]
image: /assets/images/space-needle/final.jpg
image_alt: Finished plywood Space Needle box on a grey backdrop
image_caption: The finished box.
---
For my Mechanical Prototyping box project, I made a box inspired by the Space Needle, an iconic building in my hometown of Seattle. I designed it in Onshape and cut it on the Helix laser cutter from 1/4 in plywood. The design uses orthogrid cutouts and interlocking parts that evoke the Space Needle's floating structure. Over several iterations I refined the tolerances, fastener choices and sweep geometry to reach a seamless, structurally sound form.

**Skills:** *Onshape, laser cutting, geometric dimensioning and tolerancing, design for manufacturing*

## Requirements

The assignment asked for a box with:

1. 5 different types of joints
2. 4 different fasteners
3. All parts machined on the Helix laser cutter
4. One provided 18 × 24 in sheet of plywood
5. Inspiration from a location

I added two requirements of my own:

1. It does not obviously look like a box.
2. It evokes a real object that is distinctly Seattle, my hometown.

{% include figure.html src="/assets/images/space-needle/exploded-cad.jpg" alt="Exploded CAD view of the box assembly" caption="Exploded view of the CAD." %}

## Design goal

I wanted the box to borrow the architectural elements of the Space Needle and push my style toward simplicity of form. I also wanted every element to fit together like Lego: the box should assemble without glue, with glue used only for final finishing.

{% include figure.html src="/assets/images/space-needle/top-view.jpg" alt="Looking down into the open box" caption="Top view looking into the box." %}

## Result

I naturally gravitate toward minimalist forms, drawing on the construction and fit of the models I built growing up. This project let me refine that style further.

The Space Needle's designers aimed for the illusion of a spacecraft suspended in the air by an impossibly small base and pillars. As a nod to Seattle's aerospace industry, they used [isogrid](https://en.wikipedia.org/wiki/Isogrid) trusses, a high strength-to-weight structure found in aircraft and rockets, in the center rail. Given Seattle's seismic activity, the tower was also engineered to withstand earthquakes of at least magnitude 8.

I wanted my model to capture the same feeling. I iterated on the sweep struts four times, twice in cardboard and once in wood, before settling on the final geometry. Following the real tower's aerospace-style structure, I cut [orthogrid](https://www.sciencedirect.com/science/article/abs/pii/S2214785323027050) pockets (an evolution of isogrid developed in the 2010s) into the center rail. These details make the model seem to float above the ground.

The project also let me build on the design principles I took from the models I enjoyed as a child.

First, every component should fit together like Lego. The core structure interlocks precisely and needs no glue, though I glued it for reliability. Every part has centering features, so assembly needs no measuring. The fasteners are screws, bolts, dowels and nails.

Second, every fastener and joint must serve a purpose. I placed joints to balance structure and design. For example, tab joints connect the sweeps to the upper box, and each sweep tab also centers two layers of the box, which makes assembly seamless. The joints are dovetail, mortise and tenon, finger, tab, and dowel tenon.

{% include figure.html src="/assets/images/space-needle/sketch.jpg" alt="Whiteboard sketch of the Space Needle box with annotated joints" caption="Initial sketch of the general layout." %}

{% include figure.html src="/assets/images/space-needle/laser-cutting.jpg" alt="Cut plywood parts on the bed of a Helix laser cutter" caption="Lasering the first iteration on the Helix laser cutter." %}

{% include figure.html src="/assets/images/space-needle/center-rail.jpg" alt="Partially assembled center rail standing on the base" caption="Building the center rail. The whole assembly stands without glue." %}

{% include figure.html src="/assets/images/space-needle/dry-fit.jpg" alt="Assembled box on a workbench before gluing" caption="Final assembly. The only fasteners are a single screw on an angle bracket and three nails. I reassembled everything with glue afterward for structural integrity." %}

## Challenges

### Tolerancing

My first iteration didn't fit together. I assumed my tolerances were off, but the confusing part was that planar joints fit fine while perpendicular joints did not.

{% include figure.html src="/assets/images/space-needle/joint-fit.jpg" alt="Interlocking plywood parts that do not seat fully" caption="Perpendicular joints on the first iteration." %}

{% include figure.html src="/assets/images/space-needle/rail-fit.jpg" alt="Center rail piece with slots next to loose tabs" caption="Center rail slots that would not accept their tabs." %}

After several iterations I found the cause: my Adobe Illustrator import was scaling the laser file down by exactly the error I had measured.

### Fastener dimensions

I had to change fasteners after manufacturing because, with my tolerances, the fasteners ended up larger than I expected.

{% include figure.html src="/assets/images/space-needle/fasteners.jpg" alt="Assembled box on a desk with the lid set aside" caption="Fitting fasteners after the first build." %}

{% include figure.html src="/assets/images/space-needle/lid-off.jpg" alt="Box with its lid removed beside it" caption="Box with the lid off. A concentric plate on the lid centers it on the top for a seamless fit." %}

{% include figure.html src="/assets/images/space-needle/lid.jpg" alt="Hand holding the round lid showing its centering plate" caption="The lid and its centering plate." %}

I redesigned around the measured fastener sizes rather than the nominal ones, which made my tolerances far more accurate.

### Sweep design

My early sweeps had structural problems. The first iteration had a truss inside the sweep, but the walls were too thin and broke easily under load.

{% include figure.html src="/assets/images/space-needle/sweep-v1.jpg" alt="Thin curved plywood sweep with internal truss" caption="First iteration of the sweep." %}

{% include figure.html src="/assets/images/space-needle/sweep-iterations.jpg" alt="Several curved sweep iterations laid side by side" caption="Sweep iterations." %}

{% include figure.html src="/assets/images/space-needle/sweep-cad.jpg" alt="CAD view of a single curved sweep" caption="Sweep in CAD." %}

{% include figure.html src="/assets/images/space-needle/with-sweeps.jpg" alt="Assembled box with all sweeps attached on a desk" caption="Final assembly with sweeps." %}

I redesigned the sweeps without the trusses. The simpler, cleaner form fit my design goal better.
