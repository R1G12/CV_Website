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

## 📁 Folder Structure

```
CV_Website/
├── index.html                  ← Main page (all sections)
├── README.md                   ← This file
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles & CSS variables
│   ├── js/
│   │   ├── main.js             ← Navigation, animations, rendering, lightbox
│   │   ├── projects.js         ← Project data (edit this to add projects)
│   │   └── certifications.js   ← Certification data (edit this to add certs)
│   ├── images/
│   │   ├── profile.jpg         ← Your profile photo (replace placeholder)
│   │   ├── project-1.jpg       ← Project thumbnails (400×300 recommended)
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   ├── cert-1.jpg          ← Certificate images (600×400 recommended)
│   │   ├── cert-2.jpg
│   │   └── cert-3.jpg
│   └── Romain_Gelin_CV.pdf     ← Your CV (linked from hero section)
```

---

## ✏️ How to Add / Edit Projects

Open `assets/js/projects.js` and add an object to the `projects` array:

```js
{
  title: "My New Project",
  description: "A short description of what this project does.",
  tags: ["Python", "Data Viz"],
  image: "assets/images/project-4.jpg",    // add the image to assets/images/
  github: "https://github.com/R1G12/...",
  live: "https://example.com"               // leave "" if no live link
}
```

The site automatically renders all entries — no HTML changes needed.

---

## ✏️ How to Add / Edit Certifications

Open `assets/js/certifications.js` and add an object to the `certifications` array:

```js
{
  name: "Certificate Name",
  issuer: "Issuing Organization",
  date: "2025",
  description: "Brief description of the certification.",
  image: "assets/images/cert-4.jpg"        // add the image to assets/images/
}
```

Clicking a certificate image opens a lightbox preview.

---

## 🖼️ Replacing Placeholder Images

| File | Purpose | Recommended Size |
|------|---------|-----------------|
| `profile.jpg` | Hero profile photo | 560×680 px |
| `project-X.jpg` | Project card thumbnails | 400×300 px |
| `cert-X.jpg` | Certificate images | 600×400 px |

Simply replace the placeholder files with your real images using the same filenames.

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

The contact form uses [Formspree](https://formspree.io/) by default. To activate it:

1. Create a free Formspree account
2. Create a new form and copy your form ID
3. In `index.html`, replace `YOUR_FORM_ID` in the form action URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 📝 License

Personal portfolio — © Romain Gelin
