import {GiDonerKebab} from 'react-icons/gi'
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import styled from "styled-components";
import "../../App.css"

const IconTag = styled.section`
  .my-react-icons {
    height: 50px;
    width: 50px;
  }
`;

function LandingPageTwo() {
  return (
    <div className="section-all">
      <IconTag className="section-2">
        <div>
          <GiDonerKebab className="my-react-icons" />
          <h4>Lisbon's</h4>
          <p>The most visited shops in Lisbon</p>
          <p>bla bla bla</p>
        </div>

        <div>
          <BsFillHandThumbsUpFill className="my-react-icons" />
          <h4>Easy to use</h4>
          <p>Create an account, find multile shops and save them with you!</p>
          <p>bla bla bla</p>
        </div>

        <div>
          <MdRateReview className="my-react-icons" />
          <h4>Interact with other users</h4>
          <p>
            Leave a review about your experience at the kebab shop you have been
            to
          </p>
          <p>
            bla bla lbaslbla bla
          </p>
        </div>
      </IconTag>
    </div>
  );
}

export default LandingPageTwo;