---
layout: page
title: 团队成员
lang: zh
---

<style>
.members-section {
  margin-bottom: 3em;
}

.members-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
}

.member-card {
  width: 240px;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  text-align: center;
}

.member-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

.member-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}

.member-position,
.member-bio,
.member-email {
  font-size: 14px;
  margin-bottom: 6px;
}
</style>

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
  <h2>研究生</h2>
  <div class="members-grid">
    {% for member in site.data.members.students %}
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
