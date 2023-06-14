import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function ProfilePage() {
  const [currentUser, setCurrentUser] = useState(null)
  const [information, setInformation] = useState([])

  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  let navigate = useNavigate()

  const fetchUser = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/profile`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        },
      )
      setCurrentUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchApi = async () => {
    try {
      const storedToken = localStorage.getItem('authToken')
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        },
      )
      let information = response.data
      setInformation(information)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteReview = (reviewId) => {
    console.log('clicking', reviewId)
    axios
      .delete(`${process.env.REACT_APP_API_URL}/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate(`/profile`))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchUser()
    fetchApi()
  }, [])

  console.log(currentUser)

  return (
    <>
      {currentUser && (
        <>
          <Row xs={2} sm={3} className="m-4"></Row>
          {information.map((myreviews) => {
            return (
              <Col key={myreviews._id}>
                <Card className="h-100" style={{ width: '25rem' }}>
                  <Card.Body>
                    <Link to={'/infos/' + myreviews._id}>
                      <Card.Img
                        variant="top"
                        src={myreviews.image}
                        style={{ height: '30vh' }}
                      />
                    </Link>
                    <Card.Title className="title-card">
                      {' '}
                      {myreviews.name}{' '}
                    </Card.Title>
                    <Card.Text> {myreviews.description}</Card.Text>
                    <Card.Text>
                      <Link to="/profile"></Link>
                    </Card.Text>
                    <Card.Text>
                      <Link to={`/reviews/${myreviews._id}`}>
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
          <section className="profile-section">
            <h1> Welcome!</h1>
          </section>
          <section>
            <h2>My Reviews</h2>

            {currentUser.reviews.map((review) => (
              <div>
                <p>{review.review}</p>
                <p>{review.rating}</p>
                <Link to={'/reviews'}>
                  <button onClick={() => handleDeleteReview(review._id)}>
                    Delete Review
                  </button>
                </Link>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  )
}

export default ProfilePage
