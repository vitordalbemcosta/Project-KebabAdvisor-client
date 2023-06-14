import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function RandomPage() {
  const [getRandomKebab, setGetRandomKebab] = useState([])

  const fetchApi = async () => {
    try {
      const storedToken = localStorage.getItem('authToken')
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        },
      )
      let restaurantsFromApi = response.data
      setGetRandomKebab(restaurantsFromApi)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <h1 className="heading-restaurants">WE HAVE GOT YOU! </h1>
      <p className="p-restaurants">
        {' '}
        Here are the most famous Kebab Shops in Lisbon!
      </p>
      <p className="p-restaurants">
        {' '}
        Leave a review to help other users learn more about these restaurants
      </p>

      <Row xs={2} sm={3} className="m-4">
        {getRandomKebab
          .filter((a, b) => b < 24)

          .map((i) => {
            return (
              <Col key={i._id}>
                <Card className="h-100" style={{ width: '25rem' }}>
                  <Card.Body>
                    <Link to={'/infos/' + i._id}>
                      <Card.Img
                        variant="top"
                        src={i.image}
                        style={{ height: '30vh' }}
                      />
                    </Link>
                    <div className="padding-name"></div>
                    <Card.Title className="title-card"> {i.name} </Card.Title>
                    <Card.Text> {i.description}</Card.Text>
                    <Card.Text>
                      {' '}
                      <b> {i.rating} ⭐️ </b>
                    </Card.Text>
                    <Card.Text>
                      <Link to="/profile"></Link>
                    </Card.Text>
                    <Card.Text>
                      <Link to={`/reviews/${i._id}`}>
                        <Button variant="danger" size="lg" disabled>
                          Leave a review!
                        </Button>{' '}
                      </Link>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
      </Row>
    </>
  )
}

export default RandomPage
