import { useRef } from "react";
import Link from "next/link";
import sty from "../../styles/Blogcard.module.css";

export default function TuneContent({ tune }) {
  const btn = useRef("");
  const onButtonClick = () => {
    // #3c6363
    btn.current.style.backgroundColor = "#131516";
    setTimeout(() => {
      btn.current.style.backgroundColor = "#2f4f4f";
    }, 150);
  };
  return (
    <Link href={"fiddletudez/" + `${tune.slug}`}>
      <button className={sty.excerptBtn}>{tune.title}</button>
    </Link>
  );
}
