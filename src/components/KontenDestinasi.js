import React from "react";
import "../styles/Destinasi.css";
import data from "../data/destinasi.json";
import parse from "html-react-parser";
import { Col, Container, Row } from "react-bootstrap";
import Maps from "./MapsArticle";

const KontenDestinasi = (props) => {
  const destinations = data.destinations;
  return (
    <Container>
      {destinations
        .filter((destinasi) => destinasi.id == props.destinasiID)
        .map((filteredDestinations) => (
          <Row className="mt-5 mb-4">
            <Col lg="8">
              <p className="title">{filteredDestinations.city}</p>
              <p className="konten-intro">{filteredDestinations.intro1}</p>
              <p className="title2">{filteredDestinations.title2}</p>
              <p className="konten-intro">{filteredDestinations.intro2}</p>
              {filteredDestinations.destination.map((filteredDestination) => (
                <div>
                  <p className="nama-destinasi">{filteredDestination.name}</p>
                  <img
                    className="img-wisata"
                    alt=""
                    src={require(`../images/other/${filteredDestination.img_folder}/${filteredDestination.picture}`)}
                  ></img>
                  <div className="description">
                    {parse(filteredDestination.description)}
                  </div>
                </div>
              ))}
            </Col>
            <Col lg="4">
              <Maps maps={filteredDestinations.maps} />
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default KontenDestinasi;
