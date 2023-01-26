import React, { Component } from 'react'
import top from '../Styles/Top.css'
import mypic from '../assets/favicon.ico'
import emailjs from '@emailjs/browser';
import {FaArrowAltCircleRight } from "react-icons/fa";
const Top = ()=>
{
    function sendEmail(e) {
        e.preventDefault();  
        var templateParams = {
          to_name: 'MD NADEEMUDDIN',
          from_name: 'PORTFOLIO',
          message: document.getElementById("emailtxt").value
        }; 
        emailjs.send('service_5g6rtzz', 'template_1fhng8k', templateParams, '7ZHPe0LZTBwichwWn').then((result) => {
              window.location.reload() 
              alert("EMAIL SENT"); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }
    return(
        <div className='secondbox'>
        <img  src={mypic} alt = "imgmoji"/>
        <div className='content'>
            <h3>Hello, my name is</h3>
            <span>MD NADEEMUDDIN.</span>
            <h2>I'am a software graduation Student.</h2>
            <div className='email'>
                <input  id = "emailtxt" className ="emailMe" type={"email"} placeholder="Type your email and we connect!!" />
                <FaArrowAltCircleRight className='submitBtn' onClick={sendEmail}/>  
            </div>
        </div>
        
      </div>
    )
}
       
export default Top;