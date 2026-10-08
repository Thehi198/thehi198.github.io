---
title: "SpaceGrid: networking for spaceborne grid compute"
date: 2023-01-15
role: Independent research
order: 5
featured: false
abstract: "Proposed a laser-linked backplane for satellite compute constellations, with FFT-based multi-channel transmission and locally topology-sensitive A* routing."
tags: [Space, Research]
image: /assets/images/spacegrid.webp
image_alt: Concept render of a satellite constellation
image_caption: Concept render. Each satellite acts as a compute rack; the constellation is the data center.
---
## Abstract
236 terawatt hours. That is how much power data centers consumed in 2021. From YouTube to Netflix, Wikipedia to ChatGPT, almost every application we rely on today uses cloud computing as its backbone. The need for cloud data centers is growing exponentially. An average datacenter of 50,000 Sq Ft. consumes 5 Megawatts of power. This is enough to power 5,000 homes. Even with renewable energy options expanding, the demand cannot keep up with the supply. This is not sustainable.

What if cloud resources were placed in outer space? In parallel to the growth in cloud computing usage, space technology has progressed wherein we are able to get ground speed bandwidth through satellite constellations, as SpaceX has proved.

Space has an unlimited supply of solar power and passive cooling solutions. The cost of satellite production, launch, and constellation technology is dropping down to approx. $100/satellite. This opens the possibility for a new solution that I have termed SpaceGrid.

In the SpaceGrid, individual satellites will function as compute racks and a constellation as a datacenter. The vision of SpaceGrid is to prove that compute nodes can be interlinked with laser-driven network backplanes. The one critical element that needs to be addressed to build the SpaceGrid is a low latency, high bandwidth network backplane that interlinks the satellite constellation.

To address this problem, I will develop a network of compute nodes on earth with commercial off-the-shelf (COTS) components, which are connected by laser edges. In this grid, data is transmitted via laser diodes and photovoltaic receivers, using a Fast Fourier Transform-based algorithm. In my model, the transmissions are routed using a Local Topology Sensitive Network. I will develop the algorithm to provide low latency and high bandwidth interconnectivity. This algorithm has the potential to be implemented at an industrial scale. Developing laser edge transmission and networking will enable space-borne grid computing and thereby lower surface energy consumption.

## Motivation and approach
### Problem
Cloud services currently consume 1% of the global energy capacity. (Pesce, 2021). In the next few decades, cloud services will only grow exponentially, as resource-intensive applications such as cryptocurrency, artificial intelligence, genomics, and computational sciences continue to grow. For example, Oracle Cloud Infrastructure, the smallest of the four hyper-scale providers expects a 4x growth in the next 5 years. (Oracle, 2022) Since 2012, Moore's law has enabled power-efficient chips to grow at a steady rate. However, this is coming to an end as chip manufacturers are reaching physical limits in transistor density. Chip density cannot scale at the same rate as energy demand. Growth in cloud services far exceeds growth in energy production.    Bloomberg estimates that by 2030, cloud services may take up to 8% of global energy capacity. (Bass et.al 2017). With such a rapid increase in energy demand, it is not feasible to scale the current grid to reach this capacity even if energy production is doubled every year. Continuing to grow cloud data centers on earth-based grids is no longer feasible in the foreseeable future.

### Current solutions
To manage the cloud industry’s power consumption, one current solution is to increase CPU density. CPU density packs more compute capacity into a single silicon, Dynamic Voltage Frequency (DVF) where CPUs that are idle are shut down and power is throttled for CPUs with low utilization. (Mastelic et al., 2015) In addition, Virtualization, where the same CPU cores are shared with multiple virtual servers, ensures improved utilization from <10% to >50%.

Between 2012 and now, while the compute capacity has quadrupled to over a billion active cores over the past decade, the power consumption by data centers has only grown by 20% - 30% (Masanet et al., 2020). This is because of Moore’s Law. However, Moore’s Law will hit its limit over the next decade. Denser Cores and Virtualization will no longer proportionally decrease power consumption.

In parallel, space technology has progressed offering us a viable alternative. For example, SpaceX through their Starlink constellations and Starship launch platform is bringing down the cost of manufacturing and launching satellites to near-earth orbits to about $10 per KG (Are Space Scientists, 2022). MIT Lincoln Laboratory recently demonstrated a sustained throughput of 100 Gbps from space to earth with laser, TBIRD (Communications System, 2022). Other factors like power and cooling have already been solved in space as seen on large GTO satellites and the ISS.

My solution builds on these innovations to enable data centers in space. More specifically, my solution addresses intra-satellite communication with lasers. Satellites can harvest the abundance of solar power to power micro-satellites that essentially act as data center racks. The primary challenge is interconnecting these satellites into a data center grid, similar to how data centers are built on Earth. My project will demonstrate how to connect the grid with a laser in space, with a focus on the key technologies of laser data transmission and high-level network routing.

## Proposal

I propose to implement a networking layer of protocol and routing optimizations for data transmission within a satellite constellation, using laser technologies.

### Hardware test environment

For testing purposes, I plan to build a network of computing and storage with COTS components to emulate satellites. I plan to test the reliability of transmissions, throughput, and latency. My plan is to use a network of Arduino boards as computing & storage nodes. I will connect these nodes through a laser diode and a photovoltaic cell as a receiver. The system will be powered through the Arduino board. First, I will use a potentiometer to modulate the current source and intensity in the laser diode. The Photoresistor will detect the spike in voltage, when it receives a signal from the laser diode and correlate it to a pulse.

### Transmission

I plan to use Fast Fourier Transform (FFT) based algorithm for data transformation between nodes.

A laser can provide high throughput over long distances, as proven by MIT’s TBIRD, it is limited to single-bit transmission - “on” represented by a high-intensity pulse and “off” by a low-intensity pulse. This is highly inefficient, especially for large-scale data transmissions, typical in a data center backplane.

I propose modulating the intensity of the laser (regulated by a potentiometer) on the emitter, with which the receiver detects the intensity over a given time interval. Each packet can be encoded using a Frequency Shift Key (FSK) which transmits the digital signal on an analog carrier wave. A composite waveform of each FSK packet can be transmitted to which a FFT can be applied on the receiver to split the waveforms. This enables the transmission of multiple bits in the same packet and by extension multiple channels of communications

One drawback of this method is that the order of bits is lost. I propose to solve this problem by transmitting packet headers with the order of the bits in each transmission.

### Networking

For networking, I plan to use a Local Topology Sensitive Network (LTSN) routing algorithm.

Datacenters typically need high throughput and low latency over short distances. Internode traffic is usually within a single domain. Traffic usually passes through a handful of nodes. LTSN with a localized A* search combined with dynamically balanced partitioning will help me achieve this.

For this application, network routing needs to be maximized for efficiency, and speed due to the large data transmission. A localized A* search within a dynamically balanced partition addresses this issue.

Each node on the network is aware of all edges and nodes n degrees from it. Within each node’s frame of reference, the topology map has a balanced partition that subdivides the nodes into topology-sensitive subsets (Hu, 2021). Each transmission within the network contains a header that defines the packet address and relative direction of transmission. Within the node, parallel A* searches are conducted to find the optimal path within the frame of reference. Once a solution has been resolved, the packet address is updated with the sub-destination (objective inside the frame of reference) and routed accordingly. The packets are not fully decoded; instead, just the headers are decoded to save time and compute resources.

The key difference between this method vs a homogenous A* or hub and spoke search is that it does not rely on a single subset of nodes to handle data transmission. Instead, each node can act as its own local map, and therefore find the optimal path within its frame of reference much faster than the absolute optimal path. This will enable me to scale my node constellation dynamically.