import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import axios from 'axios'

function InfosPage() {
  const [information, setInformation] = useState(null)
  const { restaurantId } = useParams()
  const { user } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken')

  let navigate = useNavigate()

  console.log(information)

  const fetchApi = async () => {
    try {
      const storedToken = localStorage.getItem('authToken')
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/restaurants/${restaurantId}`,
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

  useEffect(() => {
    fetchApi()
  }, [])

  const handleDeleteReview = (reviewId) => {
    console.log('clicking', reviewId)
    axios
      .delete(`${process.env.REACT_APP_API_URL}/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate(`/randomrestaurant`))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {information && (
        <>
          <div className="infos-styles-reviews">
            <img
              src={information.image}
              alt={information.name}
              style={{ height: '50vh' }}
            />

            <div className="info-infos">
              <p>
                <b>{information.name}</b>
              </p>
              <p>{information.description}</p>
              <p>{information.address}, Lisbon</p>
              <p>{information.rating} ⭐️ out of 5! </p>
            </div>

            <div className="reviews-list">
              <ul>
                <h1>Reviews</h1>
              </ul>
              {information.reviews.map((oneReview) => (
                <ul>
                  <h3>
                    <i> - "{oneReview.review}"</i>
                  </h3>
                  <div className="button-delete-review">
                    <button onClick={() => handleDeleteReview(oneReview._id)}>
                      Delete Review
                    </button>
                  </div>
                </ul>
              ))}
            </div>
            <Link to="/randomrestaurant"> {'Back to restaurants'}</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default InfosPage
