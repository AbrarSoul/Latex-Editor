# LaTeX Editor

A modern web-based LaTeX editor with live preview and syntax highlighting.

## Features

- ✨ **Syntax Highlighting** - Monaco Editor (VS Code editor) with LaTeX syntax support
- 📝 **Live Preview** - Real-time markdown preview with KaTeX math rendering
- 🎨 **Modern UI** - Clean, intuitive interface with side-by-side editor and preview
- ⚡ **Fast** - Built with React, TypeScript, and Vite

## Prerequisites

- **Node.js** (v18 or higher - for native fetch support)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/latex-editor.git
cd latex-editor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

This will start:
- Frontend server on `http://localhost:3000`
- Backend server on `http://localhost:3001`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Start editing LaTeX code in the editor
3. View the live preview in the right panel

## Project Structure

```
latex-editor/
├── src/
│   ├── components/
│   │   ├── Editor.tsx       # Monaco Editor component
│   │   ├── Preview.tsx      # Preview component with KaTeX
│   │   └── Toolbar.tsx      # Toolbar component
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── server/
│   └── index.js             # Express backend server
├── package.json
└── vite.config.ts
```

## Development

- `npm run dev` - Start both frontend and backend
- `npm run dev:client` - Start only frontend
- `npm run dev:server` - Start only backend
- `npm run build` - Build for production

## How It Works

- **Live Preview**: The preview shows a markdown-like representation with KaTeX math rendering
- **Real-time Updates**: Changes in the editor are instantly reflected in the preview panel
- **Side-by-side View**: Editor and preview are always visible side by side

## Notes

- The preview shows a markdown-like representation of your LaTeX document
- Mathematical expressions are rendered using KaTeX
- The editor supports LaTeX syntax highlighting

## License

MIT
