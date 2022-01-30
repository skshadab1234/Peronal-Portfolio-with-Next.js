import React, { useEffect, useState } from 'react';

import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import database from "../../constants/firebase";

function Technologies() {
  const [Technologies, setTechnologies] = React.useState([]);

  useEffect(() => {
      // database    
      //  .collection("people")
      //  .onSnaphot((snapshot) =>
      // setPeople(snapshot.docs.map((doc) => doc.data())))
     
      database.collection('Technologies').onSnapshot(snapshot => {
          setTechnologies(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Front-end To Back-end
      </SectionText>
      <List>
      {Technologies.map((p, i) => {
        return (
          <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>{p.title}</ListTitle>
            <ListParagraph>
              <p>{p.text}</p>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        );
      })}
       
      </List>
      <SectionDivider colorAlt />
    </Section>
  )
};

export default Technologies;
