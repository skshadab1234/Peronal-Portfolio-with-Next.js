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
                    var styleFilterBtn ='';
                    if (index == 0) {
                         styleFilterBtn = 'background:linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)';
                    }
                    return <Filterbutton key ={index} 
                        style={{styleFilterBtn}}    
                        onClick={() => {
                        FilterData(currElement);
                        for (let i = 0; i < allCat.length; i++) {
                            document.getElementsByClassName("ProjectsStyles__Filterbutton-l76idc-12")[i].style.background = "";
                        }
                        document.getElementsByClassName("ProjectsStyles__Filterbutton-l76idc-12")[index].style.background = "linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)";
                    }
                    }>{currElement+styleFilterBtn}</Filterbutton>
                })
            }
        </Div1Filter>
    )
}

export default FilterBtn