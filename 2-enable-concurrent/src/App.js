import React, { Component, lazy, Suspense } from "react";
import "./App.css";
// import CitiesList from "./components/List";
// import CityPage from "./components/CityPage";
import Spinner from "./components/Spinner";
const CitiesList = lazy(() => import("./components/List"));
const CityPage = lazy(() => import("./components/CityPage"));

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
      <Suspense fallback={<Spinner />}>
        <div className={"App"}>
          <h1>Cities</h1>
          <Suspense fallback={<Spinner />}>
            {showDetails ? (
              <CityPage handleBack={this.handleBack} id={selectedId} />
            ) : (
              <CitiesList handleShowDetails={this.handleShowDetails} />
            )}
          </Suspense>
        </div>
      </Suspense>
    );
  }
}
