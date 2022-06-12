import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>WhatsApp</LinkTitle>
          <LinkItem href="#">0856 9710 1126</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="#">faizalvian97@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Follow me on</LinkTitle>
          <LinkItem href="#">
            <SocialIcons href="#">
              <AiFillGithub size="1rem" />
            </SocialIcons>
            <SocialIcons href="#">
              <AiFillInstagram size="1rem" />
            </SocialIcons>
            <SocialIcons href="#">
              <AiFillLinkedin size="1rem" />
            </SocialIcons>
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
