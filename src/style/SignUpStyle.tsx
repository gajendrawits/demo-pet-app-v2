import styled from "styled-components";

export const FormWraper = styled.div`
  /* border: 1px solid black; */
  height: 40vh;
`;
export const SignUpForm = styled.form`
  /* display: grid;
  grid-template-columns: auto auto; */
`;
export const AllInputs = styled.input`
  height: 5vh;
  width: 14vw;
  font-size: 1rem;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid black;
  padding-left: 4px;
`;
export const SignUpBtn = styled.button`
  width: 31vw;
  height: 6vh;
  font-size: 1.5rem;
  border-radius: 8px;
  border: none;
  background-color: #008ad3;
  color: white;
  margin-top: 18px;
  cursor: pointer;
  :hover {
    background-color: #087dbc;
    transition: 0.5s;
  }
`;
