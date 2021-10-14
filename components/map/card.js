import {useRef} from 'react'
import Link from 'next/link'
import sty from '../../styles/Mapcard.module.css'

export default function MapCard({post})
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
                src={post.cover_image} 
                alt={post.title}></img>
             </div>
            <div className={sty.postDate}>
                <div>{post.date}</div>
            </div>
            <Link href={`maps/${post.slug}`}> 
            <button className={sty.excerptBtn}>{post.title}</button></Link> 
        </article>
    )
}