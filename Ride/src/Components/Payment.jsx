import React, { useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdCard } from "react-icons/io";
import "../Styles/payment.css"

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("mobile"); 

    return (
        <>
            <div className="Payment_holder">
                <div className="upper_payment">
                    <h2>Payment</h2>
                    <p>Choose your preferred payment method</p>
                </div>

                <div className="middle_payment">
                    <div 
                        className={`Mobile_container ${paymentMethod === "mobile" ? "active" : ""}`} 
                        onClick={() => setPaymentMethod("mobile")}
                    >
                        <IoIosPhonePortrait />
                        <p>Mobile Money</p>
                    </div>
                    <div 
                        className={`tapcard_container ${paymentMethod === "card" ? "active" : ""}`} 
                        onClick={() => setPaymentMethod("card")}
                    >
                        <IoMdCard />
                        <p>Card</p>
                    </div>
                </div>

                {paymentMethod === "mobile" ? (
                    <div className="number_container">
                        <p>Phone Number</p>
                        <div className="phonecnt">
                            <input type="text" placeholder="+250 78 123 4567" />
                        </div>
                    </div>
                ) : (
                    <div className="card_container">
                        <p>Card Number</p>
                        <div className="cardcnt">
                            <input type="text" placeholder="1234 5678 9012 3456" />
                        </div>
                    </div>
                )}

                <div className="cardpayment_container">
                    <div className="ticket_price">
                        <p>Ticket Price</p>
                        <p>270 RWF</p>
                    </div>
                    <div className="service_fee">
                        <p>Service Fee</p>
                        <p>30 RWF</p>
                    </div>
                    <hr />
                    <div>
                        <p><b>Total</b></p>
                        <p><b>300 RWF</b></p>
                    </div>
                </div>

                <p>You will receive a prompt on your phone to confirm the payment</p>
                <button className="Pay_btn">Pay Now</button>
            </div>
        </>
    );
};

export default Payment;
