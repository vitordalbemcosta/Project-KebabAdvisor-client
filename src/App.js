import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/NavBar/Navbar";
import IsAnon from "./components/IsAnon/IsAnon";
import Footer from "./components/Footer/Footer"
import IsPrivate from "./components/IsPrivate/IsPrivate"
import ProfilePage from "./pages/ProfilePage"
import RandomPage from "./pages/RandomPage"



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
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
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
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
