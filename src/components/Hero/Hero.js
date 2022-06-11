import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Perkenalkan nama saya Muhammad Faiz Alviansyah, saya adalah seorang <strong>Frontend Developer</strong>.
      </SectionText>
      <Button onClick={() => window.location = 'https://faizalvian.site'}>Hire Now</Button>
    </LeftSection>
  </Section>
);

export default Hero;