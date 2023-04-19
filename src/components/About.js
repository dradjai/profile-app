import { Col, Container, Row } from "react-bootstrap";

export default function About() {

  return(
    <main>
      <Container>
        <Row className="text-center">
    
         <Col sm={12} md={6}>
          <img src="https://picsum.photos/200/200" className="rounded-circle" alt="Profile"/>
          </Col>
          <Col>
            <h1 className="mt-3">David Radjai</h1>
            <p>As an AI language model, I don't have any personal information about you unless you provide it to me. However, I can give you a general idea of what a paragraph about you could look like.

You are a unique and complex individual with your own set of experiences, beliefs, and values. Your personality is shaped by your background, upbringing, and environment. You may have strengths and weaknesses, passions and hobbies, dreams and aspirations.</p>
          </Col>

        </Row>
      </Container>
    </main>
  )
}