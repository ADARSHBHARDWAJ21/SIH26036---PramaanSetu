# Host the web app on Render

The Render Blueprint hosts the React frontend and Express API together in one web service. The website calls the API through the same domain, and no separate database service is required for this prototype demo.

## Deploy

1. Commit and push the project to a Git repository that Render can access.
2. In Render, choose **New → Blueprint** and connect the repository containing `render.yaml`.
3. Create the `pramman-setu-web` service. Render generates a unique `JWT_SECRET` for the service.
4. When the deploy finishes, open the service URL. Check `/api/health` for the API status.

## Demo data limitation

Without Supabase credentials, the backend uses its built-in in-memory sample dataset. New registrations and other changes are temporary and can disappear whenever the service restarts or redeploys. Use this setup for a prototype demonstration with fictional data only; it is not suitable for storing real business records.

The login screen exposes the sample evaluator accounts and shared demo password. Anyone who can reach the public site can use them, so do not enter real or sensitive information.

## Local development

Run `run_all.bat` on Windows, or start the backend and frontend separately using the root README. In local development, Vite proxies `/api` to `http://localhost:5000`.
