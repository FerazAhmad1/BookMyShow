import { useRef, useState } from "react";
import axios from "axios";
import Input from "./Input";

const LoginSignup = () => {
  const [signup, setSignup] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const cnfPasswordRef = useRef<HTMLInputElement>(null);

  const signupHandler = () => {
    if (!emailRef.current || emailRef.current.value.trim().length == 0) {
      return alert("please fill email or phone");
    }
    if (!passwordRef.current || passwordRef.current.value.trim().length == 0) {
      return alert("please fill password or phone");
    }
    if (
      !cnfPasswordRef.current ||
      cnfPasswordRef.current.value.trim().length == 0
    ) {
      return alert("please fill confirm password or phone");
    }
    if (
      passwordRef.current.value.trim().length ==
      cnfPasswordRef.current.value.trim().length
    ) {
      return alert("your password and cnfirm password is not matching");
    }
  };

  const loginHandler = async () => {
    try {
      if (!emailRef.current || emailRef.current.value.trim().length == 0) {
        return alert("please fill email or phone");
      }
      if (
        !passwordRef.current ||
        passwordRef.current.value.trim().length == 0
      ) {
        return alert("please fill password or phone");
      }
      const reqObj = {
        identity: emailRef.current.value.trim(),
        password: passwordRef.current.value,
      };
      const response = await axios.post(
        "http://localhost:3000/api/v1/user",
        reqObj
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = () => {
    if (signup) {
      signupHandler();
      return;
    }
    loginHandler();
  };
  return (
    <div className="py-10 px-4 shadow-2xl rounded-xl ">
      <form
        action=""
        onSubmit={formSubmitHandler}
        className="flex flex-col gap-2 justify-center w-[300px] "
      >
        <label className="m-0">Email or Phone</label>
        <Input type="text" placeholder="Email or Phone" ref={emailRef} />
        <label>Password</label>
        <Input type="text" placeholder="password" ref={passwordRef} />
        {signup && <label>Confirm Password</label>}
        {signup && (
          <Input
            type="text"
            placeholder="confirm password"
            ref={cnfPasswordRef}
          />
        )}
        <button className=" bg-[#0000ffbd] p-2 h-10 rounded-xl text-white">
          Submit
        </button>
      </form>
      <p>
        <span>{signup ? "create a account" : "Login"} </span>
        <span>or </span>
        <span
          className="text-blue-500 hover:border-b-2 "
          onClick={() => setSignup((p) => !p)}
        >
          {!signup ? "create a account" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default LoginSignup;
