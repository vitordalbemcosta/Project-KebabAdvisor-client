import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackgroundSignup from '.././assets/images/photo-restaurant.jpg'

function SignupPage() {
  const [email, setemail] = useState('')
  const [passwordHash, setPasswordHash] = useState('')

  const navigate = useNavigate()

  const handlePasswordHash = (e) => setPasswordHash(e.target.value)
  const handleemail = (e) => setemail(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = { email, passwordHash }

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then((response) => {
        navigate('/login')
      })
      .catch((err) => console.log(err))
  }
  return (
    <section className="section-1">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${BackgroundSignup})` }}
      >
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label className="text-labels" htmlFor="email">
            {' '}
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleemail}
          />

          <label className="text-labels" htmlFor="passwordHash">
            {' '}
            Password
          </label>
          <input
            type="passwordHash"
            name="passwordHash"
            value={passwordHash}
            onChange={handlePasswordHash}
          />

          <button type="submit"> Signup</button>
        </form>
      </div>
    </section>
  )
}

export default SignupPage
