const CommonInput = ({ setEmail, setPassword }) => {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="InputRelateUserStyle"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="InputRelateUserStyle"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
    </>
  );
};

export default CommonInput;
