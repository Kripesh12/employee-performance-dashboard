# Employee Performance Dashboard

A production-grade React application for managing and visualising employee performance data. Built with a focus on clean architecture, type safety, and scalable state management.

---

## Tech Stack

| Tool            | Purpose                   |
| --------------- | ------------------------- |
| React 18        | UI framework              |
| TypeScript      | Type safety               |
| Tailwind CSS    | Styling                   |
| shadcn/ui       | Component primitives      |
| TanStack Query  | Server state + async data |
| Zustand         | Global UI state           |
| React Hook Form | Form management           |
| Zod             | Schema validation         |

---

```bash
# Clone the repository
git clone https://github.com/your-username/employee-dashboard.git
cd employee-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
employee-performance-dashboard/
├── public/
├── src/
│   ├── app/
│   │   └── layout/
│   │       ├── dashboard-layout.tsx
│   │       ├── footer.tsx
│   │       └── top-bar.tsx
│   ├── features/
│   │   └── employee/
│   │       ├── api/
│   │       │   ├── employee.api.ts
│   │       │   └── employee.keys.ts
│   │       ├── components/
│   │       │   ├── add-employee-button.tsx
│   │       │   ├── add-employee-drawer.tsx
│   │       │   ├── add-employee-form.tsx
│   │       │   ├── edit-employee-drawer.tsx
│   │       │   ├── employee-card.tsx
│   │       │   ├── employee-empty-state.tsx
│   │       │   ├── employee-error.tsx
│   │       │   ├── employee-filters.tsx
│   │       │   ├── employee-list.tsx
│   │       │   ├── employee-pagination.tsx
│   │       │   ├── employee-result-count.tsx
│   │       │   ├── employee-skeleton.tsx
│   │       │   └── index.ts
│   │       ├── constants/
│   │       │   ├── employee.ts
│   │       │   ├── filter-options.ts
│   │       │   └── index.ts
│   │       ├── hooks/
│   │       │   ├── api/
│   │       │   │   ├── use-employee-options.ts
│   │       │   │   ├── use-employees.ts
│   │       │   │   ├── use-save-employee.ts
│   │       │   │   └── use-update-employee.ts
│   │       │   └── ui/
│   │       │       ├── use-employee-filter.ts
│   │       │       └── use-pagination.ts
│   │       ├── mocks/
│   │       │   └── employees.ts
│   │       ├── schema/
│   │       │   └── add-employee-schema.ts
│   │       ├── store/
│   │       │   ├── employee-filter.store.ts
│   │       │   └── employee-ui.store.ts
│   │       ├── types/
│   │       │   ├── employee.ts
│   │       │   └── index.ts
│   │       └── index.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── app-avatar.tsx
│   │   │   ├── app-brandmark.tsx
│   │   │   ├── app-button.tsx
│   │   │   ├── app-combobox.tsx
│   │   │   ├── app-department-badge.tsx
│   │   │   ├── app-field.tsx
│   │   │   ├── app-input.tsx
│   │   │   ├── app-performance-badge.tsx
│   │   │   ├── app-select-field.tsx
│   │   │   ├── app-slider.tsx
│   │   │   ├── app-star-rating.tsx
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   └── use-debounce.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   └── ui/
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── combobox.tsx
│   │       ├── field.tsx
│   │       ├── input-group.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── pagination.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       └── textarea.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

---

## Architecture Decisions

### 1. Feature-First Folder Structure

All employee-related code lives under `features/employee/` — types, hooks, components, store, schema, and API. This means:

- Deleting the feature = deleting one folder
- Adding a new feature = adding one folder

```
features/employee/   ← owns everything employee-related
shared/              ← owns nothing domain-specific
layouts/             ← owns shell/navigation concerns
```

### 2. State Ownership — Three Clear Layers

Each type of state has exactly one owner:

```
Server state    → TanStack Query   (employees, options from API)
Global UI state → Zustand          (drawer open/close, editing target, filters)
Local UI state  → useState
```

### 3. Derived State for Filtering

Filtered employees are never stored separately — they are always computed from raw employees + current filters:

```ts
const filtered = useMemo(
  () => filterEmployees(employees, { ...filters, search: debouncedSearch }),
  [employees, filters, debouncedSearch],
);
```

This makes filtered data not to be out of sync with the source.

### 4. API Layer as a Seam

All async functions live in `employee.api.ts`. They currently use localStorage + mock data, but the interface is identical to what a real API would look like:

```ts
// mock
export async function fetchEmployees(): Promise {
  await delay(800);
  return JSON.parse(localStorage.getItem("employees") ?? "[]");
}
```

### 5. Zod as Single Source of Truth

Form types are inferred directly from the Zod schema:

```ts
export const employeeSchema = z.object({ ... })
export type EmployeeFormValues = z.infer
```

### 6. Barrel Exports

Each feature exposes a public API via `index.ts`:

```ts
// features/employee/index.ts
export { EmployeeList } from "./components/employee-list";
export { useEmployees } from "./hooks/api/use-employees";
export type { Employee } from "./types/employee.types";
```

External code imports from `@/features/employee` only — never from internal paths. Internal files use relative imports. This boundary prevents the codebase from becoming tangled as it grows.

---

## Key Features

- **Employee List** — responsive grid with skeleton loading states
- **Filters** — department, status, minimum performance score, sort by name / performance / joining date
- **Search** — debounced real-time search by name and role
- **Add Employee** — form with Zod validation, drawer UI
- **Edit Employee** — pre-populated form, updates list immediately
- **Pagination** — client-side with result count
- **Persistence** — localStorage for data persistence across sessions
- **Responsive** — mobile drawer navigation, responsive grid and filter layout

---

## Data Flow

```
localStorage / Mock Data
        ↓
employee.api.ts         (async functions)
        ↓
TanStack Query          (caching, loading states)
        ↓
useFilteredEmployees    (derived — filter + sort via useMemo)
        ↓
EmployeeList            (renders paginated results)
        ↓
EmployeeCard            (renders individual employee)
```

---

## Environment

No environment variables are required. The app runs entirely on the client with localStorage for persistence.
