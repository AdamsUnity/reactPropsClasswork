import React from "react";
import FormWrapper from "./FormWrapper";
import { Input } from "postcss";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";

const Login = () => {
  return (
    <FormWrapper
      headingText={"Welcome Back"}
      directionText={"Don't have an Account yet! Sign Up"}
    >
      <InputField label={"Email"} />
      <InputField label={"Password"} />
      <ActionBtn text={"LOG IN"} />
    </FormWrapper>
  );
};

export default Login;
