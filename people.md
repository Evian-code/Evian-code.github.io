---
layout: page
title: 团队成员
lang: zh
---

<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div class="members-section">
  <h2>教职工</h2>
  <div class="members-grid">
    {% for member in site.data.members.faculty %}
    <div class="member-card">
      <div class="member-image-wrapper">
        <img class="member-image" src="{{ member.image }}" alt="{{ member.name_zh }}">
      </div>
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

<!-- 博士/硕士/本科生 -->
<div class="members-section">
  <h2>学生</h2>
  <div class="members-grid">
    {% for member in site.data.members.students %}
    <div class="member-card">
      <div class="member-image-wrapper">
        <img class="member-image" src="{{ member.image }}" alt="{{ member.name_zh }}">
      </div>
      <div class="member-name">{{ member.name_zh }}</div>
      <div class="member-position">{{ member.position_zh }}</div>
      <div class="member-bio bio-collapsed">{{ member.bio_zh }}</div>
      <button class="bio-toggle">展开全部简介</button>
      <div class="member-email">📧 <a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- 访问学者与研究助理 -->
<div class="members-section">
  <h2>访问学者 & 研究助理</h2>
  <div class="members-grid">
    {% for member in site.data.members.VisitingScholarsandRA %}
    <div class="member-card">
      <div class="member-image-wrapper">
        <img class="member-image" src="{{ member.image }}" alt="{{ member.name_zh }}">
      </div>
      <div class="member-name">{{ member.name_zh }}</div>
      <div class="member-position">{{ member.position_zh }}</div>
      <div class="member-bio bio-collapsed">{{ member.bio_zh }}</div>
      <button class="bio-toggle">展开全部简介</button>
      <div class="member-email">📧 <a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
    </div>
    {% endfor %}
  </div>
</div>

<!-- 校友 -->
<div class="members-section">
  <h2>毕业成员</h2>
  <div class="members-grid">
    {% for member in site.data.members.Alumni %}
    <div class="member-card">
      <div class="member-image-wrapper">
        <img class="member-image" src="{{ member.image }}" alt="{{ member.name_zh }}">
      </div>
      <div class="member-name">{{ member.name_zh }}</div>
      <div class="member-position">{{ member.position_zh }}</div>
      <div class="member-bio bio-collapsed">{{ member.bio_zh }}</div>
      <button class="bio-toggle">展开全部简介</button>
      <div class="member-email">📧 <a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
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
