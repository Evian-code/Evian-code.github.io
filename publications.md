---
layout: page
title: 发表成果
lang: zh
---

# 发表成果

## 期刊论文

<div class="publications-list">
{% for pub in site.data.publications.papers %}
<div class="publication-item">
    <div class="pub-title">{{ pub.title_zh }}</div>
    <div class="pub-authors">{{ pub.authors }}</div>
    <div class="pub-journal">{{ pub.journal }}, {{ pub.year }}</div>
    <div class="pub-links">
        {% if pub.doi %}
        <a href="https://doi.org/{{ pub.doi }}" target="_blank">DOI</a>
        {% endif %}
        {% if pub.pdf %}
        <a href="{{ pub.pdf }}" target="_blank">PDF</a>
        {% endif %}
    </div>
</div>
{% endfor %}
</div>

## 会议论文

### 2024 年

- **基于注意力机制的图像分割方法** - 王小明, 李小红, 张教授

  - _IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2024_
  - [PDF](/assets/papers/wang2024attention.pdf)

- **联邦学习中的隐私保护技术** - 陈小华, 张教授
  - _International Conference on Machine Learning (ICML) 2024_
  - [PDF](/assets/papers/chen2024federated.pdf)

### 2023 年

- **多任务学习的理论分析** - 刘小军, 王教授
  - _Conference on Neural Information Processing Systems (NeurIPS) 2023_
  - [PDF](/assets/papers/liu2023multitask.pdf)

## 专利

1. **一种基于深度学习的图像识别方法** - 专利号: CN202310123456.7

   - 发明人: 张教授, 王小明
   - 申请日期: 2023 年 3 月 15 日

2. **智能对话系统及其实现方法** - 专利号: CN202210987654.3
   - 发明人: 李教授, 陈小华
   - 申请日期: 2022 年 10 月 20 日

## 获奖情况

- **2023 年**: 中国人工智能学会优秀论文奖
- **2022 年**: 国际机器学习大会最佳论文提名奖
- **2021 年**: 教育部科技进步奖二等奖
- **2020 年**: IEEE 智能系统杰出贡献奖

## 学术报告

### 2024 年

- **深度学习在医学图像分析中的应用** - 国际医学图像计算会议 (MICCAI 2024)
- **人工智能的伦理与安全** - 中国人工智能大会 (CAAI 2024)

### 2023 年

- **多模态学习的最新进展** - 国际模式识别大会 (ICPR 2023)
- **联邦学习技术与应用** - 中国计算机学会学术年会 (CCF 2023)
