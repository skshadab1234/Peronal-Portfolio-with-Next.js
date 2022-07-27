import {React,useEffect,useState} from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {AiFillFilePdf} from 'react-icons/ai'
import database from "../../constants/firebase";

function Hero(){
const [resumedownload, setResume] = useState([])
  useEffect(() => {
    database.collection('heroButton').onSnapshot(snapshot => {
      setResume(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  console.log(resumedownload[0].link);
 return <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hii, I am <br />
          Khan Shadab Alam
        </SectionTitle>
        <SectionText>
         My Job is to help aspiring and established developers to take their development skills to the next level and build awesome websites.
        </SectionText>
          <a target="_blank" href = {resumedownload[0].link}>
            <Button ><AiFillFilePdf size="3rem" /> <span style={{"margin-left":"10px"}}> {resumedownload[0].text} </span></Button>
          </a>
      </LeftSection>
    </Section>
  </>
}

export default Hero;