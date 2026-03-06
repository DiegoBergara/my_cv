## ADDED Requirements

### Requirement: Static build output
The site SHALL build to a fully static output (HTML, CSS, JS, assets) with no server-side rendering requirements.

#### Scenario: Running the build command
- **WHEN** `npm run build` is executed
- **THEN** the system SHALL generate a `dist/` directory containing all static files ready for deployment

### Requirement: GitHub Actions deployment
The site SHALL deploy automatically to GitHub Pages via GitHub Actions on every push to the `main` branch.

#### Scenario: Push to main branch
- **WHEN** code is pushed to the `main` branch
- **THEN** the GitHub Actions workflow SHALL build the site and deploy it to GitHub Pages

#### Scenario: Manual deployment trigger
- **WHEN** the workflow_dispatch event is triggered manually
- **THEN** the GitHub Actions workflow SHALL build and deploy the site

### Requirement: Base path configuration
The build SHALL support a configurable base path for GitHub Pages project sites (e.g., `/my_cv/`).

#### Scenario: Building for GitHub Pages project site
- **WHEN** the `BASE_PATH` environment variable is set to `/${{ github.event.repository.name }}/`
- **THEN** all asset paths and internal links SHALL be prefixed with that base path

### Requirement: Optimized production build
The production build SHALL optimize assets for performance.

#### Scenario: Production build output
- **WHEN** the build completes
- **THEN** the output SHALL include minified HTML/CSS/JS, optimized images, and proper cache-busting hashes on asset filenames
