import React, { Component } from "react";
import ButtonScroll from "../components/ButtonScroll";
import Header from "../components/Header";
import HeroDestination from "../components/HeroDestination";
import MainDestination from "../components/MainDestination";
import Recommendations from "../components/Recommendations";
import Footer from "../components/Footer";

class Destination extends Component {
	

	render() {
		return (
			<div>
				<Header />
				<HeroDestination />
				<section>
					<MainDestination/>
				</section>
				<section>
					<Recommendations/>
				</section>
				<ButtonScroll/>
				<Footer/>
			</div>
		)
	}
}

export default Destination;