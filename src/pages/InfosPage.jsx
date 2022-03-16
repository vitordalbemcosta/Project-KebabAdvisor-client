// nesta pagina eh onde vou puxar informacoes do API

// uma pagina com a foto do restaurante, nome, reviews ao lado direito
// logo abaixo, localizacao, rating...

//a foto poder ser adicionada aos favoritos do perfil .

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function InfosPage() {
  const [information, setInformation] = useState(null);
  const { restaurantId } = useParams();

  console.log(information)

  const fetchApi = async () => {
    try {
         const storedToken = localStorage.getItem("authToken");
         let response = await axios.get(
           `${process.env.REACT_APP_API_URL}/restaurants/${restaurantId}`,
           {
             headers: { Authorization: `Bearer ${storedToken}` },
           }
         );
      let information = response.data;
      setInformation(information);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {information && (
        <>
          <div className="infos-styles">
            <img
              src={information.image}
              alt={information.name}
              style={{ height: "35vh" }}
            />

            <div className="info-infos">
              <p>Name: {information.name}</p>
              <p>Description: {information.description}</p>
              <ul>
                <h5>Ratings:</h5>
                <li>{information.rating} out of 5! </li>
                <li>{information.reviews.rating}</li>
                <li>{information.address}, Lisbon</li>
              </ul>
              <button type="submit"> Delete review! </button>
            </div>

            <div className="reviews-list">
              <h3>Reviews</h3>
              {information.reviews.map((oneReview) => (
                <p>{oneReview.review}</p>
              ))}
            </div>
            <Link to="/randomrestaurant"> {"Back to restaurants"}</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default InfosPage;