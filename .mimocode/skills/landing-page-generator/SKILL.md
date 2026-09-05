---
name: landing-page-generator
description: Generate complete landing pages from user requirements. Supports both simple HTML/CSS/JS and React+TypeScript modes with common section templates (hero, services, testimonials, contact, footer).
---

# Landing Page Generator

Generates complete, responsive landing pages based on user specifications. This skill handles the full workflow from project setup to component creation.

## When to Use

- User asks to create a landing page, portfolio, or single-page website
- User specifies requirements for a frontend mentor, freelancer, or business site
- User wants HTML/CSS/JS or React+TypeScript output

## Workflow

### 1. Parse Requirements

Extract from user request:
- **Purpose**: Frontend mentor, freelancer, business, etc.
- **Framework**: HTML/CSS/JS (simple) or React+TypeScript (complex)
- **Sections needed**: Hero, Services, Testimonials, Contact, Footer, etc.
- **Design preferences**: Colors, style (modern, minimal, bold), etc.

### 2. Determine Mode

**Simple Mode (HTML/CSS/JS)**:
- Single `index.html` file with inline CSS
- Best for: Quick prototypes, simple pages
- Sections: Hero + 1-2 content sections

**Complex Mode (React+TypeScript)**:
- Vite project with React + TypeScript
- Component-based architecture
- Best for: Full landing pages with multiple sections
- Sections: Hero, Services, About, Testimonials, Contact, Footer

### 3. Create Project Structure

**Simple Mode**:
```
index.html
```

**Complex Mode**:
```
project-name/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── components/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── index.html
├── package.json
└── vite.config.ts
```

### 4. Generate Components

Use these standard section templates:

**Hero Section**:
- Title (main heading)
- Subtitle/description
- Call-to-action button
- Optional: Background image/gradient

**Services Section**:
- Section title
- Grid of service cards (3-6 cards)
- Each card: Icon, title, description

**Testimonials Section**:
- Section title
- Carousel or grid of testimonial cards
- Each card: Quote, author name, role/company

**Contact Section**:
- Section title
- Contact form (name, email, message)
- Optional: Contact info (email, phone, address)

**Footer Section**:
- Copyright notice
- Social media links
- Optional: Newsletter signup

### 5. Apply Design System

Default design tokens:
```css
:root {
  --primary: #6c63ff;
  --primary-dark: #5a52d5;
  --background: #fafafa;
  --text: #333;
  --text-light: #666;
  --card-bg: #fff;
  --border: #eee;
}
```

### 6. Start Development Server (if requested)

```bash
# Simple mode
python -m http.server 8000

# Complex mode
npm run dev
```

## Example Requests

**Simple landing page**:
> "Create a landing page for a frontend mentor with hero section, technologies, and CTA button"

**Complex landing page**:
> "Create a veterinary clinic website with React, TypeScript, services, testimonials, and contact form"

## Output

- Complete, responsive landing page
- Modern, clean design
- Mobile-friendly
- Ready to preview in browser
