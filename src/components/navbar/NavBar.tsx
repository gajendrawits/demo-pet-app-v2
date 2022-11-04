import React from "react";
import { ImSearch } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavDiv } from "../../style/NavBarStyle";
import { LogoDiv } from "../../style/NavBarStyle";
import { LogoImg } from "../../style/NavBarStyle";
import { NavText } from "../../style/NavBarStyle";
import { TextWrap } from "../../style/NavBarStyle";
import { AllImg } from "../../style/NavBarStyle";

const NavBar = () => {
  return (
    <NavDiv>
      <LogoDiv>
        <LogoImg
          src="https://assets.api.uizard.io/api/cdn/stream/a29408e8-9bf7-4cfd-8bbc-573468ba8657.png"
          alt=""
        />
      </LogoDiv>
      <TextWrap>
        <NavText>HOME</NavText>
        <NavText>CATEGORIES</NavText>
        <NavText>BLOG</NavText>
        <NavText>CONTACT</NavText>
      </TextWrap>
      <AllImg>
        <ImSearch style={{ fontSize: "2vw", cursor: "pointer" }} />
        <FaShoppingCart style={{ fontSize: "2vw", cursor: "pointer" }} />
        <CgProfile style={{ fontSize: "2vw", cursor: "pointer" }} />
      </AllImg>
    </NavDiv>
  );
};

export default NavBar;
