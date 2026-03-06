# navigation-system (change delta)

## MODIFIED Requirements

### Requirement: Sticky header navigation
The system SHALL display a fixed/sticky header navigation bar that remains visible as the user scrolls. The bar SHALL have a transparent or highly transparent background (e.g. no solid fill or minimal opacity) so that page content is visible behind it. Visual emphasis SHALL be on the clickable elements (links, language selector), not on the bar itself.

#### Scenario: User scrolls down the page
- **WHEN** the user scrolls past the hero section
- **THEN** the navigation bar SHALL remain fixed at the top of the viewport with a transparent or highly transparent background (e.g. no or minimal backdrop blur and no opaque background)

#### Scenario: Navbar transparency
- **WHEN** the user views the page
- **THEN** the navbar SHALL appear transparent or nearly transparent so that content behind it (e.g. hero) remains visible through the header area

### Requirement: Highlighted clickable navigation elements
Navigation links and the language selector SHALL be clearly highlighted as interactive elements (e.g. visible contrast, hover state, or subtle background/border) so that they stand out against the transparent bar and are obviously clickable.

#### Scenario: Nav links are visually prominent
- **WHEN** the user views the navbar
- **THEN** each navigation link (e.g. Sobre mí, Stack, Experiencia) SHALL be clearly distinguishable and look clickable (e.g. through contrast, hover feedback, or subtle pill/underline)

#### Scenario: Language selector is visually prominent
- **WHEN** the user views the navbar
- **THEN** the language toggle (e.g. "EN" / "ES") SHALL be clearly visible and identifiable as a clickable control (e.g. border, background, or contrast that sets it apart)
