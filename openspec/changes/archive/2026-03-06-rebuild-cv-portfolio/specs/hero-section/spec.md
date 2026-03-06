## ADDED Requirements

### Requirement: Hero section with professional positioning
The hero section SHALL be the first visible section occupying at minimum 90vh and SHALL contain a badge, animated title, subtitle, and dual CTAs.

#### Scenario: User lands on the page
- **WHEN** a user loads the site
- **THEN** the hero section SHALL display: an availability badge ("Disponible para nuevos desafíos" / "Open to new challenges"), an animated headline, a professional subtitle describing the profile, and two CTA buttons

### Requirement: Primary CTA to schedule a meeting
The hero section SHALL include a primary (filled/prominent) CTA button that links to the Calendly scheduling page.

#### Scenario: User clicks primary CTA
- **WHEN** the user clicks the "Agendar reunión" / "Schedule a meeting" button
- **THEN** the system SHALL open the Calendly URL (https://calendly.com/diegobergaraj/30min) in a new tab

### Requirement: Secondary CTA for email contact
The hero section SHALL include a secondary (outlined/less prominent) CTA button for email contact.

#### Scenario: User clicks secondary CTA
- **WHEN** the user clicks the "Contactar por email" / "Email me" button
- **THEN** the system SHALL trigger a `mailto:diegobergaraj@gmail.com` action

### Requirement: Animated title entrance using ReactBits
The hero title SHALL animate on page load using a ReactBits text animation component (e.g., SplitText, BlurText, or similar).

#### Scenario: Page finishes loading
- **WHEN** the hero section becomes visible
- **THEN** the title text SHALL animate in using a ReactBits text animation with a smooth, subtle reveal effect
