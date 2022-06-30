import React, { Component } from "react";
import Header from "../components/Header";
import HeroDestination from "../components/HeroDestination";
import MainDestination from "../components/MainDestination";
import Recommendations from "../components/Recommendations";
class Destination extends Component {
	render() {
		return (
			<>
				<Header />
				<HeroDestination />
				<MainDestination/>
				<Recommendations/>
			</>
		)
	}
}

export default Destination;