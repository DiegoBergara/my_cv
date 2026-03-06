## ADDED Requirements

### Requirement: Contact section with dual CTAs
The contact section SHALL be the final section of the page and SHALL prominently display both the primary CTA (schedule meeting) and secondary CTA (email), plus links to professional profiles.

#### Scenario: User scrolls to contact section
- **WHEN** the user reaches the contact section
- **THEN** the system SHALL display a section heading, a brief invitation text, the primary CTA button (Calendly), the secondary CTA button (email), and links to LinkedIn and Credly profiles

### Requirement: Primary CTA prominence
The primary CTA (schedule a meeting) SHALL be visually dominant over the secondary CTA.

#### Scenario: Viewing both CTAs
- **WHEN** both CTAs are rendered in the contact section
- **THEN** the primary CTA SHALL use a filled/solid button style with accent color, and the secondary CTA SHALL use an outlined/ghost button style

### Requirement: Social/professional links
The contact section SHALL include links to LinkedIn and Credly profiles.

#### Scenario: User clicks LinkedIn link
- **WHEN** the user clicks the LinkedIn link
- **THEN** the system SHALL open https://www.linkedin.com/in/diegobergara in a new tab

#### Scenario: User clicks Credly link
- **WHEN** the user clicks the Credly link
- **THEN** the system SHALL open the Credly badges page in a new tab
