import Meta from "../../components/Meta";
import Tune from "../../components/tunes/tunes";
import sty from "../../styles/Tunes.module.css";
import { tunesData } from "../../data/tunes";

export default function Fiddle({ tunes }) {
  return (
    <>
      <Meta title={Meta.defaultProps.title + " | Fiddle Tune Chords"} />
      <div className={sty.container}>
        <div className={sty.header}>Fiddletudez</div>/
        <div className={sty.cards}>
          {tunes.map((tune, index) => (
            <Tune tune={tune} key={index}>
              {tune.title}
            </Tune>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      tunes: tunesData.sort((a, b) => (a.slug > b.slug) ? 1 : -1),
    },
  };
};
