# Lumina - Modern Developer Portfolio

Lumina is a high-performance, aesthetically driven developer portfolio template built for the modern web. 

## 🚀 Important: GitHub Pages Deployment
GitHub Pages is a static file host. Because this project uses **React** and **TypeScript (.tsx)**, it cannot be run by simply uploading the files. You have two main options:

### Option A: Automatic Deployment (Recommended)
1. Push your code to a new GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. GitHub will suggest a "Static HTML" or "Vite" workflow. Use a standard Vite workflow to build and deploy your React app automatically.

### Option B: Local Build
1. Use a tool like **Vite** (`npm run build`) to generate a `dist` folder.
2. Upload only the contents of the `dist` folder to your GitHub repository's `gh-pages` branch.

## 🛠 Tech Stack
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS (JIT mode)
- **Icons**: Lucide React
- **Routing**: React Router (HashRouter) - *Crucial for GitHub Pages compatibility.*

## 📂 Project Structure
- `App.tsx`: Main application shell and routing logic.
- `index.html`: The entry point that boots the React app.
- `types.ts`: Centralized TypeScript interfaces.

## 🔮 Future Roadmap
- **Agentic Integration**: Re-introducing Gemini-powered assistants.
- **Live GitHub Telemetry**: Fetch live repo stats via the GitHub API.
- **Immersive 3D Visuals**: Interactive background with `react-three-fiber`.

Built with ❤️ for the developer community.