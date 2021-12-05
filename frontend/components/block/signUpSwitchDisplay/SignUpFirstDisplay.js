import Link from "next/link";

const SignUpFirstDisplay = ({ setEmail, setPassword, setIsSecondPage }) => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="block border py-4 pl-2 mt-2 mb-8 w-[100%] rounded-sm"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="block border py-4 pl-2 mt-2 mb-8 w-[100%] rounded-sm"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div className="mt-12">
        <div className=" text-right mb-2">
          <Link href="/signin">
            <a>sign in?</a>
          </Link>
        </div>
        <button
          type="button"
          className="pinkButton"
          onClick={() => setIsSecondPage(true)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SignUpFirstDisplay;
