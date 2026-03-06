# experience-timeline (change delta)

## MODIFIED Requirements

### Requirement: Canonical list of entries (data source for implementation)
The following list defines the complete career timeline. Order in data SHALL be reverse chronological (this order = display order). Overlap: BPS and Ripio overlap in recent years; Alutel and Ripio do not overlap.

| Period | Title / Role | Company / Event |
|--------|--------------|------------------|
| Sep 2025 — Presente | SysAdmin Cluster (Hyper-V, OpenShift, VMware) | BPS |
| Jun 2025 | Egreso como Software Engineer | UCU |
| Sep 2023 — Sep 2025 | Liberaciones CI/CD | BPS |
| Nov 2022 — Presente | Sr. Full Stack Developer | Ripio |
| Ene 2021 — Nov 2022 | Ssr. Full Stack Developer | Ripio |
| Oct 2020 — Dic 2020 | Jr. Full Stack Developer | Ripio |
| Jun 2019 — Sep 2020 | (rol a definir) | Alutel |
| 2017 | Ingreso a la universidad con beca al buen desempeño concursable | UCU |

Company/context links for reference: BPS https://www.bps.gub.uy/19382/banco-de-prevision-social.html , Ripio https://www.ripio.com/es , Alutel https://www.alutel.com.uy/

Note: Ripio Jr start date is Oct 2020 so that Alutel (Jun 2019–Sep 2020) and Ripio do not overlap. If the actual start was Oct 2019, adjust and show both periods overlapping in the copy.

#### Scenario: Experience data matches canonical list
- **WHEN** the experience section is rendered
- **THEN** the system SHALL display exactly eight timeline entries in the order above (most recent first), with period, title/role, and description for each entry

#### Scenario: Bilingual content
- **WHEN** the user switches locale (ES/EN)
- **THEN** each of the eight entries SHALL show the same periods and roles with descriptions in the selected language
