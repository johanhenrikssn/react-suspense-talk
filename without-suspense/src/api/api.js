import fixture from "./all";
import byId from "./byId";
import weatherByCity from "./weather";
import recommendationsByCity from "./recommendations";

const getCityList = () => fixture;
const getCityById = id => byId[id];
const getCityWeather = id => weatherByCity[id];
const getCityRecommendations = id => recommendationsByCity[id];

function getRandomResponseTime() {
  const MIN = 500;
  const MAX = 3000;
  return Math.random() * (MAX - MIN) + MIN;
}

export const getCityListAPI = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getCityList());
    }, getRandomResponseTime());
  });
};

export const getCityByIdAPI = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getCityById(id));
    }, getRandomResponseTime());
  });
};

export const getCityWeatherAPI = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getCityWeather(id));
    }, getRandomResponseTime());
  });
};

export const getCityRecommendationsAPI = id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(getCityRecommendations(id));
    }, getRandomResponseTime());
  });
};
