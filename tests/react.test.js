import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';
import { FETCH_SINGLE_PUPPY, FETCH_ALL_PUPPIES, FETCH_SINGLE_KITTY, FETCH_ALL_KITTIES } from '../browser/redux/constants';
import { fetchSinglePuppyAction, fetchAllPuppiesAction } from '../browser/redux/puppiesActions';
import { fetchSingleKittyAction, fetchAllKittiesAction } from '../browser/redux/kittiesActions';
import SinglePuppyComponent from '../browser/react/components/SinglePuppy';
import SingleKittyComponent from '../browser/react/components/SingleKitty';
import AllCuteAnimalsComponent from '../browser/react/components/AllCuteAnimals';
import store from '../browser/redux/store';

describe('React', () => {

  describe('SinglePuppy component layout', () => {
    let SinglePuppyComponentWrapper;

    //this is creating a wrapper around our SinglePuppyComponent that we can then test on
    beforeEach('Create <SinglePuppyComponent /> wrapper for testing', () => {
      const puppy = { name: 'Damon Doggo', adorableness: 5, size: 'small' };

      SinglePuppyComponentWrapper = shallow(<SinglePuppyComponent puppy={puppy}/>);
    });

    it('has the expected layout', () => {
      expect(SinglePuppyComponentWrapper.find('h1')).to.have.html('<h1>Damon Doggo</h1>');
      expect(SinglePuppyComponentWrapper.find('h2')).to.have.html('<h2>Adorableness Level: 5</h2>');
      expect(SinglePuppyComponentWrapper.find('p')).to.have.html('<p>Size: small</p>');
    })

    it('is not hardcoded, and will render differently if passed in a different puppy prop', () => {
      const newPuppy = { name: 'Ian Woofro', adorableness: 2, size: 'puny' };
      const newSinglePuppyWrapper = shallow(<SinglePuppyComponent puppy={newPuppy}/>);

      expect(newSinglePuppyWrapper.find('h1')).to.have.html('<h1>Ian Woofro</h1>');
      expect(newSinglePuppyWrapper.find('h2')).to.have.html('<h2>Adorableness Level: 2</h2>');
      expect(newSinglePuppyWrapper.find('p')).to.have.html('<p>Size: puny</p>');
    });
  });

    describe('SingleKitty component layout', () => {
    let SingleKittyComponentWrapper;

    //this is creating a wrapper around our SinglePuppyComponent that we can then test on
    beforeEach('Create <SingleKittyComponent /> wrapper for testing', () => {
      const kitty = { name: 'Ian Meowro', adorableness: 1, size: 'medium' };

      SingleKittyComponentWrapper = shallow(<SingleKittyComponent kitty={kitty}/>);
    });

    it('has the same layout as the SinglePuppy component', () => {
      expect(SingleKittyComponentWrapper.find('h1')).to.have.html('<h1>Ian Meowro</h1>');
      expect(SingleKittyComponentWrapper.find('h2')).to.have.html('<h2>Adorableness Level: 1</h2>');
      expect(SingleKittyComponentWrapper.find('p')).to.have.html('<p>Size: medium</p>');
    });

    it('is not hardcoded, and will render differently if passed in a different kitty prop', () => {
      const newKitty = { name: 'John MeowDonald', adorableness: 8, size: 'big' };
      const newSingleKittyWrapper = shallow(<SingleKittyComponent kitty={newKitty}/>);

      expect(newSingleKittyWrapper.find('h1')).to.have.html('<h1>John MeowDonald</h1>');
      expect(newSingleKittyWrapper.find('h2')).to.have.html('<h2>Adorableness Level: 8</h2>');
      expect(newSingleKittyWrapper.find('p')).to.have.html('<p>Size: big</p>');
    });
  });
});
