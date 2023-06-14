import React from 'react'
import { GiDonerKebab } from 'react-icons/gi'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { MdRateReview } from 'react-icons/md'
import styled from 'styled-components'

const IconTag = styled.section`
  .my-react-icons {
    height: 100px;
    width: 80px;
  }
`

function LandingPageTwo() {
  return (
    <div className="section-all">
      <IconTag className="section-2">
        <div className="icon-one-pagetwo">
          <GiDonerKebab className="my-react-icons" />
          <h1>Lisbon's finest</h1>
          <p>Location and more!</p>
        </div>

        <div className="icon-two-pagetwo">
          <BsFillHandThumbsUpFill className="my-react-icons" />
          <h1>Easy to use</h1>
          <p>Create an account and find multile shops</p>
        </div>

        <div className="icon-three-pagetwo">
          <MdRateReview className="my-react-icons" />
          <h1>Interact with other users</h1>
          <p>Review the shops you have been to</p>
        </div>
      </IconTag>
    </div>
  )
}

export default LandingPageTwo
