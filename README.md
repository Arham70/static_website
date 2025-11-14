# Digital Agency Website

A static React website replicating the design and structure of Fueled.com with multiple pages, team section, and professional color scheme.

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Build the static website:

```bash
npm run build
```

The static files will be generated in the `dist` folder, ready to be deployed to any static hosting service.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Features

- **Multiple Pages**: Separate pages for Home, Expertise, Work, Company, Blog, and Contact
- **Team Section**: Professional team members showcase on the Company page
- **Professional Color Scheme**: Modern dark blue (#1a1a2e) and blue (#4a90e2) color palette
- **React Router**: Client-side routing for smooth navigation
- **Responsive Design**: Mobile-friendly across all devices
- **Modern React Components**: Clean, maintainable component structure
- **Static Site Generation**: Ready for deployment to any static hosting

## Pages

- **Home** (`/`) - Hero section, case studies, expertise preview, blog preview, and platforms
- **Expertise** (`/expertise`) - Detailed expertise areas with descriptions
- **Work** (`/work`) - Portfolio and case studies showcase
- **Company** (`/company`) - About us, team members, and company values
- **Blog** (`/blog`) - Blog posts and articles
- **Contact** (`/contact`) - Contact form and information

## Customization

To change the website name, update the following:
- `src/components/Header.jsx` - Logo text
- `src/components/Footer.jsx` - Company name and email
- `index.html` - Page title

To customize team members, edit:
- `src/components/Team.jsx` - Team member data

## Color Scheme

- **Primary Dark**: `#1a1a2e` - Headers, text, buttons
- **Primary Blue**: `#4a90e2` - Accents, links, hover states
- **Background**: `#f8f9fa` - Light sections
- **Gradient**: Dark blue gradient for hero sections

## Deployment

The `dist` folder contains all static files that can be deployed to:
- **Netlify** - Automatic deployments from Git
- **Vercel** - Optimized for React apps
- **GitHub Pages** - Free static hosting
- **AWS S3** - Scalable cloud hosting
- Any static hosting service

### Note for Static Hosting

For single-page application routing to work on static hosts, configure your hosting to redirect all routes to `index.html`. Most modern hosting services handle this automatically.

