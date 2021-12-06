import { useState } from "react";
import Link from "next/link";

import LoginTitle from "../ui/LoginTitle";
import CommonInput from "../parts/CommonInput";

const SingInDisplay = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

    console.log(data);
  };

  // const update = async () => {
  //   const sendingInfo = { name: "taro" };

  //   const response = await fetch("/users/61ad5d8f16b684ecd34aeff0", {
  //     method: "PATCH",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(sendingInfo),
  //   });

  //   const data = await response.json();

  //   console.log(data);
  // };

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
            {/* <button type="button" className="pinkButton" onClick={update}>
              Update
            </button> */}
          </div>
        </form>
      </div>
    </main>
  );
};

export default SingInDisplay;
