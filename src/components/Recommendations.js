/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Col, Button, Card, Row, Container } from "react-bootstrap";
import "../styles/Recommendations.css";
import bali from "../images/content/balli-reccomend.jpg";
import ukm1 from "../images/content/UKM-1.jpg";
import ukm2 from "../images/content/UKM-2.jpeg";
import ukm3 from "../images/content/UKM-3.jpg";
import ukm4 from "../images/content/UKM-4.jpg";

class Recommendations extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="reccomend-card">
            <img src={bali} className="reccomend-img" />
          </Col>{" "}
          <Col className="reccomend-card">
            <div className="reccomend-text">
              <h5> Rekomendasi Destinasi </h5> <h3> Wonderfull Bali </h3>{" "}
              <h6> The Best Place for A Beach Vocation </h6>{" "}
              <p>
                {" "}
                Siapa pun tak ada yang bisa menyangkal keindahan yang ditawarkan
                Pulau Dewata.Baru - baru ini, Bali didapuk menjadi destinasi
                paling populer di dunia versi Tripadvisor Travellers’ Choice
                tahun 2021. Tentu saja, bentangan alamnya yang indah berpadu
                sempurna dengan kearifan lokalnya yang istimewa menjadikan Bali
                sebagai destinasi# DiIndonesiaAja yang patut Sobat kunjungi
                setidaknya sekali seumur hidup!
              </p>{" "}
              <Button variant="success"> Read More </Button>{" "}
            </div>{" "}
          </Col>{" "}
        </Row>{" "}
        <Col>
          <h3> Rekomendasi UMKM </h3>{" "}
          <p>
            {" "}
            Temukan pernak penik pilihan yang dibuat langsung oleh warga sekitar
            destinasi{" "}
          </p>{" "}
          <Row >
            <Card style={{ width: "18rem" }} className="cardukm">
              <Card.Img variant="top" src={ukm1} className="imgukm" />
              <Card.Body>
                <Card.Text> 20 - 11 - 2022 </Card.Text>{" "}
                <Card.Title> UMKM Bali yang wajib didatangi! </Card.Title>{" "}
              </Card.Body>{" "}
              <Button variant="success"> Read More </Button>{" "}
            </Card>{" "}
            <Card style={{ width: "18rem" }} className="cardukm">
              <Card.Img variant="top" src={ukm2} className="imgukm" />
              <Card.Body>
                <Card.Text> 20 - 11 - 2022 </Card.Text>{" "}
                <Card.Title>
                  {" "}
                  Cari oleh - oleh ? Cek 5 UMKM dari Bandung ini!{" "}
                </Card.Title>{" "}
              </Card.Body>{" "}
              <Button variant="success"> Read More </Button>{" "}
            </Card>{" "}
            <Card style={{ width: "18rem" }} className="cardukm">
              <Card.Img variant="top" src={ukm3} className="imgukm" />
              <Card.Body>
                <Card.Text> 20 - 11 - 2022 </Card.Text>{" "}
                <Card.Title>
                  {" "}
                  Rekomendasi UMKM legenda yang ada di Surakarta{" "}
                </Card.Title>{" "}
              </Card.Body>{" "}
              <Button variant="success"> Read More </Button>{" "}
            </Card>{" "}
            <Card style={{ width: "18rem" }} className="cardukm">
              <Card.Img variant="top" src={ukm4} className="imgukm" />
              <Card.Body>
                <Card.Text> 20 - 11 - 2022 </Card.Text>{" "}
                <Card.Title> Simak UMKM unik dari tanah NTT </Card.Title>{" "}
              </Card.Body>{" "}
              <Button variant="success"> Read More </Button>{" "}
            </Card>{" "}
          </Row>{" "}
          <Row className="rating">
            <Col>
              <img src="https://img.alinea.id/img/content/2019/01/05/24169/film-keluarga-cemara-nostalgia-drama-keluarga-yang-segar-2l2GpenZgh.jpg" />
            </Col>{" "}
            <Col>
              <h2> Apa kata mereka ? </h2> <h6> ⭐⭐⭐⭐⭐ </h6>{" "}
              <p className="ratingtext">
                {" "}
                Perjalanan liburan yang sangat menyenangkan tidak sabar untuk
                liburan selanjutnya{" "}
              </p>{" "}
              <p className="ratingnama"> Budi, Product Manager </p>{" "}
              <Button variant="success"> Read Their Story </Button>{" "}
            </Col>{" "}
          </Row>{" "}
        </Col>{" "}
      </Container>
    );
  }
}

export default Recommendations;
