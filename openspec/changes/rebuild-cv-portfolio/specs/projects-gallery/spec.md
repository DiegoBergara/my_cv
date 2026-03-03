## ADDED Requirements

### Requirement: Project cards with impact details
The system SHALL display featured projects as cards, each containing a title, impact description, technology tags, and optional links.

#### Scenario: User views projects section
- **WHEN** the user navigates to the projects section
- **THEN** the system SHALL display project cards in a responsive grid (1 column mobile, 2 columns desktop)

### Requirement: Project card content structure
Each project card SHALL present information in a structured hierarchy: title, impact narrative, technology tags, and action links.

#### Scenario: Viewing a project card
- **WHEN** a project card is rendered
- **THEN** it SHALL display the project title as a heading, an impact description paragraph, technology tags as chips, and any available external links as clickable elements

### Requirement: Scroll-triggered card animations
Project cards SHALL animate into view as the user scrolls to the projects section.

#### Scenario: Projects section enters viewport
- **WHEN** the projects section enters the viewport
- **THEN** project cards SHALL animate in with a staggered fade + slide-up effect

### Requirement: Card hover interaction on desktop
Project cards SHALL have a hover state on desktop that provides visual feedback.

#### Scenario: User hovers over a project card
- **WHEN** the user hovers over a project card on desktop
- **THEN** the card SHALL display a subtle elevation/glow effect and border highlight
