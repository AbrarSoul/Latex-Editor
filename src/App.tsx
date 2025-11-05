import { useState } from 'react'
import LaTeXEditor from './components/Editor'
import Preview from './components/Preview'
import Toolbar from './components/Toolbar'
import './App.css'

const defaultLatex = `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath}
\\usepackage{amsfonts}
\\usepackage{amssymb}
\\usepackage{graphicx}

\\title{My LaTeX Document}
\\author{Your Name}
\\date{\\today}

\\begin{document}

\\maketitle

\\section{Introduction}
This is a sample LaTeX document. You can edit this text and see the preview update in real-time.

\\section{Mathematical Expressions}
Here's an inline equation: $E = mc^2$

And here's a displayed equation:
\\begin{equation}
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
\\end{equation}

\\section{Conclusion}
Thank you for using this LaTeX editor!

\\end{document}`

function App() {
  const [latexCode, setLatexCode] = useState(defaultLatex)

  return (
    <div className="app">
      <Toolbar />
      <div className="editor-container">
        <div className="editor-panel">
          <LaTeXEditor value={latexCode} onChange={setLatexCode} />
        </div>
        <div className="preview-panel">
          <Preview latex={latexCode} />
        </div>
      </div>
    </div>
  )
}

export default App

