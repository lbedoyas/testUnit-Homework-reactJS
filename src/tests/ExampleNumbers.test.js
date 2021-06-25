import React from 'react';
import { shallow } from "enzyme";
import ExampleNumbers from '../ExampleNumbers';

describe('get data select', () => {
    const wrapper = shallow(<ExampleNumbers />);
    const selectValues = wrapper.find('option').at(0);
    console.log(selectValues);
});