import { expect } from 'chai';
import { FETCH_SINGLE_PUPPY, FETCH_ALL_PUPPIES, FETCH_SINGLE_KITTY, FETCH_ALL_KITTIES } from '../browser/redux/constants';
import { fetchSinglePuppyAction, fetchAllPuppiesAction } from '../browser/redux/puppiesActions';
import { fetchSingleKittyAction, fetchAllKittiesAction } from '../browser/redux/kittiesActions';

describe('Redux', () => {
  const testPuppies = [{ name: 'damon doggo', adorableness: 5 }, { name: 'sam shiba', adorableness: 10 }];
  const testPuppy = { name: 'damon doggo', adorableness: 5 };

  const testKitties = [{ name: 'ian meowro', adorableness: 2 }, { name: 'omri kittycat', adorableness: 8 }];
  const testKitty = { name: 'ian meowro', adorableness: 1 };

  describe('Action creators', () => {

    describe('fetchSinglePuppyAction', () => {

      it('creates the expected action', () => {
        const createdSinglePuppyAction = fetchSinglePuppyAction(testPuppy);

        expect(createdSinglePuppyAction).to.be.deep.equal({
          type: FETCH_SINGLE_PUPPY,
          puppy: testPuppy,
        });

      });
    });

    describe('fetchAllPuppiesAction', () => {

      it('creates the expected action', () => {
        const createdAllPuppiesAction = fetchAllPuppiesAction(testPuppies);

        expect(createdAllPuppiesAction).to.be.deep.equal({
          type: FETCH_ALL_PUPPIES,
          allPuppies: testPuppies,
        });

      });
    });

    describe('fetchSingleKittyAction', () => {

      it('creates the expected action', () => {
        const createdSingleKittyAction = fetchSingleKittyAction(testKitty);
        
        expect(createdSingleKittyAction).to.be.deep.equal({
          type: FETCH_SINGLE_KITTY,
          kitty: testKitty,
        });

      });
    });

    describe('fetchAllKittiesAction', () => {

      it('creates the expected action', () => {
        const createdAllKittiesAction = fetchAllKittiesAction(testKitties);

        expect(createdAllKittiesAction).to.be.deep.equal({
          type: FETCH_ALL_KITTIES,
          allKitties: testKitties,
        });

      });
    });
  });

  describe('Reducers', () => {

    describe('puppiesReducer', () => {

    });

    describe('kittiesReducer', () => {

    });

    describe('rootReducer', () => {

    });
  })
});
