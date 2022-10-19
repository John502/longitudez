import signUpSty from "../../styles/SignupButton.module.css";
import { useRef } from "react";

const SignupButton = () => {
  const btn = useRef("");
  const onButtonClick = () => {
    // #3c6363
    btn.current.style.backgroundColor = "#3c6363";
    setTimeout(() => {
      btn.current.style.backgroundColor = "#2f4f4f";
    }, 250);
  };

  return (
    <button
      ref={btn}
      className={signUpSty.button}
      type="submit"
      onClick={onButtonClick}
    >
      Sign Up 4 Maps!
    </button>
  );
};
export default SignupButton;
