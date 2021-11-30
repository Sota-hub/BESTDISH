const LoginInput = ({ value }) => {
  return (
    <>
      <label htmlFor={value}>{value}</label>
      <input
        type={value}
        name={value}
        placeholder={value}
        className="block border py-4 pl-2 mt-2 mb-8 w-[100%] rounded-sm"
      ></input>
    </>
  );
};

export default LoginInput;
