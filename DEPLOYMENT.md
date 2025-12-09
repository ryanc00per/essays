# Deploying to GitHub Pages

Follow these steps to publish your essays site to `https://ryanc00per.github.io/essays/`

## Option 1: Using GitHub Desktop (Easiest)

1. **Install GitHub Desktop** (if you don't have it):
   - Download from: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Create the Repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `essays`
   - Description: "Personal essays and writing"
   - Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

3. **Clone and Push**:
   - In GitHub Desktop, click "File" → "Add Local Repository"
   - Browse to: `C:\Users\ryanc\OneDrive\Vibe\Writing`
   - Click "Add Repository"
   - If prompted, click "Create a Repository" and initialize Git
   - Click "Publish repository" (make sure it's named `essays`)
   - Select "ryanc00per" as the owner
   - Make sure "Keep this code private" is **UNCHECKED**
   - Click "Publish Repository"

4. **Enable GitHub Pages**:
   - Go to https://github.com/ryanc00per/essays
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Branch: `main` (or `master` if that's what you have)
   - Folder: `/ (root)`
   - Click "Save"
   - Your site will be live at: `https://ryanc00per.github.io/essays/`

## Option 2: Using Git Command Line

1. **Install Git** (if needed):
   - Download from: https://git-scm.com/download/win
   - Install with default settings

2. **Create the Repository on GitHub**:
   - Go to https://github.com/new
   - Repository name: `essays`
   - Choose **Public**
   - **DO NOT** initialize with README
   - Click "Create repository"

3. **Initialize and Push**:
   Open PowerShell in this directory and run:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Essays website"
   git branch -M main
   git remote add origin https://github.com/ryanc00per/essays.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to https://github.com/ryanc00per/essays/settings/pages
   - Under "Source", select "Deploy from a branch"
   - Branch: `main`, Folder: `/ (root)`
   - Click "Save"

## Option 3: Using GitHub Web Interface

1. **Create the Repository**:
   - Go to https://github.com/new
   - Repository name: `essays`
   - Choose **Public**
   - **DO NOT** initialize with README
   - Click "Create repository"

2. **Upload Files**:
   - On the new repository page, click "uploading an existing file"
   - Drag and drop all your files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `.gitignore`
     - `README.md`
   - Scroll down, add commit message: "Initial commit"
   - Click "Commit changes"

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main`, Folder: `/ (root)`
   - Click "Save"

## After Deployment

- Your site will be live at: `https://ryanc00per.github.io/essays/`
- It may take a few minutes for the first deployment
- Future updates: Just commit and push changes, GitHub Pages will auto-update

## Updating Your Site

Whenever you make changes:

**GitHub Desktop:**
- Make your changes
- In GitHub Desktop, you'll see the changed files
- Add a commit message
- Click "Commit to main"
- Click "Push origin"

**Command Line:**
```powershell
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

- If the site doesn't load: Wait 5-10 minutes for GitHub Pages to build
- Check the Actions tab in your repository for build errors
- Make sure your repository is Public (not Private)
- Verify the branch name matches (main vs master)

