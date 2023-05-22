import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        InputWithLabel="E-mail"
        type="text"
        placeholder="Enter e-mail"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        InputWithLabel="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default LoginPageInputs;
