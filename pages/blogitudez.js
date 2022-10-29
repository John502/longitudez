import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate, onlyUnique } from "../utils";
import Meta from "../components/Meta";
import Card from "../components/blog/card";
import SubjectCard from "../components/blog/SubjectCard";
import sty from "../styles/Blogs.module.css";

export default function Blogs({ tags }) {
  return (
    <>
      <Meta title={Meta.defaultProps.title + " | Blogs"} />
      <div className={sty.container}>
        <div className={sty.header}>Blongitudez</div>
        <div className={sty.cards}>
          {tags.map((tag, index) => (
            <SubjectCard key={index} tag={tag}></SubjectCard>
          ))}

          {/* <div className={sty.cards}>
      {posts.map((post, index) => (
          <Card key={index} post={post}></Card>
        ))} */}
        </div>
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
