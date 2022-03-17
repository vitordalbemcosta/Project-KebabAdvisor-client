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
          <span className="button-signup">
            <Link to="/signup">
              <Button variant="success" size="lg" disabled>
                Create an account!
              </Button>{" "}
            </Link>
            <Link to="/login">
              <Button variant="danger" size="lg" disabled>
                Login
              </Button>{" "}
            </Link>
          </span>
        </>
      )}
      {loggedIn && (
        <>
          <div className="button-signout">
            <Link to="/" onClick={logoutUser}>
              <Button variant="primary" size="lg" disabled>
                Sign out
              </Button>{" "}
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;


// Nesa pagina vai ser minha landing page... 

// descobrir como eu posso reutilizar os components em paginas diferentes. (important)