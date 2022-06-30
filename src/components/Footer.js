import React from "react";

import Button from "../elements/Button";
import '../assets/scss/style.scss';
import Logo from "../images/logo/Indonesiaku.png"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
          <img src={Logo} alt="Logo Indonesiaku Apps" />
            <p className="brand-tagline">
              Selalu merekomendasikan yang terbaik untuk pengalaman liburan yang berkesan
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Pusat Bantuan</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Call Center
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Saran & Kritik
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Destinasi
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Event
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  UMKM
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  indonesiaku@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622122081996">
                  00-99-88-77
                </Button>
              </li>
              <li className="list-group-item">
                <span>Indonesiaku, Surakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2022 • All rights reserved • indonesiaku
          </div>
        </div>
      </div>
    </footer>
  );
}
