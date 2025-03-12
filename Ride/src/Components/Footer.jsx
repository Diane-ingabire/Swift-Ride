import React from "react";
import { FaFacebook } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../Styles/footer.css"
const Footer =()=>{
    return(
        <>
        <div className="footer_container">
          <div className="footer_container1">
             <div className="footer-logo">
                    <TbBus className="bus-icon" />
                    <p className="brand-name">Swift Ride</p>
                    <p>The smart way to <br/>
                        book bus tickets <br/>
                        in Rwanda. Skip the lines,<br/>
                        track your bus, <br/>
                        and travel with confidence.</p>
               </div>
          </div>
          <div className="footer_container2">
            <h3>Quick Links</h3>
                 <ul className="footer-links">
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/Book_Now">Book Now</Link></li>
                   <li><Link to="/Features">Features</Link></li>
                   <li><Link to="/About_Us">About Us</Link></li>
                   <li><Link to="/FQAs">FQAs</Link></li>
                 </ul>
          </div>
          <div className="footer_container3">
            <h3>Popular Routes</h3>
           <ul>
           <li>Nyabugogo-kimironko</li>
            <li>Remera-kimironko</li>
            <li>kacyiru-kimironko</li>
            <li>kinyinya-kimironko</li>
           </ul>
          </div>
          <div className="footer_container4">
            <div><h3>Contact Us</h3></div>
           <p>KN 5 Rd, Kigali,
           Rwanda</p> 
          <p>+25076984578</p>
          <p> info@swiftride.com</p>
          <div className="footericons">
          <FaFacebook />
          </div>
          </div>

        </div>
        
        </>
    )
}
export default Footer;