import React, { Component } from "react";
import Logo from "../images/logo/Indonesiaku.png"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import data from '../data/destinasi.json';

class Header extends Component {
	render() {
		const destinations = data.destinations;
		return (
			<header>
				 <Navbar collapseOnSelect expand="lg" variant="dark">
					<Container>
						<Navbar.Brand href="/"><img src={Logo} alt="Logo Indonesiaku Apps" /></Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ms-auto">
								<NavDropdown title="Destinasi" id="collasible-nav-dropdown">
									{destinations.map((destinasi) => (
										<NavDropdown.Item key={destinasi.id} href={`/destinasi/${destinasi.id}`}>{destinasi.city}</NavDropdown.Item>
									))}
								</NavDropdown>
								<Nav.Link href="/Staycation">Staycation</Nav.Link>
								<Nav.Link href="/Umkm">UMKM</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				{/* <nav >
					<a href="/" className="logo">
						<img src={Logo} alt="Logo Indonesiaku Apps" />
					</a>
					<Nav className="justify-content-end">
					<Nav.Item className="nav-list justify-content-end">
						<Nav.Link href="/" className="active nav-link" id="active">Destination</Nav.Link>
						<Nav.Link href="/Event" className="nav-link">Event</Nav.Link>
						<Nav.Link href="/Staycation" className="nav-link">Staycation</Nav.Link>
						<Nav.Link href="/UMKM" className="nav-link">UMKM</Nav.Link>
					</Nav.Item>
					</Nav>
				</nav> */}
	  
			</header>
		)
	}
}

export default Header;