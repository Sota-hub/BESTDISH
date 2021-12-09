import { useState } from "react";

const ProfileUpdateDisplay = ({ token }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const nameUpdateProcess = async () => {
    await fetch("/users/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: name }),
    });

    setName("");
  };

  const emailUpdateProcess = async () => {
    await fetch("/users/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: email }),
    });

    setEmail("");
  };

  const passwordUpdateProcess = async () => {
    await fetch("/users/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ password: password }),
    });

    setPassword("");
  };

  return (
    <div className="alignCenter my-12">
      <form className="w-[80%]">
        <h1 className="text-3xl font-bold mb-4">Update Information</h1>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          type="name"
          name="name"
          placeholder="Name"
          className="InputRelateUserStyle mb-2"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <span className="updateButton" onClick={nameUpdateProcess}>
          Update name
        </span>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          className="InputRelateUserStyle mb-2"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <span className="updateButton" onClick={emailUpdateProcess}>
          Update email
        </span>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          className="InputRelateUserStyle mb-2"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <span className="updateButton" onClick={passwordUpdateProcess}>
          Update password
        </span>
      </form>
    </div>
  );
};

export default ProfileUpdateDisplay;
