// Unit Test Code
import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import DataSheet from "./DataSheet";
import ReactDOM from "react-dom";
describe("DataSheet Component", () => {
  // it("should render the component", () => {
  //   const wrapper = mount(<DataSheet />);
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it("should render the tab container", () => {
  //   const wrapper = shallow(<DataSheet />);
  //   expect(wrapper.find('[data-testid="tab_container"]').length).toBe(1);
  // });

  // it("should render the select element", () => {
  //   const wrapper = shallow(<DataSheet />);
  //   expect(wrapper.find("select").length).toBe(1);
  // });

  // it("should render the table element", () => {
  //   const wrapper = shallow(<DataSheet />);
  //   expect(wrapper.find("table").length).toBe(1);
  // });

  // it("should render the ul element", () => {
  //   const wrapper = shallow(<DataSheet />);
  //   expect(wrapper.find("ul").length).toBe(1);
  // });

  // it("should render the p element with para prop", () => {
  //   const para = "This is a sample para"; // passing props to component     // mounting component with props     // finding p tag with data-testid="para"     // checking if text matches with passed props      const wrapper = mount (< DataSheet para={para}/> );      expect (wrapper.find ('[data-testid="para"]').text()).toEqual (para) ; }) ;

  //   it("should render the FormControl component ", () => {
  //     const wrapper = shallow(<DataSheet />);
  //     expect(wrapper.find("FormControl").length).toBe(1);
  //   });

  //   it("should render the InputBase component ", () => {
  //     const wrapper = shallow(<DataSheet />);
  //     expect(wrapper.find("InputBase").length).toBe(1);
  //   });
  // });
  test("shukd render", async () => {
    render(<DataSheet />);
    screen.debug();
  });
});
