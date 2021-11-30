import Link from "next/link";

import LoginTitle from "../ui/LoginTitle";
import LoginInput from "../ui/LoginInput";

const SingInDisplay = () => {
  return (
    <div className="alignCenter mt-20">
      <div className="w-[80%]">
        <LoginTitle sign="sign in" />
        <form className="w-[100%]">
          <LoginInput value="email" />
          <LoginInput value="password" />
          <div className="mt-12">
            <div className=" text-right mb-2">
              <Link href="/signup">
                <a>sign up?</a>
              </Link>
            </div>
            <input
              type="submit"
              value="Sign in"
              readOnly
              className="pinkButton"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingInDisplay;
