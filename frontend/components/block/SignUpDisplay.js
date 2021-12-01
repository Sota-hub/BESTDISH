import { useState } from "react";
import Link from "next/link";

import LoginTitle from "../ui/LoginTitle";
import LoginInput from "../ui/LoginInput";

const SignUpDisplay = () => {
  const [isSecondPage, setIsSecondPage] = useState(false);

  const signUpProcess = () => {};

  return (
    <main className="alignCenter mt-20">
      <div className="w-[80%]">
        <LoginTitle sign="sign up" />
        <form className="w-[100%]">
          {!isSecondPage && (
            <>
              <LoginInput value="email" />
              <LoginInput value="password" />
              <div className="mt-12">
                <div className=" text-right mb-2">
                  <Link href="/signin">
                    <a>sign in?</a>
                  </Link>
                </div>
                <input
                  type="submit"
                  value="Next"
                  readOnly
                  className="pinkButton"
                  onClick={() => setIsSecondPage(true)}
                ></input>
              </div>
            </>
          )}
          {isSecondPage && (
            <>
              <LoginInput value="name" />
              <input
                type="submit"
                value="Sign up"
                readOnly
                className="pinkButton mt-12"
                onClick={signUpProcess}
              ></input>
            </>
          )}
        </form>
      </div>
    </main>
  );
};

export default SignUpDisplay;
