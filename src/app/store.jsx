import { createStore } from 'redux';
import counter from 'reducers/counter';

const store = () => {
// const persistendData = loadState();
// const middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
   // middlewares.push();
  }
  return createStore(
    counter
  );
};

export default store;
