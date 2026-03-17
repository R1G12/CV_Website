# My Personal Portfolio & Digital CV

Welcome to the repository for my personal portfolio website. This site serves as a comprehensive digital replacement for my CV, showcasing my professional journey, academic background, technical skills, and key projects in business analytics and finance.

I built this site with a premium, sleek aesthetic that reflects my commitment to quality and detail.

## 🛠️ How to Update My Content

I designed this website to be easily maintainable. Most of the content is either hardcoded in `index.html` or dynamically generated from data files in the `assets/js/` directory.

### 1. About Me
*   **File:** `index.html` (file:///c:/Users/Romain/Documents/GitHub/CV_Website/index.html)
*   **Location:** Look for the `<section class="about" id="about">` (approx. line 121).
*   **How to edit:** The text is hardcoded in HTML paragraphs (`<p>`). Simply rewrite the text within those tags.

### 2. Experience
*   **File:** `index.html` (file:///c:/Users/Romain/Documents/GitHub/CV_Website/index.html)
*   **Location:** Look for the `<section class="experience" id="experience">` (approx. line 145).
*   **How to edit:** Each role is a `timeline-item`. To add a new one, copy an existing `timeline-item` block and update the company name, role, dates, and bullet points.

### 3. Education
*   **File:** `index.html` (file:///c:/Users/Romain/Documents/GitHub/CV_Website/index.html)
*   **Location:** Look for the `<section class="education" id="education">` (approx. line 218).
*   **How to edit:** Similar to Experience, each degree is an `education-card`. Copy a card block to add a new institution.

### 4. Skills
*   **File:** `index.html` (file:///c:/Users/Romain/Documents/GitHub/CV_Website/index.html)
*   **Location:** Look for the `<section class="skills" id="skills">` (approx. line 252).
*   **How to edit:** 
    *   **Categories:** The columns (Technical, Finance & Business, Languages) are defined by `<h3>` tags. You can rename them directly.
    *   **Adding/Removing Skills:** Each skill is a `<span class="skill-tag">Skill Name</span>`. 
    *   To **add** a skill, add a new `<span>` with the `skill-tag` class.
    *   To **remove** a skill, simply delete the `<span>` line.
    *   To **expand categories**, you can add a new `skills-column` div and follow the same structure.

### 5. Projects
*   **File:** `assets/js/projects.js` (file:///c:/Users/Romain/Documents/GitHub/CV_Website/assets/js/projects.js)
*   **How it works:** This is a JavaScript array of objects. `main.js` reads this file and renders the cards automatically.
*   **Adding a project:** Add a new object to the `projects` array:
    ```javascript
    {
      title: "New Project Name",
      description: "Brief description of the work.",
      tags: ["Keyword1", "Keyword2"],
      images: ["assets/images/Projects/Path/To/Image.png"],
      github: "https://github.com/your-repo", // Leave as "" to hide
      live: "" // Leave as "" to hide
    }
    ```

### 6. Certifications
*   **File:** `assets/js/certifications.js` (file:///c:/Users/Romain/Documents/GitHub/CV_Website/assets/js/certifications.js)
*   **How it works:** Similar to Projects, this is a JavaScript data file.
*   **Adding a cert:** Add a new object to the `certifications` array with the `name`, `issuer`, `date`, `description`, and `image` path.

### 7. Contact Info
*   **File:** `index.html` (file:///c:/Users/Romain/Documents/GitHub/CV_Website/index.html)
*   **Location:** Look for the `<section class="contact" id="contact">` (approx. line 338).
*   **How to edit:** Update the `href` and text for my email and LinkedIn links. Note that I have removed the contact form to keep the section lean and direct.

---

## 🔗 Managing GitHub Project Links

I have implemented a conditional rendering system for project links. Right now, most project links are hidden because they point to my general profile rather than specific repositories.

### How to bring them back:
1.  **Open** `assets/js/projects.js`.
2.  **Find** the project you want to update.
3.  **Update** the `github` field with the specific URL for that project (e.g., `https://github.com/R1G12/my-cool-project`).
4.  **Save** the file.

### How it works technically:
The rendering logic in `assets/js/main.js` checks if the `github` field is:
1.  Not empty.
2.  Not my general profile link (`https://github.com/R1G12/`).

If both conditions are met, the "GitHub" link will automatically appear on the project card.

**Example Project Object:**
```javascript
{
  title: "My Project",
  // ... other fields
  github: "https://github.com/R1G12/specific-repo" // This WILL show a link
}

{
  title: "Private Project",
  // ... other fields
  github: "https://github.com/R1G12/" // This WILL NOT show a link
}
```

---

## 🚀 Local Development
To view changes locally:
1.  Clone this repository.
2.  Open `index.html` in any modern web browser.
3.  Refresh the page after making edits to the HTML, CSS, or JS files.
