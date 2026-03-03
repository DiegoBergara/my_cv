## ADDED Requirements

### Requirement: Visual timeline of professional experience
The system SHALL display a vertical timeline showing professional experience entries in reverse chronological order with visual connectors.

#### Scenario: User scrolls to experience section
- **WHEN** the user navigates to the experience/timeline section
- **THEN** the system SHALL display a vertical timeline with a line connector and dot markers for each experience entry

### Requirement: Experience entry content
Each timeline entry SHALL display the period, job title/company, and a description of responsibilities and impact.

#### Scenario: Viewing a timeline entry
- **WHEN** a timeline entry is visible
- **THEN** it SHALL show the date period (e.g., "Nov 2022 - Actualidad"), the role and company name as a heading, and a descriptive paragraph of the work performed

### Requirement: Scroll-triggered entrance animation
Timeline entries SHALL animate into view as the user scrolls down the page.

#### Scenario: User scrolls past timeline entries
- **WHEN** a timeline entry enters the viewport (detected via IntersectionObserver)
- **THEN** the entry SHALL animate in with a fade + slide effect with staggered delay for consecutive entries
