import React from "react";
import { getCityRecommendationsAPI } from "../../api/api";
import { unstable_createResource } from "react-cache";

const APIResource = unstable_createResource(getCityRecommendationsAPI);

export default function CityRecommendations({ id }) {
  const data = APIResource.read(id);

  return (
    <>
      <h3>Recommendations</h3>
      <div>{data.recommendations}</div>
    </>
  );
}
