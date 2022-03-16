// WELCOME @USER
// FAVORITE RESTAURANTES
//LEAVE A REVIEW... 
// REMOVE FROM FAVOURITES... 
// GO TO BEST RATED...
// GET A RANDOM RESTAURANT....
//

// import { Link } from "react-router-dom";
// import styled from "styled-components";
import React, {useContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from 'axios';
// import ProfilePicOne from ".././assets/images/profileone.jpg";
// import ProfilePicTwo from ".././assets/images/profiletwo.jpg";
// import ProfilePicThree from ".././assets/images/profilethree.jpg";



function ProfilePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem('authToken');

  let navigate = useNavigate();

  const fetchUser = async () => {
    try {
        let response = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/profile`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );
        setCurrentUser(response.data);
    } catch (error) {
        console.log(error);
    }
};

const handleDeleteReview = (reviewId) => {
  console.log('clicking', reviewId)
  axios.delete(
    `${process.env.REACT_APP_API_URL}/reviews/${reviewId}`,
    {
      headers: { Authorization: `Bearer ${storedToken}` },
    }
  )
  .then(() => navigate(`/profile`))
  .catch(err => console.log(err))

  
}

useEffect(() => {
    fetchUser();

}, []); 

  console.log(currentUser)

    return (
      <>
      {currentUser && (
           <>
      <section className="profile-section">
      <h1> Welcome!</h1>
    </section>
    
    <section>
      <h2>My Reviews</h2>

      {currentUser.reviews.map(review => (
        <div>
          <p>{review.review}</p>
          <p>{review.rating}</p>
          {/* <button onClick={() => handleEditReview(review._id) }>Edit Review</button> */}
          <button onClick={() => handleDeleteReview(review._id) }>Delete Review</button>
        </div>
      ))}

    </section>F
    </>
      )}
      </>
    );
}

export default ProfilePage;
