import styled from 'styled-components'

export const MainHomeDiv = styled.div`
  display: flex;
`
export const LeftDiv = styled.div`
  /* border: 2px solid black; */
  width: 60vw;
  height: 80vh;
`
export const InnerLeftDiv = styled.div`
  margin: 28vh auto;
  width: 45vw;
`
export const HTop = styled.h1`
  font-family: 'Red Hat Display';
  color: rgb(0, 9, 88);
  font-size: 48px;
`
export const Para = styled.p`
  font-family: 'Red Hat Display';
  font-size: 28px;
  color: rgb(0, 9, 88);
`
export const SearchInput = styled.input`
  width: 26vw;
  height: 6vh;
  border-radius: 30px;
  border: none;
  padding-left: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :focus {
    outline: none;
  }
`
export const SearchBtn = styled.button`
  width: 8vw;
  /* max-width:4vw */
  height: 7vh;
  margin-left: 8px;
  border-radius: 30px;
  color: white;
  background-color: #fe3a3a;
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :hover {
    background-color: #fd2020;
    transition: 0.2s;
  }
`
export const RightDiv = styled.div`
  /* border: 2px solid black; */
  height: 80vh;
`
export const InnerRightDiv = styled.div`
  /* border: 2px solid black; */
  margin-right: 10px;
  margin-top: 8vh;
  width: 45vw;
  /* height: 50vh; */
`
export const DogImg = styled.img`
  border-radius: 480px;
`
