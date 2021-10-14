import { server } from '../config'
import { sortByDateMaps } from '../utils'
import Meta from "../components/Meta";
import Card from "../components/map/card"
import sty from "../styles/Maps.module.css"

export default function Maps({maps}){

    return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Maps'} />
    <div className={sty.container}>
            <div className={sty.header}>Maps</div>
            <div className={sty.cards}>
      {maps.map((post, index) => (
          <Card key={index} post={post}></Card>
        ))}
    </div>
    </div>
    </>
    )
}

  
export const getStaticProps = async () => {
  
  const res = await fetch(`${server}/api/maps`)
  const maps = await res.json()

  return {
    props: {
      maps: maps.sort(sortByDateMaps),
    },
  }
}
 
  

