# Project Structure
/src
│── main.ts
│── server.ts
│── presentation
│   └── routers
│       └── contact-router.ts
├── domain
│   ├── interfaces
│   │   ├── repositories
│   │   │    └── contact-repository.ts
│   │   └── use-cases
│   │       └── contact
│   │           ├── get-all-contacts.ts
│   │           └── create-contact.ts
│   ├── entities
│   │   └── contact.ts
│   ├── repositories
│   │   └── contact-repository.ts
│   └── use-cases
│       └── contact
│           ├── get-all-contacts.ts
│           └── create-contact.ts
└── data
    ├── interfaces
    │   └── data-sources
    │       ├── database-wrapper.ts
    │       └── contact-data-source.ts
    └── data-sources
        └── mongodb
            ├── models
            │   └── contact.ts
            └── mongodb-contact-data-source.ts

# Layers

## Presentation
The presentation layer would mainly be used for inputting and outputting user data (API routes).

## Domain
The inner core (domain) layer holds all business logic (use cases, repositories).

## Data
The data layer holds all infrastructure implementations (data sources).