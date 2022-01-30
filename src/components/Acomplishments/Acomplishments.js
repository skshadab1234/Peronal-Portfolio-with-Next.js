import React, { useEffect, useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import database from "../../constants/firebase";

function Acomplishments () {
  const [achievement, setProject] = React.useState([]);

  useEffect(() => {
      database.collection("achievement").orderBy("id", "asc").onSnapshot(snapshot => {
          setProject(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {achievement.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider/>
    </Section>
  )
};

export default Acomplishments;
