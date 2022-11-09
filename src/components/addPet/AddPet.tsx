import React from "react";
import {
  AllInputs,
  FormWraper,
  SignUpBtn,
  SignUpForm,
} from "../../style/SignUpStyle";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
export const AddUpSchema = yup.object().shape({
  name: yup.string().required(),
  photoUrls: yup.string().required(),
  status: yup.string().required(),
});

interface IFormInputs {
  name: string;
  photoUrls: string;
  status: string;
}

const AddPet = () => {
  const url = "https://petstore.swagger.io/v2/pet";
  const { register, handleSubmit } = useForm<IFormInputs>({
    resolver: yupResolver(AddUpSchema),
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) =>
    axios
      .post(url, {
        name: data.name,
        photoUrls: [data.photoUrls],
        status: data.status,
      })
      .then((res) => {
        console.log(res);
      });
  return (
    <FormWraper>
      <SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <AllInputs {...register("name")} type="text" placeholder="your name" />

        <AllInputs
          {...register("photoUrls")}
          type="text"
          placeholder="photoUrls"
        />
        <label htmlFor="">available</label>
        <input
          {...register("status")}
          type="radio"
        //   name="available"
          value="available"
        />
        <div>
          <SignUpBtn type="submit">Add pet</SignUpBtn>
        </div>
      </SignUpForm>
    </FormWraper>
  );
};

export default AddPet;
