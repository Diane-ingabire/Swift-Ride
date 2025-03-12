import React from "react";
import { FaFacebook, FaBus, FaMapMarkedAlt } from "react-icons/fa"; 
const About = () =>{
      const about_cards = [
        { 
          icons: <FaBus />, 
          title: "Real-time Tracking",
          description_abt: "Track your bus in real-time and never miss your ride again. Get accurate ETAs and route information." 
        }, 
        { 
          icons: <FaMapMarkedAlt />, 
          title: "Convenient Booking",
          description_abt: "Easily book your tickets online and avoid long queues at the bus station." 
        }, 
        { 
          icons: <FaFacebook />, 
          title: "Reliable Service",
          description_abt: "We provide a safe and dependable bus booking service to make your journey smooth and hassle-free." 
        } 
      ];
    return (
        <>
        <div className="about">
        <h3>WHY CHOOSE US</h3>
        <div className="about-cards">
          {about_cards.map((abtcard, index) => (
            <div key={index} className="about_card">
              <p className="icon">{abtcard.icons}</p>
              <h4>{abtcard.title}</h4>
              <p>{abtcard.description_abt}</p>
            </div>
          ))}
        </div>
        </div>
        </>
    )
};
export default About