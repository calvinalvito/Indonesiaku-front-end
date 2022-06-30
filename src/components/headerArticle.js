import React from "react";
import Logo from "../images/logo/Indonesiaku.png";

export default class HeaderArticle extends React.Component {render(){
  return (
    <header>

      <section>
        <nav>
          <a href="/" target="_blank" className="logo">
            <img src={Logo} alt="Logo Indonesiaku Apps" />
          </a>
          
          <ul className="nav-list">
            <li>
              <a href="/Home" class="active nav-link" id="active">
                Destination{" "}
              </a>{" "}
            </li>{" "}
            <li>
              <a href="/Event" className="nav-link">
                Event
              </a>
            </li>
            <li>
              <a href="/Staycation" className="nav-link">
                Staycation
              </a>
            </li>
            <li>
              <a href="/UMKM" className="nav-link">
                UMKM
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="hero">
        <h1 class="title">
          # <span id="city"> Jogja </span> <span id="tagline">The Neverending Asia</span>
        </h1>
      </div>
    </header>
  );}
}
