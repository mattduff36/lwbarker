# Task List: L.W. Barker Transport Services Website

Generated from: `prd-lwbarker-transport-website.md`

## Relevant Files

- `pages/index.tsx` - Home page with hero section and company overview
- `pages/services.tsx` - Services page with transport service breakdown
- `pages/fleet.tsx` - Fleet page displaying vehicle capabilities
- `pages/about.tsx` - About page with company information
- `pages/contact.tsx` - Contact page with forms and contact details
- `components/Layout.tsx` - Main layout component with navigation
- `components/Hero.tsx` - Hero section component for home page
- `components/ContactForm.tsx` - Contact form component
- `components/ServiceRequestForm.tsx` - Service request/quote form component
- `components/Gallery.tsx` - Gallery component for vehicles and jobs
- `components/Testimonials.tsx` - Customer testimonials component
- `components/Navigation.tsx` - Navigation component
- `components/Footer.tsx` - Footer component with contact info
- `styles/globals.css` - Global styles and Tailwind configuration
- `lib/utils/formValidation.ts` - Form validation utilities
- `lib/utils/emailService.ts` - Email service for form submissions
- `public/images/` - Directory for optimized images
- `next.config.js` - Next.js configuration for optimization
- `tailwind.config.js` - Tailwind configuration with company colors
- `package.json` - Project dependencies

### Notes

- All React components should use TypeScript (.tsx files)
- Form handling should include client-side validation
- Images should be optimized for web performance
- Mobile-first responsive design approach
- SEO optimization with proper meta tags and structured data

## Tasks

- [x] 1.0 **Project Setup and Configuration**
  - [x] 1.1 Initialize Next.js project with TypeScript template
  - [x] 1.2 Install and configure TailwindCSS with custom color scheme (orange, black, grey)
  - [x] 1.3 Set up project folder structure (components, pages, lib, styles)
  - [x] 1.4 Configure package.json with required dependencies (React, Next.js, TypeScript, TailwindCSS)
  - [x] 1.5 Set up development environment and verify localhost:3000 works
  - [x] 1.6 Create tailwind.config.js with L.W. Barker brand colors
  - [x] 1.7 Configure next.config.js for image optimization and performance

- [ ] 2.0 **Core Layout and Navigation System**
  - [x] 2.1 Create Layout.tsx component with header, main content, and footer structure
  - [ ] 2.2 Build Navigation.tsx component with responsive menu (Home, Services, Fleet, About, Contact)
  - [ ] 2.3 Implement mobile hamburger menu with smooth transitions
  - [ ] 2.4 Create Footer.tsx component with contact info (phone, email, location, website)
  - [ ] 2.5 Add company logo integration (LOGO-TransBG.png) in navigation
  - [ ] 2.6 Implement active page highlighting in navigation
  - [ ] 2.7 Add Facebook page link in footer with appropriate icon

- [x] 3.0 **Home Page Implementation**
  - [x] 3.1 Create Hero.tsx component with background image carousel/selection
  - [x] 3.2 Implement hero section with company tagline and call-to-action buttons
  - [x] 3.3 Add company overview section with "complete flatbed transport solutions" messaging
  - [x] 3.4 Create services preview section with links to Services page
  - [x] 3.5 Add fleet capabilities preview with vehicle range (3.5ton to 44ton Arctic)
  - [x] 3.6 Implement testimonials preview section with placeholder content
  - [x] 3.7 Add gallery preview section with placeholder vehicle images
  - [x] 3.8 Create prominent contact section with phone number and quote request CTA

- [x] 4.0 **Service and Fleet Pages Development**
  - [x] 4.1 Create Services page (pages/services.tsx) with service breakdown
  - [x] 4.2 Add local transport services section with description and capabilities
  - [x] 4.3 Add long distance transport services section with coverage details
  - [x] 4.4 Add specialized loads section with specific transport solutions
  - [x] 4.5 Create Fleet page (pages/fleet.tsx) with vehicle capabilities
  - [x] 4.6 Add 3.5ton van section with specifications and use cases
  - [x] 4.7 Add 44ton Arctic section with capabilities and load specifications
  - [x] 4.8 Add intermediate vehicle options with specifications
  - [x] 4.9 Implement "Contact for Quote" approach throughout both pages
  - [x] 4.10 Add service/fleet image galleries with placeholder content

- [x] 5.0 **Contact System and Forms Implementation**
  - [x] 5.1 Create Contact page (pages/contact.tsx) with contact information display
  - [x] 5.2 Build ContactForm.tsx component with name, email, phone, message fields
  - [x] 5.3 Create ServiceRequestForm.tsx with detailed quote request fields
  - [x] 5.4 Add optional service type dropdown and load details fields
  - [x] 5.5 Implement form validation using lib/utils/formValidation.ts
  - [x] 5.6 Set up email service integration (lib/utils/emailService.ts) to lee@lwbarkertransport.com
  - [x] 5.7 Add contact information display (location: NG24 1DW, phone: 07967 176567)
  - [ ] 5.8 Make phone number clickable for mobile users
  - [ ] 5.9 Add email link (lee@lwbarkertransport.com) as clickable mailto
  - [ ] 5.10 Implement form submission success/error handling

- [x] 6.0 **About Page and Supporting Components**
  - [x] 6.1 Create About page (pages/about.tsx) with company information
  - [x] 6.2 Add company history and experience section
  - [x] 6.3 Add company values and mission statement
  - [x] 6.4 Create Testimonials.tsx component with placeholder customer reviews
  - [x] 6.5 Build Gallery.tsx component for vehicles and past jobs (placeholder images)
  - [x] 6.6 Add team/leadership section if applicable
  - [x] 6.7 Implement social media integration with Facebook page link
  - [x] 6.8 Add service area information and location details

- [ ] 7.0 **SEO, Performance, and Deployment Optimization**
  - [ ] 7.1 Configure SEO meta tags for all pages with relevant keywords
  - [ ] 7.2 Add local SEO optimization for "transport services NG24 1DW" searches
  - [ ] 7.3 Optimize all hero background images for web performance
  - [ ] 7.4 Configure proper heading structure (H1, H2, H3) throughout site
  - [ ] 7.5 Add accessibility features (ARIA labels, keyboard navigation, screen reader support)
  - [ ] 7.6 Set up Google Analytics integration preparation
  - [ ] 7.7 Configure Vercel deployment settings and environment variables
  - [ ] 7.8 Test mobile responsiveness across devices (phone, tablet, desktop)
  - [ ] 7.9 Perform performance testing and optimization (page load under 3 seconds)
  - [ ] 7.10 Conduct final testing and quality assurance before deployment 