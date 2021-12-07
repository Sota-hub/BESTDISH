const LoginInput = ({ base, value }) => {
  return (
    <>
      <label htmlFor={base}>{base}</label>
      <input
        value={value}
        type={base}
        name={base}
        placeholder={base}
        className="InputRelateUserStyle"
      ></input>
    </>
  );
};

export default LoginInput;
