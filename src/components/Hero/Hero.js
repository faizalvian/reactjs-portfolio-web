import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionText>
        Halo semua! perkenalkan saya
      </SectionText>
      <SectionTitle center>
        Muhammad Faiz <br />
        Alviansyah
      </SectionTitle>
      <SectionText>
        Front-End Web Developer
      </SectionText>
      <Button onClick={() => window.location = 'https://faizalvian.site'}>Hire Now</Button>
    </LeftSection>
  </Section>
);

export default Hero;