# Cloud-Based LaTeX Compilation

This LaTeX editor uses **cloud-based compilation** - meaning you don't need to install LaTeX on your computer!

## How It Works

The backend server sends your LaTeX code to a cloud compilation service, which compiles it and returns a PDF. All compilation happens remotely.

## Current Setup

The editor uses the `latexonline.cc` API for cloud compilation. If this service is unavailable, you have these options:

### Option 1: Use Alternative Cloud Services

You can modify `server/index.js` to use other services:

1. **RapidAPI LaTeX Compiler** (requires API key)
   - Sign up at https://rapidapi.com
   - Search for "LaTeX Compiler" APIs
   - Add your API key to the server code

2. **Self-hosted Docker Solution**
   - Run LaTeX in a Docker container on your server
   - No local installation needed, but requires Docker

### Option 2: Use Local Compilation (Optional)

If you prefer local compilation, you can:
1. Install LaTeX on your computer (see INSTALL_LATEX.md)
2. Uncomment the local compilation code in `server/index.js`
3. Change the endpoint from `/api/compile` to `/api/compile-local`

### Option 3: Deploy to a Server with LaTeX

When deploying to production:
- Use a cloud service (Heroku, AWS, etc.) with LaTeX pre-installed
- Or use Docker containers with LaTeX
- Or use a serverless function with LaTeX support

## Benefits of Cloud Compilation

✅ **No installation needed** - Works immediately  
✅ **Cross-platform** - Works on any OS  
✅ **Easy deployment** - Simple to deploy  
✅ **No maintenance** - Cloud service handles updates  

## Limitations

⚠️ Requires internet connection  
⚠️ Dependent on third-party service availability  
⚠️ May have rate limits or usage restrictions  

For production use, consider hosting your own compilation service or using a paid API service.

