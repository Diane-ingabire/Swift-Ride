import React from "react";
const SignUpForm = () =>{
  const person = [
    {
      Name:"",
      email:"",
      password:"",
      confirmpassword: "",
    }
  ]
  return(
    <>
    <div className="SignUpForm">
      <form action="submit">
      <input type="text" value={person.Name} placeholder="enter the username"/>
      <input type="test" value={person.password} placeholder="enter the username"/>
      <input type="text" value={person.confirmpassword} placeholder="enter the username"/>
      </form>
    </div>

    </>
  )
};
export default SignUpForm