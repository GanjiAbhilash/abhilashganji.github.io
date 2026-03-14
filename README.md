# abhilashganji.com

Personal portfolio website for **Abhilash Ganji** — AI Engineer & Applied Scientist.

## 🚀 Live
[https://abhilashganji.com](https://abhilashganji.com)

## 🛠 Tech Stack
- HTML5 / CSS3 / Vanilla JavaScript
- GitHub Pages hosting
- Custom domain via Namecheap

## 📝 How to Add a Blog Post
1. Create a new `.html` file in `/blog/` directory
2. Copy the template from `blog/llm-architecture.html`
3. Update title, content, meta tags, and schema
4. Add a card entry in the blog section of `index.html`
5. Add the URL to `sitemap.xml`
6. Commit and push

## 📄 How to Update Resume
1. Replace `assets/resume/Abhilash_Ganji_Resume.pdf` with new file
2. Keep the same filename, or update all references in `index.html`
3. Commit and push

## 🖼 How to Add Profile Photo
1. Add a 400x400 jpg to `assets/images/profile.jpg`
2. In `index.html`, replace the `.image-placeholder` div with:
   ```html
   <img src="assets/images/profile.jpg" alt="Abhilash Ganji" loading="lazy">