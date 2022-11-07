import React from "react";
import { MainFooterDiv } from "../../style/FooterStyle";
import { LogoImg } from "../../style/NavBarStyle";
import { FooterDivs } from "../../style/FooterStyle";
import { FooterLogoDiv } from "../../style/FooterStyle";
import { ParaFoot } from "../../style/FooterStyle";
import { ParaDown } from "../../style/FooterStyle";
import { InnerFootDiv } from "../../style/FooterStyle";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <MainFooterDiv>
      <FooterLogoDiv>
        <LogoImg
          src="https://assets.api.uizard.io/api/cdn/stream/a29408e8-9bf7-4cfd-8bbc-573468ba8657.png"
          alt=""
        />
      </FooterLogoDiv>
      <InnerFootDiv>
        <FooterDivs>
          <div>
            <ParaFoot>Company</ParaFoot>
            <ParaDown>About Us</ParaDown>
            <ParaDown>FAQ</ParaDown>
            <ParaDown>Contact</ParaDown>
          </div>
        </FooterDivs>
        <FooterDivs>
          <div>
            <ParaFoot>Legal</ParaFoot>
            <ParaDown>Privacy Policy</ParaDown>
            <ParaDown>Terms and Conditions</ParaDown>
            <ParaDown>Cookit Policy</ParaDown>
          </div>
        </FooterDivs>
        <FooterDivs>
          <div>
            <ParaFoot>Help</ParaFoot>
            <ParaDown>Shipping and Delivery</ParaDown>
            <ParaDown>Returns Policy</ParaDown>
            <ParaDown>Security and Payment</ParaDown>
          </div>
        </FooterDivs>
        <FooterDivs>
          <div>
            <ParaFoot>Social</ParaFoot>
            <ParaDown>
              <GrInstagram style={{ fontSize: "2vw", marginTop: "10px" }} />
              <BsLinkedin
                style={{
                  fontSize: "2vw",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              />
            </ParaDown>
          </div>
        </FooterDivs>
      </InnerFootDiv>
    </MainFooterDiv>
  );
};

export default Footer;
