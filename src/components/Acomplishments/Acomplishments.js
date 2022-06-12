import React from "react";

import {
  BlogCard,
  GridContainer,
  Img
} from "./AcomplishmentsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Acomplishments = () => (
  <Section nopadding id="acomplishments">
    <br/>
    <SectionDivider /><br />
    <SectionTitle>Sertifikat</SectionTitle>
    <GridContainer>
      <BlogCard href="https://www.sololearn.com/Certificate/1014-25669448/jpg/">
        <Img src="https://www.sololearn.com/Certificate/1014-25669448/jpg/" />
      </BlogCard>
      <BlogCard href="https://www.sololearn.com/Certificate/1023-25669448/jpg/">
        <Img src="https://www.sololearn.com/Certificate/1023-25669448/jpg/" />
      </BlogCard>
      <BlogCard href="https://www.sololearn.com/Certificate/1023-25669448/jpg/">
        <Img src="/images/laravel.PNG" />
      </BlogCard>
      <BlogCard href="https://www.sololearn.com/Certificate/1023-25669448/jpg/">
        <Img src="/images/laravue.PNG" />
      </BlogCard>
    </GridContainer>
  </Section>
);

export default Acomplishments;
