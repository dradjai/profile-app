import { Container, Row, Col } from "react-bootstrap";

export default function Grid() {

  return(
    <section>
      <Container className="grid-container">
        <Row>
        <Col sm={12} md={4}>
          <h2 className="text-center">Why Bocacode?</h2>
          <p>Bocacode is a reputable and reliable technology and coding bootcamp that offers comprehensive programs in software development and digital marketing. Here are some reasons why you may want to choose Bocacode.</p>
        </Col>

        <Col sm={12} md={4}>
          <h2 className="text-center">Exciting Project?</h2>
          <p>Building a Mobile App: Develop a mobile app that solves a problem or provides a unique user experience. It could be anything from a productivity tool to a game or social networking app.</p>
        </Col>

        <Col>
        <h2 className="text-center">Ideal Work Place?</h2>
        <p>Positive Work Environment: A positive work environment with a supportive culture, open communication, and opportunities for collaboration can help foster a sense of community and encourage employee engagement.</p>
        </Col>

        </Row>
        </Container>
    </section>
  )
}