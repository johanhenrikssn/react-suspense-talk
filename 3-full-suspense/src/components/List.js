import React from "react";
import { getCityListAPI } from "../api/api";
import { unstable_createResource } from "react-cache";

const APIResource = unstable_createResource(getCityListAPI);

export default function List({ handleShowDetails }) {
  const data = APIResource.read();

  return data.map(city => (
    <div key={city.id} onClick={() => handleShowDetails(city.id)}>
      {city.text}
    </div>
  ));
}
