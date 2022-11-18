import styled from 'styled-components'

export const NavDiv = styled.div`
  border-bottom: 2px solid black;
  /* width: 1440px; */
  width: 95%;
  height: 10vh;
  margin: auto;
  display: flex;
  /* justify-content: flex-start; */
`
export const LogoDiv = styled.div`
  cursor: pointer;
  width: 6vw;
  height: 10vh;
  :hover {
    transform: scale(1.1);
    transition: 1s;
  }
  /* transform: 1px; */
`
export const LogoImg = styled.img`
  width: 3vw;
  margin: 20px 0px;
`
export const NavText = styled.span`
  margin-top: 25px;
  margin-left: 6vw;
  color: rgb(0, 9, 88);
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    /* transition: 1s; */
    transition: 0.1s;
    font-weight: 700;
  }
`
export const TextWrap = styled.div`
  /* border: 2px solid black; */
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  width: 42vw;
`
export const AllImg = styled.div`
  /* border: 2px solid black; */
  width: 30vh;
  display: flex;
  color: rgb(0, 9, 88);
  justify-content: space-between;
  /* gap: 20px; */
  margin-left: 30vw;
  margin-top: 25px;
`
export const CartCount = styled.div`
  /* border: 2px solid black; */
  height: 20px;
  width: 20px;
  border-radius: 20px;
  margin: auto;
  position: absolute;
  left: 90%;
  top: 2%;
  :hover {
    background-color: green;
    color: white;
  }
`
