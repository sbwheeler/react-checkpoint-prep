import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import SinglePuppyComponent from '../browser/react/components/SinglePuppy';


describe('React', () => {

  describe('SinglePuppy component layout', () => {
    let SinglePuppyComponentWrapper;

    //this is creating a wrapper around our SinglePuppyComponent that we can then test on
    beforeEach('Create <SinglePuppyComponent /> wrapper for testing', () => {
      const puppy = { name: 'Damon Doggo', adorableness: 5, size: 'small' };
      
      SinglePuppyComponentWrapper = shallow(<SinglePuppyComponent puppy={puppy}/>);
    });

    it('has an H1 tag with the puppy\'s name', () => {
      expect(SinglePuppyComponentWrapper.find('h1')).to.have.html('<h1>Name: Damon Doggo</h1>');
    });

    it('has an H2 tag with the puppy\'s adorableness level', () => {
      expect(SinglePuppyComponentWrapper.find('h2')).to.have.html('<h2>Adorableness Level: 5</h2>');
    });

    it('has a P tag with the puppy\'s size', () => {
      expect(SinglePuppyComponentWrapper.find('p')).to.have.html('<p>Size: small</p>');
    });

    it('is not hardcoded', () => {
      const newPuppy = { name: 'Ian Woofro', adorableness: 2, size: 'puny' };
      const newSinglePuppyWrapper = shallow(<SinglePuppyComponent puppy={newPuppy}/>);

      expect(newSinglePuppyWrapper.find('h1')).to.have.html('<h1>Name: Ian Woofro</h1>');
      expect(newSinglePuppyWrapper.find('h2')).to.have.html('<h2>Adorableness Level: 2</h2>');
      expect(newSinglePuppyWrapper.find('p')).to.have.html('<p>Size: puny</p>');
    });
  });


});
