import React from "react";
import { getCityByIdAPI } from "../api/api";
import Spinner from "./Spinner";

export default class CityInfo extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    getCityByIdAPI(this.props.id)
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
        <h2>{data.text}</h2>
        <h3>Info</h3>
        <i>Population: {data.population}</i>
      </>
    );
  }
}
