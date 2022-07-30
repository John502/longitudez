import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Meta from '../../../components/Meta'
import sty from '../../../styles/Blogpost.module.css'
import { Content } from '@aws-sdk/client-sesv2';

export default function BlogPost({frontmatter: {title, date, cover_image} , slug, content})
{

  return  <>
           <Meta title={Meta.defaultProps.title + ' | ' + title } />
           <Meta description={content} />
          <div className={sty.container}>
          <article className={sty.content}>
          <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}/>
        </article>
          {/* <div dangerouslySetInnerHTML={{__html: marked(content)}}></div> */}
          </div>
          </>

}

export async function getStaticPaths(){
  
    //Get files from post directory
    const files = fs.readdirSync(path.join('blogs/markdown'))

    const paths = files.map(filename => ({
      params: {
        slug: filename.replace('.md', '')
      }

    }))

    return {
      paths,
      // 404 if you try to access a path that doesn't exist
      fallback: false
    }
  }

export async function getStaticProps({params: {slug}}){
    const markDownWithMeta = fs.readFileSync(
      path.join('blogs/markdown/', slug + '.md'),
      'utf-8'
    )
    
    const {data: frontmatter, content} = matter(markDownWithMeta)
 
    return {
      props:{frontmatter, slug, content}
    }
  
  }