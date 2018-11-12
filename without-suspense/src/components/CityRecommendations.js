import React from "react";
import { getCityRecommendationsAPI } from "../api/api";
import Spinner from "./Spinner";

export default class CityRecommendations extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    getCityRecommendationsAPI(this.props.id)
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }

  render() {
    const { data } = this.state;

    if (data === null) {
      return <Spinner />;
    }
    return (
      <>
        <h3>Recommendations</h3>
        <div>{data.recommendations}</div>
      </>
    );
  }
}
