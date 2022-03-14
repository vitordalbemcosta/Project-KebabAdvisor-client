import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/NavBar/Navbar";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import ProfilePage from "./pages/ProfilePage";
import RandomPage from "./pages/RandomPage";
import BestRatedPage from "./pages/BestRatedPage";
import InfosPage from "./pages/InfosPage";
import Reviewspage from "./pages/ReviewsPage";
// import Cover from "./components/Cover/Cover";
// import About from "./components/About/About";
import LandingPageTwo from "./components/LandingPageTwo/LandingPageTwo";
import LandingPageOne from "./components/LandingPageOne/LandingPageOne";


function App() {
  return (
    <div className="App">
      <Navbar />
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
          path="/infos"
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
          path="/reviews"
          element={
            <IsPrivate>
              {" "}
              <Reviewspage />{" "}
            </IsPrivate>
          }
        />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
