const LoginInput = ({ base, value }) => {
  return (
    <>
      <label htmlFor={base}>{base}</label>
      <input
        value={value}
        type={base}
        name={base}
        placeholder={base}
        className="block border py-4 pl-2 mt-2 mb-8 w-[100%] rounded-sm"
      ></input>
    </>
  );
};

export default LoginInput;
