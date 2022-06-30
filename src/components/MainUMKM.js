/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Container,Row,Col,  } from "react-bootstrap";
import "../styles/Recommendationsumkm.css";

class MainUMKM extends Component {
	render() {
		return (
			<Container>
				<Row>
			<Col className="reccomend-card">
				<img src="https://www.pkpberdikari.id/wp-content/uploads/2021/04/UMKM-Naik-Kelas.jpg" className="reccomend-img"/>
			</Col>
			<Col className="reccomend-card">
				<div className="reccomend-text">
					<h5>Rekomendasi UMKM</h5>
					<h3>UMKM Indonesia</h3>
					<h6>The Best reccomended place umkm in Indonesia</h6>
                        <p>Tidak lengkap rasanya jika Traveling kesuatu tempat tanpa membawa oleh-oleh dan mencicipi makanan dari daerah tersebut,
                            maka dari itu IndonesiaKu merekomendasikan beberapa tempat umkm Rekomendasi untuk dicoba dan juga bisa dijadigakan oleh-oleh,
                            sebagai kenangan sudah datang ke tempat tersebut, inilah beberapa tempat yang menjadi salah satu rekomendasi dalam menyiapkan sesuatu
                            yang akan kalian cicipi beberapa saat dalam mengunjungi beberapa tempat destinasi wisata yang sudah direkomendasikan oleh IndonesiaKu
							Mari kita cek beberapa Rekomendasi jajanan dan oleh-oleh beragam dari seluruh tempat yang ada di Indonesia dan juga dalam rangka
							memajukan UMKM-UMKM yang ada di Indonesia agar lebih maju untuk kedepannya
					</p>
				</div>
			</Col>
			</Row>
			</Container>
		)
	}
}

export default MainUMKM;