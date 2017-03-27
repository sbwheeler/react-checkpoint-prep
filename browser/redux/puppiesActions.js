import { FETCH_ALL_PUPPIES, FETCH_SINGLE_PUPPY } from './constants';

export const fetchSinglePuppyAction = (puppy) => {
  return {
    type: FETCH_SINGLE_PUPPY,
    puppy,
  };
};

export const fetchAllPuppiesAction = (allPuppies) => {
  return {
    type: FETCH_ALL_PUPPIES,
    allPuppies,
  };
};
