import {GiDonerKebab} from 'react-icons/gi'
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { MdRateReview } from "react-icons/md";
import styled from "styled-components";

const IconTag = styled.section`
  .my-react-icons {
    height: 50px;
    width: 50px;
  }
`;

function LandingPageTwo() {
  return (
    <IconTag className="section-2">
      <div>
        <GiDonerKebab className="my-react-icons" />
        <h4>Find Kebab shops in Lisbon</h4>
        <p></p>
      </div>

      <div>
        <BsFillHandThumbsUpFill className="my-react-icons" />
        <h4>Easy to use</h4>
        <p>Create an account, find multile shops and save them with you!</p>
      </div>

      <div>
        <MdRateReview className="my-react-icons" />
        <h4>Interact with other users</h4>
        <p>
          Leave a review about your experience at the kebab shop you have been
          to
        </p>
      </div>
    </IconTag>
  );
}

export default LandingPageTwo;