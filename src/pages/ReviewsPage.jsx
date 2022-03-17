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
      .post(`${process.env.REACT_APP_API_URL}/reviews`, body, {
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
          <div className="infos-styles-reviews">
            <img
              src={getRandomKebab.image}
              alt={review.review}
              style={{ height: "50vh" }}
            />
            <div className="info-infos">
              <p>
                <b>{getRandomKebab.name}</b>
              </p>
              <p>Current rating {getRandomKebab.rating} ⭐️ </p>
            </div>

            <div className="info-infos">
              <h3> Let us know your experience </h3>
            </div>

            <form onSubmit={handleSubmit}>
              <textarea
                name="review"
                id=""
                cols="80"
                rows="10"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
              <div className="button-submit">
                <button type="submit">Submit review </button>
              </div>
            </form>
            <Link to="/randomrestaurant"> {"Back to restaurants"}</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewsPage