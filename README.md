# AI Research Lab Website

A bilingual (Chinese/English) Jekyll website for an artificial intelligence research laboratory.

## Features

- **Bilingual Support**: Full Chinese and English content with language switcher
- **Responsive Design**: Mobile-friendly and accessible
- **Research Focus**: Dedicated sections for research areas, publications, and team members
- **Blog System**: Integrated blog for lab news and updates
- **SEO Optimized**: Built-in SEO tags and sitemap generation

## Quick Start

### Prerequisites

- Ruby 2.7.0 or higher
- Jekyll 4.0 or higher
- Bundler gem

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/lab-website.git
cd lab-website
```

2. Install dependencies:

```bash
bundle install
```

3. Serve the site locally:

```bash
bundle exec jekyll serve
```

4. Open your browser and visit `http://localhost:4000`

## Site Structure

```
lab-website/
├── _config.yml          # Site configuration
├── _data/               # Data files (YAML)
│   ├── navigation.yml   # Navigation menus
│   ├── members.yml      # Team member information
│   ├── research.yml     # Research areas
│   └── publications.yml # Publication list
├── _includes/           # Reusable HTML components
├── _layouts/            # Page layouts
├── _posts/              # Blog posts
├── _sass/               # Sass stylesheets
├── assets/              # Static assets (CSS, JS, images)
├── en/                  # English content pages
└── *.md                 # Chinese content pages (root)
```

## Content Management

### Adding Team Members

Edit `_data/members.yml`:

```yaml
faculty:
  - name: 'Dr. New Member'
    name_zh: '新成员 博士'
    position: 'Associate Professor'
    position_zh: '副教授'
    email: 'new.member@university.edu'
    bio: 'Research interests and background.'
    bio_zh: '研究兴趣和背景。'
    image: '/assets/images/new-member.jpg'
```

### Adding Publications

Edit `_data/publications.yml`:

```yaml
papers:
  - title: 'Paper Title'
    title_zh: '论文标题'
    authors: 'Author1, Author2'
    journal: 'Journal Name'
    year: 2024
    doi: '10.1000/journal.2024.12345'
    pdf: '/assets/papers/paper2024.pdf'
```

### Adding Blog Posts

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: 'Post Title'
date: 2024-01-15
author: 'Author Name'
categories: [research, news]
tags: [AI, machine learning]
lang: zh
---

Your post content here...
```

For English posts, add `lang: en` and place in the appropriate date folder.

### Adding Research Areas

Edit `_data/research.yml`:

```yaml
areas:
  - title: 'New Research Area'
    title_zh: '新研究方向'
    description: 'Description of the research area.'
    description_zh: '研究方向的描述。'
    image: '/assets/images/new-research.jpg'
```

## Customization

### Site Configuration

Edit `_config.yml` to customize:

- Site title and description (both languages)
- Contact information
- Social media links
- Google Analytics
- SEO settings

### Styling

Modify Sass files in `_sass/`:

- `_base.scss`: Base styles and typography
- `_layout.scss`: Layout and component styles
- `_responsive.scss`: Responsive design rules

### Navigation

Edit `_data/navigation.yml` to modify menu items:

```yaml
zh:
  - name: '新菜单项'
    url: '/new-page/'
en:
  - name: 'New Menu Item'
    url: '/en/new-page/'
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)
4. Your site will be available at `https://username.github.io/repository-name`

### Manual Deployment

1. Build the site:

```bash
bundle exec jekyll build
```

2. Upload the `_site/` directory to your web server

### Environment Variables

For production deployment, set these environment variables:

- `JEKYLL_ENV=production`
- `GOOGLE_ANALYTICS_ID` (if using Google Analytics)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Content Guidelines

### Writing Style

- **Chinese**: Use simplified Chinese characters
- **English**: Follow academic writing conventions
- **Consistency**: Maintain consistent terminology across languages

### Image Guidelines

- **Size**: Optimize images for web (< 500KB each)
- **Format**: Use JPEG for photos, PNG for graphics with transparency
- **Alt Text**: Always include descriptive alt text for accessibility

### File Naming

- Use lowercase with hyphens: `research-paper-2024.pdf`
- Include dates for time-sensitive content: `2024-01-15-news-update.md`
- Use descriptive names: `team-photo-2024.jpg` not `img001.jpg`

## Troubleshooting

### Common Issues

1. **Build Errors**: Check Ruby and Jekyll versions
2. **Missing Dependencies**: Run `bundle install`
3. **Encoding Issues**: Ensure files are saved in UTF-8
4. **Image Not Loading**: Check file paths and case sensitivity

### Getting Help

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Create an issue in this repository for site-specific problems

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

For questions about this website, please contact: webmaster@lab.university.edu
