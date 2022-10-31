import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Meta from "../../../components/Meta";
import sty from "../../../styles/TunePost.module.css";

export default function BlogPost({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Meta title={Meta.defaultProps.title + " | " + title} />
      <Meta description={content} />
      <div className={sty.container}>
        <article className={sty.content}>
        <img src="/images/tunechords/LouisvilleBreakdown.svg" class={sty.tunechords}></img>
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                  </ReactMarkdown> */}
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  //Get files from post directory
  const files = fs.readdirSync(path.join("blogs/markdown/fiddletudez"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    // 404 if you try to access a path that doesn't exist
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markDownWithMeta = fs.readFileSync(
    path.join("blogs/markdown/fiddletudez", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markDownWithMeta);

  return {
    props: { frontmatter, slug, content },
  };
}
