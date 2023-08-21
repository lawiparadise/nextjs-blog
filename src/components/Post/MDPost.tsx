'use client'

import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'

export default function MDPost({postData}:{postData:string}){
  return(
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={materialDark}
              language={match[1]}
              PreTag='div'
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
        img: (image) => (
          <img
            src={image.src || ''}
            alt={image.alt || ''}
            width={image.width}
            height={image.height}
          />
        )
      }}
    >
      {postData}
    </ReactMarkdown>
  )
}