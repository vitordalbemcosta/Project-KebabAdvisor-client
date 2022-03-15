 // VOU PUXAR QUALQUER REASTAURANTE ALEATORIO DA ARRAY DE RESTAURANTES E
 // USAR AQUI COMO  "ESSA EH A NOSSA RECOMENDACAO PARA VOCE IR CONHECER"
 // PUXAR FOTO, REVIEWS, DESCRICAO, COMENTARIOS.... ETC
 // USUARIO PODE ADICIONAR A RECOMENDACAO PARA SUA LISTA DE FAVORITOS NO
// PERFIL OU PODE NEGAR A RECOMENDACAO E ASSIM GERAR UM OUTRO RESTAURANTE ALEATORIO....

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function RandomPage() {
  const [getRandomKebab, setGetRandomKebab] = useState([]);

  const fetchApi = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      let restaurantsFromApi = response.data;
      setGetRandomKebab(restaurantsFromApi[Math.floor(Math.random() * getRandomKebab.length)]);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
        fetchApi();
        
    }, []);

  return (
    <>
      <h1>WE HAVE GOT YOU!</h1>
      <p>This is our randommized restaurant suggestion for you to check out </p>
      <Row xs={2} sm={3} className="m-4">
        {/* {getRandomKebab.map((i) => {
                  return ( */}
        <Col key={getRandomKebab._id}>
          <Card className="h-100" style={{ width: "27rem" }}>
            <Card.Body>
              <Card.Img
                variant="top"
                src={getRandomKebab.image}
                style={{ height: "35vh" }}
              />
              <Card.Title>Name: {getRandomKebab.name} </Card.Title>
              <Card.Text>Address: {getRandomKebab.address}</Card.Text>
              <Card.Text>
                You can find here: {getRandomKebab.description}
              </Card.Text>
              <Card.Text>
                Current rating: {getRandomKebab.rating} out of 5!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default RandomPage;