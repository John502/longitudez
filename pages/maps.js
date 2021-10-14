import { server } from '../config'
import Meta from "../components/Meta";

export default function Maps({maps}){

  // const LeafletMap = dynamic(
  //   () => {
  //     return import("../components/lf/LeafletMap");
  //   },
  //   { ssr: false }
  // );

    return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Maps'} />
            <div>files</div>
    </>
    )
}

  
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/maps`)
  const maps = await res.json()

  console.log(maps)

  return {
    props: {
      maps,
    },
  }
}
 
  

