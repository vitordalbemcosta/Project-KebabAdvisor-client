// BEST RATED RESTAURANTS
//VOU PEGAR RESTAURANTES DA ARRAY DE RESTAURANTES
//QUE TENHAM NO MINIMO 4.5 DE REVIEWS......

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



import styled from "styled-components";

const SectionTag = styled.section`
.card-body {
    text-align: center;
}
.card-image-top {
    width: 100%;
    object-fit: cover;
}

`



function BestRatedPage() {
    const [best, setBest] = useState([]);

    const fetchApi = async () => {
        try {
            const storedToken = localStorage.getItem('authToken');
            let response = await axios.get(
              `${process.env.REACT_APP_API_URL}/restaurants`,
              {
                headers: { Authorization: `Bearer ${storedToken}` },
              }
            );
            let restaurantsFromApi = response.data;
            setBest(restaurantsFromApi);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi();
    
    }, []); 

    return (
    <SectionTag>
      <h1>Best Rated Restaurants!</h1>
      <Row xs={2} sm={3} className="m-4">
        {best
          .filter((a, b) => b < 24)
          .map((i) => {
            return (
              <Col key={i._id}>
                <Card className="h-100" style={{ width: "27rem" }}>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={i.image}
                      style={{ height: "35vh" }}
                    />
                    <Card.Title>Name: {i.name} </Card.Title>
                    <Card.Text>Address: {i.address}</Card.Text>
                    <Card.Text>You can find here: {i.description}</Card.Text>
                    <Card.Text>Current rating: {i.rating} out of 5!</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </SectionTag>
  );
}


export default BestRatedPage;
