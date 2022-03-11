import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

function LoginPage() {
  const [email, setemail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlePasswordHash = (e) => setPasswordHash(e.target.value);
  const handleemail = (e) => setemail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, passwordHash };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        console.log('res.data', response.data);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"> Email</label>
        <input type="text" name="email" value={email} onChange={handleemail} />

        <label htmlFor="passwordHash"> Password</label>
        <input type="password" name="passwordHash" value={passwordHash} onChange={handlePasswordHash} />

        <button type="submit"> Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
