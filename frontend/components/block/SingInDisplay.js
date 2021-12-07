import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserInfoContext } from "../../contexts/UserInfoContext";
import LoginTitle from "../ui/LoginTitle";
import CommonInput from "../parts/CommonInput";

const SingInDisplay = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const { setUserInfo } = useContext(UserInfoContext);

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

    // 404 return

    isAuth(true);
    setUserInfo(data);

    router.push(`/user/${data.user._id}`);
  };

  // ==============================================================================================

  const signOut = async () => {
    const response = await fetch("/users/signout", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFkYTYzOTUyMmI5OGEyN2ZmNmZhMTAiLCJpYXQiOjE2Mzg3NzA0OTYsImV4cCI6MTYzODg1Njg5Nn0.ypU8uUtquFjAAYPD2msVaxGSK2fNFH98zK92aydNcCA",
      },
    });

    // const data = await response.json();

    router.push("/");
  };

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
            <button type="button" className="pinkButton" onClick={signOut}>
              sign out
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SingInDisplay;
