import React, { Component } from "react";
import Logo from "../images/logo/Indonesiaku.png"
import { Navbar, Container} from 'react-bootstrap'
import data from '../data/destinasi.json';

class Header extends Component {
	render() {
		const destinations = data.destinations;
		return (
			<header>
				 <Navbar collapseOnSelect expand="lg" variant="dark">
					<Container>
						<Navbar.Brand href="/"><img src={Logo} alt="Logo Indonesiaku Apps" /></Navbar.Brand>
					</Container>
				</Navbar>
			</header>
		)
	}
}

export default Header;