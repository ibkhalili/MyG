import React, { useState } from "react";

function SignIn() {
  const [values, setValues] = useState({
    firstName: "",
    LastName: "",
    email: "",
  });

 const [submitted, setSubmitted] = useState(false);

  const handelFirstNameChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handelLastNameChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handelEmailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="form-container mt-5 d-flex justify-content-center">
      <form className="register-form" onSubmit={handelSubmit}>
       {submitted ?  <div className="success-message">Thank u for registring</div> : null }
        <input
          onChange={handelFirstNameChange}
          className="form-field"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
        />

       <br></br>
        <input
          onChange={handelLastNameChange}
          className="form-field my-3"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
        />
    
         <br></br>
        <input
          onChange={handelEmailChange}
          className="form-field mb-2"
          placeholder="Email"
          name="email"
          value={values.email}
        />
    
         <br></br>
        <button className="form-field btn btn-success text-center w-100" type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignIn;
