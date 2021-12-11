import { useState, useContext } from "react";
import { useRouter } from "next/router";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import LoginTitle from "../ui/LoginTitle";
import SignUpFirstDisplay from "./signUpSwitchDisplay/SignUpFirstDisplay";
import SignUpSecondDisplay from "./signUpSwitchDisplay/SignUpSecondDisplay";

const SignUpDisplay = () => {
  const [isSucceed, setIsSucceed] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [isSecondPage, setIsSecondPage] = useState(false);
  const router = useRouter();
  const { setIsAuth, setUserInfo } = useContext(UserAuthContext);

  const signUpProcess = async () => {
    const sendingInfo = { email: email, password: password, name: name };

    const response = await fetch("/users/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendingInfo),
    });

    if (!response.ok) {
      setIsSucceed(false);
      return;
    }

    const data = await response.json();

    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token);
    }

    setIsAuth(true);
    setUserInfo(data);

    router.push(`/user/${data.user._id}`);
  };

  return (
    <main className="alignCenter mt-20">
      {!isSucceed && (
        <div className="fixed top-0 left-0 w-[100%] h-14 leading-[3.5em] text-red border border-red text-center">
          Sorry... something went wrong
        </div>
      )}
      <div className="w-[80%]">
        <LoginTitle sign="sign up" />
        <form action="/users" method="post" className="w-[100%]">
          {!isSecondPage && (
            <SignUpFirstDisplay
              setEmail={setEmail}
              setPassword={setPassword}
              setIsSecondPage={setIsSecondPage}
            />
          )}
          {isSecondPage && (
            <SignUpSecondDisplay
              setName={setName}
              signUpProcess={signUpProcess}
            />
          )}
        </form>
      </div>
    </main>
  );
};

export default SignUpDisplay;
