import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import styled from 'styled-components'

const SectionTag = styled.section`
  min-height: 100vh;
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  .card-body {
    text-align: center;
  }
`

function About() {
  return (
    <SectionTag>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fkebabhouse-esposende.com%2Fproduct%2Fpizza-kebab%2F&psig=AOvVaw2Rwx9SvKpnEbA9VyrFswzn&ust=1647350260782000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjVp4vYxfYCFQAAAAAdAAAAABAD"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://place-puppy.com/300x300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://place-puppy.com/300x300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://place-puppy.com/300x300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </SectionTag>
  )
}

export default About
