import React from 'react'
import ReactDom from 'react-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from 'remark-gfm'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Meta from '../../components/Meta'
import sty from '../../styles/Blogpost.module.css'

export default function BlogPost({frontmatter: {title, date, cover_image} , slug, content})
{

  return  <>
           <Meta title={Meta.defaultProps.title + ' | ' + title } />
          <div className={sty.container}>
            <h1>Map!</h1>
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