# Design Guidelines: Modern Cybersecurity Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern developer portfolios (Linear, Stripe Docs, GitHub) combined with cyberpunk/terminal aesthetics. The design maintains the technical, hacker-inspired identity while elevating it with contemporary polish and sophisticated micro-interactions.

## Core Design Principles
1. **Terminal Authenticity**: Preserve the command-line interface aesthetic but with refined execution
2. **Technical Sophistication**: Balance between approachable and expert-level presentation
3. **Dynamic Minimalism**: Clean layouts with purposeful animation elements
4. **Professional Edge**: Modern cybersecurity professional, not amateur hacker aesthetic

## Typography System

### Font Families
- **Primary (Body/UI)**: Inter (weights: 400, 500, 600, 700)
- **Accent (Code/Terminal)**: Fira Code or JetBrains Mono (weights: 400, 500, 600)

### Hierarchy
- **Hero Terminal Output**: Fira Code, 1rem (mobile) to 1.125rem (desktop)
- **Section Headings**: Fira Code, 2rem (mobile) to 2.5rem (desktop), weight 700
- **Subsection Headings**: Inter, 1.5rem to 1.75rem, weight 600
- **Card Titles**: Inter, 1.125rem to 1.25rem, weight 600
- **Body Text**: Inter, 1rem, weight 400, line-height 1.7
- **Small Text/Metadata**: Inter, 0.875rem, weight 500

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24, 32** for consistent rhythm.
- Component padding: p-6 to p-8
- Section vertical spacing: py-20 (mobile) to py-32 (desktop)
- Card gaps: gap-6 to gap-8
- Element spacing: space-y-4 to space-y-6

### Container Strategy
- Max width: 1280px (max-w-7xl)
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl
- Consistent horizontal padding: px-4 (mobile) to px-8 (desktop)

## Component Library

### Navigation
**Sticky header** with glassmorphism backdrop blur
- Terminal-style logo/brand: "ezekiel@cybersec:~$" in Fira Code
- Horizontal navigation links (desktop), hamburger menu (mobile)
- Active state indicators with subtle underline or glow effect
- Height: 64px to 72px

### Hero Section (Terminal Window)
**Full terminal emulator interface** (not a full hero image)
- Terminal window chrome with traffic light dots
- Simulated command prompt with typing animation
- Display: Name, role, expertise in terminal output format
- Terminal dimensions: 800px max-width, auto height
- Below terminal: Badge pills showing certifications/specializations
- Background: Animated Matrix rain canvas (subtle opacity 0.1-0.15)

### About Section
**Two-column layout (desktop), stacked (mobile)**
- Left: 3-4 icon cards in grid (2x2) showing key stats/focus areas
  - Icons: Shield, Brain/AI, Code, Lock/Security
  - Each card: 200-250px square, centered content
- Right: Text content block with emphasized keywords
- Card hover states with subtle border glow

### Skills Section
**Categorized skill displays**
- 3-column grid for skill categories (Security, AI/ML, Tools)
- Each category: Title with icon + animated progress bars
- Progress bars: 8px height, rounded, gradient fills
- Skill names with proficiency percentages
- Stagger animation on scroll into view

### Projects Section
**Masonry-style or 2-column grid**
- Project cards with hover lift effect (translateY -4px)
- Each card includes: Title, tech stack tags, description, status indicator
- Corner accent lines or borders for cyberpunk feel
- Technology tags as small pills below title

### Education & Certifications
**Timeline layout with connection lines (desktop)**
- Vertical line connecting entries (left side)
- Each entry: Institution, degree/cert, date range, key achievements
- Certification badges displayed as visual icons
- Expandable details on click/tap

### Contact Section
**Split layout**
- Left (60%): Contact form with terminal-style inputs
  - Input fields with monospace font option
  - Submit button styled as terminal command
- Right (40%): Contact info cards, social links, location
- Background: Subtle grid pattern overlay

## Images

### Hero Section
**No large hero image** - the terminal window interface IS the hero element. Behind it, the animated Matrix rain canvas provides atmospheric background.

### About Section
**Professional headshot** (optional): 300x300px, placed in about section with border treatment and subtle shadow/glow effect. Position: floating right of text content on desktop.

### Project Cards
**Screenshot thumbnails**: Each project card should have a small preview thumbnail (aspect ratio 16:9, 400x225px), positioned at card top with slight overlay gradient for text readability.

### Background Elements
Subtle geometric patterns or grid overlays in section backgrounds for depth, not full background images.

## Animation Strategy

### Purposeful Animations
- **Hero**: Typewriter effect for terminal text (one-time on load)
- **Matrix Rain**: Continuous subtle background effect
- **Skills**: Progress bars fill on scroll into view
- **Cards**: Hover state transitions (border, shadow, transform)
- **Navigation**: Smooth scroll to sections
- **NO** excessive scroll-triggered animations or parallax effects

### Interaction States
- Link hover: Subtle text glow or underline animation
- Button hover: Slight brightness increase + shadow
- Card hover: Border glow + subtle lift
- Input focus: Border accent with smooth transition

## Accessibility & Polish

- All interactive elements: min 44px touch target
- Form inputs: Clear labels, error states, validation feedback
- Skip navigation link for keyboard users
- ARIA labels on icon-only buttons
- Sufficient contrast ratios throughout
- Reduced motion support for animations

## Mobile Responsiveness

- Navigation collapses to hamburger menu < 768px
- Grid layouts stack to single column < 768px
- Terminal font size reduces slightly for readability
- Touch-friendly spacing increases
- Matrix background reduces particle density on mobile

This design balances technical sophistication with modern polish, creating a memorable portfolio that reflects cybersecurity expertise while remaining accessible and professional.