# GitHub Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `latex-editor` (or your preferred name)
3. Description: "A modern web-based LaTeX editor with live preview"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/latex-editor.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Quick Push (if you already have the repository URL)

If you've already created the repository, just run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/latex-editor.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Verify

After pushing, visit: `https://github.com/YOUR_USERNAME/latex-editor`

Your code should be visible there!

