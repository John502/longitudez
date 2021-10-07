import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import Meta from '../components/Meta'
import Post from '../components/blog/post'
import sty from '../styles/Blogs.module.css'

export default function Blogs({posts}) {

  return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Blogs'} /> 
    <div className={sty.container}>   
    <div className={sty.posts}>
      {posts.map((post, index) => (
          <Post key={index} post={post}></Post>
        ))}
    </div>
    </div>
    </>
  )
}


export async function getStaticProps(){
  
  //Get files from post directory
  const files = fs.readdirSync(path.join('blogs/markdown'))

  
  // Get slug and front matter
  const posts = files.map((filename) =>
   {
     const slug = filename.replace('.md', '')
     const markDownWithMeta = fs.readFileSync(path.join('blogs/markdown', filename), 'utf-8')

     const {data : frontmatter} = matter(markDownWithMeta)

     return {
       slug, 
       frontmatter
     }
     
   }
  )

  return {
    props : {
      posts : posts.sort(sortByDate)
    }

  }
}