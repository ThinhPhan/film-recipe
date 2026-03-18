<!--
Sync Impact Report
- Version change: 1.0.0 → 1.1.0
- List of modified principles: None
- Added sections:
    - VI. Clean & Modular Code (GATE: CODE_MODULARITY)
    - VII. Comprehensive Unit Testing (GATE: UNIT_TESTS_PASSED)
- Removed sections: None
- Templates requiring updates:
    - .specify/templates/plan-template.md (✅ updated)
    - .specify/templates/tasks-template.md (✅ updated)
- Follow-up TODOs: None
-->

# Film Recipe Constitution
<!-- Project: Film Recipe - A structured framework for photography simulation management -->

## Core Principles

### I. Spec-First Development (GATE: SPEC_VALIDATED)
All feature development MUST begin with a formal specification (`spec.md`). The specification must focus on user value (WHAT and WHY) and remain technology-agnostic. It must contain prioritized user stories (P1, P2, P3) and measurable success criteria. Implementation cannot proceed until the specification is ratified.

### II. Architecture-Guided Implementation (GATE: PLAN_RATIFIED)
A technical plan (`plan.md`) MUST bridge the gap between specification and code. It must define the technology stack, data models, project structure, and technical constraints. The plan must be completed and approved before generating implementation tasks.

### III. User-Story Centricity (GATE: STORY_INDEPENDENCE)
Implementation MUST be organized into phases corresponding to user stories. Each user story phase must be independently testable and deliver a viable increment of value. This ensures early validation and avoids monolithic "big bang" integrations.

### IV. Task-Driven Accountability (GATE: TASKS_ORDERED)
All implementation work MUST be tracked in an actionable `tasks.md` file. Every task must have a unique ID (Txxx), a priority/parallel marker if applicable, a user story label (e.g., [US1]), and an explicit file path. Tasks must be dependency-ordered to ensure a logical build sequence.

### V. Quality & Consistency Analysis (GATE: ANALYZE_PASSED)
The `/speckit.analyze` command MUST be executed after task generation and before implementation. This cross-artifact analysis ensures alignment between the spec, plan, and tasks. All "CRITICAL" findings must be resolved or explicitly justified before proceeding to code.

### VI. Clean & Modular Code (GATE: CODE_MODULARITY)
Implementation MUST follow SOLID principles and maintain high modularity. Components SHOULD be loosely coupled and highly cohesive. "Spaghetti code" or monolithic files are violations. Every logical unit should be encapsulated and easily replaceable or extendable to ensure long-term maintainability.

### VII. Comprehensive Unit Testing (GATE: UNIT_TESTS_PASSED)
Every new feature or bug fix MUST be accompanied by unit tests. Unit tests must cover edge cases, error conditions, and core logic. Code coverage should be monitored, aiming for high visibility into critical paths. Unit tests are mandatory and must pass before a feature is considered complete.

## Development Workflow

### Feature Lifecycle
1. **Specify**: Define requirements in `spec.md` using `/speckit.specify`.
2. **Plan**: Design the technical solution in `plan.md` using `/speckit.plan`.
3. **Task**: Generate actionable tasks in `tasks.md` using `/speckit.tasks`.
4. **Analyze**: Verify consistency across all artifacts using `/speckit.analyze`.
5. **Implement**: Execute tasks in `tasks.md` using `/speckit.implement`.

### Documentation Standards
- All design artifacts MUST reside in the feature directory (e.g., `specs/###-feature-name/`).
- Diagrams and data models should be kept alongside the plan.
- Checklists MUST be used to validate quality at each stage.

## Technical Constraints

### Modularity and Testing
- **Self-Containment**: Every feature should be as self-contained as possible, minimizing tight coupling between unrelated components.
- **Verification**: Every user story MUST have an "Independent Test" scenario defined in the spec and verified in the implementation phase.
- **Simplicity**: Follow YAGNI (You Ain't Gonna Need It) principles. Avoid premature abstraction and keep implementations focused on the specific requirements of the current user stories.

## Governance
This constitution supersedes all other informal practices. Amendments to these principles require a version bump (MINOR for additions/clarifications, MAJOR for removals or fundamental redefinitions). All pull requests must be reviewed against these core principles.

**Version**: 1.1.0 | **Ratified**: 2026-03-13 | **Last Amended**: 2026-03-17
