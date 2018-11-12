import React from "react";
import { getCityListAPI } from "../api/api";
import Spinner from "./Spinner";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    getCityListAPI()
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }

  render() {
    const { data } = this.state;
    const { handleShowDetails } = this.props;

    if (data === null) {
      return <Spinner />;
    }
    return data.map(city => (
      <div key={city.id} onClick={() => handleShowDetails(city.id)}>
        {city.text}
      </div>
    ));
  }
}
