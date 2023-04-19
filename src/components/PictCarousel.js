import { Carousel, Col, Container, Row } from "react-bootstrap";

export default function PictCarousel() {

  return (
    <section>
      <Container className="carousel-container">
        <Row>
          <Col sm={12} className="p-0">
            <Carousel fade>
              <Carousel.Item>
                <img src="https://picsum.photos/300/200/?random=1"
                  className="d-block w-100"
                  alt="slide1"/>
                  <Carousel.Caption>
                    <h2>First Item</h2>
                    <p>First item are great because they are the first.</p>
                  </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img src="https://picsum.photos/300/200/?random=2"
                  className="d-block w-100"
                  alt="slide1"/>
                  <Carousel.Caption>
                    <h2>Second Item</h2>
                    <p>First item are great because they are the first.</p>
                  </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <img src="https://picsum.photos/300/200/?random=3"
                  className="d-block w-100"
                  alt="slide1"/>
                  <Carousel.Caption>
                    <h2>Third Item</h2>
                    <p>First item are great because they are the first.</p>
                  </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Col>

        </Row>

      </Container>

    </section>

  )
}