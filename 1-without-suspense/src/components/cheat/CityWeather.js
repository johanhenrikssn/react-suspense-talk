import React from "react";
import { getCityWeatherAPI } from "../../api/api";
import { unstable_createResource } from "react-cache";

const APIResource = unstable_createResource(getCityWeatherAPI);

export default function CityWeather({ id }) {
  const data = APIResource.read(id);

  return (
    <>
      <h3>Current temperature</h3>
      <div>{data.temperature}°</div>
    </>
  );
}
