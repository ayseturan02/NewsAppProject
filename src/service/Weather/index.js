import {getWeather, TodosPost} from './../NetworkUrl';
import {get, post} from '../main';

const getWeatherApi = body => {
  const TodosUrl = getWeather + body;
  return get(TodosUrl);
};

const TodosList = () => {
  return get(Todos);
};

const getWeatherCity = body => {
  const TodosUrl = getWeather + body;
  return get(TodosUrl);
};

export default {getWeatherApi, TodosList, getWeatherCity};
