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
      <Link to="/"> {"<- Back"}</Link>
      {information && (
        <>
          <h1>{information.name}</h1>
          {/* <img
            src={information.sprites.other["official-artwork"].front_default}
            alt={information.name}
          /> */}

          <div className="info">
            <p>Name: {information.name}</p>
            <p>Description: {information.description}</p>
            <ul>
              <h5>Ratings:</h5>
                <li>{information.rating}</li>
            </ul>
        
          </div>
        </>
      )}
    </div>
  );
}

export default InfosPage;