# Simple Landing Page

A clean, professional landing page built with Next.js and deployed on GitHub Pages.

## Quick Setup

1. **Create Repository**: Create a new GitHub repository with this code
2. **Enable GitHub Pages**: Go to Settings > Pages > Source: GitHub Actions
3. **Edit Content**: Modify the config objects in each page file
4. **Custom Domain** (optional): Add CNAME file with your domain

## Easy Content Editing

Your friend can easily modify content by editing these configuration objects:

### Homepage (`pages/index.js`)
- `SITE_CONFIG.title` - Business name
- `SITE_CONFIG.tagline` - Main headline
- `SITE_CONFIG.description` - Subtitle description
- `SITE_CONFIG.features` - Three feature boxes
- `SITE_CONFIG.email` and `SITE_CONFIG.phone` - Contact info

### About Page (`pages/about.js`)
- `ABOUT_CONFIG.content` - Array of paragraphs

### Contact Page (`pages/contact.js`)
- `CONTACT_CONFIG` - Contact information

## Custom Domain Setup

1. Add a `CNAME` file to the repository root:
   ```
   yourdomain.com
   ```

2. Configure DNS:
    - For apex domain (yourdomain.com): Add A records:
        - 185.199.108.153
        - 185.199.109.153
        - 185.199.110.153
        - 185.199.111.153
    - For subdomain (www.yourdomain.com): Add CNAME record pointing to `username.github.io`

3. Enable custom domain in repository Settings > Pages

## Development

```bash
npm install
npm run dev
```

## Deployment

Automatic deployment via GitHub Actions when pushing to main branch.

## Features

- ✅ Fully responsive design
- ✅ Professional styling with Tailwind CSS
- ✅ Contact form (opens email client)
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Easy to customize
- ✅ Free hosting on GitHub Pages
- ✅ Custom domain support
- ✅ SSL certificate (automatic)