import React from "react";
import "../styles/Destinasi.css";
import data from "../data/destinasi.json";

const HeroDestinasi = (props) => {
  const destinations = data.destinations;
  return (
    <div>
      {" "}
      {destinations
        .filter((destinasi) => destinasi.id == props.destinasiID)
        .map((filteredDestinations) => (
          <div
            className="hero-section"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(70, 70, 70, 0.5)),url('/images/hero/${filteredDestinations.hero}')`,
            }}
          >
            <div className="hero-text">
              <h1 className="header-text"> {filteredDestinations.tag} </h1>{" "}
            </div>{" "}
          </div>
        ))}{" "}
    </div>
  );
};

export default HeroDestinasi;
