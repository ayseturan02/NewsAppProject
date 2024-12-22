import {currencyToAll, TodosPost} from './../NetworkUrl';
import {get, post} from '../main';

const currencyToAllApi = body => {
  const TodosUrl = currencyToAll + body;
  return get(TodosUrl);
};

const TodosList = () => {
  return get(Todos);
};

const currencyToAllCity = body => {
  const TodosUrl = currencyToAll + body;
  return get(TodosUrl);
};

export default {currencyToAllApi, TodosList, currencyToAllCity};
