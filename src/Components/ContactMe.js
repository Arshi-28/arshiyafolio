import React from "react";
import gitimg from '../assets/github.png'
import lkdn from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import contact from '../Styles/Contact.css'
const ContactMe = () =>
{
    return(
        <div className="contactme">
            <div className="heading">
                <h1>C O N T A C T - M E </h1>
            </div>
            <div className="contactitems">
                 <div>
                 <a href="https://github.com/mdnadeem7"  target="_blank" rel="noopener"><img src={gitimg} alt = ""/>mdnadeem7</a>
                 </div>
                 <div>
                 <a href = "mailto: mdnadeem4614@gmail.com" ><img src={mail} alt = ""/>mdnadeem4614@gmail.com</a>
                 </div>
                 <div>
                  <a href="https://www.linkedin.com/in/md-nadeemuddin-a819311a5"   target="_blank" rel="noopener"><img src={lkdn} alt = ""/>md-nadeemuddin-a819311a5</a>
                 </div>
            </div>
        </div>
    )
}
export default ContactMe;