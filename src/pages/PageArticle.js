import React from "react";
import "../styles/Article.css";
import ItemDestination from "../components/itemArticle";
import Maps from "../components/MapsArticle";
class PageArticle extends React.Component {
  render() {
    return (
      <body>
        <main>
          <article>
            <ItemDestination />
          </article>{" "}
          <div id="map-canvas">
            <Maps />
          </div>{" "}
        </main>{" "}
      </body>
    );
  }
}

export default PageArticle;
