import React, { useState } from 'react'
import { NewSchema } from '../../validations/UserValidations'
import Modal from '../modal/SignUp'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MainDiv } from '../../style/ValidationStyle'
import { Container } from '../../style/ValidationStyle'
import { AllInputs } from '../../style/ValidationStyle'
import { Errors } from '../../style/ValidationStyle'
import { InputBox } from '../../style/ValidationStyle'
import { Btn } from '../../style/ValidationStyle'
import { SignBtn } from '../../style/ValidationStyle'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface IFormInput {
  email: string
  password: string
}

const Data = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(NewSchema) })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios
      .post('https://sql-dev-india.thewitslab.com:3003/auth/login', {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        const Token = response.data.token
        localStorage.setItem('userToken', Token)
        Token ? navigate('/home') : navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <Container>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <MainDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Let's log you in...</h1>
          <br />
          <InputBox>
            <AllInputs
              {...register('email')}
              type="email"
              placeholder="email@email.com"
            />
            <Errors>{errors.email?.message}</Errors>
          </InputBox>
          <br />
          <InputBox>
            <AllInputs
              {...register('password')}
              type="password"
              placeholder="password@123"
            />
            <Errors>{errors.password?.message}</Errors>
          </InputBox>
          <br />
          <Btn type="submit">Log in</Btn>
        </form>
        <SignBtn
          onClick={() => {
            setModalOpen(true)
          }}
        >
          Create New Account
        </SignBtn>
      </MainDiv>
    </Container>
  )
}

export default Data
