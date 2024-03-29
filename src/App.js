import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import ProfilePage from "./pages/ProfilePage";
import RandomPage from "./pages/RandomPage";
import BestRatedPage from "./pages/BestRatedPage";
import InfosPage from "./pages/InfosPage";
import Reviewspage from "./pages/ReviewsPage";
import BackGroundAll from "./assets/images/background-all.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        className="bg-all-pages"
        style={{ backgroundImage: `url(${BackGroundAll})` }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <IsAnon>
                {" "}
                <SignupPage />
              </IsAnon>
            }
          />
          <Route
            path="/login"
            element={
              <IsAnon>
                {" "}
                <LoginPage />
              </IsAnon>
            }
          />
          <Route
            path="/randomrestaurant"
            element={
              <IsPrivate>
                <RandomPage />
              </IsPrivate>
            }
          />
          <Route
            path="/profile"
            element={
              <IsPrivate>
                <ProfilePage />
              </IsPrivate>
            }
          />
          <Route
            path="/infos/:restaurantId"
            element={
              <IsPrivate>
                {" "}
                <InfosPage />
              </IsPrivate>
            }
          />
          <Route
            path="/bestrated"
            element={
              <IsPrivate>
                <BestRatedPage />
              </IsPrivate>
            }
          />
          <Route
            path="/reviews/:restaurantId"
            element={
              <IsPrivate>
                {" "}
                <Reviewspage />{" "}
              </IsPrivate>
            }
          />
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
