import React, { Component } from "react";
import CitiesList from "./components/List";
import OfficeDetails from "./components/CityPage";

export default class Home extends Component {
  state = {
    selectedOfficeId: null,
    showDetail: false
  };

  handleShowDetails = id => {
    this.setState({ selectedOfficeId: id, showDetail: true });
  };

  handleBackClick = () => {
    this.setState({ selectedOfficeId: null, showDetail: false });
  };

  render() {
    const { showDetail, selectedOfficeId } = this.state;

    return (
      <div>
        <h1>Cities</h1>
        {!showDetail ? (
          <CitiesList handleShowDetails={this.handleShowDetails} />
        ) : (
          <OfficeDetails
            handleBack={this.handleBackClick}
            id={selectedOfficeId}
          />
        )}
      </div>
    );
  }
}
