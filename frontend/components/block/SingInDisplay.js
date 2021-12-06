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

  // ==============================================================================================

  const signOut = async () => {
    const response = await fetch("/users/signout", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFkYTYzOTUyMmI5OGEyN2ZmNmZhMTAiLCJpYXQiOjE2Mzg3NzA0OTYsImV4cCI6MTYzODg1Njg5Nn0.ypU8uUtquFjAAYPD2msVaxGSK2fNFH98zK92aydNcCA",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  // ==============================================================================================

  const profile = async () => {
    const response = await fetch("/users/profile", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFkYTYzOTUyMmI5OGEyN2ZmNmZhMTAiLCJpYXQiOjE2Mzg3NzA2MzMsImV4cCI6MTYzODg1NzAzM30.Jb_c7JymzAFWp_MZSGXq1bDBsT7n2THcMXgMOgoH11Y",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  // ==============================================================================================

  const update = async () => {
    const sendingInfo = { email: "uuuuu@test.com" };

    const response = await fetch("/users/61ada639522b98a27ff6fa10", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFkYTYzOTUyMmI5OGEyN2ZmNmZhMTAiLCJpYXQiOjE2Mzg3NzAyMzMsImV4cCI6MTYzODg1NjYzM30.kPhEAh8onb3xYyGeXcKgbJWV7L-NGH87eEdCRZpWbdg",
      },
      body: JSON.stringify(sendingInfo),
    });

    const data = await response.json();
    console.log(data);
  };

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
            <button type="button" className="pinkButton" onClick={profile}>
              Profile
            </button>
            <button type="button" className="pinkButton" onClick={update}>
              Update
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
