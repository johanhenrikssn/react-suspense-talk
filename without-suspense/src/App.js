import React, { Component } from "react";
import "./App.css";
import CitiesList from "./components/List";
import CityPage from "./components/CityPage";

export default class Home extends Component {
  state = {
    selectedId: null,
    showDetails: false
  };

  handleShowDetails = id => {
    this.setState({ selectedId: id, showDetails: true });
  };

  handleBack = () => {
    this.setState({ selectedId: null, showDetails: false });
  };

  render() {
    const { selectedId, showDetails } = this.state;

    return (
      <div className={"App"}>
        <h1>Cities</h1>
        {showDetails ? (
          <CityPage handleBack={this.handleBack} id={selectedId} />
        ) : (
          <CitiesList handleShowDetails={this.handleShowDetails} />
        )}
      </div>
    );
  }
}
