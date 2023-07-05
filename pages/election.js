import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate, onlyUnique } from "../utils";
import Meta from "../components/Meta";
import sty from "../styles/Blogs.module.css";
import { MapContainer } from "react-leaflet";

export default function ElectionMap({ tags }) {

  return (
    <>
      <Meta title={Meta.defaultProps.title + " | Blogs"} />
      <div className={sty.container}>
        <div className={sty.header}>Special Election District 18 Feb 21 2023</div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  //Get files from post directory
  const files = fs.readdirSync(path.join("blogs/markdown")).filter((afile) => afile.includes('.md'));

  // Get slug and front matter
  const posts = files.map((filename) => {
    if (filename != 'fiddletudez') {

    const slug = filename.replace(".md", "");
    // if (filename != 'fiddletudez')
    const markDownWithMeta = fs.readFileSync(
      path.join("blogs/markdown", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markDownWithMeta);
    return {
      slug,
      frontmatter,
    };
  }}); 
  const tags = posts.map((post, index) => post.frontmatter.tag.split(":")[0]);

  return {
    props: {
      tags: tags.filter(onlyUnique),
    },
  };
}
