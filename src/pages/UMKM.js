import React, { Component } from "react";
import Header from "../components/Header";
import HeroUMKM from "../components/HeroUMKM";
import MainUMKM from "../components/MainUMKM";
import Recommendationsumkm from "../components/recommendationsumkm";

class UMKM extends Component {
	render() {
		return (
			<div>
				<Header />
				<HeroUMKM/>
				<MainUMKM/>
				<Recommendationsumkm/>
			</div>
			
		)
	}
}

export default UMKM;