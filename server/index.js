const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Cloud-based LaTeX compilation using latexonline.cc API
// This service compiles LaTeX in the cloud - no local installation needed!
app.post('/api/compile', async (req, res) => {
  const { latex } = req.body

  if (!latex) {
    return res.status(400).json({ error: 'LaTeX code is required' })
  }

  try {
    // Use latexonline.cc API for cloud compilation
    // Alternative: You can also use other services like RapidAPI LaTeX compiler
    const apiUrl = 'https://latexonline.cc/compile'
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        text: latex,
        format: 'pdf'
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      return res.status(500).json({ 
        error: `Compilation failed: ${errorText || 'Unknown error'}` 
      })
    }

    const pdfBuffer = await response.arrayBuffer()
    
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'inline; filename="document.pdf"')
    res.send(Buffer.from(pdfBuffer))

  } catch (error) {
    console.error('Compilation error:', error)
    res.status(500).json({ 
      error: 'Failed to compile LaTeX. The cloud compilation service may be unavailable.' 
    })
  }
})

// Alternative: Local compilation (if LaTeX is installed)
// Uncomment this if you want to use local pdflatex instead
/*
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { promisify } = require('util')

const execAsync = promisify(exec)
const tempDir = path.join(__dirname, 'temp')
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir)
}

app.post('/api/compile-local', async (req, res) => {
  const { latex } = req.body
  if (!latex) {
    return res.status(400).json({ error: 'LaTeX code is required' })
  }

  const timestamp = Date.now()
  const filename = `latex_${timestamp}`
  const texPath = path.join(tempDir, `${filename}.tex`)
  const pdfPath = path.join(tempDir, `${filename}.pdf`)

  try {
    fs.writeFileSync(texPath, latex, 'utf8')
    const compileCommand = `pdflatex -interaction=nonstopmode -output-directory="${tempDir}" "${texPath}"`
    
    try {
      await execAsync(compileCommand, { timeout: 30000 })
    } catch (error) {
      if (!fs.existsSync(pdfPath)) {
        return res.status(500).json({ error: 'LaTeX compilation failed. Check your syntax.' })
      }
    }

    if (!fs.existsSync(pdfPath)) {
      return res.status(500).json({ error: 'PDF was not generated.' })
    }

    const pdfBuffer = fs.readFileSync(pdfPath)
    
    setTimeout(() => {
      try {
        fs.unlinkSync(texPath)
        fs.unlinkSync(pdfPath)
        const auxFiles = ['.aux', '.log', '.out']
        auxFiles.forEach(ext => {
          const auxPath = path.join(tempDir, `${filename}${ext}`)
          if (fs.existsSync(auxPath)) fs.unlinkSync(auxPath)
        })
      } catch (err) {
        console.error('Error cleaning up files:', err)
      }
    }, 5000)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `inline; filename="${filename}.pdf"`)
    res.send(pdfBuffer)

  } catch (error) {
    console.error('Compilation error:', error)
    res.status(500).json({ error: 'Failed to compile LaTeX.' })
  }
})
*/

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log('Using cloud-based LaTeX compilation - no local installation needed!')
})

