# Deployment Guide

## Quick Deploy (Frontend Only)

Since you removed the Compile PDF feature, you only need to deploy the **frontend**. The backend server is not needed.

### Build Command
```bash
npm run build
```

This creates a `dist/` folder with your static site.

### Deploy Options

#### 1. Vercel (Easiest)
- Go to [vercel.com](https://vercel.com)
- Connect your GitHub repository
- It will auto-detect the `vercel.json` config
- Click Deploy

#### 2. Netlify
- Go to [netlify.com](https://netlify.com)
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`
- Or drag & drop the `dist` folder

#### 3. GitHub Pages
1. Build: `npm run build`
2. Push `dist/` folder contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### 4. Any Static Host
- Build: `npm run build`
- Upload the `dist/` folder contents to your hosting provider

## Important Notes

⚠️ **Backend Server Not Needed**: Since you removed Compile PDF, ignore the port 3001 message. You only need the frontend build.

✅ **Frontend Only**: The editor works completely in the browser - no backend required!

## If You Want to Keep Backend Separate

If you ever need the backend again, deploy it separately:
- Use Render, Railway, or Heroku for the backend
- Update frontend to point to backend URL
- But for now, you don't need it!

