import Showcase from '../components/Showcase'
import dynamic from "next/dynamic";

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
