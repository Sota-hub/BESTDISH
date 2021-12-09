import Link from "next/link";

const NotAuthenticated = () => {
  return (
    <div className="alignCenter h-[100vh]">
      <div className="w-[80%]">
        <h1 className="text-3xl mb-24">
          You are not Authenticated. <br />
          Please sign up/in!
        </h1>
        <Link href="/signup">
          <a className="pinkButton block text-center leading-[4rem] mb-4">
            Sign up
          </a>
        </Link>
        <Link href="/signin">
          <a className="whiteButton block text-center leading-[4rem]">
            Sign in
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotAuthenticated;
