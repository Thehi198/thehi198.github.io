---
title: "Analysis of Power Distribution Hub Failure at PNW Block Party 2022"
date: 2022-10-29
description: "A brief description of the project."
header:
  image: assets/images/PDH.webp
  teaser: assets/images/PDH.webp
categories:
  - portfolio
tags:
  - robotics
  - electrical
---
October 29, 2022

On Saturday, October 29th at the PNW Block Party Offseason Competition, FRC 7461 experienced a major failure of the Power Distribution Hub. This was the leading cause of FRC 7461’s sub-optimal performance.

This report explains the events that took place, provides tangible action items to avoid such events in the future and concludes the root cause of the issue. **This report does not place the burden of responsibility on any individual or sub-team and should not be interpreted as such.**

# Timeline of Events

## Pre - Competition

### **July/August — Design of the Robot**

@Aaditya Rao and @Hitesh m are not available during the robot design phase. @Aaditya Rao gives preliminary electrical input in early august and raises concerns regarding the indexing motor passing the belly pan perimeter. Concerns are also raised about the placement of the circuit breaker. 

### **9/10/22 Initial Control System Wiring**

@Hitesh m and @Aaditya Rao wire control system. They experience issues with wiring power into the Power Distribution Panel due to lack of space and its proximity to the Back Left Swerve Module. Other issues experienced include loose mounting wires caused by a lack of a patterned belly pan. Indexing motor concerns are also brought up. 

### **10/4/22 — Circuit breaker mounted**

@Aaditya Rao mount the circuit breaker to the Delrin compression panels. 

### **10/8 — PNW Girls Generation**

The electrical system experienced zero failures.  @Aaditya Rao conducts electrical systems check on the morning of 10/9 and does not see any issues.

### **10/20/22 —  Climb Wiring**

@Aaditya Rao conduct an electrical systems check during climb wiring. @Aaditya Rao does not see any issues with the battery ground wire. 

### **Week of October 24th — Prog Testing and Drive Practice**

Programming and Drive Teams test and practice with the robot. Some wiring comes loose but no electrical systems check is conducted. 

## In - Competition

### **Load-in**

- Bellypan is removed to replace the tread on swerve modules. The back Left module is worked on close to the PDH

### **Practice** **Match 1**

- No electrical issues are experienced

### **Quals Match 1**

- No Electrical Issues

![quals_1.png](/assets/images/quals_1.png)

### **Quals Match 8**

- breaker pops -1:10
- Pit Crew Concludes that the rouge ball popped the breaker
- Pit Crew Places Duct Tape ring around breaker for protection

![quals_8.png](/assets/images/quals_8.png)

### **Quals Match 12**

- breaker pops -41
- FTA Recommends Circuit Breaker Swap
- Not enough time between matches
- IRS recommends re-characterizing the current limit

![quals_12.png](/assets/images/quals_12.png)

### **Quals Match 16**

- Breaker pops -35
- Pit Crew Replaces Circuit Breaker
- No electrical systems check due to time constraint

### 🚭 **Quals Match 19**

- Intake malfunctioned during auto
- Heavy Defense by 4911
- 4911 slotted under 7461
    
    ![Untitled](/assets/images/Untitled.png)
    
    
- Robot disables at 1:30
- The robot comes online at 2:31
- The robot combusts at 2:32
    
    ![sushi_smoke.png](/assets/images/sushi_smoke.png)
    

![quals_19.png](/assets/images/quals_19.png)

- Post Match Electrical Inspection
    - Ground Wire loose from PDH
    - Power Wire metal shavings causing a short circuit between power and ground
    - Melts motor power wiring around the short
    
    
- Pit Crew Electrical Team (@Aaditya Rao, @Hitesh m) splice power cables and replace them as necessary
- PDH/ports are not fully inspected
- The ground wire is placed back into the port after the splice
- Electrical Systems check and subsequent intake testing are successful

### **Quals Match 23**

- Robot Fails on Startup
- The robot restarts but shuts down
- Robot Restarts near the end of the match
- Climb works

![quals_23.png](/assets/images/quals_23.png)

- The problem is suspected to be a current limit issue
- No Electrical Systems Check

### **Quals Match 27**

- Auto is successful
- The robot fails multiple times during the match
- FTA forces inspection of PDH

![quals_27.png](/assets/images/quals_27.png)

- The breaker in the on position does not send power through the system
- PDH has ground wire melted into the system
- Wago connectors break when removing Ground Wire
- Further, inspection shows previously molten material inside the wago connectors
    
    ![0700DB93-1477-4750-A52E-3836F2552791.jpg](/assets/images/0700DB93-1477-4750-A52E-3836F2552791.jpg)
    

---

# Analysis

To understand the root cause of PDH failure, it is important to understand the electrical system architecture. Power and Ground wires from the battery route into the PDH. The power wire is spliced by the Circuit Breaker while the ground wire is directly routed into the PDH. During battery replacement, both wires are tensioned. The power wire is mounted on the circuit breaker rendering it immune to said tension. However, the ground wire places direct tension onto the PDH port. Previous generation distribution panels (CTRE PDP) use a nut and washer assembly to mount the ground wire which is far more resilient to external forces. The PDH, in contrast, used WAGO connectors which function based on metallic cage clamps exerting force onto the wires. This system does not have a bolt preventing unsanctioned removal. Over multiple battery replacements, the ground wire can be slipped out of the port.

This was the most likely cause. The lack of thorough electrical inspections did not help in any regard. It is likely the case that the robot entered Block Party with loose wires.

Additionally, after the practice match, or quals 1, the battery replacement may have been aggressive causing the wires to further shift out of the WAGO connectors. 

By match 8, the robot was experiencing issues with the breaker tripping. The likely cause was a minor short circuit between the power and ground wires. It was small enough to be undetectable but large enough to cause the breaker to trip. 

Breakers are designed so that the threshold for tripping lowers each time it trips. For this reason, breakers tripped in subsequent matches. 

The pit crew replaced the breaker before match 19 but did not inspect the PDH directly after. The power wire may have slipped out further in the instance. In match 19, the robot was heavily defended by 4911. During this, 4911 slipped under the robot and caused the ground wire to shift more causing a large short circuit. This melted through other power wires causing a fire.

After this match, Pit Crew replaced the wiring but failed to inspect the PDH due to time constraints and the fact that the PDH was buried underwires. The Pit Crew failed to notice molten residue left inside the port and instead mounted the wires back into the WAGO port. This meant that the ground wire did not have a proper connection to the PDH and was not mounted. over the next two matches, the robot experience power loss as the wire shifted from contact. 

In match 27, the wire likely caused a short circuit that melted through the plastic casing on the WAGO connections.   

---

# Oversights

## **Design**

1. The Design did not include any electrical considerations other than the battery placement and component mounting. 
2. Components on the electrical board were not placed until the design had been finalized. 
3. The electrical subteam was not kept in the loop during the design process (members were absent). 
4. Bellypan and electrical board were made of flex poly making damage to the electrical system during heavy defense easy. 
5. Bellypan was smoked poly so it had to be removed for every inspection leading to hesitation/time delay for full systems check. 

## **Mechanical/Pit Crew**

1. During battery mounting, stress is placed on the connections to the PDH.
2. Electrical fixes were not necessarily prioritized in pits. 

## **Electrical**

1. Wiring was not planned well (in conjunction with design). 
2. Not all electrical cables were tensioned.
3. Power and Ground wiring were not expected to slip — no effort was made to tension them. 
4. Lack of cohesive systems check. 
5. Lack of frequent systems checks.
6. PDH breaker and CAN layout not recorded or updated. 
7. Wire- protection was not used as extensively as needed.
8. Hot glue for mounting was not used extensively.

## **Organization**

1. Electrical was given minimal time during robot wiring. 
2. The electrical subteam has only 3 official members. 

## **Drive Team/Programming**

1. No cohesive drive or testing logs led to a lack of contextual data. 
2. [Battery mounting](https://www.notion.so/Analysis-of-Power-Distribution-Hub-Failure-at-PNW-Block-Party-2022-b6fe6d1d60da41e7aba4bf4783f150cc?pvs=21)

## **Business**

1. Electrical was not necessarily prioritized in the budget leading to a lack of spares.

---

# Recommended Optimizations

## **Design**

1. Components need to be placed on the CAD. 
2. The wiring needs to be taken into consideration. 
3. The electrical board needs to be diamond-shaped. 
4. The electrical system needs to be better protected (Rigid Poly or integrated electrical)
5. if a belly pan is used, it needs to be transparent. 
6. Prebuilt electrical board and drivetrain?

## **Electrical**

1. Plan electrical in advance in conjunction with the design
2. Tension all cables
3. Make a cohesive electrical inspection checklist
4. Inspect electrical frequently and between every match
5. Protect all cables 
6. Hot glue all connections
7. Record circuit breaker, ports and can layout

## **Pit Crew/Drive Team/Programming**

1. Better battery mounting procedure
2. Prioritize Electrical in pits

---

# Conclusion

This report concludes that the direct cause of PDH failure was due to a combination of gradual degradation of ground wire connection integrity, along with heavy shock and stress experienced during [PNW Block Party 2022 Match 19](https://www.thebluealliance.com/match/2022wamc_qm19). Further failure was caused by the lack of time, organization, and extensive inspection procedures in the pit leading to greater damage in the PDH.

It also concludes that the indirect cause of PDH failure is poor electrical considerations in design, improper battery mounting procedures, and lack of extensive inspection procedures. 

This report details recommended optimizations to multiple processes to prevent both the direct and indirect causes of PDH failure.