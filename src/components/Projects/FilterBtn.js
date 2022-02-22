import React, { useState, useEffect } from 'react'
import {Filterbutton, Div1Filter} from './ProjectsStyles';
import database from "../../constants/firebase";


const FilterBtn = ({ Filterbutton,ProjectsLists, FilterData }) => {
    const [projects, setProject] = React.useState([]);

    useEffect(() => {
        database.collection('projects').onSnapshot(snapshot => {
            setProject(snapshot.docs.map(doc => doc.data()))
        })
      }, [])
    // Spread Operator 
    const allCat = ["all", ...new Set(projects.map((currEle) => currEle.category))]
    
    return (
        <Div1Filter>
            {
                allCat.map((currElement, index) => {
                    return <Filterbutton  key ={index} onClick={() => FilterData(currElement)}>{currElement}</Filterbutton>
                })
            }
        </Div1Filter>
    )
}

export default FilterBtn