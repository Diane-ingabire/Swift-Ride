import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../Styles/book_now.css'
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import BUS from '../assets/BUS.jpg';
const Book_Now =() =>{
    const navigate = useNavigate(); 
    const Available =[
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },   
         {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
            direction: "nyabugogo-kimironko"
        
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
              direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
              direction: "nyabugogo-kimironko"
        },
        {
            image: BUS,
            Number:302,
            id:1,
            time: "3:45pm",
            amount:"217Rwf",
              direction: "nyabugogo-kimironko"
        }

    ];
    const [fromInputValue, setFromInputValue] = useState(""); // Store input value for "From"
    const [toInputValue, setToInputValue] = useState(""); // Store input value for "To"
    const [filteredFromSuggestions, setFilteredFromSuggestions] = useState([]); // Filtered "From" suggestions
    const [filteredToSuggestions, setFilteredToSuggestions] = useState([]); // Filtered "To" suggestions
      
    const popular_places = ["Nyabugogo", "Kimironko", "Kimisagara", "Nyamirambo", "Remera", "Gikondo", "Nyanza", "Kabuga", "Busanza", "Kinyinya"];

    const handlePayment = (bus_av) => {
        navigate("/payment", { state: { bus_av } }); 
    };
    const handleFromChange = (e) => {
        const value = e.target.value;
        setFromInputValue(value);

        // Filter suggestions based on input
        setFilteredFromSuggestions(
            popular_places.filter((place) =>
                place.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    // Handle the "To" input change
    const handleToChange = (e) => {
        const value = e.target.value;
        setToInputValue(value);

        // Filter suggestions based on input
        setFilteredToSuggestions(
            popular_places.filter((place) =>
                place.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    // Handle suggestion click
    const handleFromSuggestionClick = (suggestion) => {
        setFromInputValue(suggestion);
        setFilteredFromSuggestions([]);
    };

    const handleToSuggestionClick = (suggestion) => {
        setToInputValue(suggestion);
        setFilteredToSuggestions([]);
    };
    return(
        <>
        <div className="Booking_container">
            <div className="wlcome_booking">
                <h2>Book Your Ticket</h2>
                <p>Find your route, select your date, and book your ticket in just a few clicks!</p>
            </div>
            <div className="booking">

               <div>
               <div className="the_select_boxes">
                        <div className='from_bx'>
                            <input
                                type="text"
                                value={fromInputValue}
                                onChange={handleFromChange}
                                placeholder="From"
                            />
                            {filteredFromSuggestions.length > 0 && (
                                <ul>
                                    {filteredFromSuggestions.map((suggestion, index) => (
                                        <li key={index} onClick={() => handleFromSuggestionClick(suggestion)}>
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='arrow_icon'>
                        <FaArrowRightArrowLeft />
                        </div>
                        <div className='To_bx'>
                            <input
                                type="text"
                                value={toInputValue}
                                onChange={handleToChange}
                                placeholder="To"
                            />
                            {filteredToSuggestions.length > 0 && (
                                <ul>
                                    {filteredToSuggestions.map((suggestion, index) => (
                                        <li key={index} onClick={() => handleToSuggestionClick(suggestion)}>
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='search_icon'><IoSearchCircleSharp /></div>
                    </div>
                   
                 <div className="avail_bsContainer">
                 <h3>Available buses</h3>
                 <div className="avail_bs">
                      
                      {Available.map((bus_av,index) => (
                         <div key={index} className="buscard">
                            <img src={bus_av.image} alt="bus image"/>
                            <p>{bus_av.time}</p>
                            <p>{bus_av.direction}</p>
                            <p>{bus_av.amount}</p>
                            <button onClick={() => handlePayment(bus_av)}>Select and pay</button>
                         </div>
                      )
 
                      )
                      }
                    </div>
                 </div>
                
               </div>
            </div>
        </div>
        </>
    )
}
export default Book_Now