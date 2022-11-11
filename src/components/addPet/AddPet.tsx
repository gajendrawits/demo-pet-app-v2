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
// import { BsTags } from "react-icons/bs";
export const AddUpSchema = yup.object().shape({
  name: yup.string().required(),
  photoUrls: yup.string().required(),
  tags: yup.string().required(),
  status: yup.string().required(),
});

interface IFormInputs {
  name: string;
  photoUrls: string;
  tags: string;
  status: string;
}

const AddPet = () => {
  const url = "https://petstore.swagger.io/v2/pet";
  const { register, handleSubmit, reset } = useForm<IFormInputs>({
    resolver: yupResolver(AddUpSchema),
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) =>
    axios
      .post(url, {
        name: data.name,
        photoUrls: [data.photoUrls],
        Tag: [data.tags],
        status: data.status,
      })
      .then((res) => {
        console.log(res);
        reset();
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
        <AllInputs {...register("tags")} type="text" placeholder="tags" />
        <label htmlFor="">available</label>
        <input
          {...register("status")}
          type="radio"
          //   name="available"
          value="available"
        />
        <label htmlFor="">pending</label>
        <input
          {...register("status")}
          type="radio"
          //   name="available"
          value="pending"
        />
        <label htmlFor="">sold</label>
        <input
          {...register("status")}
          type="radio"
          //   name="available"
          value="sold"
        />
        <div>
          <SignUpBtn type="submit">Add pet</SignUpBtn>
        </div>
      </SignUpForm>
    </FormWraper>
  );
};

export default AddPet;
