# Essays Website

A terminal-style personal essays website

## Setup Instructions

### 1. Customize Your Information

Edit `script.js` and update the `config` object with your information:

- `username`: Your GitHub username or preferred handle
- `host`: Usually 'github' 
- `title`: Your site title (e.g., "Essays by Your Name")
- `subtitle`: A brief description of your essays
- `readme`: An array of lines describing your work
- `links`: Your social media and contact links
- `essays`: Array of your essay objects (see below)

### 2. Add Your Essays

In `script.js`, add essays to the `essays` array in this format:

```javascript
essays: [
    { title: 'My First Essay', slug: 'first-essay', date: '2025-01' },
    { title: 'My Second Essay', slug: 'second-essay', date: '2025-02' }
]
```

- `title`: The display title of your essay
- `slug`: URL-friendly identifier (used in links)
- `date`: Publication date in YYYY-MM format

### 3. Customize Styling (Optional)

Edit `styles.css` to adjust colors, fonts, or layout:
- Terminal colors: `#d946ef` (pink), `#8b5cf6` (purple)
- Background: `#fcfcfc`
- Text: `#333`

### 4. Deploy to GitHub Pages

1. Create a new GitHub repository (name it `yourusername.github.io` for a user site, or any name for a project site)
2. Push these files to your repository
3. Go to Settings → Pages
4. Select your source branch (usually `main`)
5. Your site will be live at `https://yourusername.github.io/` (or `https://yourusername.github.io/repository-name/`)

### 5. Create Individual Essay Pages (Optional)

For each essay, create an HTML file at `essays/[slug]/index.html` or use a static site generator like Jekyll to generate pages from Markdown files.

## File Structure

```
.
├── index.html      # Main page
├── styles.css      # Styling
├── script.js       # Configuration and logic
└── README.md       # This file
```

## Monthly Publishing Workflow

1. Write your essay (in Markdown or HTML)
2. Add it to the `essays` array in `script.js`
3. Create the essay page file
4. Commit and push to GitHub
5. Share on LinkedIn!

## License

Feel free to use and modify this template for your own essays.


