import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="#tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skill</SectionTitle>
    <SectionText>
      Berikut adalah beberapa teknologi yang biasa saya gunakan dalam pembuatan
      website.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>HTML, CSS, Javascript</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>React JS</li>
              <li>Vue JS</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>PHP</li>
              <li>Laravel/Lumen</li>
              <li>Codeigniter</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Lainnya</ListTitle>
          <ListParagraph>
            <ul>
              <li>REST API</li>
              <li>MySQL Database</li>
              <li>Git/Github</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
