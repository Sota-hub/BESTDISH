import Link from "next/link";

const LoginBar = ({ isBurgerOpen, setIsBurgerOpen }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-[100%] h-[120%] -z-20 bg-black opacity-50"
        onClick={() => {
          setIsBurgerOpen(!isBurgerOpen);
        }}
      ></div>
      <div className="fixed top-0 right-0 w-[50%] h-[120%] -z-10 bg-white">
        <div className="border-t border-b mt-20 py-6  w-[100%] flex justify-center">
          <div>
            <Link href="/login/signup">
              <a className="block bg-orange text-white w-40 h-10 leading-10 text-center rounded-md">
                Sign up
              </a>
            </Link>
            <div className="my-4"></div>
            <Link href="/login/signin">
              <a className="block bg-white text-black border border-solid border-black w-40 h-10 leading-10 text-center rounded-md">
                Sign in
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBar;
