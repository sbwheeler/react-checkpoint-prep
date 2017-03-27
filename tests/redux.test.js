import { expect } from 'chai';
import { createStore } from 'redux';
import { FETCH_SINGLE_PUPPY, FETCH_ALL_PUPPIES, FETCH_SINGLE_KITTY, FETCH_ALL_KITTIES } from '../browser/redux/constants';
import { fetchSinglePuppyAction, fetchAllPuppiesAction } from '../browser/redux/puppiesActions';
import { fetchSingleKittyAction, fetchAllKittiesAction } from '../browser/redux/kittiesActions';
import puppiesReducer from '../browser/redux/puppiesReducer';
import kittiesReducer from '../browser/redux/kittiesReducer';
import rootReducer from '../browser/redux/rootReducer';

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
      let testPuppyStore;

      beforeEach('Create testing store', () => {
        testPuppyStore = createStore(puppiesReducer);
      });

      it('has the expected initial state', () => {
        const initialPuppyState = testPuppyStore.getState();

        expect(initialPuppyState).to.be.deep.equal({
          allPuppies: [],
          selectedPuppy: {},
        });
      });

      describe('reducing on FETCH_SINGLE_PUPPY', () => {

        it('affects the state by putting the single puppy object on the state\'s selectedPuppy key', () => {
          const singlePuppyAction = fetchSinglePuppyAction(testPuppy);

          testPuppyStore.dispatch(singlePuppyAction);

          expect(testPuppyStore.getState().selectedPuppy).to.be.deep.equal(testPuppy);
        });
      });

      describe('reducing on FETCH_ALL_PUPPIES', () => {
        it('affects the state by putting the all kitties array on the state\'s allKitties key', () => {
          const allPuppiesAction = fetchAllPuppiesAction(testPuppies);

          testPuppyStore.dispatch(allPuppiesAction);

          expect(testPuppyStore.getState().allPuppies).to.be.deep.equal(testPuppies);
        });
      });

    });

    describe('kittiesReducer', () => {
      let testKittyStore;

      beforeEach('Create testing store', () => {
        testKittyStore = createStore(kittiesReducer);
      });

      it('has the expected initial state', () => {
        const initialKittyState = testKittyStore.getState();

        expect(initialKittyState).to.be.deep.equal({
          allKitties: [],
          selectedKitty: {},
        });
      });

      describe('reducing on FETCH_SINGLE_KITTY', () => {

        it('affects the state by putting the single kitty object on the state\'s selectedKitty key', () => {
          const singleKittyAction = fetchSingleKittyAction(testKitty);

          testKittyStore.dispatch(singleKittyAction);

          expect(testKittyStore.getState().selectedKitty).to.be.deep.equal(testKitty);
        });
      });

      describe('reducing on FETCH_ALL_KITTIES', () => {
        it('affects the state by putting the all kitties array on the state\'s allKitties key', () => {
          const allKittiesAction = fetchAllKittiesAction(testKitties);

          testKittyStore.dispatch(allKittiesAction);

          expect(testKittyStore.getState().allKitties).to.be.deep.equal(testKitties);
        });
      });

    });



    //HINT: take a look at where rootReducer is being imported from and check out the Redux docs for 'combineReducers': http://redux.js.org/docs/api/combineReducers.html
    describe('rootReducer', () => {
      let testRootStore;

      beforeEach('Create testing store', () => {
        testRootStore = createStore(rootReducer);
      });

      it('has keys of kitties and puppies', () => {
        const rootStoreState = testRootStore.getState();

        expect(rootStoreState).to.have.property('kitties');
        expect(rootStoreState).to.have.property('puppies');
      });

      it('the kitties and puppies keys have the expected initial states of the kitties and puppies sub-reducers respectively', () => {
        expect(testRootStore.getState().kitties).to.be.deep.equal({
          allKitties: [],
          selectedKitty: {},
        });

        expect(testRootStore.getState().puppies).to.be.deep.equal({
          allPuppies: [],
          selectedPuppy: {},
        });
      });

    });
  });
});
