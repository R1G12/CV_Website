# Romain Gelin — Personal Portfolio Website

A refined, editorial-style personal website showcasing experience, education, projects, and certifications. Built with pure HTML, CSS, and JavaScript — no frameworks, no build step. Deployable on **GitHub Pages** out of the box.

---

## 🚀 Deploy on GitHub Pages

1. Push this repository to GitHub (e.g. `https://github.com/R1G12/CV_Website`)
2. Go to **Settings → Pages**
3. Under **Source**, select **Branch: `main`** and folder **`/ (root)`**
4. Click **Save**
5. Your site will be live at `https://R1G12.github.io/CV_Website/`

That's it — no build step required.

---

---

## 📁 Folder Structure

```
CV_Website/
├── index.html                  ← Main page (all sections)
├── README.md                   ← This file
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles & CSS variables
│   ├── js/
│   │   ├── main.js             ← Application logic
│   │   ├── projects.js         ← Project data (edit this!)
│   │   └── certifications.js   ← Certification data (edit this!)
│   ├── images/
│   │   ├── profile.jpg         ← Your photo
│   │   ├── project-X.jpg       ← Project thumbnails
│   │   └── certifications/     ← NEW: Folder for all your cert images
│   └── Romain_Gelin_CV.pdf     ← Your CV (linked in Hero)
```

---

## 🖼️ Replacing Placeholder Images

For a professional look, ensure your images match these recommended dimensions:

| File / Folder | Purpose | Recommended Size | Location |
|---------------|---------|-----------------|----------|
| `profile.jpg` | Hero profile photo | **560 × 680 px** | `assets/images/` |
| `project-X.jpg` | Project card thumbnails | **400 × 300 px** | `assets/images/` |
| `certifications/` | **All certificate images** | **600 × 400 px** | `assets/images/certifications/` |

> [!IMPORTANT]
> The certifications section now uses a **horizontal scroll**. Simply drop your images into the `certifications/` folder and update `assets/js/certifications.js` to show them.

> [!TIP]
> Use the exact same filenames as the placeholders to avoid changing the code.

---

## ✏️ How to Add Your Content

### 1. Update Projects
Open `assets/js/projects.js` and add your project details to the `projects` array. The site will automatically generate a new card for each entry.

```js
{
  title: "Example Project",
  description: "What did you build and why?",
  tags: ["Python", "Machine Learning"],
  image: "assets/images/project-1.jpg",
  github: "https://github.com/R1G12/...",
  live: "" 
}
```

### 2. Update Certifications
Open `assets/js/certifications.js` and add your credentials. Clicking a certificate will open it in a lightbox.

```js
{
  name: "Certification Name",
  issuer: "Organization",
  date: "2025",
  description: "Brief summary of skills gained.",
  image: "assets/images/cert-1.jpg"
}
```

---

## 🎨 Customization

All design tokens are CSS custom properties in `assets/css/style.css`:

```css
:root {
  --navy: #0D1B2A;
  --off-white: #F5F0E8;
  --gold: #C9A84C;
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Source Sans 3', Helvetica, sans-serif;
}
```

---

## 📬 Contact Form

The contact form is pre-configured for [Formspree](https://formspree.io/). 

1. Create a free account at [Formspree](https://formspree.io/).
2. Create a new form and copy your **Form ID**.
3. In `index.html` (line 362), replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 📝 License

Personal portfolio — © Romain Gelin
