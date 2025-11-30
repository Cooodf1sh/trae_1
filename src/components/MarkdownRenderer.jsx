import { useEffect, useRef } from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import './MarkdownRenderer.css'

// 配置 marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {}
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
})

function MarkdownRenderer({ markdown }) {
  const markdownRef = useRef(null)

  useEffect(() => {
    if (markdownRef.current && markdown) {
      markdownRef.current.innerHTML = marked(markdown)
      
      // 为代码块添加行号
      const codeBlocks = markdownRef.current.querySelectorAll('pre code')
      codeBlocks.forEach((block) => {
        const lines = block.innerHTML.split('\n')
        const lineNumbers = Array.from({ length: lines.length }, (_, i) => i + 1)
          .map(num => `<span class="line-number">${num}</span>`)
          .join('\n')
          
        const lineNumbersDiv = document.createElement('div')
        lineNumbersDiv.className = 'line-numbers'
        lineNumbersDiv.innerHTML = lineNumbers
        
        const pre = block.parentElement
        pre.classList.add('code-with-line-numbers')
        pre.prepend(lineNumbersDiv)
      })
    }
  }, [markdown])

  return (
    <div className="markdown-container">
      <div ref={markdownRef} className="markdown-content" />
    </div>
  )
}

export default MarkdownRenderer