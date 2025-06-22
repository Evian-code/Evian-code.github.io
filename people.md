---
layout: page
title: 团队成员
lang: zh
---

# 团队成员

## 教师

<div class="members-grid">
{% for member in site.data.members.faculty %}
<div class="member-card">
    <div class="member-image" style="background-image: url('{{ member.image }}')"></div>
    <div class="member-name">{{ member.name_zh }}</div>
    <div class="member-position">{{ member.position_zh }}</div>
    <div class="member-bio">{{ member.bio_zh }}</div>
    <p><strong>邮箱:</strong> <a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
</div>
{% endfor %}
</div>

## 研究生

<div class="members-grid">
{% for member in site.data.members.students %}
<div class="member-card">
    <div class="member-image" style="background-image: url('{{ member.image }}')"></div>
    <div class="member-name">{{ member.name_zh }}</div>
    <div class="member-position">{{ member.position_zh }}</div>
    <div class="member-bio">{{ member.bio_zh }}</div>
    <p><strong>邮箱:</strong> <a href="mailto:{{ member.email }}">{{ member.email }}</a></p>
</div>
{% endfor %}
</div>

## 校友

我们的校友分布在世界各地的知名企业和研究机构，包括：

- Google、Microsoft、Amazon 等科技巨头
- 清华大学、北京大学、MIT 等顶尖高校
- 腾讯、阿里巴巴、百度等国内互联网公司
