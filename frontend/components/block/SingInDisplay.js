import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import LoginTitle from "../ui/LoginTitle";
import CommonInput from "../parts/CommonInput";

const SingInDisplay = () => {
  const [isSucceed, setIsSucceed] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const { setIsAuth, setUserInfo } = useContext(UserAuthContext);

  const signInProcess = async () => {
    const sendingInfo = { email: email, password: password };

    const response = await fetch("/users/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendingInfo),
    });

    const data = await response.json();

    if (!data.ok) {
      setIsSucceed(false);
      return;
    }

    setIsAuth(true);
    setUserInfo(data);

    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token);
    }

    router.push(`/user/${data.user._id}`);
  };

  return (
    <main className="alignCenter mt-20">
      {!isSucceed && (
        <div className="fixed top-0 left-0 w-[100%] h-14 leading-[3.5em] text-red border border-red text-center">
          Incorrect email or password
        </div>
      )}
      <div className="w-[80%]">
        <LoginTitle sign="sign in" />
        <form className="w-[100%]">
          <CommonInput setEmail={setEmail} setPassword={setPassword} />
          <div className="mt-12">
            <div className=" text-right mb-2">
              <Link href="/signup">
                <a>sign up?</a>
              </Link>
            </div>
            <button
              type="button"
              className="pinkButton"
              onClick={signInProcess}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SingInDisplay;
