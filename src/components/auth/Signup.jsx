import React from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";

const Signup = () => {
  return (
    <FormWrapper
      headingText={"Create Your Acount"}
      directionText={"Already Have an acount? Log In"}
    >
      <div className="flex gap-5">
        <InputField label={"first Name"} />
        <InputField label={"Last Name"} />
      </div>

      <InputField label={"Phone Number"} />
      <InputField label={"Password"} />
      <ActionBtn weight={"error"} text={"SIGN UP"} />
    </FormWrapper>
  );
};

export default Signup;
