# Container & Kubernetes Security Scanner — React Frontend

This is a Vite + React frontend prototype based on the project's proposed integrated DevSecOps workflow.

## Included pages

1. `/auth` — Login / Sign up
2. `/` — Main landing/product page with:
   - Hero
   - Why this platform
   - 8-step workflow
   - Scan input section
   - Footer
3. `/dashboard` — Centralized security dashboard
4. `/scans/:scanId` — Detailed scan result view

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## Backend connection

Copy `.env.example` to `.env` and set:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

The current UI uses mock scan data so the frontend can be viewed before the backend is ready.

When FastAPI/Spring Boot endpoints are implemented, replace the mock data with the functions in `src/services/scanService.js`.

## Important prototype note

The authentication in this frontend is demo-only and stores a basic user object in localStorage. Do not use it as production authentication. Connect it to the real backend authentication service before deployment.

## Project concepts represented

- Container image vulnerability scanning — Trivy
- Dockerfile security analysis
- Kubernetes configuration scanning — Kubescape
- Runtime monitoring — Falco
- Finding collection and cross-layer correlation
- Risk assessment and prioritization
- AI-assisted explanation and reasoning
- Remediation recommendations
- Centralized dashboard and reports
- CI/CD / GitHub Actions integration
