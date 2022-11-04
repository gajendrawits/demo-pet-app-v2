import React from "react";
import axios from "axios";
import { SignUpSchema } from "../../validations/SignUpValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import "../modal/SignUp.css";
import { FormWraper } from "../../style/SignUpStyle";
import { SignUpForm } from "../../style/SignUpStyle";
import { AllInputs } from "../../style/SignUpStyle";
import { SignUpBtn } from "../../style/SignUpStyle";
// import { DivWraper } from "../../style/SignUpStyle";
import { useForm, SubmitHandler } from "react-hook-form";
// import Data from "../LoginPage";

interface Imodal {
  setOpenModal: any;
}
interface IFormInputs {
  firstName: string;
  lastName: string;
  phoneNo: string;
  userName: string;
  email: string;
  password: string;
}

function Modal({ setOpenModal }: Imodal) {
  const url = "https://petstore.swagger.io/v2/user";
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(SignUpSchema) });
  // const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  const onSubmit: SubmitHandler<IFormInputs> = (data) =>
    axios
      .post(url, {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phoneNo,
        username: data.userName,
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
      }, setOpenModal(false));
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Sign Up</h1>
          <p>it's quick and easy</p>
        </div>
        <FormWraper>
          <SignUpForm onSubmit={handleSubmit(onSubmit)}>
            <AllInputs
              {...register("firstName")}
              type="text"
              placeholder="First name"
            />

            <AllInputs
              {...register("lastName")}
              type="text"
              placeholder="Last name"
            />

            <AllInputs
              {...register("phoneNo")}
              type="text"
              placeholder="Phone no."
            />
            <AllInputs
              {...register("userName")}
              type="text"
              placeholder="Create a user name"
            />
            <AllInputs
              {...register("email")}
              type="email"
              placeholder="Email address"
            />
            <AllInputs
              {...register("password")}
              type="text"
              placeholder="password"
            />
            <div>
              <SignUpBtn type="submit">Sign Up</SignUpBtn>
            </div>
          </SignUpForm>
        </FormWraper>
        <div>
          <p>
            People who use our service may have uploaded your contact
            information to Maverick. Learn more.
          </p>
          <p>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time. Sign Up
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
