import React from "react";
import "../styles/HeroDestination.css";

const HeroDestination = () => {
    return (
      <div className="hero">
        <div className="hero-home">
          <div className="text-title">
            <h1 className="titleWelcome">
              Welcome to Indonesia<span>ku</span>!
            </h1>
          </div>
          <div className="text-subtitle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis egestas urna, sit amet convallis nisi. Fusce
              felis quam, ultricies ac posuere eget, rhoncus quis magna. Proin
              ac lectus eu neque porta lacinia id at enim.
            </p>
          </div>
        </div>
      </div>
    );
}

export default HeroDestination;
