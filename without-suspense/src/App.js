import React, { Component } from "react";
import CitiesList from "./components/List";
import OfficeDetails from "./components/CityPage";

export default class Home extends Component {
  state = {
    selectedId: null
  };

  handleShowDetails = id => {
    this.setState({ selectedId: id });
  };

  handleBackClick = () => {
    this.setState({ selectedId: null });
  };

  render() {
    const { selectedId } = this.state;

    return (
      <div>
        <h1>Cities</h1>
        {!selectedId ? (
          <CitiesList handleShowDetails={this.handleShowDetails} />
        ) : (
          <OfficeDetails handleBack={this.handleBackClick} id={selectedId} />
        )}
      </div>
    );
  }
}
