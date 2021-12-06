import { useState } from "react";

import LoginTitle from "../ui/LoginTitle";
import SignUpFirstDisplay from "./signUpSwitchDisplay/SignUpFirstDisplay";
import SignUpSecondDisplay from "./signUpSwitchDisplay/SignUpSecondDisplay";

const SignUpDisplay = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [isSecondPage, setIsSecondPage] = useState(false);

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

    const data = await response.json();

    console.log(data);
  };

  return (
    <main className="alignCenter mt-20">
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
