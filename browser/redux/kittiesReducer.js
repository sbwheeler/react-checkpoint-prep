import { FETCH_SINGLE_KITTY, FETCH_ALL_KITTIES } from './constants';

const initialState = {
  allKitties: [],
  selectedKitty: {},
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_ALL_KITTIES:
      newState.allKitties = action.allKitties;
      break;
    case FETCH_SINGLE_KITTY:
      newState.selectedKitty = action.kitty;
      break;
    default:
      return newState;
  }
  return newState;
};
