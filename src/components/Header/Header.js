import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Shadab Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link  href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons target="_blank" href="https://github.com/skshadab1234">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.youtube.com/c/ProgrammingwithShadab">
          <AiFillYoutube size="3rem" />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.instagram.com/sk_shadab1234/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
