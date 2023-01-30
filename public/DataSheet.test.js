import React from "react";
import { shallow, mount } from "enzyme";
import DataSheet from "./DataSheet";
import { render, screen, within } from "@testing-library/react";
import { fireEvent, getAllByTestId, getByTestId } from "@testing-library/dom";
describe("DataSheet", () => {
  //   it('should render correctly in "debug" mode', () => {
  //     const component = shallow(<DataSheet />);
  //     // console.log("component", component);

  //     // expect(component).toMatchSnapshot();
  //   });
  it("should have the tab_container", () => {
    const wrapper = mount(<DataSheet />);
    // const mockfn = jest.fn();
    // const selected = wrapper.find("select");
    // expect(selected.props().value).toBe("10");
    wrapper.find("select").simulate("change", { target: { value: "5" } });
    // selected.simulate("change", { target: { value: "2" } });
    expect(wrapper.find("select").props().value).toBe("5");
  });
  it("should have the paragraph title", () => {
    const para = "yogesh";
    const wrapper = render(<DataSheet para={para} />);
    expect(wrapper.getByTestId("para").textContent).toBe("yogesh");
  });
  it("should render the table component", () => {
    const wrapper = mount(<DataSheet />);
    const table = wrapper.find("table");
    const tbody = wrapper.find("tbody");
    const tr = wrapper.find("tr");
    const td = wrapper.find("td");
    expect(table).toHaveLength(1);
    expect(tbody).toHaveLength(1);
    expect(tr).toHaveLength(1);
    expect(td).toHaveLength(2);
  });
  it("should render the ul and li", () => {
    const wrapper = mount(<DataSheet />);
    expect(wrapper.find(".k")).toBeDefined();
  });
  it("should render list of 5 fruits", () => {
    render(<DataSheet />);
    const list = screen.getByRole("fruitss");
    // , {
    //   name: /fruitss/i,
    // });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    console.log("items.length", items.length);
    expect(items.length).toBe(5);
  });
  it("should render list of 5 fruits", () => {
    render(<DataSheet />);
    const list = screen.getByTestId("myInputselect");
    fireEvent(list, "change");

    expect(list.props().value).toBe("");
  });
});
