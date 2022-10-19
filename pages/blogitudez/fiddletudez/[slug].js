import React from "react";
import Meta from "../../../components/Meta";

import sty from "../../../styles/Blogpost.module.css";
import { tunesData } from "../../../data/tunes";
import Staff from "../../../components/tunes/staff";

export default function TunePost({ slug, title, arrangements }) {
  const arr = arrangements[0];

  return (
    <>
      <Meta title={Meta.defaultProps.title + " | " + title} />
      <Meta description={title} />
      <div className={sty.container}>
        <article className={sty.content}>
          <h1>{title}</h1>
          <h2>Key : {arr.key}</h2>
          {arr.staffs.map((staff, index) => (
            <Staff staff={Object.entries(staff)}></Staff>
          ))}
        </article>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = tunesData.map((tune) => ({
    params: {
      slug: tune.slug,
    },
  }));
  return {
    paths,
    // 404 if you try to access a path that doesn't exist
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const filtered = tunesData.filter(
    (tune) => tune.slug === context.params.slug
  );
  const tune = filtered[0];
  const slug = tune.slug;
  const title = tune.title;
  const arrangements = tune.arrangements;

  return {
    props: { slug, title, arrangements },
  };
};
