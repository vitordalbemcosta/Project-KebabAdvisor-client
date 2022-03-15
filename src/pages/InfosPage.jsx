// nesta pagina eh onde vou puxar informacoes do API

// uma pagina com a foto do restaurante, nome, reviews ao lado direito
// logo abaixo, localizacao, rating...

//a foto poder ser adicionada aos favoritos do perfil .

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function InfosPage() {
  const [information, setInformation] = useState(null);
  const { name } = useParams();

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  const fetchData = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants`
      );
      let information = response.data;
      setInformation(information);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Link to="/"> {"<- Back"}</Link>
      {information && (
        <>
          <h1>{capitalize(setInformation.name)}</h1>
          <img
            src={setInformation.sprites.other["official-artwork"].front_default}
            alt={setInformation.name}
          />

          <div className="info">
            <p>Name: {setInformation.name}</p>
            <p>Description: {setInformation.description}</p>
            <ul>
              <h5>Ratings:</h5>
              {setInformation.types.map((type) => (
                <li>{capitalize(setInformation.rating)}</li>
              ))}
            </ul>
        
          </div>
        </>
      )}
    </div>
  );
}

export default InfosPage;