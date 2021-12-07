import Link from "next/link";

import CommonInput from "../../parts/CommonInput";

const SignUpFirstDisplay = ({ setEmail, setPassword, setIsSecondPage }) => {
  const changeToSecondDisplay = (e) => {
    e.preventDefault();
    setIsSecondPage(true);
  };

  return (
    <>
      <CommonInput setEmail={setEmail} setPassword={setPassword} />
      <div className="mt-12">
        <div className=" text-right mb-2">
          <Link href="/signin">
            <a>sign in?</a>
          </Link>
        </div>
        <button
          type="button"
          className="pinkButton"
          onClick={changeToSecondDisplay}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SignUpFirstDisplay;
