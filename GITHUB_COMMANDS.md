# Complete Guide: How to Commit and Push a Project to GitHub

This guide explains all the Git commands needed to host your project on GitHub from scratch.

---

## Prerequisites

- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- A GitHub account ([Sign up](https://github.com/signup))

---

## Step 1: Configure Git (First Time Only)

Before using Git, you need to set your identity:

```bash
# Set your name (use your GitHub username or real name)
git config --global user.name "Your Name"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"
```

**Explanation:**
- `--global` sets these settings for all repositories on your computer
- You can also use `git config` without `--global` to set it only for the current repository
- These settings appear in your commit history

**Example:**
```bash
git config --global user.name "AbrarSoul"
git config --global user.email "abrar03.morshed@gmail.com"
```

**Verify your settings:**
```bash
git config --global user.name    # Shows your configured name
git config --global user.email   # Shows your configured email
```

---

## Step 2: Initialize Git Repository

Navigate to your project folder and initialize Git:

```bash
# Navigate to your project directory
cd "path/to/your/project"

# Initialize a Git repository
git init
```

**Explanation:**
- `git init` creates a new `.git` folder in your project directory
- This folder contains all Git history and configuration
- You only need to do this once per project

**Check status:**
```bash
git status
```

---

## Step 3: Create .gitignore File

Create a `.gitignore` file to exclude unnecessary files:

```bash
# Create .gitignore file (or edit it manually)
# Add patterns for files/folders to ignore:
# - node_modules/
# - .env
# - dist/
# - *.log
# etc.
```

**Explanation:**
- `.gitignore` tells Git which files NOT to track
- Common examples: `node_modules/`, build folders, environment files
- This prevents committing large or sensitive files

---

## Step 4: Stage Files (Add Files to Git)

Add files you want to commit:

```bash
# Add all files in current directory
git add .

# Or add specific files/folders
git add filename.txt
git add src/
git add README.md
```

**Explanation:**
- `git add .` stages ALL files in the current directory and subdirectories
- `git add filename.txt` stages only that specific file
- Staging prepares files for commit (think of it as "adding to cart")
- Files remain staged until you commit them

**Check what's staged:**
```bash
git status
```

---

## Step 5: Commit Changes

Create a commit with a descriptive message:

```bash
# Commit with a message
git commit -m "Your commit message"

# Examples:
git commit -m "Initial commit: LaTeX Editor project"
git commit -m "Add user authentication feature"
git commit -m "Fix bug in preview component"
```

**Explanation:**
- `git commit` saves your staged changes
- `-m` allows you to add a message directly
- Commit messages should be clear and descriptive
- Each commit is like a snapshot of your project at that moment

**Best practices for commit messages:**
- Use present tense: "Add feature" not "Added feature"
- Be specific: "Fix login bug" not "Fix bug"
- Keep first line under 50 characters
- Add details on separate lines if needed

**View commit history:**
```bash
git log
```

---

## Step 6: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in top right → **New repository**
3. Fill in:
   - **Repository name**: `your-project-name`
   - **Description**: Brief description of your project
   - **Visibility**: Public or Private
   - **DO NOT** check "Initialize with README" (you already have files)
4. Click **Create repository**

---

## Step 7: Connect Local Repository to GitHub

Link your local repository to the GitHub repository:

```bash
# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Example:
git remote add origin https://github.com/AbrarSoul/Latex-Editor.git
```

**Explanation:**
- `git remote add` connects your local repo to a remote repository
- `origin` is the default name for the remote repository
- You can have multiple remotes (origin, upstream, etc.)

**Verify remote:**
```bash
git remote -v
```

**Remove remote (if you made a mistake):**
```bash
git remote remove origin
```

---

## Step 8: Rename Branch to Main (Optional)

GitHub uses `main` as the default branch name:

```bash
# Rename current branch to main
git branch -M main
```

**Explanation:**
- Older Git versions used `master` as default branch name
- GitHub now uses `main` as the standard
- `-M` force renames the branch (even if `main` already exists)

**Check current branch:**
```bash
git branch
```

---

## Step 9: Push to GitHub

Upload your commits to GitHub:

```bash
# Push to GitHub (first time)
git push -u origin main

# Future pushes (after first time)
git push
```

**Explanation:**
- `git push` uploads your commits to GitHub
- `-u origin main` sets up tracking so future `git push` knows where to go
- `origin` is the remote name
- `main` is the branch name

**First push might ask for authentication:**
- Use GitHub Personal Access Token (not password)
- Or use GitHub CLI (`gh auth login`)

---

## Complete Workflow Summary

Here's the complete sequence from start to finish:

```bash
# 1. Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 2. Navigate to project
cd "path/to/your/project"

# 3. Initialize repository
git init

# 4. Create .gitignore (optional but recommended)
# Edit .gitignore file with your IDE or text editor

# 5. Stage files
git add .

# 6. Commit
git commit -m "Initial commit: Project description"

# 7. Create repository on GitHub.com (manual step)

# 8. Add remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 9. Rename branch (if needed)
git branch -M main

# 10. Push to GitHub
git push -u origin main
```

---

## Future Updates: Making Changes and Pushing

After your initial push, here's how to update your GitHub repository:

```bash
# 1. Make changes to your files

# 2. Check what changed
git status

# 3. Stage the changes
git add .                    # Add all changes
# OR
git add specific-file.txt    # Add specific file

# 4. Commit the changes
git commit -m "Describe what you changed"

# 5. Push to GitHub
git push
```

**Complete example:**
```bash
# You edited src/App.tsx and added a new feature
git status                           # See modified files
git add src/App.tsx                  # Stage the file
git commit -m "Add new feature to App component"
git push                              # Upload to GitHub
```

---

## Useful Git Commands

### Viewing Information

```bash
# Show current status
git status

# View commit history
git log

# View commit history (compact)
git log --oneline

# Show changes in files
git diff

# Show staged changes
git diff --staged
```

### Undoing Changes

```bash
# Unstage a file (keep changes in file)
git restore --staged filename.txt

# Discard changes in working directory
git restore filename.txt

# Amend last commit (change commit message or add files)
git commit --amend -m "New commit message"

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

### Branching

```bash
# Create new branch
git branch feature-name

# Switch to branch
git checkout feature-name
# OR (newer syntax)
git switch feature-name

# Create and switch to branch
git checkout -b feature-name

# List all branches
git branch

# Delete branch
git branch -d branch-name
```

### Syncing with GitHub

```bash
# Download changes from GitHub
git pull

# Fetch changes without merging
git fetch

# Push specific branch
git push origin branch-name

# Push all branches
git push --all
```

---

## Common Issues and Solutions

### Issue: "Repository not found"
**Solution:** Check your repository URL and GitHub username

### Issue: "Authentication failed"
**Solution:** 
- Use GitHub Personal Access Token instead of password
- Or use: `gh auth login` (GitHub CLI)

### Issue: "Updates were rejected"
**Solution:**
```bash
git pull origin main
git push
```

### Issue: "Already up to date"
**Solution:** Your local repository is already synced with GitHub

---

## Authentication Options

### Option 1: Personal Access Token (Recommended)
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token
3. Use token as password when pushing

### Option 2: SSH Keys
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to GitHub → Settings → SSH and GPG keys
# Then use SSH URL:
git remote set-url origin git@github.com:USERNAME/REPO.git
```

### Option 3: GitHub CLI
```bash
# Install GitHub CLI, then:
gh auth login
```

---

## Quick Reference Card

```
# Setup (first time)
git config --global user.name "Name"
git config --global user.email "email@example.com"

# Daily workflow
git add .                    # Stage changes
git commit -m "Message"       # Commit changes
git push                     # Push to GitHub

# Check status
git status                   # What's changed?
git log                      # Commit history

# Sync with GitHub
git pull                     # Download changes
git push                     # Upload changes
```

---

## Repository URL Formats

### HTTPS (requires authentication each time)
```
https://github.com/USERNAME/REPO.git
```

### SSH (requires SSH key setup)
```
git@github.com:USERNAME/REPO.git
```

### GitHub CLI
```
gh repo create REPO-NAME --public
```

---

## Tips

1. **Commit often**: Make small, frequent commits rather than large ones
2. **Write clear messages**: Future you will thank you
3. **Use .gitignore**: Don't commit unnecessary files
4. **Pull before push**: Always sync with remote before pushing
5. **Create branches**: Use branches for new features or experiments

---

## Need Help?

- Git Documentation: https://git-scm.com/doc
- GitHub Docs: https://docs.github.com
- Git Cheat Sheet: https://education.github.com/git-cheat-sheet-education.pdf

