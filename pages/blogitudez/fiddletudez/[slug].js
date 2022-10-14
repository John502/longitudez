import React from 'react'
import Meta from '../../../components/Meta'

import sty from '../../../styles/Blogpost.module.css'
import {tunesData} from '../../../data/tunes'


export default function TunePost({slug, title, arrangements})
{
  const arr = arrangements[0]
  const staffs = arr.staffs 
  console.log(arr.staffs.A1)
  
  return  <>
           <Meta title={Meta.defaultProps.title + ' | ' + title} />
           <Meta description={title} />
          <div className={sty.container}>
          <article className={sty.content}>
             <h1>{title}</h1>
             <h2>Key: {arr.key}</h2>
             <div>A1 : {arr.staffs.A1}</div>
             <div>A2 : {arr.staffs.A2}</div>
             <div>B1 : {arr.staffs.B1}</div>
             <div>B2 : {arr.staffs.B2}</div>
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
    const tune = filtered[0]
    const slug = tune.slug
    const title = tune.title
    const arrangements = tune.arrangements

    return {
      props: {slug, title, arrangements},
    }
  }

  
  