import { useRef } from "react";
import Link from "next/link";
import sty from "../../styles/Staff.module.css";

export default function Staff({ staff }) {
  return (
    <div className={sty.staff}>
      <div className={sty.partLabel}>{staff[0]}</div>
      <div className={sty.chords}>{staff[1]}</div>
    </div>
  );
}
