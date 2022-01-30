import React, { useEffect, useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// import { projects } from '../../constants/constants';
import database from "../../constants/firebase";

function Projects() {
  const [projects, setProject] = React.useState([]);

    useEffect(() => {
        // database    
        //  .collection("people")
        //  .onSnaphot((snapshot) =>
        // setPeople(snapshot.docs.map((doc) => doc.data())))
       
        database.collection('projects').onSnapshot(snapshot => {
            setProject(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

 return(
  <Section nopadding id="projects">
  <SectionDivider />
  <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {projects.map((p, i) => {
      return (
        <BlogCard key={i}>
        {p.image == "" ? "" :  <Img src={p.image} />}
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className="card-info">{p.description}</CardInfo>
            <CardInfo className="card-info">{p.languages != "" ? `Languages Used:  ${p.languages}` : "" }</CardInfo>
          <UtilityList>
            {p.visit == '' ? '' : <ExternalLinks target="_blank" href={p.visit}>Demo</ExternalLinks>}
            {p.source == '' ? '' : <ExternalLinks href={p.source}>Source</ExternalLinks>}
          </UtilityList>
        </BlogCard>
      );
    })}
  </GridContainer>
</Section>
 )
};

export default Projects;