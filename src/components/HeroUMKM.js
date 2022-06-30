import React, { Component } from "react";
import { Carousel, Badge } from 'react-bootstrap';
import '../styles/HeroDestination.css';
class HeroUMKM extends Component {
	render() {
		return (
			<div>
            <Carousel variant="white">
  <Carousel.Item>
    <img height={600} width="200"
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/373636.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>The Island of Gods</h5>
      <p>Cari Produk UMKM di Bali? Wajib Mampir ke 8 Jenama Lokal Ini!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={600} width="200"
      className="d-block w-100"
      src="https://atourin.obs.ap-southeast-3.myhuaweicloud.com/images/destination/bandung/braga-profile1639293879.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Paris Van Java</h5>
      <p>Cek 5 UMKM Jempolan di Bandung Ini!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={600} width="200"
      className="d-block w-100"
      src="https://madrasahdigital.co/wp-content/uploads/2022/02/Tugu-Jogja-Simbol-Kota-Jogja-Meltyan-Photography.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Jogja The Neverending Asia</h5>
      <p>5 Produk Hasil UMKM Jogja Ini Super Kreatif dan Seru Banget, Lho!.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div bg="dark"> <br></br><hr></hr></div>
<div>
    <center>
<h2>
    UMKM <Badge bg="secondary">IndonesiaKu</Badge> 
    
  </h2>
  <p>IndonesiaKu memiliki rekomendasi umkm</p> 
  </center>
</div>

 </div>
		)
	}
}

export default HeroUMKM;