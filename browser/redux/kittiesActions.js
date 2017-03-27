import { FETCH_ALL_KITTIES, FETCH_SINGLE_KITTY } from './constants';

export const fetchSingleKittyAction = (kitty) => {
  return {
    type: FETCH_SINGLE_KITTY,
    kitty,
  };
};

export const fetchAllKittiesAction = (allKitties) => {
  return {
    type: FETCH_ALL_KITTIES,
    allKitties,
  };
};
