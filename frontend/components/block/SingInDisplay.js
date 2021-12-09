import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import LoginTitle from "../ui/LoginTitle";
import CommonInput from "../parts/CommonInput";

const SingInDisplay = () => {
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

    setIsAuth(true);
    setUserInfo(data);

    router.push(`/user/${data.user._id}`);
  };

  // ==============================================================================================
  // const signOut = async () => {
  //   const response = await fetch("/users/signout", {
  //     method: "POST",
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIxMzFmOGU0ZjUyYTlmNmU4NDkwMGEiLCJpYXQiOjE2MzkwMDI2MTYsImV4cCI6MTYzOTA4OTAxNn0.EA7Oi9gSEiNIDmiAjtyyVEpMyp_WkbBJfhjCJn4Vj5U",
  //     },
  //   });

  //   // const data = await response.json();

  //   router.push("/");
  // };
  // ==============================================================================================
  // <button type="button" className="pinkButton" onClick={signOut}>
  //   sign out
  // </button>
  // ==============================================================================================

  return (
    <main className="alignCenter mt-20">
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
