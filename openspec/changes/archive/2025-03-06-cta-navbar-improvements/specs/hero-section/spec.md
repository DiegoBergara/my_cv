# hero-section (change delta)

## MODIFIED Requirements

### Requirement: Primary CTA to schedule a meeting
The hero section SHALL include a primary (filled/prominent) CTA button that links to the Calendly scheduling page. The button SHALL be visually eye-catching and highly visible (e.g. strong contrast, size, and clear hover/active states).

#### Scenario: User clicks primary CTA
- **WHEN** the user clicks the "Agendar reunión" / "Schedule a meeting" button
- **THEN** the system SHALL open the Calendly URL (https://calendly.com/diegobergaraj/30min) in a new tab

#### Scenario: Primary CTA visibility
- **WHEN** the user lands on the hero section
- **THEN** the primary CTA SHALL be immediately noticeable and clearly look clickable (e.g. through contrast, size, or subtle emphasis)

### Requirement: Secondary CTA for email contact
The hero section SHALL include a secondary (outlined/less prominent than primary) CTA button for email contact. The button SHALL remain clearly visible and identifiable as a call-to-action.

#### Scenario: User clicks secondary CTA
- **WHEN** the user clicks the "Contactar por email" / "Email me" button
- **THEN** the system SHALL trigger a `mailto:diegobergaraj@gmail.com` action

#### Scenario: Secondary CTA visibility
- **WHEN** the user views the hero section
- **THEN** the secondary CTA SHALL be clearly visible and recognizable as a button, while remaining visually secondary to the primary CTA
