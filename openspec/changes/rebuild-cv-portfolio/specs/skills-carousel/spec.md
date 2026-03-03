## ADDED Requirements

### Requirement: Technology carousels grouped by category
The system SHALL display technical skills as horizontal carousels, with one carousel per category (Backend, Frontend, DevOps/Infrastructure).

#### Scenario: User views skills section
- **WHEN** the user navigates to the skills section
- **THEN** the system SHALL display category headings each followed by a horizontal carousel of technology chips/badges

### Requirement: Automatic carousel scrolling
Each technology carousel SHALL auto-scroll horizontally at a slow, smooth pace.

#### Scenario: Skills section is visible
- **WHEN** the skills section enters the viewport
- **THEN** each carousel SHALL begin auto-scrolling horizontally, creating a continuous marquee-like movement

#### Scenario: User hovers or focuses on a carousel
- **WHEN** the user hovers over or focuses on a carousel
- **THEN** the auto-scroll SHALL pause to allow manual interaction

### Requirement: Manual carousel interaction
Users SHALL be able to manually scroll/swipe carousels on all devices.

#### Scenario: Desktop user scrolls carousel
- **WHEN** a desktop user uses mouse wheel or drag on a carousel
- **THEN** the carousel SHALL scroll horizontally in the direction of the input

#### Scenario: Mobile user swipes carousel
- **WHEN** a mobile user swipes left or right on a carousel
- **THEN** the carousel SHALL scroll in the swipe direction

### Requirement: Carousel responsive layout
Carousels SHALL adapt to the available screen width on all device sizes.

#### Scenario: Mobile view of carousels
- **WHEN** the user views the skills section on a mobile device (< 768px)
- **THEN** category carousels SHALL stack vertically, each occupying full width with horizontal scroll

#### Scenario: Desktop view of carousels
- **WHEN** the user views the skills section on desktop (>= 768px)
- **THEN** category carousels SHALL display within the max-width container with smooth horizontal scrolling

### Requirement: Skill chip visual consistency
Each skill in the carousel SHALL be displayed as a styled chip/badge consistent with the site's design system.

#### Scenario: Viewing skill chips
- **WHEN** skill chips are rendered in a carousel
- **THEN** each chip SHALL have a border, subtle background tint, and readable text following the site's accent color palette
