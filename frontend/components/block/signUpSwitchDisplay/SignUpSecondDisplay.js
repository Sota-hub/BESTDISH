const SignUpSecondDisplay = ({ setName, signUpProcess }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        type="name"
        name="name"
        placeholder="Name"
        className="block border py-4 pl-2 mt-2 mb-8 w-[100%] rounded-sm"
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
