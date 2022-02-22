import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import NavDropDown from '../NavDropDown';

const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hii, I am <br />
          Khan Shadab Alam
        </SectionTitle>
        <SectionText>
         My Job is to help aspiring and established developers to take their development skills to the next level and build awesome websites.
        </SectionText>
        <Link href="/whoisshadab">
          <a >
            {/* <Button>Know me Better</Button> */}
          </a>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;