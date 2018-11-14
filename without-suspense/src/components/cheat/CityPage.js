import React from "react";
import Weather from "./CityWeather";
import Recommendations from "./CityRecommendations";
import Info from "./CityInfo";

export default function CityPage({ id, handleBack }) {
  return (
    <>
      <button onClick={handleBack}>⬅︎</button>
      <Info id={id} />
      <Weather id={id} />
      <Recommendations id={id} />
    </>
  );
}
