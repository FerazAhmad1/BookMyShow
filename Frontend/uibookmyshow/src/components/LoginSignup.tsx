import { useEffect, useRef, useState } from "react";

import Input from "./Input";
import { signupUser, loginUser } from "../slice/authSlice";

import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";
import { type SignupProps } from "../types/types";
const LoginSignup = () => {
  const [signup, setSignup] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const cnfPasswordRef = useRef<HTMLInputElement>(null);
  const navigator = useNavigate();

  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const signupHandler = () => {
    if (!nameRef.current || nameRef.current.value.trim().length == 0) {
      return alert("please fill name");
    }
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
      passwordRef.current.value.trim().length !==
      cnfPasswordRef.current.value.trim().length
    ) {
      return alert("your password and cnfirm password is not matching");
    }
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const confirmPassword = cnfPasswordRef.current.value.trim();
    const data: SignupProps = { name, email, password, confirmPassword };
    dispatch(signupUser(data));
  };

  useEffect(() => {
    if (token) {
      navigator("/home");
    }
  }, [token]);

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
      const email = emailRef.current.value.trim();
      const password = passwordRef.current.value.trim();
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signup) {
      signupHandler();
      return;
    }
    loginHandler();
  };
  return (
    <div className="h-screen">
      <div className="py-10 px-4 shadow-2xl rounded-xl ">
        <form
          action=""
          onSubmit={formSubmitHandler}
          className="flex flex-col gap-2 justify-center w-[300px] "
        >
          {signup && <label>Name</label>}
          {signup && <Input type="text" placeholder="Name" ref={nameRef} />}
          <label>Email or Phone</label>
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
    </div>
  );
};

export default LoginSignup;
