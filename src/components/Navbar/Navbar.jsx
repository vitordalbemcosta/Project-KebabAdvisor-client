import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { ThemeContext } from "../../context/theme.context";
import { AuthContext } from "../../context/auth.context";
import './navbar.css';
import axios from 'axios';



function NavBarLoggedIn() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState("38");
  const [lon, setLon] = useState("-9");


  const fetchWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    setWeatherData(`${Math.ceil(response.data.main.temp - 273.15)}oC`);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <nav id="navbars">
        <div className="nav-wrapper">
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            {!loggedIn && (
              <>
                <li>
                  <Link to="/signup">SignUp</Link>
                </li>
                <li>
                  <Link to="/login">LogIn</Link>
                </li>
                <li>
                  <div class="blink_me">
                    <p>{weatherData}</p>
                  </div>
                </li>
              </>
            )}
            {loggedIn && (
              <>
                <li>
                  <Link to="/randomrestaurant">All Restaurants</Link>
                </li>
                {/* <li>
                  <Link to="/profile">Profile</Link>
                </li> */}
                <li>
                  <Link to="/" onClick={logoutUser}>
                    Sign out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <div className="menuIcon">
        <span className="icon icon-bars"></span>
        <span className="icon icon-bars overlay"></span>
      </div>

      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBarLoggedIn;