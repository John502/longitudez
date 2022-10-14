import React from 'react'
import Meta from '../../../components/Meta'

import sty from '../../../styles/Blogpost.module.css'
import {tunesData} from '../../../data/tunes'


export default function TunePost({tune: {title, slug}})
{
  console.log('Hello World');

  return  <>
           <Meta title={Meta.defaultProps.title + ' | ' + title} />
           <Meta description={tune} />
          <div className={sty.container}>
          <article className={sty.content}>
             <h1>{title}</h1>
        </article>
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
    const tuneData = filtered[0]
    console.log(tuneData)
    return {
      props: {
        tuneData,
      },
    }
  }

  
  