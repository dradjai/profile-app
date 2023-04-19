import { Container, Row, Col } from "react-bootstrap";

export default function Quote() {

  return(
    <section>
     <Container className="quote-container bg-info">
      <Row className="text-center">
        <Col>
         <p><q>“The only true wisdom is in knowing you know nothing. </q></p> - Socrates
        </Col>
      </Row>
     </Container>
    </section>
  )
}