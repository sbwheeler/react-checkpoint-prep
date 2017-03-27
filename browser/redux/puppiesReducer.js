import { FETCH_SINGLE_PUPPY, FETCH_ALL_PUPPIES } from './constants';

const initialState = {
  allPuppies: [],
  selectedPuppy: {},
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_ALL_PUPPIES:
      newState.allPuppies = action.allPuppies;
      break;
    case FETCH_SINGLE_PUPPY:
      newState.selectedPuppy = action.puppy;
      break;
    default:
      return newState;
  }
  return newState;
};
