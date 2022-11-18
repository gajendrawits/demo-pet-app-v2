import React from 'react'
import { AllInputs } from '../../style/SignUpStyle'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import * as yup from 'yup'
import {
  Btn,
  Container,
  Errors,
  InputBox,
  MainDiv,
} from '../../style/ValidationStyle'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
// import { BsTags } from "react-icons/bs";
export const AddUpSchema = yup.object().shape({
  name: yup.string().required(),
  photoUrls: yup.string().required(),
  tags: yup.string().required(),
  status: yup.string().required(),
})

interface IFormInputs {
  name: string
  photoUrls: string
  tags: string
  status: string
}

const AddPet = () => {
  const url = 'https://petstore.swagger.io/v2/pet'
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(AddUpSchema),
  })
  const onSubmit: SubmitHandler<IFormInputs> = (data) =>
    axios
      .post(url, {
        name: data.name,
        photoUrls: [data.photoUrls],
        Tag: [data.tags],
        status: data.status,
      })
      .then((res) => {
        if (res.status === 200) {
          alert('pet successfully added')
        } else {
          alert('pet not added')
        }
        console.log(res)
        reset()
      })
  return (
    <>
      <NavBar />
      <Container>
        <MainDiv>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Add a pet</h1>
            <br />
            <InputBox>
              <AllInputs
                {...register('name')}
                type="text"
                placeholder="Pet breed"
              />
              <Errors>{errors.name?.message}</Errors>
            </InputBox>
            <br />
            <InputBox>
              <AllInputs
                {...register('photoUrls')}
                type="text"
                placeholder="pet's photo"
              />
              <Errors>{errors.photoUrls?.message}</Errors>
            </InputBox>
            <br />
            <InputBox>
              <AllInputs {...register('tags')} type="text" placeholder="tags" />
              <Errors>{errors.tags?.message}</Errors>
            </InputBox>

            <InputBox>
              <input {...register('status')} type="radio" value="available" />
              <label htmlFor="">available</label>

              <input {...register('status')} type="radio" value="pending" />
              <label htmlFor="">pending</label>

              <input {...register('status')} type="radio" value="sold" />
              <label htmlFor="">sold</label>
            </InputBox>
            <Btn type="submit">Add pet</Btn>
          </form>
        </MainDiv>
      </Container>
      <Footer />
    </>
  )
}

export default AddPet
