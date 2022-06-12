import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display:"flex", alignItems:"center", color:"white",marginBottom: "20px" }}>
        <DiCssdeck style="3rem" /> <Span>My Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
        <NavLink>Tentang</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
        <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>Sertifikat</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>Kontak</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="#">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="#">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
