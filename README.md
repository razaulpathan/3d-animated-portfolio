# 3D Animated Portfolio

A modern, interactive 3D portfolio website built with React, Three.js, and Framer Motion.

## Features

- 🎨 **3D Animated Hero Section** - Interactive 3D scene with animated geometric shapes
- ✨ **Smooth Scroll Animations** - Beautiful animations triggered by scroll events
- 📱 **Responsive Design** - Fully responsive on all devices
- 🎯 **Project Showcase** - Display your projects in an elegant card layout
- 💼 **Skills Section** - Categorized skills with interactive badges
- 📨 **Contact Form** - Functional contact form with animations
- 🚀 **Performance Optimized** - Fast loading and smooth 60 FPS animations

## Tech Stack

- **Frontend**: React 18
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion, GSAP
- **Styling**: CSS3 with Gradient Effects
- **Build Tool**: Create React App

## Installation

1. Clone the repository:
```bash
git clone https://github.com/razaulpathan/3d-animated-portfolio.git
cd 3d-animated-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Update Personal Information
Edit the following files to add your information:
- `src/components/Hero.jsx` - Hero section content
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills
- `src/components/Contact.jsx` - Contact information

### Customize Colors
Update the gradient colors in:
- `src/App.css`
- `src/components/*.css`
- `src/components/Scene.jsx`

The main gradient colors used:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Dark BG: `#0f0c29`

### Add More 3D Elements
Modify `src/components/Scene.jsx` to add custom 3D models and animations using Three.js.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

You can deploy to platforms like:
- **Vercel** - `vercel deploy`
- **Netlify** - `netlify deploy`
- **GitHub Pages** - `npm run build` then push to gh-pages

## Project Structure

```
3d-animated-portfolio/
├── public/
│   ├── index.html
│   └── 3d-models/        (Add 3D models here)
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── Scene.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Tips for Enhancement

1. **Add 3D Models**: Download `.glb` or `.gltf` models from Sketchfab and import them into the Scene component
2. **Parallax Scrolling**: Use `useScroll` from Framer Motion for scroll-linked animations
3. **Dark/Light Mode**: Add theme switching functionality
4. **Blog Section**: Add a blog using markdown or a CMS
5. **Analytics**: Integrate Google Analytics or Plausible
6. **SEO**: Add meta tags and structured data

## License

MIT License - Feel free to use this template for your portfolio!

## Support

For issues or questions, please create an issue on GitHub.

---

**Made with ❤️ and React Three Fiber**
