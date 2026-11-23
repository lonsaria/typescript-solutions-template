# TypeScript Problem Solutions

A template for solving programming problems in TypeScript with Vitest tests.

## Quick Start

```bash
npm install
npm run new -- 20 valid-parentheses
```

The generator creates `src/problems/0020-valid-parentheses/` containing:

- `solution.ts` — the solution implementation;
- `solution.test.ts` — the Vitest test suite;
- `run.ts` — a script for running the solution manually;
- `README.md` — the problem statement and description.

## Commands

| Command                                    | Purpose                        |
| ------------------------------------------ | ------------------------------ |
| `npm test`                                 | Run Vitest in watch mode       |
| `npm run test:run`                         | Run all tests once             |
| `npm run new -- <id> <name-in-kebab-case>` | Create a new problem directory |
| `npm run lint`                             | Check source code              |
| `npm run lint:fix`                         | Automatically fix lint errors  |
| `npm run format`                           | Check formatting               |
| `npm run format:fix`                       | Format source code             |
| `npm run dev -- <file>`                    | Run a TypeScript file          |
| `npm run dev:watch -- <file>`              | Run with automatic restarts    |
| `npm run typecheck`                        | Check types                    |

## Structure

```text
src/
└── problems/
    └── 0001-example-problem/
        ├── README.md
        ├── run.ts
        ├── solution.ts
        └── solution.test.ts
scripts/
└── create-problem.js
```
