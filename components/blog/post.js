import {useRef} from 'react'
import Link from 'next/link'
import sty from '../../styles/Blogcard.module.css'

export default function Post({post})
{
    const btn = useRef('')
    const onButtonClick = () => {
        // #3c6363
        btn.current.style.backgroundColor = "#131516"
        setTimeout(() => {
            btn.current.style.backgroundColor = "#2f4f4f"
            }, 150)
    };

    return (
        <div className={sty.card}>
            <img className={sty.cardImage} 
             src={post.frontmatter.cover_image} 
             alt={post.frontmatter.title}></img>
            <div className={sty.postDate}>Created on {post.frontmatter.date}</div>
            <div className={sty.excerpt}>{post.frontmatter.title}</div>
            <Link href={`blog/${post.slug}`}> 
            <a ref={btn} className={sty.btn} onClick={onButtonClick}>explore</a></Link>
        </div>
    )
}