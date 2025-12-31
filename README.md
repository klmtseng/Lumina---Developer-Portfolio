# Lumina - Modern Developer Portfolio

Lumina is a high-performance, aesthetically driven developer portfolio template built for the modern web. It leverages a "Glassmorphic" design language to create a sophisticated, professional digital presence that is optimized specifically for deployment on **GitHub Pages**.

## 🚀 Vision
The project aims to provide developers with a "zero-config" starting point that looks like a high-end agency site but remains lightweight and easy to maintain. It prioritizes:
- **Performance**: Near-instant load times through optimized asset delivery.
- **Aesthetics**: A carefully crafted dark-mode UI using Tailwind CSS and backdrop filters.
- **Simplicity**: No complex backends; just pure, functional React components.

## 🛠 Tech Stack
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS (JIT mode)
- **Icons**: Lucide React
- **Routing**: React Router (HashRouter) - *Crucial for GitHub Pages compatibility.*
- **Fonts**: Space Grotesk (Headings) & Inter (Body)

## 📂 Project Structure
- `/src/App.tsx`: Main application shell and routing logic.
- `/src/types.ts`: Centralized TypeScript interfaces for projects and skills.
- `/metadata.json`: SEO and application manifest details.

## 🔮 Future Roadmap (Extensions)

### 1. Agentic Integration
While currently a static build, Lumina is designed to easily integrate with the **Gemini API**. Future versions could include a "Digital Twin" chatbot that can answer questions about your experience using Search Grounding for real-time accuracy.

### 2. Live GitHub Telemetry
Integrate with the GitHub API to fetch live stars, forks, and contribution graphs directly into the "Work" section, ensuring your portfolio is always up-to-date with your latest coding activity.

### 3. Immersive 3D Visuals
Utilize `react-three-fiber` to add a low-poly interactive background or a 3D "Command Center" in the hero section to showcase deep technical expertise.

### 4. Headless CMS Integration
Migrate the static project data to a Headless CMS (like Contentful or Sanity) to allow for content updates without pushing new code.

### 5. Multi-Language Support (i18n)
Full internationalization support to cater to global opportunities, allowing visitors to toggle between different languages seamlessly.

## 🛠 Deployment
This project is pre-configured for **GitHub Pages**. Since it uses `HashRouter`, you can simply:
1. Push your code to a GitHub repository.
2. Enable GitHub Pages in the repository settings.
3. Select the `main` branch (or `/docs` folder) as the source.

---

Built with ❤️ for the developer community.