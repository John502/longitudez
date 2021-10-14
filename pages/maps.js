import { sortByDateMaps } from '../utils'
import { mapsData } from "../mapdata/data"
import Meta from "../components/Meta";
import MapCard from "../components/map/card"
import sty from "../styles/Blogs.module.css"

export default function Maps({maps}){

    return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Maps'} />
    <div className={sty.container}>
            <div className={sty.header}>Maps</div>
            <div className={sty.cards}>
      {maps.map((post, index) => (
          <MapCard key={index} post={post}></MapCard>
        ))}
    </div>
    </div>
    </>
    )
}

  
export const getStaticProps = async () => {
  
  const theMaps = mapsData

  return {
    props: {
      maps: theMaps.sort(sortByDateMaps),
    },
  }
}
 
  

