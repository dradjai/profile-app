import { Col, Container, Row} from "react-bootstrap";

export default function Video() {

  return(
    <section>
      <Container>
        <Row>
          <Col>
          <h2>Video</h2>
          <p>The Drivers of 2023</p>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/MNpr8GXHGA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Col>

        </Row>
      </Container>
    </section>
  )
}