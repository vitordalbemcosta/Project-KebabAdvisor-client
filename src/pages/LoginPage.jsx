import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import BackgroundLogin from ".././assets/images/profileone.jpg"

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
    <section className="section-1">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${BackgroundLogin})` }}
      >
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <span className="login-lable">
            <label className="text-labels" htmlFor="email">
              {" "}
              Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleemail}
            />

            <label className="text-labels" htmlFor="passwordHash">
              {" "}
              Password
            </label>
            <input
              type="password"
              name="passwordHash"
              value={passwordHash}
              onChange={handlePasswordHash}
            />

            <button type="submit"> Login</button>
          </span>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
 


//REDIRECIONAR PARA O PROFILE ASSIM QUE O USUARIO FIZER O LOG IN
// ESTA INFORMACAO EU POSSO PEGAR DO MEU PROJETO DO IRONKICKS..... 
