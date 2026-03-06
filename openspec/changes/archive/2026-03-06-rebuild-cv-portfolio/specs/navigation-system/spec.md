## ADDED Requirements

### Requirement: Sticky header navigation
The system SHALL display a fixed/sticky header navigation bar that remains visible as the user scrolls.

#### Scenario: User scrolls down the page
- **WHEN** the user scrolls past the hero section
- **THEN** the navigation bar SHALL remain fixed at the top of the viewport with a semi-transparent background and backdrop blur

### Requirement: Smooth scroll anchor navigation
Navigation links SHALL scroll smoothly to their corresponding sections.

#### Scenario: User clicks a navigation link
- **WHEN** the user clicks a nav link (e.g., "Proyectos")
- **THEN** the page SHALL smooth-scroll to the corresponding section anchor with an offset for the sticky header height

### Requirement: Mobile hamburger menu
On mobile devices, the navigation SHALL collapse into a hamburger menu.

#### Scenario: Mobile user views navigation
- **WHEN** a user on a mobile device (< 768px) views the page
- **THEN** the navigation links SHALL be hidden behind a hamburger icon button

#### Scenario: Mobile user opens hamburger menu
- **WHEN** a mobile user taps the hamburger icon
- **THEN** a full-screen or slide-out menu SHALL appear showing all navigation links and the language selector

#### Scenario: Mobile user selects a menu item
- **WHEN** a mobile user taps a navigation link in the open menu
- **THEN** the menu SHALL close and the page SHALL smooth-scroll to the selected section

### Requirement: Language selector
The navigation SHALL include a language toggle between ES and EN.

#### Scenario: User switches language
- **WHEN** the user clicks a language option (e.g., "EN")
- **THEN** the system SHALL navigate to the corresponding locale route (e.g., `/en/`) and display all content in the selected language

### Requirement: Active section indicator
The navigation SHALL indicate which section is currently in view.

#### Scenario: User scrolls through sections
- **WHEN** the user scrolls and a new section enters the viewport
- **THEN** the corresponding navigation link SHALL be highlighted/underlined to indicate it is the active section
