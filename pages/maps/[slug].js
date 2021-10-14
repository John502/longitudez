import { server } from '../../config'
import React from 'react'
import Meta from '../../components/Meta'
import sty from '../../styles/Blogpost.module.css'

export default function MapPost({mapData})
{

  return  <>
           <Meta title={Meta.defaultProps.title + ' | ' + 'some map' } />
          <div className={sty.container}>
            <h1 sytle="color: white">{mapData.title}</h1>
          </div>
          </>

}

export async function getStaticPaths(){

   const res = await fetch(`${server}/api/map`)
   const maps = await res.json()
   const slugs = maps.map((mapPost) => mapPost.slug)
   const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))

    return {
      paths,
      // 404 if you try to access a path that doesn't exist
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {

    console.log(`${server}/api/map/${context.params.slug}`)
    const res = await fetch(`${server}/api/map/${context.params.slug}`)
  
    const mapData = await res.json()
 
    return {
      props: {
        mapData,
      },
    }
  }

//   export const getStaticProps = async () => {
  
//     const res = await fetch(`${server}/api/maps`)
//     const maps = await res.json()
  
//     return {
//       props: {
//         maps,
//       },
//     }
//   }
   