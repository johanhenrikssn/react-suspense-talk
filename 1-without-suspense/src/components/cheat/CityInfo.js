import React from "react";
import { getCityByIdAPI } from "../../api/api";
import { unstable_createResource } from "react-cache";

const APIResource = unstable_createResource(getCityByIdAPI);

export default function CityInfo({ id }) {
  const data = APIResource.read(id);

  return (
    <>
      <h2>{data.text}</h2>
      <h3>Info</h3>
      <i>Population: {data.population}</i>
    </>
  );
}
