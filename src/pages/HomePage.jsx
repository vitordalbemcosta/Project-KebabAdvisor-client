import React, {useContext} from "react";
import LandingPageOne from "../components/LandingPageOne/LandingPageOne";
import LandingPageTwo from "../components/LandingPageTwo/LandingPageTwo";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";



function HomePage() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <LandingPageOne />
      <LandingPageTwo />

      {!loggedIn && (
        <>
          <Link to="/signup">
            <Button variant="primary" size="lg" disabled>
              Create an account!
            </Button>{" "}
          </Link>
          <Link to="/login">
            <Button variant="secondary" size="lg" disabled>
              Login
            </Button>{" "}
          </Link>
        </>
      )}
      {loggedIn && (
        <>
        <Link to="/" onClick={logoutUser}>
          <Button variant="primary" size="lg" disabled>
            Log out
          </Button>{" "}
          </Link>
          </>
      )}
    </>
  );
}

export default HomePage;


// Nesa pagina vai ser minha landing page... 

// descobrir como eu posso reutilizar os components em paginas diferentes. (important)