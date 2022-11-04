import styled from "styled-components";

export const MainDiv = styled.div`
  width: 30vw;
  height: 75vh;
  border-radius: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
export const Container = styled.div`
  display: flex;
  height: 658px;
  justify-content: center;
  align-items: center;
`;
export const AllInputs = styled.input`
  width: 20vw;
  height: 6vh;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  padding-left: 7px;
  :focus {
    outline: none;
  }
`;
export const Errors = styled.p`
  color: red;
`;
export const InputBox = styled.div`
  height: 12vh;
`;
export const Btn = styled.button`
  background: red;
  width: 20vw;
  height: 6vh;
  border-radius: 8px;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    background-color: #901a1a;
    transition: 0.1s;
  }
`;
export const SignBtn = styled.button`
  margin-top: 10vh;
  border: none;
  background-color: #008ad3;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  width: 20vw;
  cursor: pointer;
  height: 6vh;
  :hover {
    background-color: #056ea7;
    transition: 0.1s;
  }
`;
