---
title: 'ARAP: Ashesi Robot Application Platform'
shortTitle: ARAP
summary: A 1.55 m, 42 kg open-hardware differential-drive research robot, built to be repaired with hand tools and local stock, and the platform where I first saw a robot lose its senses to its own power system.
period: Nov 2025 – present
affiliation: Ashesi University
supervisor: Dr. Ayorkor Korsah
role: Hardware lead. I lead hardware development (the custom ATmega2560-compatible controller board, power distribution and protection, motor-driver subsystems, sensor integration and thermal design) and the multi-sensor fusion pipeline, and I develop the ROS 2 navigation stack.
featured: true
order: 1
heroImage: ../../assets/images/projects/arap/hero.jpg
heroAlt: The assembled ARAP robot photographed from the front and from the rear in a lab, a tall red-panelled differential-drive robot with blue perimeter status LEDs
cardImage: ../../assets/images/projects/arap/robot-front.jpg
cardAlt: The assembled ARAP robot seen from the front in a lab, a tall red-panelled robot with a touchscreen and blue status LEDs
gallery:
  - src: ../../assets/images/projects/arap/controller-board.jpg
    alt: The green ARAP Controller Board V1.0 printed circuit board with rows of labelled sensor headers
    caption: 'ARAP Controller Board V1.0, my design (schematic, layout and firmware). It breaks out 16 ultrasonic, 4 infrared and 6 temperature-sensor headers, three UARTs, an I²C bus, five SPI headers, two encoder inputs, two motor-driver connectors, an LED-strip output and a protected power input.'
  - src: ../../assets/images/projects/arap/cfd-temperature.jpg
    alt: CFD simulation of the drive-base enclosure coloured by component temperature, hottest parts in yellow
    caption: 'CFD, component temperature. Drive-base enclosure at a 30 °C inlet. Predicted maximum 69.98 °C, used to position the two cooling fans.'
  - src: ../../assets/images/projects/arap/cfd-airflow.jpg
    alt: CFD simulation showing coloured air-flow lines passing through the drive-base enclosure
    caption: 'CFD, air velocity. Flow lines through the same enclosure, peaking at 8.72 m/s, used to check that air reaches the converters and drivers.'
  - src: ../../assets/images/projects/arap/robot-front.jpg
    alt: ARAP robot seen from the front, with its touchscreen and LiDAR visible
    caption: Assembled robot, front.
  - src: ../../assets/images/projects/arap/robot-rear.jpg
    alt: ARAP robot seen from the rear, showing the lockable payload compartment
    caption: Assembled robot, rear.
highlights:
  - 'Carries an NVIDIA Jetson Orin NX, a 2D LiDAR, an RGB-D camera, a touchscreen and a lockable 5 kg payload compartment.'
  - Bolted 2020 aluminium-profile structure with 26 CNC-cut composite panels and 44 3D-printed parts, so damaged structure can be recut and replaced with hand tools and locally held stock instead of imported assemblies.
  - Custom ATmega2560-compatible controller board, power distribution with six DC-DC converters, motor drivers and sensor integration.
  - ROS 2 and Gazebo navigation stack with multi-sensor fusion for state estimation.
  - Thermal and power budget for Ghana’s 28 to 35 °C ambient range, with fans and vents placed from a CFD study.
results:
  - 'Diagnosed a hardware-induced perception failure: motor inrush pulled the supply rail down by about 1.5 V and the LiDAR dropped out for roughly 3 s. After mitigation, 50 consecutive dual-motor starts produced no dropout.'
  - A 30-minute run at 70% motor duty, sampling driver heat sinks, converter bodies and the controller board every 5 minutes, held every monitored component at least 20 °C below its limit, consistent with the simulation.
  - Validated indoors on delivery and tour-guiding tasks.
  - Build cost $3,337.75, against roughly an order of magnitude more for the closest commercial platform.
limitations:
  - Validated indoors only. The platform is not sealed against dust or rain and has not been tested outdoors.
  - The 50-start test confirms the fix but does not characterise the transient, since no rail waveform was captured.
  - Thirty minutes is not thermal steady state.
  - Four ultrasonic sensors are fitted, of which the left and right pair are wired in version 1.0, and the 2D LiDAR sees only within its scan plane.
specs:
  - { label: Size, value: '1.55 m tall, 656 × 592 mm' }
  - { label: Mass, value: '42 kg (18 kg base, 24 kg body)' }
  - { label: Power, value: '7S lithium-ion, 55 Ah, 25.9 V nominal, 29.10 V charged, 1.21 kWh usable' }
  - { label: Compute, value: 'Jetson Orin NX 16 GB and controller board at a 40 Hz loop' }
  - { label: Draw, value: '344 W peak, 283 W sustained driving, 115 W compute idle' }
  - { label: Sensing, value: 'YDLIDAR TG30, RealSense D435i, 10-axis IMU, GNSS, ultrasonics' }
  - { label: Runtime, value: '4.3 h driving, 6.0 h mixed duty, 10.5 h compute only' }
  - { label: Drive, value: '188:1 gearmotors, 0.47 m/s, 100 mm clearance, 15° slope' }
  - { label: Pack health, value: '7 mV spread across the seven series groups' }
  - { label: Payload, value: '5 kg lockable compartment, 60 s automatic relock' }
  - { label: Odometry, value: '5% distance error on a single 4 m calibration trial' }
stats:
  - { value: 42, suffix: ' kg', label: robot mass }
  - { value: 1.21, decimals: 2, suffix: ' kWh', label: usable battery energy }
  - { value: 50, label: 'consecutive dual-motor starts, no dropout' }
  - { value: 20, prefix: '≥', suffix: ' °C', label: thermal margin at 70% motor duty }
tags: [ROS 2, Gazebo, Jetson Orin NX, ATmega2560, KiCad, DC-DC converters, Sensor fusion, CFD]
links: {}
# TODO: add links when available, e.g.
# links:
#   github: https://github.com/...
#   paper: https://doi.org/...
# TODO: add a video embed URL, e.g.
# video: https://www.youtube-nocookie.com/embed/VIDEO_ID
---

## Built to be repaired here

ARAP is a 1.55 m, 42 kg differential-drive research robot. The structure is bolted 2020 aluminium profile with 26 CNC-cut composite panels and 44 3D-printed parts. When something breaks, it can be recut and replaced with hand tools and locally held stock instead of waiting for imported assemblies. The build cost was $3,337.75, roughly an order of magnitude less than the closest commercial platform.

## Two findings that shaped my research direction

### 1. Perception lost for an electrical reason

On the first simultaneous start of both drive motors, inrush pulled the supply rail down by about 1.5 V and the LiDAR dropped out for roughly three seconds. No component failed and no code was wrong. A sensor and two motors shared a supply that I had sized on steady-state numbers.

After the mitigation, 50 consecutive dual-motor starts produced no dropout. That confirms the fix but does not characterise the transient, since no rail waveform was captured. The problem that stayed with me was downstream: the state estimator had no way to represent a sensor going silent for hardware reasons, so it treated a power fault like an empty room.

### 2. Thermal limits as a perception problem

The drive base encloses a lithium-ion pack, six DC-DC converters, two motor drivers and the Jetson. It operates in Ghana’s 28 to 35 °C ambient range, above the inlet conditions the reference designs assume. A CFD study placed the fans and vents. In a 30-minute run at 70% motor duty, every monitored component stayed at least 20 °C below its limit, consistent with the simulation.

Thirty minutes is not steady state, though, and a processor that throttles to stay cool degrades perception and planning latency without reporting why.

## Open release

CAD, STL, DXF, the KiCad schematic and Gerbers, firmware, harness drawings, the bill of materials, the CFD model and build documentation are being prepared for release under the CERN Open Hardware Licence, alongside a manuscript in preparation for HardwareX.
