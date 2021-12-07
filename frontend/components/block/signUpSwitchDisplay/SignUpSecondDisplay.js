const SignUpSecondDisplay = ({ setName, signUpProcess }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        type="name"
        name="name"
        placeholder="Name"
        className="InputRelateUserStyle"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        type="button"
        className="pinkButton mt-12"
        onClick={signUpProcess}
      >
        Submit
      </button>
    </>
  );
};

export default SignUpSecondDisplay;
