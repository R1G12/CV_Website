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
│   │   ├── Projects/           ← NEW: Nested folders per project
│   │   │   └── Project-Name/   ← Folder for a single project
│   │   │       ├── image-1.jpg
│   │   │       └── image-2.jpg
│   │   └── certifications/     ← Folder for cert images
│   └── Romain_Gelin_CV.pdf     ← Your CV (linked in Hero)
```

---

## 🖼️ Replacing Placeholder Images

For a professional look, ensure your images match these recommended dimensions:

| File / Folder | Purpose | Recommended Size | Location |
|---------------|---------|-----------------|----------|
| `profile.jpg` | Hero profile photo | **560 × 680 px** | `assets/images/` |
| `Projects/` | **Project images** | **800 × 500 px** | `assets/images/Projects/[Project-Name]/` |
| `certifications/` | **All certificate images** | **600 × 400 px** | `assets/images/certifications/` |

> [!IMPORTANT]
> Both sections now use **horizontal scroll**. 
> For Projects, you can now have **multiple images** per card. Create a folder for each project and drop your images there.

> [!TIP]
> Use the exact same filenames as the placeholders to avoid changing the code.

---

## ✏️ How to Add Your Content

### 1. Update Projects
Open `assets/js/projects.js` and add your project details. Use the `images` array to point to one or more files in your project folder.

```js
{
  title: "Example Project",
  description: "What did you build?",
  tags: ["Python", "ML"],
  images: [
    "assets/images/Projects/My-Project/img1.jpg",
    "assets/images/Projects/My-Project/img2.jpg"
  ],
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
