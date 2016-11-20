import { INCREASE } from '../actions/counter';

const initialState = {
  count: 0,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
  case INCREASE:
    return Object.assign({}, state, {
      count: state.count + 1,
    });
  default:
    return state;
  }
}
