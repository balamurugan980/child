import React from "react";
import { shallow } from "enzyme";
import Child from "./Child";

describe("Child", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Child />);
    expect(wrapper).toMatchSnapshot();
  });
});
