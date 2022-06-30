import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/Header-staycasion";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Footer from "../components/Footer";

import { checkoutBooking } from "../store/actions/checkout";
import { fetchPage } from "../store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props
        .fetchPage(
          `/detail-page/${this.props.match.params.id}`,
          this.props.match.params.id
        )
        .then((response) => {
          document.title = `Staycation | ${response.title}`;
        });
  }

  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "", pageHref: "" }
    ];

    return (
      <>
        <Header {...this.props} />
        <br/><br/><br/><br/>
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
                <PageDetailDescription data={page[match.params.id]} />
            </div>
            <div className="col-5">
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
