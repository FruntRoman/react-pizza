import data from '../../db.json';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  dispatch(setPizzas(data.pizzas));
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
