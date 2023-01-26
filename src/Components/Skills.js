import React from "react";
import { listitems } from "./listitems";
import skill from '../Styles/Skills.css'
const Skills = () => 
{
 return(
    <div className="skills">
      <div className='heads'>
         <h1 id='skills_ref'>S K I L L S</h1>
      </div>
      <div className='skillsitem'>
            { listitems.map((item)=> 
             (
            <div  className = "card" key={item.id}>
                <img src={item.srcc} alt = ""/>
                <p>{item.skillName}</p>
            </div>
             ))
            }
      </div>
    </div>
 )
}
export default Skills;