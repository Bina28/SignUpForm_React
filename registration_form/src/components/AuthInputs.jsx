import { useState } from "react";
import signupImg from "../assets/signup_img.png";
import Button from "./Button";
import Input from "./Input";




export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="max-w-xl p-5 mx-auto my-0 rounded-md bg-white flex justify-center items-center gap-4">
      <div className="flex-1 max-w-96">
        <h3 className="text-[#363280] text-center text-2xl mb-5" >Login</h3>
        <div className="flex flex-col gap-6">
       
            <Input
              label="Email"
              invalid={emailNotValid}
              type="email"
              onChange={(event) =>
                handleInputChange("email", event.target.value)
              }
            />
         
        
            <Input
              label="Password"
              invalid={passwordNotValid}
              type="password"
              onChange={(event) =>
                handleInputChange("password", event.target.value)
              }
            />
       
        </div>
        <div className="flex content-end gap-5 my-8">
          <button type="button" className="text-[#6c63ff] hover:text-[#363280] text-xs sm:text-sm md:text-base">
            Create a new account
          </button>
          <Button onClick={handleLogin}>Sign In</Button>
        </div>
      </div>
      <div className="flex-1 max-w-96">
        <img src={signupImg} alt="" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}
