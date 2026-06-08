# Virtual Assistant Portfolio Website

A clean, professional, and mobile-responsive portfolio website designed for Virtual Assistants.

## Features

- ✨ **Professional Design** - Modern gradient hero section with clean typography
- 📱 **Mobile Responsive** - Fully optimized for all screen sizes
- ⚡ **Fast Loading** - Built with React + Vite for optimal performance
- 🎨 **Clean Layout** - Easy-to-navigate sections with smooth scrolling

## Sections

1. **Hero Section** - Professional photo, name, tagline, and introduction
2. **Experience** - Timeline view of work history
3. **Skills** - Categorized skill tags (Administrative, Communication, Technical, Project Management)
4. **Resume** - Resume viewer/download section
5. **Work Samples** - 3 featured work demonstrations
6. **Contact** - Contact information and message form
7. **Navigation** - Fixed navigation bar for easy section access

## Getting Started

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5174/` (or another port if 5174 is in use)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

Edit `src/App.jsx`:

- **Line 34**: Change "Jane Doe" to your name
- **Line 35**: Update "Professional Virtual Assistant" tagline
- **Lines 36-40**: Modify the introduction text

### 2. Professional Photo

Replace the placeholder:
- Add your photo to `src/assets/` (e.g., `profile.jpg`)
- In `src/App.jsx`, lines 30-38, replace the SVG placeholder with:
  ```jsx
  <img src="/path-to-your-photo.jpg" alt="Your Name" />
  ```

### 3. Experience Section

Edit `src/App.jsx` starting from line 49:
- Modify job titles, companies, dates, and responsibilities
- Add or remove timeline items as needed

### 4. Skills

Update skill categories and tags (lines 98-158 in `src/App.jsx`):
- Modify existing skills
- Add new skill categories
- Remove irrelevant skills

### 5. Resume

To add your actual resume:
- Option A: Link to a PDF file
  ```jsx
  <a href="/path-to-resume.pdf" download className="download-button">
    Download PDF
  </a>
  ```
- Option B: Embed PDF viewer (requires additional library like `react-pdf`)

### 6. Work Samples

Update the work demonstrations (lines 172-234 in `src/App.jsx`):
- Replace placeholder images with actual project images
- Modify titles and descriptions
- Add more work items if needed

### 7. Contact Information

Edit contact details (lines 242-292 in `src/App.jsx`):
- Email address
- Phone number
- Location
- LinkedIn URL

### 8. Color Scheme

Modify the color scheme in `src/App.css` (lines 8-17):

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --primary-dark: #1e40af;       /* Darker shade for hover states */
  --text-primary: #1f2937;       /* Main text color */
  --text-secondary: #6b7280;     /* Secondary text color */
  --background: #ffffff;          /* Main background */
  --background-alt: #f9fafb;     /* Alternate background */
  --border-color: #e5e7eb;       /* Border color */
}
```

### 9. Hero Background

Change the hero gradient (line 79 in `src/App.css`):

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these alternatives:
- Blue gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Purple gradient: `linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)`
- Orange gradient: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`

## Adding Images

1. Place images in `frontend/src/assets/` or `frontend/public/`
2. Import in `App.jsx`: `import myImage from './assets/myImage.jpg'`
3. Use in JSX: `<img src={myImage} alt="Description" />`

## Contact Form

The contact form is currently a static HTML form. To make it functional:

1. **Using EmailJS** (client-side)
2. **Using a backend API** (Node.js, Python, etc.)
3. **Using form services** (Formspree, Netlify Forms, etc.)

Example with EmailJS:

```bash
npm install @emailjs/browser
```

Then follow the EmailJS React documentation.

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technology Stack

- **React 19** - UI library
- **Vite 8** - Build tool
- **CSS3** - Styling
- **SVG** - Icons

## Performance Tips

1. **Optimize Images**: Compress images before adding them (use tools like TinyPNG)
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minimize Dependencies**: Only install necessary packages
4. **Use CDN**: Host large files on a CDN if possible

## License

Free to use and modify for personal portfolio purposes.

## Support

For questions or issues:
- Check the React documentation: https://react.dev/
- Check the Vite documentation: https://vite.dev/

---

**Note**: Remember to replace all placeholder content (text, images, contact information) with your actual information before deploying!
