# Product Requirements Document: L.W. Barker Transport Services Website

## 1. Introduction/Overview

L.W. Barker Transport Services LTD requires a new 4-5 page professional website to showcase their complete flatbed transport solutions to both existing and potential customers. The website will serve as the primary digital presence for the company, displaying their services, fleet capabilities, and providing multiple contact methods including a comprehensive contact form.

**Goal:** Create a modern, professional website that educates visitors about L.W. Barker's transport services and facilitates customer contact and service requests.

## 2. Goals

- **Primary Goal:** Increase customer inquiries and service requests through improved online presence
- **Secondary Goals:**
  - Establish professional credibility in the transport industry
  - Improve local SEO visibility for transport services in NG24 1DW area
  - Reduce repetitive phone inquiries by providing comprehensive service information
  - Showcase fleet capabilities and company expertise

## 3. User Stories

**As a potential customer:**
- I want to learn about L.W. Barker's transport services so I can determine if they meet my needs
- I want to see their fleet capabilities so I can understand what size loads they can handle
- I want to easily contact them so I can get a quote for my transport needs
- I want to see examples of their work so I can trust their capabilities

**As an existing customer:**
- I want to quickly find contact information so I can reach them for new bookings
- I want to submit service requests online so I can provide detailed load information
- I want to see their full range of services so I can use them for different transport needs

**As a mobile user:**
- I want the website to work seamlessly on my phone so I can access it anywhere
- I want fast loading times so I can get information quickly

## 4. Functional Requirements

### Page Structure Requirements:
1. **Home Page:** Hero section with company images, brief overview, and call-to-action buttons
2. **Services Page:** Detailed breakdown of transport services (local, long distance, specialized loads)
3. **Fleet Page:** Display of vehicle types from 3.5ton van to 44ton Arctic with capabilities
4. **About Page:** Company information, experience, and values
5. **Contact Page:** Contact details, location, and comprehensive contact form

### Core Functionality Requirements:
6. **Contact Form:** Must collect name, email, phone, message, with optional service type and load details
7. **Service Request/Quote Form:** Detailed form for customers to request quotes
8. **Gallery Section:** Display vehicles and past jobs (placeholder images initially)
9. **Customer Testimonials:** Section for customer reviews (placeholder content initially)
10. **Mobile Responsiveness:** Website must work perfectly on all device sizes
11. **Fast Loading:** Optimized images and code for quick page load times
12. **SEO Optimization:** Local SEO friendly with proper meta tags and structure

### Design Requirements:
13. **Color Scheme:** Primary colors orange, black, and grey
14. **Visual Style:** Professional/corporate combined with modern/dynamic elements
15. **Hero Images:** Use provided hero background images from /public folder
16. **Typography:** Clean, readable fonts suitable for professional services
17. **Navigation:** Clear, intuitive navigation between all pages

### Contact Information Display:
18. **Location:** NG24 1DW prominently displayed
19. **Phone:** 07967 176567 clickable for mobile users
20. **Email:** lee@lwbarkertransport.com as clickable mailto link
21. **Website:** lwbarkertransport.com displayed as company URL

## 5. Non-Goals (Out of Scope)

- **Online Booking System:** No real-time booking or scheduling functionality
- **Payment Processing:** No online payment or invoicing system
- **Customer Portal:** No login/account management for customers
- **Real-time Tracking:** No GPS or shipment tracking features
- **Multi-language Support:** English only for initial version
- **Blog/News Section:** No content management system required
- **Social Media Integration:** Basic links only, no feed integration

## 6. Design Considerations

### Visual Design:
- Use hero background images: hero_bg.jpg, hero_bg2.jpg, hero_bg3.jpg, hero_bg4.jpg, hero_bg5.jpg
- Incorporate company logos: LOGO-TransBG.png, LOGO.png, logo.jpeg
- Implement orange, black, and grey color scheme throughout
- Modern typography with good readability
- Professional imagery style for transport industry

### UI/UX Requirements:
- Intuitive navigation with clear page hierarchy
- Call-to-action buttons strategically placed
- Mobile-first responsive design
- Fast loading with optimized images
- Accessible design following WCAG guidelines
- Contact information easily accessible from every page

## 7. Technical Considerations

### Framework & Technology:
- **Frontend:** React.js with Next.js for SEO benefits
- **Styling:** TailwindCSS for modern, responsive design
- **Deployment:** Vercel for fast, reliable hosting
- **Development:** Must work on localhost:3000 during development

### Performance Requirements:
- Page load time under 3 seconds
- Mobile-optimized images
- SEO-friendly URLs and meta tags
- Proper heading structure (H1, H2, H3)
- Google Analytics integration ready

### Accessibility Features:
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios for text
- Descriptive alt text for images

## 8. Success Metrics

### Primary Metrics:
- **Increase in Contact Form Submissions:** Target 50% increase within 3 months
- **Phone Inquiries:** Maintain or increase current inquiry levels
- **Page Views:** Track engagement across all pages
- **Mobile Usage:** Ensure 60%+ mobile traffic functions smoothly

### Secondary Metrics:
- **Local SEO Ranking:** Improve ranking for "transport services NG24"
- **Time on Site:** Increase average session duration
- **Contact Information Clicks:** Track phone and email clicks
- **Service Page Engagement:** Monitor Services and Fleet page visits

## 9. Open Questions

### Content Questions:
- **Testimonials:** Do you have specific customer testimonials to include, or should we create placeholder structure?
- **Gallery Images:** Are there specific vehicle photos or job photos you'd like to feature?
- **Service Pricing:** Should pricing information be included or "Contact for Quote" approach?

### Technical Questions:
- **Domain Setup:** Will lwbarkertransport.com be pointed to the new site immediately?
- **Email Integration:** Should contact forms send to lee@lwbarkertransport.com or a different address?
- **Analytics:** Do you have Google Analytics or other tracking preferences?

### Additional Features:
- **Social Media:** Should Facebook page link be prominently featured?
- **Emergency Contact:** Is there a 24/7 or emergency contact number to highlight?
- **Service Area:** Should we specify geographic service areas beyond the location?

---

**Next Steps:**
1. Review and approve this PRD
2. Gather any additional content (testimonials, vehicle photos, detailed service descriptions)
3. Begin development with focus on core functionality first
4. Implement responsive design and SEO optimization
5. Test across devices and browsers before deployment 