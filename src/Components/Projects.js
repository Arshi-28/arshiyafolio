import React from "react";
import gitimg from '../assets/github.png'
import Projectlist from './Projectlist'
import pros from '../Styles/Projects.css'
const Projects = () =>
{
    return(
        <div className="projects">
            <div className='pheading'>
                 <h1 id='project_id'>P R O J E C T S </h1>
             </div>
            <div className='project_items'>
                {
                    Projectlist.map((item)=>
                    (
                        <div className="pcard" key={item.id}>
                            <p>{item.Name}</p>
                            <img src={item.srcc}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Projects;