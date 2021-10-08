import dynamic from "next/dynamic";
import Showcase from '../components/Showcase'

export default function Home() {

  const LeafletMap = dynamic(
    () => {
      return import("../components/lf/LeafletMap");
    },
    { ssr: false }
  );

  return (
    <Showcase></Showcase>
  )
}
