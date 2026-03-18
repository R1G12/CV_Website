# My Personal Portfolio & Digital CV

Welcome to my portfolio repository! This is where I manage my personal website, which acts as my digital CV and a showcase of my projects at the intersection of Business Analytics and Data Science.

I built this site to be a high-performance, visually premium reflection of my professional identity. It is optimized for both speed and aesthetics.

## 🛠️ How I Update My Content

I've designed the site architecture so that I can update my information quickly. The content is split between static HTML and dynamic JavaScript data files.

### 1. About Me
*   **File:** `index.html`
*   **Location:** `<section class="about" id="about">` (approx. line 121)
*   **Type:** **Hardcoded in HTML**
*   **How to edit:** Search for the text in `index.html` and update it directly within the `<p>` tags.

### 2. Experience
*   **File:** `index.html`
*   **Location:** `<section class="experience" id="experience">` (approx. line 145)
*   **Type:** **Hardcoded in HTML**
*   **How to edit:** Each role is a `timeline-item`. To **add a new entry**, I just copy a `timeline-item` block, paste it at the top of the `timeline` div, and update the details (company, role, dates, description).

### 3. Education
*   **File:** `index.html`
*   **Location:** `<section class="education" id="education">` (approx. line 218)
*   **Type:** **Hardcoded in HTML**
*   **How to edit:** Each degree is an `education-card`. To **add a new one**, I copy an existing card and update the school name and degree information.

### 4. Skills
*   **File:** `index.html`
*   **Location:** `<section class="skills" id="skills">` (approx. line 252)
*   **Type:** **Hardcoded in HTML**
*   **How to edit:** 
    *   **Adding/Removing Skills:** I look for the `<span class="skill-tag">` elements. To add a skill, I create a new `<span>`. To remove one, I delete the line.
    *   **Renaming Categories:** I edit the `<h3>` titles in each `skills-column`.
    *   **Adding New Categories:** I copy a `skills-column` div and add it to the `skills-grid`.

### 5. Projects
*   **File:** `assets/js/projects.js`
*   **Type:** **Generated from JavaScript**
*   **How it works:** This file contains a constant array called `projects`. The site automatically renders a card for every object in this array.
*   **How to edit:** I can add, remove, or modify objects in the array. 
*   **Adding a project:** I add a new object following this structure:
    ```javascript
    {
      title: "My New Project",
      description: "A short but impactful description.",
      tags: ["Python", "Finance"],
      images: ["assets/images/Path/To/Image.png"],
      github: "https://github.com/R1G12/my-repo", // Link to the repo
      live: "" // Link to live demo (or empty to hide)
    }
    ```

### 6. Certifications
*   **File:** `assets/js/certifications.js`
*   **Type:** **Generated from JavaScript**
*   **How to edit:** Similar to projects, I just add or remove certificate objects in the `certifications` array.

### 7. Contact
*   **File:** `index.html`
*   **Type:** **Hardcoded in HTML**
*   **How to edit:** I've removed the automated contact form to keep the site clean. To update my LinkedIn or other links, I go to the `footer` section (line 353) or the general `Contact` area (line 338).

---

## 🔗 Managing Project GitHub Links

I use a smart logic to control which projects show a GitHub button.

### Hiding links
To hide the GitHub link for a project (e.g., if it's a private repository), I simply set the `github` field to an empty string `""` in `assets/js/projects.js`.

### Re-enabling links
To show the link again, I add the valid URL to the `github` field. The site will automatically detect the presence of the link and render the button.

**Example Without Link:**
```javascript
{
  title: "Confidential Project",
  github: "", // The GitHub button will NOT appear
  // ...
}
```

**Example With Link:**
```javascript
{
  title: "Open Source Analysis",
  github: "https://github.com/R1G12/analysis-repo", // The button WILL appear
  // ...
}
```

---

## 🚀 Running the site locally

To view my changes before pushing:
1.  Open this folder in my favorite editor (VS Code).
2.  Open `index.html` in a web browser.
3.  Refresh the page whenever I make an edit.

## 🌍 Deployment (GitHub Pages)

My site is hosted on **GitHub Pages**. Whenever I push changes to the `main` branch, GitHub automatically rebuilds and deploys the site.

**Important Note:** The site relies on the existing structure (`index.html` at the root and dependencies in `assets/`). Creating extra standalone HTML files (like `portfolio.html`) is not useful because the site is configured to serve `index.html`. If I need a new page, I should update the existing files or explicitly change the repository settings to serve a different path.
