// import LeafletMap from "../components/LeafletMap";
import dynamic from "next/dynamic";
import Meta from "../components/Meta";


const TestMaps = () => {

    const LeafletMap = dynamic(
        () => {
          return import("../components/lf/LeafletMap");
        },
        { ssr: false }
      );

    return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Maps'} />
            <LeafletMap></LeafletMap>
    </>
    )
}

export default TestMaps;