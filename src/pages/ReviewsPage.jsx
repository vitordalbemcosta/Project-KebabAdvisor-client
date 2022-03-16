// AINDA NAO SEI MUITO BEM O QUE QUERO FAZER AQUI... 

/// USUARIO PODE DEIXAR COMENTARIOS PARA QUALQUER RESTAURANTES... 
// ESSSES COMENTARIOS VAO IR PARA UMA PAGINA COM A FOTO DO RESTAURANTE E O COMENTARIO
// DO USUARIO LOGO ABAIXO.... 

import React, { useState, useContext, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";



function ReviewsPage() {
  const [review, setReview] = useState("");
  const { restaurantId } = useParams();
  const [rating, setRating] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [getRandomKebab, setGetRandomKebab] = useState(null);

  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();    
    const body = { user: user._id, review, rating, restaurant:restaurantId };

    console.log(body)

    axios
      .post(`${process.env.REACT_APP_API_URL}/reviews`, body,           {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setReview("");
        setRating("");
      })
      .then(() => navigate(`/infos/${restaurantId}`))
      .catch((err) => console.log(err));
  };

    const fetchApi = async () => {
      try {
        const storedToken = localStorage.getItem("authToken");
        let response = await axios.get(
          `${process.env.REACT_APP_API_URL}/restaurants/${restaurantId}`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );
        let restaurantsFromApi = response.data;
        setGetRandomKebab(restaurantsFromApi);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchApi();
    }, []);
  

  return (
    <div>
      {getRandomKebab && (
        <>
          <h1> Leave you review for bellow </h1>
          <img
            src={getRandomKebab.image}
            alt={review.review}
            style={{ height: "35vh" }}
          />
          <div className="info">
            <p><b>{getRandomKebab.name}</b></p>
            <p>Current rating: {getRandomKebab.rating}</p>
            <ul>
              <h5> Let us know your experience </h5>
            </ul>
            <form onSubmit={handleSubmit}>
              <label htmlFor="review">Your review</label>
              <textarea
                name="review"
                id=""
                cols="30"
                rows="10"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>

              <button type='submit'>Submit your review </button>
            </form>
          </div>
          <Link to="/randomrestaurant"> {"Back to restaurants"}</Link>
        </>
      )}
    </div>
  );
}

export default ReviewsPage