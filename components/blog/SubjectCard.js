import { useRef } from "react";
import Link from "next/link";
import sty from "../../styles/Blogcard.module.css";

export default function SubjectCard({ tag }) {
  const btn = useRef("");
  const onButtonClick = () => {
    // #3c6363
    btn.current.style.backgroundColor = "#131516";
    setTimeout(() => {
      btn.current.style.backgroundColor = "#2f4f4f";
    }, 150);
  };

  return (
    <article className={sty.card}>
      <div className={sty.imageContainer}>
        <img
          className={sty.cardImage}
          src={"images/" + tag + ".png"}
          alt={tag}
        ></img>
      </div>
      <Link href={`blogitudez/${tag}`}>
        <button className={sty.excerptBtn}>{tag}</button>
      </Link>
    </article>
  );
}
