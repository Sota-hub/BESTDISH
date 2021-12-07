import { useState } from "react";

const ProfileUpdateDisplay = ({ Email, Password, Name, Token }) => {
  const [email, setEmail] = useState(Email);
  const [password, setPassword] = useState(Password);
  const [name, setName] = useState(Name);

  const updateProcess = async (e) => {
    e.preventDefault();
    const sendingInfo = { email, password, name };

    const response = await fetch("/users/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify(sendingInfo),
    });

    const data = await response.json();
    console.log(data);
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
          className="InputRelateUserStyle"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          className="InputRelateUserStyle"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          className="InputRelateUserStyle"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="pinkButton" onClick={updateProcess}>
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdateDisplay;
