# 17 - Kinetic Typography & Generative Portfolio

> An interactive portfolio showcasing generative art, kinetic typography engines, and design systems.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5 / CSS3 / Vanilla JS](https://img.shields.io/badge/tech-Vanilla%20HTML%20%2F%20CSS%20%2F%20JS-brightgreen.svg)]()

---

## ✨ Features

- **Generative Particle Engine (`rows-logo-engine.js`)**: Real-time canvas physics simulation rendering interactive particle typography and logo glyph morphing with spring mechanics, noise displacement, and mouse repulsion.
- **Dynamic Interaction Architecture**:
  - Interactive grid cards and magnetic micro-interactions.
  - Dark-mode aesthetic with editorial contrast typography.
  - Floating dynamic tooltip with cursor tracking.
  - Smooth email copy notification toast.
- **Zero-Dependency Architecture**: Built purely with Vanilla JavaScript, HTML5 Canvas, and modern CSS3 custom properties for maximum performance and 60 FPS fluidity.

---

## 📂 Project Structure

```text
├── index.html               # Main portfolio landing page
├── projects.html            # All projects archive / gallery
├── project-detail.html      # Project case study detail view
├── styles.css               # Global typography, tokens, animations, and components
├── rows-logo-engine.js      # Interactive generative particle typography engine
├── favicon.svg              # Vector favicon
├── logo.png                 # Brand logo asset
├── logo-transparent.png     # Transparent logo asset
├── *.json                   # Point cloud coordinate vectors for typography morphing
│   ├── brand-points.json
│   ├── compact-points.json
│   ├── glyph-points.json
│   ├── highres-17-points.json
│   ├── new-logo-points.json
│   └── sampled-points.json
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Local Preview

Since this project uses modern ES modules and JSON data fetches for particle coordinates, serve it with any local static HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .

# Using VS Code Live Server
# Click "Go Live" from index.html
```

Then visit `http://localhost:8000` in your web browser.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+)
- **Graphics**: HTML5 Canvas 2D Context, Particle Physics & Vector Math
- **Styling**: Vanilla CSS, Modern CSS Grid / Flexbox, CSS Custom Properties

---

## 👤 Author

- **GitHub**: [@1770777](https://github.com/1770777)
- **Repository**: [17-portfolio](https://github.com/1770777/17-portfolio)
