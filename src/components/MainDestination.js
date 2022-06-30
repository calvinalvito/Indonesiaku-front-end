import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import destination from "../data/Destination.js";
import "../styles/MainHome.css";

class MainDestination extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2 className="title-text"> Destinasi Pilihan </h2>
            <p className="descrip-text">
              Temukan keindahan Indonesia dengan mengunjungi destinasi pilihan
            </p>
          </Col>
        </Row>
        <Row>        
          {destination.map((value, index) => {
            return (
              <Col lg="3" key={value.id}>
                <Link to={`/destinasi/${value.id}`}>
                  <Card className="bg-dark text-white card-destinasi">
                    <Card.Img
                      className="card-image"
                      src={value.gambar}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Text className="text-center">
                        {value.nama}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MainDestination;
