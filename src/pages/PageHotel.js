import React, { Component } from "react";
import Header from "../components/Header";
import MostPicked from "../components/MostPicked-Staycasion";
import Categories from "../components/Categories-Staycasion";
import Footer from "../components/Footer";
import HeroStaycasion from "../components/Hero-Staycasion";
import { fetchPage } from "../store/actions/page";
import { connect } from "react-redux";

class PageHotel extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    document.title = "Indonesiaku | Staycasion";
    window.scrollTo(0, 0);

    if (!this.props.page.pageHotel)
      this.props.fetchPage(`http://server-staycasion.herokuapp.com/api/v1/member/landing-page`, "pageHotel");
  }
    render() {
      const { page } = this.props;
      console.log(page);
    if (!page.hasOwnProperty("pageHotel")) return null;
        return (
          <>
            <Header {...this.props}></Header>
            <HeroStaycasion />
            <MostPicked
              refMostPicked={this.refMostPicked}
              data={page.pageHotel.mostPicked}
            />
            <Categories data={page.pageHotel.category} />
            <Footer />
          </>
        );
      }
    }

    const mapStateToProps = (state) => ({
      page: state.page,
    });
    
    export default connect(mapStateToProps, { fetchPage })(PageHotel);
