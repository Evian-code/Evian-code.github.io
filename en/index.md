---
layout: page
title: Home
lang: en
---

# Welcome to {{ site.lab.name }}

{{ site.lab.name }}

## Research Areas

Our research covers the following main areas:

- **Machine Learning**: Deep learning, reinforcement learning, transfer learning
- **Computer Vision**: Image recognition, object detection, medical image analysis
- **Natural Language Processing**: Text understanding, machine translation, dialogue systems
- **AI Applications**: Intelligent healthcare, autonomous driving, smart manufacturing

## Latest News

### Recent Publications

{% for pub in site.data.publications.papers limit:3 %}

- **{{ pub.title }}** - {{ pub.authors }} ({{ pub.year }})
  {% endfor %}

### Upcoming Events

- March 15, 2024: Lab Open Day
- April 20, 2024: AI Academic Symposium
- May 10, 2024: Student Thesis Defense

## Join Us

We welcome excellent graduate students and postdocs to join our team. If you are interested in our research, please check our [Join Us](/en/join-us/) page for more information.

## Contact

- **Address**: {{ site.lab.address }}
- **Phone**: {{ site.lab.phone }}
- **Email**: {{ site.lab.email }}
