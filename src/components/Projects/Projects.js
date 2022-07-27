import React, { useEffect, useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img, Filterbutton } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import database from "../../constants/firebase";
import FilterBtn from "./FilterBtn";

function Projects() {
  const [projects, setProject] = React.useState([]);
  const [allprojects, setAllProject] = React.useState([]);

    useEffect(() => {
      database.collection('projects').onSnapshot(snapshot => {
          setProject(snapshot.docs.map(doc => doc.data()))
          setAllProject(snapshot.docs.map(doc => doc.data()))
      })
    }, [])
    
    const FilterData = (category) => {
      if(category === 'all') {
        setProject(allprojects);
        return;
      }
      const updateProjects = allprojects.filter((curr) =>{
        return curr.category === category;
      });
      setProject(updateProjects)
    }


 return(
  <Section nopadding id="projects">
  <SectionDivider />
  <SectionTitle main>Projects</SectionTitle>
    <FilterBtn Filterbutton={Filterbutton}  FilterData={FilterData} ProjectsLists = {projects}/>
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