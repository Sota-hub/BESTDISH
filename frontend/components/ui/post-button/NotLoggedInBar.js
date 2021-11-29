import Link from "next/link";

const NotLoggedInBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      ></div>
      <div
        className={
          "alignCenter fixed bottom-0 left-0 h-[35%] w-[100%] bg-white z-20"
        }
      >
        <div className="alignCenter w-[100%]">
          <div className="w-[80%]">
            <h1 className="text-center mb-8 text-2xl">
              Please sign in / up to post
            </h1>
            <Link href="/login/signup">
              <a className="block bg-pink text-white w-[100%]  h-12 leading-[48px] text-center rounded-md">
                Sign up
              </a>
            </Link>
            <div className="my-4"></div>
            <Link href="/login/signin">
              <a className="block bg-white text-pink w-[100%]  h-12 leading-[48px] text-center rounded-md border border-pink">
                Sign in
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotLoggedInBar;
