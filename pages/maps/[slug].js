import dynamic from "next/dynamic";
import { mapsData } from '../../data/maps'
import React from 'react'
import Meta from '../../components/Meta'

export default function MapPost({mapData})

{
  const LeafletMap = dynamic(
    () => {
      return import("../../components/lf/LeafletMap");
    },
    { ssr: false }
  );
   

  return  <>
           <Meta title={Meta.defaultProps.title + ' | ' + mapData.title } />
           <LeafletMap mapData={mapData}></LeafletMap>
          </>

}

export async function getStaticPaths(){

    const slugs = mapsData.map((mapPost) => mapPost.slug)
    const paths = slugs.map((slug) => ({ params: { slug: slug.toString() } }))
   
    return {
      paths,
      // 404 if you try to access a path that doesn't exist
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {

    const filtered = mapsData.filter((amap) => amap.slug === context.params.slug)
    const mapData = filtered[0]


    return {
      props: {
        mapData,
      },
    }
  }


