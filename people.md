---
layout: page
title: 团队成员
lang: zh
---

<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div class="members-section">
  <h2>教师</h2>
  <div class="members-grid">
    {% for member in site.data.members.faculty %}
    <div class="member-card">
      <img class="member-image" src="{{ member.image }}" alt="{{ member.name_zh }}">
      <div class="member-name">{{ member.name_zh }}</div>
      <div class="member-position">{{ member.position_zh }}</div>
      <div class="member-bio">{{ member.bio_zh }}</div>
      <div class="member-email">📧 <a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
      {% if member.homepage %}
      <div><a href="{{ member.homepage }}" target="_blank">🔗 主页</a></div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>

<div class="members-section">
  <h2>博士生</h2>
  <div class="members-grid">
    {% for member in site.data.members.phd %}
    <div class="member-card">
      <img class="member-image" src="{{ member.image }}" alt="{{ member.name_zh }}">
      <div class="member-name">{{ member.name_zh }}</div>
      <div class="member-position">{{ member.position_zh }}</div>
      <div class="member-bio">{{ member.bio_zh }}</div>
      <div class="member-email">📧 <a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
    </div>
    {% endfor %}
  </div>
</div>

<div class="members-section">
  <h2>硕士生</h2>
  <div class="members-grid">
    {% for member in site.data.members.master %}
    <div class="member-card">
      <img class="member-image" src="{{ member.image }}" alt="{{ member.name_zh }}">
      <div class="member-name">{{ member.name_zh }}</div>
      <div class="member-position">{{ member.position_zh }}</div>
      <div class="member-bio">{{ member.bio_zh }}</div>
      <div class="member-email">📧 <a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
    </div>
    {% endfor %}
  </div>
</div>

<div class="members-section">
  <h2>校友</h2>
  <p>我们的校友分布在世界各地的知名企业和研究机构，包括：</p>
  <ul>
    <li>Google、Microsoft、Amazon</li>
    <li>清华大学、北京大学、MIT</li>
    <li>腾讯、阿里巴巴、百度</li>
  </ul>
</div>
