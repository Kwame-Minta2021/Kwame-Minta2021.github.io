---
title: Adaptive Prosthetic Control and Gesture Interface
shortTitle: Adaptive Prosthetic Control
summary: A gesture-recognition interface and adaptive reinforcement-learning controller for upper-limb prosthetics, evaluated with amputee participants.
period: Oct 2024 – Aug 2025
affiliation: Assistive Technology Lab, University of Ghana
supervisor: Dr. Millicent Agangiba
role: Research Assistant and team lead. I led a team of four, built the gesture interface and adaptive controller, and designed and ran the human-in-the-loop studies.
order: 2
heroImage: ../../assets/images/projects/prosthetic-gesture-interface/hero.jpg
heroAlt: Annotated view of the wearable prosthetic arm, showing the padded socket, adjustable straps, servo compartment and tendon routing to the 3D-printed hand
gallery:
  - src: ../../assets/images/projects/prosthetic-gesture-interface/fig-01-wearable-assembly.jpg
    alt: 'Figure 01, wearable assembly: the prosthetic arm with labelled padded socket, adjustable straps, servo compartment and tendon routing, with close-ups of the socket and a finger hinge'
    caption: 'Wearable assembly: padded socket, adjustable straps, servo compartment and tendon routing to the fingers.'
    wide: true
  - src: ../../assets/images/projects/prosthetic-gesture-interface/fig-03-gesture-interface.jpg
    alt: 'Figure 03, gesture interface and electronics: a camera feeds a laptop running hand-landmark gesture processing, which sends control commands to the controller board on the arm; servos are powered by an external supply'
    caption: 'Gesture interface and electronics: camera input, gesture processing, control commands to the arm controller, servo actuation and an external servo power supply.'
    wide: true
highlights:
  - Led a team of four researchers developing assistive robotics for people with upper-limb amputations.
  - ROS 2 and OpenCV gesture-recognition interface for hands-free device control.
  - Deep Q-Network controller implemented in PyTorch.
  - Designed and ran human-in-the-loop studies with amputee participants, covering protocol, data collection and analysis.
  - Integrated human motion and intent cues into the control loop, aligning assistance with user behaviour rather than requiring the user to adapt to a fixed controller.
results:
  - 94% gesture classification accuracy in trials with upper-limb amputee participants.
  - The adaptive controller cut per-user training time by 60% versus a non-adaptive baseline.
tags: [ROS 2, OpenCV, PyTorch, Deep Q-Network, HRI, Human-in-the-loop]
links: {}
# TODO: add links / video when available
---

## System

The interface uses ROS 2 and OpenCV to recognise user gestures. A Deep Q-Network controller written in PyTorch adapts to each user, cutting per-user training time by 60% compared with a non-adaptive baseline.

## Human-in-the-loop studies

I designed and ran studies with upper-limb amputee participants. The gesture interface reached 94% classification accuracy in these trials.

## An honest observation

Some adaptive updates seemed to disrupt strategies participants had just learned. This was not formally measured, but it raised a question I care about: when should an adaptive system hold still so that its user can keep up?
