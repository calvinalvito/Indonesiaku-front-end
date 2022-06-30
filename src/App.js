
// import MainDestination from "./components/MainDestination";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
// import Destination from "./pages/Destination";
import Destinasi from "./pages/Destinasi";
import Event from "./pages/Event";
import PageArticle from "./pages/PageArticle";
import "./styles/Header.css";
import UMKM from "./pages/UMKM";
import ButtonScroll from "./components/ButtonScroll";
import PageHotel from "./pages/PageHotel";
import DetailPageStaycasion from "./pages/DetailPage";

import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/destinasi/:id" component={Destinasi} />
        <Route path="/properties/:id" component={DetailPageStaycasion} />
        <Route path="/Event" component={Event} />
        <Route path="/Staycation" component={PageHotel} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/UMKM" component={UMKM} />
        <Route path="/PageArticle" component={PageArticle} />
      </Switch>
      <ButtonScroll />
    </Router>
  );
}

export default App;
