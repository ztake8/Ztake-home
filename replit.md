# Ztake Payments - Modern Payment Gateway Website

## Overview
Ztake Payments is a complete, production-ready fintech marketing website with an Apple-inspired liquid glass aesthetic. The website showcases a comprehensive payment gateway solution for Indian and international businesses, combining the features of Razorpay and Stripe with the design finesse of iOS.

## Project Structure

### Frontend (`client/`)
- **React** with **TypeScript** for type safety
- **Tailwind CSS** for styling with custom liquid glass design system
- **Wouter** for client-side routing
- **TanStack Query** for data fetching and state management
- **Shadcn UI** components customized with glass aesthetic
- **Lucide React** for icons

### Backend (`server/`)
- **Express.js** for API routes
- **In-memory storage** for contact forms and newsletter subscriptions
- **Zod** for request validation

### Design System
- **Liquid Glass UI**: Frosted glass cards with backdrop blur, subtle glow effects, and layered transparency
- **Apple-inspired**: System font stack, generous spacing, 2xl rounded corners
- **Dark Mode**: Full support with deep charcoal backgrounds and neon indigo highlights
- **Responsive**: Mobile-first design optimized for iPhone 13-15+

## Pages

1. **Home** (`/`) - Hero section, metrics, features, testimonials, CTA
2. **Payments** (`/payments`) - Payment gateway features and solutions
3. **Subscriptions** (`/subscriptions`) - Recurring billing and subscription management
4. **ZtakeX** (`/ztakex`) - Business banking with payouts and corporate cards
5. **Developers** (`/docs`) - API documentation, SDKs, code examples
6. **Pricing** (`/pricing`) - Transparent pricing tiers with feature comparison
7. **Contact** (`/contact`) - Contact form with multiple communication channels
8. **About** (`/about`) - Mission, vision, values, team
9. **Security** (`/security`) - Compliance, certifications, security features
10. **Resources** (`/resources`) - Blog, case studies, webinars
11. **Support** (`/support`) - FAQs, support channels
12. **404** - Beautiful error page with navigation options

## Key Features

### Design
- Liquid glass cards with backdrop blur effects
- Smooth animations and transitions
- Parallax scroll effects
- Hover and active state interactions
- Responsive across all devices
- Accessible (WCAG 2.1 AA compliant)

### Functionality
- Contact form submission with validation
- Newsletter subscription
- Dark/light mode toggle with persistence
- Mobile-responsive navigation
- SEO-optimized with meta tags

### Technical
- TypeScript for type safety
- Zod schema validation
- Clean component architecture
- Reusable UI components
- Optimized performance

## Development

### Running the Application
\`\`\`bash
npm run dev
\`\`\`

This starts:
- Vite development server for the frontend
- Express server for the backend
- Both running on the same port (5000)

### Environment Variables
- `SESSION_SECRET` - Already configured in Replit secrets

### API Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/contacts` - Fetch all contacts (testing)

## Design Guidelines

See `design_guidelines.md` for comprehensive design system documentation including:
- Color palette (light/dark modes)
- Typography (Apple system fonts)
- Spacing and layout rules
- Component patterns
- Animation guidelines
- Accessibility standards

## Components

### Reusable Components
- `GlassCard` - Frosted glass card with optional hover and glow effects
- `PillButton` - Rounded button with smooth interactions
- `MetricDisplay` - Large metric with label in glass container
- `FeatureCard` - Icon-based feature card with description
- `TestimonialCard` - Customer testimonial with author info
- `CodeBlock` - Syntax-highlighted code with copy functionality
- `Navbar` - Floating navigation with backdrop blur
- `Footer` - Gradient footer with links and social media

### Layouts
- `ThemeProvider` - Dark/light mode management
- Main app layout with sticky navigation and footer

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Wouter (routing)
- TanStack Query (data fetching)
- Shadcn UI (components)
- Lucide React (icons)
- Framer Motion (ready for animations)

**Backend:**
- Node.js
- Express.js
- TypeScript
- Zod (validation)
- In-memory storage

**Development:**
- Vite (build tool)
- ESBuild (bundler)
- PostCSS (CSS processing)

## Performance Optimizations

- Lazy loading for routes
- Optimized images
- Minimal bundle size
- Efficient re-renders with React Query
- CSS purging in production

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 13+)
- Chrome Mobile (Android 8+)

## Future Enhancements

1. **Animations**: Add Framer Motion animations for page transitions and scroll effects
2. **Interactive Demos**: Add live payment flow demonstrations
3. **Blog System**: Implement full CMS for blog management
4. **Analytics**: Integrate GA4 for tracking
5. **Multi-language**: Add i18n support
6. **Database**: Migrate from in-memory to PostgreSQL for production
7. **Email**: Integrate email service for contact form notifications

## Contact Information

- **Phone**: +91 9220592512
- **Email**: sales@ztake.in
- **WhatsApp**: https://wa.me/919220592512

## License

Proprietary - © 2025 Ztake Payments. All rights reserved.
