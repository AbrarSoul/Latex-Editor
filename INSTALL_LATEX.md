# Installing LaTeX on Windows

## Option 1: MiKTeX (Recommended for Windows)

1. **Download MiKTeX:**
   - Go to https://miktex.org/download
   - Download the Windows installer (Basic MiKTeX or Complete MiKTeX)
   - Basic MiKTeX downloads packages as needed (smaller initial download)
   - Complete MiKTeX includes everything upfront (larger download, ~5GB)

2. **Install:**
   - Run the installer
   - Choose "Install for all users" or "Install for current user"
   - Follow the installation wizard
   - ⚠️ **Important:** Make sure to check "Add MiKTeX to PATH" during installation

3. **Verify Installation:**
   ```powershell
   pdflatex --version
   ```

4. **If PATH is not set:**
   - Add MiKTeX bin directory to your PATH environment variable
   - Usually: `C:\Program Files\MiKTeX\miktex\bin\x64` or `C:\Users\<YourUsername>\AppData\Local\Programs\MiKTeX\miktex\bin\x64`
   - Restart PowerShell after adding to PATH

## Option 2: TeX Live

1. **Download TeX Live:**
   - Go to https://www.tug.org/texlive/windows.html
   - Download the installer

2. **Install:**
   - Run `install-tl-windows.exe`
   - Follow the installation wizard
   - Note: TeX Live is a large download (~4GB)

## Quick Test After Installation

After installing, **restart PowerShell** and test:

```powershell
pdflatex --version
```

You should see version information like:
```
pdfTeX 3.141592653-2.6-1.40.24 (MiKTeX 23.12)
```

## Troubleshooting

If `pdflatex` is still not found after installation:

1. **Restart your terminal/PowerShell** (required for PATH changes)

2. **Check if MiKTeX is installed:**
   ```powershell
   Get-Command pdflatex -ErrorAction SilentlyContinue
   ```

3. **Manually add to PATH for current session:**
   ```powershell
   # For system-wide installation
   $env:Path += ";C:\Program Files\MiKTeX\miktex\bin\x64"
   
   # For user installation
   $env:Path += ";C:\Users\$env:USERNAME\AppData\Local\Programs\MiKTeX\miktex\bin\x64"
   ```

4. **Permanently add to PATH:**
   - Open System Properties → Environment Variables
   - Edit "Path" variable
   - Add MiKTeX bin directory
   - Restart PowerShell

## Alternative: Use Editor Without PDF Compilation

You can still use the LaTeX editor for:
- ✨ Writing and editing LaTeX code with syntax highlighting
- 📝 Live preview (markdown preview with math rendering)
- 📋 Copy your code to online LaTeX compilers like:
  - [Overleaf](https://www.overleaf.com)
  - [LaTeX Base](https://latexbase.com)

The PDF compilation feature will only work after installing LaTeX.

