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
import "../App.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";



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
      setGetRandomKebab(restaurantsFromApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
          <h1 className="heading-restaurants">WE HAVE GOT YOU! 🍔</h1>
          <p className="p-restaurants"> Here is a list of the most famous Kebab Shops in Lisbon!
              add you favourites to your profile page and leave a comment! Help other users to know more about
          these restaurants</p>

          <Row xs={2} sm={3} className="m-4">
        {getRandomKebab
          .filter((a, b) => b < 24)

          
          .map((i) => {
            return (
              <Col key={i._id}>
                <Card className="h-100" style={{ width: "27rem" }}>
                  <Card.Body>
                    <Link to={"/infos/" + i._id} >
                      <Card.Img
                        variant="top"
                        src={i.image}
                        style={{ height: "30vh" }}
                      />
                    </Link>
                    <Card.Title className="title-card"> {i.name} </Card.Title>
                    <Card.Text> {i.address}</Card.Text>
                    <Card.Text> {i.description}</Card.Text>
                    <Card.Text> {i.rating} out of 5!</Card.Text>
                    <Card.Text>
                      <Link to="/profile">
                        <Button variant="secondary" size="lg" disabled>
                          Add to favorites
                        </Button>{" "}
                      </Link>
                    </Card.Text>
                    <Card.Text>
                      <Link to="/reviews">
                        <Button variant="secondary" size="md" disabled>
                          Leave a review!
                        </Button>{" "}
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default RandomPage;