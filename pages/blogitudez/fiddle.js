import Meta from "../../components/Meta";
import Tune from "../../components/tunes/tunes";
import sty from "../../styles/Tunes.module.css";
import { tunesData } from "../../data/tunes";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PutConfigurationSetDeliveryOptionsRequest } from "@aws-sdk/client-sesv2";

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
  const files = fs.readdirSync(path.join("blogs/markdown/fiddletudez"));

  // Get slug and front matter
  const posts = files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const markDownWithMeta = fs.readFileSync(
        path.join("blogs/markdown/fiddletudez", filename),
        "utf-8"
      );

      const { data: frontmatter } = matter(markDownWithMeta);

      return {
        slug,
        frontmatter,
      };
    })

  return {
    props: {
      tunes: posts.sort((a, b) => (a.slug > b.slug) ? 1 : -1),
    },
  };

  // return {
  //   props: {
  //     tunes: tunesData.sort((a, b) => (a.slug > b.slug) ? 1 : -1),
  //   },
  // };
};
