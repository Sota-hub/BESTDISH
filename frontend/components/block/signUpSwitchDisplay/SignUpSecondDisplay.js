import Link from "next/link";

const SignUpSecondDisplay = ({ setName, signUpProcess }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        type="name"
        name="name"
        placeholder="Name"
        className="InputRelateUserStyle"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <div className=" text-right mt-12 mb-2">
        <Link href="/signin">
          <a>sign in?</a>
        </Link>
      </div>
      <button type="button" className="pinkButton" onClick={signUpProcess}>
        Submit
      </button>
    </>
  );
};

export default SignUpSecondDisplay;
