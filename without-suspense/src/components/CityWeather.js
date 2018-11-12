import React from "react";
import { getCityWeatherAPI } from "../api/api";
import Spinner from "./Spinner";

export default class CityWeather extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    getCityWeatherAPI(this.props.id)
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
        <h3>Weather</h3>
        <div>{data.temperature}</div>
      </>
    );
  }
}
