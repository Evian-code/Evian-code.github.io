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
      <div class="member-bio bio-collapsed">{{ member.bio_zh }}</div>
      <button class="bio-toggle">展开全部简介</button>
      <div class="member-email">📧 <a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
      {% if member.homepage %}
      <div><a href="{{ member.homepage }}" target="_blank">🔗 主页</a></div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".bio-toggle");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const bio = this.previousElementSibling;
        bio.classList.toggle("expanded");
        this.textContent = bio.classList.contains("expanded") ? "收起简介" : "展开全部简介";
      });
    });
  });
</script>
