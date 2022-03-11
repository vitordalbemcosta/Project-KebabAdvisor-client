import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const [email, setemail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const navigate = useNavigate();

  const handlePasswordHash = (e) => setPasswordHash(e.target.value);
  const handleemail = (e) => setemail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, passwordHash };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleemail}
        />

        <label htmlFor="passwordHash"> Password</label>
        <input
          type="passwordHash"
          name="passwordHash"
          value={passwordHash}
          onChange={handlePasswordHash}
        />

        <button type="submit"> Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
