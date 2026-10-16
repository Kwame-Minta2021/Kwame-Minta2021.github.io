---
title: Edge AI for Crop Disease Detection
shortTitle: Edge AI Crop Disease Detection
summary: Real-time crop disease detection with TensorFlow Lite on a Raspberry Pi 4, plus a cloud pipeline designed for unreliable rural links.
period: Nov 2023 – Jun 2024
affiliation: Agri-IoT Lab, University of Mines and Technology
supervisor: Dr. Emmanuel Effah
role: Research Assistant. I deployed the on-device models and built the cloud data pipeline.
order: 4
heroImage: ../../assets/images/projects/edge-ai-crop-disease/hero.jpg
heroAlt: 'System architecture in three steps: a field camera captures close-up leaf images; a Raspberry Pi 4 runs a TensorFlow Lite model to flag possible disease and saves records to a local queue; queued records sync to cloud storage and a dashboard when connectivity returns, and the device receives validated model updates'
cardImage: ../../assets/images/projects/edge-ai-crop-disease/card.jpg
cardAlt: System architecture for edge crop-disease detection, from field camera to Raspberry Pi to cloud dashboard
gallery:
  - src: ../../assets/images/projects/edge-ai-crop-disease/architecture.jpg
    alt: 'System architecture: capture with a field camera, detect locally on a Raspberry Pi 4 with TensorFlow Lite and queue results, then sync to the cloud over an intermittent connection'
    caption: 'System architecture: capture, detect locally, sync when connected. Detection continues offline; queued records upload when connectivity returns.'
    wide: true
highlights:
  - TensorFlow Lite CNNs on a Raspberry Pi 4 for real-time detection within on-board compute and power limits.
  - AWS IoT Core and DynamoDB pipeline over MQTT, designed for unreliable rural links.
results:
  - Pipeline processes 10,000+ sensor readings per day.
tags: [TensorFlow Lite, Raspberry Pi 4, CNN, AWS IoT Core, DynamoDB, MQTT, Edge deployment]
links: {}
# TODO: add links / video when available
---

## On-device detection

Convolutional neural networks run on a Raspberry Pi 4 through TensorFlow Lite. Detection happens in real time on the device, within its compute and power limits.

## Data pipeline

Sensor data travels over MQTT to AWS IoT Core and is stored in DynamoDB. The pipeline handles more than 10,000 sensor readings per day over unreliable rural links.
