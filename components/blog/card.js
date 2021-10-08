import {useRef} from 'react'
import Link from 'next/link'
import sty from '../../styles/Blogcard.module.css'

export default function Card({post})
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
        <article className={sty.card}>
            <div className={sty.imageContainer}>
                <img className={sty.cardImage} 
                src={post.frontmatter.cover_image} 
                alt={post.frontmatter.title}></img>
             </div>
            <div className={sty.postDate}>
                <div>{post.frontmatter.date}</div>
            </div>
            <Link href={`blog/${post.slug}`}> 
            <button className={sty.excerptBtn}>{post.frontmatter.title}</button></Link> 
        </article>
    )
}