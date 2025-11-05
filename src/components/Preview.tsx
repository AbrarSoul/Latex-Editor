import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import './Preview.css'

interface PreviewProps {
  latex: string
}

export default function Preview({ latex }: PreviewProps) {
  // Extract content between \begin{document} and \end{document}
  const extractDocumentContent = (latexCode: string): string => {
    const docStart = latexCode.indexOf('\\begin{document}')
    const docEnd = latexCode.indexOf('\\end{document}')
    
    if (docStart === -1 || docEnd === -1) {
      return latexCode
    }
    
    return latexCode.substring(docStart + 16, docEnd).trim()
  }

  const documentContent = extractDocumentContent(latex)

  // Convert LaTeX to a readable format for preview
  const convertLatexToMarkdown = (latex: string): string => {
    let markdown = latex
    
    // Convert sections
    markdown = markdown.replace(/\\section\{([^}]+)\}/g, '## $1\n')
    markdown = markdown.replace(/\\subsection\{([^}]+)\}/g, '### $1\n')
    markdown = markdown.replace(/\\subsubsection\{([^}]+)\}/g, '#### $1\n')
    
    // Convert bold
    markdown = markdown.replace(/\\textbf\{([^}]+)\}/g, '**$1**')
    
    // Convert italic
    markdown = markdown.replace(/\\textit\{([^}]+)\}/g, '*$1*')
    
    // Convert inline math
    markdown = markdown.replace(/\$([^$]+)\$/g, '$$$1$$')
    
    // Convert display math
    markdown = markdown.replace(/\\begin\{equation\}([\s\S]*?)\\end\{equation\}/g, '$$$$$1$$$$')
    
    // Remove LaTeX commands that don't translate well
    markdown = markdown.replace(/\\maketitle/g, '')
    markdown = markdown.replace(/\\today/g, new Date().toLocaleDateString())
    
    // Clean up extra whitespace
    markdown = markdown.replace(/\n{3,}/g, '\n\n')
    
    return markdown
  }

  const markdownContent = convertLatexToMarkdown(documentContent)

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>Preview</h3>
      </div>
      
      <div className="preview-content">
        <div className="markdown-preview">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {markdownContent || '*No content to preview*'}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

