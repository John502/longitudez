import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import Meta from "../../components/Meta";
import Card from "../../components/blog/card";
import sty from "../../styles/Blogs.module.css";

export default function Recipie({ posts }) {
  return (
    <>
      <Meta title={Meta.defaultProps.title + " | Recipes"} />
      <div className={sty.container}>
        <div className={sty.header}>Recitudez</div>/
        <div className={sty.cards}>
          {posts.map((post, index) => (
            <Card key={index} post={post}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  //Get files from post directory
  const files = fs.readdirSync(path.join("blogs/markdown")).filter((afile) => afile.includes('.md'));

  // Get slug and front matter
  const posts = files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const markDownWithMeta = fs.readFileSync(
        path.join("blogs/markdown", filename),
        "utf-8"
      );

      const { data: frontmatter } = matter(markDownWithMeta);

      return {
        slug,
        frontmatter,
      };
    })
    .filter((apost) => apost.frontmatter.tag.split(":")[0] === "recipe");

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
