import React, { Component } from 'react'
import All from '../Styles/All.css'
import { FaBars, FaTimes } from "react-icons/fa";
import Top from './Top';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
class Main extends Component
{
     
    state = {clicked:false};
    handleClickbar=()=>
    {
      this.setState(
        {
            clicked:!this.state.clicked
        }
      )  
    }
    render()
    {
        return(
            <div className='outertag'>
                <div className='navbar1'>
                    <div className='brandn'>Nadeem's<span>folio</span></div>
                    <ul id='menuitems' className={this.state.clicked ? "#menuitems active" : "#menuitems" }>
                        <li ><a href='#skills_ref' className='item'  >Skills</a></li>
                        <li ><a href="#pro_ref" className='item' > Projects</a></li>
                        <li ><a href='#contact_ref' className='item' >Contact me</a></li>
                    </ul>
                    <div id='mobile' onClick={this.handleClickbar}>
                        <i id= "bar" > {this.state.clicked ? <FaTimes/>: <FaBars/>}</i>
                    </div>
                </div>
                <Top />
                <Skills id="skills_ref"/>
                <Projects id="pro_ref"/>
                <ContactMe id="contact_ref"/>
                <div className='footer'>
                    <p>CopyRights Reserved @mdnadeem7</p>
                </div>
            </div>
            
        )
    }
    
}
export default Main;