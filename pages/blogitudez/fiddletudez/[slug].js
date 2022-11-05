import React from 'react'
import Meta from '../../../components/Meta'
import sty from '../../../styles/TunePost.module.css'
import {tunesData} from '../../../data/tunes'
import ReactAudioPlayer from 'react-audio-player';

export default function TunePost({slug, title, chords})
{
  console.log(chords)
  return  <>
           <Meta title={Meta.defaultProps.title + ' | ' + title} />
           <Meta description={title} />
          <div className={sty.container}>
          <article className={sty.content}>
            <h3>{title}</h3>
            <img src={chords} className={sty.tunechords}></img>       </article>
            <ReactAudioPlayer
    src="/images/tunechords/Angeline_The_Baker_D_Reel.mp3"
    controls
  />,
            </div>
          </>
}

export async function getStaticPaths(){

    const paths = tunesData.map(tune => ({
      params: {
        slug: tune.slug
      }
    }))
    return {
      paths,
      // 404 if you try to access a path that doesn't exist
      fallback: false
    }
  }


  export const getStaticProps = async (context) => {

    const filtered = tunesData.filter((tune) => (tune.slug) === context.params.slug)
    const tune = filtered[0]
    const slug = tune.slug
    const title = tune.title
    const chords = tune.chords

    return {
      props: {slug, title, chords},
    }
  }

