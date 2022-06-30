import React, { Component } from "react";
import { Container,Col  } from "react-bootstrap";
import UM from "../data/umkm";
import "../styles/Recommendationsumkm.css";

class Recommendationsumkm extends Component {
	render() {
		return (
			<Container>
            <div className="reccomend-text">
                <h1>Bali</h1>
				<p>Siapa pun tak ada yang bisa menyangkal keindahan yang ditawarkan Pulau Dewata. Baru-baru ini, Bali didapuk menjadi destinasi paling populer di dunia versi Tripadvisor Travellers’ Choice tahun 2021. Tentu saja, bentangan alamnya yang indah berpadu sempurna dengan kearifan lokalnya yang istimewa menjadikan Bali sebagai destinasi #DiIndonesiaAja yang patut Sobat kunjungi setidaknya sekali seumur hidup!</p>
            </div>
			<div className="reccomend-text">
                <h1>Cari Produk UMKM di Bali? Wajib Mampir ke 8 Jenama Lokal Ini!</h1>
				<p>Pulau Dewata memang juara dalam destinasi pariwisata, baik di Indonesia maupun di dunia. Nah, selain itu Sobat Pesona tahu nggak nih, kalau Pulau Seribu Pura ini juga bikin harum nama Indonesia melalui produk-produk berkualitasnya? Bahkan, kelihaian para pengrajin dan pengusaha Bali berhasil memajukan UMKM Bali di pasar internasional, lho.
				</p>
				<p>
				Buat Sobat Pesona yang pengin cari buah tangan untuk keluarga atau sahabat, pas banget nih! Ini 8 jenama lokal yang bisa jadi pilihan buah tangan terbaik dan penuh kenangan dari Bali. Yuk, dicatat!
				</p>
				</div>
				{UM.map((value,  index)  => {
								return (
									<Col>
									<div key={index + 1} className="reccomend-text">
									<h1>{value.nama}</h1>
											<img src={value.gambar} alt={value.nama} className="reccomend-img-umkm" />
											<p >{value.paragraf}</p>
									</div>
									</Col>
								);
							})}			
							<div></div>
			</Container>
		)
	}
}

export default Recommendationsumkm;